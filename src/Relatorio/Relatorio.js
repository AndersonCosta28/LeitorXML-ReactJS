import React from 'react';
import SD from './RelatorioAux/SD'
import Err from './RelatorioAux/Err';
import Tot from './RelatorioAux/Tot';
import SMCFOP from './RelatorioAux/SMCFOP';
import pdf from './RelatorioAux/pdf';
import Xls from './RelatorioAux/Xls';
import "./relatorio.css"

export default function Relatorio(Dados) {
    return (
        <div>
            <div className="row align-items-center">
                <div className="col">
                    <Tot Dados={Dados[2]} erros={Dados[4]} estilo="col" />
                    <div style={{ display: 'inline-flex' }}>
                        <button className='button' title='Gerar PDF' onClick={() => pdf(Dados[1], Dados[2], Dados[3], Dados[5])}>Gerar PDF</button>
                        <div className='botaoxls'><Xls Dados={Dados[1]}></Xls></div>
                    </div>
                </div>
                <div className="col table2">
                    <SMCFOP Dados={Dados[3]} />
                </div>
                <div className="col table2">
                    <SD Dados={Dados[0]} />
                </div>
            </div>
            <div className="row">
                <Err erros={Dados[4]} estilo="table1 col" />
            </div>
        </div>
    )
}