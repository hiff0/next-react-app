"use client"

import { FunctionComponent, useState, ReactNode, createContext, useContext, Dispatch, SetStateAction} from "react";

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
}

const MenuContext = createContext(null);

const MenuAccordion: FunctionComponent<Menu> = ({children}) => {
    return <div>{ children }</div>
}

const MenuGroup: FunctionComponent<Menu> = ({children}) => {
    return(
    <div>
        <div>title</div> 
        <div>{children}</div> 
    </div>     
    )
}

export const CompoundComponent: FunctionComponent = () => {
    
    return (
        <div>
            <ToggleCompound initialValue={false}>
                <TextOn />
                <TextOff />
                <SwitchButton />
            </ToggleCompound>
            <MenuAccordion>

            </MenuAccordion>
        </div>
    );
}