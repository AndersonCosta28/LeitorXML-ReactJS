import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./styles.css";
import Loading from './Loading'
export default function App() {

    const [Arquivo, setArquivo] = useState()    
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    function SubMit(event) {
        setLoading(true);
        event.preventDefault();
        const data = new FormData();
        data.append("file", Arquivo);
        const config = {
            method: 'POST',
            body: data,
        }
        fetch('https://leitorxml-backend.herokuapp.com/uploads', config)
            .then(res => res.json())
            .then(data => { 
                sessionStorage.setItem('DadosDoBackEnd', JSON.stringify(data))
                navigate('/relatorio') 
            })
            .catch(e => {
                alert(e)
            })
            .finally(() => {
                setLoading(false);
            });
    }
    
    if (loading) {
        return Loading()
    }
    return (
        <>
            <div id="form">
                <h1>Formulário de envio</h1>
                <form onSubmit={SubMit}>
                    <input type="file" name="file" id="" accept=".zip" onChange={(value) => setArquivo(value.target.files[0])} />
                    <input type="submit" value="Enviar" id="button" />

                </form>
            </div>
            <div className='tela'>
                <Recomendacoes></Recomendacoes>
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