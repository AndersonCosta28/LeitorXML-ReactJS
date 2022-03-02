import React, { useEffect, useState } from 'react';
import "./styles.css";
import SD from './RelatorioAux/SD'
import Err from './RelatorioAux/Err';
import TDN from './RelatorioAux/TDN';
import Tot from './RelatorioAux/Tot';
import SMCFOP from './RelatorioAux/SMCFOP';
import pdf from './RelatorioAux/pdf';
import Evento from './RelatorioAux/Evento'
import { useNavigate } from 'react-router-dom';


export default function Relatorio() {
    const [Soma_Dia, setSoma_Dia] = useState([])
    const [Soma_CFOP, setSoma_CFOP] = useState([])
    const [Todas_As_Notas, setTodas_As_Notas] = useState([])
    const [Total, setTotal] = useState([])
    const [Erros, setErros] = useState([])
    const [Eventos, setEventos] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const [Soma_Dia, Todas_As_Notas, Total, Soma_CFOP, total_de_erros, Todos_Os_Eventos] = JSON.parse(sessionStorage.getItem('DadosDoBackEnd'))
        setSoma_Dia(Soma_Dia)
        setTodas_As_Notas(Todas_As_Notas)
        setTotal(Total)
        setSoma_CFOP(Soma_CFOP)
        setErros(total_de_erros)
        setEventos(Todos_Os_Eventos)
    }, [])

    return (
        <div>
            <h1 className="titulo"><a href="/">Página inicial</a></h1>
            <div className="row align-items-center" style={{ marginTop: '3%' }}>
                <SMCFOP Dados={Soma_CFOP} estilo="table1 col-4" />
                <Tot Dados={Total} erros={Erros} estilo="table1 col " />
                <div className="table1 col">
                    <input type="button" value="Gerar PDF" onClick={pdf/*()=> window.open("http://localhost:30/relatorio", "_blank",)GerarPDF*/}
                    ></input>
                </div>
                <div className="table1 col">
                    <input type="button" value="Gerar XLS" onClick={() => navigate('/xls')}//JSON.parse(sessionStorage.getItem('DadosDoBackEnd'))[1]
                    ></input>
                </div>
            </div>
            <div className="row align-items-center">
                <SD Dados={Soma_Dia} estilo="table1 col-4" />
                <TDN Dados={Todas_As_Notas} estilo="table2 col" />
            </div>
            <div className='row'>
                <Evento Eventos={Eventos} estilo="table2 col" />
            </div>
            <div className="row">
                <Err erros={Erros} estilo="table2 col" />
            </div>
        </div>
    )
}
