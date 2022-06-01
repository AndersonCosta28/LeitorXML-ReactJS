import React, { useRef } from 'react'
import { useHomePage } from '../context/HomePageContext'
import './sidebar.css'

export function SideBar() {
    const { SetPaginaAtual } = useHomePage()
    const BotaoCollapse = useRef()
    return (
        <div className='main' >
            <div>
                <p>
                    <button ref={BotaoCollapse} className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSideBar" aria-expanded="false" aria-controls="collapseSideBar">
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
                        {/* <hr /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}