import React, { useEffect, useRef } from 'react';
import CompararLados from '../CompararLados/CompararLados';
import { useHomePage } from '../context/HomePageContext';
import Loading from '../Loading/Loading';
import { SideBar } from '../SiderBar/SiderBar';
import { Tela_Envio as TelaEnvio } from '../Tela_Envio/Tela_Envio';
import './homepage.css';


export function HomePage() {
    const { PaginaAtual, SetPaginaAtual } = useHomePage()

    function PaginaParaRenderizar(){
        if(PaginaAtual == 1)
            return TelaEnvio()
        else if (PaginaAtual == 2)
            return CompararLados()
    }
    
    const pagina = useRef()
    useEffect(() => { }, [])
    return (
        <div id='pagina' ref={pagina} className='pagina'>
            <SideBar />
            <PaginaParaRenderizar></PaginaParaRenderizar>
        </div>
    )
}