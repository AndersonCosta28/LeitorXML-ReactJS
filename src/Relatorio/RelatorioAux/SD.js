import React from 'react';
import {ParaBRL} from '../../util';
// Estilo das tabelas https://dev.to/dcodeyt/creating-beautiful-html-tables-with-css-428l
export default function SD(props) {
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
                    {props.Dados.map(element =>
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