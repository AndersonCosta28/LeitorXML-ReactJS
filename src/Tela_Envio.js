import React, { createContext, useState } from 'react';
import "./styles.css";
import Loading from './Loading/Loading.js'
import Relatorio from './Relatorio/Relatorio.js'

export const Contexto =  createContext()  
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
        fetch('https://leitorxml-backend.herokuapp.com/upload', config)
            .then(res => res.json())
            .then(data => {
                if (data.statusCode !== undefined || null)
                    throw new Error(`${data.statusCode} - ${data.message}`)
                console.log(data)
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
        <>
            <div id="form">
                <h1>Formulário de envio</h1>
                <form onSubmit={Submit}>
                    <input type="file" name="file" id="" accept=".zip" onChange={(value) => setArquivo(value.target.files[0])} />
                    <input type="submit" value="Enviar" id="button" style={{marginLeft: '1%'}}/>
                </form>
            </div>
            <div className='tela'>
                {loading && !Rel ? Loading() : !Rel ? Recomendacoes() : Relatorio(Dados)}
            </div>
        </>
    )    
}
function Recomendacoes() {
    return (
        <div>
            <h1>Recomendações</h1>
            <ul>
                <li>Escolher arquivo .zip, extensão .rar e demais não são compatíveis.</li>
                <li>Os arquivos XML devem estar na raiz do arquivo compactado, não havendo subpastas.</li>
                <li>Aproveite! ☺</li>
            </ul>
        </div>
    )
}
