var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var aa=encodeURIComponent,k=window,ba=Object,p=document,ca=Array,ea=parseInt,q=String,fa=decodeURIComponent;function ga(a,b){return a.type=b}
var ha="appendChild",r="push",s="test",ia="shift",ja="exec",ka="width",u="replace",la="getElementById",ma="concat",na="charAt",y="JSON",z="indexOf",oa="nodeName",pa="match",qa="readyState",A="createElement",B="setAttribute",ra="type",sa="bind",ta="getTime",ua="parse",va="getElementsByTagName",C="substr",D="toString",E="length",F="prototype",G="split",H="location",wa="hasOwnProperty",I="style",xa="removeChild",J="call",K="getAttribute",ya="protocol",L="charCodeAt",M="href",za="substring",Aa="action",
N="apply",Ba="attributes",O="parentNode",Ca="update",Da="height",P="join",Ea="toLowerCase",Fa=function(a,b,c){return a[J][N](a[sa],arguments)},Ga=function(a,b,c){if(!a)throw Error();if(2<arguments[E]){var d=ca[F].slice[J](arguments,2);return function(){var c=ca[F].slice[J](arguments);ca[F].unshift[N](c,d);return a[N](b,c)}}return function(){return a[N](b,arguments)}},Ha=function(a,b,c){Ha=Function[F][sa]&&-1!=Function[F][sa][D]()[z]("native code")?Fa:Ga;return Ha[N](null,arguments)};
Function[F].bind=Function[F][sa]||function(a,b){if(1<arguments[E]){var c=ca[F].slice[J](arguments,1);c.unshift(this,a);return Ha[N](null,c)}return Ha(this,a)};var Q=k,R=p,Ia=Q[H],Ja=function(){},Ka=/\[native code\]/,S=function(a,b,c){return a[b]=a[b]||c},La=function(a){for(var b=0;b<this[E];b++)if(this[b]===a)return b;return-1},Ma=function(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a[E];d++){var e=a[d];e!=c&&b[r](e);c=e}return b},Na=/&/g,Oa=/</g,Pa=/>/g,Qa=/"/g,Ra=/'/g,Sa=function(a){return q(a)[u](Na,"&amp;")[u](Oa,"&lt;")[u](Pa,"&gt;")[u](Qa,"&quot;")[u](Ra,"&#39;")},T=function(){var a;if((a=ba.create)&&Ka[s](a))a=a(null);else{a={};for(var b in a)a[b]=
void 0}return a},U=function(a,b){return ba[F][wa][J](a,b)},Ta=function(a){if(Ka[s](ba.keys))return ba.keys(a);var b=[],c;for(c in a)U(a,c)&&b[r](c);return b},V=function(a,b){a=a||{};for(var c in a)U(a,c)&&(b[c]=a[c])},Ua=function(a){return function(){Q.setTimeout(a,0)}},Va=function(a,b){if(!a)throw Error(b||"");},W=S(Q,"gapi",{});var X=function(a,b,c){var d=RegExp("([#].*&|[#])"+b+"=([^&#]*)","g");b=RegExp("([?#].*&|[?#])"+b+"=([^&#]*)","g");if(a=a&&(d[ja](a)||b[ja](a)))try{c=fa(a[2])}catch(e){}return c},Wa=/^([^?#]*)(\?([^#]*))?(\#(.*))?$/,Xa=function(a){a=a[pa](Wa);var b=T();b.R=a[1];b.g=a[3]?[a[3]]:[];b.l=a[5]?[a[5]]:[];return b},Ya=function(a){return a.R+(0<a.g[E]?"?"+a.g[P]("&"):"")+(0<a.l[E]?"#"+a.l[P]("&"):"")},Za=function(a,b){var c=[];if(a)for(var d in a)if(U(a,d)&&null!=a[d]){var e=b?b(a[d]):a[d];c[r](aa(d)+"="+
aa(e))}return c},$a=function(a,b,c,d){a=Xa(a);a.g[r][N](a.g,Za(b,d));a.l[r][N](a.l,Za(c,d));return Ya(a)},ab=function(a,b){var c="";2E3<b[E]&&(c=b[za](2E3),b=b[za](0,2E3));var d=a[A]("div"),e=a[A]("a");e.href=b;d[ha](e);d.innerHTML=d.innerHTML;b=q(d.firstChild[M]);d[O]&&d[O][xa](d);return b+c},bb=/^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;var cb=function(a,b,c,d){if(Q[c+"EventListener"])Q[c+"EventListener"](a,b,!1);else if(Q[d+"tachEvent"])Q[d+"tachEvent"]("on"+a,b)},fb=function(a){var b=db;if("complete"!==R[qa])try{b()}catch(c){}eb(a)},eb=function(a){if("complete"===R[qa])a();else{var b=!1,c=function(){if(!b)return b=!0,a[N](this,arguments)};Q.addEventListener?(Q.addEventListener("load",c,!1),Q.addEventListener("DOMContentLoaded",c,!1)):Q.attachEvent&&(Q.attachEvent("onreadystatechange",function(){"complete"===R[qa]&&c[N](this,arguments)}),
Q.attachEvent("onload",c))}},gb=function(a){for(;a.firstChild;)a[xa](a.firstChild)},hb={button:!0,div:!0,span:!0};var Y;Y=S(Q,"___jsl",T());S(Y,"I",0);S(Y,"hel",10);var ib=function(a){return Y.dpo?Y.h:X(a,"jsh",Y.h)},jb=function(a){var b=S(Y,"sws",[]);b[r][N](b,a)},kb=function(a){var b=S(Y,"PQ",[]);Y.PQ=[];var c=b[E];if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)},mb=function(a){return S(S(Y,"H",T()),a,T())};var nb=S(Y,"perf",T()),ob=S(nb,"g",T()),pb=S(nb,"i",T());S(nb,"r",[]);T();T();var qb=function(a,b,c){var d=nb.r;"function"===typeof d?d(a,b,c):d[r]([a,b,c])},rb=function(a,b,c){ob[a]=!b&&ob[a]||c||(new Date)[ta]();qb(a)},tb=function(a,b,c){b&&0<b[E]&&(b=sb(b),c&&0<c[E]&&(b+="___"+sb(c)),28<b[E]&&(b=b[C](0,28)+(b[E]-28)),c=b,b=S(pb,"_p",T()),S(b,c,T())[a]=(new Date)[ta](),qb(a,"_p",c))},sb=function(a){return a[P]("__")[u](/\./g,"_")[u](/\-/g,"_")[u](/\,/g,"_")};var ub=T(),vb=[],wb=function(a){throw Error("Bad hint"+(a?": "+a:""));};vb[r](["jsl",function(a){for(var b in a)if(U(a,b)){var c=a[b];"object"==typeof c?Y[b]=S(Y,b,[])[ma](c):S(Y,b,c)}if(b=a.u)a=S(Y,"us",[]),a[r](b),(b=/^https:(.*)$/[ja](b))&&a[r]("http:"+b[1])}]);var xb=/^(\/[a-zA-Z0-9_\-]+)+$/,yb=/^[a-zA-Z0-9\-_\.!]+$/,zb=/^gapi\.loaded_[0-9]+$/,Ab=/^[a-zA-Z0-9,._-]+$/,Eb=function(a,b,c,d){var e=a[G](";"),f=ub[e[ia]()],g=null;f&&(g=f(e,b,c,d));if(b=g)b=g,c=b[pa](Bb),d=b[pa](Cb),b=!!d&&1===d[E]&&Db[s](b)&&!!c&&1===c[E];b||wb(a);return g},Hb=function(a,b,c,d){a=Fb(a);zb[s](c)||wb("invalid_callback");b=Gb(b);d=d&&d[E]?Gb(d):null;var e=function(a){return aa(a)[u](/%2C/g,",")};return[aa(a.S)[u](/%2C/g,",")[u](/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+
e(d):"","/rt=j/sv=1/d=1/ed=1",a.G?"/am="+e(a.G):"",a.H?"/rs="+e(a.H):"","/cb=",e(c)][P]("")},Fb=function(a){"/"!==a[na](0)&&wb("relative path");for(var b=a[za](1)[G]("/"),c=[];b[E];){a=b[ia]();if(!a[E]||0==a[z]("."))wb("empty/relative directory");else if(0<a[z]("=")){b.unshift(a);break}c[r](a)}a={};for(var d=0,e=b[E];d<e;++d){var f=b[d][G]("="),g=fa(f[0]),h=fa(f[1]);2==f[E]&&g&&h&&(a[g]=a[g]||h)}b="/"+c[P]("/");xb[s](b)||wb("invalid_prefix");c=Ib(a,"k",!0);d=Ib(a,"am");a=Ib(a,"rs");return{S:b,version:c,
G:d,H:a}},Gb=function(a){for(var b=[],c=0,d=a[E];c<d;++c){var e=a[c][u](/\./g,"_")[u](/-/g,"_");Ab[s](e)&&b[r](e)}return b[P](",")},Ib=function(a,b,c){a=a[b];!a&&c&&wb("missing: "+b);if(a){if(yb[s](a))return a;wb("invalid: "+b)}return null},Db=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Cb=/\/cb=/g,Bb=/\/\//g,Jb=function(){var a=ib(Ia[M]);if(!a)throw Error("Bad hint");return a};
ub.m=function(a,b,c,d){(a=a[0])||wb("missing_hint");return"https://apis.google.com"+Hb(a,b,c,d)};var Kb=decodeURI("%73cript"),Lb=function(a,b){for(var c=[],d=0;d<a[E];++d){var e=a[d];e&&0>La[J](b,e)&&c[r](e)}return c},Nb=function(a){"loading"!=R[qa]?Mb(a):R.write("<"+Kb+' src="'+encodeURI(a)+'"></'+Kb+">")},Mb=function(a){var b=R[A](Kb);b[B]("src",a);b.async="true";(a=R[va](Kb)[0])?a[O].insertBefore(b,a):(R.head||R.body||R.documentElement)[ha](b)},Ob=function(a,b){var c=b&&b._c;if(c)for(var d=0;d<vb[E];d++){var e=vb[d][0],f=vb[d][1];f&&U(c,e)&&f(c[e],a,b)}},Qb=function(a,b){Pb(function(){var c;
c=b===ib(Ia[M])?S(W,"_",T()):T();c=S(mb(b),"_",c);a(c)})},Sb=function(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Ob(a,c);var d=a?a[G](":"):[],e=c.h||Jb(),f=S(Y,"ah",T());if(f["::"]&&d[E]){for(var g=[],h=null;h=d[ia]();){var l=h[G]("."),l=f[h]||f[l[1]&&"ns:"+l[0]||""]||e,v=g[E]&&g[g[E]-1]||null,m=v;v&&v.hint==l||(m={hint:l,K:[]},g[r](m));m.K[r](h)}var n=g[E];if(1<n){var w=c.callback;w&&(c.callback=function(){0==--n&&w()})}for(;d=g[ia]();)Rb(d.K,c,d.hint)}else Rb(d||[],c,e)},Rb=function(a,
b,c){a=Ma(a)||[];var d=b.callback,e=b.config,f=b.timeout,g=b.ontimeout,h=null,l=!1;if(f&&!g||!f&&g)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var v=S(mb(c),"r",[]).sort(),m=S(mb(c),"L",[]).sort(),n=[][ma](v),w=function(a,b){if(l)return 0;Q.clearTimeout(h);m[r][N](m,t);var d=((W||{}).config||{})[Ca];d?d(e):e&&S(Y,"cu",[])[r](e);if(b){tb("me0",a,n);try{Qb(b,c)}finally{tb("me1",a,n)}}return 1};0<f&&(h=Q.setTimeout(function(){l=!0;g()},f));var t=Lb(a,m);if(t[E]){var t=
Lb(a,v),x=S(Y,"CP",[]),da=x[E];x[da]=function(a){if(!a)return 0;tb("ml1",t,n);var b=function(b){x[da]=null;w(t,a)&&kb(function(){d&&d();b()})},c=function(){var a=x[da+1];a&&a()};0<da&&x[da-1]?x[da]=function(){b(c)}:b(c)};if(t[E]){var lb="loaded_"+Y.I++;W[lb]=function(a){x[da](a);W[lb]=null};a=Eb(c,t,"gapi."+lb,v);v[r][N](v,t);tb("ml0",t,n);b.sync||Q.___gapisync?Nb(a):Mb(a)}else x[da](Ja)}else w(t)&&d&&d()};var Pb=function(a){if(Y.hee&&0<Y.hel)try{return a()}catch(b){Y.hel--,Sb("debug_error",function(){try{k.___jsl.hefn(b)}catch(a){throw b;}})}else return a()};W.load=function(a,b){return Pb(function(){return Sb(a,b)})};var Tb=function(a){var b=k.___jsl=k.___jsl||{};b[a]=b[a]||[];return b[a]},Ub=function(a){var b=k.___jsl=k.___jsl||{};b.cfg=!a&&b.cfg||{};return b.cfg},Vb=function(a){return"object"===typeof a&&/\[native code\]/[s](a[r])},Wb=function(a,b){if(b)for(var c in b)b[wa](c)&&(a[c]&&b[c]&&"object"===typeof a[c]&&"object"===typeof b[c]&&!Vb(a[c])&&!Vb(b[c])?Wb(a[c],b[c]):b[c]&&"object"===typeof b[c]?(a[c]=Vb(b[c])?[]:{},Wb(a[c],b[c])):a[c]=b[c])},Xb=function(a){if(a&&!/^\s+$/[s](a)){for(;0==a[L](a[E]-1);)a=
a[za](0,a[E]-1);var b;try{b=k[y][ua](a)}catch(c){}if("object"===typeof b)return b;try{b=(new Function("return ("+a+"\n)"))()}catch(d){}if("object"===typeof b)return b;try{b=(new Function("return ({"+a+"\n})"))()}catch(e){}return"object"===typeof b?b:{}}},Yb=function(a){Ub(!0);var b=k.___gcfg,c=Tb("cu");if(b&&b!==k.___gu){var d={};Wb(d,b);c[r](d);k.___gu=b}var b=Tb("cu"),e=p.scripts||p[va]("script")||[],d=[],f=[];f[r][N](f,Tb("us"));for(var g=0;g<e[E];++g)for(var h=e[g],l=0;l<f[E];++l)h.src&&0==h.src[z](f[l])&&
d[r](h);0==d[E]&&0<e[E]&&e[e[E]-1].src&&d[r](e[e[E]-1]);for(e=0;e<d[E];++e)d[e][K]("gapi_processed")||(d[e][B]("gapi_processed",!0),(f=d[e])?(g=f.nodeType,f=3==g||4==g?f.nodeValue:f.textContent||f.innerText||f.innerHTML||""):f=void 0,(f=Xb(f))&&b[r](f));a&&(d={},Wb(d,a),c[r](d));d=Tb("cd");a=0;for(b=d[E];a<b;++a)Wb(Ub(),d[a]);d=Tb("ci");a=0;for(b=d[E];a<b;++a)Wb(Ub(),d[a]);a=0;for(b=c[E];a<b;++a)Wb(Ub(),c[a])},Z=function(a){if(!a)return Ub();a=a[G]("/");for(var b=Ub(),c=0,d=a[E];b&&"object"===typeof b&&
c<d;++c)b=b[a[c]];return c===a[E]&&void 0!==b?b:void 0},Zb=function(a,b){var c=a;if("string"===typeof a){for(var d=c={},e=a[G]("/"),f=0,g=e[E];f<g-1;++f)var h={},d=d[e[f]]=h;d[e[f]]=b}Yb(c)};var $b=function(){var a=k.__GOOGLEAPIS;a&&(a.googleapis&&!a["googleapis.config"]&&(a["googleapis.config"]=a.googleapis),S(Y,"ci",[])[r](a),k.__GOOGLEAPIS=void 0)};var ac=k.console,bc=function(a){ac&&ac.log&&ac.log(a)};var cc=function(){return!!Y.oa},dc=function(){};var $=S(Y,"rw",T()),ec=function(a){for(var b in $)a($[b])},fc=function(a,b){var c=$[a];c&&c.state<b&&(c.state=b)};var gc;var hc=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/u\/(\d)\//,ic=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/b\/(\d{10,})\//,jc=function(a){var b=Z("googleapis.config/sessionIndex");null==b&&(b=k.__X_GOOG_AUTHUSER);if(null==b){var c=k.google;c&&(b=c.authuser)}null==b&&(a=a||k[H][M],b=X(a,"authuser")||null,null==b&&(b=(b=a[pa](hc))?b[1]:null));return null==b?null:q(b)},kc=function(a){var b=Z("googleapis.config/sessionDelegate");null==b&&(b=(a=(a||k[H][M])[pa](ic))?
a[1]:null);return null==b?null:q(b)};var lc=function(){};var mc=function(){this.b=[];this.n=[];this.N=[];this.k=[];this.k[0]=128;for(var a=1;64>a;++a)this.k[a]=0;this.reset()};(function(){function a(){}a.prototype=lc[F];mc.Z=lc[F];mc.prototype=new a})();mc[F].reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.o=this.i=0};
var nc=function(a,b,c){c||(c=0);var d=a.N;if("string"==typeof b)for(var e=0;16>e;e++)d[e]=b[L](c)<<24|b[L](c+1)<<16|b[L](c+2)<<8|b[L](c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];for(var g=a.b[2],h=a.b[3],l=a.b[4],v,e=0;80>e;e++)40>e?20>e?(f=h^c&(g^h),v=1518500249):(f=c^g^h,v=1859775393):60>e?(f=c&g|h&(c|g),v=2400959708):(f=c^g^h,v=3395469782),f=(b<<5|b>>>27)+f+
l+v+d[e]&4294967295,l=h,h=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+h&4294967295;a.b[4]=a.b[4]+l&4294967295};mc[F].update=function(a,b){void 0===b&&(b=a[E]);for(var c=b-64,d=0,e=this.n,f=this.i;d<b;){if(0==f)for(;d<=c;)nc(this,a,d),d+=64;if("string"==typeof a)for(;d<b;){if(e[f]=a[L](d),++f,++d,64==f){nc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,64==f){nc(this,e);f=0;break}}this.i=f;this.o+=b};var oc=function(){this.p=new mc};oc[F].reset=function(){this.p.reset()};var vc=function(){var a;pc?(a=new Q.Uint32Array(1),qc.getRandomValues(a),a=Number("0."+a[0])):(a=rc,a+=ea(sc[C](0,20),16),sc=tc(sc),a/=uc+Math.pow(16,20));return a},qc=Q.crypto,pc=!1,wc=0,xc=0,rc=1,uc=0,sc="",yc=function(a){a=a||Q.event;var b=a.screenX+a.clientX<<16,b=b+(a.screenY+a.clientY),b=b*((new Date)[ta]()%1E6);rc=rc*b%uc;0<wc&&++xc==wc&&cb("mousemove",yc,"remove","de")},tc=function(a){var b=new oc;a=unescape(aa(a));for(var c=[],d=0,e=a[E];d<e;++d)c[r](a[L](d));b.p[Ca](c);a=b.p;b=[];d=8*a.o;
56>a.i?a[Ca](a.k,56-a.i):a[Ca](a.k,64-(a.i-56));for(c=63;56<=c;c--)a.n[c]=d&255,d/=256;nc(a,a.n);for(c=d=0;5>c;c++)for(e=24;0<=e;e-=8)b[d]=a.b[c]>>e&255,++d;a="";for(c=0;c<b[E];c++)a+="0123456789ABCDEF"[na](Math.floor(b[c]/16))+"0123456789ABCDEF"[na](b[c]%16);return a},pc=!!qc&&"function"==typeof qc.getRandomValues;pc||(uc=1E6*(screen[ka]*screen[ka]+screen[Da]),sc=tc(R.cookie+"|"+R[H]+"|"+(new Date)[ta]()+"|"+Math.random()),wc=Z("random/maxObserveMousemove")||0,0!=wc&&cb("mousemove",yc,"add","at"));var zc=function(){var a=Y.onl;if(!a){a=T();Y.onl=a;var b=T();a.e=function(a){var d=b[a];d&&(delete b[a],d())};a.a=function(a,d){b[a]=d};a.r=function(a){delete b[a]}}return a},Ac=function(a,b){var c=b.onload;return"function"===typeof c?(zc().a(a,c),c):null},Bc=function(a){Va(/^\w+$/[s](a),"Unsupported id - "+a);zc();return'onload="window.___jsl.onl.e(&#34;'+a+'&#34;)"'},Cc=function(a){zc().r(a)};var Dc={allowtransparency:"true",frameborder:"0",hspace:"0",marginheight:"0",marginwidth:"0",scrolling:"no",style:"",tabindex:"0",vspace:"0",width:"100%"},Ec={allowtransparency:!0,onload:!0},Fc=0,Gc=function(a){Va(!a||bb[s](a),"Illegal url for new iframe - "+a)},Hc=function(a,b,c,d,e){Gc(c.src);var f,g=Ac(d,c),h=g?Bc(d):"";try{f=a[A]('<iframe frameborder="'+Sa(q(c.frameborder))+'" scrolling="'+Sa(q(c.scrolling))+'" '+h+' name="'+Sa(q(c.name))+'"/>')}catch(l){f=a[A]("iframe"),g&&(f.onload=function(){f.onload=
null;g[J](this)},Cc(d))}for(var v in c)a=c[v],"style"===v&&"object"===typeof a?V(a,f[I]):Ec[v]||f[B](v,q(a));(v=e&&e.beforeNode||null)||e&&e.dontclear||gb(b);b.insertBefore(f,v);f=v?v.previousSibling:b.lastChild;c.allowtransparency&&(f.allowTransparency=!0);return f};var Ic=/^:[\w]+$/,Jc=/:([a-zA-Z_]+):/g,Kc=function(a,b){if(!gc||Z("oauth-flow/authAware")){var c=jc()||"0",d=kc(),e;e=jc(void 0)||c;var f=kc(void 0),g="";e&&(g+="u/"+e+"/");f&&(g+="b/"+f+"/");e=g||null;f=Z("oauth-flow/authAware")?"isLoggedIn":"googleapis.config/signedIn";(g=(f=!1===Z(f))?"_/im/":"")&&(e="");var h=Z("iframes/:socialhost:"),l=Z("iframes/:im_socialhost:");gc={socialhost:h,ctx_socialhost:f?l:h,session_index:c,session_delegate:d,session_prefix:e,im_prefix:g}}return gc[b]||""};var Lc={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},Mc=function(a){var b,c,d;b=/[\"\\\x00-\x1f\x7f-\x9f]/g;if(void 0!==a){switch(typeof a){case "string":return b[s](a)?'"'+a[u](b,function(a){var b=Lc[a];if(b)return b;b=a[L]();return"\\u00"+Math.floor(b/16)[D](16)+(b%16)[D](16)})+'"':'"'+a+'"';case "number":return isFinite(a)?q(a):"null";case "boolean":case "null":return q(a);case "object":if(!a)return"null";b=[];if("number"===typeof a[E]&&!a.propertyIsEnumerable("length")){d=
a[E];for(c=0;c<d;c+=1)b[r](Mc(a[c])||"null");return"["+b[P](",")+"]"}for(c in a)!/___$/[s](c)&&a[wa](c)&&"string"===typeof c&&(d=Mc(a[c]))&&b[r](Mc(c)+":"+d);return"{"+b[P](",")+"}"}return""}},Nc=k[y]&&k[y][ua]&&k[y].stringify?k[y].stringify:Mc;var Oc=function(a){var b;a[pa](/^https?%3A/i)&&(b=fa(a));return ab(p,b?b:a)},Pc=function(a){a=a||"canonical";for(var b=p[va]("link"),c=0,d=b[E];c<d;c++){var e=b[c],f=e[K]("rel");if(f&&f[Ea]()==a&&(e=e[K]("href"))&&(e=Oc(e))&&null!=e[pa](/^https?:\/\/[\w\-\_\.]+/i))return e}return k[H][M]};var Qc={callback:-1,clientid:1,cookiepolicy:1,requestvisibleactions:1,scope:1},Rc=!1,Sc=T();var Tc={post:!0},Uc={post:!0},Vc={style:"position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"},Wc="onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" "),Xc=S(Y,"WI",T()),Yc=function(a,b,c){var d,e;d=e=a;"plus"==a&&b[Aa]&&(e=a+"_"+b[Aa],d=a+"/"+b[Aa]);(e=Z("iframes/"+e+"/url"))||(e=":socialhost:/:session_prefix:_/widget/render/"+d);d=ab(R,e[u](Jc,Kc));var f="iframes/"+a+"/params/";e={};V(b,e);var g;(g=(g=Z("lang")||Z("gwidget/lang"))||Uc[a]||
Z("hl/absent")?g:"en-US")&&(e.hl=g);Tc[a]||(e.origin=k[H].origin||k[H][ya]+"//"+k[H].host);e.exp=Z(f+"exp");if(f=Z(f+"location"))for(g=0;g<f[E];g++){var h=f[g];e[h]=Q[H][h]}switch(a){case "plus":case "follow":f=e[M];g=b[Aa]?void 0:"publisher";f=(f="string"==typeof f?f:void 0)?Oc(f):Pc(g);e.url=f;delete e[M];break;case "plusone":e.url=b[M]?Oc(b[M]):Pc();f=b.db;g=Z();null==f&&g&&(f=g.db,null==f&&(f=g.gwidget&&g.gwidget.db));e.db=f||void 0;f=b.ecp;g=Z();null==f&&g&&(f=g.ecp,null==f&&(f=g.gwidget&&g.gwidget.ecp));
e.ecp=f||void 0;delete e[M];break;case "signin":e.url=Pc()}Y.ILI&&(e.iloader="1");delete e["data-onload"];delete e.rd;e.gsrc=Z("iframes/:source:");f=Z("inline/css");"undefined"!==typeof f&&0<c&&f>=c&&(e.ic="1");f=/^#|^fr-/;c={};for(var l in e)U(e,l)&&f[s](l)&&(c[l[u](f,"")]=e[l],delete e[l]);l="q"==Z("iframes/"+a+"/params/si")?e:c;if(!Rc){f=p[va]("meta");for(g=0;g<f[E];++g)if(h=f[g].name[Ea](),0==h.lastIndexOf("google-signin-",0)){var h=h[za](14),v=f[g].content;Qc[h]&&v&&(Sc[h]=v)}if(k.self!==k.top){var f=
p[H][D](),m;for(m in Qc)0<Qc[m]&&(g=X(f,m,""))&&(Sc[m]=g)}Rc=!0}m=T();V(Sc,m);for(var n in m)!U(m,n)||U(e,n)||U(c,n)||(l[n]=m[n]);n=[][ma](Wc);(m=Z("iframes/"+a+"/methods"))&&"object"===typeof m&&Ka[s](m[r])&&(n=n[ma](m));for(var w in b)U(b,w)&&/^on/[s](w)&&("plus"!=a||"onconnect"!=w)&&(n[r](w),delete e[w]);delete e.callback;c._methods=n[P](",");return $a(d,e,c)},Zc=["style","data-gapiscan"],ad=function(a){for(var b=T(),c=0!=a[oa][Ea]()[z]("g:"),d=0,e=a[Ba][E];d<e;d++){var f=a[Ba][d],g=f.name,h=f.value;
0<=La[J](Zc,g)||c&&0!=g[z]("data-")||"null"===h||"specified"in f&&!f.specified||(c&&(g=g[C](5)),b[g[Ea]()]=h)}a=a[I];(c=$c(a&&a[Da]))&&(b.height=q(c));(a=$c(a&&a[ka]))&&(b.width=q(a));return b},$c=function(a){var b=void 0;"number"===typeof a?b=a:"string"===typeof a&&(b=ea(a,10));return b},cd=function(){var a=Y.drw;ec(function(b){if(a!==b.id&&4!=b.state){var c=b.id,d=b[ra],e=b.url;b=b.userParams;var f=R[la](c);if(f){var g=Yc(d,b,0);g?(f=f[O],e[u](/\#.*/,"")[u](/(\?|&)ic=1/,"")!==g[u](/\#.*/,"")[u](/(\?|&)ic=1/,
"")&&(b.dontclear=!0,b.rd=!0,b.ri=!0,ga(b,d),bd(f,b),(d=$[f.lastChild.id])&&(d.oid=c),fc(c,4))):delete $[c]}else delete $[c]}})},dd=function(){};var ed,fd,gd,hd,id,jd=/(?:^|\s)g-((\S)*)(?:$|\s)/,kd={plusone:!0,autocomplete:!0,profile:!0};ed=S(Y,"SW",T());fd=S(Y,"SA",T());gd=S(Y,"SM",T());hd=S(Y,"FW",[]);id=null;
var md=function(a,b){ld(void 0,!1,a,b)},ld=function(a,b,c,d){rb("ps0",!0);c=("string"===typeof c?p[la](c):c)||R;var e;e=R.documentMode;if(c.querySelectorAll&&(!e||8<e)){e=d?[d]:Ta(ed)[ma](Ta(fd))[ma](Ta(gd));for(var f=[],g=0;g<e[E];g++){var h=e[g];f[r](".g-"+h,"g\\:"+h)}e=c.querySelectorAll(f[P](","))}else e=c[va]("*");c=T();for(f=0;f<e[E];f++){g=e[f];var l=g,h=d,v=l[oa][Ea](),m=void 0;l[K]("data-gapiscan")?h=null:(0==v[z]("g:")?m=v[C](2):(l=(l=q(l.className||l[K]("class")))&&jd[ja](l))&&(m=l[1]),
h=!m||!(ed[m]||fd[m]||gd[m])||h&&m!==h?null:m);h&&(kd[h]||0==g[oa][Ea]()[z]("g:")||0!=Ta(ad(g))[E])&&(g[B]("data-gapiscan",!0),S(c,h,[])[r](g))}if(b)for(var n in c)for(b=c[n],d=0;d<b[E];d++)b[d][B]("data-onload",!0);for(var w in c)hd[r](w);rb("ps1",!0);if((n=hd[P](":"))||a)try{W.load(n,a)}catch(t){bc(t);return}if(nd(id||{}))for(var x in c){a=c[x];w=0;for(b=a[E];w<b;w++)a[w].removeAttribute("data-gapiscan");od(x)}else{d=[];for(x in c)for(a=c[x],w=0,b=a[E];w<b;w++)e=a[w],pd(x,e,ad(e),d,b);qd(n,d)}},
rd=function(a){var b=S(W,a,{});b.go||(b.go=function(b){return md(b,a)},b.render=function(b,d){var e=d||{};ga(e,a);return bd(b,e)})},sd=function(a){ed[a]=!0},td=function(a){fd[a]=!0},ud=function(a){gd[a]=!0};var od=function(a,b){var c=S(Y,"watt",T())[a];b&&c?(c(b),(c=b.iframeNode)&&c[B]("data-gapiattached",!0)):W.load(a,function(){var c=S(Y,"watt",T())[a],e=b&&b.iframeNode;e&&c?(c(b),e[B]("data-gapiattached",!0)):(0,W[a].go)(e&&e[O])})},nd=function(){return!1},qd=function(){},pd=function(a,b,c,d,e,f){switch(vd(b,a,f)){case 0:a=gd[a]?a+"_annotation":a;d={};d.iframeNode=b;d.userParams=c;od(a,d);break;case 1:var g;if(b[O]){for(var h in c)if(U(c,h)&&c[h]&&"object"===typeof c[h]&&(!c[h][D]||c[h][D]===ba[F][D]||
c[h][D]===ca[F][D]))try{var l=Nc(c[h]);600>l[E]?c[h]=l:delete c[h]}catch(v){delete c[h]}l=!0;c.dontclear&&(l=!1);delete c.dontclear;h=Yc(a,c,e);f={allowPost:1,attributes:Vc};f.dontclear=!l;e={};e.userParams=c;e.url=h;ga(e,a);var m;c.rd?m=b:(m=p[A]("div"),b[B]("data-gapistub",!0),m[I].cssText="position:absolute;width:450px;left:-10000px;",b[O].insertBefore(m,b));e.siteElement=m;m.id||(b=m,S(Xc,a,0),l="___"+a+"_"+Xc[a]++,b.id=l);b=T();b[">type"]=a;V(c,b);dc();l=h;c=m;h=f||{};b=h[Ba]||{};Va(!h.allowPost||
!b.onload,"onload is not supported by post iframe");f=b=l;Ic[s](b)&&(f=Z("iframes/"+f[za](1)+"/url"),Va(!!f,"Unknown iframe url config for - "+b));l=ab(R,f[u](Jc,Kc));b=c.ownerDocument||R;m=0;do f=h.id||["I",Fc++,"_",(new Date)[ta]()][P]("");while(b[la](f)&&5>++m);Va(5>m,"Error creating iframe id");m={};var n={};V(h.queryParams||{},m);V(h.fragmentParams||{},n);var w=h.pfname,t=T();t.id=f;t.parent=b[H][ya]+"//"+b[H].host;var x=X(b[H][M],"parent"),w=w||"";!w&&x&&(x=X(b[H][M],"id",""),w=X(b[H][M],"pfname",
""),w=x?w+"/"+x:"");t.pfname=w;V(t,n);(t=X(l,"rpctoken")||m.rpctoken||n.rpctoken)||(t=n.rpctoken=h.rpctoken||q(Math.round(1E8*vc())));h.rpctoken=t;x=b[H][M];t=T();(w=X(x,"_bsh",Y.bsh))&&(t._bsh=w);(x=ib(x))&&(t.jsh=x);h.hintInFragment?V(t,n):V(t,m);l=$a(l,m,n,h.paramsSerializer);n=T();V(Dc,n);V(h[Ba],n);n.name=n.id=f;n.src=l;h.eurl=l;if((h||{}).allowPost&&2E3<l[E]){m=Xa(l);n.src="";n["data-postorigin"]=l;l=Hc(b,c,n,f);-1!=navigator.userAgent[z]("WebKit")&&(g=l.contentWindow.document,g.open(),n=g[A]("div"),
t={},x=f+"_inner",t.name=x,t.src="",t.style="display:none",Hc(b,n,t,x,h));n=(h=m.g[0])?h[G]("&"):[];h=[];for(t=0;t<n[E];t++)x=n[t][G]("=",2),h[r]([fa(x[0]),fa(x[1])]);m.g=[];n=Ya(m);m=b[A]("form");m.action=n;m.method="POST";m.target=f;m[I].display="none";for(f=0;f<h[E];f++)n=b[A]("input"),ga(n,"hidden"),n.name=h[f][0],n.value=h[f][1],m[ha](n);c[ha](m);m.submit();m[O][xa](m);g&&g.close();g=l}else g=Hc(b,c,n,f,h);e.iframeNode=g;e.id=g[K]("id");g=e.id;c=T();c.id=g;c.userParams=e.userParams;c.url=e.url;
ga(c,e[ra]);c.state=1;$[g]=c;g=e}else g=null;g&&((e=g.id)&&d[r](e),od(a,g))}},vd=function(a,b,c){if(a&&1===a.nodeType&&b){if(c)return 1;if(gd[b]){if(hb[a[oa][Ea]()])return(a=a.innerHTML)&&a[u](/^[\s\xa0]+|[\s\xa0]+$/g,"")?0:1}else{if(fd[b])return 0;if(ed[b])return 1}}return null},bd=function(a,b){var c=b[ra];delete b[ra];var d=("string"===typeof a?p[la](a):a)||void 0;if(d){var e={},f;for(f in b)U(b,f)&&(e[f[Ea]()]=b[f]);e.rd=1;(f=!!e.ri)&&delete e.ri;var g=[];pd(c,d,e,g,0,f);qd(c,g)}else bc("string"===
"gapi."+c+".render: missing element "+typeof a?a:"")};S(W,"platform",{}).go=md;var nd=function(a){for(var b=["_c","jsl","h"],c=0;c<b[E]&&a;c++)a=a[b[c]];b=ib(Ia[M]);return!a||0!=a[z]("n;")&&0!=b[z]("n;")&&a!==b},qd=function(a,b){wd(a,b)},db=function(a){ld(a,!0)},xd=function(a,b){for(var c=b||[],d=0;d<c[E];++d)a(c[d]);for(d=0;d<c[E];d++)rd(c[d])};vb[r](["platform",function(a,b,c){id=c;b&&hd[r](b);xd(sd,a);xd(td,c._c.annotation);xd(ud,c._c.bimodal);$b();Yb();if("explicit"!=Z("parsetags")){jb(a);var d;c&&(a=c.callback)&&(d=Ua(a),delete c.callback);fb(function(){db(d)})}}]);var yd=function(a){a=(a=$[a])?a.oid:void 0;if(a){var b=R[la](a);b&&b[O][xa](b);delete $[a];yd(a)}},dd=function(a,b,c){if(c[ka]&&c[Da]){n:{c=c||{};if(cc()){var d=b.id;if(d){var e;e=(e=$[d])?e.state:void 0;if(1===e||4===e)break n;yd(d)}}(e=a.nextSibling)&&e[K]&&e[K]("data-gapistub")&&(a[O][xa](e),a[I].cssText="");e=c[ka];var f=c[Da],g=a[I];g.textIndent="0";g.margin="0";g.padding="0";g.background="transparent";g.borderStyle="none";g.cssFloat="none";g.styleFloat="none";g.lineHeight="normal";g.fontSize=
"1px";g.verticalAlign="baseline";a=a[I];a.display="inline-block";g=b[I];g.position="static";g.left=0;g.top=0;g.visibility="visible";e&&(a.width=g.width=e+"px");f&&(a.height=g.height=f+"px");c.verticalAlign&&(a.verticalAlign=c.verticalAlign);d&&fc(d,3)}b["data-csi-wdt"]=(new Date)[ta]()}};var zd=/^\{h\:'/,Ad=/^!_/,Bd="",wd=function(a,b){function c(){cb("message",d,"remove","de")}function d(d){var g=d.data,h=d.origin;if(Cd(g,b)){var l=e;e=!1;l&&rb("rqe");Dd(a,function(){l&&rb("rqd");c();for(var a=S(Y,"RPMQ",[]),b=0;b<a[E];b++)a[b]({data:g,origin:h})})}}if(0!==b[E]&&k[y]&&k[y][ua]){Bd=X(Ia[M],"pfname","");var e=!0;cb("message",d,"add","at");Sb(a,c)}},Cd=function(a,b){a=q(a);if(zd[s](a))return!0;var c=!1;Ad[s](a)&&(c=!0,a=a[C](2));if(!/^\{/[s](a))return!1;try{var d=k[y][ua](a)}catch(e){return!1}if(!d)return!1;
var f=d.f;if(d.s&&f&&-1!=La[J](b,f)){if("_renderstart"===d.s||d.s===Bd+"/"+f+"::_renderstart")c=d.a&&d.a[c?0:1],d=R[la](f),fc(f,2),c&&d&&dd(d[O],d,c);return!0}return!1},Dd=function(a,b){Sb(a,b)};var Ed=function(a,b){this.A=a;var c=b||{};this.P=c.V;this.w=c.domain;this.B=c.path;this.Q=c.W},Fd=/^[-+/_=.:|%&a-zA-Z0-9@]*$/,Gd=/^[A-Z_][A-Z0-9_]{0,63}$/;Ed[F].write=function(a,b){if(!Gd[s](this.A))throw"Invalid cookie name";if(!Fd[s](a))throw"Invalid cookie value";var c=this.A+"="+a;this.w&&(c+=";domain="+this.w);this.B&&(c+=";path="+this.B);var d="number"===typeof b?b:this.P;if(0<=d){var e=new Date;e.setSeconds(e.getSeconds()+d);c+=";expires="+e.toUTCString()}this.Q&&(c+=";secure");p.cookie=c};
Ed.iterate=function(a){for(var b=p.cookie[G](/;\s*/),c=0;c<b[E];++c){var d=b[c][G]("="),e=d[ia]();a(e,d[P]("="))}};var Hd=function(a){this.T=a},Id={};Hd[F].write=function(a){Id[this.T]=a};Hd.iterate=function(a){for(var b in Id)Id[wa](b)&&a(b,Id[b])};var Jd="https:"===k[H][ya],Kd=Jd||"http:"===k[H][ya]?Ed:Hd,Ld=function(a){var b=a[C](1),c="",d=k[H].hostname;if(""!==b){c=ea(b,10);if(isNaN(c))return null;b=d[G](".");if(b[E]<c-1)return null;b[E]==c-1&&(d="."+d)}else d="";return{c:"S"==a[na](0),domain:d,d:c}},Md=function(a){if(0!==a[z]("GCSC"))return null;var b={v:!1};a=a[C](4);if(!a)return b;var c=a[na](0);a=a[C](1);var d=a.lastIndexOf("_");if(-1==d)return b;var e=Ld(a[C](d+1));if(null==e)return b;a=a[za](0,d);if("_"!==a[na](0))return b;d="E"===
c&&e.c;return!d&&("U"!==c||e.c)||d&&!Jd?b:{v:!0,c:d,U:a[C](1),domain:e.domain,d:e.d}},Nd=function(a){if(!a)return[];a=a[G]("=");return a[1]?a[1][G]("|"):[]},Od=function(a){a=a[G](":");return{q:a[0][G]("=")[1],L:Nd(a[1]),Y:Nd(a[2]),X:Nd(a[3])}},Pd=function(){var a,b=null;Kd.iterate(function(c,d){if(0===c[z]("G_AUTHUSER_")){var e=Ld(c[za](11));if(!a||e.c&&!a.c||e.c==a.c&&e.d>a.d)a=e,b=d}});if(null!==b){var c;Kd.iterate(function(b,d){var e=Md(b);e&&e.v&&e.c==a.c&&e.d==a.d&&(c=d)});if(c){var d=Od(c),
e=d&&d.L[Number(b)],d=d&&d.q;if(e)return{M:b,O:e,q:d}}}return null};var Qd=function(a){this.F=a};Qd[F].j=0;Qd[F].D=2;Qd[F].F=null;Qd[F].t=!1;Qd[F].J=function(){this.t||(this.j=0,this.t=!0,this.C())};Qd[F].C=function(){this.t&&(this.F()?this.j=this.D:this.j=Math.min(2*(this.j||this.D),120),k.setTimeout(Ha(this.C,this),1E3*this.j))};for(var Rd=0;64>Rd;++Rd);var Sd=null,cc=function(){return Y.oa=!0},dc=function(){Y.oa=!0;var a=Pd();(a=a&&a.M)&&Zb("googleapis.config/sessionIndex",a);Sd||(Sd=S(Y,"ss",new Qd(Td)));a=Sd;a.J&&a.J()},Td=function(){var a=Pd(),b=a&&a.O||null,c=a&&a.q;Sb("auth",{callback:function(){var a={client_id:c,session_state:b};Q.gapi.auth.checkSessionState(a,function(b){var c=a.session_state,g=Z("isLoggedIn");b=c&&b||!c&&!b;g!=b&&(Zb("isLoggedIn",b),dc(),cd())})}});return!0};rb("bs0",!0,k.gapi._bs);rb("bs1",!0);delete k.gapi._bs;})();
gapi.load("plusone",{callback:window["gapi_onload"],_c:{"jsl":{"ci":{"":{"enableMultilogin":false},"client":{"cors":false},"plus_layer":{"isEnabled":false},"isLoggedIn":false,"iframes":{"additnow":{"methods":["launchurl"],"url":"https://apis.google.com/additnow/additnow.html?bsv\u003do"},"person":{"url":":socialhost:/:session_prefix:_/widget/render/person?usegapi\u003d1\u0026bsv\u003do"},"plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?bsv\u003do"},"signin":{"methods":["onauth"],"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/signin?bsv\u003do"},"commentcount":{"url":":socialhost:/:session_prefix:_/widget/render/commentcount?bsv\u003do"},"page":{"url":":socialhost:/:session_prefix:_/widget/render/page?usegapi\u003d1\u0026bsv\u003do"},"hangout":{"url":"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget?bsv\u003do"},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?bsv\u003do"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?bsv\u003do"},"zoomableimage":{"url":"https://ssl.gstatic.com/microscope/embed/?bsv\u003do"},"card":{"url":":socialhost:/:session_prefix:_/hovercard/card?bsv\u003do"},"shortlists":{"url":"?bsv\u003do"},"plus":{"methods":["onauth"],"url":":socialhost:/u/:session_index:/_/pages/badge?usegapi\u003d1\u0026bsv\u003do"},":socialhost:":"https://apis.google.com","post":{"params":{"url":""},"url":":socialhost:/:im_prefix:_/widget/render/post?bsv\u003do"},"community":{"url":":socialhost:/:session_prefix:_/widget/render/community?usegapi\u003d1\u0026bsv\u003do"},"rbr_s":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/recobarsimplescroller?bsv\u003do"},"autocomplete":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/autocomplete?bsv\u003do"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare\u003dtrue\u0026bsv\u003do"},":source:":"3p","savetowallet":{"url":"https://clients5.google.com/s2w/o/savetowallet?bsv\u003do"},"panoembed":{"url":"https://ssl.gstatic.com/pano/embed/?bsv\u003do"},"rbr_i":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/recobarinvitation?bsv\u003do"},"appcirclepicker":{"url":":socialhost:/:session_prefix:_/widget/render/appcirclepicker?bsv\u003do"},":im_socialhost:":"https://plus.googleapis.com","savetodrive":{"methods":["save"],"url":"https://drive.google.com/savetodrivebutton?usegapi\u003d1\u0026bsv\u003do"},":signuphost:":"https://plus.google.com","plusone":{"preloadUrl":["https://ssl.gstatic.com/s2/oz/images/stars/po/Publisher/sprite4-a67f741843ffc4220554c34bd01bb0bb.png"],"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?usegapi\u003d1\u0026bsv\u003do"},"comments":{"methods":["scroll","openwindow"],"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/comments?bsv\u003do"},"ytsubscribe":{"url":"https://www.youtube.com/subscribe_embed?usegapi\u003d1\u0026bsv\u003do"}},"isPlusUser":false,"debug":{"host":"https://apis.google.com","reportExceptionRate":0.05,"rethrowException":false},"hl":{},"deviceType":"desktop","inline":{"css":1},"lexps":[102,98,99,111,79,109,45,85,17,118,115,81,95,61,121,30],"oauth-flow":{"improveToastUi":false,"authAware":true,"eso":true,"disableOpt":true,"authUrl":"https://accounts.google.com/o/oauth2/auth","proxyUrl":"https://accounts.google.com/o/oauth2/postmessageRelay","toastCfg":"1000:3000:1000"},"report":{"host":"https://apis.google.com","rate":0.001,"apis":["iframes\\..*","gadgets\\..*","gapi\\.appcirclepicker\\.*","gapi\\.client\\..*"]},"csi":{"rate":0.01},"googleapis.config":{}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.it.1NkL9AXefwY.O/m\u003d__features__/am\u003dAQ/rt\u003dj/d\u003d1/rs\u003dAItRSTPF78BWRsIhgydXReXgm2DthkpbQg","u":"https://apis.google.com/js/plusone.js","hee":true,"fp":"ee0d1487f95dc809c52e43b1ff271f6b3c5eaf1c","dpo":false},"platform":["additnow","comments","commentcount","community","follow","page","panoembed","person","plus","plusone","post","savetodrive","shortlists","ytsubscribe","zoomableimage","savetowallet","hangout"],"fp":"ee0d1487f95dc809c52e43b1ff271f6b3c5eaf1c","annotation":["interactivepost","recobar","autocomplete","profile"],"bimodal":["signin"]}});