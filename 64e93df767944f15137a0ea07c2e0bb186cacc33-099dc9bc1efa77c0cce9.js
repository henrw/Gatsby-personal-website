(self.webpackChunkhenrw_github_io=self.webpackChunkhenrw_github_io||[]).push([[412],{695:function(e,r,t){"use strict";var n=t(74788);e.exports=function(e){return!n(e)}},49384:function(e,r,t){"use strict";t.d(r,{Z:function(){return m}});var n=t(87462),o=t(63366),u=t(67294),i=t(6183),l=t(62886),a=t(55539),d=function(){return a.Z&&/MSIE |Trident\/|Edge\//.test(window.navigator.userAgent)},s=u.forwardRef((function(e,r){var t,a=e.as,s=void 0===a?"div":a,m=e.alignItems,c=void 0===m?"center":m,g=e.classPrefix,x=void 0===g?"stack":g,f=e.className,b=e.children,B=e.direction,p=e.justifyContent,I=e.spacing,v=e.divider,F=e.style,G=e.wrap,h=(0,o.Z)(e,["as","alignItems","classPrefix","className","children","direction","justifyContent","spacing","divider","style","wrap"]),y=(0,i.Z)("Stack").rtl,E=(0,l.Z)(x),O=E.withClassPrefix,Z=E.merge,w=E.prefix,k=Z(f,O()),C=!d(),T=u.Children.count(b),N=Array.isArray(I)?I:[I,0],D=((t={})[y?"marginLeft":"marginRight"]=N[0],t.marginBottom=N[1],t),U=(0,n.Z)({alignItems:c,justifyContent:p,flexDirection:B,flexWrap:G?"wrap":void 0,gap:C?I:void 0},F);return u.createElement(s,(0,n.Z)({},h,{ref:r,className:k,style:U}),u.Children.map(b,(function(e,r){return[u.createElement("div",{className:w("item"),style:C?void 0:D},e),r<T-1?v:null]})))}));s.displayName="Stack";var m=s},71674:function(e,r,t){"use strict";var n=t(67294),o=t(32221),u=t(76075),i=t.n(u),l=t(18228);r.Z=function(e){var r=(0,o.$W)(),t=e.tag,u=t.color||"",a=t.name||"",d=a?i().generateFullUrl(r,"/tags/"+a):"#";return n.createElement("div",{style:{margin:"4px"}},n.createElement("a",{href:d},n.createElement(l.Z,{color:u},"#"+a)))}},15314:function(e,r,t){"use strict";t.d(r,{Z:function(){return v}});var n=t(75900),o=t.n(n),u=t(51496),i=t(695),l=t.n(i),a=t(67294),d=t(52160),s=t(71044),m=t(49384),c=t(64808),g=t(61109),x=t(49296),f=t(25444),b=t(32221),B=t(76075),p=t.n(B),I=t(71674),v=function(e){var r=e.data.node,t=e.tagsMap,n=r.frontmatter,i=n.title,B=n.authors,v=n.excerpt,F=n.path,G=n.date,h=n.tags,y=n.venue,E=n.cover,O=n.links,Z=E?E.childImageSharp.fluid:null,w=(0,b.$W)(),k=p().resolvePageUrl(F),C=(0,f.useStaticQuery)("2276479556").allFile.edges,T=[];G&&(T=T.concat([a.createElement("div",{key:"date"},p().formatDate(G))])),y&&(T=T.concat([a.createElement("div",{key:"venue"},a.createElement("span",null,y))])),h&&(T=T.concat([a.createElement(m.Z,{wrap:!0},h.map((function(e){return t[e]?a.createElement(I.Z,{key:"tag-"+e,tag:t[e]}):null})))]));var N=p().parseMarkDown(p().trimExcerpt(v),!0);return a.createElement(c.Z,{className:o()("researchCard-module--researchCard--2OLMz","cursor-default"),style:{padding:"0.8rem"},bordered:!0},a.createElement(s.Z,{gutter:8,align:"middle"},a.createElement(s.Z.Item,{as:g.Z,xs:24,sm:24,md:12,lg:16},a.createElement("h5",null,a.createElement("a",{href:p().generateFullUrl(w,k)},i)),a.createElement(s.Z,null,B?B.map((function(e,r){var t=p().parseMarkDown(e,!0);return r>=0&&r!==B.length-1&&(t+=",&nbsp;"),a.createElement(s.Z.Item,{key:r,xs:!0},a.createElement("span",{dangerouslySetInnerHTML:{__html:t}}))})):null),a.createElement(m.Z,{wrap:!0,divider:a.createElement(x.Z,{vertical:!0,className:"researchCard-module--divider--3I5Cd"}),style:{marginTop:"0.5rem"}},T),a.createElement("a",{href:p().generateFullUrl(w,k)},a.createElement("p",{style:{marginTop:"1rem"},dangerouslySetInnerHTML:{__html:N}})),O&&O.length?a.createElement(m.Z,{wrap:!0,spacing:6,style:{marginTop:"1rem"}},O.map((function(e){var r="#";if(e.url)if(l()(e.url)){var t=e.url.split("."),n=t[0];"pdf"===t[1]&&C.forEach((function(r){r.node.name===n&&(e.url=r.node.publicURL)})),r=p().generateFullUrl(w,e.url)}else r=e.url;return a.createElement(d.Z,{appearance:"ghost",href:r,target:"_blank",size:"xs"},e.name)}))):null),a.createElement(s.Z.Item,{as:g.Z,xs:24,sm:24,md:12,lg:8},a.createElement("a",{href:p().generateFullUrl(w,k)},Z?a.createElement(u.Z,{fluid:Z}):a.createElement("div",{className:"researchCard-module--postCardImg--UpXSK"})))))}},18228:function(e,r,t){"use strict";t.d(r,{Z:function(){return Ve}});var n={};t.r(n),t.d(n,{blue:function(){return Le},cyan:function(){return Se},geekblue:function(){return Xe},gold:function(){return Me},green:function(){return Pe},lime:function(){return Ye},magenta:function(){return Ue},orange:function(){return ze},purple:function(){return je},red:function(){return Re},rsBadgeBlue:function(){return F},rsBadgeContent:function(){return b},rsBadgeCyan:function(){return v},rsBadgeGreen:function(){return I},rsBadgeIndependent:function(){return f},rsBadgeOrange:function(){return B},rsBadgeRed:function(){return x},rsBadgeViolet:function(){return G},rsBadgeYellow:function(){return p},rsBtnBlue:function(){return C},rsBtnCyan:function(){return k},rsBtnGreen:function(){return w},rsBtnOrange:function(){return O},rsBtnRed:function(){return h},rsBtnViolet:function(){return T},rsBtnYellow:function(){return Z},rsFlexBoxGridItem1:function(){return N},rsFlexBoxGridItem10:function(){return K},rsFlexBoxGridItem11:function(){return Q},rsFlexBoxGridItem12:function(){return ee},rsFlexBoxGridItem13:function(){return te},rsFlexBoxGridItem14:function(){return oe},rsFlexBoxGridItem15:function(){return ie},rsFlexBoxGridItem16:function(){return ae},rsFlexBoxGridItem17:function(){return se},rsFlexBoxGridItem18:function(){return ce},rsFlexBoxGridItem19:function(){return xe},rsFlexBoxGridItem2:function(){return U},rsFlexBoxGridItem20:function(){return be},rsFlexBoxGridItem21:function(){return pe},rsFlexBoxGridItem22:function(){return ve},rsFlexBoxGridItem23:function(){return Ge},rsFlexBoxGridItem24:function(){return ye},rsFlexBoxGridItem3:function(){return _},rsFlexBoxGridItem4:function(){return M},rsFlexBoxGridItem5:function(){return Y},rsFlexBoxGridItem6:function(){return L},rsFlexBoxGridItem7:function(){return j},rsFlexBoxGridItem8:function(){return J},rsFlexBoxGridItem9:function(){return q},rsFlexBoxGridItemOrder1:function(){return D},rsFlexBoxGridItemOrder10:function(){return W},rsFlexBoxGridItemOrder11:function(){return $},rsFlexBoxGridItemOrder12:function(){return re},rsFlexBoxGridItemOrder13:function(){return ne},rsFlexBoxGridItemOrder14:function(){return ue},rsFlexBoxGridItemOrder15:function(){return le},rsFlexBoxGridItemOrder16:function(){return de},rsFlexBoxGridItemOrder17:function(){return me},rsFlexBoxGridItemOrder18:function(){return ge},rsFlexBoxGridItemOrder19:function(){return fe},rsFlexBoxGridItemOrder2:function(){return R},rsFlexBoxGridItemOrder20:function(){return Be},rsFlexBoxGridItemOrder21:function(){return Ie},rsFlexBoxGridItemOrder22:function(){return Fe},rsFlexBoxGridItemOrder23:function(){return he},rsFlexBoxGridItemOrder24:function(){return Ee},rsFlexBoxGridItemOrder3:function(){return z},rsFlexBoxGridItemOrder4:function(){return S},rsFlexBoxGridItemOrder5:function(){return P},rsFlexBoxGridItemOrder6:function(){return X},rsFlexBoxGridItemOrder7:function(){return H},rsFlexBoxGridItemOrder8:function(){return V},rsFlexBoxGridItemOrder9:function(){return A},rsTagBlue:function(){return Te},rsTagCyan:function(){return Ce},rsTagGreen:function(){return ke},rsTagOrange:function(){return Ze},rsTagRed:function(){return Oe},rsTagViolet:function(){return Ne},rsTagYellow:function(){return we},rsThemeDark:function(){return y},rsThemeHighContrast:function(){return E},tag:function(){return De},volcano:function(){return _e}});var o,u,i=t(67294),l=t(87462),a=t(81880),d=t(63366),s=t(62886),m=t(47484),c=i.forwardRef((function(e,r){var t=e.as,n=void 0===t?"div":t,c=e.classPrefix,g=void 0===c?"tag":c,x=e.size,f=void 0===x?"md":x,b=e.color,B=void 0===b?"default":b,p=e.children,I=e.closable,v=e.className,F=e.onClose,G=(0,d.Z)(e,["as","classPrefix","size","color","children","closable","className","onClose"]),h=(0,s.Z)(g),y=h.withClassPrefix,E=h.prefix,O=(0,h.merge)(v,y(f,B,{closable:I}));return i.createElement(n,(0,l.Z)({},G,{ref:r,className:O}),i.createElement("span",{className:E(o||(o=(0,a.Z)(["text"])))},p),I&&i.createElement(m.Z,{className:E(u||(u=(0,a.Z)(["icon-close"]))),onClick:F}))}));c.displayName="Tag";var g=c,x="tag-module--rs-badge-red--1b4RV",f="tag-module--rs-badge-independent--1CQyD",b="tag-module--rs-badge-content--BGsLY",B="tag-module--rs-badge-orange--1iXMI",p="tag-module--rs-badge-yellow--2Ufna",I="tag-module--rs-badge-green--2PnuC",v="tag-module--rs-badge-cyan--pTa_M",F="tag-module--rs-badge-blue--3Vnu2",G="tag-module--rs-badge-violet--R3rDC",h="tag-module--rs-btn-red--201T0",y="tag-module--rs-theme-dark--3xknl",E="tag-module--rs-theme-high-contrast--1uaRF",O="tag-module--rs-btn-orange--2Yh8D",Z="tag-module--rs-btn-yellow--2K9QL",w="tag-module--rs-btn-green--EMIzz",k="tag-module--rs-btn-cyan--2U6UC",C="tag-module--rs-btn-blue--2-Shu",T="tag-module--rs-btn-violet--3uZ32",N="tag-module--rs-flex-box-grid-item-1--IdnxP",D="tag-module--rs-flex-box-grid-item-order-1--bT1df",U="tag-module--rs-flex-box-grid-item-2--1KoUj",R="tag-module--rs-flex-box-grid-item-order-2--38FDW",_="tag-module--rs-flex-box-grid-item-3--9-9tx",z="tag-module--rs-flex-box-grid-item-order-3--gYcEB",M="tag-module--rs-flex-box-grid-item-4--uzbOV",S="tag-module--rs-flex-box-grid-item-order-4--3vrNX",Y="tag-module--rs-flex-box-grid-item-5--2cU52",P="tag-module--rs-flex-box-grid-item-order-5--2lyK7",L="tag-module--rs-flex-box-grid-item-6--3Ohp6",X="tag-module--rs-flex-box-grid-item-order-6--1kDN6",j="tag-module--rs-flex-box-grid-item-7--2dK6Y",H="tag-module--rs-flex-box-grid-item-order-7--WDcnj",J="tag-module--rs-flex-box-grid-item-8--1xwzL",V="tag-module--rs-flex-box-grid-item-order-8--1TBD9",q="tag-module--rs-flex-box-grid-item-9--1e8f1",A="tag-module--rs-flex-box-grid-item-order-9--33XzB",K="tag-module--rs-flex-box-grid-item-10--XDqOG",W="tag-module--rs-flex-box-grid-item-order-10--9njXx",Q="tag-module--rs-flex-box-grid-item-11--2qNue",$="tag-module--rs-flex-box-grid-item-order-11--2QIOY",ee="tag-module--rs-flex-box-grid-item-12---JzGZ",re="tag-module--rs-flex-box-grid-item-order-12--1siXU",te="tag-module--rs-flex-box-grid-item-13--1RJox",ne="tag-module--rs-flex-box-grid-item-order-13--3wtvW",oe="tag-module--rs-flex-box-grid-item-14--oLTR9",ue="tag-module--rs-flex-box-grid-item-order-14--3e_ID",ie="tag-module--rs-flex-box-grid-item-15--3rq2H",le="tag-module--rs-flex-box-grid-item-order-15--3UkHq",ae="tag-module--rs-flex-box-grid-item-16--3smeR",de="tag-module--rs-flex-box-grid-item-order-16--1ZD6A",se="tag-module--rs-flex-box-grid-item-17--3NLwX",me="tag-module--rs-flex-box-grid-item-order-17--9TYnX",ce="tag-module--rs-flex-box-grid-item-18--3KBbR",ge="tag-module--rs-flex-box-grid-item-order-18--1fJU-",xe="tag-module--rs-flex-box-grid-item-19--2SIT7",fe="tag-module--rs-flex-box-grid-item-order-19--myRGi",be="tag-module--rs-flex-box-grid-item-20--Bx4I5",Be="tag-module--rs-flex-box-grid-item-order-20--QdU1q",pe="tag-module--rs-flex-box-grid-item-21--1s4F6",Ie="tag-module--rs-flex-box-grid-item-order-21--JjYSx",ve="tag-module--rs-flex-box-grid-item-22--ki50_",Fe="tag-module--rs-flex-box-grid-item-order-22--2-gMk",Ge="tag-module--rs-flex-box-grid-item-23--1dFMD",he="tag-module--rs-flex-box-grid-item-order-23--35hFR",ye="tag-module--rs-flex-box-grid-item-24--3s2N1",Ee="tag-module--rs-flex-box-grid-item-order-24--3dyms",Oe="tag-module--rs-tag-red--27tHY",Ze="tag-module--rs-tag-orange--3PHD8",we="tag-module--rs-tag-yellow--3iBey",ke="tag-module--rs-tag-green--2h2_a",Ce="tag-module--rs-tag-cyan--C0-aN",Te="tag-module--rs-tag-blue--3b_1c",Ne="tag-module--rs-tag-violet--3N9y0",De="tag-module--tag--7als5",Ue="tag-module--magenta--BdqyH",Re="tag-module--red--1clkw",_e="tag-module--volcano--2cDAO",ze="tag-module--orange--23-_p",Me="tag-module--gold--6EyUh",Se="tag-module--cyan--JooV_",Ye="tag-module--lime--3tROA",Pe="tag-module--green--ydhXa",Le="tag-module--blue--JBTPB",Xe="tag-module--geekblue--3Yxiu",je="tag-module--purple--dxiJy",He=t(75900),Je=t.n(He),Ve=(new Set(["magenta","red","volcano","orange","gold","lime","green","cyan","blue","geekblue","purple"]),function(e){var r=e.size,t=e.color,o=e.children;return i.createElement(g,{size:r,className:Je()(De,n[t])},o)})},44174:function(e){e.exports=function(e,r,t,n){for(var o=-1,u=null==e?0:e.length;++o<u;){var i=e[o];r(n,i,t(i),e)}return n}},81119:function(e,r,t){var n=t(89881);e.exports=function(e,r,t,o){return n(e,(function(e,n,u){r(o,e,t(e),u)})),o}},89881:function(e,r,t){var n=t(47816),o=t(99291)(n);e.exports=o},28483:function(e,r,t){var n=t(25063)();e.exports=n},47816:function(e,r,t){var n=t(28483),o=t(3674);e.exports=function(e,r){return e&&n(e,r,o)}},55189:function(e,r,t){var n=t(44174),o=t(81119),u=t(67206),i=t(1469);e.exports=function(e,r){return function(t,l){var a=i(t)?n:o,d=r?r():{};return a(t,e,u(l,2),d)}}},99291:function(e,r,t){var n=t(98612);e.exports=function(e,r){return function(t,o){if(null==t)return t;if(!n(t))return e(t,o);for(var u=t.length,i=r?u:-1,l=Object(t);(r?i--:++i<u)&&!1!==o(l[i],i,l););return t}}},25063:function(e){e.exports=function(e){return function(r,t,n){for(var o=-1,u=Object(r),i=n(r),l=i.length;l--;){var a=i[e?l:++o];if(!1===t(u[a],a,u))break}return r}}},24350:function(e,r,t){var n=t(89465),o=t(55189)((function(e,r,t){n(e,t,r)}));e.exports=o},66604:function(e,r,t){var n=t(89465),o=t(47816),u=t(67206);e.exports=function(e,r){var t={};return r=u(r,3),o(e,(function(e,o,u){n(t,o,r(e,o,u))})),t}}}]);
//# sourceMappingURL=64e93df767944f15137a0ea07c2e0bb186cacc33-099dc9bc1efa77c0cce9.js.map