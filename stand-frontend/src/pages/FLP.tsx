// there must be a better way to handle icons..
import '@ui5/webcomponents-icons/dist/begin.js'
import '@ui5/webcomponents-icons/dist/opportunity.js'

import { FioriLikeCard } from '../components/FioriLikeCard';
import { FlexBox, Title } from '@ui5/webcomponents-react';
import { useNavigate } from 'react-router-dom';
import { HeaderBar } from '../components/HeaderBar'

const Launchpad = () => {
        
        const navigate = useNavigate()

        return (
                <>
                    <div
                    style={{
                        height: "calc(100vh - 304px)",
                        }}
                    >
                    <HeaderBar title={'Fiori Launchpad'} 
                        quest={'Startseite'} 
                        progressbar={false} 
                        progress={0} >
                        </HeaderBar>
                    <FlexBox direction='Column'
                        style={{
                        padding: "20px",
                        gap: "20px"
                        }}>
                        <Title level='H3'>Produktivität</Title>
                        <FlexBox style={{gap: "20px"}}>
                            <FioriLikeCard 
                                title='Produktionsplanung' 
                                subtitle="Produziere Gummibären" 
                                icon="begin"
                                callback={()=>alert("asdf")}
                                />
                            <FioriLikeCard 
                                title='Produktionsplanung' 
                                subtitle="Produziere Gummibären" 
                                callback={()=>alert("asdf")}
                                icon="begin"/>
                        </FlexBox>
                        <Title level='H3'>Information</Title>
                        <FlexBox style={{gap: "20px"}}>
                            <FioriLikeCard 
                                title='Studiengänge' 
                                subtitle="Entdecke Studiengänge" 
                                callback={() => navigate("/info")}
                                icon="opportunity"/>
                        </FlexBox>
                    </FlexBox>
                    </div>
                </>
  )
};

export default Launchpad;
