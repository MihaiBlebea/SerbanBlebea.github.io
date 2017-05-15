webpackJsonp([0],[,,,,,,,,,,,,,function(t,e,a){"use strict";var n=a(1),i=a(99),s=a(28);n.a.use(i.a),e.a=new i.a({mode:"history",scrollBehavior:function(t,e,a){return t.hash?{selector:t.hash}:{x:0,y:0}},routes:[{path:"/",name:"HomePage",component:s.a},{path:"/about",name:"AboutPage",component:s.b},{path:"/contact",name:"ContactPage",component:s.c},{path:"/project/:id",name:"ProjectPage",component:s.d,props:!0}]})},function(t,e,a){"use strict";var n=a(1),i=a(2),s=a(32);n.a.use(i.a),e.a=new i.a.Store({modules:{projects:s.a}})},function(t,e,a){a(66);var n=a(0)(a(16),a(90),"data-v-2daeb6fa",null);t.exports=n.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3),i=a.n(n),s=a(2);e.default={name:"about",data:function(){return{}},computed:i()({},a.i(s.b)({details:"getDetails"}))}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"arrow",props:["anchor"],data:function(){return{}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"contact",data:function(){return{}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"contact_page",data:function(){return{}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"buttom-footer",data:function(){return{}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3),i=a.n(n),s=a(2);e.default={name:"home",data:function(){return{}},computed:i()({},a.i(s.b)({projects:"getProjects"}))}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"navigation",data:function(){return{}},mounted:function(){document.onscroll=function(){window.scrollY>=80?document.getElementById("navigation").className="navigation is-hidden":document.getElementById("navigation").className="navigation"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"profil",data:function(){return{}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"project",props:["index","name","description","link","image"],data:function(){return{}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3),i=a.n(n),s=a(2);e.default={name:"project_page",props:["id"],data:function(){return{}},computed:i()({},a.i(s.b)({projects:"getProjects"}))}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"social_buttons",data:function(){return{}}}},function(t,e,a){"use strict";a.d(e,"d",function(){return i}),a.d(e,"b",function(){return s}),a.d(e,"c",function(){return r}),a.d(e,"a",function(){return o});var n=a(1),i=(n.a.component("navigation",a(82)),n.a.component("arrow",a(77)),n.a.component("social_buttons",a(86)),n.a.component("project",a(84)),n.a.component("buttom-footer",a(80)),n.a.component("profil",a(83)),n.a.component("contact",a(78)),n.a.component("project_page",a(85))),s=n.a.component("about",a(76)),r=n.a.component("contact_page",a(79)),o=n.a.component("home",a(81))},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1),i=a(15),s=a.n(i),r=a(13),o=a(14);n.a.config.productionTip=!1,new n.a({el:"#app",router:r.a,store:o.a,template:"<App/>",components:{App:s.a}})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"getDetails",function(){return n});var n=function(t,e){(0,t.commit)("getProject",e)}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"getProjects",function(){return n}),a.d(e,"getSpecificProject",function(){return i});var n=function(t){return t.projects},i=function(t,e){var a=e.id;console.log(a);for(var n=0;n<t.projects.length;n++)if("AutomaticPost"==t.projects[n].name)return console.log(t.projects[n]),t.projects[n]}},function(t,e,a){"use strict";var n=a(34),i=a(31),s=a(33),r=a(30);e.a={namespace:!0,state:n.a,getters:i,mutations:s,actions:r}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"getProject",function(){return n});var n=function(t,e){for(var a=0;a<t.projects.length;a++)if(t.projects[a].name==e)return t.projects[a]}},function(t,e,a){"use strict";e.a={projects:[{name:"CSS BaseMaterial",description:"BaseMaterial is the building block of super fast and easy to use websites and web apps.",link:"https://github.com/SerbanBlebea/base-material",image:"https://raw.githubusercontent.com/SerbanBlebea/base-material/master/logo.png"},{name:"Just Post",description:"Welcome to the future of social media automation. Just Post is a web app that allows you to automate your social media efforts.",link:"www.default.com",image:"https://s-media-cache-ak0.pinimg.com/600x315/a9/97/09/a99709e2b55d46ddbb77c3be1cfb5038.jpg"},{name:"URL-Shortener",description:"URL-Shortener is a package for creating short url links that track conversions for Laravel apps or websites. Just like bit.ly, you can create your own url shortening service in your Laravel app.",link:"https://github.com/SerbanBlebea/url-shortener",image:"https://raw.githubusercontent.com/SerbanBlebea/url-shortener/master/img/url-shortener-logo.png"},{name:"QuizMaker",description:"This is a cool CSS framework built for fast apps and websites",link:"www.default.com",image:"https://s-media-cache-ak0.pinimg.com/600x315/a9/97/09/a99709e2b55d46ddbb77c3be1cfb5038.jpg"}]}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){t.exports=a.p+"static/img/serban.be03090.png"},function(t,e,a){a(73);var n=a(0)(a(17),a(97),"data-v-f308e78c",null);t.exports=n.exports},function(t,e,a){a(63);var n=a(0)(a(18),a(87),"data-v-002a8907",null);t.exports=n.exports},function(t,e,a){a(70);var n=a(0)(a(19),a(94),"data-v-7159341e",null);t.exports=n.exports},function(t,e,a){a(69);var n=a(0)(a(20),a(93),"data-v-587de84d",null);t.exports=n.exports},function(t,e,a){a(71);var n=a(0)(a(21),a(95),"data-v-78eb1ee6",null);t.exports=n.exports},function(t,e,a){a(68);var n=a(0)(a(22),a(92),"data-v-4e1f0200",null);t.exports=n.exports},function(t,e,a){a(72);var n=a(0)(a(23),a(96),"data-v-9abb38f4",null);t.exports=n.exports},function(t,e,a){a(65);var n=a(0)(a(24),a(89),"data-v-2d1dc0ae",null);t.exports=n.exports},function(t,e,a){a(67);var n=a(0)(a(25),a(91),"data-v-36e43697",null);t.exports=n.exports},function(t,e,a){a(74);var n=a(0)(a(26),a(98),"data-v-f93df374",null);t.exports=n.exports},function(t,e,a){a(64);var n=a(0)(a(27),a(88),"data-v-2226a65c",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("hr"),t._v(" "),a("i",{staticClass:"icon fa fa-caret-down",attrs:{"aria-hidden":"true"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("a",{attrs:{href:"https://www.facebook.com/blebea.serban"}},[a("i",{staticClass:"icon fa fa-facebook-square",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("a",{attrs:{href:"https://www.linkedin.com/in/blebea-serban-87353310b/"}},[a("i",{staticClass:"icon fa fa-linkedin-square",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("a",{attrs:{href:"https://github.com/SerbanBlebea"}},[a("i",{staticClass:"icon fa fa-github",attrs:{"aria-hidden":"true"}})])])}]}},function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box with-shadow bg-white"},[n("img",{attrs:{id:"image-serban",src:a(75)}}),t._v(" "),n("h3",[t._v("Serban Blebea")]),t._v(" "),n("p",[t._v("I am a self taught programmer, full stack developer and a classic car lover. I enjoy working as a freelancer.")]),t._v(" "),n("social_buttons")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navigation"),t._v(" "),a("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content centered padding-15"},[a("div",{staticClass:"pannel"},[a("router-link",{attrs:{to:{name:"ProjectPage",params:{id:t.index}}}},[a("div",{staticClass:"header is-clipped fixed is-alert"},[t._v("   \n                "+t._s(t.name)+" \n            ")])]),t._v(" "),a("div",{staticClass:"pannel-img"},[a("img",{attrs:{src:t.image}})]),t._v(" "),a("div",{staticClass:"body"},[a("p",{attrs:{id:"text"}},[t._v(t._s(t.description))])]),t._v(" "),a("router-link",{attrs:{to:{name:"ProjectPage",params:{id:t.index}}}},[a("button",{staticClass:"button is-info"},[t._v("Project details")])])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"container flex-row",attrs:{id:"first-line"}},[a("div",{staticClass:"content centered col-1",attrs:{id:"box-float"}},[a("profil")],1),t._v(" "),t._m(0)]),t._v(" "),t._m(1),t._v(" "),a("arrow",{staticClass:"arrow",attrs:{anchor:""}}),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"container flex-row",attrs:{id:"third-line"}},t._l(t.projects,function(t,e){return a("project",{key:e,attrs:{index:e,name:t.name,description:t.description,link:t.link,image:t.image}})})),t._v(" "),a("arrow",{staticClass:"arrow"}),t._v(" "),a("div",{staticClass:"container flex-row",attrs:{id:"forth-line"}},[a("contact")],1),t._v(" "),a("buttom-footer")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content col-1",attrs:{id:"pannel-top-right"}},[a("h1",[t._v("Simple code is better code")]),t._v(" "),a("p",{staticClass:"top"},[t._v("Web developer with both proven back-end and front-end experience and eager to constantly improve my skills and learn new technologies.")]),t._v(" "),a("p",{staticClass:"top"},[t._v("While my experience with programming is recent, my passion for programming led me to rapidly pick up new skills, technology and frameworks.")]),t._v(" "),a("p",{staticClass:"top"},[t._v("I have developed my own web application (www.justpostit.net) and, also, worked on various projects mainly composed with the following languages/tools: PHP/JavaSCript/HTML/CSS.")]),t._v(" "),a("p",{staticClass:"top"},[t._v("I am a problem solver, I have strong attention to details and a mindset of efficiency and creativity.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container flex-row",attrs:{id:"second-line"}},[a("div",{staticClass:"content col-1",attrs:{id:"pannel-bottom-left"}},[t._v("\n            Empty\n        ")]),t._v(" "),a("div",{staticClass:"content col-1",attrs:{id:"pannel-bottom-right"}},[a("h3",[t._v("Technical skills:")]),t._v(" "),a("p",{staticClass:"bottom"},[a("strong",[t._v("Front-end Development")]),t._v(" "),a("i",{staticClass:"fa fa-arrow-right",attrs:{"aria-hidden":"true"}}),t._v(" JavaScript, Vue JS ( + Vuex), JQuerry, Bootstrap, CSS, SASS (SCSS) – working knowledge;")]),t._v(" "),a("p",{staticClass:"bottom"},[a("strong",[t._v("Back-end Development")]),t._v(" "),a("i",{staticClass:"fa fa-arrow-right",attrs:{"aria-hidden":"true"}}),t._v(" PHP – strong knowledge; MCV, Laravel Web Development Framework - strong knowledge; OOP (Object-oriented programing) - strong knowledge; ")]),t._v(" "),a("p",{staticClass:"bottom"},[a("strong",[t._v("Preferred database management systems")]),t._v(" "),a("i",{staticClass:"fa fa-arrow-right",attrs:{"aria-hidden":"true"}}),t._v(" MySQL, MariaDB")]),t._v(" "),a("p",{staticClass:"bottom"},[a("strong",[t._v("Implemented APIs")]),t._v(" "),a("i",{staticClass:"fa fa-arrow-right",attrs:{"aria-hidden":"true"}}),t._v(" PayPal, Braintree, Facebook, Twitter, ActiveCampaign")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content centered"},[a("h1",{attrs:{id:"black-title"}},[t._v("My projects")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact"},[t._m(0),t._v(" "),a("div",{staticClass:"container flex-row"},[a("div",{staticClass:"content centered",attrs:{id:"float"}},[a("contact")],1)]),t._v(" "),a("buttom-footer")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container flex-row",attrs:{id:"first-line"}},[a("div",{staticClass:"content centered col-1"},[a("h1",[t._v("Find me at")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content centered"},[a("div",{staticClass:"pannel"},[a("div",{staticClass:"header fixed is-primary"},[t._v("\n            Contact information  \n        ")]),t._v(" "),a("div",{staticClass:"body"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("social_buttons",{attrs:{id:"social-buttons"}})],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divider"},[a("p",[a("strong",[t._v("Adress:")])]),t._v(" "),a("p",[t._v("UK, London, NW2 1UT")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divider"},[a("p",[a("strong",[t._v("Phone:")])]),t._v(" "),a("p",[t._v("+44 7405 734506")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divider"},[a("p",[a("strong",[t._v("Email:")])]),t._v(" "),a("p",[t._v("serbanmihai.blebea@gmail.com")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"content col-1",attrs:{id:"left"}},[a("router-link",{staticClass:"nav-item",attrs:{to:{name:"HomePage"}}},[t._v("Home")]),t._v(" "),a("router-link",{staticClass:"nav-item",attrs:{to:{name:"AboutPage"}}},[t._v("About")]),t._v(" "),a("router-link",{staticClass:"nav-item",attrs:{to:{name:"ContactPage"}}},[t._v("Contact")])],1),t._v(" "),a("div",{staticClass:"content col-1",attrs:{id:"right"}},[a("social_buttons")],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"navigation",attrs:{id:"navigation"}},[a("div",{staticClass:"nav-items left"},[a("router-link",{staticClass:"nav-item",attrs:{to:{name:"HomePage"},"exact-active-class":"is-active","active-class":""}},[t._v("Home")]),t._v(" "),a("router-link",{staticClass:"nav-item",attrs:{to:{name:"AboutPage"},"exact-active-class":"is-active","active-class":""}},[t._v("About")]),t._v(" "),a("router-link",{staticClass:"nav-item",attrs:{to:{name:"ContactPage"},"exact-active-class":"is-active","active-class":""}},[t._v("Contact")])],1),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-mobile-items"},[a("span",{staticClass:"nav-mobile-item",attrs:{id:"nav-mobile-item",onclick:"showDropdown('dropdown_1');"}},[t._v("Mobile")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-items right"},[a("a",{staticClass:"nav-item",attrs:{href:"https://www.facebook.com/blebea.serban"}},[a("i",{staticClass:"icon fa fa-facebook-square",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("a",{staticClass:"nav-item",attrs:{href:"form.php#nav_item_0"}},[a("i",{staticClass:"icon fa fa-linkedin-square",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("a",{staticClass:"nav-item",attrs:{href:"form.php#nav_item_2"}},[a("i",{staticClass:"icon fa fa-github",attrs:{"aria-hidden":"true"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-mobile-dropdown"},[a("ul",[a("li",[a("a",{attrs:{href:""}},[t._v("Home")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("About")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Contact")])]),t._v(" "),a("li",[a("a",{attrs:{onclick:"hideDropdown();"}},[t._v("Close")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[t._m(0),t._v(" "),a("div",{staticClass:"container flex-row"},[a("div",{staticClass:"content centered col-1",attrs:{id:"float"}},[a("div",{staticClass:"box with-shadow bg-white"},[a("h3",[t._v("Summary of Key Skills And Qualifications")]),t._v(" "),a("p",[t._v("Web developer with both proven back-end and front-end experience and eager to constantly improve my skills and learn new technologies.")]),t._v(" "),a("p",[t._v("While my experience with programming is recent, my passion for programming led me to rapidly pick up new skills, technology and frameworks.")]),t._v(" "),a("p",[t._v("I have developed my own web application (www.justpostit.net) and, also, worked on various projects mainly composed with the following languages/tools: PHP/JavaSCript/HTML/CSS.")]),t._v(" "),a("p",[t._v("I am a problem solver, I have strong attention to details and a mindset of efficiency and creativity.")]),t._v(" "),a("h3",[t._v("Technical skills:")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("h3",[t._v("Professional Experience:")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"content centered"},[a("social_buttons")],1)])])])]),t._v(" "),a("buttom-footer")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container flex-row",attrs:{id:"first-line"}},[a("div",{staticClass:"content centered col-1"},[a("h1",[t._v("About me")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("strong",[t._v("Front-end Development")]),t._v(" "),a("i",{staticClass:"fa fa-arrow-right",attrs:{"aria-hidden":"true"}}),t._v(" JavaScript, Vue JS ( + Vuex), JQuerry, Bootstrap, CSS, SASS (SCSS) – working knowledge;")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("strong",[t._v("Back-end Development")]),t._v(" "),a("i",{staticClass:"fa fa-arrow-right",attrs:{"aria-hidden":"true"}}),t._v(" PHP – strong knowledge; MCV, Laravel Web Development Framework - strong knowledge; OOP (Object-oriented programing) - strong knowledge; ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("strong",[t._v("Preferred database management systems")]),t._v(" "),a("i",{staticClass:"fa fa-arrow-right",attrs:{"aria-hidden":"true"}}),t._v(" MySQL, MariaDB")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("strong",[t._v("Implemented APIs")]),t._v(" "),a("i",{staticClass:"fa fa-arrow-right",attrs:{"aria-hidden":"true"}}),t._v(" PayPal, Braintree, Facebook, Twitter, ActiveCampaign")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container flex-row exp-block"},[a("div",{staticClass:"content col-1"},[a("p",[t._v("2016 "),a("i",{staticClass:"fa fa-arrow-right",attrs:{"aria-hidden":"true"}}),t._v(" present")])]),t._v(" "),a("div",{staticClass:"content col-5 border"},[t._v("\n                        Web Developer/PHP Developer  - Self-employed\n                        Achievements and responsibilities:\n                        Full membership app – www.slabestecuserban.ro\n                        "),a("ul",[a("li",[t._v("Created a membership system for the website with PHP,  MySQL and JavaScript;")]),t._v(" "),a("li",[t._v("Payment gateway integration in PHP;")]),t._v(" "),a("li",[t._v("PHP mail response upon completion of purchased items on website;")])]),t._v("\n                        Design and coding of  Just Post It web app (Social Media Management Tool)– www.justpostit.net\n                        "),a("ul",[a("li",[t._v("Developed the app’s architecture; ")]),t._v(" "),a("li",[t._v("Technology Used::  PHP, Laravel, MySQL, JavaScript, AJAX, Facebook and Twitter API;")]),t._v(" "),a("li",[t._v("PHP Payment integration (including subscription plans)")]),t._v(" "),a("li",[t._v("Software testing on application for bugs/errors;")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container flex-row exp-block"},[a("div",{staticClass:"content col-1"},[a("p",[t._v("2015 "),a("i",{staticClass:"fa fa-arrow-right",attrs:{"aria-hidden":"true"}}),t._v(" 2016")])]),t._v(" "),a("div",{staticClass:"content col-5 border"},[t._v("\n                        Digital Marketer at Start Marketing \n                        Achievements and responsibilities:\n                        "),a("ul",[a("li",[t._v("Managed clients’ social media accounts;")]),t._v(" "),a("li",[t._v("Created landing and sales pages (copywriting and design);")]),t._v(" "),a("li",[t._v("Liaising with and presenting recommendations to clients;")]),t._v(" "),a("li",[t._v("Managed over 50 social media paid campaigns: copywriting, design, performance optimization (Facebook Ads, Google Ad Words);")]),t._v(" "),a("li",[t._v("Created and implemented e-mail automation campaigns (Mail Chimp, Aweber, Active Campaign);")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container flex-row exp-block"},[a("div",{staticClass:"content col-1"},[a("p",[t._v("2012 "),a("i",{staticClass:"fa fa-arrow-right",attrs:{"aria-hidden":"true"}}),t._v(" 2016")])]),t._v(" "),a("div",{staticClass:"content col-5 border"},[t._v("\n                        Digital Marketer & Owner at SlabestecuSerban.ro  (www.slabestecuserban.ro)\n                        Achievements and responsibilities:\n                        "),a("ul",[a("li",[t._v("Creating the website;")]),t._v(" "),a("li",[t._v("Creating the social media communication strategy;")]),t._v(" "),a("li",[t._v("Creating the content marketing strategy and writing content for the website and various online magazines;")]),t._v(" "),a("li",[t._v("Designing sales funnel;")]),t._v(" "),a("li",[t._v("Design and copywriting for landing pages and sales pages (conversion rate between 10%-53% depending on the offer and quality of traffic sources);")]),t._v(" "),a("li",[t._v("Created and implemented e-mail automation campaigns ( using Mail Chimp, Aweber or Active Campaign);")]),t._v(" "),a("li",[t._v("Creating social media paid campaigns;")]),t._v(" "),a("li",[t._v("On-Page Search Engine Optimization;")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container flex-row exp-block"},[a("div",{staticClass:"content col-1"},[a("p",[t._v("2012 "),a("i",{staticClass:"fa fa-arrow-right",attrs:{"aria-hidden":"true"}}),t._v(" 2013")])]),t._v(" "),a("div",{staticClass:"content col-5 border"},[t._v("\n                        Co-Founder of Let’s Jump programme - www.letsjump.ro  \n                        Achievements and responsibilities:\n                        "),a("ul",[a("li",[t._v("Coordinated the personal trainers’ team;")]),t._v(" "),a("li",[t._v("Liaison with clients and suppliers;")]),t._v(" "),a("li",[t._v("Creating content for the website;")]),t._v(" "),a("li",[t._v("Implementing the communication strategy for promoting the programme;")])]),t._v(" "),a("strong",[t._v("Awards:")]),t._v("\n                        1st place award at Health Gala for best communication strategy;\n\n                    ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container flex-row exp-block"},[a("div",{staticClass:"content col-1"},[a("p",[t._v("2008 "),a("i",{staticClass:"fa fa-arrow-right",attrs:{"aria-hidden":"true"}}),t._v(" 2012")])]),t._v(" "),a("div",{staticClass:"content col-5 border"},[t._v("\n                        Personal Trainer – Freelancer and employed at various health clubs \n                    ")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("div",{staticClass:"container flex-row",attrs:{id:"first-line"}},[a("div",{staticClass:"content centered col-1"},[a("h1",[t._v(t._s(t.projects[t.id].name)+" project")])])]),t._v(" "),a("div",{staticClass:"container flex-row"},[a("div",{staticClass:"content centered col-1",attrs:{id:"float"}},[a("div",{staticClass:"box with-shadow bg-white"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content centered"},[a("img",{staticClass:"project-image",attrs:{src:t.projects[t.id].image}})])]),t._v("\n\n                "+t._s(t.projects[t.id].description)+"\n\n                "),a("div",{staticClass:"container"},[a("div",{staticClass:"content centered"},[a("a",{attrs:{href:t.projects[t.id].link}},[a("button",{staticClass:"button is-info"},[t._v("Go to project")])])])]),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"content centered"},[a("social_buttons")],1)])])])]),t._v(" "),a("buttom-footer")],1)},staticRenderFns:[]}}],[29]);
//# sourceMappingURL=app.8ef063ce3aea75cabb54.js.map