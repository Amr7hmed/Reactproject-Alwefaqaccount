(this.webpackJsonpalwefaqaccount=this.webpackJsonpalwefaqaccount||[]).push([[0],[,,,,,,,,,,function(e,t,c){},,,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":"56540","name":"User","workdate":"1/1/2020","jobtitle":"Administrative","image":"/image/team1.webp"}]')},function(e){e.exports=JSON.parse('[{"ordercode":"V-524687","employeecode":"56540","employeename":"Amr Ahmed","jobtitle":"Administrative","startdate":"15/7/2019","expirydate":"20/7/2019"},{"ordercode":"V-524688","employeecode":"56540","employeename":"Amr Ahmed","jobtitle":"Administrative","startdate":"21/7/2019","expirydate":"22/7/2019"},{"ordercode":"V-524689","employeecode":"56540","employeename":"Amr Ahmed","jobtitle":"Administrative","startdate":"15/8/2019","expirydate":"20/8/2019"},{"ordercode":"V-524690","employeecode":"56540","employeename":"Amr Ahmed","jobtitle":"Administrative","startdate":"15/9/2019","expirydate":"20/9/2019"}]')},function(e){e.exports=JSON.parse('[{"ordercode":"V-524687","employeecode":"56540","employeename":"Amr Ahmed","jobtitle":"Administrative","starttime":"9 pm","expirytime":"11 pm"},{"ordercode":"V-524688","employeecode":"56540","employeename":"Amr Ahmed","jobtitle":"Administrative","starttime":"9 pm","expirytime":"11 pm"},{"ordercode":"V-524689","employeecode":"56540","employeename":"Amr Ahmed","jobtitle":"Administrative","starttime":"9 pm","expirytime":"11 pm"},{"ordercode":"V-524690","employeecode":"56540","employeename":"Amr Ahmed","jobtitle":"Administrative","starttime":"9 pm","expirytime":"11 pm"}]')},function(e){e.exports=JSON.parse('[{"dayit":"July","dayen":"tue","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"wed","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"thu","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"fri","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"sat","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"sun","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"mon","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"tue","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"wed","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"thu","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"tue","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"wed","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"thu","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"fri","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"sat","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"sun","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"mon","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"tue","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"wed","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"thu","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"tue","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"wed","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"thu","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"fri","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"sat","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"sun","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"mon","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"tue","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"wed","timein":"9 pm","timeout":"5 pm"},{"dayit":"July","dayen":"thu","timein":"9 pm","timeout":"5 pm"}]')},,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,,,function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(20),i=c.n(n),l=(c(30),c(31),c(2)),o=c(0),r=s.a.createContext();function d(e){var t=Object(a.useState)({}),c=Object(l.a)(t,2),s=c[0],n=c[1],i=Object(a.useState)({}),d=Object(l.a)(i,2),j=d[0],b=d[1],m=Object(a.useState)([{}]),u=Object(l.a)(m,2),h=u[0],p=u[1],O=Object(a.useState)([{}]),x=Object(l.a)(O,2),v=x[0],y=x[1],f=Object(a.useState)([{}]),g=Object(l.a)(f,2),N=g[0],A=g[1],C=Object(a.useState)([{}]),J=Object(l.a)(C,2),w=J[0],S=J[1],k=Object(a.useState)([{}]),E=Object(l.a)(k,2),U=E[0],V=E[1],P=Object(a.useState)([{}]),T=Object(l.a)(P,2),L=T[0],X=T[1],Y=Object(a.useState)("display-none"),D=Object(l.a)(Y,2),F=D[0],H=D[1];Object(a.useEffect)((function(){var e=localStorage.getItem("username"),t=localStorage.getItem("password");e&&t&&n({username:e,password:t})}),[]),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("dataDay")),t=JSON.parse(localStorage.getItem("dataTime"));e&&V(e),t&&X(t)}),[]),Object(a.useEffect)((function(){localStorage.setItem("dataDay",JSON.stringify(U)),localStorage.setItem("dataTime",JSON.stringify(L))}),[U,L]);var Q={account:s,setAccount:n,User:h,setUser:p,Vacation:v,setVacation:y,Permissions:N,setPermissions:A,assignment:j,setAssignment:b,attendance:w,setattendance:S,show:F,showmodal:function(){H("display-block")},hidemodal:function(){H("display-none")},day:U,setday:V,time:L,setTime:X};return Object(o.jsx)(r.Provider,{value:Q,children:e.children})}var j=c.p+"static/media/logo_rafeeq.09654480.svg";var b=function(){var e=Object(a.useContext)(r).setAccount,t=Object(a.useState)(""),c=Object(l.a)(t,2),s=c[0],n=c[1],i=Object(a.useState)(""),d=Object(l.a)(i,2),b=d[0],m=d[1];return Object(o.jsx)("section",{children:Object(o.jsxs)("div",{className:"logintabel",children:[Object(o.jsxs)("div",{className:"login-header",children:[Object(o.jsx)("div",{className:"loginlogo mb-4",children:Object(o.jsx)("img",{src:"data:image/png;base64,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"})}),Object(o.jsxs)("div",{className:"login-header-text",children:[Object(o.jsx)("h4",{children:" Welcome Back! "}),Object(o.jsxs)("q",{children:[" The first step towards knowledge",Object(o.jsx)("br",{}),"is to know that we are ignorant "]}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{children:'" Richard Cecil "'})]})]}),Object(o.jsxs)("div",{className:"loginbody",children:[Object(o.jsx)("div",{className:"accountimg",children:Object(o.jsx)("img",{src:j})}),Object(o.jsx)("h4",{children:"Login"}),Object(o.jsx)("div",{className:"formlogn",children:Object(o.jsxs)("form",{children:[Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("input",{type:"text",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"User Name",value:s,onChange:function(e){return n(e.target.value)}})}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",value:b,onChange:function(e){return m(e.target.value)}})}),Object(o.jsxs)("div",{className:"mb-3 form-check",children:[Object(o.jsx)("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1"}),Object(o.jsx)("label",{className:"form-check-label",children:"Remember me"})]}),Object(o.jsx)("button",{type:"submit",className:"btn butonlogin",onClick:function(t){t.preventDefault(),""===s&&""===b?alert("Wrong Details"):(localStorage.setItem("username",s),localStorage.setItem("password",b),e({username:s,password:b}),alert(" Welcome Back! "))},children:"Login"})]})})]})]})})},m=(c(33),c(34),c(21)),u=c(22),h=c(23),p=c(24);var O={getUser:function(){return Promise.resolve(m)},getVacation:function(){return Promise.resolve(u)},getPermissions:function(){return Promise.resolve(h)},getAttendance:function(){return Promise.resolve(p)}};var x=function(){var e=Object(a.useContext)(r),t=e.attendance,c=e.setattendance;return Object(a.useEffect)((function(){O.getAttendance().then((function(e){c(e)}))}),[]),Object(o.jsx)("div",{className:"container attendance",children:Object(o.jsx)("ul",{className:"row",children:t.map((function(e,t){return Object(o.jsxs)("li",{className:"col-lg-3 col-md-6 col-6",children:[Object(o.jsx)("span",{className:"number",children:t+1}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("span",{className:"day_it",children:[e.dayit,Object(o.jsxs)("span",{className:"time",children:["Time In : ",e.timein]})]}),Object(o.jsxs)("span",{className:"day_en",children:[e.dayen,Object(o.jsxs)("span",{className:"time",children:["Time Out : ",e.timeout]})]})]})]},t)}))})})};var v=function(e){var t=Object(a.useContext)(r).setAccount;function c(e){e.preventDefault(),localStorage.removeItem("username"),localStorage.removeItem("password"),t({})}var s=e.Users;return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{id:"user",children:s.map((function(e,t){return Object(o.jsxs)("div",{className:"card ",children:[Object(o.jsx)("img",{src:e.image,className:"card-img-top",alt:"..."}),Object(o.jsxs)("ul",{className:"list-group list-group-flush mt-4",children:[Object(o.jsxs)("li",{className:"list-group-item mt-2",children:["Job Number : ",e.id]}),Object(o.jsxs)("li",{className:"list-group-item mt-2",children:["Name : ",e.name]}),Object(o.jsxs)("li",{className:"list-group-item mt-2",children:["Work Starting Date : ",e.workdate]}),Object(o.jsxs)("li",{className:"list-group-item mt-2",children:["Job Title : ",e.jobtitle]}),Object(o.jsx)("li",{className:"list-group-item mt-3",children:Object(o.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-sm",onClick:c,children:"Logout"})})]})]},t)}))})})};var y=function(){var e=Object(a.useContext)(r),t=e.User,c=e.setUser;return Object(a.useEffect)((function(){O.getUser().then((function(e){c(e)}))}),[]),Object(o.jsx)("div",{className:"user",children:Object(o.jsx)(v,{Users:t})})},f=c.p+"static/media/vacation.659c5977.svg",g=c.p+"static/media/permissions.522d282a.svg",N=c.p+"static/media/assignments.fe7f6d6a.svg";function A(){var e=Object(a.useContext)(r).showmodal;return Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"button",className:"btn btn-outline-warning",onClick:e,children:"Add Vacation"})})}function C(){var e=Object(a.useContext)(r),t=e.show,c=e.hidemodal,s=e.setday,n=Object(a.useState)("1980-08-26"),i=Object(l.a)(n,2),d=i[0],j=i[1],b=Object(a.useState)("1980-08-26"),m=Object(l.a)(b,2),u=m[0],h=m[1];return Object(o.jsx)("div",{className:"modal ".concat(t),children:Object(o.jsxs)("div",{className:"modal-main",children:[Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{className:"row mb-3",children:[Object(o.jsx)("label",{className:"col-md-2 col-sm-12 col-form-label",children:"Start date"}),Object(o.jsx)("div",{className:"col-md-10 col-sm-12",children:Object(o.jsx)("input",{type:"date",value:d,className:"form-control",onChange:function(e){return j(e.target.value)}})})]}),Object(o.jsxs)("div",{className:"row mb-3",children:[Object(o.jsx)("label",{className:"col-md-2 col-sm-12 col-form-label",children:"End date"}),Object(o.jsx)("div",{className:"col-md-10 col-sm-12",children:Object(o.jsx)("input",{type:"date",value:u,className:"form-control",onChange:function(e){return h(e.target.value)}})})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary mt-3",onClick:function(e){e.preventDefault(),"1980-08-26"==d&&"1980-08-26"==u?alert("There is no change in the data"):(s({startdate:d,enddate:u}),alert("Registered, awaiting approval"),c())},children:"Add Vacation"})]}),Object(o.jsx)("button",{type:"button",className:"btn btn-danger",onClick:c,children:"X"})]})})}c(10);var J=function(){var e=Object(a.useContext)(r),t=e.Vacation,c=e.setVacation;return Object(a.useEffect)((function(){O.getVacation().then((function(e){c(e)}))}),[]),Object(o.jsxs)("div",{className:"container vacation",children:[Object(o.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(o.jsx)("h2",{children:"Vacation"}),Object(o.jsx)(A,{})]}),Object(o.jsx)("div",{className:"mt-4",children:Object(o.jsxs)("table",{className:"table table table-striped",children:[Object(o.jsx)("thead",{className:"table-light",children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"Order Code"}),Object(o.jsx)("th",{scope:"col",children:"Employee Code"}),Object(o.jsx)("th",{scope:"col",children:"Employee Name"}),Object(o.jsx)("th",{scope:"col",children:"Job Title"}),Object(o.jsx)("th",{scope:"col",children:"Start Date"}),Object(o.jsx)("th",{scope:"col",children:"Expiry date"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{scope:"col",children:e.ordercode}),Object(o.jsx)("td",{scope:"col",children:e.employeecode}),Object(o.jsx)("td",{scope:"col",children:e.employeename}),Object(o.jsx)("td",{scope:"col",children:e.jobtitle}),Object(o.jsx)("td",{scope:"col",children:e.startdate}),Object(o.jsx)("td",{scope:"col",children:e.expirydate})]},t)}))})]})}),Object(o.jsx)(C,{})]})};function w(){var e=Object(a.useContext)(r).showmodal;return Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"button",className:"btn btn-outline-warning",onClick:e,children:"Add Permissions"})})}function S(){var e=Object(a.useContext)(r),t=e.show,c=e.hidemodal,s=e.setTime,n=Object(a.useState)("13:00"),i=Object(l.a)(n,2),d=i[0],j=i[1],b=Object(a.useState)("13:00"),m=Object(l.a)(b,2),u=m[0],h=m[1];return Object(o.jsx)("div",{className:"modal ".concat(t),children:Object(o.jsxs)("div",{className:"modal-main",children:[Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{className:"row mb-3",children:[Object(o.jsx)("label",{className:"col-md-2 col-sm-12 col-form-label",children:"Start Time"}),Object(o.jsx)("div",{className:"col-md-10 col-sm-12",children:Object(o.jsx)("input",{type:"time",step:"900",value:d,className:"form-control",onChange:function(e){return j(e.target.value)}})})]}),Object(o.jsxs)("div",{className:"row mb-3",children:[Object(o.jsx)("label",{className:"col-md-2 col-sm-12 col-form-label",children:"End Time"}),Object(o.jsx)("div",{className:"col-md-10 col-sm-12",children:Object(o.jsx)("input",{type:"time",step:"900",value:u,className:"form-control",onChange:function(e){return h(e.target.value)}})})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary mt-3",onClick:function(e){e.preventDefault(),"13:00"==d&&"13:00"==u?alert("There is no change in the data"):(s({starttime:d,endtime:u}),alert("Registered, awaiting approval"),c())},children:"Add Permissions"})]}),Object(o.jsx)("button",{type:"button",className:"btn btn-danger",onClick:c,children:"X"})]})})}var k=function(){var e=Object(a.useContext)(r),t=e.Permissions,c=e.setPermissions;return Object(a.useEffect)((function(){O.getPermissions().then((function(e){c(e)}))}),[]),Object(o.jsxs)("div",{className:"container vacation",children:[Object(o.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(o.jsx)("h2",{children:"Permissions"}),Object(o.jsx)(w,{})]}),Object(o.jsx)("div",{className:"mt-4",children:Object(o.jsxs)("table",{className:"table table table-striped",children:[Object(o.jsx)("thead",{className:"table-light",children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"Order Code"}),Object(o.jsx)("th",{scope:"col",children:"Employee Code"}),Object(o.jsx)("th",{scope:"col",children:"Employee Name"}),Object(o.jsx)("th",{scope:"col",children:"Job Title"}),Object(o.jsx)("th",{scope:"col",children:"Start Time"}),Object(o.jsx)("th",{scope:"col",children:"Expiry Time"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{scope:"col",children:e.ordercode}),Object(o.jsx)("td",{scope:"col",children:e.employeecode}),Object(o.jsx)("td",{scope:"col",children:e.employeename}),Object(o.jsx)("td",{scope:"col",children:e.jobtitle}),Object(o.jsx)("td",{scope:"col",children:e.starttime}),Object(o.jsx)("td",{scope:"col",children:e.expirytime})]},t)}))})]})}),Object(o.jsx)(S,{})]})};var E=function(){var e=Object(a.useContext)(r).setAssignment,t=Object(a.useState)(""),c=Object(l.a)(t,2),s=c[0],n=c[1],i=Object(a.useState)(""),d=Object(l.a)(i,2),j=d[0],b=d[1],m=Object(a.useState)(""),u=Object(l.a)(m,2),h=u[0],p=u[1];return Object(o.jsxs)("div",{className:"container vacation",children:[Object(o.jsx)("h2",{children:"Assignments"}),Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{className:"row g-3 mt-4",children:[Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Employee Code","aria-label":"Employee Code",value:s,onChange:function(e){return n(e.target.value)}})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Authorized Employee Code","aria-label":"Authorized Employee Code",value:j,onChange:function(e){return b(e.target.value)}})}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"3",value:h,onChange:function(e){return p(e.target.value)},placeholder:"Assignment Details"})})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary mt-2",onClick:function(t){t.preventDefault(),""===s&&""===j?alert("Wrong Details"):e({ecode:s,aecode:j,tarea:h})},children:"Add Assignments"})]})]})};var U=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("nav",{children:Object(o.jsxs)("div",{className:"nav nav-tabs",id:"nav-tab",role:"tablist",children:[Object(o.jsxs)("button",{className:"nav-link icon active",id:"nav-home-tab","data-bs-toggle":"tab","data-bs-target":"#nav-home-order",type:"button",role:"tab","aria-controls":"nav-home","aria-selected":"true",children:[Object(o.jsx)("img",{src:f}),"Vacation"]}),Object(o.jsxs)("button",{className:"nav-link icon",id:"nav-profile-tab","data-bs-toggle":"tab","data-bs-target":"#nav-profile-order",type:"button",role:"tab","aria-controls":"nav-profile","aria-selected":"false",children:[Object(o.jsx)("img",{src:g}),"Permissions"]}),Object(o.jsxs)("button",{className:"nav-link icon",id:"nav-contact-tab","data-bs-toggle":"tab","data-bs-target":"#nav-contact-order",type:"button",role:"tab","aria-controls":"nav-contact","aria-selected":"false",children:[Object(o.jsx)("img",{src:N}),"Assignments"]})]})}),Object(o.jsxs)("div",{className:"tab-content",id:"nav-tabContent",children:[Object(o.jsx)("div",{className:"tab-pane fade show active",id:"nav-home-order",role:"tabpanel","aria-labelledby":"nav-home-tab",children:Object(o.jsx)(J,{})}),Object(o.jsx)("div",{className:"tab-pane fade",id:"nav-profile-order",role:"tabpanel","aria-labelledby":"nav-profile-tab",children:Object(o.jsx)(k,{})}),Object(o.jsx)("div",{className:"tab-pane fade",id:"nav-contact-order",role:"tabpanel","aria-labelledby":"nav-contact-tab",children:Object(o.jsx)(E,{})})]})]})};c(35);var V=function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(U,{})})},P=c.p+"static/media/dashboard.a2602c32.svg",T=c.p+"static/media/orders.90afad0b.svg",L=c.p+"static/media/Attendanceicon.a6c90daf.svg";var X=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("nav",{children:Object(o.jsxs)("div",{className:"nav nav-tabs detiles",id:"nav-tab",role:"tablist",children:[Object(o.jsxs)("button",{className:"nav-link active icon",id:"nav-home-tab","data-bs-toggle":"tab","data-bs-target":"#nav-home",type:"button",role:"tab","aria-controls":"nav-home","aria-selected":"true",children:[Object(o.jsx)("img",{src:P}),"Dashboard"]}),Object(o.jsxs)("button",{className:"nav-link icon",id:"nav-profile-tab","data-bs-toggle":"tab","data-bs-target":"#nav-profile",type:"button",role:"tab","aria-controls":"nav-profile","aria-selected":"false",children:[Object(o.jsx)("img",{src:T}),"Orders"]}),Object(o.jsxs)("button",{className:"nav-link icon",id:"nav-contact-tab","data-bs-toggle":"tab","data-bs-target":"#nav-contact",type:"button",role:"tab","aria-controls":"nav-contact","aria-selected":"false",children:[Object(o.jsx)("img",{src:L}),"Attendance"]})]})}),Object(o.jsxs)("div",{className:"tab-content",id:"nav-tabContent",children:[Object(o.jsx)("div",{className:"tab-pane fade show active",id:"nav-home",role:"tabpanel","aria-labelledby":"nav-home-tab",children:Object(o.jsx)(y,{})}),Object(o.jsx)("div",{className:"tab-pane fade",id:"nav-profile",role:"tabpanel","aria-labelledby":"nav-profile-tab",children:Object(o.jsx)(V,{})}),Object(o.jsx)("div",{className:"tab-pane fade",id:"nav-contact",role:"tabpanel","aria-labelledby":"nav-contact-tab",children:Object(o.jsx)(x,{})})]})]})},Y=c.p+"static/media/Alwefaqlogo.4c92196c.png",D=c.p+"static/media/bell-solid.43ca01a5.svg";var F=function(){var e=Object(a.useContext)(r),t=e.Permissions,c=e.Vacation;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"position-relative",children:[Object(o.jsx)("img",{src:D}),Object(o.jsx)("span",{className:"position-absolute top-0 start-100\r translate-middle badge rounded-pill bg-danger",children:t.length+c.length})]})})},H=c(9);var Q=function(){var e=Object(a.useContext)(r).account;return Object(o.jsx)(o.Fragment,{children:"Admin"===e.username?Object(o.jsx)(z,{}):Object(o.jsx)(W,{})})};function W(){var e=Object(a.useContext)(r).account;return Object(o.jsx)("nav",{className:"navbar navbar-light bg-light justify-content-end mt-2 mb-2",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("div",{className:"navbarlogn",children:Object(o.jsx)(H.b,{to:"/",exact:!0,children:Object(o.jsx)("img",{src:Y})})}),Object(o.jsx)("div",{className:"navbarlogn d-flex",children:Object(o.jsx)("p",{children:e.username})})]})})}function z(){var e=Object(a.useContext)(r).account;return Object(o.jsx)("nav",{className:"navbar navbar-light bg-light  mt-2 mb-2",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("div",{className:"navbarlogn",children:Object(o.jsx)(H.b,{to:"/",exact:!0,children:Object(o.jsx)("img",{src:Y})})}),Object(o.jsxs)("div",{className:"navbarlogn d-flex",children:[Object(o.jsx)("p",{children:e.username}),Object(o.jsx)(H.b,{to:"/notification",exact:!0,children:Object(o.jsx)(F,{})})]})]})})}c(41);var I=c(3),G=c(14);var K=function(){var e=Object(a.useContext)(r),t=e.Permissions,c=e.setPermissions;Object(a.useEffect)((function(){O.getPermissions().then((function(e){c(e)}))}),[]);var s=function(e){t.forEach((function(c,a){c.ordercode===e&&t.splice(a,1)})),c(Object(G.a)(t))};return Object(o.jsxs)("div",{className:"container vacation notification",children:[Object(o.jsx)("div",{className:"d-flex justify-content-between",children:Object(o.jsx)("h2",{children:"Permissions"})}),Object(o.jsx)("div",{className:"mt-4",children:Object(o.jsxs)("table",{className:"table table table-striped",children:[Object(o.jsx)("thead",{className:"table-light",children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"Employee Code"}),Object(o.jsx)("th",{scope:"col",children:"Employee Name"}),Object(o.jsx)("th",{scope:"col",children:"Job Title"}),Object(o.jsx)("th",{scope:"col",children:"Start Time"}),Object(o.jsx)("th",{scope:"col",children:"Expiry Time"}),Object(o.jsx)("th",{scope:"col",children:"Action"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{scope:"col",children:e.employeecode}),Object(o.jsx)("td",{scope:"col",children:e.employeename}),Object(o.jsx)("td",{scope:"col",children:e.jobtitle}),Object(o.jsx)("td",{scope:"col",children:e.starttime}),Object(o.jsx)("td",{scope:"col",children:e.expirytime}),Object(o.jsxs)("td",{scope:"col",children:[Object(o.jsx)("button",{type:"button",className:"btn btn-primary btn-sm",onClick:function(){return s(e.ordercode)},children:"Accepted"}),Object(o.jsx)("button",{type:"button",className:"btn btn-danger btn-sm",onClick:function(){return s(e.ordercode)},children:"Delete"})]})]},t)}))})]})})]})};var R=function(){var e=Object(a.useContext)(r),t=e.Vacation,c=e.setVacation;Object(a.useEffect)((function(){O.getVacation().then((function(e){c(e)}))}),[]);var s=function(e){t.forEach((function(c,a){c.ordercode===e&&t.splice(a,1)})),c(Object(G.a)(t))};return Object(o.jsxs)("div",{className:"container vacation notification",children:[Object(o.jsx)("div",{className:"d-flex justify-content-between",children:Object(o.jsx)("h2",{children:"Vacation"})}),Object(o.jsx)("div",{className:"mt-4",children:Object(o.jsxs)("table",{className:"table table table-striped",children:[Object(o.jsx)("thead",{className:"table-light",children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"Employee Code"}),Object(o.jsx)("th",{scope:"col",children:"Employee Name"}),Object(o.jsx)("th",{scope:"col",children:"Job Title"}),Object(o.jsx)("th",{scope:"col",children:"Start Date"}),Object(o.jsx)("th",{scope:"col",children:"Expiry date"}),Object(o.jsx)("th",{scope:"col",children:"Action"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{scope:"col",children:e.employeecode}),Object(o.jsx)("td",{scope:"col",children:e.employeename}),Object(o.jsx)("td",{scope:"col",children:e.jobtitle}),Object(o.jsx)("td",{scope:"col",children:e.startdate}),Object(o.jsx)("td",{scope:"col",children:e.expirydate}),Object(o.jsxs)("td",{scope:"col",children:[Object(o.jsx)("button",{type:"button",className:"btn btn-primary btn-sm",onClick:function(){return s(e.ordercode)},children:"Accepted"}),Object(o.jsx)("button",{type:"button",className:"btn btn-danger btn-sm",onClick:function(){return s(e.ordercode)},children:"Delete"})]})]},t)}))})]})})]})};var M=function(){var e=Object(a.useContext)(r),t=e.Permissions,c=e.Vacation;return Object(o.jsx)("div",{className:"notification",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"d-flex align-items-start",children:[Object(o.jsxs)("div",{className:"nav flex-column nav-pills me-3",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical",children:[Object(o.jsxs)("button",{className:"nav-link active",id:"v-pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-home",type:"button",role:"tab","aria-controls":"v-pills-home","aria-selected":"true",children:[Object(o.jsx)("span",{className:"float-start",children:"Vacation"}),Object(o.jsx)("span",{className:"notificationnifigtion float-end",children:c.length})]}),Object(o.jsxs)("button",{className:"nav-link",id:"v-pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-profile",type:"button",role:"tab","aria-controls":"v-pills-profile","aria-selected":"false",children:[Object(o.jsx)("span",{className:"float-start",children:"Permissions"}),Object(o.jsx)("span",{className:"notificationnifigtion float-end ",children:t.length})]})]}),Object(o.jsxs)("div",{className:"tab-content",id:"v-pills-tabContent",children:[Object(o.jsx)("div",{className:"tab-pane fade show active",id:"v-pills-home",role:"tabpanel","aria-labelledby":"v-pills-home-tab",children:Object(o.jsx)(R,{})}),Object(o.jsx)("div",{className:"tab-pane fade",id:"v-pills-profile",role:"tabpanel","aria-labelledby":"v-pills-profile-tab",children:Object(o.jsx)(K,{})})]})]})})})};var q=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(H.a,{children:[Object(o.jsx)(Q,{}),Object(o.jsxs)(I.c,{children:[Object(o.jsx)(I.a,{path:"/",component:X,exact:!0}),Object(o.jsx)(I.a,{path:"/notification",component:M,exact:!0})]})]})})};var B=function(){var e=Object(a.useContext)(r).account;return Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("div",{className:"container",children:e.username?Object(o.jsx)(q,{}):Object(o.jsx)(b,{})})})};var Z=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(d,{children:Object(o.jsx)(B,{})})})},_=(c(42),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))});i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(Z,{})}),document.getElementById("root")),_()}],[[43,1,2]]]);
//# sourceMappingURL=main.33aadf62.chunk.js.map