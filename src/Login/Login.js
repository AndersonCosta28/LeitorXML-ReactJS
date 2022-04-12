import React, { useState } from 'react';
import "./loginstyle.css";
import Loading from '../Loading/Loading'

export default function App({ navigation }) {
    const [loading, setLoading] = useState(false);
    const [Usuario, setUsuario] = useState('');
    const [Senha, setSenha] = useState('')


    function Submit() {
        setLoading(true);
        const data = { usuario: Usuario, senha: Senha }
        const config = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        }
        fetch('http://localhost:8080/auth/login', config)
            .then(res => res.json())
            .then(data => {
                if (data.access_token) {
                    sessionStorage.setItem('token', 'Bearer ' + data.access_token)
                    navigation.navigate('Tela_Envio');
                }
                else if (data.statusCode === 403)
                    throw new Error("Usuário inativo");
                else
                    throw new Error(data.message)
            })
            .catch(e => {
                //console.log(e)
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
        <div className='telaLogin'>
            <form>
                <h1 style={{ textAlign: 'center' }}>Seja bem-vindo</h1>
                <div className='d1'>
                    <label className='l1'>Usuário:</label>
                    <input type='text' id='username' name='username' className='i1' onChange={(Event) => setUsuario(Event.target.value)}></input>
                </div>
                <div className='d1'>
                    <label className='l1'>Senha:</label>
                    <input type='password' id='password' name='username' className='i1' onChange={(Event) => setSenha(Event.target.value)} ></input>
                </div>
                <div className='d2'>
                    <a href='/'>Esqueci Senha</a><input type='submit' value='Entrar' className='i1' onClick={() => Submit()}></input>
                </div>
            </form >
        </div >
    )
}