import { Bar, Button, CheckBox, Dialog, FlexBox, Form, FormGroup, FormItem, Input, Label, Select, SelectDialog, SelectDomRef, StandardListItem, Table, TableCell, TableColumn, TableRow, TextArea, Title } from "@ui5/webcomponents-react"
import { useRef, useState } from "react"

export const OrderPopOver = ({open, product, quantity, unit}: {open: boolean, product: string, quantity: int, unit: String}) => 
    {
        const dialog = useRef<SelectDomRef>(null);
        const [sendingDuration, setsendingDuration] = useState(0);
        const onSend = () => {
            setsendingDuration(6);
        };

    return (
        <>
            <Dialog
                resizable={true}
                open={open}
                style={{
                    width: "80%",
                    height: "70%"
                }}
                
                className="footerPartNoPadding"
                footer={
                    <Bar    
                        design="Footer" 
                        endContent={
                            <Button onClick={onSend} design="Emphasized">
                                Bestellen
                            </Button>
                        }
                    />
                }
                headerText="Bestellung anlegen"
                onAfterClose={function _a(){}}
                onAfterOpen={function _a(){}}
                onBeforeClose={function _a(){}}
                onBeforeOpen={function _a(){}}
            >
                <Form
                    columnsL={2}
                    columnsM={2}
                    columnsS={2}
                    columnsXL={2}
                    >
                    <FormGroup titleText="Anfragedaten">
                        <FormItem label="Produkt">
                            <Input disabled
                                type="Text"
                                value={product}
                            />
                        </FormItem>
                        <FormItem label="Benötigte Anzahl">
                            <Input
                                disabled
                                type="Text"
                                value={quantity.toString() + " " + unit}
                            />
                        </FormItem>
                    </FormGroup>
                    
                    <FormGroup
                        titleText="Mögliche Lieferanten"
                        >
                         <Table
                            mode="SingleSelect"
                            style={{
                                width: '250%'
                            }}
                            columns={
                                <>
                                    <TableColumn>Lieferant</TableColumn>
                                    <TableColumn>Preis pro {unit}</TableColumn>
                                    <TableColumn>Verfügbar</TableColumn>
                                    <TableColumn>Lieferdauer</TableColumn>
                                </>
                            }
                        >
                            <TableRow>
                                <TableCell>Glucosehof Meier</TableCell>
                                <TableCell>5 €</TableCell>
                                <TableCell>200 {unit}</TableCell>
                                <TableCell>15 Sekunden</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Glucose Glück Gießen</TableCell>
                                <TableCell>4,50 €</TableCell>
                                <TableCell>300 {unit}</TableCell>
                                <TableCell>22 Sekunden</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Glucose Gold</TableCell>
                                <TableCell>5,50 €</TableCell>
                                <TableCell>800 {unit}</TableCell>
                                <TableCell>10 Sekunden</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Gourmet Glucose</TableCell>
                                <TableCell>6 €</TableCell>
                                <TableCell>200 {unit}</TableCell>
                                <TableCell>7 Sekunden</TableCell>
                            </TableRow>
                         </Table>
                    </FormGroup>          
                </Form>
            </Dialog>
        </>
    )
}