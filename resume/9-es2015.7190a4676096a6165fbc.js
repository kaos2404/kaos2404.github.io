(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"ct+p":function(t,n,e){"use strict";e.r(n);var i=e("tyNb"),o=e("fXoL"),c=e("ZCVb");let a=(()=>{class t{constructor(t){this.routeStateService=t}canActivateChild(t,n){return this.routeStateService.activatedRoute="/home/"+t.url[0].path,!0}}return t.\u0275fac=function(n){return new(n||t)(o.Yb(c.a))},t.\u0275prov=o.Kb({token:t,factory:t.\u0275fac}),t})(),s=(()=>{class t{constructor(t,n){this._router=t,this.routeStateService=n,this.active=-1,this.routes=["details","skills","academics","work","achievements","code"],this.routeStateService.activeRoute.subscribe(t=>{t&&(this.active=this.routes.indexOf(t.split("/")[2]))})}onSwipeLeft(t){this.active<this.routes.length-1&&(this.active++,this._router.navigate(["/home",this.routes[this.active]]))}onSwipeRight(t){this.active>0&&(this.active--,this._router.navigate(["/home",this.routes[this.active]]))}}return t.\u0275fac=function(n){return new(n||t)(o.Yb(i.a),o.Yb(c.a))},t.\u0275prov=o.Kb({token:t,factory:t.\u0275fac}),t})();var r=e("NFeN");const l=[{path:"",canActivateChild:[a],children:[{path:"details",component:(()=>{class t{constructor(t){this.swipeNavigate=t}onLinkClicked(t,n){console.debug(n),window.open(n,"_blank")}}return t.\u0275fac=function(n){return new(n||t)(o.Ob(s))},t.\u0275cmp=o.Ib({type:t,selectors:[["ng-component"]],decls:109,vars:0,consts:[[1,"container",3,"swipeleft","swiperight"],[1,"header","accent-clr"],[1,"detail","detail-bg"],["aria-hidden","true",1,"fas","fa-user-tie","icon","detail-icon-clr"],[1,"icon","detail-icon-clr"],["href","mailto:avirup.kaos.das@gmail.com",1,"link-ref"],[1,"lines"],["href","tel:+919038256283",1,"link-ref"],["href","tel:+918369740279",1,"link-ref"],["aria-hidden","true",1,"fas","fa-id-card","icon","detail-icon-clr"],["aria-hidden","true",1,"fab","fa-facebook-square","icon","detail-icon-clr"],["href","https://www.facebook.com/avirup.kaos","target","_blank",1,"link-ref"],["aria-hidden","true",1,"fab","fa-linkedin","icon","detail-icon-clr"],["href","https://www.linkedin.com/in/avirup-das-498780103/","target","_blank",1,"link-ref"],[1,"ratings"]],template:function(t,n){1&t&&(o.Ub(0,"div",0),o.cc("swipeleft",(function(t){return n.swipeNavigate.onSwipeLeft(t)}))("swiperight",(function(t){return n.swipeNavigate.onSwipeRight(t)})),o.Ub(1,"section"),o.Ub(2,"span",1),o.Cc(3,"Details"),o.Tb(),o.Ub(4,"div",2),o.Pb(5,"i",3),o.Ub(6,"span"),o.Cc(7,"Avirup Das"),o.Tb(),o.Tb(),o.Ub(8,"div",2),o.Ub(9,"mat-icon",4),o.Cc(10,"email"),o.Tb(),o.Ub(11,"a",5),o.Cc(12,"avirup.kaos.das@gmail.com "),o.Ub(13,"mat-icon",4),o.Cc(14,"launch"),o.Tb(),o.Tb(),o.Tb(),o.Ub(15,"div",2),o.Ub(16,"mat-icon",4),o.Cc(17,"phone"),o.Tb(),o.Ub(18,"div",6),o.Ub(19,"a",7),o.Cc(20,"+91 9038 256 283 "),o.Ub(21,"mat-icon",4),o.Cc(22,"launch"),o.Tb(),o.Tb(),o.Ub(23,"a",8),o.Cc(24,"+91 8369 740 279 "),o.Ub(25,"mat-icon",4),o.Cc(26,"launch"),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(27,"div",2),o.Ub(28,"mat-icon",4),o.Cc(29,"person_pin"),o.Tb(),o.Ub(30,"div",6),o.Ub(31,"span"),o.Cc(32,"2/H/4, Raja Janmenjoy Road, Beleghata"),o.Tb(),o.Ub(33,"span"),o.Cc(34,"Kolkata, West Bengal"),o.Tb(),o.Ub(35,"span"),o.Cc(36,"India - 700010"),o.Tb(),o.Tb(),o.Tb(),o.Ub(37,"div",2),o.Ub(38,"mat-icon",4),o.Cc(39,"my_location"),o.Tb(),o.Ub(40,"span"),o.Cc(41,"Kolkata, West Bengal"),o.Tb(),o.Tb(),o.Ub(42,"div",2),o.Pb(43,"i",9),o.Ub(44,"span"),o.Cc(45,"COFPD9092G"),o.Tb(),o.Tb(),o.Ub(46,"div",2),o.Pb(47,"i",10),o.Ub(48,"a",11),o.Cc(49,"avirup.kaos "),o.Ub(50,"mat-icon",4),o.Cc(51,"launch"),o.Tb(),o.Tb(),o.Tb(),o.Ub(52,"div",2),o.Pb(53,"i",12),o.Ub(54,"a",13),o.Cc(55,"avirup-das-498780103 "),o.Ub(56,"mat-icon",4),o.Cc(57,"launch"),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(58,"section"),o.Ub(59,"span",1),o.Cc(60,"Languages"),o.Tb(),o.Ub(61,"div",2),o.Ub(62,"span"),o.Cc(63,"English"),o.Tb(),o.Ub(64,"div",14),o.Ub(65,"mat-icon",4),o.Cc(66,"star"),o.Tb(),o.Ub(67,"mat-icon",4),o.Cc(68,"star"),o.Tb(),o.Ub(69,"mat-icon",4),o.Cc(70,"star"),o.Tb(),o.Ub(71,"mat-icon",4),o.Cc(72,"star"),o.Tb(),o.Ub(73,"mat-icon",4),o.Cc(74,"star_half"),o.Tb(),o.Tb(),o.Tb(),o.Ub(75,"div",2),o.Ub(76,"span"),o.Cc(77,"Bengali"),o.Tb(),o.Ub(78,"div",14),o.Ub(79,"mat-icon",4),o.Cc(80,"star"),o.Tb(),o.Ub(81,"mat-icon",4),o.Cc(82,"star"),o.Tb(),o.Ub(83,"mat-icon",4),o.Cc(84,"star"),o.Tb(),o.Ub(85,"mat-icon",4),o.Cc(86,"star"),o.Tb(),o.Ub(87,"mat-icon",4),o.Cc(88,"star_outline"),o.Tb(),o.Tb(),o.Tb(),o.Ub(89,"div",2),o.Ub(90,"span"),o.Cc(91,"Hindi"),o.Tb(),o.Ub(92,"div",14),o.Ub(93,"mat-icon",4),o.Cc(94,"star"),o.Tb(),o.Ub(95,"mat-icon",4),o.Cc(96,"star"),o.Tb(),o.Ub(97,"mat-icon",4),o.Cc(98,"star"),o.Tb(),o.Ub(99,"mat-icon",4),o.Cc(100,"star_half"),o.Tb(),o.Ub(101,"mat-icon",4),o.Cc(102,"star_outline"),o.Tb(),o.Tb(),o.Tb(),o.Pb(103,"br"),o.Ub(104,"span",1),o.Cc(105,"Interests and Hobbies"),o.Tb(),o.Ub(106,"div",2),o.Ub(107,"span"),o.Cc(108,"Gaming is one of my favourite hobbies. Apart from that I like to cook and love to learn about new technologies, softwares and applications in the field of computers and mobile phones. I have at times committed to Android app development in my free time. I am also a part of the CSR team at my current organization. "),o.Tb(),o.Tb(),o.Tb(),o.Tb())},directives:[r.a],styles:[".container[_ngcontent-%COMP%]{height:100%;overflow:auto;display:flex}section[_ngcontent-%COMP%]{width:50%;display:block;padding:4rem 8rem;overflow-y:auto;touch-action:pan-y}section[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:2rem}section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;margin:.25rem 0;border-radius:.25rem;padding:.5rem;position:relative}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:2rem;width:2rem;font-size:2rem;margin-right:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .ratings[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;right:4rem;top:0}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .ratings[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:1.5rem;width:1.5rem;font-size:1.5rem;margin:0}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .lines[_ngcontent-%COMP%]{display:block}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .link-ref[_ngcontent-%COMP%]{line-height:1.5rem}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .link-ref[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:1rem;height:1rem;width:1rem;margin-left:.25rem;display:none}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .link-ref[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%]{display:inline-block}@media screen and (max-width:1200px) and (max-height:1023px){.container[_ngcontent-%COMP%]{display:block}.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{width:100%;padding:2rem 1rem}}@media screen and (max-width:1200px) and (min-height:1024px){.container[_ngcontent-%COMP%]{display:block}.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{height:auto;width:100%;padding:2rem 1rem}}"]}),t})()},{path:"skills",component:(()=>{class t{constructor(t){this.swipeNavigate=t}}return t.\u0275fac=function(n){return new(n||t)(o.Ob(s))},t.\u0275cmp=o.Ib({type:t,selectors:[["ng-component"]],decls:2,vars:0,consts:[[1,"container",3,"swipeleft","swiperight"]],template:function(t,n){1&t&&(o.Ub(0,"div",0),o.cc("swipeleft",(function(t){return n.swipeNavigate.onSwipeLeft(t)}))("swiperight",(function(t){return n.swipeNavigate.onSwipeRight(t)})),o.Cc(1," Skills\n"),o.Tb())},styles:[".container[_ngcontent-%COMP%]{height:100%;overflow:auto;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.container[_ngcontent-%COMP%]   .snap-to[_ngcontent-%COMP%]{scroll-snap-align:start}"]}),t})()},{path:"academics",component:(()=>{class t{constructor(t){this.swipeNavigate=t}}return t.\u0275fac=function(n){return new(n||t)(o.Ob(s))},t.\u0275cmp=o.Ib({type:t,selectors:[["ng-component"]],decls:49,vars:0,consts:[[1,"container",3,"swipeleft","swiperight"],[1,"header","accent-clr"],[1,"detail","detail-bg"],[1,"title","accent-clr"],[1,"stop","accent-bg"],[1,"content"]],template:function(t,n){1&t&&(o.Ub(0,"div",0),o.cc("swipeleft",(function(t){return n.swipeNavigate.onSwipeLeft(t)}))("swiperight",(function(t){return n.swipeNavigate.onSwipeRight(t)})),o.Ub(1,"section"),o.Ub(2,"span",1),o.Cc(3,"Academics"),o.Tb(),o.Ub(4,"div",2),o.Ub(5,"div",3),o.Ub(6,"span"),o.Cc(7,"10th Standard"),o.Tb(),o.Pb(8,"div",4),o.Ub(9,"span"),o.Cc(10,"April, 2010"),o.Tb(),o.Pb(11,"div",4),o.Ub(12,"span"),o.Cc(13,"ICSE"),o.Tb(),o.Tb(),o.Ub(14,"div",5),o.Ub(15,"span"),o.Cc(16,"Secured 90.6% - Science(92), Maths(92), English(88)"),o.Tb(),o.Ub(17,"span"),o.Cc(18,"Salt Lake School, Kolkata"),o.Tb(),o.Tb(),o.Tb(),o.Ub(19,"div",2),o.Ub(20,"div",3),o.Ub(21,"span"),o.Cc(22,"12th Standard"),o.Tb(),o.Pb(23,"div",4),o.Ub(24,"span"),o.Cc(25,"April, 2012"),o.Tb(),o.Pb(26,"div",4),o.Ub(27,"span"),o.Cc(28,"ISC"),o.Tb(),o.Tb(),o.Ub(29,"div",5),o.Ub(30,"span"),o.Cc(31,"Secured 90.6% - Computer Science(94), Maths(92), English(90)"),o.Tb(),o.Ub(32,"span"),o.Cc(33,"Salt Lake School, Kolkata"),o.Tb(),o.Tb(),o.Tb(),o.Ub(34,"div",2),o.Ub(35,"div",3),o.Ub(36,"span"),o.Cc(37,"B. Tech."),o.Tb(),o.Pb(38,"div",4),o.Ub(39,"span"),o.Cc(40,"June, 2016"),o.Tb(),o.Pb(41,"div",4),o.Ub(42,"span"),o.Cc(43,"WBUT(MAKAUT)"),o.Tb(),o.Tb(),o.Ub(44,"div",5),o.Ub(45,"span"),o.Cc(46,"Secured DGPA 8.04 - Computer Science and Engineering"),o.Tb(),o.Ub(47,"span"),o.Cc(48,"Kalyani Government Engineering College, West Bengal"),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb())},styles:[".container[_ngcontent-%COMP%]{height:100%;overflow:auto}section[_ngcontent-%COMP%]{width:100%;display:block;padding:4rem 8rem;overflow-y:auto;touch-action:pan-y}section[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:2rem}section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{width:100%;margin-bottom:1rem;border-radius:.25rem;padding:.75rem}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.25rem;display:flex;align-items:center;margin-bottom:.25rem}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .stop[_ngcontent-%COMP%]{height:.35rem;width:.35rem;border-radius:50%;margin:0 .5rem}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:column;line-height:1.35rem}@media screen and (max-width:767px){.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{width:100%;padding:2rem 1rem}.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.25rem;display:flex;flex-direction:column;align-items:flex-start;line-height:1.35rem}.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative}.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .stop[_ngcontent-%COMP%]{display:none}}"]}),t})()},{path:"work",component:(()=>{class t{constructor(t){this.swipeNavigate=t}}return t.\u0275fac=function(n){return new(n||t)(o.Ob(s))},t.\u0275cmp=o.Ib({type:t,selectors:[["ng-component"]],decls:2,vars:0,consts:[[1,"container",3,"swipeleft","swiperight"]],template:function(t,n){1&t&&(o.Ub(0,"div",0),o.cc("swipeleft",(function(t){return n.swipeNavigate.onSwipeLeft(t)}))("swiperight",(function(t){return n.swipeNavigate.onSwipeRight(t)})),o.Cc(1," Work History\n"),o.Tb())},styles:[".container[_ngcontent-%COMP%]{height:100%;overflow:auto;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.container[_ngcontent-%COMP%]   .snap-to[_ngcontent-%COMP%]{scroll-snap-align:start}"]}),t})()},{path:"achievements",component:(()=>{class t{constructor(t){this.swipeNavigate=t}}return t.\u0275fac=function(n){return new(n||t)(o.Ob(s))},t.\u0275cmp=o.Ib({type:t,selectors:[["ng-component"]],decls:2,vars:0,consts:[[1,"container",3,"swipeleft","swiperight"]],template:function(t,n){1&t&&(o.Ub(0,"div",0),o.cc("swipeleft",(function(t){return n.swipeNavigate.onSwipeLeft(t)}))("swiperight",(function(t){return n.swipeNavigate.onSwipeRight(t)})),o.Cc(1," Achievements\n"),o.Tb())},styles:[".container[_ngcontent-%COMP%]{height:100%;overflow:auto;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.container[_ngcontent-%COMP%]   .snap-to[_ngcontent-%COMP%]{scroll-snap-align:start}"]}),t})()},{path:"code",component:(()=>{class t{constructor(t){this.swipeNavigate=t}}return t.\u0275fac=function(n){return new(n||t)(o.Ob(s))},t.\u0275cmp=o.Ib({type:t,selectors:[["ng-component"]],decls:2,vars:0,consts:[[1,"container",3,"swipeleft","swiperight"]],template:function(t,n){1&t&&(o.Ub(0,"div",0),o.cc("swipeleft",(function(t){return n.swipeNavigate.onSwipeLeft(t)}))("swiperight",(function(t){return n.swipeNavigate.onSwipeRight(t)})),o.Cc(1," Code\n"),o.Tb())},styles:[".container[_ngcontent-%COMP%]{height:100%;overflow:auto;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.container[_ngcontent-%COMP%]   .snap-to[_ngcontent-%COMP%]{scroll-snap-align:start}"]}),t})()}]}];let b=(()=>{class t{}return t.\u0275mod=o.Mb({type:t}),t.\u0275inj=o.Lb({factory:function(n){return new(n||t)},providers:[a],imports:[[i.d.forChild(l)],i.d]}),t})();var p=e("HUga"),g=e("IYOu");e.d(n,"HomeModule",(function(){return d}));let d=(()=>{class t{}return t.\u0275mod=o.Mb({type:t}),t.\u0275inj=o.Lb({factory:function(n){return new(n||t)},providers:[s],imports:[[p.a,g.a,b]]}),t})()}}]);