"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[961],{7961:function(e,r,t){t.r(r);var n=t(8152),c=t(6871),a=t(3504),u=t(2791),s=t(4390),i=t(184),o="IDLE",p="PENDING",l="RESOLVED",h="REJECTED";r.default=function(){var e,r,t=(0,u.useState)({}),v=(0,n.Z)(t,2),d=v[0],f=v[1],x=(0,u.useState)(o),g=(0,n.Z)(x,2),m=g[0],_=g[1],j=(0,c.UO)().movieId,w=null!==(e=null===(r=(0,c.TH)().state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/";(0,u.useEffect)((function(){_(p),(0,s.Pg)(j).then((function(e){f(e),_(l)})).catch((function(e){console.log(e),_(h)}))}),[j]);var k=d.poster_path,b=d.original_title,y=d.release_date,E=d.vote_average,S=d.overview,L=d.genres;return(0,i.jsxs)("section",{children:[m===l&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.rU,{to:w,children:"Back"}),(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/original/"+k,alt:b}),(0,i.jsxs)("h1",{children:[b," ","(".concat(y.slice(0,3),")")]}),(0,i.jsxs)("p",{children:["User Score: ",10*E,"%"]}),(0,i.jsx)("h2",{children:"Overview"}),(0,i.jsx)("p",{children:S}),(0,i.jsx)("h2",{children:"Genres"}),(0,i.jsx)("p",{children:L.reduce((function(e,r){return e+", "+r.name}),"")}),(0,i.jsx)(u.Suspense,{fallback:(0,i.jsx)("div",{children:"Loading..."}),children:(0,i.jsx)(c.j3,{})})]}),m===o&&(0,i.jsx)("p",{children:"HI HI HI !!!"})]})}},4390:function(e,r,t){t.d(r,{Pg:function(){return h},_L:function(){return p},k1:function(){return l}});var n=t(5861),c=t(7757),a=t.n(c),u=t(4569),s=t.n(u),i="0d2fc6d2597c3f501e7437cf40d08b03",o="https://api.themoviedb.org/3",p=function(){var e=(0,n.Z)(a().mark((function e(){var r,t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({api_key:i}),t="".concat(o,"/trending/movie/day?").concat(r),e.prev=2,e.next=5,s().get(t);case 5:return n=e.sent,e.abrupt("return",n.data.results);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(a().mark((function e(r){var t,n,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:i,query:r}),n="".concat(o,"/search/movie?").concat(t),e.prev=2,e.next=5,s().get(n);case 5:return c=e.sent,e.abrupt("return",c.data.results);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(a().mark((function e(r){var t,n,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:i}),n="".concat(o,"/movie/").concat(r,"?").concat(t),e.prev=2,e.next=5,s().get(n);case 5:return c=e.sent,e.abrupt("return",c.data);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=961.5f0ac76a.chunk.js.map