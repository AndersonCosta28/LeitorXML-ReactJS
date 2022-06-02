import React, { useContext, useState } from 'react'
import { createContext } from 'react'

export const DadosRelatorioContext = createContext();

export default function DadosRelatorioProvider({ children }) {
    const [DadosRelatorio, SetDadosRelatorio] = useState();

    return (<DadosRelatorioContext.Provider value={{ DadosRelatorio, SetDadosRelatorio }}>{children}</DadosRelatorioContext.Provider>)
}

export function useDadosRelatorio() {
    const context = useContext(DadosRelatorioContext)
    const { DadosRelatorio, SetDadosRelatorio } = context
    return { DadosRelatorio, SetDadosRelatorio };
}