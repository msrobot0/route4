(this.webpackJsonproute4=this.webpackJsonproute4||[]).push([[0],{246:function(e,t,n){},261:function(e,t){},263:function(e,t){},265:function(e,t){},269:function(e,t){},296:function(e,t){},298:function(e,t){},307:function(e,t){},309:function(e,t){},319:function(e,t){},321:function(e,t){},439:function(e,t){},441:function(e,t){},448:function(e,t){},449:function(e,t){},467:function(e,t){},542:function(e,t,n){},544:function(e,t,n){"use strict";n.r(t);var c=n(29),a=n.n(c),r=n(233),s=n.n(r),u=(n(246),n(21)),o=n.n(u),i=n(81),d=n(70),l=n(133),b=n.n(l),j=n(13);function f(e){var t=e.account;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"tokens",children:t.tokens.map((function(e){return e.has?Object(j.jsx)("div",{className:"token",children:Object(j.jsx)("div",{className:"balance",children:Object(j.jsxs)("div",{className:"balance-value",children:["Congrats! You have ",e.balance," USDC. Since you have more than 1 you can",Object(j.jsx)("a",{href:"https://www.systempoetics.com/USDC",children:"Proceed."})]})})},e.token):Object(j.jsx)("div",{className:"token",children:Object(j.jsx)("div",{className:"balance",children:Object(j.jsx)("div",{className:"balance-value",children:"In order to proceed you need 1 or more USDC tokens."})})},e.token)}))}),Object(j.jsx)("div",{children:"\xa0"}),Object(j.jsx)("div",{className:"account",children:Object(j.jsx)("div",{className:"address",children:Object(j.jsxs)("small",{children:["FYI you are using wallet: ",t.address]})})})]})}n(542);var h=n.p+"static/media/logo.d5d645c5.svg",p=n(553),v=n(22),O=n(237),m=n(543);p.a({dsn:"https://9fbe65b9ddd940488e6a0b17a5a6ffcf@o1093430.ingest.sentry.io/6112695",integrations:[new O.a.BrowserTracing]});var x=[{address:"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",token:"USDC"}],w=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(d.a)(r,2),u=s[0],l=s[1],p=Object(c.useState)(!0),O=Object(d.a)(p,2),w=O[0],g=(O[1],Object(c.useState)("")),k=Object(d.a)(g,2),N=k[0],y=(k[1],Object(c.useState)([])),C=Object(d.a)(y,2),S=C[0],D=C[1],F=new b.a,U=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof window.ethereum){e.next=11;break}return F=new b.a(window.ethereum),e.prev=2,e.next=5,window.ethereum.enable();case 5:return e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e.catch(2),e.abrupt("return",!1);case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}();window.ethereum.on("accountsChanged",(function(){A()})),Object(c.useEffect)((function(){0==S.length&&A()}));var A=function(){var e=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,!U();case 2:if(!e.sent){e.next=3;break}case 3:return l(!0),e.next=6,F.eth.getAccounts();case 6:return t=e.sent,D(t),e.next=10,Promise.all(t.map(function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.eth.getBalance(t);case 2:return e.sent,e.next=5,Promise.all(x.map(function(){var e=Object(i.a)(o.a.mark((function e(n){var c,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=new F.eth.Contract(m,n.address),e.next=3,c.methods.balanceOf(t).call();case 3:return a=e.sent,r=F.utils.fromWei(a,"ether"),v.b(new Date+"App:route4,User:"+t+",balance:"+r),e.abrupt("return",{token:n.token,has:a>=1,balance:r});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:return n=e.sent,e.abrupt("return",{address:t,tokens:n});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 10:n=e.sent,a(n);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("img",{src:h,className:"App-logo",alt:"logo"}),!w&&Object(j.jsx)("div",{children:N}),!u&&Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:A,children:"Connect"})})," ",Object(j.jsx)("div",{children:" Do you have USDC?"}),n&&n.length>0&&Object(j.jsx)("div",{className:"accounts",children:n.map((function(e){return Object(j.jsx)("div",{className:"account",children:Object(j.jsx)(f,{account:e})},e.address)}))})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,554)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),g()}},[[544,1,2]]]);
//# sourceMappingURL=main.c2032e63.chunk.js.map