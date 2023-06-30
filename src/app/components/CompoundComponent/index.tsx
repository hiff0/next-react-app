"use client"

import { FunctionComponent, useState, ReactNode, createContext, useContext, Dispatch, SetStateAction, useCallback} from "react";

// interface ToggleProps {
//     initialValue: boolean;
// }

// const Toggle: FunctionComponent<ToggleProps> = ({ initialValue }) => {
//     const [isOn, setIsOn] = useState<boolean>(initialValue);

//     return (
//         <div>
//             <button onClick={() => setIsOn((isOn) => !isOn)}>Switch</button>
//             {isOn && <span>On</span>}
//             {!isOn && <span>Off</span>}
//         </div>
//     );
// }

// const ToggleNew: FunctionComponent<ToggleProps> = ({ initialValue }) => {
//     const [isOn, setIsOn] = useState<boolean>(initialValue);

//     return (
//         <div>
//             <button onClick={() => setIsOn((isOn) => !isOn)}>Switch</button>
//             {isOn && <span>On</span>}
//             {!isOn && <span>Off</span>}
//         </div>
//     );
// }

// ---------- Toggle с паттерном CompoundComponent ------------------------
// Если нужно сделать акардиот, тогл, меню, т.е компонент, состаящий из разных частей

interface ToggleContextInterface {
    isOn: boolean;
    setIsOn: Dispatch<SetStateAction<boolean>>
}

const ToggleContext = createContext<ToggleContextInterface | null>(null);

interface ToggleCompoundProps {
    children: Iterable<ReactNode>;
    initialValue: boolean;
}

const ToggleCompound: FunctionComponent<ToggleCompoundProps> = ({ children, initialValue }) => {
    const [isOn, setIsOn] = useState<boolean>(initialValue);

    return (
        <div>
            <ToggleContext.Provider value={{isOn, setIsOn}}>
                {children}
            </ToggleContext.Provider>
        </div>
    );
}

const TextOn = () => {
    const {isOn} = useContext(ToggleContext) as ToggleContextInterface;

    if (!isOn) {
        return null;
    }

    return <span>on</span>
}

const TextOff = () => {
    const {isOn} = useContext(ToggleContext) as ToggleContextInterface;

    if (isOn) {
        return null;
    }

    return <span>off</span>
}

const SwitchButton = () => {
    const {setIsOn} = useContext(ToggleContext) as ToggleContextInterface;
    return <button onClick={() => setIsOn((isOn) => !isOn)}>Switch</button>
}

// -------------------- Menu ----------------------------------------------------------------

interface Menu {
    children: Iterable<ReactNode>;
    title: string;
}

interface MenuContextInterface {
    activeGroup: string;
    // setActiveGroup: Dispatch<SetStateAction<string>>
    switchGroup: (title: string) => void;
}

const MenuContext = createContext<MenuContextInterface | null>(null);

const MenuAccordion: FunctionComponent<Omit<Menu, "title">> = ({children}) => {
    const [activeGroup, setActiveGroup] = useState<string>('');

    const switchGroup = useCallback((title: string) => {
        setActiveGroup((currentTitle: string) => currentTitle === title ? '' : title);
    }, [])

    return <MenuContext.Provider value={{activeGroup, switchGroup}}>{ children }</MenuContext.Provider>
}

const MenuGroup: FunctionComponent<Menu> = ({children, title}) => {
    const {activeGroup, switchGroup} = useContext(MenuContext) as MenuContextInterface;

    return(
    <div>
        <button onClick={() => switchGroup(title)}>{ title }</button> 
        {activeGroup === title && <div>{ children }</div>}
    </div>     
    )
}

const MenuItem: FunctionComponent<Omit<Menu, "children">> = ({ title}) => {
    return(
        <div>{ title }</div> 
    )
}

export const CompoundComponent: FunctionComponent = () => {
    
    return (
        <div>
            <hr />
            <ToggleCompound initialValue={false}>
                <TextOn />
                <TextOff />
                <SwitchButton />
            </ToggleCompound>
            <hr />
            <MenuAccordion>
                <MenuItem title="Главная"/>
                <MenuGroup title="Фильмы">
                    <MenuItem title="Топ"/>
                    <MenuItem title="Не топ"/>
                </MenuGroup>
                <MenuGroup title="Сериалы">
                    <MenuItem title="Топ"/>
                    <MenuItem title="Не топ"/>
                </MenuGroup>
                <MenuItem title="О нас"/>
            </MenuAccordion>
        </div>
    );
}