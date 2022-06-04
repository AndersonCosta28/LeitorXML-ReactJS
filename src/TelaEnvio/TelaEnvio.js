import React, { useEffect, useState } from 'react';
import "../styles.css";
import "./telaenvio.css"
import Relatorio from '../Relatorio/Relatorio.js'
import { URL_SERVIDOR, ValidarTempoFimSessao } from '../utils/util'
import { useDadosRelatorio } from '../context/DadosRelatorioContext';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


export default function TelaEnvio() {
    const [Arquivo, setArquivo] = useState();
    const [Exibir, SetExibir] = useState({ Loading: false, Relatorio: false });
    const { SetDadosRelatorio } = useDadosRelatorio();
    let navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem('FimSessaoMilesegundos') == null) {
            alert('Parece que você tentou acessar uma rota sem fazer LOGIN, você será redirecionado para a página de LOGIN.');
            navigate('../');
            return;
        }
    })

    function Submit(event) {
        event.preventDefault();

        if (ValidarTempoFimSessao()) {
            navigate('../');
            return;
        }

        if (!Arquivo) {
            toast('Antes de enviar, selecione um arquivo.', { icon: '❗️' });
            return;
        }

        SetExibir({ Loading: true, Relatorio: false });
        const ConfiguracaoRequisicao = ConfigurarRequisicao();
        FazerRequisicao(ConfiguracaoRequisicao);
    }

    function ConfigurarRequisicao() {
        const data = new FormData();
        data.append("file", Arquivo);
        const config = {
            method: 'POST',
            body: data,
            headers: { 'Authorization': sessionStorage.getItem('token') }
        }
        return config;
    }

    function FazerRequisicao(config) {
        const NotificacaoDeCarregamento = toast.loading('Carregando');
        fetch(URL_SERVIDOR + '/upload', config)
            .then(res => res.json())
            .then(data => {
                if (data.statusCode !== undefined || null)
                    throw new Error(`${data.statusCode} - ${data.message}`)
                toast.dismiss(NotificacaoDeCarregamento);
                toast.success('Relatório Rendezirado');
                SetDadosRelatorio({
                    Soma_Dia: data[0],
                    Todas_As_Notas: data[1],
                    Total: data[2],
                    Soma_CFOP: data[3],
                    Total_de_erros: data[4],
                    Todos_Os_Eventos: data[5]
                })
            })
            .catch(e => {
                toast.error(e)
            })
            .finally(() => {
                SetExibir({ Loading: false, Relatorio: true });
            });
    }
    return (
        <header>
            <Toaster
                position="bottom-right"
                reverseOrder={true}
            />
            <div id="form" className='form'>
                <div className='row'>
                    <div className='col'>
                        <h1>Formulário de envio</h1>
                    </div>
                    <div className='col'>
                        <h4 className='FimSessao'>Fim da sessão às : {sessionStorage.getItem('FimSessaoDataLocal')}</h4>
                    </div>
                </div>
                <form onSubmit={Submit}>
                    <input type="file" name="file" aria-label='File browser example' accept=".zip" onChange={(value) => setArquivo(value.target.files[0])} />
                    <button type='submit' className="button botaosubmit" disabled={!!Exibir.Loading}>Enviar</button>
                </form>
            </div>
            <div id='corpo'>
                {!Exibir.Relatorio ? Recomendacoes() : Relatorio()}
            </div>
        </header>
    )
}
function Recomendacoes() {
    return (
        <div className='Recomendacoes'>
            <h1>Recomendações</h1>
            <ul>
                <li>Escolher arquivo .zip, extensão .rar e demais não são compatíveis.</li>
                <li>Os arquivos XML devem estar na raiz do arquivo compactado, não havendo subpastas.</li>
                <li>Aproveite! <span role="img" aria-label='smile'>😀</span></li>
            </ul>
        </div>
    )
}
