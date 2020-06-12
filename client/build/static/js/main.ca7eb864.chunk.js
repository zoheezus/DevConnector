(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,t,a){e.exports=a.p+"static/media/spinner.e8040728.svg"},46:function(e,t,a){e.exports=a(80)},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),o=a(1),s=a(17),u=a(3),i=a(2),m=a.n(i),p=a(6),d=a.n(p),f=a(39),E=a.n(f),b=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e3;return function(n){var r=E.a.v4();n({type:"SET_ALERT",payload:{msg:e,alertType:t,id:r}}),setTimeout((function(){return n({type:"REMOVE_ALERT",payload:r})}),a)}},g=function(e){e?d.a.defaults.headers.common["x-auth-token"]=e:delete d.a.defaults.headers.common["x-auth-token"]},h=function(){return function(e){var t;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return localStorage.token&&g(localStorage.token),a.prev=1,a.next=4,m.a.awrap(d.a.get("/api/auth"));case 4:t=a.sent,e({type:"USER_LOADED",payload:t.data}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),e({type:"AUTH_ERROR"});case 11:case"end":return a.stop()}}),null,null,[[1,8]])}},v=Object(u.b)((function(e){return{auth:e.auth}}),{logout:function(){return function(e){e({type:"CLEAR_PROFILE"}),e({type:"LOGOUT"})}}})((function(e){var t=e.auth,a=t.isAuthenticated,l=t.loading,c=e.logout,s=r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/profiles"},"Developers")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/dashboard"},r.a.createElement("i",{className:"fas fa-user"})," ",r.a.createElement("span",{className:"hide-sm"},"Dashboard"))),r.a.createElement("li",null,r.a.createElement("a",{onClick:c,href:"#!"},r.a.createElement("i",{className:"fas fa-sign-out-alt"})," ",r.a.createElement("span",{className:"hide-sm"},"Logout")))),u=r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/profiles"},"Developers")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/register"},"Register")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/login"},"Login")));return r.a.createElement("nav",{className:"navbar bg-dark"},r.a.createElement("h1",null,r.a.createElement(o.b,{to:"/"},r.a.createElement("i",{className:"fas fa-code"})," DevConnector")),!l&&r.a.createElement(n.Fragment,null,a?s:u))})),y=Object(u.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}))((function(e){return e.isAuthenticated?r.a.createElement(s.a,{to:"/dashboard"}):r.a.createElement("section",{className:"landing"},r.a.createElement("div",{className:"dark-overlay"},r.a.createElement("div",{className:"landing-inner"},r.a.createElement("h1",{className:"x-large"},"Developer Connector"),r.a.createElement("p",{className:"lead"},"Create a developer profile/portfolio, share posts and get help from other developers"),r.a.createElement("div",{className:"buttons"},r.a.createElement(o.b,{to:"/register",className:"btn btn-primary"},"Sign Up"),r.a.createElement(o.b,{to:"/login",className:"btn btn-light"},"Login")))))})),N=a(9),x=a(5),O=a(8),C=Object(u.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{setAlert:b,register:function(e){var t=e.name,a=e.email,n=e.password;return function(e){var r,l,c,o;return m.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return r={headers:{"Content-Type":"application/json"}},l=JSON.stringify({name:t,email:a,password:n}),s.prev=2,s.next=5,m.a.awrap(d.a.post("/api/users",l,r));case 5:c=s.sent,e({type:"REGISTER_SUCCESS",payload:c.data}),e(h()),s.next=15;break;case 10:s.prev=10,s.t0=s.catch(2),(o=s.t0.response.data.errors)&&o.forEach((function(t){return e(b(t.msg,"danger"))})),e({type:"REGISTER_FAIL"});case 15:case"end":return s.stop()}}),null,null,[[2,10]])}}})((function(e){var t=e.setAlert,a=e.register,l=e.isAuthenticated,c=Object(n.useState)({name:"",email:"",password:"",password2:""}),u=Object(O.a)(c,2),i=u[0],p=u[1],d=i.name,f=i.email,E=i.password,b=i.password2,g=function(e){return p(Object(x.a)({},i,Object(N.a)({},e.target.name,e.target.value)))};return l?r.a.createElement(s.a,{to:"/dashboard"}):r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"large text-primary"},"Sign Up"),r.a.createElement("p",{className:"lead"},r.a.createElement("i",{className:"fas fa-user"})," Create Your Account"),r.a.createElement("form",{className:"form",onSubmit:function(e){return function(e){return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault(),E!==b?t("Passwords do not match","danger"):a({name:d,email:f,password:E});case 2:case"end":return n.stop()}}))}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Name",name:"name",value:d,onChange:function(e){return g(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",placeholder:"Email Address",name:"email",value:f,onChange:function(e){return g(e)}}),r.a.createElement("small",{className:"form-text"},"This site uses Gravatar so if you want a profile image, use a Gravatar email")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:E,onChange:function(e){return g(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",placeholder:"Confirm Password",name:"password2",value:b,onChange:function(e){return g(e)}})),r.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Register"})),r.a.createElement("p",{className:"my-1"},"Already have an account? ",r.a.createElement(o.b,{to:"login"},"Sign In")))})),k=Object(u.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(a){var n,r,l,c;return m.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return n={headers:{"Content-Type":"application/json"}},r=JSON.stringify({email:e,password:t}),o.prev=2,o.next=5,m.a.awrap(d.a.post("/api/auth",r,n));case 5:l=o.sent,a({type:"LOGIN_SUCCESS",payload:l.data}),a(h()),o.next=15;break;case 10:o.prev=10,o.t0=o.catch(2),(c=o.t0.response.data.errors)&&c.forEach((function(e){return a(b(e.msg,"danger"))})),a({type:"LOGIN_FAIL"});case 15:case"end":return o.stop()}}),null,null,[[2,10]])}}})((function(e){var t=e.login,a=e.isAuthenticated,l=Object(n.useState)({name:"",email:"",password:"",password2:""}),c=Object(O.a)(l,2),u=c[0],i=c[1],p=u.email,d=u.password,f=function(e){return i(Object(x.a)({},u,Object(N.a)({},e.target.name,e.target.value)))};return a?r.a.createElement(s.a,{to:"/dashboard"}):r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"large text-primary"},"Sign In"),r.a.createElement("p",{className:"lead"},r.a.createElement("i",{className:"fas fa-user"})," Sign Into Your Account"),r.a.createElement("form",{className:"form",onSubmit:function(e){return function(e){return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:e.preventDefault(),t(p,d);case 2:case"end":return a.stop()}}))}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",placeholder:"Email Address",name:"email",value:p,onChange:function(e){return f(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:d,onChange:function(e){return f(e)},minLength:"6"})),r.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Login"})),r.a.createElement("p",{className:"my-1"},"Don't have an account? ",r.a.createElement(o.b,{to:"login"},"Sign Up")))})),w=Object(u.b)((function(e){return{alerts:e.alert}}))((function(e){var t=e.alerts;return null!==t&&t.length>0&&t.map((function(e){return r.a.createElement("div",{key:e.id,className:"alert alert-".concat(e.alertType)},e.msg)}))})),R=a(41),S=a.n(R),L=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("img",{src:S.a,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading..."}))},j=function(){return r.a.createElement("div",{className:"dash-buttons"},r.a.createElement(o.b,{to:"/edit-profile",className:"btn btn-light"},r.a.createElement("i",{className:"fas fa-user-circle text-primary"})," Edit Profile"),r.a.createElement(o.b,{to:"/add-experience",className:"btn btn-light"},r.a.createElement("i",{className:"fab fa-black-tie text-primary"})," Add Experience"),r.a.createElement(o.b,{to:"/add-education",className:"btn btn-light"},r.a.createElement("i",{className:"fas fa-graduation-cap text-primary"})," Add Education"))},A=a(18),T=a.n(A),D=function(){return function(e){var t;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,m.a.awrap(d.a.get("/api/profile/me"));case 3:t=a.sent,e({type:"GET_PROFILE",payload:t.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),e({type:"PROFILE_ERROR",payload:{msg:a.t0.response.statusText,status:a.t0.response.status}});case 10:case"end":return a.stop()}}),null,null,[[0,7]])}},P=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(n){var r,l,c;return m.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,r={headers:{"Content-Type":"application/json"}},o.next=4,m.a.awrap(d.a.post("/api/profile",e,r));case 4:l=o.sent,n({type:"GET_PROFILE",payload:l.data}),n(b(a?"Profile Updated":"Profile Created","success")),a||t.push("/dashboard"),o.next=15;break;case 10:o.prev=10,o.t0=o.catch(0),(c=o.t0.response.data.errors)&&c.forEach((function(e){return n(b(e.msg,"danger"))})),n({type:"PROFILE_ERROR",payload:{msg:o.t0.response.statusText,status:o.t0.response.status}});case 15:case"end":return o.stop()}}),null,null,[[0,10]])}},I=Object(u.b)(null,{deleteExperience:function(e){return function(t){var a;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m.a.awrap(d.a.delete("/api/profile/experience/".concat(e)));case 3:a=n.sent,t({type:"UPDATE_PROFILE",payload:a.data}),t(b("Experience Removed","success")),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),t({type:"PROFILE_ERROR",payload:{msg:n.t0.response.statusText,status:n.t0.response.status}});case 11:case"end":return n.stop()}}),null,null,[[0,8]])}}})((function(e){var t=e.experience,a=e.deleteExperience,l=t.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.company),r.a.createElement("td",{className:"hid-sm"},e.title),r.a.createElement("td",null,r.a.createElement(T.a,{format:"YYYY/MM/DD"},e.from)," -"," ",null===e.to?" Now":r.a.createElement(T.a,{format:"YYYY/MM/DD"},e.to)),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return a(e._id)},className:"btn btn-danger"},"Delete")))}));return r.a.createElement(n.Fragment,null,r.a.createElement("h2",{className:"my-2"},"Experience Credentials"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Company"),r.a.createElement("th",{className:"hid-sm"},"Title"),r.a.createElement("th",{className:"hid-sm"},"Years"))),r.a.createElement("tbody",null,l)))})),F=Object(u.b)(null,{deleteEducation:function(e){return function(t){var a;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m.a.awrap(d.a.delete("/api/profile/education/".concat(e)));case 3:a=n.sent,t({type:"UPDATE_PROFILE",payload:a.data}),t(b("Education Removed","success")),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),t({type:"PROFILE_ERROR",payload:{msg:n.t0.response.statusText,status:n.t0.response.status}});case 11:case"end":return n.stop()}}),null,null,[[0,8]])}}})((function(e){var t=e.education,a=e.deleteEducation,l=t.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.school),r.a.createElement("td",{className:"hid-sm"},e.degree),r.a.createElement("td",null,r.a.createElement(T.a,{format:"YYYY/MM/DD"},e.from)," -"," ",null===e.to?" Now":r.a.createElement(T.a,{format:"YYYY/MM/DD"},e.to)),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return a(e._id)},className:"btn btn-danger"},"Delete")))}));return r.a.createElement(n.Fragment,null,r.a.createElement("h2",{className:"my-2"},"Education Credentials"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"School"),r.a.createElement("th",{className:"hid-sm"},"Degree"),r.a.createElement("th",{className:"hid-sm"},"Years"))),r.a.createElement("tbody",null,l)))})),_=Object(u.b)((function(e){return{auth:e.auth,profile:e.profile}}),{getCurrentProfile:D,deleteAccount:function(e){return function(e){return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Are you sure? This cannont be undone!")){t.next=13;break}return t.prev=1,t.next=4,m.a.awrap(d.a.delete("/api/profile"));case 4:t.sent,e({type:"CLEAR_PROFILE"}),e({type:"ACCOUNT_DELETED"}),e(b("Your account has been permanently deleted")),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e({type:"PROFILE_ERROR",payload:{msg:t.t0.response.statusText,status:t.t0.response.status}});case 13:case"end":return t.stop()}}),null,null,[[1,10]])}}})((function(e){var t=e.getCurrentProfile,a=e.deleteAccount,l=e.auth.user,c=e.profile,s=c.profile,u=c.loading;return Object(n.useEffect)((function(){t()}),[u]),u&&null==s?r.a.createElement(L,null):r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"large text-primary"},"Dashboard"),r.a.createElement("p",{className:"lead"},r.a.createElement("i",{className:"fas fa-user"})," Welcome ",l&&l.name),null!=s?r.a.createElement(n.Fragment,null,r.a.createElement(j,null),r.a.createElement(I,{experience:s.experience}),r.a.createElement(F,{education:s.education}),r.a.createElement("div",{className:"my-2"},r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return a()}},r.a.createElement("i",{className:"fas fa-user-minus"}),"Delete My Account"))):r.a.createElement(n.Fragment,null,r.a.createElement("p",null,"You have not yet setup a profile, please add some info"),r.a.createElement(o.b,{to:"/create-profile",className:"btn btn-primary my-1"},"Create Profile")))})),U=Object(u.b)(null,{createProfile:P})(Object(s.g)((function(e){var t=e.createProfile,a=e.history,l=Object(n.useState)({company:"",website:"",location:"",status:"",skills:"",githubusername:"",bio:"",twitter:"",facebook:"",linkedin:"",youtube:"",instagram:""}),c=Object(O.a)(l,2),s=c[0],u=c[1],i=Object(n.useState)(!1),m=Object(O.a)(i,2),p=m[0],d=m[1],f=s.company,E=s.website,b=s.location,g=s.status,h=s.skills,v=s.githubusername,y=s.bio,C=s.twitter,k=s.facebook,w=s.linkedin,R=s.youtube,S=s.instagram,L=function(e){return u(Object(x.a)({},s,Object(N.a)({},e.target.name,e.target.value)))};return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"large text-primary"},"Create Your Profile"),r.a.createElement("p",{className:"lead"},r.a.createElement("i",{className:"fas fa-user"})," Let's get some information to make your profile stand out"),r.a.createElement("small",null,"* = required field"),r.a.createElement("form",{className:"form",onSubmit:function(e){return function(e){e.preventDefault(),t(s,a)}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{name:"status",value:g,onChange:function(e){return L(e)}},r.a.createElement("option",{value:"0"},"* Select Professional Status"),r.a.createElement("option",{value:"Developer"},"Developer"),r.a.createElement("option",{value:"Junior Developer"},"Junior Developer"),r.a.createElement("option",{value:"Senior Developer"},"Senior Developer"),r.a.createElement("option",{value:"Manager"},"Manager"),r.a.createElement("option",{value:"Student or Learning"},"Student or Learning"),r.a.createElement("option",{value:"Instructor"},"Instructor or Teacher"),r.a.createElement("option",{value:"Intern"},"Intern"),r.a.createElement("option",{value:"Other"},"Other")),r.a.createElement("small",{className:"form-text"},"Give us an idea of where you are at in your career")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Company",name:"company",value:f,onChange:function(e){return L(e)}}),r.a.createElement("small",{className:"form-text"},"Could be your own company or one you work for")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Website",name:"website",value:E,onChange:function(e){return L(e)}}),r.a.createElement("small",{className:"form-text"},"Could be your own or a company website")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Location",name:"location",value:b,onChange:function(e){return L(e)}}),r.a.createElement("small",{className:"form-text"},"City & state suggested (eg. Boston, MA)")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"* Skills",name:"skills",value:h,onChange:function(e){return L(e)}}),r.a.createElement("small",{className:"form-text"},"Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Github Username",name:"githubusername",value:v,onChange:function(e){return L(e)}}),r.a.createElement("small",{className:"form-text"},"If you want your latest repos and a Github link, include your username")),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{placeholder:"A short bio of yourself",name:"bio",value:y,onChange:function(e){return L(e)}}),r.a.createElement("small",{className:"form-text"},"Tell us a little about yourself")),r.a.createElement("div",{className:"my-2"},r.a.createElement("button",{onClick:function(){return d(!p)},type:"button",className:"btn btn-light"},"Add Social Network Links"),r.a.createElement("span",null,"Optional")),p&&r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"form-group social-input"},r.a.createElement("i",{className:"fab fa-twitter fa-2x"}),r.a.createElement("input",{type:"text",placeholder:"Twitter URL",name:"twitter",value:C,onChange:function(e){return L(e)}})),r.a.createElement("div",{className:"form-group social-input"},r.a.createElement("i",{className:"fab fa-facebook fa-2x"}),r.a.createElement("input",{type:"text",placeholder:"Facebook URL",name:"facebook",value:k,onChange:function(e){return L(e)}})),r.a.createElement("div",{className:"form-group social-input"},r.a.createElement("i",{className:"fab fa-youtube fa-2x"}),r.a.createElement("input",{type:"text",placeholder:"YouTube URL",name:"youtube",value:R,onChange:function(e){return L(e)}})),r.a.createElement("div",{className:"form-group social-input"},r.a.createElement("i",{className:"fab fa-linkedin fa-2x"}),r.a.createElement("input",{type:"text",placeholder:"Linkedin URL",name:"linkedin",value:w,onChange:function(e){return L(e)}})),r.a.createElement("div",{className:"form-group social-input"},r.a.createElement("i",{className:"fab fa-instagram fa-2x"}),r.a.createElement("input",{type:"text",placeholder:"Instagram URL",name:"instagram",value:S,onChange:function(e){return L(e)}}))),r.a.createElement("input",{type:"submit",className:"btn btn-primary my-1"}),r.a.createElement(o.b,{className:"btn btn-light my-1",to:"/dashboard"},"Go Back")))}))),G=Object(u.b)((function(e){return{profile:e.profile}}),{createProfile:P,getCurrentProfile:D})(Object(s.g)((function(e){var t=e.profile,a=t.profile,l=t.loading,c=e.createProfile,s=e.getCurrentProfile,u=e.history,i=Object(n.useState)({company:"",website:"",location:"",status:"",skills:"",githubusername:"",bio:"",twitter:"",facebook:"",linkedin:"",youtube:"",instagram:""}),m=Object(O.a)(i,2),p=m[0],d=m[1],f=Object(n.useState)(!1),E=Object(O.a)(f,2),b=E[0],g=E[1];Object(n.useEffect)((function(){s(),d({company:l||!a.company?"":a.company,website:l||!a.website?"":a.website,location:l||!a.location?"":a.location,status:l||!a.status?"":a.status,skills:l||!a.skills?"":a.skills,githubusername:l||!a.githubusername?"":a.githubusername,bio:l||!a.bio?"":a.bio,twitter:l||!a.twitter?"":a.twitter,facebook:l||!a.facebook?"":a.facebook,linkedin:l||!a.linkedin?"":a.linkedin,youtube:l||!a.youtube?"":a.youtube,instagram:l||!a.instagram?"":a.instagram})}),[l]);var h=p.company,v=p.website,y=p.location,C=p.status,k=p.skills,w=p.githubusername,R=p.bio,S=p.twitter,L=p.facebook,j=p.linkedin,A=p.youtube,T=p.instagram,D=function(e){return d(Object(x.a)({},p,Object(N.a)({},e.target.name,e.target.value)))};return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"large text-primary"},"Create Your Profile"),r.a.createElement("p",{className:"lead"},r.a.createElement("i",{className:"fas fa-user"})," Let's get some information to make your profile stand out"),r.a.createElement("small",null,"* = required field"),r.a.createElement("form",{className:"form",onSubmit:function(e){return function(e){e.preventDefault(),c(p,u,!0)}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{name:"status",value:C,onChange:function(e){return D(e)}},r.a.createElement("option",{value:"0"},"* Select Professional Status"),r.a.createElement("option",{value:"Developer"},"Developer"),r.a.createElement("option",{value:"Junior Developer"},"Junior Developer"),r.a.createElement("option",{value:"Senior Developer"},"Senior Developer"),r.a.createElement("option",{value:"Manager"},"Manager"),r.a.createElement("option",{value:"Student or Learning"},"Student or Learning"),r.a.createElement("option",{value:"Instructor"},"Instructor or Teacher"),r.a.createElement("option",{value:"Intern"},"Intern"),r.a.createElement("option",{value:"Other"},"Other")),r.a.createElement("small",{className:"form-text"},"Give us an idea of where you are at in your career")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Company",name:"company",value:h,onChange:function(e){return D(e)}}),r.a.createElement("small",{className:"form-text"},"Could be your own company or one you work for")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Website",name:"website",value:v,onChange:function(e){return D(e)}}),r.a.createElement("small",{className:"form-text"},"Could be your own or a company website")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Location",name:"location",value:y,onChange:function(e){return D(e)}}),r.a.createElement("small",{className:"form-text"},"City & state suggested (eg. Boston, MA)")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"* Skills",name:"skills",value:k,onChange:function(e){return D(e)}}),r.a.createElement("small",{className:"form-text"},"Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Github Username",name:"githubusername",value:w,onChange:function(e){return D(e)}}),r.a.createElement("small",{className:"form-text"},"If you want your latest repos and a Github link, include your username")),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{placeholder:"A short bio of yourself",name:"bio",value:R,onChange:function(e){return D(e)}}),r.a.createElement("small",{className:"form-text"},"Tell us a little about yourself")),r.a.createElement("div",{className:"my-2"},r.a.createElement("button",{onClick:function(){return g(!b)},type:"button",className:"btn btn-light"},"Add Social Network Links"),r.a.createElement("span",null,"Optional")),b&&r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"form-group social-input"},r.a.createElement("i",{className:"fab fa-twitter fa-2x"}),r.a.createElement("input",{type:"text",placeholder:"Twitter URL",name:"twitter",value:S,onChange:function(e){return D(e)}})),r.a.createElement("div",{className:"form-group social-input"},r.a.createElement("i",{className:"fab fa-facebook fa-2x"}),r.a.createElement("input",{type:"text",placeholder:"Facebook URL",name:"facebook",value:L,onChange:function(e){return D(e)}})),r.a.createElement("div",{className:"form-group social-input"},r.a.createElement("i",{className:"fab fa-youtube fa-2x"}),r.a.createElement("input",{type:"text",placeholder:"YouTube URL",name:"youtube",value:A,onChange:function(e){return D(e)}})),r.a.createElement("div",{className:"form-group social-input"},r.a.createElement("i",{className:"fab fa-linkedin fa-2x"}),r.a.createElement("input",{type:"text",placeholder:"Linkedin URL",name:"linkedin",value:j,onChange:function(e){return D(e)}})),r.a.createElement("div",{className:"form-group social-input"},r.a.createElement("i",{className:"fab fa-instagram fa-2x"}),r.a.createElement("input",{type:"text",placeholder:"Instagram URL",name:"instagram",value:T,onChange:function(e){return D(e)}}))),r.a.createElement("input",{type:"submit",className:"btn btn-primary my-1"}),r.a.createElement(o.b,{className:"btn btn-light my-1",to:"/dashboard"},"Go Back")))}))),Y=Object(u.b)(null,{addExperience:function(e,t){return function(a){var n,r,l;return m.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,n={headers:{"Content-Type":"application/json"}},c.next=4,m.a.awrap(d.a.put("/api/profile/experience",e,n));case 4:r=c.sent,a({type:"UPDATE_PROFILE",payload:r.data}),a(b("Experience Added","success")),t.push("/dashboard"),c.next=15;break;case 10:c.prev=10,c.t0=c.catch(0),(l=c.t0.response.data.errors)&&l.forEach((function(e){return a(b(e.msg,"danger"))})),a({type:"PROFILE_ERROR",payload:{msg:c.t0.response.statusText,status:c.t0.response.status}});case 15:case"end":return c.stop()}}),null,null,[[0,10]])}}})((function(e){var t=e.addExperience,a=e.history,l=Object(n.useState)({company:"",title:"",location:"",from:"",to:"",current:!1,description:""}),c=Object(O.a)(l,2),s=c[0],u=c[1],i=Object(n.useState)(!1),m=Object(O.a)(i,2),p=m[0],d=m[1],f=s.company,E=s.title,b=s.location,g=s.from,h=s.to,v=s.current,y=s.description,C=function(e){return u(Object(x.a)({},s,Object(N.a)({},e.target.name,e.target.value)))};return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{class:"large text-primary"},"Add An Experience"),r.a.createElement("p",{class:"lead"},r.a.createElement("i",{class:"fas fa-code-branch"})," Add any developer/programming positions that you have had in the past"),r.a.createElement("small",null,"* = required field"),r.a.createElement("form",{class:"form",onSubmit:function(e){e.preventDefault(),t(s,a)}},r.a.createElement("div",{class:"form-group"},r.a.createElement("input",{type:"text",placeholder:"* Job Title",name:"title",value:E,onChange:function(e){return C(e)},required:!0})),r.a.createElement("div",{class:"form-group"},r.a.createElement("input",{type:"text",placeholder:"* Company",name:"company",value:f,onChange:function(e){return C(e)},required:!0})),r.a.createElement("div",{class:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Location",name:"location",value:b,onChange:function(e){return C(e)}})),r.a.createElement("div",{class:"form-group"},r.a.createElement("h4",null,"From Date"),r.a.createElement("input",{type:"date",name:"from",value:g,onChange:function(e){return C(e)}})),r.a.createElement("div",{class:"form-group"},r.a.createElement("p",null,r.a.createElement("input",{type:"checkbox",name:"current",checked:v,value:v,onChange:function(e){u(Object(x.a)({},s,{current:!v})),d(!p)}})," ","Current Job")),r.a.createElement("div",{class:"form-group"},r.a.createElement("h4",null,"To Date"),r.a.createElement("input",{type:"date",name:"to",value:h,onChange:function(e){return C(e)},disabled:p?"disabled":""})),r.a.createElement("div",{class:"form-group"},r.a.createElement("textarea",{name:"description",cols:"30",rows:"5",placeholder:"Job Description",value:y,onChange:function(e){return C(e)}})),r.a.createElement("input",{type:"submit",class:"btn btn-primary my-1"}),r.a.createElement(o.b,{class:"btn btn-light my-1",to:"dashboard"},"Go Back")))})),M=Object(u.b)(null,{addEducation:function(e,t){return function(a){var n,r,l;return m.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,n={headers:{"Content-Type":"application/json"}},c.next=4,m.a.awrap(d.a.put("/api/profile/education",e,n));case 4:r=c.sent,a({type:"UPDATE_PROFILE",payload:r.data}),a(b("Education Added","success")),t.push("/dashboard"),c.next=15;break;case 10:c.prev=10,c.t0=c.catch(0),(l=c.t0.response.data.errors)&&l.forEach((function(e){return a(b(e.msg,"danger"))})),a({type:"PROFILE_ERROR",payload:{msg:c.t0.response.statusText,status:c.t0.response.status}});case 15:case"end":return c.stop()}}),null,null,[[0,10]])}}})((function(e){var t=e.addEducation,a=e.history,l=Object(n.useState)({school:"",degree:"",fieldofstudy:"",from:"",to:"",current:!1,description:""}),c=Object(O.a)(l,2),s=c[0],u=c[1],i=Object(n.useState)(!1),m=Object(O.a)(i,2),p=m[0],d=m[1],f=s.school,E=s.degree,b=s.fieldofstudy,g=s.from,h=s.to,v=s.current,y=s.description,C=function(e){return u(Object(x.a)({},s,Object(N.a)({},e.target.name,e.target.value)))};return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{class:"large text-primary"},"Add Your Education"),r.a.createElement("p",{class:"lead"},r.a.createElement("i",{class:"fas fa-code-branch"})," Add any school or bootcamp that you have attended"),r.a.createElement("small",null,"* = required field"),r.a.createElement("form",{class:"form",onSubmit:function(e){e.preventDefault(),t(s,a)}},r.a.createElement("div",{class:"form-group"},r.a.createElement("input",{type:"text",placeholder:"* School or Bootcamp",name:"school",value:f,onChange:function(e){return C(e)},required:!0})),r.a.createElement("div",{class:"form-group"},r.a.createElement("input",{type:"text",placeholder:"* Degree or Certificate",name:"degree",value:E,onChange:function(e){return C(e)},required:!0})),r.a.createElement("div",{class:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Field of Study",name:"fieldofstudy",value:b,onChange:function(e){return C(e)}})),r.a.createElement("div",{class:"form-group"},r.a.createElement("h4",null,"From Date"),r.a.createElement("input",{type:"date",name:"from",value:g,onChange:function(e){return C(e)}})),r.a.createElement("div",{class:"form-group"},r.a.createElement("p",null,r.a.createElement("input",{type:"checkbox",name:"current",checked:v,value:v,onChange:function(e){u(Object(x.a)({},s,{current:!v})),d(!p)}})," ","Current")),r.a.createElement("div",{class:"form-group"},r.a.createElement("h4",null,"To Date"),r.a.createElement("input",{type:"date",name:"to",value:h,onChange:function(e){return C(e)},disabled:p?"disabled":""})),r.a.createElement("div",{class:"form-group"},r.a.createElement("textarea",{name:"description",cols:"30",rows:"5",placeholder:"Program Description",value:y,onChange:function(e){return C(e)}})),r.a.createElement("input",{type:"submit",class:"btn btn-primary my-1"}),r.a.createElement(o.b,{class:"btn btn-light my-1",to:"dashboard"},"Go Back")))})),J=function(e){var t=e.profile,a=t.user,n=a._id,l=a.name,c=a.avatar,s=t.status,u=t.company,i=t.location,m=t.skills;return r.a.createElement("div",{className:"profile bg-light"},r.a.createElement("img",{src:c,alt:"",className:"rounder-mg"}),r.a.createElement("div",null,r.a.createElement("h2",null,l),r.a.createElement("p",null,s,u&&r.a.createElement("span",null," at ",u)),r.a.createElement("p",{className:"my-1"},i&&r.a.createElement("span",null,i)),r.a.createElement(o.b,{to:"/profile/".concat(n),className:"btn btn-primary"},"View Profile")),r.a.createElement("ul",null,m.slice(0,4).map((function(e,t){return r.a.createElement("li",{key:t,className:"text-primary"},r.a.createElement("i",{className:"fas fa-check"})," ",e)}))))},B=Object(u.b)((function(e){return{profile:e.profile}}),{getProfiles:function(){return function(e){var t;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e({type:"CLEAR_PROFILE"}),a.prev=1,a.next=4,m.a.awrap(d.a.get("/api/profile/"));case 4:t=a.sent,e({type:"GET_PROFILES",payload:t.data}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),e({type:"PROFILE_ERROR",payload:{msg:a.t0.response.statusText,status:a.t0.response.status}});case 11:case"end":return a.stop()}}),null,null,[[1,8]])}}})((function(e){var t=e.getProfiles,a=e.profile,l=a.profiles,c=a.loading;return Object(n.useEffect)((function(){t()}),[]),r.a.createElement(n.Fragment,null,c?r.a.createElement(L,null):r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"large text-primary"},"Developers"),r.a.createElement("p",{className:"lead"},r.a.createElement("i",{className:"fab fa-connectdevelop"})," Browse and connect with developers"),r.a.createElement("div",{className:"profiles"},l.length>0?l.map((function(e){return r.a.createElement(J,{key:e._id,profile:e})})):r.a.createElement("h4",null,"No profiles found"))))})),q=a(42),H=Object(u.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth,n=a.isAuthenticated,l=a.loading,c=Object(q.a)(e,["component","auth"]);return r.a.createElement(s.b,Object.assign({},c,{render:function(e){return n||l?r.a.createElement(t,e):r.a.createElement(s.a,{to:"/login"})}}))})),W=a(16),V=a(43),z=a(44),K=a(45),Q=[],X={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null},Z={profile:null,profiles:[],repos:[],loading:!0,error:{}},$=Object(W.combineReducers)({alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SET_ALERT":return[].concat(Object(K.a)(e),[n]);case"REMOVE_ALERT":return e.filter((function(e){return e.id!==n}));default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"USER_LOADED":return Object(x.a)({},e,{isAuthenticated:!0,loading:!1,user:n});case"REGISTER_SUCCESS":case"LOGIN_SUCCESS":return localStorage.setItem("token",n.token),Object(x.a)({},e,{},n,{isAuthenticated:!0,loading:!1});case"REGISTER_FAIL":case"AUTH_ERROR":case"LOGIN_FAIL":case"LOGOUT":case"ACCOUNT_DELETED":return localStorage.removeItem("token"),Object(x.a)({},e,{token:null,isAuthenticated:!1,loading:!1});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_PROFILE":case"UPDATE_PROFILE":return Object(x.a)({},e,{profile:n,loading:!1});case"GET_PROFILES":return Object(x.a)({},e,{profiles:n,loading:!1});case"PROFILE_ERROR":return Object(x.a)({},e,{error:n,loading:!1});case"CLEAR_PROFILE":return Object(x.a)({},e,{profile:null,repos:[],loading:!1});case"GET_REPOS":return Object(x.a)({},e,{repos:n,loading:!1});default:return e}}}),ee=[z.a],te=Object(W.createStore)($,{},Object(V.composeWithDevTools)(W.applyMiddleware.apply(void 0,ee)));a(79);localStorage.token&&g(localStorage.token);var ae=function(){return Object(n.useEffect)((function(){te.dispatch(h())}),[]),r.a.createElement(u.a,{store:te},r.a.createElement(o.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(v,null),r.a.createElement(s.b,{exact:!0,path:"/",component:y}),r.a.createElement("section",{className:"container"},r.a.createElement(w,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/register",component:C}),r.a.createElement(s.b,{exact:!0,path:"/login",component:k}),r.a.createElement(s.b,{exact:!0,path:"/profiles",component:B}),r.a.createElement(H,{exact:!0,path:"/dashboard",component:_}),r.a.createElement(H,{exact:!0,path:"/create-profile",component:U}),r.a.createElement(H,{exact:!0,path:"/edit-profile",component:G}),r.a.createElement(H,{exact:!0,path:"/add-experience",component:Y}),r.a.createElement(H,{exact:!0,path:"/add-education",component:M}))))))};c.a.render(r.a.createElement(ae,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.ca7eb864.chunk.js.map