import React, { useContext, useState } from 'react';
import { Authcontext } from '../../Context';
import Logo from '../image/login/logo.png';
import Accountimg from '../image/login/logo_rafeeq.svg';

function Login() {
    const authcontext = useContext(Authcontext);
    const setAccount = authcontext.setAccount;

    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");

    function lognin(e){
        e.preventDefault();
        if(username===""&&password===""){
            alert('Wrong Details')
        }else{
            localStorage.setItem("username",username);
            localStorage.setItem("password",password);
            setAccount({username,password})
            alert(" Welcome Back! ")
        }
    }

    return (<section>
                <div className="logintabel">
                    <div className="login-header">
                        <div className="loginlogo mb-4">
                            <img src={Logo}/>
                        </div>
                        <div className="login-header-text">
                            <h4> Welcome Back! </h4>
                            <q> The first step towards knowledge 
                                <br/>is to know that we are ignorant </q>
                                <br/>
                                <p>" Richard Cecil "</p>
                        </div>
                    </div>

                    <div className="loginbody">
                        <div className="accountimg">
                            <img src={Accountimg}/>
                        </div>
                        <h4>Login</h4>
                        <div className="formlogn">
                            <form>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                     aria-describedby="emailHelp" placeholder="User Name"
                                      value={username} onChange={e=> setusername(e.target.value)}/>
                                </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                 placeholder="Password" value={password} 
                                 onChange={e=> setpassword(e.target.value)}/>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label">Remember me</label>
                            </div>
                                <button type="submit" className="btn butonlogin" onClick={lognin}>
                                Login
                                </button>
                            </form>
                        </div>
                    </div>
            </div>
    </section>)
}

export default Login;
