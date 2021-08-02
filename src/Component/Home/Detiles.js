import React from 'react';
import Attendance from './Attendance/Attendance';
import Dashboard from './Dashboard/Dashboard';
import Orders from './Orderpadge/Orders';
import Dashboardicon from '../image/icon/dashboard.svg';
import Ordericon from '../image/icon/orders.svg';
import Attendanceicon from '../image/icon/Attendanceicon.svg';

function Detiles() {
    return (  <div>
        <nav>
            <div className="nav nav-tabs detiles" id="nav-tab" role="tablist">
                <button className="nav-link active icon" id="nav-home-tab" data-bs-toggle="tab"
                 data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                  aria-selected="true">
                    <img src={Dashboardicon}/>
                    Dashboard
                </button>


                <button className="nav-link icon" id="nav-profile-tab" data-bs-toggle="tab"
                 data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                  aria-selected="false">
                  <img src={Ordericon}/>
                    Orders
                </button>
                <button className="nav-link icon" id="nav-contact-tab" data-bs-toggle="tab"
                 data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact"
                  aria-selected="false">
                  <img src={Attendanceicon}/>
                      Attendance
                    </button>
            </div>
        </nav>
            <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
             aria-labelledby="nav-home-tab"><Dashboard/></div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel"
             aria-labelledby="nav-profile-tab">
                 <Orders/>
             </div>
            <div className="tab-pane fade" id="nav-contact" role="tabpanel"
             aria-labelledby="nav-contact-tab"><Attendance/></div>
        </div>

    </div>
    )
}

export default Detiles
