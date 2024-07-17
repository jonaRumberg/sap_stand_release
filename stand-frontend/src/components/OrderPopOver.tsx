import { Bar, Button, CheckBox, Dialog, FlexBox, Form, FormGroup, FormItem, Input, Label, Select, SelectDialog, SelectDomRef, StandardListItem, Table, TableCell, TableColumn, TableRow, TextArea, Title } from "@ui5/webcomponents-react"
import { useRef } from "react"

export const OrderPopOver = (
    {open, product, quantity, unit}: {open: boolean, product: string, quantity: int, unit: String}
) => {
    const dialog = useRef<SelectDomRef>(null);

    const onSend = () => {
        alert("Abgeschickt");
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
                            <Button 
                                onClick={onSend}
                            >
                                Close
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
                    columnsM={1}
                    columnsS={1}
                    columnsXL={2}
                    style={{
                        alignItems: 'center'
                    }}
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
                            <FlexBox
                            style={{
                                background:"black"
                            }}>
                         <Table
                            style={{
                                background:"black"
                            }}
                            columns={
                            <>
                                <TableColumn style={{
                                width: '50rem'
                            }}>
                                    Lieferant
                                </TableColumn>
                                <TableColumn>
                                    Preis pro {unit}
                                </TableColumn>
                                <TableColumn>
                                    Verfügbar
                                </TableColumn>
                                <TableColumn>
                                    Lieferdauer
                                </TableColumn>
                            </>
                            }
                            mode="MultiSelect"
                            >
                            <TableRow>
                                <TableCell>Gummiwerke Fulda</TableCell>
                                <TableCell>5 €</TableCell>
                                <TableCell>2 {unit}</TableCell>
                                <TableCell>3 Tage</TableCell>
                            </TableRow>
                         </Table>
                         </FlexBox>
                    </FormGroup>          
                </Form>
            </Dialog>
        </>
    )
}