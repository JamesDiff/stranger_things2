(this.webpackJsonpstranger_things2=this.webpackJsonpstranger_things2||[]).push([[0],{35:function(e,t,n){"use strict";n.r(t);var s=n(7),r=n(2),c=n.n(r),o=n(6),a=n(3),i=n(1),u=n(15),l=n.n(u),j=n(11),p=n(4);function h(e){return b.apply(this,arguments)}function b(){return(b=Object(o.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/users/me",{headers:t}).then((function(e){return e.json()})).then((function(e){return e})).catch(console.error);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return O.apply(this,arguments)}function O(){return(O=Object(o.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/posts");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.data.posts);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function f(e,t){console.log("this is the ",e);var n=t.find((function(t){return t._id===e}));return console.log("This is ",n),n||{}}function x(){return(x=Object(o.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("post id to delete ",t),e.next=3,fetch("https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/posts/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch(console.error);case 3:e.sent;case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){var t={"Content-Type":"application/json"};return e&&(t.Authorization="Bearer "+e),t}var m=n(0);function v(e,t){return y.apply(this,arguments)}function y(){return(y=Object(o.a)(c.a.mark((function e(t,n){var s,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{username:t,password:n}})});case 2:return s=e.sent,e.next=5,s.json();case 5:return r=e.sent,console.log(r.data.token),o=r.data.token,localStorage.setItem("token",o),e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t,n,s){n===s?fetch("https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/users/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{username:t,password:n}})}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch(console.error):alert("Passwords don't match")}var k=function(e){var t=e.setToken,n=e.match,s=e.setHeader,r=e.setUser,u=Object(i.useState)("username"),l=Object(a.a)(u,2),b=l[0],d=l[1],O=Object(i.useState)(""),f=Object(a.a)(O,2),x=f[0],y=f[1],k=Object(i.useState)(""),P=Object(a.a)(k,2),C=P[0],w=P[1],T=Object(p.e)();return Object(m.jsxs)("form",{onSubmit:function(){var e=Object(o.a)(c.a.mark((function e(o){var a,i,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,o.preventDefault(),a=null,"/register"===n.url&&(a=S(0,x,C)),"/login"!==n.url){e.next=8;break}return e.next=7,v(b,x);case 7:a=e.sent;case 8:if(!a){e.next=18;break}return i=g(a),e.next=12,h(i);case 12:u=e.sent,console.log(u),r(u),s(i),t(a),T.push("/userObject");case 18:console.log(b,x,C),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),console.error(e.t0);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(t){return e.apply(this,arguments)}}(),children:[Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"mp-2",children:[Object(m.jsx)("label",{className:"form-label",children:"Username"}),Object(m.jsx)("input",{type:"text",value:b,onChange:function(e){var t=e.target.value;return d(t)},className:"form-control",id:"exampleFormControlInput1",placeholder:"your username"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"mp-2",children:[Object(m.jsx)("label",{className:"form-lable",children:"Password"}),Object(m.jsx)("input",{type:"password",value:x,onChange:function(e){var t=e.target.value;return y(t)},className:"form-control",id:"exampleFormControlInput1",placeholder:""})]}),Object(m.jsx)("br",{}),"/register"===n.url?Object(m.jsxs)("div",{className:"mp-2",children:[Object(m.jsx)("label",{className:"form-label",children:"Confirm Password"}),Object(m.jsx)("input",{type:"password",onChange:function(e){var t=e.target.value;return w(t)},value:C,className:"form-control",id:"exampleFormControlInput1",placeholder:""})]}):null,Object(m.jsxs)("div",{className:"col-auto",children:[Object(m.jsx)("button",{type:"submit",className:"btn btn-primary mb-3",children:"Submit"}),"/register"===n.url?Object(m.jsx)(j.b,{to:"/login",children:" Already have an account? "}):Object(m.jsx)(j.b,{to:"/register",children:" Don't have an account? "})]})]})},P=n(23);function C(e){var t=e.headers,n=e.setPosts,s=e.posts,r=Object(i.useState)(""),u=Object(a.a)(r,2),l=u[0],j=u[1],p=Object(i.useState)(""),h=Object(a.a)(p,2),b=h[0],d=h[1],O=Object(i.useState)(""),f=Object(a.a)(O,2),x=f[0],g=f[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{children:"Create a new listing"}),Object(m.jsxs)("form",{onSubmit:function(){var e=Object(o.a)(c.a.mark((function e(r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault(),console.log(t),fetch("https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/posts",{method:"POST",headers:t,body:JSON.stringify({post:{title:l,description:b,price:x,willDeliver:!0}})}).then((function(e){return e.json()})).then((function(e){console.log("these ",e),n([].concat(Object(P.a)(s),[e.data.post]))})).catch(console.error);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(m.jsx)("input",{type:"text",placeholder:"Title",onChange:function(e){console.log(l),j(e.target.value)},value:l}),Object(m.jsx)("input",{type:"text",placeholder:"Description",onChange:function(e){console.log(b),d(e.target.value)},value:b}),Object(m.jsx)("input",{type:"text",placeholder:"Price",onChange:function(e){console.log(x),g(e.target.value)},value:x}),Object(m.jsx)("button",{type:"submit",children:"Submit"})]})]})}var w=function(e){var t=e.setFilteredResults,n=e.posts,s=Object(i.useState)(""),r=Object(a.a)(s,2),c=r[0],o=r[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{children:"Search"}),Object(m.jsx)("input",{value:c,onChange:function(e){o(e.target.value);var s=function(e,t){return t=t.toLowerCase(),e.filter((function(e,n){return e.title.toLowerCase().includes(t)}))}(n,e.target.value);t(s)},placeholder:"search"})]})},T=function(e){var t=e.history,n=e.setSelectedPost,s=e.storedToken,r=e.headers,c=e.setFilteredResults,o=e.filteredResults,a=e.posts,i=e.setPosts;return console.log("now these ",a),Object(m.jsxs)("div",{id:"posts",children:[Object(m.jsx)(C,{headers:r,setPosts:i,posts:a}),Object(m.jsx)(w,{posts:a,filteredResults:o,setFilteredResults:c}),Object(m.jsx)("h2",{children:"Listings"}),o?o.map((function(e,r){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.title}),Object(m.jsx)("h4",{children:e.description}),Object(m.jsx)("h4",{children:e.price}),Object(m.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:function(){return function(e,t){return x.apply(this,arguments)}(e._id,s)},children:" Delete"}),Object(m.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:function(){var s=f(e._id,a);n(s),t.push("/posts/"+e._id)},children:" Post Details"})]},r)})):null]})},N=function(e){var t=e.selectedPost,n=e.setSelectedPost,s=e.match,r=e.posts;console.log("this is match: ",s),Object(i.useEffect)((function(){if(r){var e=f(s.params.postId,r);n(e)}}),[r]);var c=Object(p.e)();return Object(m.jsxs)("div",{children:[Object(m.jsxs)("h1",{children:[" ",t.title," "]}),Object(m.jsxs)("p",{children:[" ",t.description," "]}),Object(m.jsxs)("h3",{children:[" ",t.price," "]}),Object(m.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:function(){console.log("hey it's the message button"),c.push("/posts/sendmessage/"+t._id)},children:"Message"}),Object(m.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:function(){console.log("hey it's the edit button"),c.push("/posts/update/"+t._id)},children:" Edit"})]})},I=function(e){var t=e.posts,n=e.setPosts,s=e.postId,r=e.setPostId,u=e.selectedPost,l=e.headers,j=Object(i.useState)(""),p=Object(a.a)(j,2),h=p[0],b=p[1],d=Object(i.useState)(""),O=Object(a.a)(d,2),f=O[0],x=O[1],g=Object(i.useState)(""),v=Object(a.a)(g,2),y=v[0],S=v[1];console.log("this is the selectedPost._id ",u._id),console.log("this is the title after it's out of state",h),console.log("this is the header ",l);var k=function(){var e=Object(o.a)(c.a.mark((function e(o){var a,i,j;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.preventDefault(),console.log("postID: ",s),e.next=4,fetch("http://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/posts/".concat(u._id),{method:"PATCH",headers:l,body:JSON.stringify({post:{title:h,description:f,price:y,willDeliver:!0}})});case 4:return a=e.sent,e.next=7,a.json();case 7:i=e.sent,console.log("data: ",i),i&&i.title&&(j=t.map((function(e){return post_id===s?i:e})),n(j),b(""),setBody(""),r(null));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h3",{children:"Update Post"}),Object(m.jsxs)("form",{onSubmit:k,children:[Object(m.jsx)("input",{type:"text",placeholder:"title",value:h,onChange:function(e){return b(e.target.value)}}),Object(m.jsx)("input",{type:"text",placeholder:"description",value:f,onChange:function(e){return x(e.target.value)}}),Object(m.jsx)("input",{type:"text",placeholder:"price",value:y,onChange:function(e){return S(e.target.value)}}),Object(m.jsx)("button",{type:"submit",className:"btn btn-outline-primary",children:"Submit"})]})]})},E=function(e){e.post,e.posts,e.setPosts,e.postId,e.setPostId;var t=e.selectedPost,n=e.headers,s=Object(i.useState)(""),r=Object(a.a)(s,2),u=r[0],l=r[1];console.log("these are the headers ",n);var j=function(){var e=Object(o.a)(c.a.mark((function e(s){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.next=3,fetch("https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/posts/".concat(t._id,"/messages"),{method:"POST",headers:n,body:JSON.stringify({message:{content:u}})}).then((function(e){return e.json()})).then((function(e){return e}));case 3:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h3",{children:"Send Message"}),Object(m.jsxs)("form",{onSubmit:j,children:[Object(m.jsx)("input",{type:"text",placeholder:"message",value:u,onChange:function(e){return l(e.target.value)}}),Object(m.jsx)("button",{type:"submit",className:"btn btn-outline-primary",children:"Submit"})]})]})},R=function(e){var t=e.user;e.isLoggedIn,e.headers,e.storesToken;return console.log("This is the user: ",t),Object(m.jsxs)("div",{id:"userobject",children:[Object(m.jsxs)("h2",{children:["Hi, ",t?t.username:"guest"," "]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(j.b,{to:"/posts",children:" Listings "}),Object(m.jsx)("h2",{children:"Your Messages"}),t&&t.messages?t.messages.map((function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("h3",{children:[e.post.title," "]}),"        ",Object(m.jsxs)("p",{children:["From: ",e.fromUser.username]}),Object(m.jsx)("p",{children:e.content})]})})):null]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Your Listings"}),t?t.posts.map((function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("h3",{children:[e.title," "]}),Object(m.jsx)("p",{children:e.description}),Object(m.jsx)("h5",{children:e.price}),Object(m.jsx)(m.Fragment,{})]})})):null]})]})},U=function(){var e=Object(i.useState)(null),t=Object(a.a)(e,2),n=t[0],r=t[1],u=Object(i.useState)(null),l=Object(a.a)(u,2),b=l[0],O=l[1],f=Object(i.useState)([]),x=Object(a.a)(f,2),v=x[0],y=x[1],S=Object(i.useState)({}),P=Object(a.a)(S,2),C=P[0],w=P[1],U=Object(i.useState)(null),F=Object(a.a)(U,2),_=(F[0],F[1],Object(i.useState)(null)),B=Object(a.a)(_,2),D=B[0],L=B[1];Object(i.useEffect)(Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:t=e.sent,console.log(t),y(t);case 5:case"end":return e.stop()}}),e)}))),[]);var M=Object(i.useState)([]),W=Object(a.a)(M,2),J=W[0],H=W[1];return Object(i.useEffect)((function(){H(v)}),[v]),Object(i.useEffect)(Object(o.a)(c.a.mark((function e(){var t,n,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("token"),console.log(t),!t){e.next=11;break}return r(t),n=g(t),O(n),e.next=8,h(n);case 8:s=e.sent,L(s),console.log(s);case 11:case"end":return e.stop()}}),e)}))),[]),Object(m.jsxs)(j.a,{children:[n?null:Object(m.jsx)(j.b,{to:"/login",children:" Login "}),n?null:Object(m.jsx)(j.b,{to:"/register",children:"Register"}),n?Object(m.jsx)(j.b,{to:"/login",onClick:function(){localStorage.removeItem("token"),r(null),O(null),L(null)},children:"Logout"}):null,Object(m.jsx)(p.a,{path:"/login",render:function(e){return Object(m.jsx)(k,Object(s.a)(Object(s.a)({},e),{},{setHeader:O,setToken:r,setUser:L}))}}),Object(m.jsx)(p.a,{path:"/register",render:function(e){return Object(m.jsx)(k,Object(s.a)(Object(s.a)({},e),{},{setHeader:O,setToken:r,setUser:L}))}}),Object(m.jsx)(p.a,{path:"/posts",exact:!0,render:function(e){return Object(m.jsx)(T,Object(s.a)(Object(s.a)({},e),{},{setSelectedPost:w,setPosts:y,posts:v,filteredResults:J,setFilteredResults:H,isLoggedIn:!!n,storedToken:n,headers:b}))}}),Object(m.jsx)(p.a,{path:"/posts/:postId",render:function(e){return Object(m.jsx)(N,Object(s.a)(Object(s.a)({},e),{},{selectedPost:C,setSelectedPost:w,posts:v}))}}),Object(m.jsx)(p.a,{path:"/posts/update/:postId",render:function(e){return Object(m.jsx)(I,Object(s.a)(Object(s.a)({},e),{},{selectedPost:C,storedToken:n,headers:b}))}}),Object(m.jsx)(p.a,{path:"/posts/sendmessage/:postId",render:function(e){return Object(m.jsx)(E,Object(s.a)(Object(s.a)({},e),{},{selectedPost:C,storedToken:n,headers:b}))}}),Object(m.jsx)(p.a,{path:"/userobject",render:function(e){return Object(m.jsx)(R,Object(s.a)(Object(s.a)({},e),{},{user:D,isLoggedIn:!!n,storedToken:n,headers:b}))}})]})};l.a.render(Object(m.jsx)(U,{}),document.getElementById("app"))}},[[35,1,2]]]);
//# sourceMappingURL=main.f4e6dcd3.chunk.js.map