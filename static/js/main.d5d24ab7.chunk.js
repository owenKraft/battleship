(this.webpackJsonpbattleship=this.webpackJsonpbattleship||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(1),r=a.n(i),s=a(19),c=a.n(s),l=(a(26),a(7)),o=(a(27),a(9)),d=a(2),u=a.p+"static/media/battleship_background.506e93d5.jpg",p=function(){return Object(n.jsxs)("div",{className:"hero",children:[Object(n.jsx)("header",{children:Object(n.jsx)("h1",{className:"logo",children:"Battleship"})}),Object(n.jsx)("img",{className:"background",src:u,alt:""}),Object(n.jsxs)("div",{className:"text",children:[Object(n.jsx)("h2",{children:"Control the seas"}),Object(n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),Object(n.jsx)(o.b,{to:"/play",children:Object(n.jsx)("button",{children:"Play now"})})]})]})},h=function(e){return Object(n.jsxs)("header",{className:"header",children:[Object(n.jsxs)("div",{className:"header-text",children:[Object(n.jsx)(o.b,{to:"/",children:Object(n.jsx)("h1",{className:"header-link",children:"Battleship"})}),Object(n.jsx)(o.b,{to:"/",children:Object(n.jsx)("button",{className:"newGameBtn",onClick:function(){},children:"New game"})})]}),Object(n.jsx)("img",{className:"background",src:u,alt:""})]})},m=a(8),g=a(18),j=a.n(g),b=function(e,t){var a=e,n=t,i=s(n);function r(){return i.reduce((function(e,t){return e+t}),0)}function s(e){return Object(m.a)(new Array(e)).map((function(e){return 0}))}return{name:a,length:n,sunk:!1,hitArray:i,resetShip:function(){this.sunk=!1,this.hitArray=s(n)},hit:function(e){i[e]=1,r()===i.length&&!1===this.sunk&&(this.sunk=!0)},checkNumOfHits:r}},f=[{admiral:"Horatio Nelson"},{admiral:"Grigori Potemkin"},{admiral:"T\u014dg\u014d Heihachir\u014d"},{admiral:"Hayreddin Barbarossa"},{admiral:"Francis Drake"},{admiral:"Chester Nimitz"},{admiral:"Yi Sun-sin"}],v=function(e){function t(e){var t=e.target.closest(".cell"),a=Number(t.attributes[1].value),n=Number(t.attributes[2].value);return console.log("getCoordinates",a,n),{cell:t,x:a,y:n}}function a(e,t){return document.querySelectorAll('[data-agent="player"][data-row="'.concat(e,'"]'))[t]}function n(e,t,a){var n=e.firstElementChild,i=t[0],r=t[2],s=t[3];if(!1===i)n.querySelector(".miss-icon").classList.remove("hidden"),n.parentElement.classList.add("miss");else if(!0===i){n.querySelector(".hit-icon").classList.remove("hidden"),n.parentElement.classList.add("hit");var c=a[r];c.hit(s),console.log("ship sunk?",c.sunk)}return i}return{getAdmiral:function(){var e=Math.floor(Math.random()*Math.floor(f.length));return f[e].admiral},displayShipPreview:function(e,t,n,i){var r=t.length,s=i.gameboard,c=e.x,l=e.y,o="Click a cell to place ship",d=o,u=i.checkForValidShipPlacement(c,l,r,n);if(!1!==u.validPlacement){if("vertical"===n)for(var p=l;p<l+r;p++){d=o,a(c,p).classList.add("placeShip")}else if("horizontal"===n)for(var h=c;h<c+r;h++){d=o,a(h,l).classList.add("placeShip")}}else if(!1===u.validPlacement){if(console.log(u.message),"vertical"===n)if(l+r>s[0].length)for(var m=l;m<s[0].length;m++){d="invalid placement! ship length extends past gameboard",a(c,m).classList.add("placeShip-invalid")}else for(var g=l;g<l+r;g++){d="invalid placement! one or more coordinates already occupied",a(c,g).classList.add("placeShip-invalid")}else if("horizontal"===n)if(c+r>s[0].length)for(var j=c;j<s[0].length;j++){d=o,a(j,l).classList.add("placeShip-invalid")}else for(var b=c;b<c+r;b++){d="invalid placement! one or more coordinates already occupied",a(b,l).classList.add("placeShip-invalid")}}else d="invalid orientation! orientation must be either 'horizontal' or 'vertical'";return console.log(d),d},displayPlayerShip:function(e){e.forEach((function(e){a(e[0],e[1]).classList.add("playerShip")}))},clickCompCell:function(e,a,i){var r=t(e),s=a.checkHit(r.x,r.y);return n(r.cell,s,i)},removeShipFromSelector:function(e,t){for(var a=[],n=0;n<t.options.length;n++)a[n]=t.options[n].value;var i=a.findIndex((function(t){return t===e}));t.remove(i),0===t.options.length&&document.querySelector(".ship-selector").classList.add("hidden")},createShips:function(){return{carrier:b("carrier",5),battleship:b("battleship",4),cruiser:b("cruiser",3),submarine:b("submarine",3),destroyer:b("destroyer",2)}},getCoordinates:t,getCell:a,checkIfAllShipsSunk:function(e){var t=Object.getOwnPropertyNames(e),a=[];return t.forEach((function(t){a.push(e[t].sunk)})),a.filter((function(e){return!0===e})).length===t.length},displayCellClickResult:n,updateInfoPanel:function(e){var t=document.querySelector(".info-panel");t.classList.remove("info-panel-success"),t.classList.remove("info-panel-warning"),t.classList.remove("info-panel-danger"),"success"===e?t.classList.add("info-panel-success"):"warning"===e?t.classList.add("info-panel-warning"):"danger"===e&&t.classList.add("info-panel-danger")}}},O=function(e){var t=v(),a=e.agent,i=e.board,r=e.ships,s=e.gameState;return Object(n.jsx)("div",{className:"cell ".concat(e.agent),"data-row":e.row,"data-column":e.column,"data-agent":e.agent,onClick:function(n){return function(n){var c=r[document.getElementById("ship-dropdown").value],l=document.getElementById("orientation-dropdown").value;if("player"===a&&"setup"===s){var o=t.getCoordinates(n),d=i.placeShip(c,[o.x,o.y],l);if(t.displayPlayerShip(d),0!==d.length){var u=document.getElementById("ship-dropdown");t.removeShipFromSelector(c.name,u),u.options.length||(e.updateGameState("player turn"),t.updateInfoPanel("success"),e.updateMessage("Your fleet has been positioned. Make the first attack!"))}}else if("computer"===a&&"player turn"===s){var p,h=t.clickCompCell(n,i,r);"already clicked"===h?(document.querySelector(".info-panel").classList.add("info-panel-warning"),e.updateMessage("Try another square.")):(e.updateGame(i,r),!0===t.checkIfAllShipsSunk(r)?(e.updateGameState("game over"),t.updateInfoPanel("success"),e.updateMessage("You won! To play again, click 'New Game' in the upper right hand corner.")):(!1===h?(p="Miss! ",t.updateInfoPanel()):!0===h&&(p="Hit! ",t.updateInfoPanel("success")),e.updateMessage(p+e.compName+" is thinking..."),e.updateGameState("comp turn")))}}(n)},onMouseOver:function(e){return function(e){if("player"===a&&"setup"===s){var n=r[document.getElementById("ship-dropdown").value],c=document.getElementById("orientation-dropdown").value,l=t.getCoordinates(e);t.displayShipPreview(l,n,c,i)}else"computer"===a&&"setup"===s?e.target.classList.add("invalid"):"computer"===a&&"setup"!==s&&"game over"!==s&&(e.target.closest(".cell").classList.contains("hit")||e.target.closest(".cell").classList.contains("miss")?e.target.closest(".cell").classList.add("invalid"):e.target.closest(".cell").classList.contains("hit")&&e.target.closest(".cell").classList.contains("miss")||e.target.closest(".cell").classList.add("valid"))}(e)},onMouseOut:function(t){return function(t){"player"===e.agent&&"setup"===s?document.querySelectorAll(".placeShip, .placeShip-invalid").forEach((function(e){return e.classList.remove("placeShip","placeShip-invalid")})):"computer"===a&&"setup"===s?t.target.classList.remove("invalid"):"computer"===a&&"setup"!==s&&"game over"!==s&&(t.target.closest(".cell").classList.remove("valid"),t.target.closest(".cell").classList.remove("invalid"))}(t)},children:Object(n.jsxs)("div",{children:[Object(n.jsx)(j.a,{symbol:"\ud83d\udd25",label:"hit",className:"emoji hit-icon hidden"}),Object(n.jsx)(j.a,{symbol:"\u2716\ufe0f",label:"miss",className:"emoji miss-icon hidden"})]})})},S=function(e){var t=-1,a=Object(m.a)(new Array(e.gridSize||8)).map((function(a){return Object(n.jsx)(O,{row:e.row,column:t+=1,agent:e.agent,board:e.board,ships:e.ships,compName:e.compName,gameState:e.gameState,updateGame:e.updateGame,updateGameState:e.updateGameState,updateMessage:e.updateMessage,whenCellClicked:e.whenCellClicked},t)}));return Object(n.jsx)("div",{className:"row",children:a})},y=function(e){var t=-1,a=Object(m.a)(new Array(e.gridSize||8)).map((function(a){return Object(n.jsx)(S,{gridSize:e.gridSize,row:t+=1,agent:e.agent,board:e.board,ships:e.ships,compName:e.compName,gameState:e.gameState,updateGame:e.updateGame,updateGameState:e.updateGameState,updateMessage:e.updateMessage,whenCellClicked:e.whenCellClicked},t)}));return Object(n.jsx)("div",{className:"grid",children:a})},x=function(e,t){e.placeShip(t.carrier,[1,1],"horizontal"),e.placeShip(t.battleship,[6,3],"vertical"),e.placeShip(t.cruiser,[2,3],"horizontal"),e.placeShip(t.submarine,[1,5],"vertical"),e.placeShip(t.destroyer,[6,0],"horizontal")},k=function(){return Object(n.jsxs)("div",{className:"ship-selector",children:[Object(n.jsx)("h3",{className:"ship-selector-text",children:"Change ship or orientation"}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("select",{id:"ship-dropdown",children:[Object(n.jsx)("option",{value:"carrier",children:"Carrier"}),Object(n.jsx)("option",{value:"battleship",children:"Battleship"}),Object(n.jsx)("option",{value:"cruiser",children:"Cruiser"}),Object(n.jsx)("option",{value:"submarine",children:"Submarine"}),Object(n.jsx)("option",{value:"destroyer",children:"Destroyer"})]}),Object(n.jsxs)("select",{id:"orientation-dropdown",children:[Object(n.jsx)("option",{value:"vertical",children:"Vertical"}),Object(n.jsx)("option",{value:"horizontal",children:"Horizontal"})]})]})]})},w=function(e){var t,a,i=v();return"computer"===e.agent?(x(e.board,e.ships),t=e.compName+"'s"):(t="Your",a=Object(n.jsx)(k,{})),Object(n.jsxs)("div",{className:"gameboard",children:[Object(n.jsxs)("h2",{children:[t," board"]}),Object(n.jsx)(y,{gridSize:8,agent:e.agent,board:e.board,ships:e.ships,compName:e.compName,gameState:e.gameState,updateGame:e.updateGame,updateGameState:e.updateGameState,updateMessage:e.updateMessage,whenCellClicked:i.whenCellClicked}),a]})},N=function(){var e=Object(m.a)(new Array(8)).map((function(e){return Object(m.a)(new Array(8)).map((function(e){return["empty"]}))}));function t(t,a,n,i){var r,s;if("vertical"===i)if(a+n>e[0].length)r=!1,s="invalid placement! ship length extends past gameboard";else for(var c=a;c<a+n;c++)"empty"!==e[t][c][0]&&(r=!1,s="invalid placement! one or more coordinates already occupied");else if("horizontal"===i)if(t+n>e.length)r=!1,s="invalid placement! ship length extends past gameboard";else for(var l=t;l<t+n;l++)"empty"!==e[l][a][0]&&(r=!1,s="invalid placement! one or more coordinates already occupied");else r=!1,s="invalid orientation! orientation must be either 'horizontal' or 'vertical'";return{validPlacement:r,message:s}}return console.log(e),{test:function(){console.log("this is a test",e)},gameboard:e,checkForValidShipPlacement:t,placeShip:function(a,n,i){var r=a.name,s=a.length,c=n[0],l=n[1],o=0,d=[];if(!1!==t(c,l,s,i).validPlacement)if("vertical"===i)for(var u=l;u<l+s;u++)e[c][u]=["ship",r,o],d.push([c,u]),o++;else if("horizontal"===i)for(var p=c;p<c+s;p++)e[p][l]=["ship",r,o],d.push([p,l]),o++;return d},checkHit:function(t,a){var n=e[t];return"empty"!==n[a][0]&&"ship"!==n[a][0]?["already clicked"]:"empty"===n[a][0]?(n[a][0]="miss",[!1,"miss"]):"ship"===n[a][0]?(n[a][0]="hit",[!0,"hit",n[a][1],n[a][2]]):void 0}}},C=function(e){var t=e.message;return Object(n.jsx)("div",{className:"info-panel",children:t})},L=function(e,t,a,n){var i=a,r=i.mode;console.log(r);var s,c,l,o=e.gameboard,d=v(),u=["up","down","left","right"],p=function(e){return Math.floor(Math.random()*Math.floor(e))};if("random"===r)for(s=p(o.length),c=p(o[s].length);"miss"===o[s][c][0]||"hit"===o[s][c][0];)s=p(o.length),c=p(o[s].length);else"seeking"===r&&("init"===i.lastResult?"up"===(l=u[p(3)])||"down"===l?"vertical":"left"!==l&&"right"!==l||"horizontal":(i.orientation,l=i.direction));var h=d.getCell(s,c),m=e.checkHit(s,c),g=d.displayCellClickResult(h,m,t);return m[0]&&i.hasOwnProperty("lastResult")?(i.lastResult="init",console.log(i.lastResult)):(i.lastResult=m[0].toString(),console.log(i.lastResult)),g},G=function(e){var t=v(),a=Object(i.useState)("setup"),r=Object(l.a)(a,2),s=r[0],c=r[1],o=Object(i.useState)(N()),d=Object(l.a)(o,2),u=d[0],p=d[1],m=Object(i.useState)(t.createShips()),g=Object(l.a)(m,2),j=g[0],b=g[1],f=Object(i.useState)(t.getAdmiral()),O=Object(l.a)(f,2),S=O[0],y=(O[1],Object(i.useState)(N())),x=Object(l.a)(y,2),k=x[0],G=x[1],M=Object(i.useState)(t.createShips()),P=Object(l.a)(M,2),z=P[0],I=P[1],A=Object(i.useState)({mode:"random"}),q=Object(l.a)(A,2),B=q[0],E=q[1],H=Object(i.useState)("Place your fleet on your board!"),R=Object(l.a)(H,2),Y=R[0],F=R[1],T=function(e){E(e)},V=function(e){if(c(e),"comp turn"===e){var a=function(){var e=Math.floor(Math.random()*Math.floor(2e3));setTimeout((function(){var e,a=L(u,j,B,T);!1===a?(e=" missed! ",t.updateInfoPanel()):!0===a&&(e=" hit your ship! ",t.updateInfoPanel("danger")),F(S+e+"Your turn.")}),e)}();console.log(a),t.checkIfAllShipsSunk(j)?(U(),F("Oh no! Your enemy has sunk all of your ships! To play again, click 'New Game' in the upper right hand corner.")):c("player turn")}else"game over"===e&&U()},D=function(e){F(e)},J=function(e,t,a){"player"===e?(p(t),b(a)):"computer"===e&&(G(t),I(a))};function U(){"game over"!==s&&c("game over"),document.querySelector(".newGameBtn").classList.add("btn-inverse")}return Object(n.jsxs)("div",{children:[Object(n.jsx)(h,{resetGame:e.resetGame}),Object(n.jsxs)("div",{className:"playing-area",children:[Object(n.jsx)(C,{message:Y}),Object(n.jsx)(w,{agent:"player",board:u,ships:j,gameState:s,updateGame:J,updateGameState:V,updateMessage:D}),Object(n.jsx)(w,{agent:"computer",compName:S,board:k,ships:z,gameState:s,updateGame:J,updateGameState:V,updateMessage:D})]})]})};var M=function(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(n.jsx)("div",{children:Object(n.jsx)(o.a,{basename:"/battleship",children:Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{path:"/",exact:!0,render:function(e){return Object(n.jsx)(p,{})}}),Object(n.jsx)(d.a,{path:"/start",exact:!0,render:function(e){return Object(n.jsx)(p,{})}}),Object(n.jsx)(d.a,{path:"/play",render:function(e){return Object(n.jsx)(G,{game:a,resetGame:r})}})]})})})};c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(M,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.d5d24ab7.chunk.js.map