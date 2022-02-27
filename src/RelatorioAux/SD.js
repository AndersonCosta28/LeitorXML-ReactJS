import React from 'react';
import ParaBRL from '../util';

export default function SD(props) {
    return (
        <div className={props.estilo}>
            <table className="table table-striped">
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