import { FlexBox } from "@ui5/webcomponents-react";
import {ScatterChart} from "@ui5/webcomponents-react-charts";

const SuccessPage = () => {

    return(<>
        <FlexBox
            alignItems="Stretch"
            direction="Row"
            justifyContent="Start"
            style={{
              borderColor: 'black',
              borderStyle: "solid",
              width: "70%"
            }}
            wrap="NoWrap">
            <ScatterChart
                chartConfig={{
                    margin: {
                        right: 0,
                        left: 0,
                        top: 0,
                        bottom: -50
                    }
                }}
                dataset={[
                    {
                    data: [
                        {
                        sessions: 150,
                        users: 120,
                        volume: 744
                        },
                        {
                        sessions: 313,
                        users: 213,
                        volume: 881
                        },
                        {
                        sessions: 424,
                        users: 241,
                        volume: 670
                        },
                        {
                        sessions: 83,
                        users: 328,
                        volume: 630
                        },
                        {
                        sessions: 302,
                        users: 102,
                        volume: 126
                        },
                        {
                        sessions: 304,
                        users: 233,
                        volume: 880
                        },
                        {
                        sessions: 47,
                        users: 202,
                        volume: 452
                        },
                        {
                        sessions: 18,
                        users: 222,
                        volume: 500
                        },
                        {
                        sessions: 362,
                        users: 210,
                        volume: 892
                        },
                        {
                        sessions: 510,
                        users: 215,
                        volume: 2022
                        },
                        {
                        sessions: 402,
                        users: 242,
                        volume: 70
                        },
                        {
                        sessions: 10,
                        users: 20,
                        volume: 60
                        }
                    ],
                    label: 'Users'
                    },
                    {
                    data: [
                        {
                        sessions: 300,
                        users: 100,
                        volume: 756
                        },
                        {
                        sessions: 330,
                        users: 230,
                        volume: 880
                        },
                        {
                        sessions: 404,
                        users: 240,
                        volume: 700
                        },
                        {
                        sessions: 80,
                        users: 280,
                        volume: 604
                        },
                        {
                        sessions: 300,
                        users: 100,
                        volume: 756
                        },
                        {
                        sessions: 330,
                        users: 230,
                        volume: 880
                        },
                        {
                        sessions: 470,
                        users: 20,
                        volume: 450
                        },
                        {
                        sessions: 180,
                        users: 220,
                        volume: 5000
                        },
                        {
                        sessions: 360,
                        users: 200,
                        volume: 879
                        },
                        {
                        sessions: 500,
                        users: 250,
                        volume: 200
                        },
                        {
                        sessions: 404,
                        users: 240,
                        volume: 700
                        },
                        {
                        sessions: 80,
                        users: 280,
                        volume: 604
                        }
                    ],
                    label: 'APJ',
                    opacity: 0.6
                    }
                ]}
                measures={[
                    {
                    accessor: 'users',
                    axis: 'x',
                    formatter: () => ''
                    },
                    {
                    accessor: 'sessions',
                    axis: 'y',
                    formatter: () => ''
                    },
                    {
                    accessor: 'volume',
                    axis: 'z',
                    formatter: () => ''
                    }
                ]}
                noLegend 
                onClick={function _a(){}}
            />
        </FlexBox>
    </>)
}

export default SuccessPage;4