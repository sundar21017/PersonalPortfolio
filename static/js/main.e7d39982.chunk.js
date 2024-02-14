(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(9),i=n(3),c=n(1),s=n(0),l=Object(c.createContext)(),r=function(e){var t=e.children,n=Object(c.useState)("light"),a=Object(i.a)(n,2),r=a[0],o=a[1];Object(c.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://github.com/sundar21017",d="SP.",j="Sundar",u="Full Stack Developer",h="Highly skilled and experienced Full Stack Developer with 3 years of hands-on expertise in designing, developing, and implementing complex web applications. Proficient in both front-end and back-end technologies, adept at translating client requirements into scalable, reliable software solutions. Proven track record of collaborating with cross-functional teams to deliver projects on time and within budget.",b="src/assets/Resume.pdf",m={linkedin:"www.linkedin.com/in/sundara-pandian-85ba0a19b",github:"https://github.com/sundar21017"},p=[{name:"Square Now",description:"SquareNow is our flagship product, designed to provide an all-encompassing solution for financial institutions. From monitoring field officers activities to seamlessly managing financial data and even creating balance sheets and profit and loss statements, SquareNow is the quintessential LMS that transforms the way lending institutions operate",stack:["Angular Js","Javascript","Php"],sourceCode:"",livePreview:"https://kapiital.com/index.php/project/squarenow/"},{name:"Pookadai",description:"Pookadai is an one stop solution for your daily flower needs. With our solution we make your daily prayers really easy by giving the seemless experience of not just delivering the flower we take care of right flower on the right day. Download the Pookadai app on your phone",stack:["React","Javascript","Php"],sourceCode:"",livePreview:"https://pookadai.co.in/"},{name:"Get It Now",description:"GetItNow product of Kapiital Kapslock is a mobile app-based platform that provides Instant loans for Salaried Professionals and College Students (from recognized educational institutions). The loans availed are instantly credited to your Bank account.",stack:["React","Javascript","Php"],sourceCode:"",livePreview:"https://getitnow.digital/"},{name:"PaisaNow",description:"Our revolutionary PaisaNow is a marketplace application that ensures a complete phygital platform. It streamlines onboarding processes, verification, and application through a distributed ledger based on blockchain technology, ensuring security and efficiency in the lending process",stack:["React","Javascript","Php"],sourceCode:"",livePreview:"https://getitnow.digital/"}],f=["HTML","CSS","JavaScript","React Js","React Native","Expo","Redux","SASS","Material UI","Git","Php","Mysql","Angular Js","Rest API","Context API","Payment Gateway"],O="ssundar21017@gmail.com",x=n(16),g=n.n(x),v=n(14),k=n.n(v),N=n(18),w=n.n(N),_=n(17),y=n.n(_),P=(n(28),function(){var e=Object(c.useContext)(l),t=Object(i.a)(e,1)[0],n=t.themeName,a=t.toggleTheme,r=Object(c.useState)(!1),o=Object(i.a)(r,2),d=o[0],j=o[1],u=function(){return j(!d)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:d?"flex":null},className:"nav__list",children:[p.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:u,className:"link link--nav",children:"Projects"})}):null,f.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:u,className:"link link--nav",children:"Skills"})}):null,O?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:u,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:a,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(k.a,{}):Object(s.jsx)(g.a,{})}),Object(s.jsx)("button",{type:"button",onClick:u,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:d?Object(s.jsx)(y.a,{}):Object(s.jsx)(w.a,{})})]})}),S=(n(32),function(){var e=o,t=d;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(P,{})]})}),C=n(11),I=n.n(C),J=n(19),R=n.n(J),E=(n(33),function(){var e=j,t=u,n=h,a=b,i=m;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:n&&n}),Object(s.jsxs)("div",{className:"about__contact center",children:[a&&Object(s.jsx)("span",{type:"button",className:"btn btn--outline",onClick:function(){window.open(a,"_blank")},children:"Resume"}),i&&Object(s.jsxs)(s.Fragment,{children:[i.github&&Object(s.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(I.a,{})}),i.linkedin&&Object(s.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(R.a,{})})]})]})]})}),q=n(7),A=n.n(q),L=n(20),M=n.n(L),F=(n(35),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},A()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(I.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(M.a,{})})]})}),G=(n(36),function(){return p.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(s.jsx)(F,{project:e},A()())}))})]}):null}),T=(n(37),function(){return f.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:f.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},A()())}))})]}):null}),B=n(21),D=n.n(B),H=(n(38),function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=function(){return window.pageYOffset>500?a(!0):a(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(D.a,{fontSize:"large"})})}):null}),z=(n(39),function(){return O?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(O),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),K=(n(40),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://github.com/sundar21017",className:"link footer__link",children:"Created By Sundar"})})}),U=(n(41),function(){var e=Object(c.useContext)(l),t=Object(i.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(S,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(E,{}),Object(s.jsx)(G,{}),Object(s.jsx)(T,{}),Object(s.jsx)(z,{})]}),Object(s.jsx)(H,{}),Object(s.jsx)(K,{})]})});n(42);Object(a.render)(Object(s.jsx)(r,{children:Object(s.jsx)(U,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.e7d39982.chunk.js.map