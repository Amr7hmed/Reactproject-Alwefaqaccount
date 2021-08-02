import React, { useContext, useEffect } from 'react';
import "./Attendance.css";
import Data from '../../Api/Data';
import { Authcontext } from '../../../Context';


function Attendance() {

    const authcontext = useContext(Authcontext);
    const attendance = authcontext.attendance;
    const setattendance = authcontext.setattendance;

    //==Attendance
      useEffect(() => {
        Data.getAttendance()
            .then(data => {
                setattendance(
                    data
                )
            });
    }, []);

    return (
        <div  className="container attendance">
            <ul className="row">
            
            {attendance.map((item,index) =>(
                <li className="col-lg-3 col-md-6 col-6" key={index}>
                    <span className="number">{index+1}</span>
                    <div>
                        <span className="day_it">
                            {item.dayit}
                            <span className="time">Time In : {item.timein}</span>   
                        </span>
                        <span className="day_en">
                            {item.dayen}
                            <span className="time">Time Out : {item.timeout}</span> 
                        </span>		
                    </div>
                </li>
            ))}
        </ul>
        </div>
    )
}

export default Attendance;
