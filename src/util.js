export const ParaBRL = new Intl.NumberFormat('pt-BR', { //Formatar para Real R$
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
}).format;

export const URL_SERVIDOR = process.env.REACT_APP_PRODUCAO === 'true' ? 'https://leitorxml-backend.herokuapp.com' : 'http://localhost:8080';

export function ValidarTempoFimSessao() {
    const HoraAtual = new Date().getTime();
    const HoraSessao = sessionStorage.getItem('FimSessaoMilesegundos');
    if (HoraAtual >= HoraSessao) {
        alert('Expirou o tempo da Sessão, por favor faça login novamente para renovar');
        return true;
    }
    else
        return false
}