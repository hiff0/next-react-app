"use client"

import React, { ReactElement, useCallback, useContext, useState } from "react"

interface ThemeContextInt {
    theme: string;
    switchTheme: () => void
}

const ThemeContext = React.createContext<string | null>(null);

//Чтобы у нас не перерендеревался Header из-за смены темы
// создаем еще один контекс
type ThemeSwicherContextInt = () => void


const ThemeSwicherContext = React.createContext<ThemeSwicherContextInt | null>(null);


const Header = () => {
    const switchTheme = useContext(ThemeSwicherContext) as ThemeSwicherContextInt;
    return <header>
        <button onClick={switchTheme}>Set theme</button>
    </header>
}

const Content = () => {
    const theme = useContext(ThemeContext);
    return <header>{theme}</header>
}

const OtherContent = () => {
    return <header>OtherContent</header>
}

interface ThemeProviderInterface { 
    children: ReactElement
}

// Т.к. вынесли состояние в отдельный компонент
// при изменении состояния перерендеревается только 
// ThemeContext.Provider
const ThemeProvider = ({children}: ThemeProviderInterface) => {
    const [theme, setTheme] = useState<string>('default');
    const switchTheme = useCallback(() => {
        setTheme((currentTheme) => currentTheme === 'default' ? 'not-default' : 'default');
    }, [])
    return (
    <ThemeContext.Provider value={theme}>
        <ThemeSwicherContext.Provider value={switchTheme}>
            {children}
        </ThemeSwicherContext.Provider>
    </ThemeContext.Provider>)
}

export default function ContextPage() {

    return (
    <ThemeProvider> 
        <div>
            <Header />
            <Content />
            <OtherContent />
        </div>
    </ThemeProvider>
    )
}