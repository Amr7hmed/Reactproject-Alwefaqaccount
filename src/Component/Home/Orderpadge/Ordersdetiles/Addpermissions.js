import React, { useContext, useState } from 'react'
import { Authcontext } from '../../../../Context';

export function Buttonpermissions() {
    const authcontext = useContext(Authcontext);
    const showmodal = authcontext.showmodal;
    return (
        <div>
            <button type="button" className="btn btn-outline-warning" 
            onClick={showmodal}>
                Add Permissions
            </button>
        </div>
    )
}

export function Addpermissions() {
    const authcontext = useContext(Authcontext);
    const show = authcontext.show;
    const hidemodal= authcontext.hidemodal;
    const setTime = authcontext.setTime;
    
    const [starttime,setstarttime]=useState("13:00");
    const [endtime,setendtime]=useState("13:00");

    function Settime(e){
        e.preventDefault();
        if(starttime=="13:00"&&endtime=="13:00"){
            alert('There is no change in the data')
        }else{
            setTime({starttime,endtime})
            alert('Registered, awaiting approval')
            hidemodal()
        }
    }
    return (
        <div className={`modal ${show}`}>
           <div className="modal-main">
         
           <form>
                <div className="row mb-3">
                    <label className="col-md-2 col-sm-12 col-form-label">
                    Start Time
                    </label>
                    <div className="col-md-10 col-sm-12">
                        <input type="time" step="900"
                         value={starttime} className="form-control"
                        onChange={e=> setstarttime(e.target.value)}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-md-2 col-sm-12 col-form-label">
                        End Time
                    </label>
                    <div className="col-md-10 col-sm-12">
                        <input type="time" step="900"
                         value={endtime} className="form-control"
                        onChange={e=> setendtime(e.target.value)}/>
                    </div>
                </div>
                    <button type="submit" className="btn btn-primary mt-3" onClick={Settime}>
                        Add Permissions
                    </button>
            </form>
            <button type="button" className="btn btn-danger" 
                    onClick={hidemodal}>
                        X
            </button>
            </div> 
            </div> 
           
    )
}
