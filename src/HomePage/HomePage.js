import React, { useEffect, useRef } from 'react';
import CompararLados from '../CompararLados/CompararLados';
import { useHomePage } from '../context/HomePageContext';
import SideBar from '../SiderBar/SiderBar';
import TelaEnvio from '../TelaEnvio/TelaEnvio';

import './homepage.css';


export default function HomePage() {
    const { PaginaAtual } = useHomePage()

    function PaginaParaRenderizar(){
        if(PaginaAtual === 1)
            return TelaEnvio()
        else if (PaginaAtual === 2)
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