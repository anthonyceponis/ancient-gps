(this["webpackJsonpancient-gps"]=this["webpackJsonpancient-gps"]||[]).push([[0],{19:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(7),i=n.n(c),s=(n(19),n(9)),o=n(4),l="c-navbar",u="c-sidenav",d="SET_ALGORITHM",b="SET_MAZE",f="SET_SPEED",h="ALGORITHM_BFS",p="ALGORITHM_DFS",j="MAZE_RECURSIVE_DIVISION",x="MAZE_STAIR",v="TOGGLE_VISUALISING_ALGORITHM",O="TOGGLE_VISUALISING_MAZE",g=localStorage.getItem("algorithm");""===g&&(g=null);var m=localStorage.getItem("maze");""===m&&(m=null);var S=localStorage.getItem("speed");null===S&&(S=10..toString());var y,k={algorithm:g,maze:m,speed:parseInt(S),visualisingAlgorithm:!1,visualisingMaze:!1},w=n.p+"static/media/bullSand.9e8ce4e1.svg",E=function(e){return function(t){localStorage.setItem("algorithm",null===e?"":e),t({type:d,payload:e})}},I=function(e){return function(t){localStorage.setItem("maze",null===e?"":e),t({type:b,payload:e})}},A=function(e){return function(t){localStorage.setItem("speed",e.toString()),t({type:f,payload:e})}},N=function(){return function(e){e({type:v,payload:null})}},T=function(){return function(e){e({type:O,payload:null})}},L=n(2),M=n.n(L),D=n(5),W="#192734",C="#081419",_="#B0AEB1",R="white",z="#f4a460",V=26,G=Math.floor(window.innerWidth/V),P=Math.floor((window.innerHeight-75)/V),U=function(e,t){return"x".concat(e,",y").concat(t)},B=U(5,Math.floor(P/2)),F=U(G-5,Math.floor(P/2));!function(e){e[e.UNVISISTED=0]="UNVISISTED",e[e.VISITED=1]="VISITED",e[e.WALL=2]="WALL"}(y||(y={}));var q=n.p+"static/media/bullBlack.fc79a5a7.svg",Y=n.p+"static/media/theseus.c0bd10a4.svg",H=function(e){var t=e.ctx,n=e.x,r=void 0===n?1/0:n,a=e.y,c=void 0===a?1/0:a,i=e.wall,s=void 0===i?null:i;if(r===1/0){t.clearRect(0,0,window.innerWidth,window.innerHeight);for(var o=function(e){for(var n=function(n){if(t.beginPath(),t.rect(n*V,e*V,V,V),Z(n,e)===B){t.fillStyle="white",t.fill();var r=new Image;r.src=q,r.onload=function(){t.drawImage(r,n*V,e*V,V,V)}}else if(Z(n,e)===F){t.fillStyle="white",t.fill();var a=new Image;a.src=Y,a.onload=function(){t.drawImage(a,n*V,e*V,V,V)}}else t.fillStyle=C,t.fill()},r=0;r<G;r++)n(r)},l=0;l<P;l++)o(l);for(var u=0;u<=G;u++)t.beginPath(),t.moveTo(V*u,0),t.lineTo(V*u,P*V),t.closePath(),t.lineWidth=.5,t.strokeStyle=W,t.stroke();for(var d=0;d<=P;d++)t.beginPath(),t.moveTo(0,V*d),t.lineTo(G*V,V*d),t.closePath(),t.lineWidth=.5,t.strokeStyle=W,t.stroke()}else null!==s&&(t.beginPath(),t.rect(r+1,c+1,24,24),t.fillStyle=s?z:C,t.fill())},X=function(){for(var e={},t=0;t<P;t++)for(var n=0;n<G;n++){var r=Z(n,t),a={x:n,y:t,label:y.UNVISISTED,nodes:K(n,t),parent:void 0,weight:0};e[r]=a}return e},K=function(e,t){var n=[];return 0===e?n.push(Z(e+1,t)):((e+1)%G===0||n.push(Z(e+1,t)),n.push(Z(e-1,t))),0===t?n.push(Z(e,t+1)):(t===P-1||n.push(Z(e,t+1)),n.push(Z(e,t-1))),n},Z=function(e,t){return"x".concat(e,",y").concat(t)},J=function(e){return new Promise((function(t){return setTimeout(t,e)}))},Q=function e(t,n,r){var a=r.start,c=r.previousTimestamp,i=r.previousDelta,s=r.ctx,o=r.x,l=r.y,u=r.color;void 0===a&&(a=n);var d=n-a,b=0;if(c!==n&&(b=Math.min(.05*d,24),s.fillStyle=u,s.clearRect(o-i/2,l-i/2,i,i),s.fillRect(o-b/2,l-b/2,b,b)),d<1e3*t){var f={start:a,previousTimestamp:c=n,previousDelta:b,ctx:s,x:o,y:l,color:u};requestAnimationFrame((function(n){return e(t,n,f)}))}},$=function(){var e=Object(D.a)(M.a.mark((function e(t,n,r,a){var c,i,s,o;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(c=[];t;)c.push(t),t=n[t].parent;i=c.length-1;case 3:if(!(i>=0)){e.next=12;break}return e.next=6,J(r);case 6:s=n[c[i]].x,o=n[c[i]].y,Z(s,o)!==B&&Z(s,o)!==F&&function(){var e={start:void 0,previousTimestamp:void 0,previousDelta:0,ctx:a,x:s*V+13,y:o*V+13,color:R};requestAnimationFrame((function(t){return Q(r,t,e)}))}();case 9:--i,e.next=3;break;case 12:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}();var ee="UPDATE_GRID_DATA",te={gridData:X()},ne=function(e){return function(t){t({type:ee,payload:e})}},re=n(0),ae=function(){return Object(re.jsxs)("div",{className:"".concat("c-secondary-nav"),children:[Object(re.jsx)("div",{children:Object(re.jsx)("b",{children:"Key:"})}),Object(re.jsxs)("div",{children:[Object(re.jsx)("div",{style:{backgroundColor:C}})," Unvisited Node"]}),Object(re.jsxs)("div",{children:[Object(re.jsx)("div",{style:{backgroundColor:_}})," Visited Node"]}),Object(re.jsxs)("div",{children:[Object(re.jsx)("div",{style:{backgroundColor:z}})," Wall Node"]}),Object(re.jsxs)("div",{children:[Object(re.jsx)("div",{style:{backgroundColor:R}}),"Solution Node"]}),Object(re.jsxs)("div",{children:[Object(re.jsx)("div",{style:{backgroundColor:R},children:Object(re.jsx)("img",{src:q,alt:"Bull icon"})}),"Start Node (Minotaur)"]}),Object(re.jsxs)("div",{children:[Object(re.jsx)("div",{style:{backgroundColor:R},children:Object(re.jsx)("img",{src:Y,alt:"Theseus icon"})}),"Target Node (Theseus)"]})]})},ce=function(e){var t=e.open,n=e.setOpen,r=Object(o.c)((function(e){return e.Navbar.speed})),a=Object(o.b)();return Object(re.jsx)("div",{children:Object(re.jsxs)("div",{className:"".concat(u," ").concat(!0===t?"c-sidenav-open":"c-sidenav-closed"),children:[Object(re.jsxs)("div",{children:[Object(re.jsx)("img",{src:w,alt:"Bull Logo"}),Object(re.jsxs)("ul",{children:[Object(re.jsxs)("li",{children:[Object(re.jsx)("b",{children:"Searching Algorithms"}),Object(re.jsxs)("ul",{children:[Object(re.jsx)("li",{children:Object(re.jsx)("span",{className:"".concat(u,"-hover"),onClick:function(){a(N()),a(E(h)),n(!1)},children:"Breadth-first search"})}),Object(re.jsx)("li",{children:Object(re.jsx)("span",{className:"".concat(u,"-hover"),onClick:function(){a(N()),a(E(p)),n(!1)},children:"Depth-first search"})})]})]}),Object(re.jsxs)("li",{children:[Object(re.jsx)("b",{children:"Maze Generators"}),Object(re.jsxs)("ul",{children:[Object(re.jsx)("li",{children:Object(re.jsx)("span",{className:"".concat(u,"-hover"),onClick:function(){a(I(null)),a(ne(X()))},children:"No Maze"})}),Object(re.jsx)("li",{children:Object(re.jsx)("span",{className:"".concat(u,"-hover"),onClick:function(){a(T()),a(E(null)),a(ne(X())),a(I(j)),n(!1)},children:"Recursive Division"})}),Object(re.jsx)("li",{children:Object(re.jsx)("span",{className:"".concat(u,"-hover"),onClick:function(){a(T()),a(E(null)),a(ne(X())),a(I(x)),n(!1)},children:"Stair Pattern"})}),Object(re.jsxs)("li",{children:[Object(re.jsx)("b",{children:"Add wall: "})," ",Object(re.jsx)("br",{})," hover + shiftKey"]}),Object(re.jsxs)("li",{children:[Object(re.jsx)("b",{children:"Remove wall: "}),Object(re.jsx)("br",{})," hover + ctrlKey"]}),Object(re.jsxs)("li",{children:[Object(re.jsx)("b",{children:"Toggle wall: "}),Object(re.jsx)("br",{})," click"]})]})]}),Object(re.jsxs)("li",{children:[Object(re.jsx)("b",{children:"Speed"}),Object(re.jsxs)("ul",{children:[Object(re.jsx)("li",{children:Object(re.jsx)("span",{className:"".concat(u,"-hover ").concat(1===r?"c-sidenav-active":""),onClick:function(){return a(A(1))},children:"Fast"})}),Object(re.jsx)("li",{children:Object(re.jsx)("span",{className:"".concat(u,"-hover ").concat(10===r?"c-sidenav-active":""),onClick:function(){return a(A(10))},children:"Moderate"})}),Object(re.jsx)("li",{children:Object(re.jsx)("span",{className:"".concat(u,"-hover ").concat(30===r?"c-sidenav-active":""),onClick:function(){return a(A(30))},children:"Slow"})})]})]}),Object(re.jsx)("li",{children:Object(re.jsx)("span",{className:"".concat(u,"-hover "),onClick:function(){a(ne(X()))},children:"Clear Board"})})]})]}),Object(re.jsx)(ae,{})]})})},ie=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(o.c)((function(e){return e.Navbar.visualisingAlgorithm})),i=Object(o.c)((function(e){return e.Navbar.visualisingMaze}));return Object(re.jsxs)("div",{className:l,children:[Object(re.jsx)("div",{children:Object(re.jsx)("h1",{children:"Ancient GPS"})}),Object(re.jsxs)("div",{className:"".concat(l,"-hamburger"),children:[Object(re.jsx)("div",{className:"".concat(l,"-hamburger-").concat(n?"open":"closed"," ").concat(l,"-hamburger-").concat(c||i?"visualising":"")}),Object(re.jsx)("span",{className:"".concat(l,"-hamburger-clicker"),style:{pointerEvents:c||i?"none":"auto"},onClick:function(){!n&&!c||i?a(!0):n&&a(!1)}})]}),Object(re.jsx)(ce,{open:n,setOpen:a})]})},se=n(8),oe=function(){var e=Object(D.a)(M.a.mark((function e(t,n,r,a){var c,i,s,o,l,u,d,b;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=[t],i=new Set;case 2:if(!(c.length>0)){e.next=17;break}return e.next=5,J(r);case 5:if(s=c[0],o=n[s].x,l=n[s].y,s!==B&&s!==F&&function(){var e={start:void 0,previousTimestamp:void 0,previousDelta:0,ctx:a,x:o*V+13,y:l*V+13,color:_};requestAnimationFrame((function(t){return Q(r,t,e)}))}(),s!==F){e.next=12;break}return n[B].parent=null,e.abrupt("return",$(s,n,r,a));case 12:u=Object(se.a)(n[s].nodes);try{for(u.s();!(d=u.n()).done;)b=d.value,i.has(b)||n[b].label===y.WALL||(c.push(b),i.add(b),n[b].parent=s)}catch(f){u.e(f)}finally{u.f()}c.shift(),e.next=2;break;case 17:console.log("does not exist m8!");case 18:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),le=function(){var e=Object(D.a)(M.a.mark((function e(t,n,r,a,c){var i,s,o,l,u,d;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==F){e.next=7;break}return n[B].parent=null,e.next=4,$(t,n,a,r);case 4:return e.abrupt("return",!0);case 7:if(0!==n[t].nodes.length&&n[t].label!==y.WALL){e.next=9;break}return e.abrupt("return",!1);case 9:if(c.add(t),i=n[t].x,s=n[t].y,t===B||t===F){e.next=17;break}return o={start:void 0,previousTimestamp:void 0,previousDelta:0,ctx:r,x:i*V+13,y:s*V+13,color:_},e.next=16,J(a);case 16:requestAnimationFrame((function(e){return Q(a,e,o)}));case 17:l=Object(se.a)(n[t].nodes.reverse()),e.prev=18,l.s();case 20:if((u=l.n()).done){e.next=31;break}if(d=u.value,c.has(d)||n[d].label===y.WALL){e.next=29;break}return n[d].parent=t,e.next=26,le(d,n,r,a,c);case 26:if(!e.sent){e.next=29;break}return e.abrupt("return",!0);case 29:e.next=20;break;case 31:e.next=36;break;case 33:e.prev=33,e.t0=e.catch(18),l.e(e.t0);case 36:return e.prev=36,l.f(),e.finish(36);case 39:return e.abrupt("return",!1);case 40:case"end":return e.stop()}}),e,null,[[18,33,36,39]])})));return function(t,n,r,a,c){return e.apply(this,arguments)}}(),ue=function(){var e=Object(D.a)(M.a.mark((function e(t){var n,r,a,c,i,s,o,l,u,d,b,f,h,p,j,x,v,O,g,m,S,k,w,E,I,A,N,T,L,D,W,C,_,R,U,q,Y,H,X,K;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.grid,r=t.rowStart,a=t.rowEnd,c=t.colStart,i=t.colEnd,s=t.split,o=t.surroundingWalls,l=t.speed,u=t.ctx,!(a<r||i<c)){e.next=3;break}return e.abrupt("return");case 3:if(o){e.next=15;break}d=0,b=Object.keys(n);case 5:if(!(d<b.length)){e.next=14;break}if(f=b[d],h=parseInt(f.split(",")[0].split("x")[1]),p=parseInt(f.split(",")[1].split("y")[1]),0!==h&&0!==p&&h!==G-1&&p!==P-1){e.next=11;break}return e.delegateYield(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n[Z(h,p)].label=y.WALL,t={start:void 0,previousTimestamp:void 0,previousDelta:0,ctx:u,x:h*V+13,y:p*V+13,color:z},e.next=4,J(l);case 4:requestAnimationFrame((function(e){return Q(l,e,t)}));case 5:case"end":return e.stop()}}),e)}))(),"t0",11);case 11:d++,e.next=5;break;case 14:o=!0;case 15:if("horizontal"!==s){e.next=50;break}for(j=[],x=r;x<=a;x+=2)j.push(x);for(v=[],O=c-1;O<=i+1;O+=2)v.push(O);g=Math.floor(Math.random()*j.length),m=Math.floor(Math.random()*v.length),S=j[g],k=v[m],w=0,E=Object.keys(n);case 25:if(!(w<E.length)){e.next=34;break}if(I=E[w],A=parseInt(I.split(",")[0].split("x")[1]),!((N=parseInt(I.split(",")[1].split("y")[1]))===S&&A!==k&&A>=c-1&&A<=i+1&&Z(A,N)!==B&&Z(A,N)!==F)){e.next=31;break}return e.delegateYield(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n[Z(A,N)].label=y.WALL,t={start:void 0,previousTimestamp:void 0,previousDelta:0,ctx:u,x:A*V+13,y:N*V+13,color:z},e.next=4,J(l);case 4:requestAnimationFrame((function(e){return Q(l,e,t)}));case 5:case"end":return e.stop()}}),e)}))(),"t1",31);case 31:w++,e.next=25;break;case 34:if(!(S-2-r>i-c)){e.next=39;break}return e.next=37,ue({grid:n,rowStart:r,rowEnd:S-2,colStart:c,colEnd:i,split:s,surroundingWalls:o,speed:l,ctx:u});case 37:e.next=41;break;case 39:return e.next=41,ue({grid:n,rowStart:r,rowEnd:S-2,colStart:c,colEnd:i,split:"vertical",surroundingWalls:o,speed:l,ctx:u});case 41:if(!(a-(S+2)>i-c)){e.next=46;break}return e.next=44,ue({grid:n,rowStart:S+2,rowEnd:a,colStart:c,colEnd:i,split:s,surroundingWalls:o,speed:l,ctx:u});case 44:e.next=48;break;case 46:return e.next=48,ue({grid:n,rowStart:S+2,rowEnd:a,colStart:c,colEnd:i,split:"vertical",surroundingWalls:o,speed:l,ctx:u});case 48:e.next=82;break;case 50:for(T=[],L=c;L<=i;L+=2)T.push(L);for(D=[],W=r-1;W<=a+1;W+=2)D.push(W);C=Math.floor(Math.random()*T.length),_=Math.floor(Math.random()*D.length),R=T[C],U=D[_],q=0,Y=Object.keys(n);case 59:if(!(q<Y.length)){e.next=68;break}if(H=Y[q],X=parseInt(H.split(",")[0].split("x")[1]),K=parseInt(H.split(",")[1].split("y")[1]),!(X===R&&K!==U&&K>=r-1&&K<=a+1&&Z(X,K)!==B&&Z(X,K)!==F)){e.next=65;break}return e.delegateYield(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n[Z(X,K)].label=y.WALL,t={start:void 0,previousTimestamp:void 0,previousDelta:0,ctx:u,x:X*V+13,y:K*V+13,color:z},e.next=4,J(l);case 4:requestAnimationFrame((function(e){return Q(l,e,t)}));case 5:case"end":return e.stop()}}),e)}))(),"t2",65);case 65:q++,e.next=59;break;case 68:if(!(a-r>R-2-c)){e.next=73;break}return e.next=71,ue({grid:n,rowStart:r,rowEnd:a,colStart:c,colEnd:R-2,split:"horizontal",surroundingWalls:o,speed:l,ctx:u});case 71:e.next=75;break;case 73:return e.next=75,ue({grid:n,rowStart:r,rowEnd:a,colStart:c,colEnd:R-2,split:s,surroundingWalls:o,speed:l,ctx:u});case 75:if(!(a-r>i-(R+2))){e.next=80;break}return e.next=78,ue({grid:n,rowStart:r,rowEnd:a,colStart:R+2,colEnd:i,split:"horizontal",surroundingWalls:o,speed:l,ctx:u});case 78:e.next=82;break;case 80:return e.next=82,ue({grid:n,rowStart:r,rowEnd:a,colStart:R+2,colEnd:i,split:s,surroundingWalls:o,speed:l,ctx:u});case 82:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),de=function(){var e=Object(D.a)(M.a.mark((function e(t){var n,r,a,c,i,s,o,l;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.grid,r=t.speed,a=t.ctx,c=P-2,i=!0,s=1;case 4:if(!(s<G-1)){e.next=15;break}if(c<1?(i=!i,c+=1):c>P-2&&(i=!i,c-=1),o=s,l=c,console.log(o,l,Z(o,l)),Z(o,l)===B||Z(o,l)===F){e.next=11;break}return e.delegateYield(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n[Z(o,l)].label=y.WALL,t={start:void 0,previousTimestamp:void 0,previousDelta:0,ctx:a,x:o*V+13,y:l*V+13,color:z},e.next=4,J(r);case 4:requestAnimationFrame((function(e){return Q(r,e,t)}));case 5:case"end":return e.stop()}}),e)}))(),"t0",11);case 11:i?c--:c++;case 12:s++,e.next=4;break;case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),be=de,fe=function(){var e=Object(r.useRef)(null),t=Object(o.c)((function(e){return e.App.gridData})),n=Object(o.c)((function(e){return e.Navbar.algorithm})),a=Object(o.c)((function(e){return e.Navbar.maze})),c=Object(o.c)((function(e){return e.Navbar.speed})),i=Object(r.useState)(null),l=Object(s.a)(i,2),u=l[0],d=l[1],b=Object(o.c)((function(e){return e.Navbar.visualisingAlgorithm})),f=Object(o.c)((function(e){return e.Navbar.visualisingMaze})),v=Object(o.b)();return Object(r.useEffect)((function(){u&&H({ctx:u})}),[t,u]),Object(r.useEffect)((function(){if(null!==e.current){var n=e.current;n.width=G*V,n.height=P*V;var r=n.getContext("2d");H({ctx:r}),d(r),t&&n.addEventListener("mousemove",(function(e){!function(e,t,n){var r=document.querySelector("canvas"),a=r.getBoundingClientRect(),c=r.width/a.width,i=r.height/a.height,s={x:(e.clientX-a.left)*c-(e.clientX-a.left)*c%V,y:(e.clientY-a.top)*i-(e.clientY-a.top)*i%V},o=null;if(e.shiftKey?o=!0:e.ctrlKey&&(o=!1),null!==o&&n){var l=Z(s.x/V,s.y/V);if(l===B||l===F)return;n[l].label=o?y.WALL:y.UNVISISTED}H({ctx:t,x:s.x,y:s.y,wall:o})}(e,r,t)})),n.addEventListener("click",(function(e){!function(e,t,n){var r=document.querySelector("canvas"),a=r.getBoundingClientRect(),c=r.width/a.width,i=r.height/a.height,s={x:(e.clientX-a.left)*c-(e.clientX-a.left)*c%V,y:(e.clientY-a.top)*i-(e.clientY-a.top)*i%V},o=null;if(n){var l=Z(s.x/V,s.y/V);if(l===B||l===F)return;o=n[l].label===y.UNVISISTED,n[l].label=o?y.WALL:y.UNVISISTED}H({ctx:t,x:s.x,y:s.y,wall:o})}(e,r,t)}))}}),[t]),Object(r.useEffect)((function(){if(null!==u&&b)switch(n){case h:oe(B,t,c,u).then((function(){return v(N())}));break;case p:le(B,t,u,c,new Set).then((function(){return v(N())}))}}),[n,a,v,t,c,b,u]),Object(r.useEffect)((function(){if(null!==u&&f)switch(a){case j:ue({grid:t,rowStart:2,rowEnd:P-3,colStart:2,colEnd:G-3,split:"horizontal",surroundingWalls:!1,speed:c,ctx:u}).then((function(){return v(T())}));break;case x:be({grid:t,speed:c,ctx:u}).then((function(){return v(T())}))}}),[n,a,v,t,c,f,u]),Object(re.jsx)("canvas",{className:"".concat("c-grid"),ref:e})},he=function(){return Object(re.jsxs)("div",{children:[Object(re.jsx)(ie,{}),Object(re.jsx)(fe,{})]})},pe=n(6),je=n(14),xe=n(3),ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;return t.type===ee?Object(xe.a)(Object(xe.a)({},e),{},{gridData:t.payload}):Object(xe.a)({},e)},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(xe.a)(Object(xe.a)({},e),{},{algorithm:t.payload});case b:return Object(xe.a)(Object(xe.a)({},e),{},{maze:t.payload});case f:return Object(xe.a)(Object(xe.a)({},e),{},{speed:t.payload});case v:return Object(xe.a)(Object(xe.a)({},e),{},{visualisingAlgorithm:!e.visualisingAlgorithm});case O:return Object(xe.a)(Object(xe.a)({},e),{},{visualisingMaze:!e.visualisingMaze});default:return e}},ge=Object(pe.b)({App:ve,Navbar:Oe}),me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.c,Se=Object(pe.d)(ge,me(Object(pe.a)(je.a)));i.a.render(Object(re.jsx)(a.a.StrictMode,{children:Object(re.jsx)(o.a,{store:Se,children:Object(re.jsx)(he,{})})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.65985f63.chunk.js.map