import React, { useEffect, useState } from 'react';
import "./styles.css";
export default function Relatorio() {

    const [Soma_Dia, setSoma_Dia] = useState([])
    const [Soma_CFOP, setSoma_CFOP] = useState([])
    const [Todas_As_Notas, setTodas_As_Notas] = useState([])
    const [Total, setTotal] = useState([])
    const [Erros, setErros] = useState([])

    useEffect(() => {
        fetch('http://localhost:30/' + 'teste', {
            method: 'GET',
            mode: 'cors'
        })
            .then(res => res.json())
            .then(data => {
                const [Soma_Dia, Todas_As_Notas, Total, Soma_CFOP, total_de_erros] = data
                console.log(total_de_erros)
                setSoma_Dia(Soma_Dia)
                setTodas_As_Notas(Todas_As_Notas)
                setTotal(Total)
                setSoma_CFOP(Soma_CFOP)
                setErros(total_de_erros)
            })
            .catch(e => e)

    }, [])

    return (
        <div>
            <h1 className="titulo"><a href="/">Página inicial</a></h1>
            <div className="row" style={{marginTop: '3%'}}>
                <SMCFOP Dados={Soma_CFOP}></SMCFOP>
                <Tot Dados={Total} erros={Erros}></Tot>
                <div className="table1 col-4">
                    <button> <a href="http://localhost:30/relatorio" target="blank">Gerar PDF</a></button>
                </div>
            </div>
            <div className="row">
                <SD Dados={Soma_Dia}></SD>
                <TDN Dados={Todas_As_Notas}></TDN>
            </div>


            <div className="row">
                <Err erros={Erros}></Err>
            </div>
        </div>
    )
}
function SD(props) {
    return (
        <div className="table1 col-6">
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
                        <tr>
                            <td>{element.data}</td>
                            <td>{element.quantidade}</td>
                            <td>{element.total}</td>
                        </tr>)}
                </tbody>
                <tfoot>
                </tfoot>
            </table>
        </div>
    )
}
function TDN(props) {
    return (
        <div className="table2 col-6">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Numero</th>
                        <th>Modelo</th>
                        <th>Serie</th>
                        <th>Chave</th>
                        <th>Valor</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.Dados.map(element =>
                            <tr>
                                <td>{element.numero}</td>
                                <td>{element.modelo}</td>
                                <td>{element.serie}</td>
                                <td>{element.chave}</td>
                                <td className='valor'>{element.valor}</td>
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

function SMCFOP(props) {
    return (
        <div className="table1 col-4">
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
                                <td>{element.total}</td>
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

function Tot(props) {
    return (
        <div className="table1 col-4">
            <ul>
                <li>{props.Dados.quantidade} Notas validados no total de {props.Dados.total}</li>
                <li>{Array(props.erros).length} Notas com erros</li>
                <li>{props.Dados.icms} ICMS</li>
            </ul>
        </div>
    )
}

function Err(props) {
    return (
        <>
            <h1 className="titulo">Lista de arquivos não validados</h1>
            <div className="table2 col-6">
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