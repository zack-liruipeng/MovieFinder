var firebase = require('./app');
(function(){
/*! @license Firebase v3.7.4
    Build: 3.7.4-rc.1
    Terms: https://firebase.google.com/terms/ */
(function(){for(var k,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},l="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,m=["Number","MIN_SAFE_INTEGER"],ba=0;ba<m.length-1;ba++){var ca=m[ba];ca in l||(l[ca]={});l=l[ca]}var da=m[m.length-1];
-9007199254740991!=l[da]&&aa(l,da,{configurable:!0,writable:!0,value:-9007199254740991});
var n=this,q=function(a){return void 0!==a},ea=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b};var r=function(a,b){this.code="storage/"+a;this.message="Firebase Storage: "+b;this.serverResponse=null;this.name="FirebaseError"};(function(){var a=Error;function b(){}b.prototype=a.prototype;r.b=a.prototype;r.prototype=new b;r.a=function(b,d,e){for(var c=Array(arguments.length-2),f=2;f<arguments.length;f++)c[f-2]=arguments[f];return a.prototype[d].apply(b,c)}})();
var fa=function(){return new r("unknown","An unknown error occurred, please check the error payload for server response.")},ga=function(){return new r("canceled","User canceled the upload/download.")},ha=function(){return new r("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")},ia=function(a,b,c){return new r("invalid-argument","Invalid argument in `"+b+"` at index "+a+": "+c)},ja=function(){return new r("app-deleted","The Firebase app was deleted.")},t=function(a,b){return new r("invalid-format",
"String does not match format '"+a+"': "+b)},u=function(a){throw new r("internal-error","Internal error: "+a);};var v="https://firebasestorage.googleapis.com";var ka=function(a){if("undefined"!==typeof firebase)return new firebase.Promise(a);throw Error("Error in Firebase Storage - be sure to load firebase-app.js first.");};var la=function(a,b){return-1!==a.indexOf(b)};var ma=function(a,b,c){function d(){z||(z=!0,b.apply(null,arguments))}function e(b){p=setTimeout(function(){p=null;a(g,2===C)},b)}function g(a,b){if(!z)if(a)d.apply(null,arguments);else if(2===C||B)d.apply(null,arguments);else{64>h&&(h*=2);var c;1===C?(C=2,c=0):c=1E3*(h+Math.random());e(c)}}function f(a){Pa||(Pa=!0,z||(null!==p?(a||(C=2),clearTimeout(p),e(0)):a||(C=1)))}var h=1,p=null,B=!1,C=0,z=!1,Pa=!1;e(0);setTimeout(function(){B=!0;f(!0)},c);return f};var na=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},oa=function(a){var b={};na(a,function(a,d){b[a]=d});return b};var w=function(a,b,c,d){this.h=a;this.b={};this.method=b;this.headers={};this.body=null;this.j=c;this.l=this.a=null;this.c=[200];this.g=[];this.timeout=d;this.f=!0};var pa=function(a){var b=encodeURIComponent,c="?";na(a,function(a,e){a=b(a)+"="+b(e);c=c+a+"&"});return c=c.slice(0,-1)};var ra=function(a,b,c,d,e,g,f,h,p,B,C){this.C=a;this.A=b;this.v=c;this.o=d;this.B=e.slice();this.m=g.slice();this.j=this.l=this.c=this.b=null;this.f=this.g=!1;this.s=f;this.h=h;this.D=C;this.w=p;var z=this;this.u=ka(function(a,b){z.l=a;z.j=b;qa(z)})},sa=function(a,b,c){this.b=a;this.c=b;this.a=!!c},qa=function(a){function b(a,b){b?a(!1,new sa(!1,null,!0)):(b=new ta,b.a.withCredentials=d.D,d.b=b,ua(b,d.C,d.A,d.o,d.v).then(function(b){d.b=null;var c=0===va(b),e=x(b);if(!(c=!c))var c=la([408,429],e),
f=la(d.m,e),c=500<=e&&600>e||c||f;c?(b=2===va(b),a(!1,new sa(!1,null,b))):a(!0,new sa(la(d.B,e),b))}))}function c(a,b){var c=d.l;a=d.j;var e=b.c;if(b.b)try{var g=d.s(e,wa(e));q(g)?c(g):c()}catch(B){a(B)}else null!==e?(b=fa(),g=wa(e),b.serverResponse=g,d.h?a(d.h(e,b)):a(b)):(b=b.a?d.f?ja():ga():new r("retry-limit-exceeded","Max retry time for operation exceeded, please try again."),a(b))}var d=a;a.g?c(0,new sa(!1,null,!0)):a.c=ma(b,c,a.w)};ra.prototype.a=function(){return this.u};
ra.prototype.cancel=function(a){this.g=!0;this.f=a||!1;null!==this.c&&(0,this.c)(!1);null!==this.b&&this.b.abort()};var xa=function(a,b,c){var d=pa(a.b),d=a.h+d,e=a.headers?oa(a.headers):{};null!==b&&0<b.length&&(e.Authorization="Firebase "+b);e["X-Firebase-Storage-Version"]="webjs/"+("undefined"!==typeof firebase?firebase.SDK_VERSION:"AppManager");return new ra(d,a.method,e,a.body,a.c,a.g,a.j,a.a,a.timeout,0,c)};var ya=function(a){this.b=firebase.Promise.reject(a)};ya.prototype.a=function(){return this.b};ya.prototype.cancel=function(){};var y=function(a,b){this.bucket=a;this.path=b},za=function(a){var b=encodeURIComponent;return"/b/"+b(a.bucket)+"/o/"+b(a.path)},Ba=function(a){var b;try{b=Aa(a)}catch(c){return new y(a,"")}if(""===b.path)return b;throw new r("invalid-default-bucket","Invalid default bucket '"+a+"'.");},Aa=function(a){for(var b=null,c=[{L:/^gs:\/\/([A-Za-z0-9.\-]+)(\/(.*))?$/i,G:{bucket:1,path:3},K:function(a){"/"===a.path.charAt(a.path.length-1)&&(a.path=a.path.slice(0,-1))}},{L:/^https?:\/\/firebasestorage\.googleapis\.com\/v[A-Za-z0-9_]+\/b\/([A-Za-z0-9.\-]+)\/o(\/([^?#]*).*)?$/i,
G:{bucket:1,path:3},K:function(a){a.path=decodeURIComponent(a.path)}}],d=0;d<c.length;d++){var e=c[d],g=e.L.exec(a);if(g){b=g[e.G.bucket];(g=g[e.G.path])||(g="");b=new y(b,g);e.K(b);break}}if(null==b)throw new r("invalid-url","Invalid URL '"+a+"'.");return b};var Ca=function(){this.a={};this.b=Number.MIN_SAFE_INTEGER},Da=function(a,b){function c(){delete e.a[d]}var d=a.b;a.b++;a.a[d]=b;var e=a;b.a().then(c,c)},Ea=function(a){na(a.a,function(a,c){c&&c.cancel(!0)});a.a={}};var A=function(a){return q(a)&&null!==a},Fa=function(a){return"string"===typeof a||a instanceof String},Ga=function(){return"undefined"!==typeof Blob};var Ha=function(a,b,c,d,e){this.a=a;this.g=null;null!==this.a&&(a=this.a.options,A(a)&&(a=a.storageBucket||null,this.g=null==a?null:Ba(a).bucket));this.o=b;this.m=c;this.j=e;this.l=d;this.c=12E4;this.b=6E4;this.h=new Ca;this.f=!1},Ia=function(a){return null!==a.a&&A(a.a.INTERNAL)&&A(a.a.INTERNAL.getToken)?a.a.INTERNAL.getToken().then(function(a){return A(a)?a.accessToken:null},function(){return null}):firebase.Promise.resolve(null)};Ha.prototype.bucket=function(){if(this.f)throw ja();return this.g};
var D=function(a,b,c){if(a.f)return new ya(ja());b=a.m(b,c,null===a.a,a.j);Da(a.h,b);return b};var Ja=function(a,b){b=b.split("/").filter(function(a){return 0<a.length}).join("/");return 0===a.length?b:a+"/"+b},Ka=function(a){var b=a.lastIndexOf("/",a.length-2);return-1===b?a:a.slice(b+1)};var La=function(a,b){return b},E=function(a,b,c,d){this.c=a;this.b=b||a;this.writable=!!c;this.a=d||La},Ma=null,Na=function(){if(Ma)return Ma;var a=[];a.push(new E("bucket"));a.push(new E("generation"));a.push(new E("metageneration"));a.push(new E("name","fullPath",!0));var b=new E("name");b.a=function(a,b){return!Fa(b)||2>b.length?b:Ka(b)};a.push(b);b=new E("size");b.a=function(a,b){return A(b)?+b:b};a.push(b);a.push(new E("timeCreated"));a.push(new E("updated"));a.push(new E("md5Hash",null,!0));
a.push(new E("cacheControl",null,!0));a.push(new E("contentDisposition",null,!0));a.push(new E("contentEncoding",null,!0));a.push(new E("contentLanguage",null,!0));a.push(new E("contentType",null,!0));a.push(new E("metadata","customMetadata",!0));a.push(new E("downloadTokens","downloadURLs",!1,function(a,b){if(!(Fa(b)&&0<b.length))return[];var c=encodeURIComponent;return b.split(",").map(function(b){var d=a.fullPath,d="https://firebasestorage.googleapis.com/v0"+("/b/"+c(a.bucket)+"/o/"+c(d));b=pa({alt:"media",
token:b});return d+b})}));return Ma=a},Oa=function(a,b){Object.defineProperty(a,"ref",{get:function(){return b.o(b,new y(a.bucket,a.fullPath))}})},Qa=function(a,b){for(var c={},d=b.length,e=0;e<d;e++){var g=b[e];g.writable&&(c[g.c]=a[g.b])}return JSON.stringify(c)},Ra=function(a){if(!a||"object"!==typeof a)throw"Expected Metadata object.";for(var b in a){var c=a[b];if("customMetadata"===b){if("object"!==typeof c)throw"Expected object for 'customMetadata' mapping.";}else if(null!=c&&"object"===typeof c)throw"Mapping for '"+
b+"' cannot be an object.";}};var F=function(a,b,c){for(var d=b.length,e=b.length,g=0;g<b.length;g++)if(b[g].b){d=g;break}if(!(d<=c.length&&c.length<=e))throw d===e?(b=d,d=1===d?"argument":"arguments"):(b="between "+d+" and "+e,d="arguments"),new r("invalid-argument-count","Invalid argument count in `"+a+"`: Expected "+b+" "+d+", received "+c.length+".");for(g=0;g<c.length;g++)try{b[g].a(c[g])}catch(f){if(f instanceof Error)throw ia(g,a,f.message);throw ia(g,a,f);}},G=function(a,b){var c=this;this.a=function(b){c.b&&!q(b)||a(b)};
this.b=!!b},Sa=function(a,b){return function(c){a(c);b(c)}},H=function(a,b){function c(a){if(!("string"===typeof a||a instanceof String))throw"Expected string.";}var d;a?d=Sa(c,a):d=c;return new G(d,b)},Ta=function(){return new G(function(a){if(!(a instanceof Uint8Array||a instanceof ArrayBuffer||Ga()&&a instanceof Blob))throw"Expected Blob or File.";})},Ua=function(){return new G(function(a){if(!(("number"===typeof a||a instanceof Number)&&0<=a))throw"Expected a number 0 or greater.";})},Va=function(a,
b){return new G(function(b){if(!(null===b||A(b)&&b instanceof Object))throw"Expected an Object.";A(a)&&a(b)},b)},I=function(){return new G(function(a){if(null!==a&&"function"!=ea(a))throw"Expected a Function.";},!0)};var J=function(a){return function(){var b=[];Array.prototype.push.apply(b,arguments);firebase.Promise.resolve(!0).then(function(){a.apply(null,b)})}};var Wa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Xa=function(a,b){return a<b?-1:a>b?1:0};var K;a:{var Ya=n.navigator;if(Ya){var Za=Ya.userAgent;if(Za){K=Za;break a}}K=""};var ab=function(a,b){var c=$a;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var bb=-1!=K.indexOf("Opera"),cb=-1!=K.indexOf("Trident")||-1!=K.indexOf("MSIE"),db=-1!=K.indexOf("Edge"),eb=-1!=K.indexOf("Gecko")&&!(-1!=K.toLowerCase().indexOf("webkit")&&-1==K.indexOf("Edge"))&&!(-1!=K.indexOf("Trident")||-1!=K.indexOf("MSIE"))&&-1==K.indexOf("Edge"),fb=-1!=K.toLowerCase().indexOf("webkit")&&-1==K.indexOf("Edge"),gb;
a:{var hb="",ib=function(){var a=K;if(eb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(db)return/Edge\/([\d\.]+)/.exec(a);if(cb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(fb)return/WebKit\/(\S+)/.exec(a);if(bb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();ib&&(hb=ib?ib[1]:"");if(cb){var jb,kb=n.document;jb=kb?kb.documentMode:void 0;if(null!=jb&&jb>parseFloat(hb)){gb=String(jb);break a}}gb=hb}
var lb=gb,$a={},mb=function(a){return ab(a,function(){for(var b=0,c=Wa(String(lb)).split("."),d=Wa(String(a)).split("."),e=Math.max(c.length,d.length),g=0;0==b&&g<e;g++){var f=c[g]||"",h=d[g]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==f[0].length&&0==h[0].length)break;b=Xa(0==f[1].length?0:parseInt(f[1],10),0==h[1].length?0:parseInt(h[1],10))||Xa(0==f[2].length,0==h[2].length)||Xa(f[2],h[2]);f=f[3];h=h[3]}while(0==b)}return 0<=b})};var nb=function(a){var b=n.BlobBuilder||n.WebKitBlobBuilder;if(q(b)){for(var b=new b,c=0;c<arguments.length;c++)b.append(arguments[c]);return b.getBlob()}b=Array.prototype.slice.call(arguments);c=n.BlobBuilder||n.WebKitBlobBuilder;if(q(c)){for(var c=new c,d=0;d<b.length;d++)c.append(b[d],void 0);b=c.getBlob(void 0)}else if(q(n.Blob))b=new Blob(b,{});else throw Error("This browser doesn't seem to support creating Blobs");return b},ob=function(a,b,c){q(c)||(c=a.size);return a.webkitSlice?a.webkitSlice(b,
c):a.mozSlice?a.mozSlice(b,c):a.slice?eb&&!mb("13.0")||fb&&!mb("537.1")?(0>b&&(b+=a.size),0>b&&(b=0),0>c&&(c+=a.size),c<b&&(c=b),a.slice(b,c-b)):a.slice(b,c):null};var L={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},pb=function(a){switch(a){case "raw":case "base64":case "base64url":case "data_url":break;default:throw"Expected one of the event types: [raw, base64, base64url, data_url].";}},qb=function(a,b){this.data=a;this.a=b||null},ub=function(a,b){switch(a){case "raw":return new qb(rb(b));case "base64":case "base64url":return new qb(sb(a,b));case "data_url":a=new tb(b);var c;if(a.a)c=sb("base64",a.c);else{try{c=decodeURIComponent(a.c)}catch(d){throw t("data_url",
"Malformed data URL.");}c=rb(c)}return new qb(c,(new tb(b)).b)}throw fa();},rb=function(a){for(var b=[],c=0;c<a.length;c++){var d=a.charCodeAt(c);if(127>=d)b.push(d);else if(2047>=d)b.push(192|d>>6,128|d&63);else if(55296==(d&64512))if(c<a.length-1&&56320==(a.charCodeAt(c+1)&64512)){var e=a.charCodeAt(++c),d=65536|(d&1023)<<10|e&1023;b.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63)}else b.push(239,191,189);else 56320==(d&64512)?b.push(239,191,189):b.push(224|d>>12,128|d>>6&63,128|d&63)}return new Uint8Array(b)},
sb=function(a,b){switch(a){case "base64":var c=-1!==b.indexOf("-"),d=-1!==b.indexOf("_");if(c||d)throw t(a,"Invalid character '"+(c?"-":"_")+"' found: is it base64url encoded?");break;case "base64url":c=-1!==b.indexOf("+");d=-1!==b.indexOf("/");if(c||d)throw t(a,"Invalid character '"+(c?"+":"/")+"' found: is it base64 encoded?");b=b.replace(/-/g,"+").replace(/_/g,"/")}var e;try{e=atob(b)}catch(g){throw t(a,"Invalid character found");}a=new Uint8Array(e.length);for(b=0;b<e.length;b++)a[b]=e.charCodeAt(b);
return a},tb=function(a){var b=a.match(/^data:([^,]+)?,/);if(null===b)throw t("data_url","Must be formatted 'data:[<mediatype>][;base64],<data>");b=b[1]||null;this.a=!1;this.b=null;if(null!=b){var c=b.length-7;this.b=(this.a=0<=c&&b.indexOf(";base64",c)==c)?b.substring(0,b.length-7):b}this.c=a.substring(a.indexOf(",")+1)};var M=function(a,b){Ga()&&a instanceof Blob?(this.i=a,b=a.size,a=a.type):(a instanceof ArrayBuffer?(b?this.i=new Uint8Array(a):(this.i=new Uint8Array(a.byteLength),this.i.set(new Uint8Array(a))),b=this.i.length):(b?this.i=a:(this.i=new Uint8Array(a.length),this.i.set(a)),b=a.length),a="");this.a=b;this.b=a};M.prototype.type=function(){return this.b};
M.prototype.slice=function(a,b){if(Ga()&&this.i instanceof Blob)return a=ob(this.i,a,b),null===a?null:new M(a);a=new Uint8Array(this.i.buffer,a,b-a);return new M(a,!0)};
var vb=function(a){var b=[];Array.prototype.push.apply(b,arguments);if(Ga())return b=b.map(function(a){return a instanceof M?a.i:a}),new M(nb.apply(null,b));var b=b.map(function(a){return Fa(a)?ub("raw",a).data.buffer:a.i.buffer}),c=0;b.forEach(function(a){c+=a.byteLength});var d=new Uint8Array(c),e=0;b.forEach(function(a){a=new Uint8Array(a);for(var b=0;b<a.length;b++)d[e++]=a[b]});return new M(d,!0)};var wb=function(a,b,c){"function"==ea(a)||A(b)||A(c)?(this.b=a,this.error=b||null,this.a=c||null):(this.b=a.next||null,this.error=a.error||null,this.a=a.complete||null)};var N=function(a){if(!a)throw fa();},xb=function(a,b){return function(c,d){var e;a:{try{e=JSON.parse(d)}catch(h){e=null;break a}c=typeof e;e="object"==c&&null!=e||"function"==c?e:null}if(null===e)e=null;else{c={type:"file"};d=b.length;for(var g=0;g<d;g++){var f=b[g];c[f.b]=f.a(c,e[f.c])}Oa(c,a);e=c}N(null!==e);return e}},O=function(a){return function(b,c){b=401===x(b)?new r("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===x(b)?
new r("quota-exceeded","Quota for bucket '"+a.bucket+"' exceeded, please view quota on https://firebase.google.com/pricing/."):403===x(b)?new r("unauthorized","User does not have permission to access '"+a.path+"'."):c;b.serverResponse=c.serverResponse;return b}},yb=function(a){var b=O(a);return function(c,d){var e=b(c,d);404===x(c)&&(e=new r("object-not-found","Object '"+a.path+"' does not exist."));e.serverResponse=d.serverResponse;return e}},zb=function(a,b,c){var d=za(b);a=new w(v+"/v0"+d,"GET",
xb(a,c),a.c);a.a=yb(b);return a},Ab=function(a,b){var c=za(b);a=new w(v+"/v0"+c,"DELETE",function(){},a.c);a.c=[200,204];a.a=yb(b);return a},Bb=function(a,b,c){c=c?oa(c):{};c.fullPath=a.path;c.size=b.a;c.contentType||(a=b&&b.type()||"application/octet-stream",c.contentType=a);return c},Cb=function(a,b,c,d,e){var g="/b/"+encodeURIComponent(b.bucket)+"/o",f={"X-Goog-Upload-Protocol":"multipart"},h;h="";for(var p=0;2>p;p++)h+=Math.random().toString().slice(2);f["Content-Type"]="multipart/related; boundary="+
h;e=Bb(b,d,e);p=Qa(e,c);d=vb("--"+h+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+p+"\r\n--"+h+"\r\nContent-Type: "+e.contentType+"\r\n\r\n",d,"\r\n--"+h+"--");if(null===d)throw ha();a=new w(v+"/v0"+g,"POST",xb(a,c),a.b);a.b={name:e.fullPath};a.headers=f;a.body=d.i;a.a=O(b);return a},Db=function(a,b,c,d){this.current=a;this.total=b;this.H=!!c;this.metadata=d||null},Eb=function(a,b){var c;try{c=a.a.getResponseHeader("X-Goog-Upload-Status")}catch(d){N(!1)}N(la(b||["active"],c));return c},
Fb=function(a,b,c,d,e){var g="/b/"+encodeURIComponent(b.bucket)+"/o",f=Bb(b,d,e);e={name:f.fullPath};g=v+"/v0"+g;d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":d.a,"X-Goog-Upload-Header-Content-Type":f.contentType,"Content-Type":"application/json; charset=utf-8"};c=Qa(f,c);a=new w(g,"POST",function(a){Eb(a);var b;try{b=a.a.getResponseHeader("X-Goog-Upload-URL")}catch(B){N(!1)}N(Fa(b));return b},a.b);a.b=e;a.headers=d;a.body=c;a.a=O(b);
return a},Gb=function(a,b,c,d){a=new w(c,"POST",function(a){var b=Eb(a,["active","final"]),c;try{c=a.a.getResponseHeader("X-Goog-Upload-Size-Received")}catch(h){N(!1)}a=c;isFinite(a)&&(a=String(a));a="string"==typeof a?/^\s*-?0x/i.test(a)?parseInt(a,16):parseInt(a,10):NaN;N(!isNaN(a));return new Db(a,d.a,"final"===b)},a.b);a.headers={"X-Goog-Upload-Command":"query"};a.a=O(b);a.f=!1;return a},Hb=function(a,b,c,d,e,g,f){var h=new Db(0,0);f?(h.current=f.current,h.total=f.total):(h.current=0,h.total=
d.a);if(d.a!==h.total)throw new r("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");var p=f=h.total-h.current;0<e&&(p=Math.min(p,e));var B=h.current;e={"X-Goog-Upload-Command":p===f?"upload, finalize":"upload","X-Goog-Upload-Offset":h.current};f=d.slice(B,B+p);if(null===f)throw ha();c=new w(c,"POST",function(a,c){var e=Eb(a,["active","final"]),f=h.current+p,C=d.a,z;"final"===e?z=xb(b,g)(a,c):z=null;return new Db(f,C,"final"===e,z)},b.b);c.headers=e;c.body=
f.i;c.l=null;c.a=O(a);c.f=!1;return c};var Ib={STATE_CHANGED:"state_changed"},P={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"},Jb=function(a){switch(a){case "running":case "pausing":case "canceling":return"running";case "paused":return"paused";case "success":return"success";case "canceled":return"canceled";case "error":return"error";default:return"error"}};var ta=function(){var a=this;this.a=new XMLHttpRequest;this.c=0;this.f=ka(function(b){a.a.addEventListener("abort",function(){a.c=2;b(a)});a.a.addEventListener("error",function(){a.c=1;b(a)});a.a.addEventListener("load",function(){b(a)})});this.b=!1},ua=function(a,b,c,d,e){if(a.b)throw u("cannot .send() more than once");a.b=!0;a.a.open(c,b,!0);A(e)&&na(e,function(b,c){a.a.setRequestHeader(b,c.toString())});A(d)?a.a.send(d):a.a.send();return a.f},va=function(a){if(!a.b)throw u("cannot .getErrorCode() before sending");
return a.c},x=function(a){if(!a.b)throw u("cannot .getStatus() before sending");try{return a.a.status}catch(b){return-1}},wa=function(a){if(!a.b)throw u("cannot .getResponseText() before sending");return a.a.responseText};ta.prototype.abort=function(){this.a.abort()};var Kb=function(){};var Q=function(a,b,c,d,e,g){this.b=a;this.h=b;this.f=c;this.a=d;this.g=e;this.c=g};k=Q.prototype;k.W=function(){return this.b};k.ra=function(){return this.h};k.oa=function(){return this.f};k.ja=function(){return this.a};k.X=function(){if(A(this.a)){var a=this.a.downloadURLs;return A(a)&&A(a[0])?a[0]:null}return null};k.qa=function(){return this.g};k.ma=function(){return this.c};var T=function(a,b,c,d,e,g){this.M=a;this.c=b;this.l=c;this.f=e;this.h=g||null;this.s=d;this.m=0;this.D=this.u=!1;this.B=[];this.T=262144<this.f.a;this.b="running";this.a=this.v=this.g=null;this.j=1;var f=this;this.F=function(a){f.a=null;f.j=1;"storage/canceled"===a.code?(f.u=!0,R(f)):(f.g=a,S(f,"error"))};this.R=function(a){f.a=null;"storage/canceled"===a.code?R(f):(f.g=a,S(f,"error"))};this.A=this.o=null;this.C=ka(function(a,b){f.o=a;f.A=b;Lb(f)});this.C.then(null,function(){})},Lb=function(a){"running"===
a.b&&null===a.a&&(a.T?null===a.v?Mb(a):a.u?Nb(a):a.D?Ob(a):Pb(a):Qb(a))},U=function(a,b){Ia(a.c).then(function(c){switch(a.b){case "running":b(c);break;case "canceling":S(a,"canceled");break;case "pausing":S(a,"paused")}})},Mb=function(a){U(a,function(b){var c=Fb(a.c,a.l,a.s,a.f,a.h);a.a=D(a.c,c,b);a.a.a().then(function(b){a.a=null;a.v=b;a.u=!1;R(a)},this.F)})},Nb=function(a){var b=a.v;U(a,function(c){var d=Gb(a.c,a.l,b,a.f);a.a=D(a.c,d,c);a.a.a().then(function(b){a.a=null;Rb(a,b.current);a.u=!1;
b.H&&(a.D=!0);R(a)},a.F)})},Pb=function(a){var b=262144*a.j,c=new Db(a.m,a.f.a),d=a.v;U(a,function(e){var g;try{g=Hb(a.l,a.c,d,a.f,b,a.s,c)}catch(f){a.g=f;S(a,"error");return}a.a=D(a.c,g,e);a.a.a().then(function(b){33554432>262144*a.j&&(a.j*=2);a.a=null;Rb(a,b.current);b.H?(a.h=b.metadata,S(a,"success")):R(a)},a.F)})},Ob=function(a){U(a,function(b){var c=zb(a.c,a.l,a.s);a.a=D(a.c,c,b);a.a.a().then(function(b){a.a=null;a.h=b;S(a,"success")},a.R)})},Qb=function(a){U(a,function(b){var c=Cb(a.c,a.l,a.s,
a.f,a.h);a.a=D(a.c,c,b);a.a.a().then(function(b){a.a=null;a.h=b;Rb(a,a.f.a);S(a,"success")},a.F)})},Rb=function(a,b){var c=a.m;a.m=b;a.m>c&&V(a)},S=function(a,b){if(a.b!==b)switch(b){case "canceling":a.b=b;null!==a.a&&a.a.cancel();break;case "pausing":a.b=b;null!==a.a&&a.a.cancel();break;case "running":var c="paused"===a.b;a.b=b;c&&(V(a),Lb(a));break;case "paused":a.b=b;V(a);break;case "canceled":a.g=ga();a.b=b;V(a);break;case "error":a.b=b;V(a);break;case "success":a.b=b,V(a)}},R=function(a){switch(a.b){case "pausing":S(a,
"paused");break;case "canceling":S(a,"canceled");break;case "running":Lb(a)}};T.prototype.w=function(){return new Q(this.m,this.f.a,Jb(this.b),this.h,this,this.M)};
T.prototype.N=function(a,b,c,d){function e(a){try{f(a);return}catch(z){}try{if(h(a),!(q(a.next)||q(a.error)||q(a.complete)))throw"";}catch(z){throw"Expected a function or an Object with one of `next`, `error`, `complete` properties.";}}function g(a){return function(b,c,d){null!==a&&F("on",a,arguments);var e=new wb(b,c,d);Sb(p,e);return function(){var a=p.B,b=a.indexOf(e);-1!==b&&a.splice(b,1)}}}var f=I().a,h=Va(null,!0).a;F("on",[H(function(){if("state_changed"!==a)throw"Expected one of the event types: [state_changed].";
}),Va(e,!0),I(),I()],arguments);var p=this,B=[Va(function(a){if(null===a)throw"Expected a function or an Object with one of `next`, `error`, `complete` properties.";e(a)}),I(),I()];return q(b)||q(c)||q(d)?g(null)(b,c,d):g(B)};T.prototype.then=function(a,b){return this.C.then(a,b)};T.prototype["catch"]=function(a){return this.then(null,a)};
var Sb=function(a,b){a.B.push(b);Tb(a,b)},V=function(a){Ub(a);Array.prototype.slice.call(a.B).forEach(function(b){Tb(a,b)})},Ub=function(a){if(null!==a.o){var b=!0;switch(Jb(a.b)){case "success":J(a.o.bind(null,a.w()))();break;case "canceled":case "error":J(a.A.bind(null,a.g))();break;default:b=!1}b&&(a.o=null,a.A=null)}},Tb=function(a,b){switch(Jb(a.b)){case "running":case "paused":null!==b.b&&J(b.b.bind(b,a.w()))();break;case "success":null!==b.a&&J(b.a.bind(b))();break;case "canceled":case "error":null!==
b.error&&J(b.error.bind(b,a.g))();break;default:null!==b.error&&J(b.error.bind(b,a.g))()}};T.prototype.P=function(){F("resume",[],arguments);var a="paused"===this.b||"pausing"===this.b;a&&S(this,"running");return a};T.prototype.O=function(){F("pause",[],arguments);var a="running"===this.b;a&&S(this,"pausing");return a};T.prototype.cancel=function(){F("cancel",[],arguments);var a="running"===this.b||"pausing"===this.b;a&&S(this,"canceling");return a};var W=function(a,b){this.a=a;this.location=b instanceof y?b:Aa(b)};W.prototype.toString=function(){F("toString",[],arguments);return"gs://"+this.location.bucket+"/"+this.location.path};var Vb=function(a,b){return new W(a,b)};k=W.prototype;k.I=function(a){F("child",[H()],arguments);var b=Ja(this.location.path,a);return Vb(this.a,new y(this.location.bucket,b))};
k.la=function(){var a;a=this.location.path;if(0==a.length)a=null;else{var b=a.lastIndexOf("/");a=-1===b?"":a.slice(0,b)}return null===a?null:Vb(this.a,new y(this.location.bucket,a))};k.na=function(){return Vb(this.a,new y(this.location.bucket,""))};k.V=function(){return this.location.bucket};k.ga=function(){return this.location.path};k.ka=function(){return Ka(this.location.path)};k.pa=function(){return this.a.l};
k.$=function(a,b){F("put",[Ta(),new G(Ra,!0)],arguments);X(this,"put");return new T(this,this.a,this.location,Na(),new M(a),b)};k.aa=function(a,b,c){F("putString",[H(),H(pb,!0),new G(Ra,!0)],arguments);X(this,"putString");var d=ub(A(b)?b:"raw",a),e=c?oa(c):{};!A(e.contentType)&&A(d.a)&&(e.contentType=d.a);return new T(this,this.a,this.location,Na(),new M(d.data,!0),e)};
k.Y=function(){F("delete",[],arguments);X(this,"delete");var a=this;return Ia(this.a).then(function(b){var c=Ab(a.a,a.location);return D(a.a,c,b).a()})};k.J=function(){F("getMetadata",[],arguments);X(this,"getMetadata");var a=this;return Ia(this.a).then(function(b){var c=zb(a.a,a.location,Na());return D(a.a,c,b).a()})};
k.ba=function(a){F("updateMetadata",[new G(Ra,void 0)],arguments);X(this,"updateMetadata");var b=this;return Ia(this.a).then(function(c){var d=b.a,e=b.location,g=a,f=Na(),h=za(e),h=v+"/v0"+h,g=Qa(g,f),d=new w(h,"PATCH",xb(d,f),d.c);d.headers={"Content-Type":"application/json; charset=utf-8"};d.body=g;d.a=yb(e);return D(b.a,d,c).a()})};
k.Z=function(){F("getDownloadURL",[],arguments);X(this,"getDownloadURL");return this.J().then(function(a){a=a.downloadURLs[0];if(A(a))return a;throw new r("no-download-url","The given file does not have any download URLs.");})};var X=function(a,b){if(""===a.location.path)throw new r("invalid-root-operation","The operation '"+b+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");};var Y=function(a,b,c){this.a=new Ha(a,function(a,b){return new W(a,b)},xa,this,b);this.c=a;q(c)?this.b=Ba(c):null!=this.a.bucket()&&(this.b=new y(this.a.bucket(),""));this.f=new Wb(this)};k=Y.prototype;k.ca=function(a){F("ref",[H(function(a){if(/^[A-Za-z]+:\/\//.test(a))throw"Expected child path but got a URL, use refFromURL instead.";},!0)],arguments);if(null===this.b)throw Error("No Storage Bucket defined in Firebase Options.");var b=new W(this.a,this.b);return q(a)?b.I(a):b};
k.da=function(a){F("refFromURL",[H(function(a){if(!/^[A-Za-z]+:\/\//.test(a))throw"Expected full URL but got a child path, use ref instead.";try{Aa(a)}catch(c){throw"Expected valid full URL but got an invalid one.";}},!1)],arguments);return new W(this.a,a)};k.ia=function(){return this.a.b};k.fa=function(a){F("setMaxUploadRetryTime",[Ua()],arguments);this.a.b=a};k.ha=function(){return this.a.c};k.ea=function(a){F("setMaxOperationRetryTime",[Ua()],arguments);this.a.c=a};k.U=function(){return this.c};
k.S=function(){return this.f};var Wb=function(a){this.a=a};Wb.prototype.b=function(){var a=this.a.a;a.f=!0;a.a=null;Ea(a.h)};var Z=function(a,b,c){Object.defineProperty(a,b,{get:c})};W.prototype.toString=W.prototype.toString;W.prototype.child=W.prototype.I;W.prototype.put=W.prototype.$;W.prototype.putString=W.prototype.aa;W.prototype["delete"]=W.prototype.Y;W.prototype.getMetadata=W.prototype.J;W.prototype.updateMetadata=W.prototype.ba;W.prototype.getDownloadURL=W.prototype.Z;Z(W.prototype,"parent",W.prototype.la);Z(W.prototype,"root",W.prototype.na);Z(W.prototype,"bucket",W.prototype.V);Z(W.prototype,"fullPath",W.prototype.ga);
Z(W.prototype,"name",W.prototype.ka);Z(W.prototype,"storage",W.prototype.pa);Y.prototype.ref=Y.prototype.ca;Y.prototype.refFromURL=Y.prototype.da;Z(Y.prototype,"maxOperationRetryTime",Y.prototype.ha);Y.prototype.setMaxOperationRetryTime=Y.prototype.ea;Z(Y.prototype,"maxUploadRetryTime",Y.prototype.ia);Y.prototype.setMaxUploadRetryTime=Y.prototype.fa;Z(Y.prototype,"app",Y.prototype.U);Z(Y.prototype,"INTERNAL",Y.prototype.S);Wb.prototype["delete"]=Wb.prototype.b;Y.prototype.capi_=function(a){v=a};
T.prototype.on=T.prototype.N;T.prototype.resume=T.prototype.P;T.prototype.pause=T.prototype.O;T.prototype.cancel=T.prototype.cancel;T.prototype.then=T.prototype.then;T.prototype["catch"]=T.prototype["catch"];Z(T.prototype,"snapshot",T.prototype.w);Z(Q.prototype,"bytesTransferred",Q.prototype.W);Z(Q.prototype,"totalBytes",Q.prototype.ra);Z(Q.prototype,"state",Q.prototype.oa);Z(Q.prototype,"metadata",Q.prototype.ja);Z(Q.prototype,"downloadURL",Q.prototype.X);Z(Q.prototype,"task",Q.prototype.qa);
Z(Q.prototype,"ref",Q.prototype.ma);Ib.STATE_CHANGED="state_changed";P.RUNNING="running";P.PAUSED="paused";P.SUCCESS="success";P.CANCELED="canceled";P.ERROR="error";L.RAW="raw";L.BASE64="base64";L.BASE64URL="base64url";L.DATA_URL="data_url";
(function(){function a(a,b,e){return new Y(a,new Kb,e)}var b={TaskState:P,TaskEvent:Ib,StringFormat:L,Storage:Y,Reference:W};if("undefined"!==typeof firebase)firebase.INTERNAL.registerService("storage",a,b,void 0,!0);else throw Error("Cannot install Firebase Storage - be sure to load firebase-app.js first.");})();}).call(this);
}).call(typeof global !== undefined ? global : typeof self !== undefined ? self : typeof window !== undefined ? window : {});
module.exports = firebase.storage;
