import React, { useContext } from 'react';
import Login from './Login';
import './Control.css';
import { Authcontext } from '../../Context';
import Home from '../Home/Home';
function Control() {
    const authcontext = useContext(Authcontext);
    const account = authcontext.account;
    return (<div className="control">
        <div className="container">
            {account.username?<Home/>:<Login/>}
        </div>
    </div>
    )
}

export default Control;
