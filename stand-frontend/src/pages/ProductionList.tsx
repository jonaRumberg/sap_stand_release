import {List, Page, StandardListItem, Button, Bar, Toast, ToastDomRef, Label, Title, Table, CustomListItem, Text, Icon, FlexBox } from "@ui5/webcomponents-react";
import { useRef } from "react"
import "./ProductionList.css"

const ProductionList = () => {
    const toast = useRef<ToastDomRef>(null)

    const showToast = () => {
        toast.current?.show();
    };

    const productionOrders = [
        {
            product: "Gummibärchen",
            color: "gemischt",
            quantity: 5,
            plant: "SAP Walldorf",
            lane: 2,
            icon_name: "alert",
            icon_design: "Critical"
        },
        {
            product: "Post-Its",
            color: "blau",
            quantity: 10,
            plant: "SAP Markdorf",
            lane: 1,
            icon_name: "sys-enter-2",
            icon_design: "Positive"
        },
        {
            product: "Post-Its",
            color: "rot",
            quantity: 8,
            plant: "SAP Dresden",
            lane: 3,
            icon_name: "error",
            icon_design: "Negative"
        },
        {
            product: "Kugelschreiber",
            color: "grün",
            quantity: 15,
            plant: "SAP Berlin",
            lane: 2,
            icon_name: "sys-enter-2",
            icon_design: "Positive"
        },
        {
            product: "Textmarker",
            color: "gelb",
            quantity: 12,
            plant: "SAP München",
            lane: 3,
            icon_name: "sys-enter-2",
            icon_design: "Positive"
        },
        {
            product: "Tasse",
            color: "schwarz",
            quantity: 6,
            plant: "SAP Walldorf",
            lane: 1,
            icon_name: "sys-enter-2",
            icon_design: "Positive"
        },
        {
            product: "Postkarte",
            color: "weiß",
            quantity: 9,
            plant: "SAP Markdorf",
            lane: 2,
            icon_name: "error",
            icon_design: "Negative"
        },
        {
            product: "Bleistift",
            color: "orange",
            quantity: 11,
            plant: "SAP Dresden",
            lane: 3,
            icon_name: "alert",
            icon_design: "Critical"
        },
        {
            product: "Kugelschreiber",
            color: "violett",
            quantity: 7,
            plant: "SAP Berlin",
            lane: 1,
            icon_name: "alert",
            icon_design: "Critical"
        },
        {
            product: "Gummibärchen",
            color: "braun",
            quantity: 14,
            plant: "SAP München",
            lane: 2,
            icon_name: "alert",
            icon_design: "Critical"
        }
    ];
    
    
    return (
        <>
            <Page style={{height:"calc(100vh - 304px)"}}>
                <Bar
                    design="Header"
                    startContent={
                        <Title level="H4">
                            Produktionsauftrag (10)
                        </Title>}
                    endContent={
                        <Button>
                            Anlegen
                        </Button>
                    }
                    >
                </Bar>
                
                <List
                    growing="Scroll"
                    mode="None"
                    onItemClick={showToast}
                    separators="All"
                >
                    {
                        productionOrders.map(i => 
                            <CustomListItem
                                style={{
                                    height:"fit-content", 
                                    padding: "8px"
                                }}
                            >
                                <FlexBox justifyContent="SpaceBetween" alignItems="Center" style={{width: '100%'}} >
                                    <Icon name={i.icon_name} className="ListColumn" design={i.icon_design}/>
                                    <Title level="H5" className="ListColumn">
                                        {i.product}
                                    </Title>
                                    <div className="ListColumn">
                                        {i.color} <br/>
                                        {i.quantity} Stück <br/>
                                        {i.plant}, Linie {i.lane}
                                    </div>
                                    <Icon name="navigation-right-arrow"/>
                                </FlexBox>
                            </CustomListItem>
                        )
                    }
                </List>

                <Toast
                    ref={toast}
                    placement="BottomCenter"
                >
                    Tipp: Lege einen neuen Produktionsauftrag an.
                </Toast>

                
            </Page>
        </>

        
    )
};

export default ProductionList;

