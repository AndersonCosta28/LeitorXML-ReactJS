import React from 'react';

export default function Err(props) {
    return (
        <>
            <div className={props.estilo}>
                <h3 className="titulo">Arquivos não validados</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Arquivo</th>
                            <th>Motivos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.erros.map(element =>
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