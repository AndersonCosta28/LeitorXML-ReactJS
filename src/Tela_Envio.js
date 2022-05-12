import React, { createContext, useState } from 'react';
import "./styles.css";
import Loading from './Loading/Loading.js'
import Relatorio from './Relatorio/Relatorio.js'
import { URL_SERVIDOR } from './util';

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

    function RetornaHoraFimDaSessao(){
        const data = new Date();
        return new Date(data.setMinutes(data.getMinutes() + 10)).toLocaleTimeString()
    }

    return (
        <>
            <div id="form">
                <div className='row'>
                    <div className='col'>
                        <h1>Formulário de envio</h1>

                    </div>
                    <div className='col'>
                        <h4>Fim da sessão em: {RetornaHoraFimDaSessao()}</h4>
                    </div>
                </div>
                <form onSubmit={Submit}>
                    <input type="file" name="file" id="" accept=".zip" onChange={(value) => setArquivo(value.target.files[0])} />
                    <input type="submit" value="Enviar" id="button" disabled={!!loading} style={{ marginLeft: '1%' }} />
                </form>
            </div>
            <div>
                {loading && !Rel ? Loading() : !Rel ? Recomendacoes() : Relatorio(Dados)}
            </div>
        </>
    )
}
function Recomendacoes() {
    return (
        <div className='centralizarRecomendacoes'>
            <h1>Recomendações</h1>
            <ul>
                <li>Escolher arquivo .zip, extensão .rar e demais não são compatíveis.</li>
                <li>Os arquivos XML devem estar na raiz do arquivo compactado, não havendo subpastas.</li>
                <li>Aproveite! ☺</li>
            </ul>
        </div>
    )
}
