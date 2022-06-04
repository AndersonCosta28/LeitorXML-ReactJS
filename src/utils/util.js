export const ParaBRL = new Intl.NumberFormat('pt-BR', { //Formatar para Real R$
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
}).format;

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