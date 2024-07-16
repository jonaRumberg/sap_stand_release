import '@ui5/webcomponents-icons/dist/status-completed.js'
import '@ui5/webcomponents-icons/dist/alert.js'
import '@ui5/webcomponents-icons/dist/error.js'

import { AnalyticalTable, Icon } from "@ui5/webcomponents-react";

const OrderOverview = () => {

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
                data={[
                    {
                        status: 0,
                        date: '18.12.2004',
                        type: 'Glucose',
                        quant: 2,
                    },
                    {
                        status: 1,
                        date: '18.12.2004',
                        type: 'Glucose',
                        quant: 4,
                    },
                    {
                        status: 2,
                        date: '18.12.2004',
                        type: 'Glucose',
                        quant: 4,
                    }

                ]}
                onRowClick={(instance: any) => console.log(instance.detail.row.values)}
                
            />

        </>
    );

}

export default OrderOverview;
