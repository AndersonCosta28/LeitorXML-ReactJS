import React from 'react';
import { useDadosRelatorio } from '../../context/DadosRelatorioContext';
import {ParaBRL} from '../../util';

export default function Tot(props) {
    const { DadosRelatorio } = useDadosRelatorio()
    const {Total, Total_de_erros} = DadosRelatorio
    return (
        <div className={props.estilo}>
            <ul>
                <li>{Total.quantidade} Notas validados no total de {ParaBRL(Total.total)}</li>
                <li>{Total_de_erros.length} Notas com erros</li>
                <li>{ParaBRL(Total.icms)} ICMS</li>
            </ul>
        </div>
    )
}