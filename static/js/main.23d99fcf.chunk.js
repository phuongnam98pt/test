(this["webpackJsonpreact-typescript-login-example"]=this["webpackJsonpreact-typescript-login-example"]||[]).push([[0],{102:function(e,t,n){},104:function(e,t,n){},231:function(e,t,n){"use strict";n.r(t);var a=n(91),s=n.n(a),r=n(16),c=(n(102),n(2)),i=n(3),o=n(17),l=n(4),d=n(5),u=n(0),m=n(7),j=(n(103),n(104),n(24)),h=n.n(j),b="http://localhost:8080/api/auth/",O=new(function(){function e(){Object(c.a)(this,e)}return Object(i.a)(e,[{key:"login",value:function(e,t){return h.a.post(b+"signin",{username:e,password:t}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e,t,n){return h.a.post(b+"signup",{username:e,email:t,password:n})}},{key:"getCurrentUser",value:function(){var e=localStorage.getItem("user");return e?JSON.parse(e):null}}]),e}()),p=n(11),v=n(20),g=n(1),x=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleLogin=a.handleLogin.bind(Object(o.a)(a)),a.state={username:"",password:"",loading:!1,message:""},a}return Object(i.a)(n,[{key:"validationSchema",value:function(){return v.a().shape({username:v.b().required("This field is required!"),password:v.b().required("This field is required!")})}},{key:"handleLogin",value:function(e){var t=this,n=e.username,a=e.password;this.setState({message:"",loading:!0}),O.login(n,a).then((function(){t.props.history.push("/profile"),window.location.reload()}),(function(e){var n=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();t.setState({loading:!1,message:n})}))}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.message;return Object(g.jsx)("div",{className:"col-md-12",children:Object(g.jsxs)("div",{className:"card card-container",children:[Object(g.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(g.jsx)(p.d,{initialValues:{username:"",password:""},validationSchema:this.validationSchema,onSubmit:this.handleLogin,children:Object(g.jsxs)(p.c,{children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"username",children:"Username"}),Object(g.jsx)(p.b,{name:"username",type:"text",className:"form-control"}),Object(g.jsx)(p.a,{name:"username",component:"div",className:"alert alert-danger"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"password",children:"Password"}),Object(g.jsx)(p.b,{name:"password",type:"password",className:"form-control"}),Object(g.jsx)(p.a,{name:"password",component:"div",className:"alert alert-danger"})]}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsxs)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t,children:[t&&Object(g.jsx)("span",{className:"spinner-border spinner-border-sm"}),Object(g.jsx)("span",{children:"Login"})]})}),n&&Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("div",{className:"alert alert-danger",role:"alert",children:n})})]})})]})})}}]),n}(u.Component),f=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleRegister=a.handleRegister.bind(Object(o.a)(a)),a.state={username:"",email:"",password:"",successful:!1,message:""},a}return Object(i.a)(n,[{key:"validationSchema",value:function(){return v.a().shape({username:v.b().test("len","The username must be between 3 and 20 characters.",(function(e){return e&&e.toString().length>=3&&e.toString().length<=20})).required("This field is required!"),email:v.b().email("This is not a valid email.").required("This field is required!"),password:v.b().test("len","The password must be between 6 and 40 characters.",(function(e){return e&&e.toString().length>=6&&e.toString().length<=40})).required("This field is required!")})}},{key:"handleRegister",value:function(e){var t=this,n=e.username,a=e.email,s=e.password;this.setState({message:"",successful:!1}),O.register(n,a,s).then((function(e){t.setState({message:e.data.message,successful:!0})}),(function(e){var n=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();t.setState({successful:!1,message:n})}))}},{key:"render",value:function(){var e=this.state,t=e.successful,n=e.message;return Object(g.jsx)("div",{className:"col-md-12",children:Object(g.jsxs)("div",{className:"card card-container",children:[Object(g.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(g.jsx)(p.d,{initialValues:{username:"",email:"",password:""},validationSchema:this.validationSchema,onSubmit:this.handleRegister,children:Object(g.jsxs)(p.c,{children:[!t&&Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"username",children:" Username "}),Object(g.jsx)(p.b,{name:"username",type:"text",className:"form-control"}),Object(g.jsx)(p.a,{name:"username",component:"div",className:"alert alert-danger"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"email",children:" Email "}),Object(g.jsx)(p.b,{name:"email",type:"email",className:"form-control"}),Object(g.jsx)(p.a,{name:"email",component:"div",className:"alert alert-danger"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"password",children:" Password "}),Object(g.jsx)(p.b,{name:"password",type:"password",className:"form-control"}),Object(g.jsx)(p.a,{name:"password",component:"div",className:"alert alert-danger"})]}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Sign Up"})})]}),n&&Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("div",{className:t?"alert alert-success":"alert alert-danger",role:"alert",children:n})})]})})]})})}}]),n}(u.Component);function N(){var e=localStorage.getItem("user"),t=null;return e&&(t=JSON.parse(e)),t&&t.accessToken?{Authorization:"Bearer "+t.accessToken}:{Authorization:""}}var k="http://localhost:8080/api/test/",y=new(function(){function e(){Object(c.a)(this,e)}return Object(i.a)(e,[{key:"getPublicContent",value:function(){return h.a.get(k+"all")}},{key:"getUserBoard",value:function(){return h.a.get(k+"user",{headers:N()})}},{key:"getModeratorBoard",value:function(){return h.a.get(k+"mod",{headers:N()})}},{key:"getAdminBoard",value:function(){return h.a.get(k+"admin",{headers:N()})}}]),e}()),S=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={content:""},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;y.getPublicContent().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data||t.message||t.toString()})}))}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsx)("header",{className:"jumbotron",children:Object(g.jsx)("h3",{children:this.state.content})})})}}]),n}(u.Component),w=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={redirect:null,userReady:!1,currentUser:{accessToken:""}},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=O.getCurrentUser();e||this.setState({redirect:"/home"}),this.setState({currentUser:e,userReady:!0})}},{key:"render",value:function(){if(this.state.redirect)return Object(g.jsx)(m.a,{to:this.state.redirect});var e=this.state.currentUser;return Object(g.jsx)("div",{className:"container",children:this.state.userReady?Object(g.jsxs)("div",{children:[Object(g.jsx)("header",{className:"jumbotron",children:Object(g.jsxs)("h3",{children:[Object(g.jsx)("strong",{children:e.username})," Profile"]})}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Token:"})," ",e.accessToken.substring(0,20)," ..."," ",e.accessToken.substr(e.accessToken.length-20)]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Id:"})," ",e.id]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Email:"})," ",e.email]}),Object(g.jsx)("strong",{children:"Authorities:"}),Object(g.jsx)("ul",{children:e.roles&&e.roles.map((function(e,t){return Object(g.jsx)("li",{children:e},t)}))})]}):null})}}]),n}(u.Component),B={on:function(e,t){document.addEventListener(e,(function(e){return t(e)}))},dispatch:function(e,t){document.dispatchEvent(new CustomEvent(e,{detail:t}))},remove:function(e,t){document.removeEventListener(e,t)}},T=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={content:""},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;y.getUserBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}),t.response&&401===t.response.status&&B.dispatch("logout")}))}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsx)("header",{className:"jumbotron",children:Object(g.jsx)("h3",{children:this.state.content})})})}}]),n}(u.Component),C=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={content:""},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;y.getModeratorBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}),t.response&&401===t.response.status&&B.dispatch("logout")}))}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsx)("header",{className:"jumbotron",children:Object(g.jsx)("h3",{children:this.state.content})})})}}]),n}(u.Component),U=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={content:""},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;y.getAdminBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}),t.response&&401===t.response.status&&B.dispatch("logout")}))}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsx)("header",{className:"jumbotron",children:Object(g.jsx)("h3",{children:this.state.content})})})}}]),n}(u.Component),M=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).logOut=a.logOut.bind(Object(o.a)(a)),a.state={showModeratorBoard:!1,showAdminBoard:!1,currentUser:void 0},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=O.getCurrentUser();e&&this.setState({currentUser:e,showModeratorBoard:e.roles.includes("ROLE_MODERATOR"),showAdminBoard:e.roles.includes("ROLE_ADMIN")}),B.on("logout",this.logOut)}},{key:"componentWillUnmount",value:function(){B.remove("logout",this.logOut)}},{key:"logOut",value:function(){O.logout(),this.setState({showModeratorBoard:!1,showAdminBoard:!1,currentUser:void 0})}},{key:"render",value:function(){var e=this.state,t=e.currentUser,n=e.showModeratorBoard,a=e.showAdminBoard;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(g.jsx)(r.b,{to:"/",className:"navbar-brand",children:"bezKoder"}),Object(g.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(r.b,{to:"/home",className:"nav-link",children:"Home"})}),n&&Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(r.b,{to:"/mod",className:"nav-link",children:"Moderator Board"})}),a&&Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(r.b,{to:"/admin",className:"nav-link",children:"Admin Board"})}),t&&Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(r.b,{to:"/user",className:"nav-link",children:"User"})})]}),t?Object(g.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(r.b,{to:"/profile",className:"nav-link",children:t.username})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/login",className:"nav-link",onClick:this.logOut,children:"LogOut"})})]}):Object(g.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(r.b,{to:"/login",className:"nav-link",children:"Login"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(r.b,{to:"/register",className:"nav-link",children:"Sign Up"})})]})]}),Object(g.jsx)("div",{className:"container mt-3",children:Object(g.jsxs)(m.d,{children:[Object(g.jsx)(m.b,{exact:!0,path:["/","/home"],component:S}),Object(g.jsx)(m.b,{exact:!0,path:"/login",component:x}),Object(g.jsx)(m.b,{exact:!0,path:"/register",component:f}),Object(g.jsx)(m.b,{exact:!0,path:"/profile",component:w}),Object(g.jsx)(m.b,{path:"/user",component:T}),Object(g.jsx)(m.b,{path:"/mod",component:C}),Object(g.jsx)(m.b,{path:"/admin",component:U})]})})]})}}]),n}(u.Component),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,232)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};s.a.render(Object(g.jsx)(r.a,{children:Object(g.jsx)(M,{})}),document.getElementById("root")),L()}},[[231,1,2]]]);
//# sourceMappingURL=main.23d99fcf.chunk.js.map