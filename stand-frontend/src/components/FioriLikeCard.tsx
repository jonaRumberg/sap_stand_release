import { Card, CardHeader, FlexBox, Icon } from "@ui5/webcomponents-react"

export const FioriLikeCard = (
    { title, subtitle, icon }: {title: string, subtitle: string, icon: string},
) => {
    return (
        <>
            <Card
                header={
                    <CardHeader
                        titleText={title}
                        subtitleText={subtitle}
                    ></CardHeader>
                }
                
                style={{
                    width: "auto",
                    aspectRatio: "1/1",
                    padding: "20px"
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

