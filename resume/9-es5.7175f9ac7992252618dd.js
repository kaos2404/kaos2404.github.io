function _toConsumableArray(n){return _arrayWithoutHoles(n)||_iterableToArray(n)||_unsupportedIterableToArray(n)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(n,t){if(n){if("string"==typeof n)return _arrayLikeToArray(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(n,t):void 0}}function _iterableToArray(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}function _arrayWithoutHoles(n){if(Array.isArray(n))return _arrayLikeToArray(n)}function _arrayLikeToArray(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"ct+p":function(n,t,e){"use strict";e.r(t);var i,c,o,r=e("tyNb"),a=e("fXoL"),s=e("ZCVb"),l=((c=function(){function n(t){_classCallCheck(this,n),this.routeStateService=t}return _createClass(n,[{key:"canActivateChild",value:function(n,t){return n.data.pos&&this.routeStateService.setAnimate(n.data.pos),this.routeStateService.activatedRoute="/home/"+n.url[0].path,!0}}]),n}()).\u0275fac=function(n){return new(n||c)(a.Zb(s.a))},c.\u0275prov=a.Lb({token:c,factory:c.\u0275fac}),c),g=((i=function(){function n(t,e){var i=this;_classCallCheck(this,n),this._router=t,this.routeStateService=e,this.active=-1,this.routes=["details","skills","academics","work","achievements","code"],this.routeStateService.activeRoute.subscribe((function(n){n&&(i.active=i.routes.indexOf(n.split("/")[2]))}))}return _createClass(n,[{key:"onSwipeLeft",value:function(n){this.active<this.routes.length-1&&(this.active++,this._router.navigate(["/home",this.routes[this.active]]))}},{key:"onSwipeRight",value:function(n){this.active>0&&(this.active--,this._router.navigate(["/home",this.routes[this.active]]))}}]),n}()).\u0275fac=function(n){return new(n||i)(a.Zb(r.a),a.Zb(s.a))},i.\u0275prov=a.Lb({token:i,factory:i.\u0275fac}),i),d=e("jLls"),p=e("NFeN"),f=e("ofXK"),b=((o=function(){function n(t,e){_classCallCheck(this,n),this.el=t,this.renderer=e}return _createClass(n,[{key:"ngOnChanges",value:function(n){if(n.rating){for(var t=this.el.nativeElement.children,e=0;e<t.length;e++)this.renderer.removeChild(this.el.nativeElement,t[e]);for(var i=0;i<this.rating;)i+1<=this.rating?(this.renderer.appendChild(this.el.nativeElement,this.createElement("star")),i+=1):i+.5<=this.rating&&(this.renderer.appendChild(this.el.nativeElement,this.createElement("star_half")),i+=.5);for(;i+1<=5;)this.renderer.appendChild(this.el.nativeElement,this.createElement("star_outline")),i++}}},{key:"createElement",value:function(n){var t=this.renderer.createElement("span"),e=this.renderer.createText(n);return this.renderer.addClass(t,"material-icons"),this.renderer.addClass(t,"icon"),this.renderer.addClass(t,"detail-icon-clr"),this.renderer.appendChild(t,e),t}}]),n}()).\u0275fac=function(n){return new(n||o)(a.Pb(a.l),a.Pb(a.F))},o.\u0275dir=a.Kb({type:o,selectors:[["","rating",""]],inputs:{rating:"rating"},features:[a.Ab]}),o);function m(n,t){if(1&n&&(a.Vb(0,"a",5),a.Fc(1),a.Vb(2,"mat-icon",4),a.Fc(3,"launch"),a.Ub(),a.Ub()),2&n){var e=t.$implicit;a.nc("href",e.link,a.zc),a.Cb(1),a.Hc("",e.desc," ")}}function C(n,t){if(1&n&&(a.Vb(0,"span"),a.Fc(1),a.Ub()),2&n){var e=t.$implicit;a.Cb(1),a.Gc(e)}}function u(n,t){if(1&n&&(a.Vb(0,"div",2),a.Qb(1,"i",11),a.Vb(2,"a",12),a.Fc(3),a.Vb(4,"mat-icon",4),a.Fc(5,"launch"),a.Ub(),a.Ub(),a.Ub()),2&n){var e=t.$implicit;a.Cb(1),a.Eb("fab fa-",e.icon," icon detail-icon-clr"),a.Cb(1),a.nc("href",e.link,a.zc),a.Cb(1),a.Hc("",e.desc," ")}}function h(n,t){if(1&n&&(a.Vb(0,"div",2),a.Vb(1,"span"),a.Fc(2),a.Ub(),a.Qb(3,"div",13),a.Ub()),2&n){var e=t.$implicit;a.Cb(2),a.Gc(e.desc),a.Cb(1),a.nc("rating",e.rating)}}var _,O=((_=function(){function n(t,e){_classCallCheck(this,n),this.swipeNavigate=t,this.details=e.personalDetails}return _createClass(n,[{key:"onLinkClicked",value:function(n,t){window.open(t,"_blank")}}]),n}()).\u0275fac=function(n){return new(n||_)(a.Pb(g),a.Pb(d.a))},_.\u0275cmp=a.Jb({type:_,selectors:[["ng-component"]],decls:45,vars:10,consts:[[1,"container",3,"swipeleft","swiperight"],[1,"header","accent-clr"],[1,"detail","detail-bg"],["aria-hidden","true",1,"fas","fa-user-tie","icon","detail-icon-clr"],[1,"icon","detail-icon-clr"],[1,"link-ref",3,"href"],[1,"lines"],["class","link-ref",3,"href",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["aria-hidden","true",1,"fas","fa-id-card","icon","detail-icon-clr"],["class","detail detail-bg",4,"ngFor","ngForOf"],["aria-hidden","true"],["target","_blank",1,"link-ref",3,"href"],[1,"ratings",3,"rating"]],template:function(n,t){1&n&&(a.Vb(0,"div",0),a.dc("swipeleft",(function(n){return t.swipeNavigate.onSwipeLeft(n)}))("swiperight",(function(n){return t.swipeNavigate.onSwipeRight(n)})),a.Vb(1,"section"),a.Vb(2,"span",1),a.Fc(3,"Details"),a.Ub(),a.Vb(4,"div",2),a.Qb(5,"i",3),a.Vb(6,"span"),a.Fc(7),a.Ub(),a.Ub(),a.Vb(8,"div",2),a.Vb(9,"mat-icon",4),a.Fc(10,"email"),a.Ub(),a.Vb(11,"a",5),a.Fc(12),a.Vb(13,"mat-icon",4),a.Fc(14,"launch"),a.Ub(),a.Ub(),a.Ub(),a.Vb(15,"div",2),a.Vb(16,"mat-icon",4),a.Fc(17,"phone"),a.Ub(),a.Vb(18,"div",6),a.Ec(19,m,4,2,"a",7),a.Ub(),a.Ub(),a.Vb(20,"div",2),a.Vb(21,"mat-icon",4),a.Fc(22,"person_pin"),a.Ub(),a.Vb(23,"div",6),a.Ec(24,C,2,1,"span",8),a.Ub(),a.Ub(),a.Vb(25,"div",2),a.Vb(26,"mat-icon",4),a.Fc(27,"my_location"),a.Ub(),a.Vb(28,"span"),a.Fc(29),a.Ub(),a.Ub(),a.Vb(30,"div",2),a.Qb(31,"i",9),a.Vb(32,"span"),a.Fc(33),a.Ub(),a.Ub(),a.Ec(34,u,6,5,"div",10),a.Ub(),a.Vb(35,"section"),a.Vb(36,"span",1),a.Fc(37,"Languages"),a.Ub(),a.Ec(38,h,4,2,"div",10),a.Qb(39,"br"),a.Vb(40,"span",1),a.Fc(41,"Interests and Hobbies"),a.Ub(),a.Vb(42,"div",2),a.Vb(43,"span"),a.Fc(44),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&n&&(a.Cb(7),a.Gc(t.details.name),a.Cb(4),a.oc("href","mailto:",t.details.email,"",a.zc),a.Cb(1),a.Hc("",t.details.email," "),a.Cb(7),a.nc("ngForOf",t.details.phone),a.Cb(5),a.nc("ngForOf",t.details.address),a.Cb(5),a.Gc(t.details.location),a.Cb(4),a.Gc(t.details.pan),a.Cb(1),a.nc("ngForOf",t.details.socials),a.Cb(4),a.nc("ngForOf",t.details.languages),a.Cb(6),a.Hc("",t.details.hobbies," "))},directives:[p.a,f.j,b],styles:[".container[_ngcontent-%COMP%]{height:100%;overflow:auto;display:flex}section[_ngcontent-%COMP%]{width:50%;display:block;padding:4rem 8rem;overflow-y:auto;touch-action:pan-y}section[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:2rem}section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;margin:.25rem 0;border-radius:.25rem;padding:.5rem;position:relative}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:2rem;width:2rem;font-size:2rem;margin-right:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .ratings[_ngcontent-%COMP%]{display:flex;align-items:center;margin:0 1rem 0 auto}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .ratings[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:1.5rem;width:1.5rem;font-size:1.5rem;margin:0}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .lines[_ngcontent-%COMP%]{display:block}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .link-ref[_ngcontent-%COMP%]{line-height:1.5rem}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .link-ref[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:1rem;height:1rem;width:1rem;margin-left:.25rem;display:none}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .link-ref[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%]{display:inline-block}@media screen and (max-width:1200px) and (max-height:1023px){.container[_ngcontent-%COMP%]{display:block}.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{width:100%;padding:2rem 1rem}}@media screen and (max-width:1200px) and (min-height:1024px){.container[_ngcontent-%COMP%]{display:block}.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{height:auto;width:100%;padding:2rem 1rem}}"]}),_),P=e("FKr1");function M(n,t){if(1&n){var e=a.Wb();a.Vb(0,"div",10),a.dc("click",(function(n){a.xc(e);var i=t.$implicit;return a.hc().onItemClicked(n,i)})),a.Qb(1,"i",11),a.Vb(2,"span"),a.Fc(3),a.Ub(),a.Ub()}if(2&n){var i=t.$implicit;a.Cb(1),a.Fb("",i.type," fab fa-",i.icon," icon detail-icon-clr"),a.Cb(2),a.Gc(i.name)}}function v(n,t){if(1&n&&(a.Vb(0,"span",12),a.Fc(1),a.Ub()),2&n){var e=t.$implicit;a.Cb(1),a.Gc(e)}}var w,y=function(n){return{active:n}},k=((w=function(){function n(t,e){_classCallCheck(this,n),this.swipeNavigate=t,this.list=e.skills,this.active=this.list[0],this.showActive=!1}return _createClass(n,[{key:"onItemClicked",value:function(n,t){var e=this;this.active=t,setTimeout((function(){e.showActive=!0}),300)}}]),n}()).\u0275fac=function(n){return new(n||w)(a.Pb(g),a.Pb(d.a))},w.\u0275cmp=a.Jb({type:w,selectors:[["ng-component"]],decls:14,vars:9,consts:[[1,"container",3,"swipeleft","swiperight"],[1,"header","accent-clr"],[1,"frame","detail-bg"],[1,"list","detail-bg",3,"ngClass"],["class","detail detail-border-bottom","matRipple","",3,"click",4,"ngFor","ngForOf"],[1,"description","detail-bg",3,"ngClass"],[1,"detail","accent-clr","detail-border-bottom"],["matRipple","",3,"click"],[1,"lines"],["class","line",4,"ngFor","ngForOf"],["matRipple","",1,"detail","detail-border-bottom",3,"click"],["aria-hidden","true"],[1,"line"]],template:function(n,t){1&n&&(a.Vb(0,"div",0),a.dc("swipeleft",(function(n){return t.swipeNavigate.onSwipeLeft(n)}))("swiperight",(function(n){return t.swipeNavigate.onSwipeRight(n)})),a.Vb(1,"span",1),a.Fc(2,"Skills"),a.Ub(),a.Vb(3,"div",2),a.Vb(4,"section",3),a.Ec(5,M,4,5,"div",4),a.Ub(),a.Vb(6,"section",5),a.Vb(7,"div",6),a.Vb(8,"span"),a.Fc(9),a.Ub(),a.Vb(10,"mat-icon",7),a.dc("click",(function(){return t.showActive=!1})),a.Fc(11,"arrow_back_ios"),a.Ub(),a.Ub(),a.Vb(12,"div",8),a.Ec(13,v,2,1,"span",9),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&n&&(a.Cb(4),a.nc("ngClass",a.qc(5,y,!t.showActive)),a.Cb(1),a.nc("ngForOf",t.list),a.Cb(1),a.nc("ngClass",a.qc(7,y,t.showActive)),a.Cb(3),a.Gc(t.active.name),a.Cb(4),a.nc("ngForOf",t.active.description))},directives:[f.i,f.j,p.a,P.s],styles:[".container[_ngcontent-%COMP%]{height:100%;overflow:auto;padding:4rem 8rem;display:flex;flex-direction:column}.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:2rem}.container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}.frame[_ngcontent-%COMP%]{display:flex;height:calc(100% - 3.5rem);width:100%;padding:1rem 0;border-radius:.25rem}section[_ngcontent-%COMP%]{width:50%;display:block;flex-direction:column;overflow-y:auto;touch-action:pan-y;padding:0 1rem}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;padding:.75rem;cursor:pointer}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:2rem;width:2rem;font-size:2rem;margin-right:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}section.list[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]:last-child{border-bottom:0}section.description[_ngcontent-%COMP%]{height:100%}section.description[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{margin-bottom:1rem;font-size:1.25rem}section.description[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:calc(100% - 3rem)}section.description[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{height:1.5rem;width:1.5rem;font-size:1.5rem;margin-left:auto;display:none}section.description[_ngcontent-%COMP%]   .lines[_ngcontent-%COMP%]{padding:1rem;overflow-y:auto}@media screen and (max-width:1200px){.container[_ngcontent-%COMP%]{padding:2rem 1rem}.container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]{padding:0;position:relative;overflow:hidden}.container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{width:100%;z-index:1;transition:all .5s cubic-bezier(.6,.1,.4,.2);perspective:200px;transform-style:preserve-3d;will-change:transform}.container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   section.description[_ngcontent-%COMP%]{position:absolute;transform:rotateY(90deg) translateX(100%);transform-origin:top right;display:flex;flex-direction:column}.container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   section.description.active[_ngcontent-%COMP%]{transform:rotateY(0deg) translateX(0)}.container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   section.description[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{display:block}.container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   section.list[_ngcontent-%COMP%]{transform:rotateY(90deg) translateX(-100%);transform-origin:top left}.container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   section.list.active[_ngcontent-%COMP%]{transform:rotateY(0deg) translateX(0)}}"]}),w);function F(n,t){if(1&n&&(a.Tb(0),a.Vb(1,"span"),a.Fc(2),a.Ub(),a.Qb(3,"div",7),a.Sb()),2&n){var e=t.$implicit;a.Cb(2),a.Gc(e)}}function U(n,t){if(1&n&&(a.Vb(0,"span"),a.Fc(1),a.Ub()),2&n){var e=t.$implicit;a.Cb(1),a.Gc(e)}}function V(n,t){if(1&n&&(a.Vb(0,"div",3),a.Vb(1,"div",4),a.Ec(2,F,4,1,"ng-container",5),a.Ub(),a.Vb(3,"div",6),a.Ec(4,U,2,1,"span",5),a.Ub(),a.Ub()),2&n){var e=t.$implicit;a.Cb(2),a.nc("ngForOf",e.title),a.Cb(2),a.nc("ngForOf",e.content)}}var x,S,A,E=((A=function n(t,e){_classCallCheck(this,n),this.swipeNavigate=t,this.list=e.academics}).\u0275fac=function(n){return new(n||A)(a.Pb(g),a.Pb(d.a))},A.\u0275cmp=a.Jb({type:A,selectors:[["ng-component"]],decls:5,vars:1,consts:[[1,"container",3,"swipeleft","swiperight"],[1,"header","accent-clr"],["class","detail detail-bg",4,"ngFor","ngForOf"],[1,"detail","detail-bg"],[1,"title","accent-clr"],[4,"ngFor","ngForOf"],[1,"content"],[1,"stop","accent-bg"]],template:function(n,t){1&n&&(a.Vb(0,"div",0),a.dc("swipeleft",(function(n){return t.swipeNavigate.onSwipeLeft(n)}))("swiperight",(function(n){return t.swipeNavigate.onSwipeRight(n)})),a.Vb(1,"section"),a.Vb(2,"span",1),a.Fc(3,"Academics"),a.Ub(),a.Ec(4,V,5,2,"div",2),a.Ub(),a.Ub()),2&n&&(a.Cb(4),a.nc("ngForOf",t.list))},directives:[f.j],styles:[".container[_ngcontent-%COMP%]{height:100%;overflow:auto}section[_ngcontent-%COMP%]{width:100%;display:block;padding:4rem 8rem;overflow-y:auto;touch-action:pan-y}section[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:2rem}section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{width:100%;margin-bottom:1rem;border-radius:.25rem;padding:.75rem}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.25rem;display:flex;align-items:center;margin-bottom:.25rem}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .stop[_ngcontent-%COMP%]{height:.35rem;width:.35rem;border-radius:50%;margin:0 .5rem}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .stop[_ngcontent-%COMP%]:last-child{display:none}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:column;line-height:1.35rem}@media screen and (max-width:767px){.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{width:100%;padding:2rem 1rem}.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.25rem;display:flex;flex-direction:column;align-items:flex-start;line-height:1.35rem}.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative}.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .stop[_ngcontent-%COMP%]{display:none}}"]}),A),z=((S=function n(t){_classCallCheck(this,n),this.swipeNavigate=t}).\u0275fac=function(n){return new(n||S)(a.Pb(g))},S.\u0275cmp=a.Jb({type:S,selectors:[["ng-component"]],decls:2,vars:0,consts:[[1,"container",3,"swipeleft","swiperight"]],template:function(n,t){1&n&&(a.Vb(0,"div",0),a.dc("swipeleft",(function(n){return t.swipeNavigate.onSwipeLeft(n)}))("swiperight",(function(n){return t.swipeNavigate.onSwipeRight(n)})),a.Fc(1," Work History\n"),a.Ub())},styles:[".container[_ngcontent-%COMP%]{height:100%;overflow:auto;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.container[_ngcontent-%COMP%]   .snap-to[_ngcontent-%COMP%]{scroll-snap-align:start}"]}),S),N=((x=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"transform",value:function(n,t,e){return n?n.filter((function(n){return t(n,e)})):n}}]),n}()).\u0275fac=function(n){return new(n||x)},x.\u0275pipe=a.Ob({name:"appFilter",type:x,pure:!0}),x),L=function(n){return{"detail-icon-clr":n}};function T(n,t){if(1&n){var e=a.Wb();a.Vb(0,"div",7),a.dc("click",(function(){a.xc(e);var n=t.$implicit;return a.hc().onToggleFilter(n)})),a.Qb(1,"i"),a.Ub()}if(2&n){var i=t.$implicit;a.nc("ngClass",a.qc(4,L,i.active)),a.Cb(1),a.Eb("fas fa-",i.type,"")}}function j(n,t){if(1&n&&(a.Vb(0,"div",8),a.Qb(1,"i"),a.Vb(2,"span"),a.Fc(3),a.Ub(),a.Ub()),2&n){var e=t.$implicit;a.Cb(1),a.Eb("fas fa-",e.type," icon detail-icon-clr"),a.Cb(2),a.Gc(e.message)}}var $,R,G,I=[{path:"",canActivateChild:[l],children:[{path:"details",component:O},{path:"skills",component:k},{path:"academics",component:E},{path:"work",component:z},{path:"achievements",component:(R=function(){function n(t,e){_classCallCheck(this,n),this.swipeNavigate=t,this.list=e.achivements,this.filter=this.list.map((function(n){return n.type})).filter((function(n,t,e){return e.indexOf(n)===t})).map((function(n){return{type:n,active:!0}})),this.filterBy=function(n,t){return t.filter((function(n){return n.active})).map((function(n){return n.type})).indexOf(n.type)>-1}}return _createClass(n,[{key:"onToggleFilter",value:function(n){n.active=!n.active,this.filter=_toConsumableArray(this.filter)}}]),n}(),R.\u0275fac=function(n){return new(n||R)(a.Pb(g),a.Pb(d.a))},R.\u0275cmp=a.Jb({type:R,selectors:[["ng-component"]],decls:11,vars:6,consts:[[1,"container",3,"swipeleft","swiperight"],[1,"header","accent-clr"],[1,"filters","overlay-bg"],[1,"filter-container","overlay-bg"],["class","filter detail-bg",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"main-clr"],["class","detail detail-bg",4,"ngFor","ngForOf"],[1,"filter","detail-bg",3,"ngClass","click"],[1,"detail","detail-bg"]],template:function(n,t){1&n&&(a.Vb(0,"div",0),a.dc("swipeleft",(function(n){return t.swipeNavigate.onSwipeLeft(n)}))("swiperight",(function(n){return t.swipeNavigate.onSwipeRight(n)})),a.Vb(1,"section"),a.Vb(2,"span",1),a.Fc(3,"Achievements "),a.Vb(4,"button",2),a.Vb(5,"div",3),a.Ec(6,T,2,6,"div",4),a.Ub(),a.Vb(7,"mat-icon",5),a.Fc(8,"filter_list"),a.Ub(),a.Ub(),a.Ub(),a.Ec(9,j,4,4,"div",6),a.ic(10,"appFilter"),a.Ub(),a.Ub()),2&n&&(a.Cb(6),a.nc("ngForOf",t.filter),a.Cb(3),a.nc("ngForOf",a.kc(10,2,t.list,t.filterBy,t.filter)))},directives:[f.j,p.a,f.i],pipes:[N],styles:[".container[_ngcontent-%COMP%]{height:100%;overflow:auto}section[_ngcontent-%COMP%]{width:100%;display:block;padding:4rem 8rem;overflow-y:auto;touch-action:pan-y}section[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:2rem;display:flex;align-items:center}section[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{position:relative;border:0;padding:.25rem;border-radius:.25rem;cursor:auto;margin-left:auto;display:flex;align-items:center}section[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]:active, section[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]:focus{outline:none}section[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{height:2rem;width:2rem;font-size:2rem;margin:0 .5rem}section[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]{display:flex;align-items:center}section[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{margin:0 .25rem;padding:.25rem;border-radius:.25rem;cursor:pointer;transition:all .25s ease}section[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:2rem;width:2rem}section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;margin:.5rem 0;border-radius:.25rem;padding:.5rem;position:relative}section[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:1.25rem;width:1.25rem;margin:.25rem 1rem .25rem 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media screen and (max-width:767px){.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{width:100%;padding:2rem 1rem}.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{cursor:pointer;margin:0}.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]{position:absolute;right:calc(100% + .25rem);top:-25%;transition:all .3s cubic-bezier(.6,-.2,.735,.045);transform:translateX(0) scale(0);transform-origin:right;opacity:0;padding:.5rem .25rem;border-radius:.25rem}.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]:active   .filter-container[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]:focus   .filter-container[_ngcontent-%COMP%]{transform:translateX(-.5rem) scale(1);opacity:1}}"]}),R)},{path:"code",component:($=function n(t){_classCallCheck(this,n),this.swipeNavigate=t},$.\u0275fac=function(n){return new(n||$)(a.Pb(g))},$.\u0275cmp=a.Jb({type:$,selectors:[["ng-component"]],decls:2,vars:0,consts:[[1,"container",3,"swipeleft","swiperight"]],template:function(n,t){1&n&&(a.Vb(0,"div",0),a.dc("swipeleft",(function(n){return t.swipeNavigate.onSwipeLeft(n)}))("swiperight",(function(n){return t.swipeNavigate.onSwipeRight(n)})),a.Fc(1," Code\n"),a.Ub())},styles:[".container[_ngcontent-%COMP%]{height:100%;overflow:auto;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.container[_ngcontent-%COMP%]   .snap-to[_ngcontent-%COMP%]{scroll-snap-align:start}"]}),$)}].map((function(n,t){return Object.assign(Object.assign({},n),{data:{pos:t+1}})}))}],H=((G=function n(){_classCallCheck(this,n)}).\u0275mod=a.Nb({type:G}),G.\u0275inj=a.Mb({factory:function(n){return new(n||G)},providers:[l],imports:[[r.d.forChild(I)],r.d]}),G),Q=e("HUga"),J=e("IYOu");e.d(t,"HomeModule",(function(){return W}));var X,W=((X=function n(){_classCallCheck(this,n)}).\u0275mod=a.Nb({type:X}),X.\u0275inj=a.Mb({factory:function(n){return new(n||X)},providers:[g],imports:[[Q.a,J.a,H]]}),X)}}]);