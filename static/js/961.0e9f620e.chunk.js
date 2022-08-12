"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[961],{7961:function(r,e,t){t.r(e);var n=t(8152),a=t(6871),c=t(3504),u=t(2791),s=t(4390),i=t(184),o="IDLE",p="PENDING",h="RESOLVED",l="REJECTED";e.default=function(){var r,e,t=(0,u.useState)({}),v=(0,n.Z)(t,2),f=v[0],d=v[1],x=(0,u.useState)(o),m=(0,n.Z)(x,2),w=m[0],g=m[1],j=(0,a.UO)().movieId,_=null!==(r=null===(e=(0,a.TH)().state)||void 0===e?void 0:e.from)&&void 0!==r?r:"/";(0,u.useEffect)((function(){g(p),(0,s.Pg)(j).then((function(r){d(r),g(h)})).catch((function(r){console.log(r),g(l)}))}),[j]);var k=f.poster_path,b=f.original_title,y=f.release_date,S=f.vote_average,U=f.overview,L=f.genres;return(0,i.jsxs)("section",{children:[w===h&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.rU,{to:_,children:"Back"}),(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/original/"+k,alt:b}),(0,i.jsxs)("h1",{children:[b," ","(".concat(y.slice(0,4),")")]}),(0,i.jsxs)("p",{children:["User Score: ",10*S,"%"]}),(0,i.jsx)("h2",{children:"Overview"}),(0,i.jsx)("p",{children:U}),(0,i.jsx)("h2",{children:"Genres"}),(0,i.jsx)("p",{children:L.reduce((function(r,e){return r+", "+e.name}),"")}),(0,i.jsx)("h2",{children:"Additional information"}),(0,i.jsx)(c.rU,{to:"cast",children:"Cast"}),(0,i.jsx)(c.rU,{to:"reviews",children:"Reviews"}),(0,i.jsx)(u.Suspense,{fallback:(0,i.jsx)("div",{children:"Loading..."}),children:(0,i.jsx)(a.j3,{})})]}),w===o&&(0,i.jsx)("p",{children:"HI HI HI !!!"})]})}},4390:function(r,e,t){t.d(e,{M1:function(){return v},Pg:function(){return l},_L:function(){return p},k1:function(){return h},tx:function(){return f}});var n=t(5861),a=t(7757),c=t.n(a),u=t(4569),s=t.n(u),i="0d2fc6d2597c3f501e7437cf40d08b03",o="https://api.themoviedb.org/3",p=function(){var r=(0,n.Z)(c().mark((function r(){var e,t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=new URLSearchParams({api_key:i}),t="".concat(o,"/trending/movie/day?").concat(e),r.prev=2,r.next=5,s().get(t);case 5:return n=r.sent,r.abrupt("return",n.data.results);case 9:return r.prev=9,r.t0=r.catch(2),r.abrupt("return",r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(){return r.apply(this,arguments)}}(),h=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=new URLSearchParams({api_key:i,query:e}),n="".concat(o,"/search/movie?").concat(t),r.prev=2,r.next=5,s().get(n);case 5:return a=r.sent,r.abrupt("return",a.data.results);case 9:return r.prev=9,r.t0=r.catch(2),r.abrupt("return",r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=new URLSearchParams({api_key:i}),n="".concat(o,"/movie/").concat(e,"?").concat(t),r.prev=2,r.next=5,s().get(n);case 5:return a=r.sent,r.abrupt("return",a.data);case 9:return r.prev=9,r.t0=r.catch(2),r.abrupt("return",r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=new URLSearchParams({api_key:i}),n="".concat(o,"/movie/").concat(e,"/credits?").concat(t),r.prev=2,r.next=5,s().get(n);case 5:return a=r.sent,r.abrupt("return",a.data.cast);case 9:return r.prev=9,r.t0=r.catch(2),r.abrupt("return",r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=new URLSearchParams({api_key:i}),n="".concat(o,"/movie/").concat(e,"/reviews?").concat(t),r.prev=2,r.next=5,s().get(n);case 5:return a=r.sent,r.abrupt("return",a.data.results);case 9:return r.prev=9,r.t0=r.catch(2),r.abrupt("return",r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=961.0e9f620e.chunk.js.map