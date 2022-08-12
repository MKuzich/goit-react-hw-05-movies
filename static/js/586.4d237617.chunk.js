"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[586],{3586:function(r,t,e){e.r(t),e.d(t,{default:function(){return g}});var n,a,c=e(8152),u=e(4390),s=e(2791),i=e(6871),o=e(184),p=function(r){var t=r.photo,e=r.name,n=r.character;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/original/"+t,alt:e}),(0,o.jsx)("h3",{children:e}),(0,o.jsxs)("p",{children:["Character: ",n]})]})},f=e(168),h=e(6031),v=h.ZP.ul(n||(n=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: ","px;\n"])),(function(r){return r.theme.space[4]})),l=h.ZP.li(a||(a=(0,f.Z)(["\n  width: calc((100% - 4 * ","px;px) / 5);\n"])),(function(r){return r.theme.space[4]})),d="IDLE",m="PENDING",x="RESOLVED",w="REJECTED",g=function(){var r=(0,s.useState)(),t=(0,c.Z)(r,2),e=t[0],n=t[1],a=(0,s.useState)(d),f=(0,c.Z)(a,2),h=f[0],g=f[1],b=(0,i.UO)().movieId;return(0,s.useEffect)((function(){g(m),(0,u.M1)(b).then((function(r){n(r),g(x)})).catch((function(r){console.log(r),g(w)}))}),[b]),(0,o.jsxs)("section",{children:[(0,o.jsx)("h2",{children:"Cast?"}),(0,o.jsx)(v,{children:h===x&&e.map((function(r){var t=r.profile_path,e=r.name,n=r.character,a=r.id;return(0,o.jsx)(l,{children:(0,o.jsx)(p,{photo:t,name:e,character:n})},a)}))})]})}},4390:function(r,t,e){e.d(t,{M1:function(){return v},Pg:function(){return h},_L:function(){return p},k1:function(){return f},tx:function(){return l}});var n=e(5861),a=e(7757),c=e.n(a),u=e(4569),s=e.n(u),i="0d2fc6d2597c3f501e7437cf40d08b03",o="https://api.themoviedb.org/3",p=function(){var r=(0,n.Z)(c().mark((function r(){var t,e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=new URLSearchParams({api_key:i}),e="".concat(o,"/trending/movie/day?").concat(t),r.prev=2,r.next=5,s().get(e);case 5:return n=r.sent,r.abrupt("return",n.data.results);case 9:return r.prev=9,r.t0=r.catch(2),r.abrupt("return",r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=new URLSearchParams({api_key:i,query:t}),n="".concat(o,"/search/movie?").concat(e),r.prev=2,r.next=5,s().get(n);case 5:return a=r.sent,r.abrupt("return",a.data.results);case 9:return r.prev=9,r.t0=r.catch(2),r.abrupt("return",r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(t){return r.apply(this,arguments)}}(),h=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=new URLSearchParams({api_key:i}),n="".concat(o,"/movie/").concat(t,"?").concat(e),r.prev=2,r.next=5,s().get(n);case 5:return a=r.sent,r.abrupt("return",a.data);case 9:return r.prev=9,r.t0=r.catch(2),r.abrupt("return",r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=new URLSearchParams({api_key:i}),n="".concat(o,"/movie/").concat(t,"/credits?").concat(e),r.prev=2,r.next=5,s().get(n);case 5:return a=r.sent,r.abrupt("return",a.data.cast);case 9:return r.prev=9,r.t0=r.catch(2),r.abrupt("return",r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(t){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=new URLSearchParams({api_key:i}),n="".concat(o,"/movie/").concat(t,"/reviews?").concat(e),r.prev=2,r.next=5,s().get(n);case 5:return a=r.sent,r.abrupt("return",a.data.results);case 9:return r.prev=9,r.t0=r.catch(2),r.abrupt("return",r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=586.4d237617.chunk.js.map