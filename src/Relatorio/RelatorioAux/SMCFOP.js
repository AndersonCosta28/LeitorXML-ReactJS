import React from 'react';
import { useDadosRelatorio } from '../../context/DadosRelatorioContext';
import { ParaBRL } from '../../utils/util'; 
// Estilo das tabelas https://dev.to/dcodeyt/creating-beautiful-html-tables-with-css-428l
export default function SMCFOP(props) {
    const { DadosRelatorio } = useDadosRelatorio()
    const { Soma_CFOP } = DadosRelatorio;
    return (
        <div className={props.estilo}>
            <table className="table styled-table">
                <thead>
                    <tr>
                        <th>CFOP</th>
                        <th>Qntd</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Soma_CFOP.map(element =>
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