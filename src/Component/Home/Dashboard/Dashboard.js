import React, { useContext , useEffect } from 'react';
import { Authcontext } from '../../../Context';
import Accountdetiles from './Accountdetiles';
import Data from '../../Api/Data';


function Dashboard() {
    const authcontext = useContext(Authcontext);
    const User = authcontext.User;
    const setUser = authcontext.setUser;

    //==getUser
    useEffect(() => {
        Data.getUser()
            .then(data => {
                setUser(
                    data
                )
            });
    }, []);
    return (
        <div  className="user">
            <Accountdetiles Users={User}/>
        </div>
    )
}

export default Dashboard;
