(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){e.exports=a(83)},49:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var l=a(5),n=a(6),r=a(8),c=a(7),i=a(1),o=a.n(i),s=a(38),m=a.n(s),u=(a(49),a(20)),d=a.n(u),g=a(9),E=a(39),p=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E.Helmet,null,o.a.createElement("title",null,this.props.pageTitle," || React Multipurpose Template "),o.a.createElement("meta",{name:"description",content:"Trydo \u2013 Multipurpose React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Trydo React Template will create that various landing Template, Creative Agency, And Corporate Website ."})))}}]),a}(i.Component),h=a(43),v=a(16),b=a(14),f=a(40),N=a.n(f),y=[{Social:o.a.createElement(b.a,null),link:"https://www.facebook.com/"},{Social:o.a.createElement(b.c,null),link:"https://www.linkedin.com/"},{Social:o.a.createElement(b.b,null),link:"https://www.instagram.com/"},{Social:o.a.createElement(b.d,null),link:"https://twitter.com/"}],w=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).menuTrigger=n.menuTrigger.bind(Object(v.a)(n)),n.CLoseMenuTrigger=n.CLoseMenuTrigger.bind(Object(v.a)(n)),n.stickyHeader=n.stickyHeader.bind(Object(v.a)(n)),window.addEventListener("load",function(){console.log("All assets are loaded")}),n}return Object(n.a)(a,[{key:"menuTrigger",value:function(){document.querySelector(".header-wrapper").classList.toggle("menu-open")}},{key:"CLoseMenuTrigger",value:function(){document.querySelector(".header-wrapper").classList.remove("menu-open")}},{key:"stickyHeader",value:function(){}},{key:"render",value:function(){window.addEventListener("scroll",function(){window.scrollY>100?document.querySelector(".header--fixed").classList.add("sticky"):document.querySelector(".header--fixed").classList.remove("sticky")});var e=document.querySelectorAll(".has-droupdown > a");for(var t in e)e.hasOwnProperty(t)&&(e[t].onclick=function(){this.parentElement.querySelector(".submenu").classList.toggle("active"),this.classList.toggle("open")});var a,l=this.props,n=l.logo,r=l.color,c=void 0===r?"default-color":r;return a="light"===n?o.a.createElement("img",{src:"/assets/images/logo/logo-light.png",alt:"Digital Agency"}):"dark"===n?o.a.createElement("img",{src:"/assets/images/logo/logo-dark.png",alt:"Digital Agency"}):"symbol-dark"===n?o.a.createElement("img",{src:"/assets/images/logo/logo-symbol-dark.png",alt:"Digital Agency"}):"symbol-light"===n?o.a.createElement("img",{src:"/assets/images/logo/logo-symbol-light.png",alt:"Digital Agency"}):o.a.createElement("img",{src:"/assets/images/logo/logo.png",alt:"Digital Agency"}),o.a.createElement("header",{className:"header-area header-style-two header--fixed ".concat(c)},o.a.createElement("div",{className:"header-wrapper"},o.a.createElement("div",{className:"header-left d-flex align-items-center"},o.a.createElement("div",{className:"logo"},o.a.createElement("a",{href:this.props.homeLink},a)),o.a.createElement("nav",{className:"mainmenunav d-lg-block ml--50"},o.a.createElement(N.a,{className:"mainmenu",items:["home","about","service","portfolio","blog","contact"],currentClassName:"is-current",offset:-200},o.a.createElement("li",null,o.a.createElement("a",{href:"#home"},"Home")),o.a.createElement("li",null,o.a.createElement("a",{href:"#about"},"About")),o.a.createElement("li",null,o.a.createElement("a",{href:"#service"},"Service")),o.a.createElement("li",null,o.a.createElement("a",{href:"#portfolio"},"Portfolio")),o.a.createElement("li",null,o.a.createElement("a",{href:"#blog"},"Blog")),o.a.createElement("li",null,o.a.createElement("a",{href:"#contact"},"Contact"))))),o.a.createElement("div",{className:"header-right"},o.a.createElement("div",{className:"social-share-inner"},o.a.createElement("ul",{className:"social-share social-style--2 color-black d-flex justify-content-start liststyle"},y.map(function(e,t){return o.a.createElement("li",{key:t},o.a.createElement("a",{href:"".concat(e.link)},e.Social))}))),o.a.createElement("div",{className:"header-btn"},o.a.createElement("a",{className:"rn-btn",href:"https://themeforest.net/checkout/from_item/25457315?license=regular"},o.a.createElement("span",null,"buy now"))),o.a.createElement("div",{className:"humberger-menu d-block d-lg-none pl--20"},o.a.createElement("span",{onClick:this.menuTrigger,className:"menutrigger text-white"},o.a.createElement(g.d,null))),o.a.createElement("div",{className:"close-menu d-block d-lg-none"},o.a.createElement("span",{onClick:this.CLoseMenuTrigger,className:"closeTrigger"},o.a.createElement(g.g,null))))))}}]),a}(i.Component),k=[{Social:o.a.createElement(b.a,null),link:"https://www.facebook.com/"},{Social:o.a.createElement(b.c,null),link:"https://www.linkedin.com/"},{Social:o.a.createElement(b.b,null),link:"https://www.instagram.com/"},{Social:o.a.createElement(b.d,null),link:"https://twitter.com/"}],j=function(){return o.a.createElement("div",{className:"footer-style-2 ptb--30 bg_image bg_image--1","data-black-overlay":"6"},o.a.createElement("div",{className:"wrapper plr--50 plr_sm--20"},o.a.createElement("div",{className:"row align-items-center justify-content-between"},o.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12"},o.a.createElement("div",{className:"inner"},o.a.createElement("div",{className:"logo text-center text-sm-left mb_sm--20"},o.a.createElement("a",{href:"/home-one"},o.a.createElement("img",{src:"/assets/images/logo/logo.png",alt:"Logo images"}))))),o.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12"},o.a.createElement("div",{className:"inner text-center"},o.a.createElement("ul",{className:"social-share rn-lg-size d-flex justify-content-center liststyle"},k.map(function(e,t){return o.a.createElement("li",{key:t},o.a.createElement("a",{href:"".concat(e.link)},e.Social))})))),o.a.createElement("div",{className:"col-lg-4 col-md-12 col-sm-12 col-12"},o.a.createElement("div",{className:"inner text-lg-right text-center mt_md--20 mt_sm--20"},o.a.createElement("div",{className:"text"},o.a.createElement("p",null,"Copyright \xa9 2020 Rainbow-Themes. All Rights Reserved.")))))))},x=a(13),S=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var e=this.props.tabStyle;return o.a.createElement("div",null,o.a.createElement("div",{className:"tabs-area"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement(x.d,null,o.a.createElement(x.b,{className:"".concat(e)},o.a.createElement(x.a,null,"Main skills"),o.a.createElement(x.a,null,"Awards"),o.a.createElement(x.a,null,"Experience"),o.a.createElement(x.a,null,"Education & Certification")),o.a.createElement(x.c,null,o.a.createElement("div",{className:"single-tab-content"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"User experience design ",o.a.createElement("span",null," - UI/UX")),"Delight the user and make it work."),o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"Web and user interface design",o.a.createElement("span",null," - Development")),"Websites, web experiences, ..."),o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"Interaction design ",o.a.createElement("span",null," - Animation")),"I like to move it move it.")))),o.a.createElement(x.c,null,o.a.createElement("div",{className:"single-tab-content"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"Awwwards.com ",o.a.createElement("span",null,"- Winner"))," 2019 - 2020"),o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"CSS Design Awards ",o.a.createElement("span",null,"- Winner"))," 2017 - 2018"),o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"Design nominees ",o.a.createElement("span",null,"- site of the day"))," 2013- 2014")))),o.a.createElement(x.c,null,o.a.createElement("div",{className:"single-tab-content"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"Sr. Front-end Engineer",o.a.createElement("span",null," - Google"))," 2018 - Current"),o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"Front-end Engineer",o.a.createElement("span",null," - Microsoft"))," 2017 - 2018"),o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"Software Engineer",o.a.createElement("span",null," - Alibaba "))," 2013- 2014")))),o.a.createElement(x.c,null,o.a.createElement("div",{className:"single-tab-content"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"BSc In CSE",o.a.createElement("span",null," - ABC University, Los Angeles, CA"))," 2010"),o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"Diploma in Computer Science",o.a.createElement("span",null," - Gamma Technical Institute"))," 2009"),o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"Graphic Designer",o.a.createElement("span",null," - ABC Institute, Los Angeles, CA"))," 2007"))))))))))}}]),a}(i.Component),C=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={rnName:"",rnEmail:"",rnSubject:"",rnMessage:""},n}return Object(n.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"contact-form--1"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row row--35 align-items-start"},o.a.createElement("div",{className:"col-lg-6 order-2 order-lg-1"},o.a.createElement("div",{className:"section-title text-left mb--50"},o.a.createElement("h2",{className:"title"},this.props.contactTitle),o.a.createElement("p",{className:"description"},"I am available for freelance work. Connect with me via phone: ",o.a.createElement("a",{href:"tel:+8801923088574"},"01923 088574")," or email:",o.a.createElement("a",{href:"mailto:admin@example.com"}," admin@example.com")," ")),o.a.createElement("div",{className:"form-wrapper"},o.a.createElement("form",null,o.a.createElement("label",{htmlFor:"item01"},o.a.createElement("input",{type:"text",name:"name",id:"item01",value:this.state.rnName,onChange:function(t){e.setState({rnName:t.target.value})},placeholder:"Your Name *"})),o.a.createElement("label",{htmlFor:"item02"},o.a.createElement("input",{type:"text",name:"email",id:"item02",value:this.state.rnEmail,onChange:function(t){e.setState({rnEmail:t.target.value})},placeholder:"Your email *"})),o.a.createElement("label",{htmlFor:"item03"},o.a.createElement("input",{type:"text",name:"subject",id:"item03",value:this.state.rnSubject,onChange:function(t){e.setState({rnSubject:t.target.value})},placeholder:"Write a Subject"})),o.a.createElement("label",{htmlFor:"item04"},o.a.createElement("textarea",{type:"text",id:"item04",name:"message",value:this.state.rnMessage,onChange:function(t){e.setState({rnMessage:t.target.value})},placeholder:"Your Message"})),o.a.createElement("button",{className:"rn-button-style--2 btn-solid",type:"submit",value:"submit",name:"submit",id:"mc-embedded-subscribe"},"Submit")))),o.a.createElement("div",{className:"col-lg-6 order-1 order-lg-2"},o.a.createElement("div",{className:"thumbnail mb_md--30 mb_sm--30"},o.a.createElement("img",{src:"".concat(this.props.contactImages),alt:"trydo"}))))))}}]),a}(i.Component),O=[{image:"image-1",category:"Development",title:"Getting tickets to the big show"},{image:"image-2",category:"Development",title:"Getting tickets to the big show"},{image:"image-3",category:"Development",title:"Getting tickets to the big show"},{image:"image-4",category:"Development",title:"Getting tickets to the big show"},{image:"image-3",category:"Development",title:"Getting tickets to the big show"},{image:"image-4",category:"Development",title:"Getting tickets to the big show"}],A=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var e=this.props,t=e.column,a=e.styevariation,l=O.slice(0,this.props.item);return o.a.createElement(o.a.Fragment,null,l.map(function(e,l){return o.a.createElement("div",{className:"".concat(t),key:l},o.a.createElement("div",{className:"portfolio ".concat(a)},o.a.createElement("div",{className:"thumbnail-inner"},o.a.createElement("div",{className:"thumbnail ".concat(e.image)}),o.a.createElement("div",{className:"bg-blr-image ".concat(e.image)})),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"inner"},o.a.createElement("p",null,e.category),o.a.createElement("h4",null,o.a.createElement("a",{href:"/portfolio-details"},e.title)),o.a.createElement("div",{className:"portfolio-button"},o.a.createElement("a",{className:"rn-btn",href:"/portfolio-details"},"View Details"))))))}))}}]),a}(i.Component),T=[{icon:o.a.createElement(g.a,null),title:"Business Stratagy",description:"I throw myself down among the tall grass by the stream as I lie close to the earth."},{icon:o.a.createElement(g.c,null),title:"Website Development",description:"I throw myself down among the tall grass by the stream as I lie close to the earth."},{icon:o.a.createElement(g.f,null),title:"Marketing & Reporting",description:"I throw myself down among the tall grass by the stream as I lie close to the earth."},{icon:o.a.createElement(g.e,null),title:"Mobile App Development",description:"I throw myself down among the tall grass by the stream as I lie close to the earth."},{icon:o.a.createElement(g.f,null),title:"Marketing & Reporting",description:"I throw myself down among the tall grass by the stream as I lie close to the earth."},{icon:o.a.createElement(g.e,null),title:"Mobile App Development",description:"I throw myself down among the tall grass by the stream as I lie close to the earth."}],I=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var e=this.props.column,t=T.slice(0,this.props.item);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"row"},t.map(function(t,a){return o.a.createElement("div",{className:"".concat(e),key:a},o.a.createElement("a",{href:"/service-details"},o.a.createElement("div",{className:"service service__style--2"},o.a.createElement("div",{className:"icon"},t.icon),o.a.createElement("div",{className:"content"},o.a.createElement("h3",{className:"title"},t.title),o.a.createElement("p",null,t.description)))))})))}}]),a}(i.Component),L=[{images:"01",title:" Getting tickets to the big show",category:"Development"},{images:"02",title:"A big ticket gone to be an interesting ",category:"Management"},{images:"03",title:"The Home of the Future Could Bebes",category:"Design"},{images:"04",title:" Getting tickets to the big show",category:"Development"},{images:"01",title:"A big ticket gone to be an interesting ",category:"Management"},{images:"02",title:"The Home of the Future Could Bebes",category:"Design"}],D=[{textPosition:"text-left",category:"Welcome to my World",description:"",buttonText:"",buttonLink:""}],M=function(){var e=L.slice(0,3);return o.a.createElement("div",{className:"active-dark"},o.a.createElement(p,{pageTitle:"Portfolio Landing"}),o.a.createElement(w,{homeLink:"/",logo:"symbol-dark",color:"color-black"}),o.a.createElement("div",{id:"home",className:"fix"},o.a.createElement("div",{className:"slider-wrapper"},D.map(function(e,t){return o.a.createElement("div",{className:"slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25",key:t},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"inner ".concat(e.textPosition)},e.category?o.a.createElement("span",null,e.category):"",o.a.createElement("h1",{className:"title"},"Hi, I\u2019m Charitha ",o.a.createElement("br",null),o.a.createElement(h.a,null,o.a.createElement("span",null," JS Developer."),o.a.createElement("span",null," UI/UX Designer."),o.a.createElement("span",null," Frontend Lover."))," "),o.a.createElement("h2",null,"based in Sri Lanka."),e.description?o.a.createElement("p",{className:"description"},e.description):"",e.buttonText?o.a.createElement("div",{className:"slide-btn"},o.a.createElement("a",{className:"rn-button-style--2 btn-primary-color",href:"".concat(e.buttonLink)},e.buttonText)):"")))))}))),o.a.createElement("div",{id:"about",className:"fix"},o.a.createElement("div",{className:"about-area ptb--120  bg_color--1"},o.a.createElement("div",{className:"about-wrapper"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row row--35 align-items-center"},o.a.createElement("div",{className:"col-lg-5"},o.a.createElement("div",{className:"thumbnail"},o.a.createElement("img",{className:"w-100",src:"/assets/images/about/about-8.jpg",alt:"About Images"}))),o.a.createElement("div",{className:"col-lg-7"},o.a.createElement("div",{className:"about-inner inner"},o.a.createElement("div",{className:"section-title"},o.a.createElement("h2",{className:"title"},"About Me"),o.a.createElement("p",{className:"description"},'There are many variations of passages of Lorem Ipsum available, but the majority have suffered <a href="#">alteration</a> in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,')),o.a.createElement("div",{className:"row mt--30"},o.a.createElement(S,{tabStyle:"tab-style--1"}))))))))),o.a.createElement("div",{id:"service",className:"fix"},o.a.createElement("div",{className:"service-area creative-service-wrapper ptb--120 bg_color--5"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"section-title text-center service-style--3 mb--30 mb_sm--0"},o.a.createElement("h2",{className:"title"},"My Awesome Service"),o.a.createElement("p",null,"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.")))),o.a.createElement("div",{className:"row creative-service"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement(I,{item:"6",column:"col-lg-4 col-md-6 col-sm-6 col-12 text-left"})))))),o.a.createElement("div",{id:"portfolio",className:"fix"},o.a.createElement("div",{className:"portfolio-area ptb--120 bg_color--1"},o.a.createElement("div",{className:"portfolio-sacousel-inner"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"section-title text-center service-style--3 mb--30 mb_sm--0"},o.a.createElement("h2",{className:"title"},"My Latest Project"),o.a.createElement("p",null,"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.")))),o.a.createElement("div",{className:"row"},o.a.createElement(A,{styevariation:"text-center mt--40",column:"col-lg-4 col-md-6 col-sm-6 col-12",item:"6"})),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"view-more-btn mt--60 mt_sm--30 text-center"},o.a.createElement("a",{className:"rn-button-style--2 btn-solid",href:"/blog"},o.a.createElement("span",null,"View More"))))))))),o.a.createElement("div",{id:"blog",className:"fix"},o.a.createElement("div",{className:"rn-blog-area ptb--120 bg_color--5 mb-dec--30"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row align-items-end"},o.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-12"},o.a.createElement("div",{className:"section-title text-center"},o.a.createElement("h2",null,"Latest News"),o.a.createElement("p",null,"There are many variations of passages of Lorem Ipsum available, ",o.a.createElement("br",null),"but the majority have suffered alteration.")))),o.a.createElement("div",{className:"row mt--60 mt_sm--40"},e.map(function(e,t){return o.a.createElement("div",{className:"col-lg-4 col-md-6 col-12",key:t},o.a.createElement("div",{className:"blog blog-style--1"},o.a.createElement("div",{className:"thumbnail"},o.a.createElement("a",{href:"/blog-details"},o.a.createElement("img",{className:"w-100",src:"/assets/images/blog/blog-".concat(e.images,".jpg"),alt:"Blog Images"}))),o.a.createElement("div",{className:"content"},o.a.createElement("p",{className:"blogtype"},e.category),o.a.createElement("h4",{className:"title"},o.a.createElement("a",{href:"/blog-details"},e.title)),o.a.createElement("div",{className:"blog-btn"},o.a.createElement("a",{className:"rn-btn text-white",href:"/blog-details"},"Read More")))))}))))),o.a.createElement("div",{id:"contact",className:"fix"},o.a.createElement("div",{className:"rn-contact-area ptb--120 bg_color--1"},o.a.createElement(C,{contactImages:"/assets/images/about/about-9.jpg",contactTitle:"Hire Me."}))),o.a.createElement(j,null),o.a.createElement("div",{className:"backto-top"},o.a.createElement(d.a,{showUnder:160},o.a.createElement(g.b,null))))},_=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"error-page-inner bg_color--4"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"inner"},o.a.createElement("h1",{className:"title theme-gradient"},"404!"),o.a.createElement("h3",{className:"sub-title"},"Page not found"),o.a.createElement("span",null,"The page you were looking for could not be found."),o.a.createElement("div",{className:"error-button"},o.a.createElement("a",{className:"rn-button-style--2 btn-solid",href:"/"},"Back To Homepage"))))))),o.a.createElement("div",{className:"backto-top"},o.a.createElement(d.a,{showUnder:160},o.a.createElement(g.b,null))),o.a.createElement(j,null))}}]),a}(i.Component),W=a(41),F=a(2),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var G=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return o.a.createElement(W.a,{basename:"/"},o.a.createElement(F.c,null,o.a.createElement(F.a,{exact:!0,path:"".concat("/portfolio/dark-portfolio-landing","/"),component:M}),o.a.createElement(F.a,{exact:!0,path:"".concat("/portfolio/dark-portfolio-landing","/dark-portfolio-landing"),component:M}),o.a.createElement(F.a,{path:"".concat("/portfolio/dark-portfolio-landing","/404"),component:_}),o.a.createElement(F.a,{component:_})))}}]),a}(i.Component);m.a.render(o.a.createElement(G,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/portfolio/dark-portfolio-landing",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/portfolio/dark-portfolio-landing","/service-worker.js");R?(function(e,t){fetch(e).then(function(a){var l=a.headers.get("content-type");404===a.status||null!=l&&-1===l.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):B(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):B(t,e)})}}()}},[[44,1,2]]]);
//# sourceMappingURL=main.bd7c1cb9.chunk.js.map