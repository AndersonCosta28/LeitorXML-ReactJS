import React from 'react';
import SD from './RelatorioAux/SD'
import Err from './RelatorioAux/Err';
import Tot from './RelatorioAux/Tot';
import SMCFOP from './RelatorioAux/SMCFOP';
import { GerarPDF } from './RelatorioAux/pdf';
import Xls from './RelatorioAux/Xls';
import "./relatorio.css"

export default function Relatorio() {
    return (
        <div>
            <div className="row align-items-center">
                <div className="col">
                    <Tot estilo="col" />
                    <div >
                        <GerarPDF></GerarPDF>
                        <div className='botaoxls' style={{ display: 'inline-block' }}><Xls /></div>
                    </div>
                </div>
                <div className="col table2">
                    <SMCFOP />
                </div>
                <div className="col table2">
                    <SD />
                </div>
            </div>
            <div className="row">
                <Err estilo="table1 col" />
            </div>
        </div>
    )
}