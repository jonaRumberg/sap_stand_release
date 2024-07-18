import { Button, FlexBox } from "@ui5/webcomponents-react";
import { useNavigate } from "react-router-dom";

const GameStart = () => {

    const navigate = useNavigate()

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

    const startTwoPlayer = async () => {
        try {
            const response = await fetch('http://localhost:4000/startTwoPlayer');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            navigate("/productionList")

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <>
            <div 
            style={{
                height: "calc(100vh - 304px)",
                alignItems: "center",
                justifyContent: "center"
                }}
            >
                <FlexBox>
                    <Button onClick={startSinglePlayer}>1 Spieler</Button>
                    <Button onClick={startTwoPlayer}>2 Spieler</Button>
                </FlexBox>
            </div>
        </>
    );
}

export default GameStart;
