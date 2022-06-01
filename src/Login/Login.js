import React, { useState } from 'react';
import "./login.css";
import Loading from '../Loading/Loading'
import { URL_SERVIDOR, SetHoraFimDaSessao } from '../util';

export default function Login({ navigation }) {
    require('dotenv').config()

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
        fetch(URL_SERVIDOR + '/auth/login', config)
            .then(res => res.json())
            .then(data => {
                if (data.access_token) {
                    sessionStorage.setItem('token', 'Bearer ' + data.access_token)
                    //console.log(data)
                    SetHoraFimDaSessao()
                    navigation.navigate('HomePage');
                    // document.body.style.backgroundColor = '#fff';
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
        <div className='bodylogin'>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <h2 className="active"> Entrar </h2>
                    {/* <h2 className="inactive underlineHover">Sign Up </h2> */}

                    {/* <div className="fadeIn first">
                        <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
                    </div> */}

                    <form>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="Usuário"  onChange={(Event) => setUsuario(Event.target.value)} />
                        <input type="password" id="password" className="fadeIn third" name="login" placeholder="Senha" onChange={(Event) => setSenha(Event.target.value)} />
                        <input type="submit" className="fadeIn fourth" value="Log In" onClick={() => Submit()}/>
                    </form>

                    {/* <div id="formFooter">
                        <a className="underlineHover" href="#">Esqueceu a senha?</a>
                    </div> */}

                </div>
            </div>
        </div>
    )
}
