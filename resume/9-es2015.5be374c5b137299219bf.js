(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"ct+p":function(t,e,n){"use strict";n.r(e);var i=n("tyNb"),o=n("fXoL"),s=n("ZCVb");let a=(()=>{class t{constructor(t){this.routeStateService=t}canActivateChild(t,e){return this.routeStateService.activatedRoute="/home/"+t.url[0].path,!0}}return t.\u0275fac=function(e){return new(e||t)(o.Yb(s.a))},t.\u0275prov=o.Kb({token:t,factory:t.\u0275fac}),t})(),c=(()=>{class t{constructor(t,e){this._router=t,this.routeStateService=e,this.active=-1,this.routes=["about","details","skills","academics","work","achievements","code"],this.routeStateService.activeRoute.subscribe(t=>{t&&(this.active=this.routes.indexOf(t.split("/")[2]))})}onSwipeLeft(t){this.active<this.routes.length-1&&(this.active++,this._router.navigate(["/home",this.routes[this.active]]))}onSwipeRight(t){this.active>0&&(this.active--,this._router.navigate(["/home",this.routes[this.active]]))}}return t.\u0275fac=function(e){return new(e||t)(o.Yb(i.a),o.Yb(s.a))},t.\u0275prov=o.Kb({token:t,factory:t.\u0275fac}),t})();const r=[{path:"",canActivateChild:[a],children:[{path:"about",component:(()=>{class t{constructor(t){this.swipeNavigate=t}onSwipe(){}}return t.\u0275fac=function(e){return new(e||t)(o.Ob(c))},t.\u0275cmp=o.Ib({type:t,selectors:[["ng-component"]],decls:20,vars:0,consts:[[1,"container",3,"swipeleft","swiperight"],[1,"snap-to"],["src","assets/img/me.jpg","alt","",1,"picture","pic-border-all"],[1,"desktop-only"],[1,"mobile-only"]],template:function(t,e){1&t&&(o.Ub(0,"div",0),o.cc("swipeleft",(function(t){return e.swipeNavigate.onSwipeLeft(t)}))("swiperight",(function(t){return e.swipeNavigate.onSwipeRight(t)})),o.Ub(1,"section",1),o.Pb(2,"img",2),o.Ub(3,"span"),o.Cc(4,"Hi!"),o.Tb(),o.Ub(5,"span"),o.Cc(6,"My name is Avirup."),o.Tb(),o.Ub(7,"span"),o.Cc(8,"Welcome to my Github Pages."),o.Tb(),o.Ub(9,"span"),o.Cc(10,"In this web app you will find most of the important details of my career and academics."),o.Tb(),o.Ub(11,"span",3),o.Cc(12,"This is a PWA app. Feel free to browse it on your mobile devices."),o.Tb(),o.Ub(13,"span",4),o.Cc(14,"Change the theme, swipe right and left to navigate, pull the banner to the bottom and enjoy while you are here."),o.Tb(),o.Tb(),o.Ub(15,"section",1),o.Ub(16,"span"),o.Cc(17,"Who am I?"),o.Tb(),o.Ub(18,"span"),o.Cc(19,"I am a dynamic professional with 3.5+ years of experience in IT industry. I expertise in Angular, Karma Unit Testing, Spring MVC, HTML, CSS/SCSS, Javascript and Oracle PL/SQL. I am a dedicated professional who is objective oriented and shows good leadership, communication skills, analytical ability and reasoning and problem-solving skills. "),o.Tb(),o.Tb(),o.Tb())},styles:[".container[_ngcontent-%COMP%]{height:100%;overflow:auto;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;touch-action:pan-y!important}.container[_ngcontent-%COMP%]   .snap-to[_ngcontent-%COMP%]{scroll-snap-align:start}section[_ngcontent-%COMP%]{width:70%;height:100%;padding:4rem 2rem;margin:auto}section[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%]{height:8rem;width:8rem;border-radius:50%;margin:1rem calc(50% - 4rem)}section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;text-align:center}@media screen and (max-width:767px){.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{width:100%;padding:2rem 1rem}.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%]{height:6rem;width:6rem;float:left;margin:1rem}.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-align:initial}}"]}),t})()},{path:"details",component:(()=>{class t{constructor(t){this.swipeNavigate=t}}return t.\u0275fac=function(e){return new(e||t)(o.Ob(c))},t.\u0275cmp=o.Ib({type:t,selectors:[["ng-component"]],decls:2,vars:0,consts:[[1,"container",3,"swipeleft","swiperight"]],template:function(t,e){1&t&&(o.Ub(0,"div",0),o.cc("swipeleft",(function(t){return e.swipeNavigate.onSwipeLeft(t)}))("swiperight",(function(t){return e.swipeNavigate.onSwipeRight(t)})),o.Cc(1," Personal Details\n"),o.Tb())},styles:[".container[_ngcontent-%COMP%]{height:100%;overflow:auto;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.container[_ngcontent-%COMP%]   .snap-to[_ngcontent-%COMP%]{scroll-snap-align:start}"]}),t})()},{path:"skills",component:(()=>{class t{constructor(t){this.swipeNavigate=t}}return t.\u0275fac=function(e){return new(e||t)(o.Ob(c))},t.\u0275cmp=o.Ib({type:t,selectors:[["ng-component"]],decls:2,vars:0,consts:[[1,"container",3,"swipeleft","swiperight"]],template:function(t,e){1&t&&(o.Ub(0,"div",0),o.cc("swipeleft",(function(t){return e.swipeNavigate.onSwipeLeft(t)}))("swiperight",(function(t){return e.swipeNavigate.onSwipeRight(t)})),o.Cc(1," Skills\n"),o.Tb())},styles:[".container[_ngcontent-%COMP%]{height:100%;overflow:auto;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.container[_ngcontent-%COMP%]   .snap-to[_ngcontent-%COMP%]{scroll-snap-align:start}"]}),t})()},{path:"academics",component:(()=>{class t{constructor(t){this.swipeNavigate=t}}return t.\u0275fac=function(e){return new(e||t)(o.Ob(c))},t.\u0275cmp=o.Ib({type:t,selectors:[["ng-component"]],decls:2,vars:0,consts:[[1,"container",3,"swipeleft","swiperight"]],template:function(t,e){1&t&&(o.Ub(0,"div",0),o.cc("swipeleft",(function(t){return e.swipeNavigate.onSwipeLeft(t)}))("swiperight",(function(t){return e.swipeNavigate.onSwipeRight(t)})),o.Cc(1," Academics\n"),o.Tb())},styles:[".container[_ngcontent-%COMP%]{height:100%;overflow:auto;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.container[_ngcontent-%COMP%]   .snap-to[_ngcontent-%COMP%]{scroll-snap-align:start}"]}),t})()},{path:"work",component:(()=>{class t{constructor(t){this.swipeNavigate=t}}return t.\u0275fac=function(e){return new(e||t)(o.Ob(c))},t.\u0275cmp=o.Ib({type:t,selectors:[["ng-component"]],decls:2,vars:0,consts:[[1,"container",3,"swipeleft","swiperight"]],template:function(t,e){1&t&&(o.Ub(0,"div",0),o.cc("swipeleft",(function(t){return e.swipeNavigate.onSwipeLeft(t)}))("swiperight",(function(t){return e.swipeNavigate.onSwipeRight(t)})),o.Cc(1," Work History\n"),o.Tb())},styles:[".container[_ngcontent-%COMP%]{height:100%;overflow:auto;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.container[_ngcontent-%COMP%]   .snap-to[_ngcontent-%COMP%]{scroll-snap-align:start}"]}),t})()},{path:"achievements",component:(()=>{class t{constructor(t){this.swipeNavigate=t}}return t.\u0275fac=function(e){return new(e||t)(o.Ob(c))},t.\u0275cmp=o.Ib({type:t,selectors:[["ng-component"]],decls:2,vars:0,consts:[[1,"container",3,"swipeleft","swiperight"]],template:function(t,e){1&t&&(o.Ub(0,"div",0),o.cc("swipeleft",(function(t){return e.swipeNavigate.onSwipeLeft(t)}))("swiperight",(function(t){return e.swipeNavigate.onSwipeRight(t)})),o.Cc(1," Achievements\n"),o.Tb())},styles:[".container[_ngcontent-%COMP%]{height:100%;overflow:auto;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.container[_ngcontent-%COMP%]   .snap-to[_ngcontent-%COMP%]{scroll-snap-align:start}"]}),t})()},{path:"code",component:(()=>{class t{constructor(t){this.swipeNavigate=t}}return t.\u0275fac=function(e){return new(e||t)(o.Ob(c))},t.\u0275cmp=o.Ib({type:t,selectors:[["ng-component"]],decls:2,vars:0,consts:[[1,"container",3,"swipeleft","swiperight"]],template:function(t,e){1&t&&(o.Ub(0,"div",0),o.cc("swipeleft",(function(t){return e.swipeNavigate.onSwipeLeft(t)}))("swiperight",(function(t){return e.swipeNavigate.onSwipeRight(t)})),o.Cc(1," Code\n"),o.Tb())},styles:[".container[_ngcontent-%COMP%]{height:100%;overflow:auto;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.container[_ngcontent-%COMP%]   .snap-to[_ngcontent-%COMP%]{scroll-snap-align:start}"]}),t})()}]}];let p=(()=>{class t{}return t.\u0275mod=o.Mb({type:t}),t.\u0275inj=o.Lb({factory:function(e){return new(e||t)},providers:[a],imports:[[i.d.forChild(r)],i.d]}),t})();var l=n("HUga"),g=n("IYOu");n.d(e,"HomeModule",(function(){return u}));let u=(()=>{class t{}return t.\u0275mod=o.Mb({type:t}),t.\u0275inj=o.Lb({factory:function(e){return new(e||t)},providers:[c],imports:[[l.a,g.a,p]]}),t})()}}]);