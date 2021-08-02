import React, { useState ,useEffect} from 'react';

export const Authcontext=React.createContext();

export function Contextprovider(props) {

    const [account,setAccount]= useState({});
    const [assignment,setAssignment]= useState({});
    const [User,setUser]= useState([{}]);
    const [Vacation,setVacation]= useState([{}]);
    const [Permissions,setPermissions]= useState([{}]);
    const [attendance,setattendance]= useState([{}]);
    const [day,setday]= useState([{}]);
    const [time,setTime]= useState([{}]);
    const[show,setshow]=useState('display-none');


    useEffect(()=>{
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");
        if(username&&password){
            setAccount({
                username,
                password
            })
        }
    },[]);


     //localstorg
   useEffect(() => {
    const dataDay = JSON.parse(localStorage.getItem('dataDay'))
    const dataTime = JSON.parse(localStorage.getItem('dataTime'))
    if(dataDay)setday(dataDay)
    if(dataTime)setTime(dataTime)
 },[])
 useEffect(()=>{
  localStorage.setItem('dataDay',JSON.stringify(day))
  localStorage.setItem('dataTime',JSON.stringify(time))
 },[day,time])

    const showmodal=()=>{
        setshow('display-block');
    };

    const hidemodal=()=>{
        setshow('display-none');
    };
    const value={
        account:account,
        setAccount:setAccount,
        User:User,
        setUser:setUser,
        Vacation:Vacation,
        setVacation:setVacation,
        Permissions:Permissions,
        setPermissions:setPermissions,
        assignment:assignment,
        setAssignment:setAssignment,
        attendance:attendance,
        setattendance:setattendance,
        show:show,
        showmodal:showmodal,
        hidemodal:hidemodal,
        day:day,
        setday:setday,
        time:time,
        setTime:setTime
    }
    return (
        
        <Authcontext.Provider value={value}>
           {props.children}
        </Authcontext.Provider>
    )
}
