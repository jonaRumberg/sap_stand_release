import '@ui5/webcomponents-icons/dist/status-completed.js'
import '@ui5/webcomponents-icons/dist/alert.js'
import '@ui5/webcomponents-icons/dist/error.js'

import { AnalyticalTable, DateRangePicker, Icon, Input, Switch, Text, TextAlign, Title, Toolbar, ToolbarSpacer } from "@ui5/webcomponents-react";
import { useEffect, useState } from 'react';
import { OrderPopOver } from "../components/OrderPopOver";
import { HeaderBar } from '../components/HeaderBar';
import { useLocation } from 'react-router-dom';


const OrderOverview = () => {
    const [open, setOpen] = useState(false)
    const [searchValue, setSearchValue] = useState("")


    const orders = [
                    {
                        status: 0,
                        date: '2024-03-15T00:00:00.000Z',
                        type: 'Liter Glucosesirup',
                        quant: 5,
                    },
                    {
                        status: 0,
                        date: '2024-03-16T00:00:00.000Z',
                        type: 'Plastikverpackung',
                        quant: 10,
                    },
                    {
                        status: 2,
                        date: '2024-03-17T00:00:00.000Z',
                        type: 'Farbiges Papier',
                        quant: 15,
                    },
                    {
                        status: 0,
                        date: '2024-03-18T00:00:00.000Z',
                        type: 'Fass Öl',
                        quant: 30,
                    },
                    {
                        status: 2,
                        date: '2024-03-19T00:00:00.000Z',
                        type: 'Rolle Stoff',
                        quant: 8,
                    },
                    {
                        status: 0,
                        date: '2024-03-17T00:00:00.000Z',
                        type: 'Farbiges Papier',
                        quant: 15,
                    },
                    {
                        status: 0,
                        date: '2024-03-20T00:00:00.000Z',
                        type: 'Glasflasche',
                        quant: 6,
                    },
                    {
                        status: 0,
                        date: '2024-03-27T00:00:00.000Z',
                        type: 'Farbiges Papier',
                        quant: 5,
                    }

                ]
    const additionalOrder = {
                               status: 1,
                               date: '2024-03-20T00:00:00.000Z',
                               type: 'Glucose',
                               quant: 2,
                            }



    const [orderOpen, setOrderOpen] = useState(false)
    const [data, setData] = useState(orderOpen ? [additionalOrder, ...orders] : orders);
    const location = useLocation()

    const getOrderPlaced = async () => {
        
        try {
            const response = await fetch('http://localhost:4000/getOrderPlaced'); 
            console.log(response)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
            const result = await response.text();
            console.log(result)
                if(result == 'true'){
                    setOrderOpen(true)
                } 

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    useEffect(() => {
        getOrderPlaced()
            }, [location])
    
    useEffect(()=>{
        console.log("changing data. Order open: ", orderOpen)
        if(orderOpen){
            setData([additionalOrder, ...orders])

        } else {
            setData(orders)
        }

    },[orderOpen])

    // let eventSource: EventSource;
    // setTimeout(() => {
    //
    //     eventSource = new EventSource('http://localhost:4000/events');
    //     eventSource.onmessage = (event) => {
    //        if(JSON.parse(event.data).message == "place order"){
    //             setOrderOpen(true)
    //        } else {
    //            console.log(JSON.parse(event.data))
    //        }
    //     }
    //
    // }, 2000)

    return (
        <>
            <HeaderBar title={'Bestellübersicht'}
                quest={'Lege eine neue Bestellung an'}
                progressbar={true}
                progress={50} >
            </HeaderBar>
            <div
                style={{ padding: "1em" }}
            >
            <Title style={{paddingBottom: "1em"}}>Einkaufsaufträge</Title>
            <Toolbar>
                <Text>Suche: </Text>
                <Input
                    placeholder='Suche'
                    icon={<Icon name="search"/>}
                    onChange={value => setSearchValue(value.target.value)}
                />
                <Text>Datum auswählen: </Text>
                <DateRangePicker
                    onChange={function _a(){}}
                    onInput={function _a(){}}
                    onValueStateChange={function _a(){}}
                    primaryCalendarType="Gregorian"
                    valueState="None"
                    placeholder='Von - Bis'
                />
                <ToolbarSpacer/>
                <Text>Zeige abgeschlossene Aufträge:</Text>
                <Switch checked={true}/>
            </Toolbar>

                <AnalyticalTable
                    globalFilterValue={searchValue}
                    columns={[
                        {
                            Header: 'Status',
                            accessor: 'status',
                            width: 1,
                            Cell: (instance: any) => {
                                let icon;
                                if (instance.cell.value == 0) {
                                    icon = <Icon name="status-completed" design='Positive' />
                                }
                                else if (instance.cell.value == 1) {
                                    icon = <Icon name="alert" design='Critical' />
                                }
                                else {
                                    icon = <Icon name="error" design='Negative' />
                                }

                                return icon;
                            }

                        },

                        {
                            Header: 'Datum',
                            accessor: 'date',
                            sortType: 'datetime',
                            Cell: (instance: any) => {
                                const d = new Date(Date.parse(instance.cell.value))
                                return d.toISOString().slice(0, 10)
                            },

                            filter(rows, _columnIds, _filterValue) {
                                rows.forEach(row => {

                                    console.log(Date.parse(row.values.date))
                                })

                                return rows
                            },

                        },
                        {
                            Header: 'Typ',
                            accessor: 'type'

                        },
                        {
                            Header: 'Menge',
                            accessor: 'quant',
                            hAlign: TextAlign.End,

                        },
                    ]}
                    data={data}
                    filterable
                
                onRowClick={(instance: any) => {
                    console.log(instance.detail.row.values)
                    if(instance.detail.row.values.status == 1){
                        setOpen(true)
                    }
                }}
            />
            </div>
            <OrderPopOver
                open={open}
                product={"Glucose"}
                quantity={3}
                unit={"ml"}
                onClose={async ()=>{
                    try {
                        const response = await fetch('http://localhost:4000/finishOrder'); 
                        console.log(response)
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }

                    } catch (error) {
                        console.error('Error fetching data:', error);
                    }
                    setOpen(false)
                }}
            >
            </OrderPopOver>
        </>
    );

}

export default OrderOverview;
