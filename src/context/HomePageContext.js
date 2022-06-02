import React, { useContext, useState } from 'react'
import { createContext } from 'react'

export const HomePageContext = createContext();

export default function HomePageProvider({ children }) {
    const [PaginaAtual, SetPaginaAtual] = useState(1);

    return (<HomePageContext.Provider value={{ PaginaAtual, SetPaginaAtual }}>{children}</HomePageContext.Provider>)
}

export function useHomePage() {
    const context = useContext(HomePageContext)
    const { PaginaAtual, SetPaginaAtual } = context
    return { PaginaAtual, SetPaginaAtual };
}