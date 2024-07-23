import { List, Page, Button, Bar, Toast, ToastDomRef, Title, CustomListItem, Icon, FlexBox, Input, IconDesign } from "@ui5/webcomponents-react";
import { useRef, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { HeaderBar } from "../components/HeaderBar";

const ProductionList = () => {
    const productionOrders: {
            product: string,
            color: string,
            quantity: number,
            plant: string,
            lane: number,
            icon_name: string,
            icon_design: IconDesign
    }[] = [
        {
            product: "Gummibärchen",
            color: "gemischt",
            quantity: 5,
            plant: "SAP Walldorf",
            lane: 2,
            icon_name: "alert",
            icon_design: IconDesign.Critical
        },
        {
            product: "Post-Its",
            color: "blau",
            quantity: 10,
            plant: "SAP Markdorf",
            lane: 1,
            icon_name: "sys-enter-2",
            icon_design: IconDesign.Positive
        },
        {
            product: "Post-Its",
            color: "rot",
            quantity: 8,
            plant: "SAP Dresden",
            lane: 3,
            icon_name: "error",
            icon_design: IconDesign.Negative
        },
        {
            product: "Kugelschreiber",
            color: "grün",
            quantity: 15,
            plant: "SAP Berlin",
            lane: 2,
            icon_name: "sys-enter-2",
            icon_design: IconDesign.Positive
        },
        {
            product: "Textmarker",
            color: "gelb",
            quantity: 12,
            plant: "SAP München",
            lane: 3,
            icon_name: "sys-enter-2",
            icon_design: IconDesign.Positive
        },
        {
            product: "Tasse",
            color: "schwarz",
            quantity: 6,
            plant: "SAP Walldorf",
            lane: 1,
            icon_name: "sys-enter-2",
            icon_design: IconDesign.Positive
        },
        {
            product: "Postkarte",
            color: "weiß",
            quantity: 9,
            plant: "SAP Markdorf",
            lane: 2,
            icon_name: "error",
            icon_design: IconDesign.Negative
        },
        {
            product: "Bleistift",
            color: "orange",
            quantity: 11,
            plant: "SAP Dresden",
            lane: 3,
            icon_name: "alert",
            icon_design: IconDesign.Critical
        },
        {
            product: "Kugelschreiber",
            color: "violett",
            quantity: 7,
            plant: "SAP Berlin",
            lane: 1,
            icon_name: "alert",
            icon_design: IconDesign.Critical
        },
        {
            product: "Gummibärchen",
            color: "braun",
            quantity: 14,
            plant: "SAP München",
            lane: 2,
            icon_name: "alert",
            icon_design: IconDesign.Critical
        }
    ];

    const [filteredProductionOrders, setFilteredProductionOrders] = useState(productionOrders);
    const toast = useRef<ToastDomRef>(null);
    const navigate = useNavigate();

    const showToast = () => {
        toast.current?.show();
    };

    const handleChange = (event: any) => {
        const query = event.target.value.toLowerCase();
        const tempOrders:any[] = [];

        productionOrders.forEach(object => {
            const valueString = getObjectValues(object).join().toLowerCase();

            if (valueString.includes(query)) {
                tempOrders.push(object);
            }
        });
        setFilteredProductionOrders(tempOrders);
    };

    function getObjectValues(obj: any) {
        let values:any[] = [];
        for (let key in obj) {
            if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                values = values.concat(getObjectValues(obj[key]));
            } else {
                values.push(obj[key]);
            }
        }
        return values;
    }




    return (
        <>
            <HeaderBar title={'Produktionsauftrag anlegen'}
                quest={'Lege einen neuen Produktionsauftrag an'}
                progressbar={true}
                progress={10} >
            </HeaderBar>
            <Page
                style={{ height: "96vh" }}
            >
                <Bar
                    design="Header"
                    startContent={
                        <Title level="H4">
                            Produktionsauftrag ({filteredProductionOrders.length})
                        </Title>}
                    endContent={
                        <Button
                            design="Emphasized"
                            onClick={() => navigate("/CreatePO")}
                        >
                            Anlegen
                        </Button>
                    }
                >
                    <Input
                        icon={<Icon name="search" />}
                        onInput={handleChange}
                        placeholder="Suchen..."
                        onSuggestionItemPreview={function _a() { }}
                        onSuggestionItemSelect={function _a() { }}
                        type="Text"
                        valueState="None"
                    />
                </Bar>

                <List
                    growing="Scroll"
                    mode="None"
                    onItemClick={showToast}
                    separators="All"
                >
                    {
                        filteredProductionOrders.map(i =>
                            <CustomListItem
                                style={{
                                    height: "fit-content",
                                    padding: "8px"
                                }}
                            >
                                <FlexBox justifyContent="SpaceBetween" alignItems="Center" style={{ width: '100%' }} >
                                    <div style={{ display: "flex" }}>
                                        <Icon name={i.icon_name} style={{ marginRight: "32px" }} design={i.icon_design} />
                                        <Title level="H5" style={{ width: "200px", marginRight: "32px" }}>
                                            {i.product}
                                        </Title>
                                        <div style={{ marginRight: "32px" }}>
                                            {i.color} <br />
                                            {i.quantity} Stück <br />
                                            {i.plant}, Linie {i.lane}
                                        </div>
                                    </div>
                                    <Icon name="navigation-right-arrow" />
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

