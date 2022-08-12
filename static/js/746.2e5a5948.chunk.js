"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[746,712],{7504:function(t,r,e){e.d(r,{O:function(){return i}});var n=e(3504),c=e(6871),u=e(9544),a=e(184),s=function(t){var r=t.title,e=t.poster,s=t.id,i=(0,c.TH)(),o=(0,u.useHome)();return(0,a.jsxs)(n.rU,{to:"".concat(o||"").concat(s),state:{from:i},children:[(0,a.jsx)("img",{src:"https://image.tmdb.org/t/p/original/"+e,alt:r}),(0,a.jsx)("h2",{children:r})]})},i=function(t){var r=t.movies;return(0,a.jsx)("ul",{children:r&&r.map((function(t){var r=t.original_title,e=t.poster_path,n=t.id;return(0,a.jsx)("li",{children:(0,a.jsx)(s,{title:r,poster:e,id:n})},n)}))})}},9544:function(t,r,e){e.r(r),e.d(r,{useHome:function(){return o}});var n=e(8152),c=e(4390),u=e(2791),a=e(7504),s=e(184),i=(0,u.createContext)(),o=function(){return(0,u.useContext)(i)};r.default=function(){var t=(0,u.useState)(null),r=(0,n.Z)(t,2),e=r[0],o=r[1];return(0,u.useEffect)((function(){(0,c._L)().then((function(t){o(t)})).catch(console.log)}),[]),(0,s.jsxs)("section",{children:[(0,s.jsx)("h1",{children:"Trending today"}),(0,s.jsx)(i.Provider,{value:"movies/",children:(0,s.jsx)(a.O,{movies:e})})]})}},8746:function(t,r,e){e.r(r),e.d(r,{default:function(){return p}});var n=e(8152),c=e(2791),u=e(4390),a=e(7504),s=e(2134),i=e(184),o=function(t){var r=t.onSubmit;return(0,i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),r(t.target.request.value)},children:[(0,i.jsx)("input",{name:"request",type:"text"}),(0,i.jsx)("button",{type:"submit",children:(0,i.jsx)(s.RB5,{})})]})},p=function(){var t=(0,c.useState)([]),r=(0,n.Z)(t,2),e=r[0],s=r[1],p=(0,c.useState)(),f=(0,n.Z)(p,2),v=f[0],l=f[1];return(0,c.useEffect)((function(){v&&(0,u.k1)(v).then((function(t){return s(t)})).catch(console.log)}),[v]),(0,i.jsxs)("main",{children:[(0,i.jsx)(o,{onSubmit:l}),(0,i.jsx)("section",{children:e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{children:"Movies for request "}),(0,i.jsx)(a.O,{movies:e})]})})]})}},4390:function(t,r,e){e.d(r,{M1:function(){return l},Pg:function(){return v},_L:function(){return p},k1:function(){return f},tx:function(){return h}});var n=e(5861),c=e(7757),u=e.n(c),a=e(4569),s=e.n(a),i="0d2fc6d2597c3f501e7437cf40d08b03",o="https://api.themoviedb.org/3",p=function(){var t=(0,n.Z)(u().mark((function t(){var r,e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URLSearchParams({api_key:i}),e="".concat(o,"/trending/movie/day?").concat(r),t.prev=2,t.next=5,s().get(e);case 5:return n=t.sent,t.abrupt("return",n.data.results);case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n,c;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new URLSearchParams({api_key:i,query:r}),n="".concat(o,"/search/movie?").concat(e),t.prev=2,t.next=5,s().get(n);case 5:return c=t.sent,t.abrupt("return",c.data.results);case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n,c;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new URLSearchParams({api_key:i}),n="".concat(o,"/movie/").concat(r,"?").concat(e),t.prev=2,t.next=5,s().get(n);case 5:return c=t.sent,t.abrupt("return",c.data);case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n,c;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new URLSearchParams({api_key:i}),n="".concat(o,"/movie/").concat(r,"/credits?").concat(e),t.prev=2,t.next=5,s().get(n);case 5:return c=t.sent,t.abrupt("return",c.data.cast);case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n,c;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new URLSearchParams({api_key:i}),n="".concat(o,"/movie/").concat(r,"/reviews?").concat(e),t.prev=2,t.next=5,s().get(n);case 5:return c=t.sent,t.abrupt("return",c.data.results);case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=746.2e5a5948.chunk.js.map