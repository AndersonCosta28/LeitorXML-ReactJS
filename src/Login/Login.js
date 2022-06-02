import React, { useEffect, useState } from 'react';
import "./login.css";
import Loading from '../Loading/Loading'
import { useNavigate } from 'react-router-dom';
import { GetHoraFimDaSessao, URL_SERVIDOR } from '../util';
import jwtDecode from 'jwt-decode';


export default function Login() {
    require('dotenv').config()

    const [loading, setLoading] = useState(false);
    const [Usuario, setUsuario] = useState('');
    const [Senha, setSenha] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        document.getElementById('nomerodape').style.color = 'black'
        return () => {            
            document.getElementById('nomerodape').style.color = '#92badd'
            setUsuario('');
            setSenha('');
            setLoading(false);
        }
    }, [])

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
        fetch(URL_SERVIDOR + '/auth/login', config)
            .then(res => res.json())
            .then(data => {
                if (data.access_token) {
                    const decoded = jwtDecode(data.access_token);
                    // console.log(decoded)
                    sessionStorage.setItem('token', 'Bearer ' + data.access_token)
                    sessionStorage.setItem('FimSessao', GetHoraFimDaSessao())
                    sessionStorage.setItem('nome_usuario', decoded.usuario)
                    navigate("HomePage");
                }
                else if (data.statusCode === 403)
                    throw new Error("Usuário inativo");
                else
                    throw new Error(data.message)
            })
            .catch(e => {
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
        <div className='bodylogin'>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <h2 className="active"> Entrar </h2>
                    {/* <h2 className="inactive underlineHover">Sign Up </h2> */}

                    {/* <div className="fadeIn first">
                        <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
                    </div> */}

                    <form>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="Usuário" onChange={(Event) => setUsuario(Event.target.value)} />
                        <input type="password" id="password" className="fadeIn third" name="login" placeholder="Senha" onChange={(Event) => setSenha(Event.target.value)} />
                        <input type="submit" className="fadeIn fourth" value="Log In" onClick={() => Submit()} />
                    </form>

                    {/* <div id="formFooter">
                        <a className="underlineHover" href="#">Esqueceu a senha?</a>
                    </div> */}
                    {/* <button style={{display: 'none'}} onClick={goHome}></button> */}
                </div>
            </div>
        </div>
    )
}
