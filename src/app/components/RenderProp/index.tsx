"use client"
// Pattern
import { FunctionComponent, ReactNode, useState } from "react";

interface LayoutProps {
    renderHeader?: () => ReactNode;
    renderSidebarLeft?: (isOpen: boolean) => ReactNode;
    renderMain?: () => ReactNode;
    renderSidebarRight?: (isOpen: boolean) => ReactNode;
    renderFooter?: () => ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({
    renderHeader,
    renderSidebarLeft,
    renderMain,
    renderSidebarRight,
    renderFooter,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div>
            <header>{renderHeader?.()}</header>
            <button onClick={() => setIsOpen(!isOpen)}>Click!</button>
            <main>
                <div className="sidebarLeft">{ renderSidebarLeft?.(isOpen) }</div>
                <div className="mainContent">{ renderMain?.() }</div>
                <div className="sidebarRight">{ renderSidebarRight?.(isOpen) }</div>
            </main>
            <footer>{ renderFooter?.() }</footer>
        </div>
    )
}

// Используются, например, в поп-апах
export const RenderProp: FunctionComponent = () => {
    return <Layout
        renderHeader={() => <header>Header</header>}
        renderFooter={() => <footer>Footer</footer>}
        renderSidebarLeft={(_isOpen) => <div>Left Sidebar</div>}
        renderSidebarRight={(isOpen) => <div>{ isOpen ? 'Open' : 'Closed'}</div>}/>
}