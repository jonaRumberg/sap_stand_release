import {
    ShellBar,
    ShellBarItem,
    StandardListItem,
    Input,
    Avatar,
    Icon,
    ProgressIndicator
} from '@ui5/webcomponents-react';
import { useState } from 'react';

export const HeaderBar = (
    { title, quest, progressbar, progress }: { title: string, quest: string, progressbar: boolean, progress: number },
) => {

    return (
        <>
            <ShellBar
                logo={<img alt="SAP Logo" src="https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg" />}
                menuItems={<><StandardListItem data-key="1">Home</StandardListItem></>}
                notificationsCount="0"
                onCoPilotClick={function _a() { }}
                onLogoClick={function _a() { }}
                onMenuItemClick={function _a() { }}
                onNotificationsClick={function _a() { }}
                onProductSwitchClick={function _a() { }}
                onProfileClick={function _a() { }}
                onSearchButtonClick={function _a() { }}
                primaryTitle={title}
                profile={<Avatar><img src="https://sap.github.io/ui5-webcomponents-react/assets/Person-B7wHqdJw.png" /></Avatar>}
                searchField={<Input icon={<Icon interactive name="search" />} showClearIcon />}
                secondaryTitle={quest}
                showCoPilot
                showNotifications
            >
            </ShellBar>
            <ProgressIndicator
                value={progress}
                hidden={!progressbar}
                valueState="Success"
                hideValue
            />
        </>
    )
}
