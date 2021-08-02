import React, { useContext } from 'react';
import { Authcontext } from '../../Context';
import Alwefaqlogo from '../image/login/Alwefaqlogo.png';
import Notificationicon from '../Notification/Notificationicon';
import {NavLink} from 'react-router-dom';

export function Navbar() {
    const authcontext = useContext(Authcontext);
    const account = authcontext.account;
    return (<>
    {account.username==="Admin"?<Navbaradmin/>:<Navbaruser/>}
    </>)}
export default Navbar;


function Navbaruser() {
    
    const authcontext = useContext(Authcontext);
    const account = authcontext.account;
    return (
        <nav className="navbar navbar-light bg-light justify-content-end mt-2 mb-2">
            <div className="container-fluid">
            <div className="navbarlogn">
                     <NavLink to="/" exact>
                        <img src={Alwefaqlogo}/>
                    </NavLink>
                </div>
                <div className="navbarlogn d-flex">
                    <p>{account.username}</p>
                </div>
                
            </div>
        </nav>
    )
}
function Navbaradmin() {
    
    const authcontext = useContext(Authcontext);
    const account = authcontext.account;
    return (
        <nav className="navbar navbar-light bg-light  mt-2 mb-2">
            <div className="container-fluid">
                <div className="navbarlogn">
                     <NavLink to="/" exact>
                        <img src={Alwefaqlogo}/>
                    </NavLink>
                </div>
                <div className="navbarlogn d-flex">
                    <p>{account.username}</p>
                    
                    <NavLink to="/notification" exact>
                        <Notificationicon/>
                    </NavLink>
                </div>
            </div>
      </nav>
    )
}