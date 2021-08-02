import React, { useContext, useState } from 'react'
import { Authcontext } from '../../../../Context';

function Assignments() {
    const authcontext = useContext(Authcontext);
    const setAssignment = authcontext.setAssignment;
    
    
    const [ecode,setecode]=useState("");
    const [aecode,setaecode]=useState("");
    const [tarea,settarea]=useState("");

    function addDate(e){
        e.preventDefault();
        if(ecode===""&&aecode===""){
            alert('Wrong Details')
        }else{
            setAssignment({ecode,aecode,tarea})
        }
    }

    return (
            <div  className="container vacation"> 
                        <h2>Assignments</h2>
                <form>
                    <div className="row g-3 mt-4">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Employee Code"
                            aria-label="Employee Code" value={ecode}
                             onChange={e=> setecode(e.target.value)}/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control"
                            placeholder="Authorized Employee Code"
                            aria-label="Authorized Employee Code" value={aecode}
                            onChange={e=> setaecode(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" id="exampleFormControlTextarea1"
                             rows="3"  value={tarea} onChange={e=> settarea(e.target.value)} 
                             placeholder="Assignment Details"/>
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn-primary mt-2" onClick={addDate}>
                        Add Assignments
                    </button>

            </form>
            </div>
)
}

export default Assignments;
