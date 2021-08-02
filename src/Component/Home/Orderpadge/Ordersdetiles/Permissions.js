import React, { useContext, useEffect } from 'react'
import { Authcontext } from '../../../../Context';
import Data from '../../../Api/Data';
import { Addpermissions, Buttonpermissions } from './Addpermissions';
import './Vacation.css';

function Permissions() {
    const authcontext = useContext(Authcontext);
    const Permissions = authcontext.Permissions;
    const setPermissions = authcontext.setPermissions;

    //==Order
    useEffect(() => {
        Data.getPermissions()
            .then(data => {
                setPermissions(
                    data
                )
            });
    }, []);

    return (<div  className="container vacation"> 
                <div className="d-flex justify-content-between">
                        <h2>Permissions</h2>
                        <Buttonpermissions/>
                </div>
        <div className="mt-4">
            <table className="table table table-striped">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">Order Code</th>
                                <th scope="col">Employee Code</th>
                                <th scope="col">Employee Name</th>
                                <th scope="col">Job Title</th>
                                <th scope="col">Start Time</th>
                                <th scope="col">Expiry Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Permissions.map((item,index) =>(
                                        <tr key={index}>
                                            <td scope="col">{item.ordercode}</td>
                                            <td scope="col">{item.employeecode}</td>
                                            <td scope="col">{item.employeename}</td>
                                            <td scope="col">{item.jobtitle}</td>
                                            <td scope="col">{item.starttime}</td>
                                            <td scope="col">{item.expirytime}</td>
                                        </tr>
                                        
                              ))}
                        </tbody>
        </table>
            
        </div>
        <Addpermissions/>
</div>)
}

export default Permissions;
