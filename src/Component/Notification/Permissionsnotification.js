import React, { useContext, useEffect } from 'react';
import { Authcontext } from '../../Context';
import Data from '../Api/Data';
import '../Home/Orderpadge/Ordersdetiles/Vacation.css';

function Permissionsnotification() {
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

  const removePermissions = ordercode =>{
    Permissions.forEach((item,index)=>{
                if(item.ordercode===ordercode){
                    Permissions.splice(index,1)
                }
            }) 
            setPermissions([...Permissions])
        
    }

    return (<div  className="container vacation notification"> 
                <div className="d-flex justify-content-between">
                        <h2>Permissions</h2>
                </div>
        <div className="mt-4">
            <table className="table table table-striped">
                    <thead className="table-light">
                            <tr>
                                <th scope="col">Employee Code</th>
                                <th scope="col">Employee Name</th>
                                <th scope="col">Job Title</th>
                                <th scope="col">Start Time</th>
                                <th scope="col">Expiry Time</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Permissions.map((item,index) =>(
                                        <tr key={index}>
                                            <td scope="col">{item.employeecode}</td>
                                            <td scope="col">{item.employeename}</td>
                                            <td scope="col">{item.jobtitle}</td>
                                            <td scope="col">{item.starttime}</td>
                                            <td scope="col">{item.expirytime}</td>
                                            <td scope="col">
                                                <button type="button" className="btn btn-primary btn-sm"
                                                     onClick={()=>removePermissions(item.ordercode)}>
                                                    Accepted
                                                </button>
                                                <button type="button" className="btn btn-danger btn-sm"
                                                    onClick={()=>removePermissions(item.ordercode)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                        
                              ))}
                        </tbody>
        </table>
            
        </div>
</div>)
}

export default Permissionsnotification;

