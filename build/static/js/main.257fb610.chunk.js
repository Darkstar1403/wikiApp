(this["webpackJsonpreact-08-journal-app"]=this["webpackJsonpreact-08-journal-app"]||[]).push([[0],{83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var c=a(7),n=a(40),r=a.n(n),i=a(13),s=a(12),o=a(20),l=a(16),u=a(14),d=a.n(u),j=a(0),b=a.n(j),m=a(1),p=a(23),O=a(21),f=a(53),h=(Object(f.a)({apiKey:"AIzaSyCAvy8B9kIoSOA4Nq2ZdtMI0Yab8oMKLuY",authDomain:"wikiappdark.firebaseapp.com",projectId:"wikiappdark",storageBucket:"wikiappdark.appspot.com",messagingSenderId:"622363828740",appId:"1:622363828740:web:28cfeddc7e7efc7a704b51"}),Object(O.g)()),v=new p.a,x="[Auth] Login",g="[Auth] Logout",y="[UI] Set Error",N="[UI] Remove Error",w="[UI] Start loading",k="[UI] Finish loading",_="[Article] New article",C="[Article] Set active article",E="[Article] Unset active article",A="[Article] Load articles",S="[Article] Updated article saved",L="[Article] Delete article",I="[Article] Logout Cleaning",z=function(){return{type:N}},U=function(){return{type:w}},Z=function(){return{type:k}},D=a(11),R=function(){var e=Object(m.a)(b.a.mark((function e(t){var a,c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"\thttps://api.cloudinary.com/v1_1/universidad-de-guadalajara/upload",(a=new FormData).append("upload_preset","react-journal"),a.append("file",t),e.prev=4,e.next=7,fetch("\thttps://api.cloudinary.com/v1_1/universidad-de-guadalajara/upload",{method:"POST",body:a});case 7:if(!(c=e.sent).ok){e.next=15;break}return e.next=11,c.json();case 11:return n=e.sent,e.abrupt("return",n.secure_url);case 15:return e.abrupt("return",null);case 16:e.next=21;break;case 18:throw e.prev=18,e.t0=e.catch(4),e.t0;case 21:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(m.a)(b.a.mark((function e(){var t,a,c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(O.b)(h,"/articles"),a=Object(O.i)(t,Object(O.h)("titulo","desc")),e.next=4,Object(O.f)(a);case 4:return c=e.sent,n=[],c.forEach((function(e){n.push(Object(D.a)({id:e.id},e.data()))})),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(m.a)(b.a.mark((function e(t){var a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=Object(O.d)(h,"/articles/".concat(t)),e.next=4,Object(O.e)(a);case 4:return c=e.sent,e.abrupt("return",Object(D.a)({id:c.id},c.data()));case 8:e.prev=8,e.t0=e.catch(0),d.a.fire("Error","Error al cargar el articulo","error");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),P=function(e){return{type:C,payload:Object(D.a)({},e)}},B=function(){return{type:E}},F=function(){return function(){var e=Object(m.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T();case 3:a=e.sent,console.log(a),t(q(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),d.a.fire("Error","La carga de los articulos fall\xf3","error");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},q=function(e){return{type:A,payload:e}},G=function(e){return function(){var t=Object(m.a)(b.a.mark((function t(a,c){var n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c().article.active,d.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,showConfirmButton:!1,willOpen:function(){d.a.showLoading()}}),t.next=4,R(e);case 4:r=t.sent,n.img=r,a(P(n)),d.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},M=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{type:x,payload:{uid:e,displayName:t,admin:a}}},H=function(){return{type:g}},Y=a(4),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),a=Object(s.a)(t,2),n=a[0],r=a[1],i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},o=function(e){var t=e.target;r(Object(D.a)(Object(D.a)({},n),{},Object(Y.a)({},t.name,t.value)))};return[n,o,i]},K=a(5),X=function(){var e=Object(i.c)((function(e){return e.ui})).loading,t=Object(i.b)(),a=J({email:"",password:""}),c=Object(s.a)(a,2),n=c[0],r=c[1],l=n.email,u=n.password,j=function(){return/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test(l)?/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(u)?(t(z()),!0):(d.a.fire("Error","Password is not valid","error"),!1):(d.a.fire("Error","Email is not valid","error"),!1)};return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("h3",{className:"auth__title",children:"Login"}),Object(K.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j()&&t(function(e,t){return function(a){a(U());var c=Object(p.c)();return Object(p.e)(c,e,t).then((function(e){var t=e.user;t.photoURL&&console.log(t.photoURL),t.photoURL?a(M(t.uid,t.displayName,!0)):a(M(t.uid,t.displayName)),a(Z()),d.a.fire("Has ingresado a la mejor wiki","Presionaste el bot\xf3n","success")})).catch((function(e){console.log(e),a(Z()),d.a.fire("Error",e.message,"error")}))}}(l,u))},className:"animate__animated animate__fadeIn animate__faster",children:[Object(K.jsx)("input",{className:"auth__input",type:"email",placeholder:"Email",name:"email",value:l,onChange:r}),Object(K.jsx)("input",{className:"auth__input",type:"password",placeholder:"Password",name:"password",value:u,onChange:r}),Object(K.jsx)("button",{disabled:e,className:"btn btn-primary btn-block",type:"submit",children:"Login"}),Object(K.jsxs)("div",{className:"auth__social-networks",children:[Object(K.jsx)("p",{children:"Ingresar con redes sociales"}),Object(K.jsxs)("div",{className:"google-btn",onClick:function(){t((function(e){e(U());var t=Object(p.c)();Object(p.f)(t,v).then((function(t){var a=t.user;e(M(a.uid,a.displayName))})).catch((function(e){return console.log(e)})),e(Z())}))},children:[Object(K.jsx)("div",{className:"google-icon-wrapper",children:Object(K.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(K.jsx)("p",{className:"btn-text",children:Object(K.jsx)("b",{children:"Ingresar Google"})})]})]}),Object(K.jsx)(o.b,{className:"link",to:"/auth/register",children:"Crear una cuenta nueva"})]})]})},V=function(){var e=Object(i.b)(),t=Object(c.useState)(!1),a=Object(s.a)(t,2),n=a[0],r=a[1],l=Object(i.c)((function(e){return e.ui})),u=l.msgError,j=l.loading,O=J({name:"",email:"",password:"",passwordConfirm:""}),f=Object(s.a)(O,2),h=f[0],v=f[1],x=h.name,g=h.email,y=h.password,N=h.passwordConfirm,w=function(){return/^[a-zA-Z]\w*$/.test(x.trim())?/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test(g)?/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(y)?y!==N?(d.a.fire("Error","Las contrase\xf1as no concuerdan","error"),!1):(e(z()),!0):(d.a.fire("Error","Contrase\xf1a incorrecta","error"),!1):(d.a.fire("Error","Email no valido","error"),!1):(d.a.fire("Error","El nombre solo tiene una palabra","error"),!1)};return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("h3",{className:"auth__title",children:"Registro"}),Object(K.jsxs)("form",{onSubmit:function(t){t.preventDefault(),w()&&e(function(e,t,a,c){return function(n){n(U());var r=Object(p.c)(),i=null;c&&(i="admin"),Object(p.b)(r,e,t).then(function(){var e=Object(m.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,Object(p.h)(c,{displayName:a,photoURL:i});case 3:n(M(c.uid,c.displayName,!!i)),n(Z()),d.a.fire("Te has registrado en la mejor wiki","Presionaste el bot\xf3n","success");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),n(Z()),d.a.fire("Error",e.message,"error")}))}}(g,y,x,n))},className:"animate__animated animate__fadeIn animate__faster",children:[u&&Object(K.jsx)("div",{className:"auth__alert-error",children:u}),Object(K.jsx)("input",{className:"auth__input",type:"text",placeholder:"Nombre",name:"name",value:x,onChange:v}),Object(K.jsx)("input",{className:"auth__input",type:"email",placeholder:"Email",name:"email",value:g,onChange:v}),Object(K.jsx)("input",{className:"auth__input",type:"password",placeholder:"Contrase\xf1a",name:"password",value:y,onChange:v}),Object(K.jsx)("input",{className:"auth__input",type:"password",placeholder:"Confirmaci\xf3n de Contrase\xf1a",name:"passwordConfirm",value:N,onChange:v}),Object(K.jsx)("input",{className:"me-3",type:"checkbox",checked:n,onChange:function(){console.log(n),r((function(e){return!e}))}}),"Administrador",Object(K.jsx)("button",{disabled:j,className:"btn btn-primary btn-block mb-5 mt-3",type:"submit",children:"Registrar"}),Object(K.jsx)(o.b,{className:"link",to:"/auth/login",children:"\xbfYa estas registrado?"})]})]})},Q=function(){return Object(K.jsx)("div",{className:"auth__main",children:Object(K.jsx)("div",{className:"auth__box-container",children:Object(K.jsxs)(l.d,{children:[Object(K.jsx)(l.b,{exact:!0,path:"/auth/login",component:X}),Object(K.jsx)(l.b,{exact:!0,path:"/auth/register",component:V}),Object(K.jsx)(l.a,{to:"/auth/login"})]})})})},W=a(43),ee=function(e){var t=e.isAuthenticated,a=e.component,c=Object(W.a)(e,["isAuthenticated","component"]);return Object(K.jsx)(l.b,Object(D.a)(Object(D.a)({},c),{},{component:function(e){return t?Object(K.jsx)(l.a,{to:"/"}):Object(K.jsx)(a,Object(D.a)({},e))}}))},te=function(e){var t=e.isAuthenticated,a=e.component,c=Object(W.a)(e,["isAuthenticated","component"]);return Object(K.jsx)(l.b,Object(D.a)(Object(D.a)({},c),{},{component:function(e){return t?Object(K.jsx)(a,Object(D.a)({},e)):Object(K.jsx)(l.a,{to:"/auth/login"})}}))},ae=a(54),ce=a.n(ae),ne=a.p+"static/media/logo.8c10001c.png",re=function(){var e=Object(l.g)(),t=Object(l.h)(),a=Object(i.b)(),c=ce.a.parse(t.search).q,n=J({search:void 0===c?"":c}),r=Object(s.a)(n,2),u=r[0].search,d=r[1],j=Object(i.c)((function(e){return e.auth})),O=j.name,f=j.admin,h=Object(i.c)((function(e){return e.article.active})),v=Object(i.c)((function(e){return e.article.notes}));return Object(K.jsx)("div",{children:Object(K.jsx)("nav",{className:"navbar width-100 navbar-expand-lg navbar-dark bg-dark",children:Object(K.jsxs)("div",{className:"container-fluid",children:[Object(K.jsx)(o.b,{className:"navbar-brand",to:"/home",onClick:function(){return a(F())},children:Object(K.jsx)("img",{className:"Logo",src:ne,alt:"Logo udg virtual"})}),Object(K.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(K.jsx)("span",{className:"navbar-toggler-icon"})}),Object(K.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(K.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[f&&Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("li",{className:"nav-item",children:Object(K.jsx)(o.b,{className:"nav-link",to:"/article/new",children:"Agregar articulo"})}),Object(K.jsx)("li",{className:"nav-item",children:Object(K.jsx)(o.b,{className:"nav-link",href:"https://www.google.com/",children:"Gestionar peticiones"})})]}),Object(K.jsx)("li",{class:"nav-item",children:Object(K.jsx)("a",{class:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true",children:O})}),Object(K.jsx)("li",{className:"nav-item",children:Object(K.jsx)(o.b,{className:"nav-link active","aria-current":"page",to:"/auth/login",onClick:function(e){a(function(){var e=Object(m.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(p.c)(),e.next=3,Object(p.g)(a);case 3:t(H()),t({type:I});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Salir"})})]}),!h&&Object(K.jsxs)("form",{className:"d-flex",children:[Object(K.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Buscar articulo","aria-label":"Search",value:u,onChange:d,name:"search",autoComplete:"off"}),Object(K.jsx)("button",{className:"btn color text-white boton-azul",type:"submit",onClick:function(t){t.preventDefault(),e.push("?q=".concat(u));var c=v.filter((function(e){return e.titulo.toLowerCase().includes(u.toLowerCase())}));a(q(c))},children:"Buscar"})]})]})]})})})},ie=function(e){var t=e.history,a=Object(i.b)(),n=Object(i.c)((function(e){return e.article})).active,r=J({titulo:"",desc:"",img:""}),o=Object(s.a)(r,3),l=o[0],u=o[1],j=o[2],p=l.titulo,f=l.desc;Object(c.useEffect)((function(){n&&(console.log("ya hay activa"),a(B()),j())}),[]),Object(c.useEffect)((function(){(null===n||void 0===n?void 0:n.img)?a(P(Object(D.a)(Object(D.a)({},l),{},{img:n.img}))):a(P(Object(D.a)({},l)))}),[l,a]);return Object(K.jsxs)("div",{children:[Object(K.jsx)("input",{type:"text",placeholder:"Titulo del articulo",className:"form-control mb-3",autoComplete:"off",value:p,onChange:u,name:"titulo"}),Object(K.jsx)("textarea",{placeholder:"Descripci\xf3n",className:"form-control",value:f,onChange:u,style:{minHeight:200},name:"desc"}),Object(K.jsxs)("div",{className:"mt-1 row align-items-center",children:[Object(K.jsx)("input",{name:"file",id:"fileSelector",type:"file",style:{display:"none"},onChange:function(e){var t=e.target.files[0];t&&a(G(t))}}),Object(K.jsx)("div",{class:"col-auto",children:Object(K.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:Object(K.jsx)("i",{class:"fas fa-camera fa-lg"})})}),Object(K.jsx)("div",{class:"col-auto",children:Object(K.jsx)("label",{class:"col-form-label",style:{color:"#fff"},children:"Agregar imagen"})}),Object(K.jsx)("div",{class:"col-auto",style:{marginLeft:60},children:Object(K.jsx)("button",{className:"btn btn-success",onClick:function(){var e;a((e=n,Object(m.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.img||delete e.img,delete Object(D.a)({},e).id,t.next=6,Object(O.a)(Object(O.b)(h,"/articles"),e);case 6:a=t.sent,console.log(a),d.a.fire("Articulo agregado",e.title,"success"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),d.a.fire("Error","Error al guardar el articulo","error");case 14:case"end":return t.stop()}}),t,null,[[0,11]])}))))),setTimeout((function(){t.replace("/home"),a(F())}),1e3)},children:"Guardar"})})]})]})},se=function(){var e=Object(l.i)().id,t=Object(i.b)(),a=Object(i.c)((function(e){return e.article.active})),n=a.img,r=a.titulo,s=a.desc;return Object(c.useEffect)((function(){t(function(e){return function(){var t=Object(m.a)(b.a.mark((function t(a){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,$(e);case 3:c=t.sent,a(P(c)),console.log(c),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),d.a.fire("Error","Error al cargar el articulo","error");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(e))}),[]),Object(K.jsx)("div",{className:"col-lg-4 mb-4",children:Object(K.jsxs)("div",{className:"card-detail",children:[Object(K.jsx)("img",{src:n,alt:"".concat(r),className:"card-img-top"}),Object(K.jsxs)("div",{className:"card-body row",children:[Object(K.jsx)("h5",{className:"card-title",children:r}),Object(K.jsx)("p",{className:"card-text",children:s}),Object(K.jsx)(o.b,{className:"btn boton-azul blue-text w-100 align-self-end",to:"/article/modify",onClick:function(){return t(P({titulo:r,img:n,id:e,desc:s}))},children:"Modificar"})]})]})})},oe=function(e){var t=e.titulo,a=e.img,c=e.id,n=e.desc,r=Object(i.b)();return Object(K.jsx)("div",{className:"col-lg-4 mb-4 h-300",children:Object(K.jsxs)("div",{className:"card",children:[Object(K.jsx)("img",{src:a,alt:"".concat(t),className:"card-img-top"}),Object(K.jsxs)("div",{className:"card-body ",children:[Object(K.jsx)("h5",{className:"card-title mb-5",children:t}),Object(K.jsx)(o.b,{to:"./article/".concat(c),className:"btn boton-azul blue-text w-100",onClick:function(){return r(P({titulo:t,img:a,id:c,desc:n}))},children:"Ir al articulo"})]})]})})},le=function(){var e=Object(i.c)((function(e){return e.article})).notes;return Object(K.jsx)("div",{className:"",children:Object(K.jsx)("div",{className:"container mt-5",children:Object(K.jsx)("div",{className:"row",children:e.length>=1?e.map((function(e){return Object(K.jsx)(oe,Object(D.a)({},e),e.id)})):Object(K.jsx)("h2",{style:{color:"red"},children:"No hay articulos"})})})})},ue=function(e){var t=e.history,a=Object(i.b)(),n=Object(i.c)((function(e){return e.article})).active,r=Object(i.c)((function(e){return e.auth})).admin,o=J(n),l=Object(s.a)(o,2),u=l[0],j=l[1],p=u.titulo,f=u.desc,v=u.img;Object(c.useEffect)((function(){a(P(Object(D.a)({},u)))}),[u,a]);return Object(K.jsxs)("div",{children:[Object(K.jsx)("img",{src:v,alt:"".concat(p),className:"card-img-top mb-1"}),Object(K.jsx)("input",{type:"text",placeholder:"Titulo del articulo",className:"form-control mb-3",autoComplete:"off",value:p,onChange:j,name:"titulo"}),Object(K.jsx)("textarea",{placeholder:"Descripci\xf3n",className:"form-control",value:f,onChange:j,style:{minHeight:200},name:"desc"}),Object(K.jsxs)("div",{className:"mt-1 row align-items-center",children:[Object(K.jsx)("input",{name:"file",id:"fileSelector",type:"file",style:{display:"none"},onChange:function(e){var t=e.target.files[0];t&&a(G(t))}}),Object(K.jsx)("div",{class:"col-auto",children:Object(K.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:Object(K.jsx)("i",{class:"fas fa-camera fa-lg"})})}),Object(K.jsx)("div",{class:"col-auto",children:Object(K.jsx)("label",{class:"col-form-label",style:{color:"#fff"},children:"Agregar imagen"})}),Object(K.jsx)("div",{class:"col-auto",style:{marginLeft:50},children:Object(K.jsx)("button",{className:"btn btn-success",onClick:function(){var e;r?a((e=n,function(){var t=Object(m.a)(b.a.mark((function t(a){var c,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.img||delete e.img,delete(c=Object(D.a)({},e)).id,n=Object(O.d)(h,"/articles/".concat(e.id)),t.next=7,Object(O.j)(n,c);case 7:d.a.fire("Se ha modificado",e.title,"success"),a(P(e)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),d.a.fire("Error","Saving note failed","error");case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}())):d.a.fire("Error","Solo admins","error"),setTimeout((function(){t.replace("/home"),a(F())}),1e3)},children:"Modificar"})})]})]})},de=function(e){var t=e.history,a=Object(i.b)();return Object(c.useEffect)((function(){/^\/article\/\w+$/.test(t.location.pathname)||(console.log("no estas en detalle"),a(B()))}),[t.location,a]),Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(re,{}),Object(K.jsx)("div",{className:"container mt-2",children:Object(K.jsxs)(l.d,{children:[Object(K.jsx)(l.b,{exact:!0,path:"/home",component:le}),Object(K.jsx)(l.b,{exact:!0,path:"/article/new",component:ie}),Object(K.jsx)(l.b,{exact:!0,path:"/article/modify",component:ue}),Object(K.jsx)(l.b,{exact:!0,path:"/article/:id",component:se}),Object(K.jsx)(l.a,{to:"/home"})]})})]})},je=function(){var e=Object(i.b)(),t=Object(c.useState)(!0),a=Object(s.a)(t,2),n=a[0],r=a[1],u=Object(c.useState)(!1),d=Object(s.a)(u,2),j=d[0],b=d[1];return Object(c.useEffect)((function(){var t=Object(p.c)();Object(p.d)(t,(function(t){(null===t||void 0===t?void 0:t.uid)?(t.photoURL?e(M(t.uid,t.displayName,!0)):e(M(t.uid,t.displayName)),b(!0),e(F())):b(!1),r(!1)}))}),[e,r,b]),n?Object(K.jsx)("div",{className:"container-fluid d-flex flex-column justify-content-center align-items-center text-secondary",style:{height:"100vh"},children:Object(K.jsx)("div",{className:"spinner-border ",style:{width:"6rem",height:"6rem"},role:"status",children:Object(K.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(K.jsx)(o.a,{children:Object(K.jsx)("div",{children:Object(K.jsxs)(l.d,{children:[Object(K.jsx)(ee,{path:"/auth",component:Q,isAuthenticated:j}),Object(K.jsx)(te,{isAuthenticated:j,path:"/",component:de}),Object(K.jsx)(l.a,{to:"/auth/login"})]})})})},be=a(55),me=a(38),pe={loading:!1,msgError:null},Oe=a(24),fe={notes:[],active:null},he="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||me.c,ve=Object(me.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{uid:t.payload.uid,name:t.payload.displayName,admin:t.payload.admin};case g:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(D.a)(Object(D.a)({},e),{},{msgError:t.payload});case N:return Object(D.a)(Object(D.a)({},e),{},{msgError:null});case w:return Object(D.a)(Object(D.a)({},e),{},{loading:!0});case k:return Object(D.a)(Object(D.a)({},e),{},{loading:!1});default:return e}},article:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(D.a)(Object(D.a)({},e),{},{notes:[t.payload].concat(Object(Oe.a)(e.notes))});case C:return Object(D.a)(Object(D.a)({},e),{},{active:Object(D.a)({},t.payload)});case E:return Object(D.a)(Object(D.a)({},e),{},{active:null});case A:return Object(D.a)(Object(D.a)({},e),{},{notes:Object(Oe.a)(t.payload)});case S:return Object(D.a)(Object(D.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case L:return Object(D.a)(Object(D.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case I:return Object(D.a)(Object(D.a)({},e),{},{notes:[],active:null});default:return e}}}),xe=Object(me.d)(ve,he(Object(me.a)(be.a))),ge=function(){return Object(K.jsx)(i.a,{store:xe,children:Object(K.jsx)(je,{})})};a(83),a(84);r.a.render(Object(K.jsx)(ge,{}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.257fb610.chunk.js.map