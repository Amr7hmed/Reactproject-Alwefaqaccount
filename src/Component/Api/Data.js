//===========User
import User from './User.json';
import Vacation from './Vacation.json';
import Permissions from './Permissions.json';
import Attendance from './Attendance.json';


//==============User
function getUser(){
    return Promise.resolve(User);
}
//================Vacation
function getVacation(){
    return Promise.resolve(Vacation);
}
//==========================Permissions
function getPermissions(){
    return Promise.resolve(Permissions);
}

//========================Attendance
function getAttendance(){
    return Promise.resolve(Attendance);
}

export default {
    getUser,
    getVacation,
    getPermissions,
    getAttendance
}