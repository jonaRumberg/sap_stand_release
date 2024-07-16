import { Card, CardHeader, FlexBox, Icon } from "@ui5/webcomponents-react"

export const FioriLikeCard = (
    { title, subtitle, icon, callback }: {title: string, subtitle: string, icon: string, callback: () => void},
) => {
    return (
        <>
            <Card
                onClick={callback}
                header={
                    <CardHeader
                        titleText={title}
                        subtitleText={subtitle}
                    ></CardHeader>
                }
                
                style={{
                    width: "auto",
                    aspectRatio: "1/1",
                    cursor: "pointer"
                }}
            >
                <FlexBox
                    direction="Column"
                >
                    <Icon 
                        style={{
                            paddingTop: "4em",
                            paddingLeft: "1.5em",
                            height: "3em",
                            width: "3em"
                        }}
                        name={icon}
                    />
                </FlexBox>
            </Card>
            </>
        )
    }

