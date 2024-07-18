// there must be a better way to handle icons..
import '@ui5/webcomponents-icons/dist/begin.js'
import '@ui5/webcomponents-icons/dist/opportunity.js'
import '@ui5/webcomponents-icons/dist/accounting-document-verification.js'

import { FioriLikeCard } from '../components/FioriLikeCard';
import { FlexBox, Title } from '@ui5/webcomponents-react';
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { HeaderBar } from '../components/HeaderBar'


const Launchpad = () => {
        
        const navigate = useNavigate()
        const [notificationVisible, setNotificationVisible] = useState(false)

        let eventSource: EventSource;
        eventSource = new EventSource('http://localhost:4000/events');
        eventSource.onmessage = (event) => {
            if(JSON.parse(event.data).message == "place order"){
                setNotificationVisible(true)
            } else {
                console.log(JSON.parse(event.data).message)
            }
        }

        const getOrderPlaced = async () => {
            try {
                const response = await fetch('http://localhost:4000/getOrderPlaced'); 
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.text();
                console.log(result)
                if(result == 'true'){
                    setNotificationVisible(true)
                } 

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        useEffect(() => {
            getOrderPlaced()
        }, [])

        const startSinglePlayer = async () => {
            try {
                const response = await fetch('http://localhost:4000/startSinglePlayer');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                navigate("/productionList")

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        const startGame = async () => {
             try {
                const response = await fetch('http://localhost:4000/gameStatus');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.text();
                if(result == 'none'){
                    navigate("/gameStart")
                }
                if(result == 'running single'){
                    startSinglePlayer()
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

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
                                showNotify={false}
                                callback={startGame}
                                />
                            <FioriLikeCard 
                                title='Einkauf' 
                                subtitle="Verwalte Einkaufsaufträge" 
                                callback={() => {
                                    eventSource.close()
                                    setNotificationVisible(false)
                                    navigate("/orders")
                                }}
                                showNotify={notificationVisible}
                                icon="accounting-document-verification"/>
                        </FlexBox>
                        <Title level='H3'>Information</Title>
                        <FlexBox style={{gap: "20px"}}>
                            <FioriLikeCard 
                                title='Studiengänge' 
                                subtitle="Entdecke Studiengänge" 
                                callback={() => {
                                    navigate("/info")
                                }}
                                showNotify={false}
                                icon="opportunity"/>
                        </FlexBox>
                    </FlexBox>
                    </div>
                </>
  )
};

export default Launchpad;
