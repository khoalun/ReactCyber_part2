(this.webpackJsonpreact_cyberlearn_khoahoc_02=this.webpackJsonpreact_cyberlearn_khoahoc_02||[]).push([[0],{13:function(e,t,a){e.exports=a(26)},18:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),o=(a(18),a(2)),u=a(3),l=a(6),s=a(5),m=a(4),p=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e="@keyframes randomItem".concat(Date.now()," {\n            0% {top: -50px;}\n            25% {top: 100px;}\n            50% {top: -50px;}\n            75% {top: 100px;}\n            100% {top: 0;}\n          }");return r.a.createElement("div",{className:"text-center playerGame"},r.a.createElement("style",null,e),r.a.createElement("div",{className:"speech-bubble ",style:{marginRight:"75px",padding:"82px",marginTop:"15px",left:"1%"}},r.a.createElement("div",{style:{postion:"relative"}},r.a.createElement("img",{style:{position:"absolute",animation:"randomItem".concat(Date.now()," 0.5s"),left:"41.5%",bottom:"14%"},width:100,className:"computer",src:this.props.computer.img,alt:this.props.computer.img}))),r.a.createElement("img",{src:"./img/gameOneTwo/vegeta.jpg",alt:"./img/gameOneTwo/vegeta.jpg",style:{width:" 250px",height:"250px"}}))}}]),a}(n.Component),d=Object(m.b)((function(e){return{computer:e.OneTwoThreeReducer.computer}}))(p),g=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"display-4 text-warning"},this.props.result),";",r.a.createElement("div",{className:"display-4 text-success"},"Round Win : ",r.a.createElement("span",{className:"text-warning"},this.props.roundWin)),r.a.createElement("div",{className:"display-4 text-success"},"Total Round: ",r.a.createElement("span",{className:"text-warning"},this.props.totalRound)))}}]),a}(n.Component),b=Object(m.b)((function(e){return{result:e.OneTwoThreeReducer.result,roundWin:e.OneTwoThreeReducer.roundWin,totalRound:e.OneTwoThreeReducer.totalRound}}))(g),f=(a(25),function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.props.arrayBet),r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"speech-bubble",style:{marginLeft:"75px",padding:"33px",marginTop:"15px"}},r.a.createElement("img",{width:100,src:this.props.arrayBet.find((function(e){return!0===e.bet})).img,alt:this.props.arrayBet.find((function(e){return!0===e.bet})).img})),r.a.createElement("img",{src:"./img/gameOneTwo/goku.jpg",alt:"./img/gameOneTwo/goku.jpg",style:{width:"250px",height:"250px",transForm:"rotate(90deg)"}}),r.a.createElement("div",{className:"row"},this.props.arrayBet.map((function(t,a){var n={};return t.bet&&(n={border:"3px solid orange"}),r.a.createElement("div",{className:"col-4",key:a},r.a.createElement("button",{style:n,className:"btnItem",onClick:function(){e.props.bet(t.ma)}},r.a.createElement("img",{width:50,height:50,src:t.img,alt:t.img})))}))))}}]),a}(n.Component)),h=Object(m.b)((function(e){return{arrayBet:e.OneTwoThreeReducer.arrayBet}}),(function(e){return{bet:function(t){e({type:"CHON_KEO_BUA_BAO",ma:t})}}}))(f),O=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"game  "},r.a.createElement("div",{className:"row text-center",style:{marginTop:"100px"}},r.a.createElement("div",{className:"col-4 "},r.a.createElement(h,null)),r.a.createElement("div",{className:"col-4"},r.a.createElement(b,null),r.a.createElement("button",{className:"btn btn-success padding-3 display-4 mt-5 font-size-15",style:{width:"125px",height:"85px",fontSize:"25px"},onClick:function(){e.props.playGame()}},"Play")),r.a.createElement("div",{className:"col-4"},r.a.createElement(d,null))))}}]),a}(n.Component),y=Object(m.b)(null,(function(e){return{playGame:function(){var t=0,a=setInterval((function(){e({type:"RAN_DOM"}),++t>10&&clearInterval(a),e({type:"END_GAME"})}),100)}}}))(O),v=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=a(9),E=a(1),w={taiXiu:!0,arrayXucXac:[{ma:1,img:"./img/gameXucXac/5.png"},{ma:1,img:"./img/gameXucXac/5.png"},{ma:1,img:"./img/gameXucXac/5.png"}],roundWin:0,totalRound:0},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DAT_CUOC":return e.taiXiu=t.taiXiu,Object(E.a)({},e);case"PLAY_GAME":for(var a=[],n=0;n<3;n++){var r=Math.floor(6*Math.random())+1,c={ma:r,img:"./img/gameXucXac/".concat(r,".png")};a.push(c)}e.arrayXucXac=a,console.log(e.arrayXucXac),e.totalRound+=1;var i=a.reduce((function(e,t,a){return e+t.ma}),0);return(i>11&&!0===e.taiXiu||i<=11&&!1===e.taiXiu)&&(e.roundWin+=1),Object(E.a)({},e);default:return Object(E.a)({},e)}},N=a(7),k={cartDefault:[{id:1,name:"name",img:"",quantity:1,price:0}]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADDING_CART":var a=e.cartDefault.findIndex((function(e){return e.id===t.spGioHang.id}));return-1!==a?e.cartDefault[a].quantity+=1:e.cartDefault.push(t.spGioHang),e.cartDefault=Object(N.a)(e.cartDefault),Object(E.a)({},e);case"XOA_GIO_HANG":var n=e.cartDefault.findIndex((function(e){return e.id===t.id}));return-1!==n&&e.cartDefault.splice(n,1),e.cartDefault=Object(N.a)(e.cartDefault),Object(E.a)({},e);case"TANG_GIAM_SO_LUONG":var r=e.cartDefault.findIndex((function(e){return e.id===t.id}));if(-1!==r)return t.increaseDecrease?e.cartDefault[r].quantity+=1:e.cartDefault[r].quantity>1?e.cartDefault[r].quantity-=1:alert("Minimum is 1"),e.cartDefault=Object(N.a)(e.cartDefault),Object(E.a)({},e);break;default:return Object(E.a)({},e)}},D={arrayBet:[{ma:"keo",img:"./img/gameOneTwo/keo.png",bet:!1},{ma:"bua",img:"./img/gameOneTwo/bua.png",bet:!1},{ma:"bao",img:"./img/gameOneTwo/bao.png",bet:!0}],result:"I love you 3000",roundWin:0,totalRound:0,computer:{ma:"keo",img:"./img/gameOneTwo/keo.png"}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHON_KEO_BUA_BAO":var a=Object(N.a)(e.arrayBet);return a=a.map((function(e,a){return e.ma===t.ma?Object(E.a)(Object(E.a)({},e),{},{bet:!0}):Object(E.a)(Object(E.a)({},e),{},{bet:!1})})),e.arrayBet=a,Object(E.a)({},e);case"RAN_DOM":var n=Math.floor(3*Math.random()),r=e.arrayBet[n];return e.computer=r,Object(E.a)({},e);case"END_GAME":var c=e.arrayBet.find((function(e){return!0===e.bet})),i=e.computer;switch(c.ma){case"keo":"keo"===i.ma?e.result="K\u1ebb t\xe1m l\u1ea1ng , ng\u01b0\u1eddi n\u1eeda c\xe2n":"bua"===i.ma?e.result="Ngu d\u1ed1t":e.result="U l\xe0 tr\u1eddi";break;case"bua":"keo"===i.ma?e.result="Tu\u1ed5i loz":"bua"===i.ma?e.result="tr\u1eddi sinh du sao c\xf2n sinh l\u01b0\u1ee3ng":e.result="C\xf2n c\xe1i n\u1ecbt";break;case"bao":"keo"===i.ma?e.result="H\xf4ng b\xe9 \u01a1i ":"bua"===i.ma?e.result="I love you 3000":e.result="B\u1ea5t ph\xe2n th\u1eafng b\u1ea1i";break;default:e.result="Are you ready to play"}return Object(E.a)({},e);default:return Object(E.a)({},e)}},X=Object(j.a)({stateCart:T,BaitapXucXacReducer:x,OneTwoThreeReducer:_}),B=Object(j.b)(X);i.a.render(r.a.createElement(m.a,{store:B},r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.8bfbadee.chunk.js.map