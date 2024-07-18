import {
  CustomListItem,
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
  List,
  MessageBox,
  DateTimePicker,
  Toast,
  MessageBoxActions,
  ObjectPage,
  DynamicPageHeader,
  DynamicPageTitle,

} from "@ui5/webcomponents-react"
import { useRef, useState } from "react";


const CreateProductionOrder = () => {

  const [availability, setAvailability] = useState(false);
  let matHighlight = "Error"
  let matAvailable = "Nicht verfügbar"
  let matButton = "false"
  if (availability === true) {
    matHighlight = "Success"
    matAvailable = "verfügbar"
    matButton = "true"
  }

  const [open, setOpen] = useState(false);
  const onButtonClick = () => {
    setOpen(true);
  };
  const handleClose = (event) => {
    if (event.detail.action === MessageBoxActions.OK) {
      // send message to Material ordering
    }
    setOpen(false);
  };

  const [disabled, setDiasbled] = useState(false)
  const toast = useRef(null);
  const product = useRef(null);
  const production = useRef(null);
  const changeProduct = () => {
    if (product.current.value != "Gummibärchen") {
      toast.current.show();
      setDiasbled(true);
      
    } else {
      setDiasbled(false);
    }
  }
  const error = useRef(null);
  const errorToast = () => {
    error.current.show();
  }

  const productionLine = useRef(null);
  const changeProductionLine = () => {

  }

  const Material = [
    {
      materialName: "Glukosesirup",
      available: matAvailable,
      buttonDisabled: matButton,
      highlight: matHighlight,
      quantity: "200ml",
    },
    {
      materialName: "Farbe Rot",
      available: "Verfügbar",
      buttonDisabled: "true",
      highlight: "Success",
      quantity: "10ml",
    },
    {
      materialName: "Farbe Gelb",
      available: "Verfügbar",
      buttonDisabled: "true",
      highlight: "Success",
      quantity: "10ml",
    },
    {
      materialName: "Farbe Grün",
      available: "Verfügbar",
      buttonDisabled: "true",
      highlight: "Success",
      quantity: "10ml",
    },
    {
      materialName: "Farbe Blau",
      available: "Verfügbar",
      buttonDisabled: "true",
      highlight: "Success",
      quantity: "10ml",
    },
    {
      materialName: "Plastiktüten",
      available: "Verfügbar",
      buttonDisabled: "true",
      highlight: "Success",
      quantity: "2stk",
    },
  ]



  return (
    <>
      <ObjectPage
        footer={
          <Bar design="FloatingFooter"
            endContent={<>
              <Button ref={production}
                disabled={disabled}
                design="Emphasized"
                onClick={onButtonClick}>
                Jetzt produzieren
              </Button>
              <Button onClick={errorToast} design="Transparent">
                Später einplanen
              </Button>
              <Button onClick={errorToast} design="Transparent">
                Cancel
              </Button></>}>
          </Bar>}
        headerContent={<DynamicPageHeader></DynamicPageHeader>}
        headerTitle={
          <DynamicPageTitle header="Produktionsauftrag anlegen"></DynamicPageTitle>
        }
        imageShapeCircle
        selectedSectionId="Auftragsdetails"
        style={{
          height: 'calc(100vh - 55px)'
        }}
      >
        <Form
          columnsL={1}
          columnsM={1}
          columnsS={1}
          columnsXL={1}
          titleText="Auftragsdetails"
        >
          <FormGroup>
            <FormItem label="Produkt">
              <Select ref={product} onChange={changeProduct}>
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
              <Input type="Number" value="2" readonly />
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
        </Form>

        <Form
          columnsL={1}
          columnsM={1}
          columnsS={1}
          columnsXL={1}
          titleText="Produktionswerk">
          <FormGroup >
            <FormItem label="Werk ID">
              <Input type="Number" readonly value="1010" />
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
        </Form>

        <Form hidden={disabled}
          columnsL={1}
          columnsM={1}
          columnsS={1}
          columnsXL={1}
          titleText="Materialverfügbarkeit">
          <FormGroup>
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
                        <Label>{i.quantity}</Label>
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
      </ObjectPage>
      <MessageBox
        open={open}
        onClose={handleClose}
        type="Confirm"
        style={{ minWidth: '600px' }}
      >
        <Form style={{ minWidth: '500px' }}
          columnsL={1}
          columnsM={1}
          columnsS={1}
          columnsXL={1}>
          <FormGroup titleText="Produktion" >
            <FormItem label="Produktionszeitpunkt:">
              <DateTimePicker
                readonly
                onChange={function _a() { }}
                onInput={function _a() { }}
                onValueStateChange={function _a() { }}
                primaryCalendarType="Gregorian"
                valueState="None"
                value="today"
              />
            </FormItem>
            <FormItem label="Produktionslinie:">
              <Select ref={productionLine} onChange={changeProductionLine} >
                <Option>Linie 1</Option>
                <Option>Linie 2</Option>
                <Option>Linie 3</Option>
              </Select>
            </FormItem>
          </FormGroup>
        </Form>

      </MessageBox>
      <Toast ref={toast}>Tipp: Wähle Gummibärchen aus!</Toast>
      <Toast ref={error}>Nicht möglich</Toast>
    </>

  )
};

export default CreateProductionOrder;