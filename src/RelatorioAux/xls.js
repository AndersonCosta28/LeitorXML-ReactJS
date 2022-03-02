import { Grid, GridColumn, GridToolbar } from "@progress/kendo-react-grid";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import React from 'react';


export default function App() {
    const _export = React.useRef(null);

    const excelExport = () => {
        if (_export.current !== null) {
            _export.current.save();
        }
    };
    const Todas_As_Notas = JSON.parse(sessionStorage.getItem('DadosDoBackEnd'))[1]
    return (
        <ExcelExport data={Todas_As_Notas} ref={_export}>
            <Grid
                data={Todas_As_Notas}
                style={{
                    height: "420px",
                }}
            >
                <GridToolbar>
                    <button
                        title="Export Excel"
                        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
                        onClick={excelExport}
                    >
                        Exportar para excel
                    </button>
                </GridToolbar>
                <GridColumn field="numero" title="Numero"/>
                <GridColumn field="serie" title="Série"/>
                <GridColumn field="modelo" title="Modelo" />
                <GridColumn field="chave" title="Chave" />
                <GridColumn field="data" title="Data" />
                <GridColumn field="status" title="Status" />
                <GridColumn field="valor" title="Valor Total" />
                <GridColumn field="ipi" title="Valor IPI" />
                <GridColumn field="vOutro" title="Valor Outros" />
                <GridColumn field="vFrete" title="Valor Frete" />
                <GridColumn field="vBCST" title="Base de calculo ICMS substituído" />
                <GridColumn field="vST" title="Valor ICMS Substituído" />
                <GridColumn field="vBC" title="Base de calculo ICMS" />
                <GridColumn field="vICMS" title="Valor ICMS" />                
                <GridColumn field="vPIS" title="Valor PIS" />
                <GridColumn field="vCOFINS" title="Valor COFINS" />
                <GridColumn field="vTotTrib" title="Valor Total aproximado dos Tributos" />
            </Grid>
        </ExcelExport>
    );
};
