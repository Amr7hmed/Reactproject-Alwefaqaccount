import React, { useContext } from 'react';
import Permissionsnotification from './Permissionsnotification';
import Vacationnotification from './Vacationnotification';
import '../Home/Orderpadge/Ordersdetiles/Vacation.css';
import { Authcontext } from '../../Context';

function Notification() {
    const authcontext = useContext(Authcontext);
    const Permissions = authcontext.Permissions;
    const Vacation = authcontext.Vacation;

    return (<div className="notification">
    <div className="container">
    <div className="d-flex align-items-start">
        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button className="nav-link active" id="v-pills-home-tab"
             data-bs-toggle="pill" data-bs-target="#v-pills-home"
              type="button" role="tab" aria-controls="v-pills-home"
               aria-selected="true">
                <span className="float-start">
                    Vacation
                </span>
                <span className="notificationnifigtion float-end">
                    {Vacation.length}
                </span>
               </button>
            <button className="nav-link" id="v-pills-profile-tab"
             data-bs-toggle="pill" data-bs-target="#v-pills-profile"
              type="button" role="tab" aria-controls="v-pills-profile"
               aria-selected="false">
                   <span className="float-start">
                   Permissions
                    </span>
                    <span className="notificationnifigtion float-end ">
                        {Permissions.length}
                    </span>
                </button>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-home"
             role="tabpanel" aria-labelledby="v-pills-home-tab">
                 <Vacationnotification/>
             </div>

            <div className="tab-pane fade" id="v-pills-profile"
             role="tabpanel" aria-labelledby="v-pills-profile-tab">
                <Permissionsnotification/>
            </div>
        </div>
    </div>

    </div>
</div>
)
}

export default Notification;