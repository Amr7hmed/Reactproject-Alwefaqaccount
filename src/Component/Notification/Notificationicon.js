import React, { useContext } from 'react';
import { Authcontext } from '../../Context';
import Notifications from '../image/icon/bell-solid.svg';

function Notificationicon() {
    const authcontext = useContext(Authcontext);
    const Permissions = authcontext.Permissions;
    const Vacation = authcontext.Vacation;
    return (<>
              <div className="position-relative">
                        <img src={Notifications}/>
                        <span className="position-absolute top-0 start-100
                        translate-middle badge rounded-pill bg-danger">
                            {Permissions.length+Vacation.length}
                        </span>
                </div>
        </> )
}

export default Notificationicon;
