(this["webpackJsonpreact-advise-app"]=this["webpackJsonpreact-advise-app"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),i=n(14),s=n.n(i),r=(n(21),n(22),n(5)),o=n.n(r),u=n(15),d=n(3),j=n(16),b=n.n(j),l=n(0),p=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!1),s=Object(d.a)(i,2),r=s[0],j=s[1],p=Object(c.useState)(!1),f=Object(d.a)(p,2),h=f[0],O=f[1],v=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!1),O(!1),e.next=4,b.a.get("".concat("https://api.adviceslip.com/","advice"));case 4:t=e.sent,console.log({response:t}),n=t.data.slip.advice,a(n),j(!0),setTimeout((function(){return O(!0)}),5e3);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){v()}),[]),Object(l.jsx)("div",{className:"container",children:r?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h2",{children:[" ",n," "]}),h?Object(l.jsx)("button",{onClick:function(){return v()},children:"Give me advice"}):Object(l.jsx)("button",{style:{background:"#888888"},disabled:h,children:"Please wait...."})]}):Object(l.jsx)("img",{src:"loading.gif",alt:"loading"})})};var f=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)(p,{})})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),h()}},[[43,1,2]]]);
//# sourceMappingURL=main.cebc6b44.chunk.js.map