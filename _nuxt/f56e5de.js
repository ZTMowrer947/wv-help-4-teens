(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{222:function(t,e,n){},224:function(t,e,n){var map={"./addiction.png":225,"./anxiety.png":226,"./bullying.png":227,"./depression.png":228,"./homelessness.png":229,"./obesity.png":230,"./peer-pressure.png":231,"./social-media.png":232};function r(t){var e=c(t);return n(e)}function c(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=c,t.exports=r,r.id=224},225:function(t,e,n){t.exports=n.p+"img/addiction.c7eb1e4.png"},226:function(t,e,n){t.exports=n.p+"img/anxiety.e32f5af.png"},227:function(t,e,n){t.exports=n.p+"img/bullying.54b65b9.png"},228:function(t,e,n){t.exports=n.p+"img/depression.c0f5875.png"},229:function(t,e,n){t.exports=n.p+"img/homelessness.75bcff5.png"},230:function(t,e,n){t.exports=n.p+"img/obesity.4bb1556.png"},231:function(t,e,n){t.exports=n.p+"img/peer-pressure.429382f.png"},232:function(t,e,n){t.exports=n.p+"img/social-media.05ccab3.png"},233:function(t,e,n){"use strict";var r=n(222);n.n(r).a},236:function(t,e,n){"use strict";n.r(e);n(19),n(20),n(1),n(88),n(37);var r=n(11),c=n(12),o=n(22),f=n(35),l=n(50),d=n(24),m=n(28),v=n(89),y=n(116);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var c=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var _=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},h=function(t){Object(f.a)(n,t);var e=x(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"encodeString",value:function(input){return btoa(input)}}]),n}(v.b),O=h=_([Object(v.a)({asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(new y.a).getById(t.params.id);case 2:return(n=e.sent)||t.error({statusCode:404,message:"No topic found with given ID"}),e.abrupt("return",{topic:n});case 5:case"end":return e.stop()}}),e)})))()}})],h),w=(n(233),n(32)),component=Object(w.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"h-100 w-100 d-flex flex-column align-items-center"},[r("div",{staticClass:"w-75 mt-5"},[r("nuxt-link",{attrs:{to:"/topics"}},[t._v("< Return to Topic Listing ")])],1),t._v(" "),r("img",{attrs:{id:"topic-logo",src:n(224)("./"+t.topic.id+".png"),alt:"Image for "+t.topic.name}}),t._v(" "),r("h1",{staticClass:"display-4 text-center text-lg-right mb-5"},[t._v("\n        Resources for "+t._s(t.topic.name)+"\n    ")]),t._v(" "),r("div",{staticClass:"w-75 d-flex flex-column align-items-center justify-content-center"},[r("ul",{staticClass:"list-unstyled"},t._l(t.topic.resources,(function(e){return r("li",{key:t.encodeString(t.topic.id+e.description)},[r("a",{attrs:{href:e.link,target:"_blank",rel:"noopener noreferrer"}},[e.displayName?[t._v("\n                        "+t._s(e.displayName)+"\n                    ")]:[t._v("\n                        "+t._s(e.link)+"\n                    ")]],2),t._v(" "),r("p",[t._v(t._s(e.description))])])})),0),t._v(" "),r("nuxt-link",{staticClass:"align-self-start",attrs:{to:"/topics"}},[t._v("\n            < Return to Topic Listing\n        ")])],1)])}),[],!1,null,"533af5cf",null);e.default=component.exports}}]);