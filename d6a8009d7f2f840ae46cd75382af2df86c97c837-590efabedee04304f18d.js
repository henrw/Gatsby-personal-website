(self.webpackChunkexample=self.webpackChunkexample||[]).push([[828],{86199:function(e,r,t){"use strict";var n=t(69345);e.exports=function(e){return!n(e)}},98174:function(e,r,t){"use strict";t.d(r,{Z:function(){return g}});var n=t(25773),o=t(30808),l=t(27378),i=t(20170),a=t(82282),u=t(76123),d=function(){return u.Z&&/MSIE |Trident\/|Edge\//.test(window.navigator.userAgent)},s=function(){if(d())return!1;var e=function(){if(u.Z){var e=window.navigator.userAgent.match(/Chrom(e|ium)\/([\d\.]+)\./);return!!e&&parseFloat(e[2])}return!1}(),r=function(){if(u.Z){var e=window.navigator.userAgent.match(/Version\/([\d\.]+).*Safari/);return!!e&&parseFloat(e[1])}return!1}();return e?e>=84:!r||r>=14.1};function m(e){var r=e.as,t=void 0===r?"div":r,i=e.style,a=e.className,u=e.alignSelf,d=e.flex,s=e.grow,m=e.shrink,c=e.order,g=e.basis,f=(0,o.Z)(e,["as","style","className","alignSelf","flex","grow","shrink","order","basis"]);return l.createElement(t,(0,n.Z)({className:a,style:(0,n.Z)({alignSelf:u,order:c},d?{flex:d}:{flexGrow:s,flexShrink:m,flexBasis:g},i)},f))}m.displayName="StackItem";var c=l.forwardRef((function(e,r){var t,u=e.as,d=void 0===u?"div":u,c=e.alignItems,g=void 0===c?"center":c,f=e.classPrefix,x=void 0===f?"stack":f,b=e.childrenRenderMode,p=void 0===b?"wrap":b,v=e.className,B=e.children,I=e.direction,F=e.justifyContent,G=e.spacing,h=e.divider,y=e.style,E=e.wrap,w=(0,o.Z)(e,["as","alignItems","classPrefix","childrenRenderMode","className","children","direction","justifyContent","spacing","divider","style","wrap"]),Z=(0,i.Z)("Stack").rtl,C=(0,a.Z)(x),N=C.withClassPrefix,O=C.merge,k=C.prefix,S=O(v,N()),T=s(),M=Array.isArray(G)?G:[G,G],P=((t={})[Z?"marginLeft":"marginRight"]=M[0],t.marginBottom=M[1],t),R=(0,n.Z)({alignItems:g,justifyContent:F,flexDirection:I,flexWrap:E?"wrap":void 0,gap:T?G:void 0},y),U=l.Children.toArray(B),D=U.length;return l.createElement(d,(0,n.Z)({},w,{ref:r,className:S,style:R}),l.Children.map(U,(function(e,r){return["wrap"===p&&e.type!==m?l.createElement(m,{key:r,className:k("item"),style:T?void 0:P},e):l.cloneElement(e,{className:O(k("item"),e.props.className),style:T?e.props.style:(0,n.Z)({},P,e.props.style)}),r<D-1?h:null]})))}));c.Item=m,c.displayName="Stack";var g=c},80170:function(e,r,t){"use strict";var n=t(27378),o=t(68941),l=t(98730),i=t.n(l),a=t(47083);r.Z=function(e){var r=(0,o.$W)(),t=e.tag,l=t.color||"",u=t.name||"",d=u?i().generateFullUrl(r,"/tags/"+u):"#";return n.createElement("div",{style:{margin:"4px"}},n.createElement("a",{href:d},n.createElement(a.Z,{color:l},"#"+u)))}},57325:function(e,r,t){"use strict";t.d(r,{Z:function(){return B}});var n=t(90382),o=t.n(n),l=t(54622),i=t(86199),a=t.n(i),u=t(27378),d=t(70378),s=t(15415),m=t(98174),c=t(9952),g=t(22767),f=t(73749),x=t(68941),b=t(98730),p=t.n(b),v=t(80170),B=function(e){var r=e.data.node,t=e.tagsMap,n=r.frontmatter,i=n.title,b=n.authors,B=n.excerpt,I=n.path,F=n.date,G=n.tags,h=n.venue,y=n.cover,E=n.links,w=y?y.childImageSharp.fluid:null,Z=(0,x.$W)(),C=p().resolvePageUrl(I),N=[];F&&(N=N.concat([u.createElement("div",{key:"date"},p().formatDate(F))])),h&&(N=N.concat([u.createElement("div",{key:"venue"},u.createElement("span",null,h))])),G&&(N=N.concat([u.createElement(m.Z,{wrap:!0},G.map((function(e){return t[e]?u.createElement(v.Z,{key:"tag-"+e,tag:t[e]}):null})))]));var O=p().parseMarkDown(p().trimExcerpt(B),!0);return u.createElement(c.Z,{className:o()("researchCard-module--researchCard---CDZ4","cursor-default"),style:{padding:"0.8rem"},bordered:!0},u.createElement(s.Z,{gutter:8,align:"middle"},u.createElement(s.Z.Item,{as:g.Z,xs:24,sm:24,md:12,lg:16},u.createElement("h5",null,u.createElement("a",{href:p().generateFullUrl(Z,C)},i)),u.createElement(s.Z,null,b?b.map((function(e,r){var t=p().parseMarkDown(e,!0);return r>=0&&r!==b.length-1&&(t+=",&nbsp;"),u.createElement(s.Z.Item,{key:r,xs:!0},u.createElement("span",{dangerouslySetInnerHTML:{__html:t}}))})):null),u.createElement(m.Z,{wrap:!0,divider:u.createElement(f.Z,{vertical:!0,className:"researchCard-module--divider--qnczp"}),style:{marginTop:"0.5rem"}},N),u.createElement("a",{href:p().generateFullUrl(Z,C)},u.createElement("p",{style:{marginTop:"1rem"},dangerouslySetInnerHTML:{__html:O}})),E&&E.length?u.createElement(m.Z,{wrap:!0,spacing:6,style:{marginTop:"1rem"}},E.map((function(e){var r="#";return e.url&&(r=a()(e.url)?p().generateFullUrl(Z,e.url):e.url),u.createElement(d.Z,{appearance:"ghost",href:r,target:"_blank",size:"xs"},e.name)}))):null),u.createElement(s.Z.Item,{as:g.Z,xs:24,sm:24,md:12,lg:8},u.createElement("a",{href:p().generateFullUrl(Z,C)},w?u.createElement(l.Z,{fluid:w}):u.createElement("div",{className:"researchCard-module--postCardImg--84XzE"})))))}},47083:function(e,r,t){"use strict";t.d(r,{Z:function(){return Xe}});var n={};t.r(n),t.d(n,{blue:function(){return f},cyan:function(){return x},geekblue:function(){return b},gold:function(){return p},green:function(){return v},lime:function(){return B},magenta:function(){return I},orange:function(){return F},purple:function(){return G},red:function(){return h},rsBadgeBlue:function(){return y},rsBadgeContent:function(){return E},rsBadgeCyan:function(){return w},rsBadgeGreen:function(){return Z},rsBadgeIndependent:function(){return C},rsBadgeOrange:function(){return N},rsBadgeRed:function(){return O},rsBadgeViolet:function(){return k},rsBadgeYellow:function(){return S},rsBtnBlue:function(){return T},rsBtnCyan:function(){return M},rsBtnGreen:function(){return P},rsBtnOrange:function(){return R},rsBtnRed:function(){return U},rsBtnViolet:function(){return D},rsBtnYellow:function(){return j},rsFlexBoxGridItem1:function(){return z},rsFlexBoxGridItem10:function(){return V},rsFlexBoxGridItem11:function(){return q},rsFlexBoxGridItem12:function(){return H},rsFlexBoxGridItem13:function(){return L},rsFlexBoxGridItem14:function(){return Y},rsFlexBoxGridItem15:function(){return A},rsFlexBoxGridItem16:function(){return X},rsFlexBoxGridItem17:function(){return W},rsFlexBoxGridItem18:function(){return J},rsFlexBoxGridItem19:function(){return _},rsFlexBoxGridItem2:function(){return Q},rsFlexBoxGridItem20:function(){return K},rsFlexBoxGridItem21:function(){return $},rsFlexBoxGridItem22:function(){return ee},rsFlexBoxGridItem23:function(){return re},rsFlexBoxGridItem24:function(){return te},rsFlexBoxGridItem3:function(){return ne},rsFlexBoxGridItem4:function(){return oe},rsFlexBoxGridItem5:function(){return le},rsFlexBoxGridItem6:function(){return ie},rsFlexBoxGridItem7:function(){return ae},rsFlexBoxGridItem8:function(){return ue},rsFlexBoxGridItem9:function(){return de},rsFlexBoxGridItemOrder1:function(){return se},rsFlexBoxGridItemOrder10:function(){return me},rsFlexBoxGridItemOrder11:function(){return ce},rsFlexBoxGridItemOrder12:function(){return ge},rsFlexBoxGridItemOrder13:function(){return fe},rsFlexBoxGridItemOrder14:function(){return xe},rsFlexBoxGridItemOrder15:function(){return be},rsFlexBoxGridItemOrder16:function(){return pe},rsFlexBoxGridItemOrder17:function(){return ve},rsFlexBoxGridItemOrder18:function(){return Be},rsFlexBoxGridItemOrder19:function(){return Ie},rsFlexBoxGridItemOrder2:function(){return Fe},rsFlexBoxGridItemOrder20:function(){return Ge},rsFlexBoxGridItemOrder21:function(){return he},rsFlexBoxGridItemOrder22:function(){return ye},rsFlexBoxGridItemOrder23:function(){return Ee},rsFlexBoxGridItemOrder24:function(){return we},rsFlexBoxGridItemOrder3:function(){return Ze},rsFlexBoxGridItemOrder4:function(){return Ce},rsFlexBoxGridItemOrder5:function(){return Ne},rsFlexBoxGridItemOrder6:function(){return Oe},rsFlexBoxGridItemOrder7:function(){return ke},rsFlexBoxGridItemOrder8:function(){return Se},rsFlexBoxGridItemOrder9:function(){return Te},rsTagBlue:function(){return Me},rsTagCyan:function(){return Pe},rsTagGreen:function(){return Re},rsTagOrange:function(){return Ue},rsTagRed:function(){return De},rsTagViolet:function(){return je},rsTagYellow:function(){return ze},rsThemeDark:function(){return Ve},rsThemeHighContrast:function(){return qe},tag:function(){return He},volcano:function(){return Le}});var o,l,i=t(27378),a=t(25773),u=t(36732),d=t(30808),s=t(82282),m=t(73558),c=i.forwardRef((function(e,r){var t=e.as,n=void 0===t?"div":t,c=e.classPrefix,g=void 0===c?"tag":c,f=e.size,x=void 0===f?"md":f,b=e.color,p=void 0===b?"default":b,v=e.children,B=e.closable,I=e.className,F=e.onClose,G=(0,d.Z)(e,["as","classPrefix","size","color","children","closable","className","onClose"]),h=(0,s.Z)(g),y=h.withClassPrefix,E=h.prefix,w=(0,h.merge)(I,y(x,p,{closable:B}));return i.createElement(n,(0,a.Z)({},G,{ref:r,className:w}),i.createElement("span",{className:E(o||(o=(0,u.Z)(["text"])))},v),B&&i.createElement(m.Z,{className:E(l||(l=(0,u.Z)(["icon-close"]))),onClick:F}))}));c.displayName="Tag";var g=c,f="tag-module--blue--5SbGL",x="tag-module--cyan--4CvVv",b="tag-module--geekblue--fHh9o",p="tag-module--gold--1zYer",v="tag-module--green--jtnxH",B="tag-module--lime--7VmTz",I="tag-module--magenta--r4LoM",F="tag-module--orange--FeHPd",G="tag-module--purple--oKVtp",h="tag-module--red--ZILa2",y="tag-module--rs-badge-blue--oevRN",E="tag-module--rs-badge-content--Qjvq-",w="tag-module--rs-badge-cyan--HX96C",Z="tag-module--rs-badge-green--25g70",C="tag-module--rs-badge-independent--5f+4l",N="tag-module--rs-badge-orange--9xc7r",O="tag-module--rs-badge-red--EX4tN",k="tag-module--rs-badge-violet--wpV1D",S="tag-module--rs-badge-yellow--w9uNM",T="tag-module--rs-btn-blue--Cn-qC",M="tag-module--rs-btn-cyan--tfujq",P="tag-module--rs-btn-green--SYUlJ",R="tag-module--rs-btn-orange--gfQPD",U="tag-module--rs-btn-red--i37D6",D="tag-module--rs-btn-violet--sb7zD",j="tag-module--rs-btn-yellow--wlNSY",z="tag-module--rs-flex-box-grid-item-1--pNIkG",V="tag-module--rs-flex-box-grid-item-10--SPk5M",q="tag-module--rs-flex-box-grid-item-11--w1yCK",H="tag-module--rs-flex-box-grid-item-12--4E5RG",L="tag-module--rs-flex-box-grid-item-13--qdSF+",Y="tag-module--rs-flex-box-grid-item-14--nabY4",A="tag-module--rs-flex-box-grid-item-15--O2hdP",X="tag-module--rs-flex-box-grid-item-16--c-Nnw",W="tag-module--rs-flex-box-grid-item-17--ULH9D",J="tag-module--rs-flex-box-grid-item-18--XJkuJ",_="tag-module--rs-flex-box-grid-item-19--W619w",Q="tag-module--rs-flex-box-grid-item-2--3a7sO",K="tag-module--rs-flex-box-grid-item-20--yeCE4",$="tag-module--rs-flex-box-grid-item-21--0ilNX",ee="tag-module--rs-flex-box-grid-item-22--vwCD9",re="tag-module--rs-flex-box-grid-item-23--xWSLn",te="tag-module--rs-flex-box-grid-item-24--O1+vz",ne="tag-module--rs-flex-box-grid-item-3--sG8wh",oe="tag-module--rs-flex-box-grid-item-4--51XSl",le="tag-module--rs-flex-box-grid-item-5--VRuqu",ie="tag-module--rs-flex-box-grid-item-6--F13Qw",ae="tag-module--rs-flex-box-grid-item-7--3plxU",ue="tag-module--rs-flex-box-grid-item-8--dMnbM",de="tag-module--rs-flex-box-grid-item-9--ChpiU",se="tag-module--rs-flex-box-grid-item-order-1--1WIyF",me="tag-module--rs-flex-box-grid-item-order-10--f0fro",ce="tag-module--rs-flex-box-grid-item-order-11--l9ybw",ge="tag-module--rs-flex-box-grid-item-order-12--oE8kN",fe="tag-module--rs-flex-box-grid-item-order-13--sV2m-",xe="tag-module--rs-flex-box-grid-item-order-14--xYALG",be="tag-module--rs-flex-box-grid-item-order-15--MOfyk",pe="tag-module--rs-flex-box-grid-item-order-16--QXurx",ve="tag-module--rs-flex-box-grid-item-order-17--l8eif",Be="tag-module--rs-flex-box-grid-item-order-18--ZRDRu",Ie="tag-module--rs-flex-box-grid-item-order-19--2tpMz",Fe="tag-module--rs-flex-box-grid-item-order-2--da4OV",Ge="tag-module--rs-flex-box-grid-item-order-20--FU5u7",he="tag-module--rs-flex-box-grid-item-order-21--UFoRc",ye="tag-module--rs-flex-box-grid-item-order-22--ynq2o",Ee="tag-module--rs-flex-box-grid-item-order-23--CG9xy",we="tag-module--rs-flex-box-grid-item-order-24--lvCU3",Ze="tag-module--rs-flex-box-grid-item-order-3--jNqlB",Ce="tag-module--rs-flex-box-grid-item-order-4--BSJXE",Ne="tag-module--rs-flex-box-grid-item-order-5--NTPmp",Oe="tag-module--rs-flex-box-grid-item-order-6--G9qcs",ke="tag-module--rs-flex-box-grid-item-order-7--g3AGT",Se="tag-module--rs-flex-box-grid-item-order-8--kYumj",Te="tag-module--rs-flex-box-grid-item-order-9--lwimV",Me="tag-module--rs-tag-blue--EgvR+",Pe="tag-module--rs-tag-cyan--bTjyj",Re="tag-module--rs-tag-green--sbPf8",Ue="tag-module--rs-tag-orange--fp8PJ",De="tag-module--rs-tag-red--5M7II",je="tag-module--rs-tag-violet--oddNe",ze="tag-module--rs-tag-yellow--FPtIJ",Ve="tag-module--rs-theme-dark--UIxhH",qe="tag-module--rs-theme-high-contrast--vBeKN",He="tag-module--tag--g9N3Z",Le="tag-module--volcano--elMFW",Ye=t(90382),Ae=t.n(Ye),Xe=(new Set(["magenta","red","volcano","orange","gold","lime","green","cyan","blue","geekblue","purple"]),function(e){var r=e.size,t=e.color,o=e.children;return i.createElement(g,{size:r,className:Ae()(He,n[t])},o)})},66503:function(e){e.exports=function(e,r,t,n){for(var o=-1,l=null==e?0:e.length;++o<l;){var i=e[o];r(n,i,t(i),e)}return n}},60426:function(e,r,t){var n=t(52033);e.exports=function(e,r,t,o){return n(e,(function(e,n,l){r(o,e,t(e),l)})),o}},52033:function(e,r,t){var n=t(26194),o=t(26789)(n);e.exports=o},49819:function(e,r,t){var n=t(18911)();e.exports=n},26194:function(e,r,t){var n=t(49819),o=t(50098);e.exports=function(e,r){return e&&n(e,r,o)}},34690:function(e,r,t){var n=t(66503),o=t(60426),l=t(89278),i=t(19785);e.exports=function(e,r){return function(t,a){var u=i(t)?n:o,d=r?r():{};return u(t,e,l(a,2),d)}}},26789:function(e,r,t){var n=t(80068);e.exports=function(e,r){return function(t,o){if(null==t)return t;if(!n(t))return e(t,o);for(var l=t.length,i=r?l:-1,a=Object(t);(r?i--:++i<l)&&!1!==o(a[i],i,a););return t}}},18911:function(e){e.exports=function(e){return function(r,t,n){for(var o=-1,l=Object(r),i=n(r),a=i.length;a--;){var u=i[e?a:++o];if(!1===t(l[u],u,l))break}return r}}},83864:function(e,r,t){var n=t(88799),o=t(34690)((function(e,r,t){n(e,t,r)}));e.exports=o},25389:function(e,r,t){var n=t(88799),o=t(26194),l=t(89278);e.exports=function(e,r){var t={};return r=l(r,3),o(e,(function(e,o,l){n(t,o,r(e,o,l))})),t}}}]);
//# sourceMappingURL=d6a8009d7f2f840ae46cd75382af2df86c97c837-590efabedee04304f18d.js.map