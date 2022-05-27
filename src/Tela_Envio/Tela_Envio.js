import React, { createContext, useState } from 'react';
import "../styles.css";
import "./tela_envio.css"
import Loading from '../Loading/Loading.js'
import Relatorio from '../Relatorio/Relatorio.js'
import { FimSessao, URL_SERVIDOR } from '../util';

export const Contexto = createContext()
export function Tela_Envio() {

    const [Arquivo, setArquivo] = useState();
    const [loading, setLoading] = useState(false);
    const [Dados, SetDados] = useState([])
    const [Rel, SetRel] = useState(false);
    
    function Submit(event) {
        setLoading(true);
        SetRel(false);
        event.preventDefault();
        const data = new FormData();
        data.append("file", Arquivo);
        const config = {
            method: 'POST',
            body: data,
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        }
        fetch(URL_SERVIDOR + '/upload', config)
            .then(res => res.json())
            .then(data => {
                if (data.statusCode !== undefined || null)
                    throw new Error(`${data.statusCode} - ${data.message}`)
                SetDados(data)
                SetRel(true)
            })
            .catch(e => {
                alert(e)
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <header>
            <div id="form">
                <div className='row'>
                    <div className='col'>
                        <h1>Formulário de envio</h1>
                    </div>
                    <div className='col'>
                        <h4 className='FimSessao'>Fim da sessão às : {FimSessao}</h4>
                    </div>
                </div>
                <form onSubmit={Submit}>
                    <input type="file" name="file" aria-label='File browser example'  accept=".zip" onChange={(value) => setArquivo(value.target.files[0])} />
                    <button className="button botaosubmit" disabled={!!loading}>Enviar</button>
                </form>
            </div>
            <div>
                {loading && !Rel ? Loading() : !Rel ? Recomendacoes() : Relatorio(Dados)}
            </div>
        </header>
    )
}
function Recomendacoes() {
    return (
        <div className='centralizarRecomendacoes'>
            <h1>Recomendações</h1>
            <ul>
                <li>Escolher arquivo .zip, extensão .rar e demais não são compatíveis.</li>
                <li>Os arquivos XML devem estar na raiz do arquivo compactado, não havendo subpastas.</li>
                <li>Aproveite! <span role="img" aria-label='smile'>😀</span></li>
            </ul>
        </div>
    )
}
