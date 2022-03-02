import React from 'react';

export default function Evento(props) {
    return (
        <>
            <div className={props.estilo}>
                <h3 className="titulo">Eventos</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nº</th>
                            <th>Modelo</th>
                            <th>Serie</th>
                            <th>Chave</th>
                            <th>Justificativa</th>
                            <th>Descrição</th>
                            <th>Status</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.Eventos.map(element =>
                            <tr>
                                <td>{element.numero}</td>
                                <td>{element.modelo}</td>
                                <td>{element.serie}</td>
                                <td>{element.chave}</td>
                                <td>{element.xJust}</td>
                                <td>{element.descEvento}</td>                                
                                <td>{element.cStat}</td>
                                <td>{element.data}</td>
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