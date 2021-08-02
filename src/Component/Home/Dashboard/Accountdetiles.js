import React, { useContext } from 'react';
import {Authcontext} from '../../../Context';
function Accountdetiles(props) {
    const authcontext = useContext(Authcontext);
    const setAccount = authcontext.setAccount;

    function logout(e){
        e.preventDefault();
        
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        setAccount({})

    }


    const Users = props.Users;
    return (<div  className="container">
            <div id="user">
            {Users.map((User,index) =>(
                    <div className="card " key={index}>
                    <img src={User.image} className="card-img-top" alt="..."/>
                    <ul className="list-group list-group-flush mt-4">
                    <li className="list-group-item mt-2">Job Number : {User.id}</li>
                    <li className="list-group-item mt-2">Name : {User.name}</li>
                    <li className="list-group-item mt-2">Work Starting Date : {User.workdate}</li>
                    <li className="list-group-item mt-2">Job Title : {User.jobtitle}</li>
                    <li className="list-group-item mt-3">
                        <button type="button"
                        className="btn btn-outline-danger btn-sm" onClick={logout}>
                            Logout
                        </button>
                    </li>
                    </ul>
                </div>
                ))}
        </div>
    </div>
    )
}

export default Accountdetiles;