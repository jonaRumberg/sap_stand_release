import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import {FlexBox, IllustratedMessage} from "@ui5/webcomponents-react";
import {useEffect, useState} from "react";

const ErrorPage = () => {
    const error = useRouteError();
    const [message, setMessage] = useState("")
    console.error(error);

    useEffect(() => {
        setMessage(errorMessage(error))
    }, [error]);

    return (
        <div style={{height:'90vh'}}>
            <FlexBox alignItems={"Center"} justifyContent={"Center"} fitContainer={true}>
                <IllustratedMessage
                    size={"Scene"}
                    titleText={message ? "An Error Occurred" : "404 Page Not Found"}
                    subtitleText={message || "Please check the url"}
                />
            </FlexBox>
        </div>
    );
};

const errorMessage = (error: unknown): string => {
    if (isRouteErrorResponse(error)) {
        return `${error.status} ${error.statusText}`;
    } else if (error instanceof Error) {
        return error.message;
    } else if (typeof error === "string") {
        return error;
    } else {
        console.error(error);
        return "";
    }
};

export default ErrorPage;
