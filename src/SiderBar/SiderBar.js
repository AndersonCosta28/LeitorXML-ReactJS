import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDadosRelatorio } from '../context/DadosRelatorioContext';
import { useHomePage } from '../context/HomePageContext'
import './sidebar.css'

export default function SideBar() {
    const { SetPaginaAtual } = useHomePage()
    const { SetDadosRelatorio } = useDadosRelatorio();
    const BotaoCollapse = useRef();
    const DivUserInfo = useRef();
    const DivLogin = useRef();
    let navigate = useNavigate();

    useEffect(() => {
        //DivUserInfo.current.style.height = '50%';
        DivUserInfo.current.style.top = '60vh';
        return () => {
            SetDadosRelatorio(null)
        }
    }, [sair])

    function capturarClasseDoBotao() {
        let val = Array(BotaoCollapse.current.classList);
        if (val[0].value.split(' ').includes('collapsed'))
            DivLogin.current.style.display = 'none'
        else
            DivLogin.current.style.display = ''
    }

    function sair() {
        sessionStorage.clear();
        localStorage.clear();
        navigate('/');
    }

    return (
        <div className='main' >
            <div>
                <p>
                    <button ref={BotaoCollapse} onClick={capturarClasseDoBotao} className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSideBar" aria-expanded="false" aria-controls="collapseSideBar">
                        Menu
                    </button>
                </p>
            </div>

            <div style={{ minHeight: '120px' }}>
                <div className="collapse collapse-horizontal" id="collapseSideBar">
                    <div className="card card-body" style={{ width: '300px' }}>
                        <ul className="nav nav-pills flex-column mb-auto">
                            <li className='PaginaItem' onClick={() => { SetPaginaAtual(1); BotaoCollapse.current.click() }}>Gerar relatório de XML's zipado</li>
                            <li className='PaginaItem' onClick={() => { SetPaginaAtual(2); BotaoCollapse.current.click() }}>Comparar lista de valores</li>
                        </ul>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="dropdown" ref={DivUserInfo}>
                <a href="" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                    <strong ref={DivLogin} style={{ display: 'none', marginLeft: '10px' }}> {sessionStorage.getItem('nome_usuario')}</strong>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    {/* <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li> */}
                    {/* <li><a className="dropdown-item" href="#">Sign out</a></li> */}
                    <li><span className="dropdown-item" onClick={sair}>Sair</span></li>
                </ul>
            </div>
        </div>
    )
}