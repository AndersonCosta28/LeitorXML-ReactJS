import React, { useState } from 'react';
import './CompararLados.css';

export default function CompararLados() {
    const [LadoA, SetLadoA] = useState([]);
    const [LadoB, SetLadoB] = useState([]);
    const [Contem, SetContem] = useState([])
    const [NaoContem, SetNaoContem] = useState([])



    function Comparar() {
        const A = LadoA.length == 0 ? [] : LadoA.split('\n').map(item => { if (item == ' ') { } else return Number(item) });
        const B = LadoB.length == 0 ? [] : LadoB.split('\n').map(item => { if (item == ' ') { } else return Number(item) });
        console.log(LadoA.split('\n').map(item => { if (item == ' ') { console.log(item) } else return Number(item) }))
        const contem = [];
        const naocontem = [];
        A.forEach((item, index) => {
            if (B.includes(item))
                contem.push(item)
            else
                naocontem.push(item)
        })
        SetContem(contem);
        SetNaoContem(naocontem);
    }

    return (
        <div style={{
            // width: '100%', 
            position: 'relative',
            left: '30%'
        }}>
            <h1 className='titulo'>Compara o Lado A com o Lado B</h1>
            <div className='Campos'><div className="form">
                <div className="t1">
                    <h3>Lado A</h3>
                    <textarea name="ladoA" id="ladoA" cols="30" rows="10" onChange={e => SetLadoA(e.target.value)}></textarea>
                </div>
                <div className="t1">
                    <h3>Lado B</h3>
                    <textarea name="ladoB" id="ladoB" cols="30" rows="10" onChange={e => SetLadoB(e.target.value)}></textarea>
                </div>
            </div>

                <div className="form">
                    <div className="t1">
                        <h3>Contem</h3>
                        <textarea name="contem" id="contem" cols="30" rows="10" readOnly placeholder="Resultado" value={Contem}></textarea>
                    </div>
                    <div className="t1">
                        <h3>Não contem</h3>
                        <textarea name="naocontem" id="naocontem" cols="30" rows="10" readOnly placeholder="Resultado" value={NaoContem}></textarea>
                    </div>
                </div>
            </div>

            <button onClick={Comparar} className='BotaoComparar'>Comparar</button>
        </div>
    )
}