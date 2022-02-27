import React from 'react';
import ParaBRL from '../util';

export default function TDN(props) {
    return (
        <div className={props.estilo}>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Numero</th>
                        <th>Modelo</th>
                        <th>Serie</th>
                        <th>Chave</th>
                        <th>Status</th>
                        <th>Valor</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.Dados.map(element =>
                            <tr key={element.numero}>
                                <td>{element.numero}</td>
                                <td>{element.modelo}</td>
                                <td>{element.serie}</td>
                                <td>{element.chave}</td>
                                <td>{element.status}</td>
                                <td>{ParaBRL(element.valor)}</td>
                                <td>{element.data}</td>
                            </tr>)
                    }
                </tbody>
                <tfoot>
                </tfoot>
            </table>
        </div>
    )
}