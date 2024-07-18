import { FlexBox, Title } from "@ui5/webcomponents-react";
import './SuccessPage.css'
import { HeaderBar } from "../components/HeaderBar";


const SuccessPage = () => {

    return(<>
        <HeaderBar 
            title={'Fiori Launchpad'} 
            quest={'Startseite'} 
            progressbar={true} 
            progress={100} />
        
        <FlexBox
            justifyContent="Center"
            direction="Column"
            alignItems="Center"
            className="body">
            <Title 
                className="whiteFont">
                Geschafft 🥳
            </Title>
            <Title 
                className="whiteFont"
                level="H3">
                Nehmt euch eure Gummibärchen!
            </Title>
            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework"></div>
        </FlexBox>
    </>)
}

export default SuccessPage;