import React, { useEffect, useRef, useState } from 'react';
import CompararLados from '../CompararLados/CompararLados';
import './sidebar.css'
import TelaEnvio from '../TelaEnvio/TelaEnvio';

import './homepage.css';
import { useNavigate } from 'react-router-dom';


export default function HomePage() {
    const [PaginaAtual, SetPaginaAtual] = useState(0);
    const BotaoCollapse = useRef(null);
    const ItemMenu1 = useRef(null);
    const ItemMenu2 = useRef(null);
    const DivNomeUsuario = useRef(null);
    const ArrayItemMenu = [ItemMenu1, ItemMenu2]
    let navigate = useNavigate();

    function PaginaParaRenderizar() {
        if (PaginaAtual === 0)
            return TelaEnvio()
        else if (PaginaAtual === 1)
            return CompararLados()
    }

    useEffect(() => {
        const RemoverEstiloDeItemMenuSelecionadoDeTodosElementos = () => ArrayItemMenu.forEach(item => item.current.className = '');
        const AplicarEstiloParaItemMenuSelecionado = () => ArrayItemMenu[PaginaAtual].current.className = 'nav-link active';

        RemoverEstiloDeItemMenuSelecionadoDeTodosElementos();
        AplicarEstiloParaItemMenuSelecionado();
        return () => { }
    }, [PaginaAtual, ArrayItemMenu])

    function SideBar() {
        function ExibirOuOcultarNomeDeUsuario() {
            if (BotaoCollapse.current.className.split(' ').includes('collapsed'))
                DivNomeUsuario.current.style.display = 'none'
            else
                DivNomeUsuario.current.style.display = ''
        }

        function sair() {
            sessionStorage.clear();
            localStorage.clear();
            navigate('/');
        }

        return (
            <nav className='main' >
                <div>
                    <p>
                        <a href={() => false} ref={BotaoCollapse} onClick={ExibirOuOcultarNomeDeUsuario} className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSideBar" aria-expanded="false" aria-controls="collapseSideBar">
                            Menu
                        </a>
                    </p>
                </div>

                <div style={{ minHeight: '120px' }}>
                    <div className="collapse collapse-horizontal" id="collapseSideBar">
                        <div className="card card-body" style={{ width: '300px' }}>
                            <ul className="nav nav-pills flex-column mb-auto">
                                <li className='ItemMenu nav-item' onClick={() => { SetPaginaAtual(0) }}><a href={() => false} ref={ItemMenu1}>Gerar relatório de XML's zipado</a></li>
                                <li className='ItemMenu nav-item' onClick={() => { SetPaginaAtual(1) }}><a href={() => false} ref={ItemMenu2}>Comparar lista de valores</a></li>
                            </ul>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="dropdown DivUserInfo">
                    <span style={{ cursor: 'pointer' }} className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                        <strong ref={DivNomeUsuario} style={{ display: 'none', marginLeft: '10px' }}> {sessionStorage.getItem('nome_usuario')}</strong>
                    </span>
                    <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                        {/* <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><hr className="dropdown-divider" /></li> */}
                        {/* <li><a className="dropdown-item" href="#">Sign out</a></li> */}
                        <li ><a href={() => {}} className="dropdown-item" onClick={sair}>Sair</a></li>
                    </ul>
                </div>
            </nav>
        )
    }

    return (
        <div id='pagina' className='pagina'>
            <SideBar />
            <PaginaParaRenderizar></PaginaParaRenderizar>
        </div>
    )
}