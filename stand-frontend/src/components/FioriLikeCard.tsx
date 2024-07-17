import { Card, CardHeader, FlexBox, Icon } from "@ui5/webcomponents-react"

export const FioriLikeCard = (
    { title, subtitle, icon, callback, showNotify }: {title: string, subtitle: string, icon: string, callback: () => void, showNotify: boolean },
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
                    cursor: "pointer",
                    position: "relative"
                }}
            >
                { showNotify ? 
                <div
                    style={{
                        backgroundColor: "#002A86",
                        position: "absolute",
                        borderRadius: "20px",
                        width: "22px",
                        height: "20px",
                        textAlign: "center",
                        padding: "2px",
                        paddingTop: "5px",
                        right: "15px",
                        bottom: "15px",
                        color: "white"
                    }}
                >
                1
                </div> : <></>
                }
                <Icon 
                    style={{
                        position: "absolute",
                        height: "3em",
                        width: "3em",
                        left: "20px",
                        bottom: "20px",
                    }}
                    name={icon}
                />
            </Card>
            </>
        )
    }

