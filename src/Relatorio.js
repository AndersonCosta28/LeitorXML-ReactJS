import React from 'react';
import SD from './RelatorioAux/SD'
import Err from './RelatorioAux/Err';
import TDN from './RelatorioAux/TDN';
import Tot from './RelatorioAux/Tot';
import SMCFOP from './RelatorioAux/SMCFOP';
import pdf from './RelatorioAux/pdf';
import Evento from './RelatorioAux/Evento';
import Xls from './RelatorioAux/Xls'

export default function Relatorio(Dados, navigation) {

    return (
        <div style={{ marginTop: '100px' }}>
            <div className="row align-items-center" style={{ marginTop: '3%' }}>
                <SMCFOP Dados={Dados[3]} estilo="table1 col-4" />
                <Tot Dados={Dados[2]} erros={Dados[4]} estilo="table1 col " />
                <div className="table1 col">
                    <input type="button" value="Gerar PDF" onClick={() => pdf(Dados[1], Dados[2], Dados[3], Dados[5])}></input>
                </div>
                <div className="table1 col">
                    {Xls(Dados[1])}
                </div>
            </div>
            <div className="row align-items-center">
                <SD Dados={Dados[0]} estilo="table1 col-4" />
                <TDN Dados={Dados[1]} estilo="table2 col" />
            </div>
            <div className='row'>
                <Evento Eventos={Dados[5]} estilo="table2 col" />
            </div>
            <div className="row">
                <Err erros={Dados[4]} estilo="table2 col" />
            </div>
        </div>
    )
}