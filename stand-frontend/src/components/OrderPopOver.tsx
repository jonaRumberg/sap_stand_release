import { Bar, Button, Dialog, Form, FormGroup, FormItem, Input, Table, TableCell, TableColumn, TableRow } from "@ui5/webcomponents-react"
import { useState } from "react"

export const OrderPopOver = ({open, product, quantity, unit, onClose}: {open: boolean, product: string, quantity: int, unit: String, onClose: () => void}) => 
    {
        const [smthSelected, setSmthSelected] = useState(false);

        const onSend = () => {
            onClose();
        }

    return (
        <>
            <Dialog
                resizable={true}
                open={open}
                onAfterClose={function _evt () {setSmthSelected(false)}}
                style={{
                    width: "80%",
                    height: "70%"
                }}
                
                className="footerPartNoPadding"
                footer={
                    <Bar    
                        design="Footer" 
                        endContent={
                            <Button 
                                disabled = {!smthSelected}
                                onClick={onSend} 
                                design="Emphasized">
                                Bestellen
                            </Button>
                        }
                    />
                }
                headerText="Bestellung anlegen"
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
                            onSelectionChange={function _evt () {setSmthSelected(true);console.log(smthSelected)}}
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
