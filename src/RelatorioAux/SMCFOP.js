import React from 'react';
import ParaBRL from '../util';

export default function SMCFOP(props) {
    return (
        <div className={props.estilo}>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>CFOP</th>
                        <th>Qntd</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.Dados.map(element =>
                            <tr key={element.cfop}>
                                <td>{element.cfop}</td>
                                <td>{element.quantidade}</td>
                                <td>{ParaBRL(element.total)}</td>
                            </tr>
                        )
                    }
                </tbody>
                <tfoot>
                </tfoot>
            </table>
        </div>
    )
}