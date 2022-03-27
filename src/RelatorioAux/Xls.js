import React from "react";
import ReactExport from "react-export-excel";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

//https://stackoverflow.com/questions/61316889/how-to-export-data-to-excel-using-react-libraries

export default function xls(Dados) {
    const data = Dados
    const camelCase = (str) => {
        return str.substring(0, 1).toUpperCase() + str.substring(1);
    };

    const filterColumns = (data) => {
        // Get column names
        const columns = Object.keys(data[0]);

        // Remove by key (firstname)
        const filterColsByKey = columns.filter(c => !['desconto', 'data_recebimento', 'produto', 'emitente'].includes(c));
        // OR use the below line instead of the above if you want to filter by index
        // columns.shift()

        return filterColsByKey // OR return columns
    };

    return (
        <div className="App">
            <ExcelFile filename="Relatorio" element={<button>Baixar em EXCEL</button>}>
                <ExcelSheet data={data} name="Relatorio">
                    {
                        filterColumns(data).map((col) => {
                            return <ExcelColumn label={camelCase(col)} value={col} key='numero' />
                        })
                    }
                </ExcelSheet>
            </ExcelFile>
            <table id="table-to-xls" style={{ display: 'none' }}>
                <thead>
                    <tr key="numero">
                        <th>numero</th>
                        <th>serie</th>
                        <th>modelo</th>
                        <th>chave</th>
                        <th>data</th>
                        <th>status</th>
                        <th>valor</th>
                        <th>ipi</th>
                        <th>vOutro</th>
                        <th>vFrete</th>
                        <th>vBCST</th>
                        <th>vST</th>
                        <th>vBC</th>
                        <th>vICMS</th>
                        <th>vPIS</th>
                        <th>vCOFINS</th>
                        <th>vTotTrib</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => {
                        return (
                            <tr key={item.numero}>
                                <td>{item.numero}</td>
                                <td>{item.serie}</td>
                                <td>{item.modelo}</td>
                                <td>{item.chave}</td>
                                <td>{item.data}</td>
                                <td>{item.status}</td>
                                <td>{item.valor}</td>
                                <td>{item.ipi}</td>
                                <td>{item.vOutro}</td>
                                <td>{item.vFrete}</td>
                                <td>{item.vBCST}</td>
                                <td>{item.vST}</td>
                                <td>{item.vBC}</td>
                                <td>{item.vICMS}</td>
                                <td>{item.vPIS}</td>
                                <td>{item.vCOFINS}</td>
                                <td>{item.vTotTrib}</td>
                            </tr>
                        );
                    })}
                </tbody >
            </table>
        </div >
    );
}
