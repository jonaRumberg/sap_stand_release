import {
    ShellBar,
    Input,
    Avatar,
    Icon,
    ProgressIndicator,
    Toast,
    ToastDomRef
} from '@ui5/webcomponents-react';
import { useRef } from 'react';
import { useNavigate } from 'react-router';

export const HeaderBar = (
    { title, quest, progressbar, progress }: { title: string, quest: string, progressbar: boolean, progress: number },
) => {

    const navigate = useNavigate()
    const navigateToHome = () => {
        navigate("/");
    }

    const NotificationToast = useRef<ToastDomRef>(null);
    const showNotification = () => {
        NotificationToast.current?.show();
    };

    const JouleToast = useRef<ToastDomRef>(null);
    const showJoule = () => {
        JouleToast.current?.show();
    };

    return (
        <>
            <ShellBar
                logo={<img alt="SAP Logo" src="https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg" />}
                // menuItems={<><StandardListItem data-key="1">Home</StandardListItem></>}
                notificationsCount="0"
                onLogoClick={navigateToHome}
                onMenuItemClick={navigateToHome}
                onNotificationsClick={showNotification}
                onCoPilotClick={showJoule}
                primaryTitle={title}
                profile={<Avatar><img src="https://sap.github.io/ui5-webcomponents-react/assets/Person-B7wHqdJw.png" /></Avatar>}
                searchField={<Input icon={<Icon interactive name="search" />} showClearIcon />}
                secondaryTitle={quest}
                showCoPilot
                showNotifications
            >
            </ShellBar>
            <ProgressIndicator
                style={{width: '50%', position: 'relative', left: '25%'}}
                value={progress}
                hidden={!progressbar}
                valueState="Success"
                hideValue
            />
            <Toast
                ref={NotificationToast}
                placement="BottomCenter">
                Aktuell gibt es keine Nachrichten!
            </Toast>
            <Toast
                ref={JouleToast}
                placement="BottomCenter">
                Bald verfügbar!
            </Toast>
        </>
    )
}
