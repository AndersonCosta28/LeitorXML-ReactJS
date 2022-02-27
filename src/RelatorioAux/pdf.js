import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import ParaBRL from "../util";

export default function pdf() {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;
  const [Soma_Dia, Todas_As_Notas, Total, Soma_CFOP, total_de_erros] = JSON.parse(sessionStorage.getItem("DadosDoBackEnd"));
  const TDN = JSON.parse(sessionStorage.getItem("DadosDoBackEnd"))[1];

  const DevelopBy = { text: "Desenvolvido por Anderson Costa", link: 'https://github.com/Mert1s/', color: 'blue' };

  const ArrayTodas_As_Notas = Todas_As_Notas.map((value) => {
    return [
      { text: `${value.numero}`, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: `${value.modelo}`, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: `${value.serie}`, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: `${value.chave}`, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: `${value.status}`, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: `${ParaBRL(value.valor)}`, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: `${value.data}`, fontSize: 9, margin: [0, 2, 0, 2] },
    ];
  });
  const ArraySomaCFOP = Soma_CFOP.map((value) => {
    return [
      { text: `${value.cfop}`, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: `${value.quantidade}`, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: `${ParaBRL(value.total)}`, fontSize: 9, margin: [0, 2, 0, 2] },
    ];
  });
  const ArrayTotal = [[
    { text: `${Total.quantidade}`, fontSize: 9, margin: [0, 2, 0, 2] },
    { text: `${ParaBRL(Total.total)}`, fontSize: 9, margin: [0, 2, 0, 2] },
    { text: `${ParaBRL(Total.icms)}`, fontSize: 9, margin: [0, 2, 0, 2] },
    { text: `${ParaBRL(Total.outro)}`, fontSize: 9, margin: [0, 2, 0, 2] },
    { text: `${ParaBRL(Total.frete)}`, fontSize: 9, margin: [0, 2, 0, 2] },
    { text: `${ParaBRL(Total.substituicao)}`, fontSize: 9, margin: [0, 2, 0, 2], },
    { text: `${ParaBRL(Total.ipi)}`, fontSize: 9, margin: [0, 2, 0, 2], },
    { text: `${ParaBRL(Total.desconto)}`, fontSize: 9, margin: [0, 2, 0, 2] },
  ]];
  const TodasAsNotas_VIEW = [
    { text: "Todas as Notas", fontSize: 14, margin: [5, 5, 5, 5] },
    {
      table: {
        headerRows: 1,
        widths: ["auto", "auto", "auto", "auto", "auto", "auto", "auto"],
        body: [
          [
            { text: "Numero", style: "tableHeader", fontSize: 9, alignment: 'center' },
            { text: "Modelo", style: "tableHeader", fontSize: 9 },
            { text: "Serie", style: "tableHeader", fontSize: 9 },
            { text: "Chave", style: "tableHeader", fontSize: 9, alignment: 'center' },
            { text: "Status", style: "tableHeader", fontSize: 9 },
            { text: "Valor", style: "tableHeader", fontSize: 9 },
            { text: "Data", style: "tableHeader", fontSize: 9, alignment: 'center' },
          ],
          ...ArrayTodas_As_Notas,
        ],
      },
      layout: "lightHorizontalLines",
    },
  ];
  const SomaPorCFOP_VIEW = [
    { text: "SOMA POR CFOP", fontSize: 14, margin: [5, 5, 5, 15] },
    {
      table: {
        headerRows: 1,
        widths: ["auto", "auto", "auto"],
        body: [
          [
            { text: "CFOP", style: "tableHeader", fontSize: 9 },
            { text: "Quantidade", style: "tableHeader", fontSize: 9 },
            { text: "Total", style: "tableHeader", fontSize: 9 },
          ],
          ...ArraySomaCFOP,
        ],
      },
      layout: "headerLineOnly",
    },
  ];
  const Total_VIEW = [
    { text: "Totalizadores", fontSize: 14, margin: [5, 15, 5, 15] },
    {
      table: {
        headerRows: 1,
        widths: ["auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto"],
        body: [
          [
            { text: "Quantidade", style: "tableHeader", fontSize: 9 },
            { text: "Total", style: "tableHeader", fontSize: 9 },
            { text: "ICMS", style: "tableHeader", fontSize: 9 },
            { text: "Outro", style: "tableHeader", fontSize: 9 },
            { text: "Frete", style: "tableHeader", fontSize: 9 },
            { text: "Substituicao", style: "tableHeader", fontSize: 9 },
            { text: "IPI", style: "tableHeader", fontSize: 9 },
            { text: "Desconto", style: "tableHeader", fontSize: 9 },
          ],
          ...ArrayTotal,
        ],
      },
      layout: "headerLineOnly",
    },
  ];
  const cabecalho = { text: "Relatório", alignment: 'center', fontSize: 30, margin: [5, 5, 5, 5] }
  const docDefinitions = {
    info: {
      title: 'Relatório de XML',
      author: 'Anderson Costa',
      subject: 'Relatório detalhado de importação de XML ',
      keywords: 'Relatório XML contabilidade vendas compras',
    },
    pageSize: "A4",
    PageMargins: [5, 5, 5, 5],
    //header: [{ text: "Relatório",  alignment: 'center', fontSize: 18, margin: [5, 15, 5, 5] }],
    footer: function (currentPage, pageCount) {
      return { text: [`Página ${currentPage.toString()} de ${pageCount}`, ` - emitido em ${new Date(Date.now()).toLocaleString('pt-BR', { timeZone: "America/Sao_Paulo" })} - `, DevelopBy], fontSize: 8, margin: [15, 15, 15, 15] };
    },
    content: [cabecalho, TodasAsNotas_VIEW, { unbreakable: true, stack: [SomaPorCFOP_VIEW, Total_VIEW] }],
  };
  pdfMake.createPdf(docDefinitions).open();
}