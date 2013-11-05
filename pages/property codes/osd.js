(function(){var m=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ca=function(a){var b=aa(a);return"array"==b||"object"==b&&"number"==typeof a.length},p=function(a){return"string"==typeof a},da=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ea=function(a,b,c){return a.call.apply(a.bind,arguments)},fa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);
Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},q=function(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return q.apply(null,arguments)},ga=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};var ha=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a};var ia=ha("1.0"),ja=ha("0.20"),ka=ha("0.95"),la=ha("0.02");var ma;var sa=function(a){if(!na.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(oa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(pa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(qa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ra,"&quot;"));return a},oa=/&/g,pa=/</g,qa=/>/g,ra=/\"/g,na=/[&<>\"]/;var s=document,u=window;var v=function(a,b){this.width=a;this.height=b};v.prototype.L=function(){return new v(this.width,this.height)};v.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};v.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var ta=null;function w(a){return"function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a)}
var x=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)},y=function(a,b){a.google_image_requests||(a.google_image_requests=[]);var c=a.document.createElement("img");c.src=b;a.google_image_requests.push(c)},ua={},va=function(){var a;a=a||window;var b=!1;a&&a.navigator&&a.navigator.userAgent&&(a=a.navigator.userAgent,b=0!=a.indexOf("Opera")&&-1!=a.indexOf("WebKit")&&-1!=a.indexOf("Mobile"));return b},wa=function(a,b){if(!(1E-4>Math.random())){var c=
Math.random();if(c<b)return a[Math.floor(c/b*a.length)]}return null},z=function(a){try{return!!a.location.href||""===a.location.href}catch(b){return!1}};var xa=!!window.google_async_iframe_id,A=xa&&window.parent||window,B=function(){if(xa&&!z(A)){for(var a="."+s.domain;2<a.split(".").length&&!z(A);)s.domain=a=a.substr(a.indexOf(".")+1),A=window.parent;z(A)||(A=window)}return A};var C=Array.prototype,ya=C.indexOf?function(a,b,c){return C.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=C.forEach?function(a,b,c){C.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,g=0;g<d;g++)g in e&&b.call(c,e[g],g,a)},za=function(a,b){for(var c=p(a)?a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)},Aa=C.map?
function(a,b,c){return C.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),g=p(a)?a.split(""):a,f=0;f<d;f++)f in g&&(e[f]=b.call(c,g[f],f,a));return e},Ba=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]},Ca=function(a,b,c){return 2>=arguments.length?C.slice.call(a,b):C.slice.call(a,b,c)};var Da=function(a){for(var b=0,c=a,d=0;a!=a.parent;)a=a.parent,d++,z(a)&&(c=a,b=d);return{Oa:c,Pa:b}};var E=function(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0};E.prototype.L=function(){return new E(this.x,this.y)};E.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};E.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};var Ea=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},Fa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Ga=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var g=0;g<Fa.length;g++)c=Fa[g],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var F,Ha,Ia,Ja,Ka=function(){return m.navigator?m.navigator.userAgent:null};Ja=Ia=Ha=F=!1;var G;if(G=Ka()){var La=m.navigator;F=0==G.lastIndexOf("Opera",0);Ha=!F&&(-1!=G.indexOf("MSIE")||-1!=G.indexOf("Trident"));Ia=!F&&-1!=G.indexOf("WebKit");Ja=!F&&!Ia&&!Ha&&"Gecko"==La.product}var Ma=F,H=Ha,I=Ja,J=Ia,Na=function(){var a=m.document;return a?a.documentMode:void 0},Oa;
i:{var Pa="",Qa;if(Ma&&m.opera)var Ra=m.opera.version,Pa="function"==typeof Ra?Ra():Ra;else if(I?Qa=/rv\:([^\);]+)(\)|;)/:H?Qa=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:J&&(Qa=/WebKit\/(\S+)/),Qa)var Sa=Qa.exec(Ka()),Pa=Sa?Sa[1]:"";if(H){var Ta=Na();if(Ta>parseFloat(Pa)){Oa=String(Ta);break i}}Oa=Pa}
var Ua=Oa,Va={},Wa=function(a){var b;if(!(b=Va[a])){b=0;for(var c=String(Ua).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),g=0;0==b&&g<e;g++){var f=c[g]||"",h=d[g]||"",l=RegExp("(\\d*)(\\D*)","g"),k=RegExp("(\\d*)(\\D*)","g");do{var n=l.exec(f)||["","",""],t=k.exec(h)||["","",""];if(0==n[0].length&&0==t[0].length)break;b=((0==n[1].length?0:parseInt(n[1],10))<(0==t[1].length?0:parseInt(t[1],10))?-1:(0==n[1].length?
0:parseInt(n[1],10))>(0==t[1].length?0:parseInt(t[1],10))?1:0)||((0==n[2].length)<(0==t[2].length)?-1:(0==n[2].length)>(0==t[2].length)?1:0)||(n[2]<t[2]?-1:n[2]>t[2]?1:0)}while(0==b)}b=Va[a]=0<=b}return b},Xa=m.document,Za=Xa&&H?Na()||("CSS1Compat"==Xa.compatMode?parseInt(Ua,10):5):void 0;var $a=!H||H&&9<=Za;!I&&!H||H&&H&&9<=Za||I&&Wa("1.9.1");H&&Wa("9");var ab=function(a,b){var c;c=a.className;c=p(c)&&c.match(/\S+/g)||[];for(var d=Ca(arguments,1),e=c.length+d.length,g=c,f=0;f<d.length;f++)0<=ya(g,d[f])||g.push(d[f]);a.className=c.join(" ");return c.length==e};var bb=function(a){return a?new K(M(a)):ma||(ma=new K)},db=function(a,b){Ea(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in cb?a.setAttribute(cb[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},cb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"},
fb=function(a,b,c){var d=arguments,e=document,g=d[0],f=d[1];if(!$a&&f&&(f.name||f.type)){g=["<",g];f.name&&g.push(' name="',sa(f.name),'"');if(f.type){g.push(' type="',sa(f.type),'"');var h={};Ga(h,f);delete h.type;f=h}g.push(">");g=g.join("")}g=e.createElement(g);f&&(p(f)?g.className=f:"array"==aa(f)?ab.apply(null,[g].concat(f)):db(g,f));2<d.length&&eb(e,g,d);return g},eb=function(a,b,c){function d(c){c&&b.appendChild(p(c)?a.createTextNode(c):c)}for(var e=2;e<c.length;e++){var g=c[e];if(!ca(g)||
da(g)&&0<g.nodeType)d(g);else{var f;i:{if(g&&"number"==typeof g.length){if(da(g)){f="function"==typeof g.item||"string"==typeof g.item;break i}if("function"==aa(g)){f="function"==typeof g.item;break i}}f=!1}D(f?Ba(g):g,d)}}},M=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document},K=function(a){this.O=a||m.document||document};K.prototype.createElement=function(a){return this.O.createElement(a)};K.prototype.createTextNode=function(a){return this.O.createTextNode(String(a))};
var gb=function(a){var b=a.O;a=J||"CSS1Compat"!=b.compatMode?b.body||b.documentElement:b.documentElement;b=b.parentWindow||b.defaultView;return H&&Wa("10")&&b.pageYOffset!=a.scrollTop?new E(a.scrollLeft,a.scrollTop):new E(b.pageXOffset||a.scrollLeft,b.pageYOffset||a.scrollTop)};K.prototype.appendChild=function(a,b){a.appendChild(b)};
K.prototype.contains=function(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var N=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};N.prototype.L=function(){return new N(this.top,this.right,this.bottom,this.left)};N.prototype.contains=function(a){return this&&a?a instanceof N?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
N.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};N.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};var hb=/[&\?](?:client|correlator|url|ifk|oid|eid)=[^&]+/g,ib=/[&\?](?:slotname|dt|ifi|adx|ady|format|output|flash|impl)=[^&]+/g;var O=function(a,b){var c;i:{c=M(a);if(c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))){c=c[b]||c.getPropertyValue(b)||"";break i}c=""}return c||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]},jb=function(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}H&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);
return b},kb=function(a){if(H&&!(H&&8<=Za))return a.offsetParent;var b=M(a),c=O(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=O(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null},lb=function(a){var b,c=M(a),d=O(a,"position"),e=I&&c.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==d&&(b=c.getBoxObjectFor(a))&&
(0>b.screenX||0>b.screenY),g=new E(0,0),f;b=c?M(c):document;(f=!H)||(f=H&&9<=Za)||(f="CSS1Compat"==bb(b).O.compatMode);f=f?b.documentElement:b.body;if(a==f)return g;if(a.getBoundingClientRect)b=jb(a),a=gb(bb(c)),g.x=b.left+a.x,g.y=b.top+a.y;else if(c.getBoxObjectFor&&!e)b=c.getBoxObjectFor(a),a=c.getBoxObjectFor(f),g.x=b.screenX-a.screenX,g.y=b.screenY-a.screenY;else{e=a;do{g.x+=e.offsetLeft;g.y+=e.offsetTop;e!=a&&(g.x+=e.clientLeft||0,g.y+=e.clientTop||0);if(J&&"fixed"==O(e,"position")){g.x+=c.body.scrollLeft;
g.y+=c.body.scrollTop;break}e=e.offsetParent}while(e&&e!=a);if(Ma||J&&"absolute"==d)g.y-=c.body.offsetTop;for(e=a;(e=kb(e))&&e!=c.body&&e!=f;)g.x-=e.scrollLeft,Ma&&"TR"==e.tagName||(g.y-=e.scrollTop)}return g},mb=/matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;var nb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),pb=function(a){if(ob){ob=!1;var b=m.location;if(b){var c=b.href;if(c&&(c=(c=pb(c)[3]||null)&&decodeURIComponent(c))&&c!=b.hostname)throw ob=!0,Error();}}return a.match(nb)},ob=J,qb=function(a,b,c){if("array"==aa(b))for(var d=0;d<b.length;d++)qb(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))};var P=!1,rb=function(a){if(a=a.match(/[\d]+/g))a.length=3};
if(navigator.plugins&&navigator.plugins.length){var sb=navigator.plugins["Shockwave Flash"];sb&&(P=!0,sb.description&&rb(sb.description));navigator.plugins["Shockwave Flash 2.0"]&&(P=!0)}else if(navigator.mimeTypes&&navigator.mimeTypes.length){var tb=navigator.mimeTypes["application/x-shockwave-flash"];(P=tb&&tb.enabledPlugin)&&rb(tb.enabledPlugin.description)}else try{var ub=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),P=!0;rb(ub.GetVariable("$version"))}catch(vb){try{ub=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),
P=!0}catch(wb){try{ub=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),P=!0,rb(ub.GetVariable("$version"))}catch(xb){}}};var yb=function(a){var b=u;a&&b.top!=b&&(b=b.top);try{var c;if(b.document&&!b.document.body)c=new v(-1,-1);else{var d=(b||window).document,e="CSS1Compat"==d.compatMode?d.documentElement:d.body;c=new v(e.clientWidth,e.clientHeight)}return c}catch(g){return new v(-12245933,-12245933)}},zb=function(a,b,c,d){b=b||u;a&&(b=b.top);a=c||yb(a);d=d||gb(bb(b.document));return-1==a.width||-12245933==a.width?new N(a.width,a.width,a.width,a.width):new N(d.y,d.x+a.width,d.y+a.height,d.x)},Ab=function(a,b){("msie"in
ua?ua.msie:ua.msie=-1!=navigator.userAgent.toLowerCase().indexOf("msie"))&&!window.opera?x(a,"readystatechange",function(){"complete"==a.readyState&&b()}):x(a,"load",b)},Bb=function(a,b){try{b.postMessage(a,"*")}catch(c){}},Cb=function(a,b){if(b){a(b);var c=b.frames;if(c){var d=c.length,e;for(e=0;e<d;++e)Cb(a,c[e])}}},Db=function(){var a=0<=Q?R()-Q:-1;return 2E3>a?250:4E3>a?500:1E3},Eb=(new Date).getTime(),Q=-1,R=function(){return(new Date).getTime()-Eb};var S=function(a,b,c,d,e,g,f,h,l){this.a=Fb.L();this.f=this.s=0;this.R=this.S=this.o=-1;this.B=[0,0,0,0,0];this.u=[0,0,0,0,0];this.m=[0,0,0,0,0];this.zoom=[0,0,0,0,0];this.t="";this.ra=!1;this.sa=!0;this.l=d;this.K=this.Q=-1;this.j=b;this.c=0;this.e=e;this.p=f||"";this.q=h||"";this.P=function(){};this.Ba=function(){};this.element=c;this.C=0;this.I=-1;this.A=l||Fb;this.ga=b?-1!=b.indexOf("dcopt=anid"):!1;this.ha="";this.g=c?String(c._avi_||""):"";this.v=0;this.pa=[];this.ta=!1;this.V="";this.F=null;
this.r="";this.Z=null;this.la=-1;this.ka=[[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0]];this.ia=this.T="";this.ma=!1;this.oa=this.na=-1;this.Y=this.G=this.aa=this.$=0;this.k=this.b=this.d=null;this.X=0;this.n=null;this.Da=g;this.Ea=va();this.ua=a;this.D="";this.ba=null;this.J=c?String(c._cvu_||""):"";this.qa=!1;this.ja=null;this.H=!1;Gb(this,a,g);this.W=[];this.Ca=void 0;this.U=
0},Fb=new N(0,0,0,0),Lb=function(a,b,c,d){var e=Hb,g=a.ba,f=null,f=g&&e?new N(e.y,e.x+g.width,e.y+g.height,e.x):new N(-12245933,-12245933,-12245933,-12245933);d||(a.a=f,g&&(a.s=g.width*g.height));Kb(a,f,b,c,d,!0)},Mb=function(a,b,c,d,e){if(!(0>a.l)){var g=u.innerWidth,f=u.innerHeight,h=new N(Math.round(u.mozInnerScreenY),Math.round(u.mozInnerScreenX+g),Math.round(u.mozInnerScreenY+f),Math.round(u.mozInnerScreenX));c=new N(u.screenY+d,u.screenX+c.width,u.screenY+c.height,u.screenX);e||(d=new N(h.top-
c.top,h.right-c.left,h.bottom-c.top,h.left-c.left),d.top>a.a.top?a.a=d:(a.a.right=a.a.left+g,a.a.bottom=a.a.top+f),a.s=g*f);Kb(a,h,c,b,e,!0)}};S.prototype.update=function(a,b,c,d,e){if(0>this.l)return null;c||Gb(this,d,e);Boolean(this.b)&&(c?(this.b&&this.b.Fa(),d.clearInterval(this.k),this.k=null):this.b&&!this.k&&"d"!=this.b.M()&&(this.k=d.setInterval(q(this.Aa,this,d),1E3),this.Aa(d)));return Kb(this,this.a,b,a,c,!1)};
var Kb=function(a,b,c,d,e,g){var f=d-a.l||1;a.l=d;c=Nb(a,c);var h=-1;b=Ob(a,b,c);-1!=b&&(0>a.o&&(a.o=d),a.R=d,-1!=b&&2>=b&&(h=100*a.s/((c.bottom-c.top)*(c.right-c.left)),h=20<=h?0:10<=h?1:5<=h?2:2.5<=h?3:4));a.Ca||Pb(a,b,f,a.Q,g,e,!0);a.Q=e?-1:b;a.K=h;a.P(a,c);-1===a.S&&Qb(a)&&(a.S=d);return a.f},Ob=function(a,b,c){b=new N(Math.max(b.top,c.top),Math.min(b.right,c.right),Math.min(b.bottom,c.bottom),Math.max(b.left,c.left));if(0>=a.s||b.top>=b.bottom||b.left>=b.right)return a.f=0,-1;a.f=(b.bottom-b.top)*
(b.right-b.left)/a.s;return 1<=a.f?0:0.75<=a.f?1:0.5<=a.f?2:0.25<=a.f?3:4},Pb=function(a,b,c,d,e,g,f){e=e&&-1!=d&&2>=d;var h=-1==d||-1==b?-1:Math.max(d,b);d=e?h:d;-1!=d&&(a.B[d]+=c,f&&-1!=d&&2>=d&&-1!=a.K&&(a.zoom[a.K]+=c));for(f=d;0<=f&&4>=f;f++)a.m[f]+=c,a.m[f]>a.u[f]&&(a.u[f]=a.m[f]);for(f=0;f<a.m.length;++f)if(f<b||g||-1==b)a.m[f]=0};
S.prototype.Aa=function(a){if(this.b){var b=this.b.La();this.X=5<=b.Ka&&5<=b.Ja?this.X+b.Ga:0;if(1E3<=this.X)a.clearInterval(this.k),this.k=null,this.b&&this.b.ca(),this.n="v";else if(this.b.Ia()||this.b.Ha())a.clearInterval(this.k),this.k=null,this.b&&this.b.ca(),this.n="i"}};
var Tb=function(a,b,c,d){var e=Qb(a);if(0!=a.v&&(1!=a.v||e&&!a.ta)){var g=Rb(a);g.unshift("adk="+a.c);d&&g.push("r="+d);b=g.concat(b).join("&");d={};d[0]=c;d[3]=b;d[4]=a.c;d[5]=e;d[7]=a.f;Sb(a,d,a.pa);a.ta=e}},Sb=function(a,b,c){try{var d=window.JSON.stringify(b);Ub(a,d,c)}catch(e){}},Ub=function(a,b,c){if(b&&a.element){var d=c?c.length:0;if(0<d)for(var e=0;e<d;++e)Bb(b,c[e]);else{c=[];try{var g=a.element.contentWindow||(a.element.contentDocument||a.element.contentWindow.document?(a.element.contentDocument||
a.element.contentWindow.document).parentWindow||(a.element.contentDocument||a.element.contentWindow.document).defaultView:window);if(g)c=[g];else{var f;var h,d=document,l=a.element||d;f=l.querySelectorAll&&l.querySelector?l.querySelectorAll("IFRAME"):h=l.getElementsByTagName("IFRAME");for(e=0;e<f.length;++e)(g=f[e].contentWindow||(f[e].contentDocument||f[e].contentWindow.document?(f[e].contentDocument||f[e].contentWindow.document).parentWindow||(f[e].contentDocument||f[e].contentWindow.document).defaultView:
window))&&c.push(g)}var k=c.length;if(0<k)for(var n=ga(Bb,b),e=0;e<k;++e)Cb(n,c[e])}catch(t){}}}},Vb=function(a){var b=window;T||0.02<=Math.random()||(a.la=(new Date).getTime(),a.Z=b.setInterval(q(a.Ma,a,b),1E3))};
S.prototype.Ma=function(a){Gb(this,a,!1);var b=zb(!0,a),c=Ob(this,this.a,b),d=Math.floor((this.a.right-this.a.left)/2),e=Math.floor((this.a.bottom-this.a.top)/2),g=new E(this.a.left+d,this.a.top+e),e=[new E(this.a.left+d,this.a.top),new E(this.a.left,this.a.top+e),new E(this.a.left+d,this.a.bottom-1),new E(this.a.right-1,this.a.top+e)];b.bottom-=1;b.right-=1;d=(new Date).getTime();g=b.contains(g);b=Aa(e,q(b.contains,b));b=Wb(b);e=d-this.oa;-1!=b&&(-1==c&&(c=5),++this.ka[c][b]);c=this.na;this.aa=8<=
b&&8<=c&&(12==b||12==c||c==b)?this.aa+e:0;this.Y=Math.max(this.Y,this.aa);this.$=g&&this.ma?this.$+e:0;this.G=Math.max(this.G,this.$);this.oa=d;this.na=b;this.ma=g;Xb(this);d>=this.la+6E4&&(a.clearInterval(this.Z),this.Z=null)};
var Wb=function(a){var b=0;D(a,function(a){b*=2;a&&(b+=1)});return[-1,3,2,6,1,-1,5,10,0,7,-1,11,4,8,9,12][b]},Xb=function(a){var b=[];za(a.ka,function(a){var d=[];D(a,function(a,b){0<a&&d.push(b+"-"+a)});b.push(d.join("_"))});a.T=(1E3<=a.Y?"v":"u")+b.join("~");a.ia=1E3<=a.G?"v":"u"};S.prototype.Na=function(a){this.I=a()};S.prototype.va=function(a){a=a();this.C+=a-this.I;this.I=-1};
var Gb=function(a,b,c){b=c?b:b.top;try{var d=Fb.L(),e=new E(0,0);if(a.element){var d=a.element.getBoundingClientRect(),g=a.element,f=new E(0,0),h=M(g)?M(g).parentWindow||M(g).defaultView:window;do{var l;if(h==b)l=lb(g);else{c=g;var k=void 0;if(c.getBoundingClientRect)var n=jb(c),k=new E(n.left,n.top);else var t=gb(bb(c)),U=lb(c),k=new E(U.x-t.x,U.y-t.y);var L=void 0;if(I&&!Wa(12)){var r=void 0;var V=void 0;H?V="-ms-transform":J?V="-webkit-transform":Ma?V="-o-transform":I&&(V="-moz-transform");var ba=
void 0;V&&(ba=O(c,V));ba||(ba=O(c,"transform"));if(ba)var Ya=ba.match(mb),r=Ya?new E(parseFloat(Ya[1]),parseFloat(Ya[2])):new E(0,0);else r=new E(0,0);L=new E(k.x+r.x,k.y+r.y)}else L=k;l=L}c=l;f.x+=c.x;f.y+=c.y}while(h&&h!=b&&(g=h.frameElement)&&(h=h.parent));e=f}var Uc=d.right-d.left,Vc=d.bottom-d.top,Ib=e.x+a.A.left,Jb=e.y+a.A.top,Wc=a.A.right||Uc,Xc=a.A.bottom||Vc;a.a=new N(Math.round(Jb),Math.round(Ib+Wc),Math.round(Jb+Xc),Math.round(Ib))}catch(wd){a.a=a.A}a.s=(a.a.bottom-a.a.top)*(a.a.right-
a.a.left)},Qb=function(a){return 1E3<=Math.max(a.m[2],a.u[2])},Rb=function(a){var b=a.a,b=["p="+b.top+","+b.left+","+b.bottom+","+b.right];b.push("tos="+a.B.join(","));b.push("mtos="+a.u.join(","));b.push("rs="+a.e);a.D&&b.push("fpe="+a.D);var c=5==a.e||6==a.e;c||b.push("ht="+a.C);0<=a.o&&(b.push("tfs="+a.o),b.push("tls="+a.R));a.g&&b.push("avi="+a.g);a.d&&b.push("swf="+a.d.M());a.n&&b.push("swfv="+(a.b?a.b.M():"")+a.n);a.V&&b.push("fp="+w(a.V));7==a.e&&b.push("qid="+a.ha);a.t&&b.push("afp="+w(a.t));
c&&(a.q&&b.push("ord="+w(a.q)),a.p&&b.push("amd="+w(a.p+";")),a.ga&&b.push("anid=1"),a.r&&b.push("xbid="+w(a.r)),a.W&&0!=a.W.length&&b.push("qt="+a.W.join(",")),a.j&&b.push("req="+w(a.j).substring(0,100)));null!==a.F&&b.push("tp="+a.F);0!=a.U&&b.push("ipc="+a.U);return b},Nb=function(a,b){if(a.Da)return b;var c=a.ua.top||a.ua;try{if(a.Ea&&c&&(c.orientation||0==c.orientation)){var d=90==Math.abs(c.orientation)?c.document.body.clientHeight/c.innerHeight:c.document.body.clientWidth/c.innerWidth;return d?
new N(b.top,b.left+(b.right-b.left)/d,b.top+(b.bottom-b.top)/d,b.left):b}return b}catch(e){return b}};var Yb=!1,Zb=null,$b=null,Hb=null,ac=null,bc=0,cc=!1,dc=0,ec=null,jc=function(a,b,c,d){if(u.top.postMessage)if(1!=a.length)b();else if(ac=a[0].ba){var e;try{e=u.top.frames.google_top_static_frame?!0:!1}catch(g){e=!1}if(e){if(d)bc=2;else if(fc(),2!=bc){b();return}Yb=!0;ec=c;x(u,"message",gc);hc()}else ic()?b():u.setTimeout(function(){jc(a,b,c,d)},50)}else b();else b()},hc=function(){var a={};dc=Math.floor(1E6*Math.random());a[0]="google_loc_request";a[1]=dc;var b=[],c;for(c in a)b.push(c+"="+a[c]);
u.top.postMessage(b.join("\n"),"*")},gc=function(a){var b=a.data.split("\n");a={};for(var c=0;c<b.length;c++){var d=b[c].indexOf("=");-1!=d&&(a[b[c].substr(0,d)]=b[c].substr(d+1))}if(a&&1 in a&&a[1]==dc){b=parseInt(a[10],10);c=parseInt(a[11],10);b=0<b&&0<c?new v(b,c):new v(-12245933,-12245933);-12245933!=b.width&&-12245933!=b.height&&($b=b);b=parseInt(a[12],10);c=parseInt(a[13],10);b=0<=b&&0<=c?new E(b,c):new E(-12245933,-12245933);-12245933!=b.x&&-12245933!=b.y&&(Zb=b);b=ac;if(null!=b&&0<b.width&&
0<b.height){var c=parseInt(a[6],10),d=parseInt(a[7],10),e=parseInt(a[8],10);a=parseInt(a[9],10);a=0<c&&0<d&&0<e&&0<a&&10>=Math.abs(e-b.width)+Math.abs(a-b.height)?new E(c,d):new E(-12245933,-12245933);-12245933!=a.x&&-12245933!=a.y&&(Hb=a)}cc=!0;ec&&(a=ec,ec=null,a());u.setTimeout(hc,Db())}},ic=function(){var a=0<=Q?R()-Q:-1;return-1!=a&&500<a},fc=function(){var a=wa([2],ka);bc=a?a:1},kc=function(){var a=null!=$b&&null!=Zb&&null!=Hb&&null!=ac;return cc&&a};var nc=function(a,b){x(a,"scroll",lc);x(a,"resize",mc);if(b)for(var c,d=0;d<W.length;++d)if(c=W[d],c.element){var e=q(c.Na,c,R);x(c.element,"mouseover",e);e=q(c.va,c,R);x(c.element,"mouseout",e)}},mc=function(){oc(!1);lc()},lc=function(){pc(W,!1)},vc=function(){var a=X,b=qc;if(rc){a=b;oc(!1);var c=sc,b=c.height-a;0>=b&&(b=c.height,a=0);X=new v(c.width,b);b=new tc;b.ya=!0;b.fa=X;b.xa=c;b.wa=a;return b}if(Yb)return a=new tc,a.ea=!1,c=$b,a.fa=c,null!=c&&-12245933!=c.height&&-12245933!=c.width&&(X=c,
b=Zb,null!=b&&-12245933!=b.x&&-12245933!=b.y&&(c=zb(!1,u,c,b),a.N=c,a.ea=!0)),a;if(uc)return a=new tc,a.za=!0,a;i:{b=new tc;b.fa=a;b.da=!1;if(null!=a&&-1!=a.width&&-1!=a.height&&-12245933!=a.width&&-12245933!=a.height){try{c=zb(!0,u,a)}catch(d){a=b;break i}b.N=c;b.da=!0}a=b}return a},pc=function(a,b){if(!wc&&0!=a.length){xc=null;var c=vc();window.clearTimeout(yc);yc=null;try{var d=R();if(c.ya)for(var e=0;e<a.length;e++)Mb(a[e],d,c.xa,c.wa,b);else if(c.ea){var g=kc();cc=!1;for(e=0;e<a.length;e++)Lb(a[e],
c.N,d,b||!g)}else if(c.za)D(a,function(a){if(b)a.d&&a.d.Fa();else if(a.d){var c=a.d.La(),d=[-1,-1,-1,-1,-1,4,2,0],e=d[c.Ka+1];Pb(a,e,c.Ga,d[c.Ja+1],!0,!1);a.Q=e;if(Qb(a))a.P(a,Fb),a.d.ca();else if(a.d.Ia()||a.d.Ha())a.Ba(),a.d.ca()}});else if(c.da)for(e=0;e<a.length;e++)a[e].update(d,c.N,b,u,T);zc+=R()-d;++Ac;Bc()}finally{b||Cc()}}},Ec=function(){var a=Dc,b;s.mozVisibilityState?b="mozvisibilitychange":s.webkitVisibilityState?b="webkitvisibilitychange":s.visibilityState&&(b="visibilitychange");b&&
x(s,b,a)},Dc=function(){var a;a=u.document;a={visible:1,hidden:2,prerender:3,preview:4}[a.webkitVisibilityState||a.mozVisibilityState||a.visibilityState||""]||0;(a=1==a||0==a)&&oc(!0);pc(W,!a)},Cc=function(){yc=window.setTimeout(function(){pc(W,!1)},Db())},W=[],wc=!1,X=null,sc=null,Fc=null,yc=null,T=!z(u.top),Gc="",xc=null,qc=0,rc=!1,uc=!1,Hc=0,Ic=0,zc=0,Ac=0,Jc=-1,oc=function(a){X=yb(!0);if(!a){sc=u.outerWidth?new v(u.outerWidth,u.outerHeight):new v(-12245933,-12245933);a=u;a.top!=a&&(a=a.top);var b=
0,c=0,d=X;try{var e=a.document,g=e.body,f=e.documentElement;if("CSS1Compat"==e.compatMode&&f.scrollHeight)b=f.scrollHeight!=d.height?f.scrollHeight:f.offsetHeight,c=f.scrollWidth!=d.width?f.scrollWidth:f.offsetWidth;else{var h=f.scrollHeight,l=f.scrollWidth,k=f.offsetHeight,n=f.offsetWidth;f.clientHeight!=k&&(h=g.scrollHeight,l=g.scrollWidth,k=g.offsetHeight,n=g.offsetWidth);h>d.height?h>k?(b=h,c=l):(b=k,c=n):h<k?(b=h,c=l):(b=k,c=n)}Fc=new v(c,b)}catch(t){Fc=new v(-12245933,-12245933)}}},Kc=function(a,
b){if(xc&&!b)return Ba(xc);var c=a.document,d=0<=Q?R()-Q:-1;-1==Jc&&(d=R());var e=[],g=W;try{if(0<g.length?((c=X)&&e.push("bs="+c.width+","+c.height),(c=sc)&&e.push("bos="+c.width+","+c.height),(c=Fc)&&e.push("ps="+c.width+","+c.height),a.screen&&e.push("ss="+a.screen.width+","+a.screen.height)):(e.push("url="+w(a.location.href.substring(0,1024))),c.referrer&&e.push("referrer="+w(c.referrer.substring(0,512)))),e.push("tt="+d),e.push("pt="+Q),rc&&e.push("xde=1"),bc&&e.push("pei="+bc),e.push("deb="+
w([1,Hc,Ic,zc,Ac,Jc].join("-"))),a.top!=a){0<g.length&&e.push("iframe_loc="+w(a.location.href.substring(0,512)));var f=yb(!1);e.push("is="+f.width+","+f.height)}}catch(h){e.push("error")}xc=e;return Ba(xc)},Lc=function(a){var b=a.indexOf("Firefox/"),c=-1;if(0<=b){var c=Math.floor(a.substr(b+8))||-1,d=a.indexOf("Mac OS X 10."),b=-1;0<=d&&(b=Number(a.substr(d+12,1))||-1);var e=0<b?-1:a.indexOf("Windows NT "),d=-1;0<=e&&(d={"6.0":0,"6.1":1,"6.2":2}[a.substr(e+11,3)]||-1);a=148;5<=b?a=4<=c?108:3<=c?127:
108:0<=d&&(16==c||17==c||18==c)&&(a=[[146,146,146],[148,147,148],[131,130,136]][d][c-16]);qc=a;rc=!0}},Mc=function(a,b,c){b=fb("iframe",{id:b+"_"+Math.floor(1E13*Math.random()),name:b});b.style.display="none";b.style.width="0px";b.style.height="0px";a.document.body.appendChild(b);c&&b.contentWindow.location.replace(c)},Nc=function(a,b){var c=b.match(a);return c?c.join(""):""},Pc=function(a){var b=Oc,c=W[0],d=(c.j||"").match(/activeViewUseDARTIframe=0/);if(d&&0<d.length||(d=a.document.referrer)&&0<=
d.indexOf("DARTIframe.html"))return"";d="pub_side_iframe_"+Math.floor(1E13*Math.random());b=b!=a.top?b.document.referrer:b.location.href;if(!b)return"";var e=pb(b),b=e[1],g=e[2],f=e[3],e=e[4],h="";b&&(h+=b+":");f&&(h+="//",g&&(h+=g+"@"),h+=f,e&&(h+=":"+e));b=h;g="/doubleclick/DARTIframe.html";c.j&&(f=c.j.match(/mtfIFPath=([^;?]+)/))&&1<f.length&&(g=g.replace("/doubleclick/",f[1]));var l,f={gtVersion:"lidar",mediaserver:"http://s0.2mdn.net/879366"};f.x=c.a.left;f.y=c.a.top;f.w=c.a.right-c.a.left;f.h=
c.a.bottom-c.a.top;e=a.location.href;h=e.length;if(0==h)e=0;else{for(var k=305419896,n=0;n<h;n++)k^=(k<<5)+(k>>2)+e.charCodeAt(n)&4294967295;e=0<k?k:4294967296+k}f.i=e;f.rs=c.e;c.p&&(f.md=c.p);c.q&&(f.od=c.q);c.j&&(f.au=c.j);c.r&&(f.xi=c.r);c.c&&(f.ak=c.c);c.g&&(f.avi=c.g);f.pn=d;f.it="osd";c=[b+g];for(l in f)qb(l,f[l],c);c[1]&&(l=c[0],b=l.indexOf("#"),0<=b&&(c.push(l.substr(b)),c[0]=l=l.substr(0,b)),b=l.indexOf("?"),0>b?c[1]="?":b==l.length-1&&(c[1]=void 0));l=c.join("");Mc(a,d,l);return d},Bc=function(){if("osd"==
Gc)for(var a=W,b=0;b<a.length;b++){var c=Kc(u);Tb(a[b],c,"goog_update_data","u")}},tc=function(){this.xa=this.fa=null;this.wa=0;this.N=null;this.da=this.za=this.ea=this.ya=!1};var Y,Z=0,Qc=null,Rc="",Oc=null,Yc=function(){if(!(0<Q)){try{if(!Sc())return;oc(!1);Tc(!1)}catch(a){}Qc=window.setTimeout(Yc,250)}},Tc=function(a){Zc||(x(u,"message",$c),Zc=!0);Y.getNewBlocks(function(b,c,d,e,k,n,t){if(window&&Date){var U=-1,L=!1;a||e?U=R():L=!0;var r=new S(window,c,b,U,d,T);r.P=ad;r.t=Nc(ib,c);r.c=bd(c);r.U=Z;cd(r);k&&(r.g=k,dd=!0);r.J=t;Vb(r);r.ba=n||null;W.push(r);++Ic;L?Ab(b,function(){r.l=R();ed(r);Dc()}):ed(r)}},a);if(a)for(var b=R(),c=W.length,d=0;d<c;++d){var e=W[d];0>=e.l&&
(e.l=b)}},hd=function(){try{var a=B();Q=R();Oc=Da(a).Oa;window.clearTimeout(Qc);Qc=null;oc(!1);if(Sc())if(Hc=Y.numBlocks(),Tc(!0),0==Ic)fd("n");else{if(T)if(I&&"number"==typeof a.screenX&&"number"==typeof a.mozInnerScreenX&&"number"==typeof a.outerWidth&&0.3>Math.random())Lc(a.navigator.userAgent);else if(0==Z&&2==Y.getOseId()&&Math.random()<ja){var b=Pc(a);if(b){window.setTimeout(function(){var c;i:{var e=0;try{if(e=a.frames[b].frames.length,0<e&&void 0!=a.frames[b].frames.ps_iframe_loaded){c=wc=
!0;break i}}catch(g){if(0<e){c=wc=!0;break i}}c=!1}c||gd()},2E3);return}}gd()}else fd("c")}catch(c){W=[],fd("x")}},gd=function(){if(-1==Jc){var a=B();Ec();Dc();if(T&&!rc&&0==Z){var b=function(){};2==Z&&(b=id);jc(W,b,Dc,Y.shouldForcePeriscope())}b=2==Y.getOseId();nc(a,b);window.setTimeout(function(){fd("t")},36E5);Math.random()<ia&&Mc(u,"google_osd_static_frame");Jc=R()-Q}},fd=function(a){window.clearTimeout(yc);yc=null;var b=B();Y||(Y=Goog_AdSense_getAdAdapterInstance());if(!wc){var c=Y.getOseId();
if(2==c||dd){-1==Jc&&(W=[]);var d=["//pagead2.googlesyndication.com/pagead/gen_204?id=osd"],e=0;try{var g=W;if(0<g.length){pc(g,!0);for(var f=0;f<g.length;f++)if(0<g[f].c){0<g[f].I&&g[f].va(R);var h=g[f],l=h.a,k=["p:",l.top,l.left,l.bottom,l.right];k.push("tos:",h.B.join(","));k.push("mtos:",h.u.join(","));k.push("rs:",h.e);var n=5===h.e||6===h.e;n||(k.push("zoom:",h.zoom.join(",")),k.push("ht:",h.C));0<=h.o&&k.push("tfs:",h.o,"tls:",h.R);k.push("vt:",h.S);h.t&&k.push("fp:",h.t);7===h.e&&k.push("qid:",
h.ha);h.g&&k.push("avi:",h.g);h.d&&k.push("swf:",h.d.M());h.n&&k.push("swfv:",(h.b?h.b.M():"")+h.n);h.T&&(k.push("mpx:",h.T),k.push("mpe:",h.ia),k.push("mpm:",h.G));h.D&&k.push("fpe:",h.D);n&&(h.q&&k.push("ord:",h.q),h.p&&k.push("amd:",h.p,";"),h.ga&&k.push("anid:","1"),h.r&&k.push("xbid:",h.r));null!==h.F&&k.push("tp:"+h.F);null!=h.ja&&k.push("vl:"+h.ja);d.splice(1,0,"adk"+g[f].c+"="+w(k.join(",")));e++}}d.push("r="+a);var t=Kc(b,!1);d.push(t.join("&"));0==g.length&&(d.push("correlator="+Y.getCorrelator()),
d.push("eid="+Y.getOseExpId()),d.push("oid="+c))}catch(U){d.push("error")}if(2==c){f=d.join("&");Rc&&(f+="&fp="+w(Rc));try{y(b,f)}catch(L){}}d.splice(0,1,"//pagead2.googlesyndication.com/activeview?id=osd2");d.splice(1,e);for(f=e=0;f<g.length;f++)if(a=g[f],a.g&&a.c&&!a.H){c=Rb(a);d.splice(1,e,"adk="+a.c+"&"+c.join("&")+"&js=1");e=d.join("&").substring(0,2E3);try{y(b,e)}catch(r){}e=1}d.splice(0,e+1);for(f=0;f<g.length;f++)a=g[f],a.H||Tb(a,d,"goog_image_request")}wc=!0}},dd=!1,Zc=!1,Sc=function(){var a=
B().document;if(!a.body||!a.body.getBoundingClientRect||"function"!=typeof Goog_AdSense_getAdAdapterInstance)return!1;Y=Goog_AdSense_getAdAdapterInstance();return!0},ad=function(a,b){if(a&&!a.ra){var c=Qb(a);if(c||a.sa){var d=c?"1":"0";a.sa=!1;var e=Y.getCorrelator(),g=a.a,f=Fc;Ub(a,["{vi:",d,",cl:",e,",adk:",a.c,",rs:",a.e,",pl:",g.left,",pr:",g.right,",pt:",g.top,",pb:",g.bottom,",vl:",b.left,",vr:",b.right,",vt:",b.top,",vb:",b.bottom,",dw:",f&&f.width||0,",dh:",f&&f.height||0,"}"].join(""));c&&
(a.ra=!0);if(c&&null!=a.J&&null!=a.J.match(/\/pagead\/adview\?.*ai=.*&vt=\d+/i)&&!a.qa){i:{d=a.J;if(!ta){if(!s.body)break i;e=s.createElement("iframe");e.style.display="none";e.id="anonIframe";ta=e;s.body.appendChild(e)}y(ta.contentWindow,d)}a.qa=!0}}c&&2==Z&&jd(a,"v")}},bd=function(a){return(a=a.match(/[&\?](?:adk)=([0-9]+)/))&&2==a.length?parseInt(a[1],10):0},$c=function(a){if(a.data){var b;i:{var c=a.data,d=window;if("object"==typeof c)b=c;else{if("string"==typeof c)try{var e=d.JSON.parse(c);e[2]=
!0;b=e;break i}catch(g){}b=null}}if(b&&(c=b[0],"goog_provide_mode"==c||"goog_request_monitoring"==c)&&(d=b[4],b=b[6],d)){i:{if(d)for(var e=W,f=0;f<e.length;++f)if(e[f].c==d){d=e[f];break i}d=null}d&&(d.v=2==b||2==d.v?2:1==b||1==d.v?1:0,d.pa.push(a.source),"goog_request_monitoring"==c&&(a=d,c=T,d={0:"goog_acknowledge_monitoring"},d[4]=a.c,d[7]=a.f,d[8]=c,Sb(a,d)),b&&0!=b&&(dd=!0))}}},ed=function(a){if(a&&a.c){var b=T,c={0:"goog_get_mode"};c[4]=a.c;c[7]=a.f;c[8]=b;Sb(a,c)}},cd=function(a){if(!Rc){if(!a.j)return;
var b=Nc(hb,a.j);!b||"&"!=b.charAt(0)&&"?"!=b.charAt(0)||(b=b.slice(1));Rc=b}a.V=Rc},jd=function(a,b){if(a&&a.c&&!a.H){var c=Rb(a),d=B(),e=Kc(d,!1);if(a.g){c=["//pagead2.googlesyndication.com/activeview?id=osd2","adk="+a.c+"&"+c.join("&")+"&js=1","r="+b,e.join("&")].join("&");try{y(d,c)}catch(g){}}else Tb(a,e,"goog_image_request",b);a.H=!0}},id=function(){D(W,function(a){jd(a,"i")})},kd=function(a){if(a){for(var b=W,c=-1,d=0;d<b.length;++d)if(b[d].element==a){c=d;break}a=0<=c?W.splice(c,1)[0]:null}else a=
null;if(a&&a.element.contentWindow&&3==a.e){b=B();c=Rb(a);c.unshift("adk="+a.c);c.push("r=u");d=Kc(b,!1);c.push(d.join("&"));try{a.element.contentWindow.osdsir(b,c.join("&"))}catch(e){}}},ld=["Goog_Osd_UnloadAdBlock"],$=m;ld[0]in $||!$.execScript||$.execScript("var "+ld[0]);for(var md;ld.length&&(md=ld.shift());)ld.length||void 0===kd?$=$[md]?$[md]:$[md]={}:$[md]=kd;Y||(Y=Goog_AdSense_getAdAdapterInstance());if(Y.getRegisteredAdblockUrls)for(var nd=Y.getRegisteredAdblockUrls(),od=nd.length,pd=0;pd<od;pd++){var qd=nd[pd].match(/eid=([^&]+)/);if(qd&&2==qd.length&&qd[1].match("947190536")){var rd="//pagead2.googlesyndication.com/pagead/gen_204?id=ltp&ltpseq=2&correlator="+Y.getCorrelator();try{y(u,rd)}catch(sd){}break}}Y||(Y=Goog_AdSense_getAdAdapterInstance());if(Y&&2==Y.getOseId()){var td=wa([1,2],la);td&&(Z=td)}var Gc="osd",ud=B();x(ud,"unload",function(){fd("u")});
var vd=B();if("complete"==vd.document.readyState||vd.google_onload_fired)hd();else{Yc();var xd=B();x(xd,"load",function(){window.setTimeout(hd,100)})};})();
