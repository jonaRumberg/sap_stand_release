import '@ui5/webcomponents-icons/dist/status-completed.js'
import '@ui5/webcomponents-icons/dist/alert.js'
import '@ui5/webcomponents-icons/dist/error.js'

import { AnalyticalTable, Icon } from "@ui5/webcomponents-react";
import { useState, useEffect } from 'react';

const OrderOverview = () => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:4000/orders');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

     useEffect(() => {
        fetchData();
    }, []);

     const eventSource = new EventSource('http://localhost:4000/events');
     eventSource.onmessage = (event) => {
        if(JSON.parse(event.data).message == "reload"){
            fetchData();
        } else {
            console.log(JSON.parse(event.data))
        }
     }

    return (
        <>
            <AnalyticalTable
                columns={[
                    {
                        Header: 'Status',
                        accessor: 'status',
                        width: 1,
                        Cell: (instance) => {
                            let icon;
                            if(instance.cell.value == 0) {
                                icon = <Icon name="status-completed" design='Positive'/>
                            }
                            else if(instance.cell.value == 1) {
                                icon = <Icon name="alert" design='Critical'/>
                            }
                            else {
                                icon = <Icon name="error" design='Negative'/>
                            }

                            return icon;
                        }

                    },

                    {
                        Header: 'Datum',
                        accessor: 'date'

                    },
                    {
                        Header: 'Typ',
                        accessor: 'type'

                    },
                    {
                        Header: 'Menge',
                        accessor: 'quant',
                        hAlign: 'End',

                    },
                ]}
                data={data}
                onRowClick={(instance: any) => console.log(instance.detail.row.values)}
                
            />

        </>
    );

}

export default OrderOverview;
