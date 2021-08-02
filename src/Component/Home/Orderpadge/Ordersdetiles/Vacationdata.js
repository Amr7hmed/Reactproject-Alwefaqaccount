import React, { useContext, useEffect } from 'react'
import { Authcontext } from '../../../../Context';
import Data from '../../../Api/Data';
import { Addvacation, Buttonvacation } from './Addvacation';
import './Vacation.css';

function Vacationdata() {
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

    return (<div  className="container vacation"> 
                <div className="d-flex justify-content-between">
                        <h2>Vacation</h2>
                        <Buttonvacation/>
                </div>
        <div className="mt-4">
            <table className="table table table-striped">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">Order Code</th>
                                <th scope="col">Employee Code</th>
                                <th scope="col">Employee Name</th>
                                <th scope="col">Job Title</th>
                                <th scope="col">Start Date</th>
                                <th scope="col">Expiry date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Vacation.map((item,index) =>(
                                        <tr key={index}>
                                            <td scope="col">{item.ordercode}</td>
                                            <td scope="col">{item.employeecode}</td>
                                            <td scope="col">{item.employeename}</td>
                                            <td scope="col">{item.jobtitle}</td>
                                            <td scope="col">{item.startdate}</td>
                                            <td scope="col">{item.expirydate}</td>
                                        </tr>
                                        
                              ))}
                        </tbody>
        </table>
            
        </div>
        <Addvacation/>
</div>)
}

export default Vacationdata;
