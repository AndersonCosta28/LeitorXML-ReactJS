import React from 'react';
import {ParaBRL} from '../../util';
import '../relatorio.css'

export default function Tot(props) {
    return (
        <div className={props.estilo}>
            <ul>
                <li>{props.Dados.quantidade} Notas validados no total de {ParaBRL(props.Dados.total)}</li>
                <li>{props.erros.length} Notas com erros</li>
                <li>{ParaBRL(props.Dados.icms)} ICMS</li>
            </ul>
        </div>
    )
}