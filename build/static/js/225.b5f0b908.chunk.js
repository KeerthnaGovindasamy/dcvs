"use strict";(self.webpackChunkdskill=self.webpackChunkdskill||[]).push([[225],{49225:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(70885),a=n(47313),s=n(83481),c=n(1413),o=n(42982),i=n(15861),u=n(87757),l=n.n(u),d=n(65755),x=n(46417);var f=function(){var e=(0,d.UO)().id,t=(0,a.useContext)(s.x),n=t.state,u=t.setState,f=(0,a.useState)([]),h=(0,r.Z)(f,2),m=h[0],p=h[1],v=(0,a.useCallback)((0,i.Z)(l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.contract.methods.requested_emp_of_company(e).call();case 2:t.sent.forEach(function(){var e=(0,i.Z)(l().mark((function e(t){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m.some(function(){var e=(0,i.Z)(l().mark((function e(n){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.id===parseInt(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())){e.next=5;break}return e.next=3,n.contract.methods.experiences(t).call();case 3:r=e.sent,p([].concat((0,o.Z)(m),[{id:parseInt(t),role:r.role}]));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t)}))),[e,m,n.contract]),b=(0,a.useCallback)(function(){var t=(0,i.Z)(l().mark((function t(r){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u((function(e){return(0,c.Z)((0,c.Z)({},e),{},{loading:!0})})),t.prev=1,t.next=4,n.contract.methods.approve_experience(r,e).send({from:n.account});case 4:t.next=10;break;case 6:t.prev=6,t.t0=t.catch(1),alert("error approving"),console.error(t.t0);case 10:u((function(e){return(0,c.Z)((0,c.Z)({},e),{},{loading:!1})}));case 11:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}(),[n.contract,n.account,e,u]);return(0,a.useEffect)((function(){v()}),[v]),(0,x.jsx)("div",{children:(0,x.jsx)("div",{children:m.length>0?m.map((function(e){return(0,x.jsxs)("div",{className:"p-2 m-2 flex flex-row justify-around items-center bg-gray-200 border-solid rounded-lg ",id:e.id,children:[(0,x.jsx)("div",{children:(0,x.jsxs)("p",{children:[(0,x.jsx)("h1",{className:"font-medium text-lg text-blue-700 inline",children:"Person"})," ","has requested to join the team as ",e.role," in your Oragnization."]})}),(0,x.jsxs)("div",{children:[(0,x.jsx)("button",{className:"bg-gray-800 text-white active:bg-gray-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:function(){b(e.id)},children:"Accept"}),(0,x.jsx)("button",{className:"bg-red-800 text-white active:bg-red-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",children:"Deny"})]})]})})):(0,x.jsx)("div",{children:"no requests"})})})};var h=function(){var e=(0,a.useContext)(s.x).state,t=(0,d.UO)().id,n=(0,a.useState)([{id:123,name:"Hardik Agarwal ",role:"SDE-1"},{id:213,name:"Suryashankar Das",role:"SDE-1"}]),c=(0,r.Z)(n,2),u=c[0],f=c[1],h=(0,a.useState)(""),m=(0,r.Z)(h,2),p=m[0],v=m[1],b=(0,a.useCallback)((0,i.Z)(l().mark((function n(){var r;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.contract.methods.curr_emp_of_company(t).call();case 2:(r=n.sent).forEach(function(){var t=(0,i.Z)(l().mark((function t(n){var a;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.some(function(){var e=(0,i.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.id===parseInt(n));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())){t.next=5;break}return t.next=3,e.contract.methods.experiences(n).call();case 3:a=t.sent,f([].concat((0,o.Z)(u),[{id:parseInt(n),name:"Employee name",role:a.role}]));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return n.stop()}}),n)}))),[t,u,e.contract]);return(0,a.useEffect)((function(){e.connected||v("authenticated"),b()}),[b]),(0,x.jsx)("div",{children:(0,x.jsx)("div",{children:u.map((function(e,t){return(0,x.jsxs)("div",{className:"p-2 m-2 flex flex-row justify-around items-center bg-gray-200 border-solid rounded-lg ",children:[(0,x.jsx)("div",{children:(0,x.jsxs)("p",{children:[(0,x.jsx)("h1",{className:"font-medium text-lg text-blue-700 inline",children:e.name})," ","is part of of your Oraganization as ",e.role," from Date to Date."]})}),(0,x.jsx)("div",{className:p,children:(0,x.jsx)("button",{className:"bg-red-800 text-white active:bg-red-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",children:"Remove"})})]})}))})})},m=(n(64960),(0,a.lazy)((function(){return n.e(417).then(n.bind(n,19417))})));var p=function(){var e=[{id:1,name:"Requests"},{id:2,name:"Team"}],t=(0,a.useContext)(s.x),n=t.state,c=t.setState,o=(0,a.useState)(""),i=(0,r.Z)(o,2),u=i[0],l=i[1],d=(0,a.useState)(2),p=(0,r.Z)(d,2),v=p[0],b=p[1];return(0,a.useEffect)((function(){n.connected||l("authenticated")}),[n.contract,c]),(0,x.jsxs)("div",{className:"h-screen",children:[(0,x.jsx)("header",{className:"bg-white shadow",children:(0,x.jsx)("div",{className:"max-w-9xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:(0,x.jsx)("h1",{className:"text-3xl font-bold text-gray-900",children:e.find((function(e){return e.id===v})).name})})}),(0,x.jsxs)("div",{className:"flex mx-auto py-6 sm:px-6 lg:px-8 h-4/5",children:[(0,x.jsx)("sidebar",{className:" w-1/4 bg-gray-800 mx-auto sm:px-6 lg:px-8  float-left text-gray-300",children:n.connected?(0,x.jsx)(x.Fragment,{children:e.map((function(e,t){return(0,x.jsx)("div",{className:"m-2 p-2 text-xl hover:bg-gray-300 hover:text-gray-800 w-full",onClick:function(t){b(e.id)},children:e.name},t)}))}):(0,x.jsx)("div",{className:"m-2 p-2 text-xl hover:bg-gray-300 hover:text-gray-800 w-full",children:"Team"})}),(0,x.jsxs)("main",{className:"w-3/4 lg:px-8 sm:px-6 mx-auto inline-block float-right h-full ",children:[(0,x.jsx)("div",{className:"border-4 border-solid border-gray-200 rounded-lg h-2/6 mx-5 mt-0 mb-1",children:(0,x.jsx)(m,{})}),(0,x.jsx)("div",{className:"border-4 border-solid border-gray-200 rounded-lg h-4/6 mx-5 mt-2",children:function(){switch(v){case 1:return(0,x.jsx)("div",{className:u,children:(0,x.jsx)(f,{})});case 2:return(0,x.jsx)(h,{});default:return(0,x.jsx)("h1",{children:"No option selcted"})}}()})]})]})]})}}}]);