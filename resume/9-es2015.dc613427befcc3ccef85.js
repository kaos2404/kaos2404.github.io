(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"ct+p":function(e,t,n){"use strict";n.r(t);var i=n("tyNb"),o=n("fXoL"),a=n("ZCVb");let r=(()=>{class e{constructor(e){this.routeStateService=e}canActivateChild(e,t){return e.data.pos&&this.routeStateService.setAnimate(e.data.pos),this.routeStateService.activatedRoute="/home/"+e.url[0].path,!0}}return e.\u0275fac=function(t){return new(t||e)(o.Zb(a.a))},e.\u0275prov=o.Lb({token:e,factory:e.\u0275fac}),e})(),c=(()=>{class e{constructor(e,t){this._router=e,this.routeStateService=t,this.active=-1,this.routes=["details","skills","academics","work","achievements","code"],this.routeStateService.activeRoute.subscribe(e=>{e&&(this.active=this.routes.indexOf(e.split("/")[2]))})}onSwipeLeft(e){this.active<this.routes.length-1&&(this.active++,this._router.navigate(["/home",this.routes[this.active]]))}onSwipeRight(e){this.active>0&&(this.active--,this._router.navigate(["/home",this.routes[this.active]]))}}return e.\u0275fac=function(t){return new(t||e)(o.Zb(i.a),o.Zb(a.a))},e.\u0275prov=o.Lb({token:e,factory:e.\u0275fac}),e})();var s=n("NFeN");let l=(()=>{class e{constructor(e){this.swipeNavigate=e}onLinkClicked(e,t){console.debug(t),window.open(t,"_blank")}}return e.\u0275fac=function(t){return new(t||e)(o.Pb(c))},e.\u0275cmp=o.Jb({type:e,selectors:[["ng-component"]],decls:109,vars:0,consts:[[1,"container",3,"swipeleft","swiperight"],[1,"header","accent-clr"],[1,"detail","detail-bg"],["aria-hidden","true",1,"fas","fa-user-tie","icon","detail-icon-clr"],[1,"icon","detail-icon-clr"],["href","mailto:avirup.kaos.das@gmail.com",1,"link-ref"],[1,"lines"],["href","tel:+919038256283",1,"link-ref"],["href","tel:+918369740279",1,"link-ref"],["aria-hidden","true",1,"fas","fa-id-card","icon","detail-icon-clr"],["aria-hidden","true",1,"fab","fa-facebook-square","icon","detail-icon-clr"],["href","https://www.facebook.com/avirup.kaos","target","_blank",1,"link-ref"],["aria-hidden","true",1,"fab","fa-linkedin","icon","detail-icon-clr"],["href","https://www.linkedin.com/in/avirup-das-498780103/","target","_blank",1,"link-ref"],[1,"ratings"]],template:function(e,t){1&e&&(o.Vb(0,"div",0),o.dc("swipeleft",(function(e){return t.swipeNavigate.onSwipeLeft(e)}))("swiperight",(function(e){return t.swipeNavigate.onSwipeRight(e)})),o.Vb(1,"section"),o.Vb(2,"span",1),o.Ec(3,"Details"),o.Ub(),o.Vb(4,"div",2),o.Qb(5,"i",3),o.Vb(6,"span"),o.Ec(7,"Avirup Das"),o.Ub(),o.Ub(),o.Vb(8,"div",2),o.Vb(9,"mat-icon",4),o.Ec(10,"email"),o.Ub(),o.Vb(11,"a",5),o.Ec(12,"avirup.kaos.das@gmail.com "),o.Vb(13,"mat-icon",4),o.Ec(14,"launch"),o.Ub(),o.Ub(),o.Ub(),o.Vb(15,"div",2),o.Vb(16,"mat-icon",4),o.Ec(17,"phone"),o.Ub(),o.Vb(18,"div",6),o.Vb(19,"a",7),o.Ec(20,"+91 9038 256 283 "),o.Vb(21,"mat-icon",4),o.Ec(22,"launch"),o.Ub(),o.Ub(),o.Vb(23,"a",8),o.Ec(24,"+91 8369 740 279 "),o.Vb(25,"mat-icon",4),o.Ec(26,"launch"),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Vb(27,"div",2),o.Vb(28,"mat-icon",4),o.Ec(29,"person_pin"),o.Ub(),o.Vb(30,"div",6),o.Vb(31,"span"),o.Ec(32,"2/H/4, Raja Janmenjoy Road, Beleghata"),o.Ub(),o.Vb(33,"span"),o.Ec(34,"Kolkata, West Bengal"),o.Ub(),o.Vb(35,"span"),o.Ec(36,"India - 700010"),o.Ub(),o.Ub(),o.Ub(),o.Vb(37,"div",2),o.Vb(38,"mat-icon",4),o.Ec(39,"my_location"),o.Ub(),o.Vb(40,"span"),o.Ec(41,"Kolkata, West Bengal"),o.Ub(),o.Ub(),o.Vb(42,"div",2),o.Qb(43,"i",9),o.Vb(44,"span"),o.Ec(45,"COFPD9092G"),o.Ub(),o.Ub(),o.Vb(46,"div",2),o.Qb(47,"i",10),o.Vb(48,"a",11),o.Ec(49,"avirup.kaos "),o.Vb(50,"mat-icon",4),o.Ec(51,"launch"),o.Ub(),o.Ub(),o.Ub(),o.Vb(52,"div",2),o.Qb(53,"i",12),o.Vb(54,"a",13),o.Ec(55,"avirup-das-498780103 "),o.Vb(56,"mat-icon",4),o.Ec(57,"launch"),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Vb(58,"section"),o.Vb(59,"span",1),o.Ec(60,"Languages"),o.Ub(),o.Vb(61,"div",2),o.Vb(62,"span"),o.Ec(63,"English"),o.Ub(),o.Vb(64,"div",14),o.Vb(65,"mat-icon",4),o.Ec(66,"star"),o.Ub(),o.Vb(67,"mat-icon",4),o.Ec(68,"star"),o.Ub(),o.Vb(69,"mat-icon",4),o.Ec(70,"star"),o.Ub(),o.Vb(71,"mat-icon",4),o.Ec(72,"star"),o.Ub(),o.Vb(73,"mat-icon",4),o.Ec(74,"star_half"),o.Ub(),o.Ub(),o.Ub(),o.Vb(75,"div",2),o.Vb(76,"span"),o.Ec(77,"Bengali"),o.Ub(),o.Vb(78,"div",14),o.Vb(79,"mat-icon",4),o.Ec(80,"star"),o.Ub(),o.Vb(81,"mat-icon",4),o.Ec(82,"star"),o.Ub(),o.Vb(83,"mat-icon",4),o.Ec(84,"star"),o.Ub(),o.Vb(85,"mat-icon",4),o.Ec(86,"star"),o.Ub(),o.Vb(87,"mat-icon",4),o.Ec(88,"star_outline"),o.Ub(),o.Ub(),o.Ub(),o.Vb(89,"div",2),o.Vb(90,"span"),o.Ec(91,"Hindi"),o.Ub(),o.Vb(92,"div",14),o.Vb(93,"mat-icon",4),o.Ec(94,"star"),o.Ub(),o.Vb(95,"mat-icon",4),o.Ec(96,"star"),o.Ub(),o.Vb(97,"mat-icon",4),o.Ec(98,"star"),o.Ub(),o.Vb(99,"mat-icon",4),o.Ec(100,"star_half"),o.Ub(),o.Vb(101,"mat-icon",4),o.Ec(102,"star_outline"),o.Ub(),o.Ub(),o.Ub(),o.Qb(103,"br"),o.Vb(104,"span",1),o.Ec(105,"Interests and Hobbies"),o.Ub(),o.Vb(106,"div",2),o.Vb(107,"span"),o.Ec(108,"Gaming is one of my favourite hobbies. Apart from that I like to cook and love to learn about new technologies, softwares and applications in the field of computers and mobile phones. I have at times committed to Android app development in my free time. I am also a part of the CSR team at my current organization. "),o.Ub(),o.Ub(),o.Ub(),o.Ub())},directives:[s.a],styles:[".container[_ngcontent-%COMP%]{height:100%;overflow:auto;display:flex}section[_ngcontent-%COMP%]{width:50%;display:block;padding:4rem 8rem;overflow-y:auto;touch-action:pan-y}section[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:2rem}section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;margin:.25rem 0;border-radius:.25rem;padding:.5rem;position:relative}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:2rem;width:2rem;font-size:2rem;margin-right:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .ratings[_ngcontent-%COMP%]{display:flex;align-items:center;margin:0 1rem 0 auto}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .ratings[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:1.5rem;width:1.5rem;font-size:1.5rem;margin:0}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .lines[_ngcontent-%COMP%]{display:block}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .link-ref[_ngcontent-%COMP%]{line-height:1.5rem}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .link-ref[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:1rem;height:1rem;width:1rem;margin-left:.25rem;display:none}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .link-ref[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%]{display:inline-block}@media screen and (max-width:1200px) and (max-height:1023px){.container[_ngcontent-%COMP%]{display:block}.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{width:100%;padding:2rem 1rem}}@media screen and (max-width:1200px) and (min-height:1024px){.container[_ngcontent-%COMP%]{display:block}.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{height:auto;width:100%;padding:2rem 1rem}}"]}),e})();var d=n("ofXK"),g=n("FKr1");function p(e,t){if(1&e){const e=o.Wb();o.Vb(0,"div",10),o.dc("click",(function(n){o.wc(e);const i=t.$implicit;return o.hc().onItemClicked(n,i)})),o.Qb(1,"i",11),o.Vb(2,"span"),o.Ec(3),o.Ub(),o.Ub()}if(2&e){const e=t.$implicit;o.Cb(1),o.Fb("",e.type," fab fa-",e.icon," icon detail-icon-clr"),o.Cb(2),o.Fc(e.name)}}function m(e,t){if(1&e&&(o.Vb(0,"span",12),o.Ec(1),o.Ub()),2&e){const e=t.$implicit;o.Cb(1),o.Fc(e)}}const b=function(e){return{active:e}};let h=(()=>{class e{constructor(e){this.swipeNavigate=e,this.list=[{icon:"angular",type:"fab",name:"Angular (6, 8 and 9)",description:["Apr, 2018 - Present","A colleague in TCS introduced me to a SPA developed in AngularJS.","Mesmerized with the fluidity and ease of use, I wanted to understand how it worked. When browsing through materials on AngularJS, I came across Angular 4. The difference was stark and Angular appealed to me more than AngularJS.","I started learning Angular 6 and showcased an application to my managers who approved of the design. Soon I had built my first application using Angular 6 on the frontend and Spring MVC REST Controllers at the backend."]},{icon:"flask",type:"fas",name:"Jasmine/Karma Unit Testing",description:["Aug, 2019 - Present","Upon being asked by my managers, I started writing test cases to automate few of the testing scenarios that were being repeated too ofter.","I was very quick in picking up the intricacies involved in writing test cases, sat with the testers to understand what they did and I tried to replicate the exact process, from a mouse click to a keyboard input. Nothing was spared.","I adhere to testing both the logic in the TS files as well the templates(checking whether necessary classes were applied, if the item is to be hidden, etc.)."]},{icon:"js-square",type:"fab",name:"Javascript/jQuery",description:["Nov, 2016 - Present","When asked to develop an admin portal in Spring MVC, I had my first interaction with Javascript and jQuery. Simple form validations, DOM manipulations and sometimes even animations! I learnt most of my javascript further down the line when I was learning Angular."]},{icon:"html5",type:"fab",name:"HTML",description:["Nov, 2016 - Present","HTML and JSP were one of the technologies that I had learnt when working on Spring MVC applications."]},{icon:"sass",type:"fab",name:"SASS/SCSS Preprocessing",description:["Jun, 2018 - Present","When learning Angular, I came across Angular Material. When trying to make my own theme for Material, I started learning about SCSS and it was an amazing experience. Since then I have used a lot of mixins, rules and other features heavily in all of my applications.","You should check out the mixins I have written for the themes of this application. "]},{icon:"css3-alt",type:"fab",name:"CSS",description:["Nov, 2016 - Present","Styling HTML elements is an obsession for me. Everything needs to be picture perfect and CSS has helped me achieve so much!","Having started with bootstrap, simple layouts, responsive designs and now PWA I have learnt a lot, and still have a lot to learn. CSS has allowed me to express my creativity and let me turn my imagination into beautiful interfaces."]},{icon:"chart-bar",type:"fas",name:"Jasper Report/iReport Designer",description:["Jun, 2017 - Present","Having worked in TCS-SBI, statements and reports of various sorts were a regular feature. Inititally most of the applications I was working on used to generate report using direct connection between the database and iReport designer.","I thought that to be inefficient and set out to learn JasperReports and iReport. It took me a week but I was able to move all of the database interfacing reports to use Java beans instead.","This allowed rapid generation of reports. Instead of iReport creating separate connections to generate each report, I could fetch all the data once from the database via one connection and generate all the reports in one go. The improvement was drastic."]},{icon:"java",type:"fab",name:"Java",description:["Nov, 2016 - Present","In class 11, I started learning about Java for the first time. Everyone else had two years of experience over me and that was a challenge.","In the same way that I treat most challenges, this one was no exception. I have always been attracted to logic and analytical thinking, and that coupled with my hunger to overcome challenges pushed me towards Java. I fell in love with the language, derived great satisfaction from solving problems, improving code and converting logic to algorithm.","Java has helped me to be one of the top performers in TCS notably being awarded prizes for being 2nd (all India) and 71st (global) in coding contests."]},{icon:"leaf",type:"fas",name:"Spring 4 MVC",description:["Apr, 2017 - Apr, 2019","Spring was introduced to me when my client requested for an admin portal to the application I was working on.","The concepts of dependency injection, annotations, contexts were all new to me then. I had spent a lot of time studying and understanding how things actually worked. It was then that I realized how powerful annotaions were and had soon developed two programs using annotation proccessing that reduced the efforts of many across my team and outside."]},{icon:"globe",type:"fas",name:"REST and SOAP Webservice",description:["Nov, 2016 - Apr, 2019","The first application that I had worked on was based on SOAP communication between two nodes of a stack. I learnt REST when working on the backend for my Angular applications."]},{icon:"server",type:"fas",name:"Oracle Weblogic Server",description:["Nov, 2016 - Apr, 2019","All of my web applications(Java) were deployed on Weblogic server. And it was slow. So slow that I was compelled to write scripts that used to automate the entire process- stop, deploy, stage and start. Weblogic helped me to understand how servers worked and more importantly how to write scripts."]},{icon:"server",type:"fas",name:"Apache HTTP Server",description:["Nov, 2016 - Apr, 2019","From routing between the web facing server to deploying Angular applications, Apache has been a feature for most of the time in TCS. With HTTP server I learnt about certificates, keys and encryption."]},{icon:"database",type:"fas",name:"Oracle PL/SQL",description:["Nov, 2016 - Apr, 2019","Queries, procedures and millions of records often made my life very difficult. Understanding how queries worked, joins, keys, cascading, sqlldr, and so much more made my life less difficult but not that much. Sometimes I have stayed in office for 16 hrs straight because the data took too much time to process."]},{icon:"linux",type:"fab",name:"Linux (RHEL 6 and 7)",description:["Nov, 2016 - Apr, 2019","During my training in Trivandrum I was first introduced to the bash. Scripting has been so fun over the course of my career. I have learnt so much with shell and implemented so much, to the point that there was no manual work involved in anything. Even the disaster recovery drills were automated! Configurations changed, logs verified, servers started, applications deployed, everything had a script. Even fixing servers that I had mistakenly broken by deleting files that were not supposed to be deleted had a script. But no one knows that! "]}],this.active=this.list[0],this.showActive=!1}onItemClicked(e,t){this.active=t,setTimeout(()=>{this.showActive=!0},300)}}return e.\u0275fac=function(t){return new(t||e)(o.Pb(c))},e.\u0275cmp=o.Jb({type:e,selectors:[["ng-component"]],decls:14,vars:9,consts:[[1,"container",3,"swipeleft","swiperight"],[1,"header","accent-clr"],[1,"frame","detail-bg"],[1,"list","detail-bg",3,"ngClass"],["class","detail detail-border-bottom","matRipple","",3,"click",4,"ngFor","ngForOf"],[1,"description","detail-bg",3,"ngClass"],[1,"detail","accent-clr","detail-border-bottom"],["matRipple","",3,"click"],[1,"lines"],["class","line",4,"ngFor","ngForOf"],["matRipple","",1,"detail","detail-border-bottom",3,"click"],["aria-hidden","true"],[1,"line"]],template:function(e,t){1&e&&(o.Vb(0,"div",0),o.dc("swipeleft",(function(e){return t.swipeNavigate.onSwipeLeft(e)}))("swiperight",(function(e){return t.swipeNavigate.onSwipeRight(e)})),o.Vb(1,"span",1),o.Ec(2,"Skills"),o.Ub(),o.Vb(3,"div",2),o.Vb(4,"section",3),o.Dc(5,p,4,5,"div",4),o.Ub(),o.Vb(6,"section",5),o.Vb(7,"div",6),o.Vb(8,"span"),o.Ec(9),o.Ub(),o.Vb(10,"mat-icon",7),o.dc("click",(function(){return t.showActive=!1})),o.Ec(11,"arrow_back_ios"),o.Ub(),o.Ub(),o.Vb(12,"div",8),o.Dc(13,m,2,1,"span",9),o.Ub(),o.Ub(),o.Ub(),o.Ub()),2&e&&(o.Cb(4),o.nc("ngClass",o.pc(5,b,!t.showActive)),o.Cb(1),o.nc("ngForOf",t.list),o.Cb(1),o.nc("ngClass",o.pc(7,b,t.showActive)),o.Cb(3),o.Fc(t.active.name),o.Cb(4),o.nc("ngForOf",t.active.description))},directives:[d.i,d.j,s.a,g.s],styles:[".container[_ngcontent-%COMP%]{height:100%;overflow:auto;padding:4rem 8rem;display:flex;flex-direction:column}.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:2rem}.container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}.frame[_ngcontent-%COMP%]{display:flex;height:calc(100% - 3.5rem);width:100%;padding:1rem 0;border-radius:.25rem}section[_ngcontent-%COMP%]{width:50%;display:block;flex-direction:column;overflow-y:auto;touch-action:pan-y;padding:0 1rem}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;padding:.75rem;cursor:pointer}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:2rem;width:2rem;font-size:2rem;margin-right:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}section.list[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]:last-child{border-bottom:0}section.description[_ngcontent-%COMP%]{height:100%}section.description[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{margin-bottom:1rem;font-size:1.25rem}section.description[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:calc(100% - 3rem)}section.description[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{height:1.5rem;width:1.5rem;font-size:1.5rem;margin-left:auto;display:none}section.description[_ngcontent-%COMP%]   .lines[_ngcontent-%COMP%]{padding:1rem;overflow-y:auto}@media screen and (max-width:1200px){.container[_ngcontent-%COMP%]{padding:2rem 1rem}.container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]{padding:0;position:relative;overflow:hidden}.container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{width:100%;z-index:1;transition:all .5s cubic-bezier(.6,.1,.4,.2);perspective:200px;transform-style:preserve-3d;will-change:transform}.container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   section.description[_ngcontent-%COMP%]{position:absolute;transform:rotateY(90deg) translateX(100%);transform-origin:top right;display:flex;flex-direction:column}.container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   section.description.active[_ngcontent-%COMP%]{transform:rotateY(0deg) translateX(0)}.container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   section.description[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{display:block}.container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   section.list[_ngcontent-%COMP%]{transform:rotateY(90deg) translateX(-100%);transform-origin:top left}.container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   section.list.active[_ngcontent-%COMP%]{transform:rotateY(0deg) translateX(0)}}"]}),e})(),f=(()=>{class e{constructor(e){this.swipeNavigate=e}}return e.\u0275fac=function(t){return new(t||e)(o.Pb(c))},e.\u0275cmp=o.Jb({type:e,selectors:[["ng-component"]],decls:49,vars:0,consts:[[1,"container",3,"swipeleft","swiperight"],[1,"header","accent-clr"],[1,"detail","detail-bg"],[1,"title","accent-clr"],[1,"stop","accent-bg"],[1,"content"]],template:function(e,t){1&e&&(o.Vb(0,"div",0),o.dc("swipeleft",(function(e){return t.swipeNavigate.onSwipeLeft(e)}))("swiperight",(function(e){return t.swipeNavigate.onSwipeRight(e)})),o.Vb(1,"section"),o.Vb(2,"span",1),o.Ec(3,"Academics"),o.Ub(),o.Vb(4,"div",2),o.Vb(5,"div",3),o.Vb(6,"span"),o.Ec(7,"10th Standard"),o.Ub(),o.Qb(8,"div",4),o.Vb(9,"span"),o.Ec(10,"April, 2010"),o.Ub(),o.Qb(11,"div",4),o.Vb(12,"span"),o.Ec(13,"ICSE"),o.Ub(),o.Ub(),o.Vb(14,"div",5),o.Vb(15,"span"),o.Ec(16,"Secured 90.6% - Science(92), Maths(92), English(88)"),o.Ub(),o.Vb(17,"span"),o.Ec(18,"Salt Lake School, Kolkata"),o.Ub(),o.Ub(),o.Ub(),o.Vb(19,"div",2),o.Vb(20,"div",3),o.Vb(21,"span"),o.Ec(22,"12th Standard"),o.Ub(),o.Qb(23,"div",4),o.Vb(24,"span"),o.Ec(25,"April, 2012"),o.Ub(),o.Qb(26,"div",4),o.Vb(27,"span"),o.Ec(28,"ISC"),o.Ub(),o.Ub(),o.Vb(29,"div",5),o.Vb(30,"span"),o.Ec(31,"Secured 90.6% - Computer Science(94), Maths(92), English(90)"),o.Ub(),o.Vb(32,"span"),o.Ec(33,"Salt Lake School, Kolkata"),o.Ub(),o.Ub(),o.Ub(),o.Vb(34,"div",2),o.Vb(35,"div",3),o.Vb(36,"span"),o.Ec(37,"B. Tech."),o.Ub(),o.Qb(38,"div",4),o.Vb(39,"span"),o.Ec(40,"June, 2016"),o.Ub(),o.Qb(41,"div",4),o.Vb(42,"span"),o.Ec(43,"WBUT(MAKAUT)"),o.Ub(),o.Ub(),o.Vb(44,"div",5),o.Vb(45,"span"),o.Ec(46,"Secured DGPA 8.04 - Computer Science and Engineering"),o.Ub(),o.Vb(47,"span"),o.Ec(48,"Kalyani Government Engineering College, West Bengal"),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub())},styles:[".container[_ngcontent-%COMP%]{height:100%;overflow:auto}section[_ngcontent-%COMP%]{width:100%;display:block;padding:4rem 8rem;overflow-y:auto;touch-action:pan-y}section[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:2rem}section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{width:100%;margin-bottom:1rem;border-radius:.25rem;padding:.75rem}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.25rem;display:flex;align-items:center;margin-bottom:.25rem}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .stop[_ngcontent-%COMP%]{height:.35rem;width:.35rem;border-radius:50%;margin:0 .5rem}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:column;line-height:1.35rem}@media screen and (max-width:767px){.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{width:100%;padding:2rem 1rem}.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.25rem;display:flex;flex-direction:column;align-items:flex-start;line-height:1.35rem}.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative}.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .stop[_ngcontent-%COMP%]{display:none}}"]}),e})(),u=(()=>{class e{constructor(e){this.swipeNavigate=e}}return e.\u0275fac=function(t){return new(t||e)(o.Pb(c))},e.\u0275cmp=o.Jb({type:e,selectors:[["ng-component"]],decls:2,vars:0,consts:[[1,"container",3,"swipeleft","swiperight"]],template:function(e,t){1&e&&(o.Vb(0,"div",0),o.dc("swipeleft",(function(e){return t.swipeNavigate.onSwipeLeft(e)}))("swiperight",(function(e){return t.swipeNavigate.onSwipeRight(e)})),o.Ec(1," Work History\n"),o.Ub())},styles:[".container[_ngcontent-%COMP%]{height:100%;overflow:auto;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.container[_ngcontent-%COMP%]   .snap-to[_ngcontent-%COMP%]{scroll-snap-align:start}"]}),e})(),w=(()=>{class e{transform(e,t,n){return e?e.filter(e=>t(e,n)):e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=o.Ob({name:"appFilter",type:e,pure:!0}),e})();const C=function(e){return{"detail-icon-clr":e}};function v(e,t){if(1&e){const e=o.Wb();o.Vb(0,"div",7),o.dc("click",(function(){o.wc(e);const n=t.$implicit;return o.hc().onToggleFilter(n)})),o.Qb(1,"i"),o.Ub()}if(2&e){const e=t.$implicit;o.nc("ngClass",o.pc(4,C,e.active)),o.Cb(1),o.Eb("fas fa-",e.type,"")}}function P(e,t){if(1&e&&(o.Vb(0,"div",8),o.Qb(1,"i"),o.Vb(2,"span"),o.Ec(3),o.Ub(),o.Ub()),2&e){const e=t.$implicit;o.Cb(1),o.Eb("fas fa-",e.type," icon detail-icon-clr"),o.Cb(2),o.Fc(e.message)}}const O=[{path:"",canActivateChild:[r],children:[{path:"details",component:l},{path:"skills",component:h},{path:"academics",component:f},{path:"work",component:u},{path:"achievements",component:(()=>{class e{constructor(e){this.swipeNavigate=e,this.list=[{type:"award",message:"Runners up in inter-school basketball competition(2012, Salt Lake School, Kolkata)."},{type:"award",message:"First place in Java coding contest Paridhi(Meghnad Saha Institute of Technology, Kolkata, 2013)."},{type:"award",message:"First place in zonal round of autonomous robotics competition Robotryst organized by Robosapiens Technologies(2014)."},{type:"certificate",message:"Certificate of professional course in Network Management(2015)."},{type:"certificate",message:"Certificate of honour for co-organizing manual robotics competition in Techtix(2016, Kalyani Government Engineering College, Kalyani)."},{type:"award",message:"Awarded \u201cOn the Spot Award\u201d multiple times for technical assistance, problem solving and analytical abilities for efficient and effective solutions(2016-2018)."},{type:"award",message:"Awarded \u201cStar of the Month\u201d for fast production issue resolution in multiple projects(2018)."},{type:"award",message:'Awarded "Innovation Pride Award" for securing 24th rank in TCS India coding contest(Codevita, 2018).'},{type:"award",message:"Awarded \u201cStar of the Quarter\u201d for delivering under strict timelines and assisting multiple projects in their development bottlenecks at the same time(2019)."},{type:"award",message:'Awarded "Innovation Pride Award" for securing 2nd rank in TCS India coding contest(Codevita, 2019).'},{type:"award",message:"Secured 71st rank in TCS Global coding contest(Supercoders, 2019)."},{type:"scroll",message:"Published white paper on Java Web Application Security under TCS Internal knowledge database(2019)."},{type:"award",message:"Runners up(in team) for bay decoration during Durga Puja event(2019)."}],this.filter=[{type:"award",active:!0},{type:"certificate",active:!0},{type:"scroll",active:!0}],this.filterBy=(e,t)=>t.filter(e=>e.active).map(e=>e.type).indexOf(e.type)>-1}onToggleFilter(e){e.active=!e.active,this.filter=[...this.filter]}}return e.\u0275fac=function(t){return new(t||e)(o.Pb(c))},e.\u0275cmp=o.Jb({type:e,selectors:[["ng-component"]],decls:11,vars:6,consts:[[1,"container",3,"swipeleft","swiperight"],[1,"header","accent-clr"],[1,"filters","overlay-bg"],[1,"filter-container","overlay-bg"],["class","filter detail-bg",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"main-clr"],["class","detail detail-bg",4,"ngFor","ngForOf"],[1,"filter","detail-bg",3,"ngClass","click"],[1,"detail","detail-bg"]],template:function(e,t){1&e&&(o.Vb(0,"div",0),o.dc("swipeleft",(function(e){return t.swipeNavigate.onSwipeLeft(e)}))("swiperight",(function(e){return t.swipeNavigate.onSwipeRight(e)})),o.Vb(1,"section"),o.Vb(2,"span",1),o.Ec(3,"Achievements "),o.Vb(4,"button",2),o.Vb(5,"div",3),o.Dc(6,v,2,6,"div",4),o.Ub(),o.Vb(7,"mat-icon",5),o.Ec(8,"filter_list"),o.Ub(),o.Ub(),o.Ub(),o.Dc(9,P,4,4,"div",6),o.ic(10,"appFilter"),o.Ub(),o.Ub()),2&e&&(o.Cb(6),o.nc("ngForOf",t.filter),o.Cb(3),o.nc("ngForOf",o.kc(10,2,t.list,t.filterBy,t.filter)))},directives:[d.j,s.a,d.i],pipes:[w],styles:[".container[_ngcontent-%COMP%]{height:100%;overflow:auto}section[_ngcontent-%COMP%]{width:100%;display:block;padding:4rem 8rem;overflow-y:auto;touch-action:pan-y}section[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:2rem;display:flex;align-items:center}section[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{position:relative;border:0;padding:.25rem;border-radius:.25rem;cursor:auto;margin-left:auto;display:flex;align-items:center}section[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]:active, section[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]:focus{outline:none}section[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{height:2rem;width:2rem;font-size:2rem;margin:0 .5rem}section[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]{display:flex;align-items:center}section[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{margin:0 .25rem;padding:.25rem;border-radius:.25rem;cursor:pointer;transition:all .25s ease}section[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:2rem;width:2rem}section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;margin:.5rem 0;border-radius:.25rem;padding:.5rem;position:relative}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:1.25rem;width:1.25rem;margin:.25rem 1rem .25rem 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media screen and (max-width:767px){.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{width:100%;padding:2rem 1rem}.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{cursor:pointer;margin:0}.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]{position:absolute;right:calc(100% + .25rem);top:-25%;transition:all .3s cubic-bezier(.6,-.2,.735,.045);transform:translateX(0) scale(0);transform-origin:right;opacity:0;padding:.5rem .25rem;border-radius:.25rem}.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]:active   .filter-container[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]:focus   .filter-container[_ngcontent-%COMP%]{transform:translateX(-.5rem) scale(1);opacity:1}}"]}),e})()},{path:"code",component:(()=>{class e{constructor(e){this.swipeNavigate=e}}return e.\u0275fac=function(t){return new(t||e)(o.Pb(c))},e.\u0275cmp=o.Jb({type:e,selectors:[["ng-component"]],decls:2,vars:0,consts:[[1,"container",3,"swipeleft","swiperight"]],template:function(e,t){1&e&&(o.Vb(0,"div",0),o.dc("swipeleft",(function(e){return t.swipeNavigate.onSwipeLeft(e)}))("swiperight",(function(e){return t.swipeNavigate.onSwipeRight(e)})),o.Ec(1," Code\n"),o.Ub())},styles:[".container[_ngcontent-%COMP%]{height:100%;overflow:auto;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.container[_ngcontent-%COMP%]   .snap-to[_ngcontent-%COMP%]{scroll-snap-align:start}"]}),e})()}].map((e,t)=>Object.assign(Object.assign({},e),{data:{pos:t+1}}))}];let M=(()=>{class e{}return e.\u0275mod=o.Nb({type:e}),e.\u0275inj=o.Mb({factory:function(t){return new(t||e)},providers:[r],imports:[[i.d.forChild(O)],i.d]}),e})();var _=n("HUga"),y=n("IYOu");n.d(t,"HomeModule",(function(){return U}));let U=(()=>{class e{}return e.\u0275mod=o.Nb({type:e}),e.\u0275inj=o.Mb({factory:function(t){return new(t||e)},providers:[c],imports:[[_.a,y.a,M]]}),e})()}}]);