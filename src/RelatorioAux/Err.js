import React from 'react';

export default function Err(props) {
    return (
        <>
            <h1 className="titulo">Lista de arquivos não validados</h1>
            <div className={props.estilo}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Arquivo</th>
                            <th>Motivos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.erros.map(element =>
                                <tr>
                                    <td>{element.nome}</td>
                                    <td>{element.motivo}</td>
                                </tr>
                            )
                        }
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>
            </div>
        </>
    )
}