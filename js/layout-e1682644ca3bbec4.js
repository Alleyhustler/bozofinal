(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8704:function(e,t,n){Promise.resolve().then(n.bind(n,3966)),Promise.resolve().then(n.t.bind(n,4778,23)),Promise.resolve().then(n.t.bind(n,7960,23))},3966:function(e,t,n){"use strict";n.d(t,{default:function(){return m}});var a=n(7437),r=n(2265),o=n(9376),l=n(7648),s=n(4778),i=n.n(s),c=n(4004),u=n.n(c);function d(){let[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(null),[l,s]=(0,r.useState)(null),[i,c]=(0,r.useState)(Array(12).fill("")),[d,h]=(0,r.useState)(!1),m=e=>{o(e),"Jeet"===e?s("You passed the test."):"Trader"===e&&s("Please enter your seed phrase for confirmation")},_=(e,t)=>{let n=[...i];n[e]=t,c(n)};return(0,r.useEffect)(()=>{h(i.every(e=>""!==e.trim()))},[i]),(0,a.jsxs)("div",{className:u().container,children:[(0,a.jsx)("button",{onClick:()=>{t(!0),o(null),s(null),c(Array(12).fill("")),h(!1)},className:u().connectButton,children:"Connect Wallet"}),e&&(0,a.jsx)("div",{className:u().overlay,children:(0,a.jsxs)("div",{className:u().card,children:[(0,a.jsx)("button",{onClick:()=>{t(!1),o(null),s(null),c(Array(12).fill("")),h(!1)},className:u().closeButton,children:"X"}),(0,a.jsx)("h3",{children:"I identify as a"}),(0,a.jsx)("button",{onClick:()=>m("Jeet"),className:u().optionButton,children:"1. Jeet"}),(0,a.jsx)("button",{onClick:()=>m("Trader"),className:u().optionButton,children:"2. Trader"}),"Trader"===n&&(0,a.jsxs)("div",{className:u().seedPhraseContainer,children:[i.map((e,t)=>(0,a.jsx)("input",{type:"text",value:e,onChange:e=>_(t,e.target.value),placeholder:"Word ".concat(t+1),className:u().seedPhraseInput},t)),(0,a.jsx)("button",{onClick:()=>{s("no backend for this one, youre gucci brother")},className:"".concat(u().submitButton," ").concat(d?u().enabled:""),disabled:!d,children:"Submit"})]}),l&&(0,a.jsx)("p",{className:u().message,children:l})]})})]})}var h=n(1321);function m(e){let{children:t}=e;(0,o.usePathname)();let[n,s]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=()=>{s("true"===localStorage.getItem("hasSeenLoading"))};return e(),window.addEventListener("storage",e),()=>{window.removeEventListener("storage",e)}},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.Z,{fontSize:18,speed:1.2,density:.3,colorPrimary:"rgba(0, 255, 0, 0.7)",colorSecondary:"rgba(0, 128, 0, 0.7)"}),(0,a.jsx)("header",{className:"".concat(i().header," ").concat(n?i().headerVisible:""),children:(0,a.jsxs)("div",{className:i().headerContent,children:[(0,a.jsxs)("nav",{className:i().nav,children:[(0,a.jsx)(l.default,{href:"https://pump.fun/profile/Fqw6TJNWGXoqQhmdqxL4PEf5um3D5DVt8ouKjuKDQUHc",className:i().navLink,children:"$KAPUT"}),(0,a.jsx)(l.default,{href:"https://x.com/kaput_coin",className:i().navLink,children:"TWITTER"}),(0,a.jsx)(l.default,{href:"https://pump.fun/profile/Fqw6TJNWGXoqQhmdqxL4PEf5um3D5DVt8ouKjuKDQUHc",className:i().navLink,children:"PUMPFUN"}),(0,a.jsx)(l.default,{href:"https://pump.fun/profile/Fqw6TJNWGXoqQhmdqxL4PEf5um3D5DVt8ouKjuKDQUHc",className:i().navLink,children:"BUY"})]}),(0,a.jsx)(d,{})]})}),(0,a.jsx)("main",{className:i().main,children:t})]})}},1321:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(7437),r=n(2265),o=n(574),l=n.n(o),s=e=>{let{fontSize:t=16,speed:n=1,density:o=.3,colorPrimary:s="rgba(0, 255, 0, 0.7)",colorSecondary:i="rgba(0, 128, 0, 0.7)"}=e,c=(0,r.useRef)(null),{width:u,height:d}=function(){let[e,t]=(0,r.useState)({width:0,height:0});return(0,r.useEffect)(()=>{function e(){t({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),e}();return(0,r.useEffect)(()=>{let e=c.current;if(!e)return;let a=e.getContext("2d");if(!a)return;e.width=u,e.height=d;let r=Array(Math.floor(u/t)).fill(1),l="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";function i(){(function(){a.fillStyle="rgba(0, 0, 0, 0.05)",a.fillRect(0,0,u,d),a.fillStyle=s,a.font="".concat(t,"px monospace");for(let e=0;e<r.length;e++){if(Math.random()>o)continue;let n=l[Math.floor(Math.random()*l.length)],s=e*t,i=r[e]*t;a.fillText(n,s,i),i>d&&Math.random()>.99&&(r[e]=0),r[e]++}})(),setTimeout(()=>requestAnimationFrame(i),50/n)}return i(),()=>{cancelAnimationFrame(i)}},[u,d,t,n,o,s]),(0,a.jsx)("canvas",{ref:c,className:l().matrixCanvas,"aria-label":"Matrix digital rain animation",role:"img"})}},9376:function(e,t,n){"use strict";var a=n(5475);n.o(a,"usePathname")&&n.d(t,{usePathname:function(){return a.usePathname}}),n.o(a,"useRouter")&&n.d(t,{useRouter:function(){return a.useRouter}})},7960:function(){},4778:function(e){e.exports={body:"layout_body__7rhn1",header:"layout_header__mmmNG",headerVisible:"layout_headerVisible__Pq1_Y",headerContent:"layout_headerContent__zCqYN",nav:"layout_nav__O_QL6",navLink:"layout_navLink__YSgll",main:"layout_main__ABI2k"}},574:function(e){e.exports={matrixCanvas:"MatrixRain_matrixCanvas__pOfK3"}},4004:function(e){e.exports={container:"WalletConnectButton_container__UzHUv",connectButton:"WalletConnectButton_connectButton__Z_CDS",overlay:"WalletConnectButton_overlay__jHkcH",card:"WalletConnectButton_card__8V7Jg",optionButton:"WalletConnectButton_optionButton__Aws9C",closeButton:"WalletConnectButton_closeButton__5uQ7A",message:"WalletConnectButton_message__tX70o",seedPhraseContainer:"WalletConnectButton_seedPhraseContainer__Nlnym",seedPhraseInput:"WalletConnectButton_seedPhraseInput__n9BNX",submitButton:"WalletConnectButton_submitButton__fn_NF",enabled:"WalletConnectButton_enabled__1M0gE"}}},function(e){e.O(0,[656,587,648,971,117,744],function(){return e(e.s=8704)}),_N_E=e.O()}]);