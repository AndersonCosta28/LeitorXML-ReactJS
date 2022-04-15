export const ParaBRL = new Intl.NumberFormat('pt-BR', { //Formatar para Real R$
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
}).format;

export const URL_SERVIDOR = process.env.REACT_APP_PRODUCAO === 'true' ? 'http://leitorxml-backend.herokuapp.com' : 'http://localhost:8080';
