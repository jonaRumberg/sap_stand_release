// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { setTheme, isTheme } from "@ui5/webcomponents-base/dist/config/Theme";
import { ShellBar, ShellBarItem} from "@ui5/webcomponents-react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import {useCookies} from "react-cookie";

function App() {
    const [cookies, setCookie] = useCookies(['prefersDarkMode']);


    const handleDarkModeSwitch = () => {
        if (isTheme("sap_horizon")) {
            setCookie("prefersDarkMode", true, {maxAge: 31536000});
        } else {
            setCookie("prefersDarkMode", false, {maxAge: 31536000});
        }
    }

    useEffect(() => {
        if (cookies?.prefersDarkMode == true) {
            setTheme("sap_horizon_dark")
        } else {
            setTheme("sap_horizon")
        }
    }, [cookies?.prefersDarkMode]);


    return (
        <>
            <ShellBar
                onLogoClick={() => window.location.replace("/") }
                primaryTitle="SAP Ständ"
            >
                <ShellBarItem
                    icon={cookies?.prefersDarkMode ? "light-mode" : "dark-mode"}
                    text="Switch Dark Mode"
                    onClick={handleDarkModeSwitch}
                  />
            </ShellBar>
            <Outlet />
        </>
    );
}

export default App;
