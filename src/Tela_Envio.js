import React, { useState, useEffect } from 'react';
import "./styles.css";
import Loading from './Loading'
export default function Tela_Envio({ navigation }) {

    const [Arquivo, setArquivo] = useState();
    const [loading, setLoading] = useState(false);

    function Submit(event) {
        setLoading(true);
        event.preventDefault();
        const data = new FormData();
        data.append("file", Arquivo);
        const config = {
            method: 'POST',
            body: data,
            headers:{
                'Authorization': sessionStorage.getItem('token')
            }
        }
        fetch('http://localhost:8080/upload', config)
            .then(res => res.json())
            .then(data => {
                if(data.statusCode === 200)
                    navigation.navigate('Relatorio', { DadosDoBackEnd: data });
                else if (data.statusCode === 401)
                    throw "Não autorizado";
                else
                    throw data.message

                
            })
            .catch(e => {
                alert(e)
            })
            .finally(() => {
                setLoading(false);
            });
    }
    useEffect(() => document.title = 'teste', [])
    if (loading) {
        return Loading()
    }

    return (
        <>
            <div id="form">
                <h1>Formulário de envio</h1>
                <form onSubmit={Submit}>
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