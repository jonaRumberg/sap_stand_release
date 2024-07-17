import {
    CustomListItem,
  
    Page,
    Bar,
    Button,
  
    Form,
    FormGroup,
    FormItem,
    Input,
    Select,
    Option,
    CheckBox,
    Label,
    FlexBox,
  
    List
  } from "@ui5/webcomponents-react"
  import { useState } from "react";
  
  
  const CreateProductionOrder = () => {
  
    const [Multiplayer, setMultiplayer] = useState(true);
    let MaterialAvailable = "Success"
    if (Multiplayer === true) {
      MaterialAvailable = "Error"
    }
  
    const Material =  [
      {
        materialName: "Glukosesirup",
        available: "Nicht Verfügbar",
        buttonDisabled: "false",
        highlight: MaterialAvailable,
      },
      {
        materialName: "Farbe Rot",
        available: "Verfügbar",
        buttonDisabled: "true",
        highlight: "Success",
      },
      {
        materialName: "Farbe Gelb",
        available: "Verfügbar",
        buttonDisabled: "true",
        highlight: "Success",
      },
      {
        materialName: "Farbe Grün",
        available: "Verfügbar",
        buttonDisabled: "true",
        highlight: "Success",
      },
      {
        materialName: "Farbe Blau",
        available: "Verfügbar",
        buttonDisabled: "true",
        highlight: "Success",
      },
      {
        materialName: "Plastiktüten",
        available: "Verfügbar",
        buttonDisabled: "true",
        highlight: "Success",
      },
  ]
  
    return (
      <>
        {/* <ShellBar
          logo={<img alt="SAP Logo" src="https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg" />}
          menuItems={<><CustomListItem data-key="1">Menu Item 1</CustomListItem><CustomListItem data-key="2">Menu Item 2</CustomListItem><CustomListItem data-key="3">Menu Item 3</CustomListItem></>}
          notificationsCount="10"
          // onCoPilotClick={function _a() { } }
          // onLogoClick={function _a() { } }
          // onMenuItemClick={function _a() { } }
          // onNotificationsClick={function _a() { } }
          // onProductSwitchClick={function _a() { } }
          // onProfileClick={function _a() { } }
          // onSearchButtonClick={function _a() { } }
          primaryTitle="Produktion"
          profile={<Avatar><img src="https://sap.github.io/ui5-webcomponents-react/assets/Person-B7wHqdJw.png" /></Avatar>}
          searchField={<Input icon={<Icon interactive name="search" />} showClearIcon />}
          secondaryTitle="Fiori 3 Shell Bar"
          showCoPilot
          showNotifications
          showProductSwitch
        >
        <ShellBarItem
          count="3"
          icon="add"
          text="ShellBarItem" />
        </ShellBar> */}
        {/* <div style={{
          height: "calc(100vh - 304px)"
        }}> */}
  
        <Page
          backgroundDesign="Solid"
          footer={<Bar design="FloatingFooter" endContent={<><Button design="Emphasized">Jetzt produzieren</Button> <Button design="Transparent">Cancel</Button></>} />}
          header={<Bar design="Header" />}
          style={{
            height: "96vh"
          }}
        >
          <Form
            //backgroundDesign="Transparent"
            columnsL={1}
            columnsM={1}
            columnsS={1}
            columnsXL={2}
  
            labelSpanL={4}
            labelSpanM={2}
            labelSpanS={12}
            labelSpanXL={4}
            style={{
              alignItems: 'center',
              height: "100vh"
            }}
            titleText="Produktionsauftrag anlegen"
          >
            <FormGroup titleText="Auftragsdetails">
              <FormItem label="Produkt">
                <Select>
                  <Option>Gummibärchen</Option>
                  <Option>Post-Its</Option>
                  <Option>Kugelschreiber</Option>
                  <Option>Textmaker</Option>
                  <Option>Tasse</Option>
                  <Option>Postkarte</Option>
                  <Option>Bleistift</Option>
                  <Option>Schuhe</Option>
                </Select>
              </FormItem>
              <FormItem label="Menge">
                <Input type="Number" value="2" />
              </FormItem>
              <FormItem label="Farbe">
                <Select>
                  <Option>Gemischt</Option>
                </Select>
              </FormItem>
              <FormItem label="Für Eigenbedarf">
                <CheckBox checked />
              </FormItem>
            </FormGroup>
  
            <FormGroup titleText="Produktionswerk">
              <FormItem label="Werk ID">
                <Input type="Number" readonly value="1010" />
              </FormItem>
              <FormItem label="Linie">
                <Input type="Number" readonly value="2" />
              </FormItem>
              <FormItem label="Name">
                <Input type="Text" readonly value="SAP Walldorf" />
              </FormItem>
              <FormItem label="Adresse">
                <Input type="Text" readonly value="Dietmar-Hopp-Allee 14" />
              </FormItem>
              <FormItem label="Stadt">
                <Input type="Text" readonly value="Walldorf" />
              </FormItem>
            </FormGroup>
  
            <FormGroup titleText="Materialverfügbarkeit">
              <FormItem>
                <List
                  growing="None"
                  mode="None"
                  separators="All"
                  style={{
                    width: "50vw"
                  }}
                >
                  {
                    Material.map(i =>
                      <CustomListItem highlight={i.highlight} >
                        <FlexBox justifyContent="SpaceBetween" alignItems="Center" style={{ width: '100%' }}>
                          {i.materialName}
                          <Label>{i.available}</Label>
                          <Button 
                            disabled={i.buttonDisabled} 
                            style={{ flex: "true", justifyContent: "flex-end" }}
                            // onClick={}
                            >
                            Bestellen
                            </Button>
                        </FlexBox>
                      </CustomListItem>
                    )
                  }
  
                </List>
              </FormItem>
            </FormGroup>
          </Form>
  
        </Page></>
    )
  };
  
  export default CreateProductionOrder;