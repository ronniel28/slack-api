(this["webpackJsonpslack-api"]=this["webpackJsonpslack-api"]||[]).push([[0],{218:function(e,t,s){"use strict";s.r(t);var a=s(1),l=s(82),c=s.n(l),n=(s(92),s(8)),r=s(13),o=s(5),i=s.n(o),d=s(12),b=s(36),m=s.n(b),j=s(14),x=s(38),u=s(15),h=s(23),p=s(0),g=u.a().shape({email:u.c().email().required(),password:u.c().min(4).max(15).required()});function f(e){var t,s,a=Object(j.d)({resolver:Object(x.a)(g)}),l=a.register,c=a.handleSubmit,n=a.formState.errors,o=function(){var t=Object(d.a)(i.a.mark((function t(s){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:m.a.post("http://206.189.91.54/api/v1/auth/sign_in",s).then((function(t){console.log(t),"OK"===t.request.statusText&&e.toggleIsLoggedIn()})).catch((function(e){console.log(e)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"h-screen font-mono bg-gray-400",children:Object(p.jsx)("div",{className:"h-screen pt-6 container mx-auto",children:Object(p.jsx)("div",{className:"flex justify-center items-center px-6 my-12",children:Object(p.jsxs)("div",{className:"w-full xl:w-3/4 lg:w-11/12 flex",children:[Object(p.jsx)("div",{className:"w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg",style:{backgroundImage:"url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')"}}),Object(p.jsxs)("div",{className:"w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none",children:[Object(p.jsx)("h3",{className:"pt-4 text-2xl text-center",children:"Log In"}),Object(p.jsxs)("form",{onSubmit:c(o),className:"px-8 pt-6 pb-8 mb-4 bg-white rounded",children:[Object(p.jsx)("div",{className:"mb-4 md:flex md:justify-between"}),Object(p.jsxs)("div",{className:"mb-4",children:[Object(p.jsx)("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"email",children:"Email"}),Object(p.jsx)("input",Object(r.a)(Object(r.a)({},l("email")),{},{name:"email",className:"w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",id:"email",type:"email",placeholder:"Email"})),Object(p.jsx)("p",{children:null===(t=n.email)||void 0===t?void 0:t.message})]}),Object(p.jsx)("div",{className:"mb-4 md:flex md:justify-between"}),Object(p.jsxs)("div",{className:"mb-4",children:[Object(p.jsx)("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"password",children:"Password"}),Object(p.jsx)("input",Object(r.a)(Object(r.a)({},l("password")),{},{name:"password",className:"w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border rounded shadow appearance-none focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"******************"})),Object(p.jsx)("p",{children:null===(s=n.password)||void 0===s?void 0:s.message})]}),Object(p.jsx)("div",{className:"mb-6 text-center",children:Object(p.jsx)("button",{className:"w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline",children:"Log In"})}),Object(p.jsx)("hr",{className:"mb-6 border-t"}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)("a",{className:"inline-block text-sm text-blue-500 align-baseline hover:text-blue-800",href:"#",children:"Forgot Password?"})}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(h.b,{to:"/register",className:"cursor-pointer inline-block text-sm text-blue-500 align-baseline hover:text-blue-800",children:"Don't have an account? Register"})})]})]})]})})})})}var w=u.a().shape({email:u.c().email().required(),password:u.c().min(4).max(15).required(),password_confirmation:u.c().oneOf([u.b("password"),null])});function O(e){var t,s,a=Object(j.d)({resolver:Object(x.a)(w)}),l=a.register,c=a.handleSubmit,n=a.formState.errors;return Object(p.jsx)("div",{className:"h-screen font-mono bg-gray-400",children:Object(p.jsx)("div",{className:"h-screen pt-6 container mx-auto",children:Object(p.jsx)("div",{className:"flex justify-center items-center px-6 my-12",children:Object(p.jsxs)("div",{className:"w-full xl:w-3/4 lg:w-11/12 flex",children:[Object(p.jsx)("div",{className:"w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg",style:{backgroundImage:"url('https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')"}}),Object(p.jsxs)("div",{className:"w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none",children:[Object(p.jsx)("h3",{className:"pt-4 text-2xl text-center",children:"Create an Account!"}),Object(p.jsxs)("form",{onSubmit:c((function(e){m.a.post("http://206.189.91.54/api/v1/auth/",e).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))})),className:"px-8 pt-6 pb-8 mb-4 bg-white rounded",children:[Object(p.jsx)("div",{className:"mb-4 md:flex md:justify-between"}),Object(p.jsxs)("div",{className:"mb-4",children:[Object(p.jsx)("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"email",children:"Email"}),Object(p.jsx)("input",Object(r.a)(Object(r.a)({},l("email")),{},{name:"email",className:"w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",id:"email",type:"email",placeholder:"Email"})),Object(p.jsx)("p",{children:null===(t=n.email)||void 0===t?void 0:t.message})]}),Object(p.jsxs)("div",{className:"mb-4 md:flex md:justify-between",children:[Object(p.jsxs)("div",{className:"mb-4 md:mr-2 md:mb-0",children:[Object(p.jsx)("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"password",children:"Password"}),Object(p.jsx)("input",Object(r.a)(Object(r.a)({},l("password")),{},{name:"password",className:"w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border rounded shadow appearance-none focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"******************"})),Object(p.jsx)("p",{children:null===(s=n.password)||void 0===s?void 0:s.message})]}),Object(p.jsxs)("div",{className:"md:ml-2",children:[Object(p.jsx)("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"c_password",children:"Confirm Password"}),Object(p.jsx)("input",Object(r.a)(Object(r.a)({},l("password_confirmation")),{},{name:"password_confirmation",className:"w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",id:"c_password",type:"password",placeholder:"******************"})),Object(p.jsx)("p",{children:n.password_confirmation&&"Passwords didn't matched"})]})]}),Object(p.jsx)("div",{className:"mb-6 text-center",children:Object(p.jsx)("button",{className:"w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline",children:"Register Account"})}),Object(p.jsx)("hr",{className:"mb-6 border-t"}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)("a",{className:"inline-block text-sm text-blue-500 align-baseline hover:text-blue-800",href:"#",children:"Forgot Password?"})}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(h.b,{to:"/",className:"cursor-pointer inline-block text-sm text-blue-500 align-baseline hover:text-blue-800",children:"Already have an account? Login!"})})]})]})]})})})})}var v=s(6);function N(e){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:" h-screen flex",children:[Object(p.jsxs)("div",{className:"w-1/2 p-10 bg-gradient-to-r from-yellow-100",children:[Object(p.jsx)("h1",{className:"mb-16 text-2xl",children:"SLACK API"}),Object(p.jsxs)("p",{className:"mb-5 text-5xl uppercase tracking-widest",children:[" ",Object(p.jsx)("span",{className:"text-yellow-400",children:"we're"})," ",Object(p.jsx)("br",{})," chatting",Object(p.jsx)("br",{})," soon"]}),Object(p.jsx)("p",{className:"mb-7 text-sm leading-snug text-yellow-400",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}),Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{type:"email",className:"h-11 rounded-full bg-transparent border-yellow-300 border w-2/4"}),Object(p.jsx)("button",{className:"bg-gradient-to-r from-yellow-300 to-yellow-500 h-11 w-20 rounded-full text-white -m-12",children:" > "})]}),Object(p.jsx)("div",{className:"pt-52",children:Object(p.jsx)("button",{onClick:function(){return e.toggleIsLoggedIn()},className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",children:"Log out"})})]}),Object(p.jsx)("div",{className:"w-1/2 bg-cover bg-center",style:{backgroundImage:"url('https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80')"}})]})})}var y=function(){var e=Object(a.useState)(!1),t=Object(n.a)(e,2),s=t[0],l=t[1];function c(){l(!s)}return Object(p.jsx)(h.a,{children:Object(p.jsxs)(v.c,{children:[Object(p.jsx)(v.a,{exact:!0,path:"/",children:s?Object(p.jsx)(N,{toggleIsLoggedIn:c}):Object(p.jsx)(f,{toggleIsLoggedIn:c})}),Object(p.jsx)(v.a,{path:"/register",children:Object(p.jsx)(O,{})})]})})};c.a.render(Object(p.jsx)(y,{}),document.getElementById("root"))},92:function(e,t,s){}},[[218,1,2]]]);
//# sourceMappingURL=main.5d2da238.chunk.js.map