"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[746],{7504:function(t,e,r){r.d(e,{O:function(){return i}});var n=r(3504),u=r(184),c=function(t){var e=t.title,r=t.poster,c=t.id;return(0,u.jsxs)(n.rU,{to:"movie/".concat(c),children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/original/"+r,alt:e}),(0,u.jsx)("h2",{children:e})]})},i=function(t){var e=t.movies;return(0,u.jsx)("ul",{children:e&&e.map((function(t){var e=t.original_title,r=t.poster_path,n=t.id;return(0,u.jsx)("li",{children:(0,u.jsx)(c,{title:e,poster:r,id:n})},n)}))})}},8746:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var n=r(8152),u=r(2791),c=r(4390),i=r(7504),a=r(2134),s=r(184),o=function(t){var e=t.onSubmit;return(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(t.target.request.value)},children:[(0,s.jsx)("input",{name:"request",type:"text"}),(0,s.jsx)("button",{type:"submit",children:(0,s.jsx)(a.RB5,{})})]})},f=function(){var t=(0,u.useState)(null),e=(0,n.Z)(t,2),r=e[0],a=e[1],f=(0,u.useState)(null),l=(0,n.Z)(f,2),p=l[0],h=l[1],v=(0,u.useState)(!0),d=(0,n.Z)(v,2),m=d[0],x=d[1];return(0,u.useEffect)((function(){m?x(!1):(0,c.k1)(p).then((function(t){return a(t)})).catch(console.log)}),[p,m]),(0,s.jsxs)("main",{children:[(0,s.jsx)(o,{onSubmit:h}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h1",{children:"Movies for request "}),(0,s.jsx)(i.O,{movies:r})]})]})}},4390:function(t,e,r){r.d(e,{_L:function(){return f},k1:function(){return l}});var n=r(5861),u=r(7757),c=r.n(u),i=r(4569),a=r.n(i),s="0d2fc6d2597c3f501e7437cf40d08b03",o="https://api.themoviedb.org/3",f=function(){var t=(0,n.Z)(c().mark((function t(){var e,r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new URLSearchParams({api_key:s}),r="".concat(o,"/trending/movie/day?").concat(e),t.prev=2,t.next=5,a().get(r);case 5:return n=t.sent,t.abrupt("return",n.results);case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n,u;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URLSearchParams({api_key:s,query:e}),n="".concat(o,"/search/movie?").concat(r),t.prev=2,t.next=5,a().get(n);case 5:return u=t.sent,t.abrupt("return",u.results);case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=746.2248b5d7.chunk.js.map