"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{7504:function(t,r,n){n.d(r,{O:function(){return u}});var e=n(3504),c=n(184),a=function(t){var r=t.title,n=t.poster,a=t.id;return(0,c.jsxs)(e.rU,{to:"movie/".concat(a),children:[(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/original/"+n,alt:r}),(0,c.jsx)("h2",{children:r})]})},u=function(t){var r=t.movies;return(0,c.jsx)("ul",{children:r.map((function(t){var r=t.original_title,n=t.poster_path,e=t.id;return(0,c.jsx)("li",{children:(0,c.jsx)(a,{title:r,poster:n,id:e})},e)}))})}},9544:function(t,r,n){n.r(r);var e=n(8152),c=n(4390),a=n(2791),u=n(7504),i=n(184);r.default=function(){var t=(0,a.useState)(null),r=(0,e.Z)(t,2),n=r[0],s=r[1];return(0,a.useEffect)((function(){(0,c._L)().then((function(t){console.log(t),s(t)})).catch(console.log)}),[]),(0,i.jsxs)("section",{children:[(0,i.jsx)("h1",{children:"Trending today"}),(0,i.jsx)(u.O,{movies:n})]})}},4390:function(t,r,n){n.d(r,{_L:function(){return p},k1:function(){return l}});var e=n(5861),c=n(7757),a=n.n(c),u=n(4569),i=n.n(u),s="0d2fc6d2597c3f501e7437cf40d08b03",o="https://api.themoviedb.org/3",p=function(){var t=(0,e.Z)(a().mark((function t(){var r,n,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URLSearchParams({api_key:s}),n="".concat(o,"/trending/movie/day?").concat(r),t.prev=2,t.next=5,i().get(n);case 5:return e=t.sent,t.abrupt("return",e.results);case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(a().mark((function t(r){var n,e,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new URLSearchParams({api_key:s,query:r}),e="".concat(o,"/search/movie?").concat(n),t.prev=2,t.next=5,i().get(e);case 5:return c=t.sent,t.abrupt("return",c.results);case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.5460b9a6.chunk.js.map