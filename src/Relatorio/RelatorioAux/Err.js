import React from 'react';
import { useDadosRelatorio } from '../../context/DadosRelatorioContext';

export default function Err(props) {
    const { DadosRelatorio } = useDadosRelatorio();
    const { Total_de_erros } = DadosRelatorio;
    return (
        <>
            <div className={props.estilo}>
                <h3 className="titulo">Arquivos não validados</h3>
                <table className="table styled-table">
                    <thead>
                        <tr>
                            <th>Arquivo</th>
                            <th>Motivos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Total_de_erros.map(element =>
                            <tr key={element.nome}>
                                <td>{element.nome}</td>
                                <td>{element.motivo}</td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>
            </div>
        </>
    )
}