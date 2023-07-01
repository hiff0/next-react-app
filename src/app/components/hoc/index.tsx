"use client"
// Pattern
import { FunctionComponent, useCallback, useState } from "react";

const useIsAuthorized = () => {
    const [isAuthorized, setAuthorized] = useState(false);
    const switchAuthtorized = useCallback(() => {
        setAuthorized((currentAuth) => !currentAuth);
    }, []);
    return {isAuthorized, switchAuthtorized};
}

const AuthorizedComponent: FunctionComponent = () => {
    return <div>Только для авторизованных</div>
}

const UnauthorizedComponent: FunctionComponent = () => {
    return <div>Только для НЕ авторизованных</div>
}

interface WithAuthorize {
    Authorized: FunctionComponent;
    UnAuthorized: FunctionComponent;
} 

const withAuthorize = ({Authorized, UnAuthorized}: WithAuthorize): FunctionComponent => {
    return function WIthAuthorizeComponent() {
        const {isAuthorized, switchAuthtorized} = useIsAuthorized();
        return isAuthorized ? <Authorized /> : <UnAuthorized />;
    }
}

const CustomComponent = withAuthorize({
    Authorized: AuthorizedComponent,
    UnAuthorized: UnauthorizedComponent
})

// Height order components (Компоненты высшего порядка)
// Компонент, который принимает другой/ие компонент/ы
export const Hoc: FunctionComponent = () => {
    const {isAuthorized, switchAuthtorized} = useIsAuthorized();
    return (
        <div>
            <button onClick={switchAuthtorized}>{isAuthorized ? 'LogOut' : 'LogIn'}</button>
            {isAuthorized ? <AuthorizedComponent /> : < UnauthorizedComponent/>}
        </div>
    )
}