import React, { useContext, useEffect } from 'react';
import { Authcontext } from '../../Context';
import Data from '../Api/Data';
import '../Home/Orderpadge/Ordersdetiles/Vacation.css';

function Vacationnotification() {
    const authcontext = useContext(Authcontext);
    const Vacation = authcontext.Vacation;
    const setVacation = authcontext.setVacation;

    //==Vacation
    useEffect(() => {
        Data.getVacation()
            .then(data => {
                setVacation(
                    data
                )
            });
    }, []);

    const removeVacation = ordercode =>{
        Vacation.forEach((item,index)=>{
                    if(item.ordercode===ordercode){
                        Vacation.splice(index,1)
                    }
                }) 
                setVacation([...Vacation])
            
        }

        
    return (<div  className="container vacation notification"> 
                <div className="d-flex justify-content-between">
                        <h2>Vacation</h2>
                </div>
        <div className="mt-4">
            <table className="table table table-striped">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">Employee Code</th>
                                <th scope="col">Employee Name</th>
                                <th scope="col">Job Title</th>
                                <th scope="col">Start Date</th>
                                <th scope="col">Expiry date</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Vacation.map((item,index) =>(
                                        <tr key={index}>
                                            <td scope="col">{item.employeecode}</td>
                                            <td scope="col">{item.employeename}</td>
                                            <td scope="col">{item.jobtitle}</td>
                                            <td scope="col">{item.startdate}</td>
                                            <td scope="col">{item.expirydate}</td>
                                            <td scope="col">
                                                <button type="button" className="btn btn-primary btn-sm"
                                                     onClick={()=>removeVacation(item.ordercode)}>
                                                    Accepted
                                                </button>
                                                <button type="button" className="btn btn-danger btn-sm"
                                                    onClick={()=>removeVacation(item.ordercode)}>
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

export default Vacationnotification;
