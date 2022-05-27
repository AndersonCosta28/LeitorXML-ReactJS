import React from 'react';
import '../relatorio.css'

export default function Evento(props) {
    return (
        <>
            <div className={props.estilo}>
                <h3 className="titulo">Eventos</h3>
                <table className="table styled-table">
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
                            <tr key={element.numero}>
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