// there must be a better way to handle icons..
import '@ui5/webcomponents-icons/dist/begin.js'
import '@ui5/webcomponents-icons/dist/opportunity.js'
import '@ui5/webcomponents-icons/dist/accounting-document-verification.js'

import { FioriLikeCard } from '../components/FioriLikeCard';
import { FlexBox, Title } from '@ui5/webcomponents-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Launchpad = () => {
        
        const navigate = useNavigate()
        const [notificationVisible, setNotificationVisible] = useState(false)

        const eventSource = new EventSource('http://localhost:4000/events');
        eventSource.onmessage = (event) => {
            if(JSON.parse(event.data).message == "reload"){
                //display notification
            } else {
                console.log(JSON.parse(event.data))
            }
        }

        return (
                <>
                    <div
                    style={{
                        height: "calc(100vh - 304px)",
                        }}
                    >
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
                                title='Einkauf' 
                                subtitle="Verwalte Einkaufsaufträge" 
                                callback={() => navigate("/orders")}
                                icon="accounting-document-verification"/>
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
