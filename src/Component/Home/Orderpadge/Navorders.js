import React from 'react';
//=====icon
import Vacation from '../../image/icon/vacation.svg';
import Permission from '../../image/icon/permissions.svg';
import Assignment from '../../image/icon/assignments.svg';
//============padge
import Vacationdata from './Ordersdetiles/Vacationdata';
import Permissions from './Ordersdetiles/Permissions';
import Assignments from './Ordersdetiles/Assignments';

function Navorders() {
    return (
<div>
        <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="nav-link icon active" id="nav-home-tab" data-bs-toggle="tab"
                 data-bs-target="#nav-home-order" type="button" role="tab" aria-controls="nav-home"
                  aria-selected="true">
                    <img src={Vacation}/>
                    Vacation
                  </button>
                <button className="nav-link icon" id="nav-profile-tab" data-bs-toggle="tab"
                 data-bs-target="#nav-profile-order" type="button" role="tab" aria-controls="nav-profile"
                  aria-selected="false">
                    <img src={Permission}/>
                    Permissions
                  </button>
                <button className="nav-link icon" id="nav-contact-tab" data-bs-toggle="tab"
                 data-bs-target="#nav-contact-order" type="button" role="tab" aria-controls="nav-contact"
                  aria-selected="false">
                    <img src={Assignment}/>
                    Assignments
                  </button>
            </div>
        </nav>
            <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home-order" role="tabpanel"
             aria-labelledby="nav-home-tab">
               <Vacationdata/>
             </div>
            <div className="tab-pane fade" id="nav-profile-order" role="tabpanel"
             aria-labelledby="nav-profile-tab">
                 <Permissions/>
             </div>
            <div className="tab-pane fade" id="nav-contact-order" role="tabpanel"
             aria-labelledby="nav-contact-tab">
               <Assignments/>
             </div>
        </div>

    </div>
    
)
}

export default Navorders;
