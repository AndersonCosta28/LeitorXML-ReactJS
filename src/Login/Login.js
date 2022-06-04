import React, { useEffect, useState } from 'react';
import "./login.css";
import Loading from '../Loading/Loading'
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {
    
    const [loading, setLoading] = useState(false);
    const [Usuario, setUsuario] = useState('');
    const [Senha, setSenha] = useState('');
    const {REACT_APP_SERVIDOR} = process.env;

    const navigate = useNavigate();
    useEffect(() => {
        sessionStorage.clear();
        localStorage.clear();
        document.getElementById('nomerodape').style.color = 'black'
        return () => {
            document.getElementById('nomerodape').style.color = '#92badd'
            setUsuario('');
            setSenha('');
            setLoading(false);
        }
    }, [])

    function Submit(event) {
        event.preventDefault();
        setLoading(true);
        const data = { usuario: Usuario, senha: Senha }
        const config = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        }
        fetch(REACT_APP_SERVIDOR + '/auth/login', config)
            .then(res => res.json())
            .then(data => {
                if (data.access_token) {
                    const decoded = jwtDecode(data.access_token);
                    sessionStorage.setItem('token', 'Bearer ' + data.access_token)
                    sessionStorage.setItem('FimSessaoMilesegundos', new Date(decoded.exp * 1000).getTime());
                    sessionStorage.setItem('FimSessaoDataLocal', new Date(decoded.exp * 1000).toLocaleTimeString());
                    sessionStorage.setItem('nome_usuario', decoded.usuario)
                    navigate("HomePage");
                }

                else
                    throw new Error(data.message)
            })
            .catch(e => {
                console.log(e)
                if (String(e).includes('TypeError: Failed to fetch'))
                    toast.error('Ocorreu um erro para conectar ao servidor, reporte a situação para o desenvolvedor')

                else
                    toast.error(e.message)
            })
            .finally(() => {
                setLoading(false);
            });
    }
    if (loading) {
        return Loading()
    }
    return (
        <div className='bodylogin'>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <h2 className="active"> Entrar </h2>
                    {/* <h2 className="inactive underlineHover">Sign Up </h2> */}

                    {/* <div className="fadeIn first">
                        <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
                    </div> */}

                    <form onSubmit={Submit}>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="Usuário" onChange={(Event) => setUsuario(Event.target.value)} />
                        <input type="password" id="password" className="fadeIn third" name="login" placeholder="Senha" onChange={(Event) => setSenha(Event.target.value)} />
                        <input type="submit" className="fadeIn fourth" value="Log In" />
                    </form>
                    <Toaster
                        position="bottom-right"
                        reverseOrder={true}
                    />

                    {/* <div id="formFooter">
                        <a className="underlineHover" href="#">Esqueceu a senha?</a>
                    </div> */}
                    {/* <button style={{display: 'none'}} onClick={goHome}></button> */}
                </div>
            </div>
        </div>
    )
}
