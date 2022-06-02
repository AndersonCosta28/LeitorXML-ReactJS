import React from 'react';
import { useDadosRelatorio } from '../../context/DadosRelatorioContext';
import { ParaBRL } from '../../util';
// Estilo das tabelas https://dev.to/dcodeyt/creating-beautiful-html-tables-with-css-428l
export default function SD(props) {
    const { DadosRelatorio } = useDadosRelatorio();
    const { Soma_Dia } = DadosRelatorio
    return (
        <div className={props.estilo}>
            <table className="table styled-table">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Qntd</th>
                        <th>Totais</th>
                    </tr>
                </thead>
                <tbody>
                    {Soma_Dia.map(element =>
                        <tr key={element.data}>
                            <td>{element.data}</td>
                            <td>{element.quantidade}</td>
                            <td>{ParaBRL(element.total)}</td>
                        </tr>)}
                </tbody>
                <tfoot>
                </tfoot>
            </table>
        </div>
    )
}