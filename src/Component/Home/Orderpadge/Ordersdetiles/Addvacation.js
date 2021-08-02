import React, { useContext, useState } from 'react'
import { Authcontext } from '../../../../Context';

export function Buttonvacation() {
    const authcontext = useContext(Authcontext);
    const showmodal = authcontext.showmodal;
    return (
        <div>
            <button type="button" className="btn btn-outline-warning" 
            onClick={showmodal}>
                Add Vacation
            </button>
        </div>
    )
}

export function Addvacation() {
    const authcontext = useContext(Authcontext);
    const show = authcontext.show;
    const hidemodal= authcontext.hidemodal;
    const setday = authcontext.setday;
    
    const [startdate,setstartdate]=useState("1980-08-26");
    const [enddate,setenddate]=useState("1980-08-26");

    function Setday(e){
        e.preventDefault();
        if(startdate=="1980-08-26"&&enddate=="1980-08-26"){
            alert('There is no change in the data')
        }else{
            setday({startdate,enddate})
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
                    Start date
                    </label>
                    <div className="col-md-10 col-sm-12">
                        <input type="date" value={startdate} className="form-control"
                        onChange={e=> setstartdate(e.target.value)}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-md-2 col-sm-12 col-form-label">
                        End date
                    </label>
                    <div className="col-md-10 col-sm-12">
                        <input type="date" value={enddate} className="form-control"
                        onChange={e=> setenddate(e.target.value)}/>
                    </div>
                </div>
                    <button type="submit" className="btn btn-primary mt-3" onClick={Setday}>
                        Add Vacation
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
