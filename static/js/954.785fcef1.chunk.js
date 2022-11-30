"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[954],{5954:function(s,e,a){a.r(e),a.d(e,{default:function(){return Z}});var n=a(2791),c=a(1087),i=a(7689),l=a(885),r="Currency_container__jwsz7",t="Currency_list__vuH5W",u="Currency_item__D4zQu",h="Currency_title__9r0O9",m="Currency_currency__0yzVA",d=a(184),x=function(){var s=(0,n.useState)({buy:0,sale:0}),e=(0,l.Z)(s,2),a=e[0],c=e[1],i=(0,n.useState)({buy:0,sale:0}),x=(0,l.Z)(i,2),j=x[0],o=x[1],p="00.00",N="00.00";return(0,n.useEffect)((function(){fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5").then((function(s){return s.json()})).then((function(s){return s})).catch((function(s){return s.message})).then((function(s){o({buy:Number(s[0].buy).toFixed(2),sale:Number(s[0].sale).toFixed(2)}),c({buy:Number(s[1].buy).toFixed(2),sale:Number(s[1].sale).toFixed(2)})}))}),[]),(0,d.jsx)("div",{className:r,children:(0,d.jsxs)("ul",{className:t,children:[(0,d.jsxs)("li",{className:u,children:[(0,d.jsx)("span",{className:h,children:"Currency"}),(0,d.jsx)("span",{className:m,children:"USD"}),(0,d.jsx)("span",{className:m,children:"EUR"}),(0,d.jsx)("span",{className:m,children:"RUB"})]}),(0,d.jsxs)("li",{className:u,children:[(0,d.jsx)("span",{className:h,children:"Purchase"}),(0,d.jsx)("span",{className:m,children:a.buy}),(0,d.jsx)("span",{className:m,children:j.buy}),(0,d.jsx)("span",{className:m,children:p})]}),(0,d.jsxs)("li",{className:u,children:[(0,d.jsx)("span",{className:h,children:"Sale"}),(0,d.jsx)("span",{className:m,children:a.sale}),(0,d.jsx)("span",{className:m,children:j.sale}),(0,d.jsx)("span",{className:m,children:N})]})]})})},j=a(3073),o=a(3884),p=a(1209),N=a(9434),v=a(8880),f={response:"(max-width: 479px)",mobile:"(min-width: 480px) and (max-width: 767px)",tablet:"(min-width: 768px) and (max-width: 1279px)",desktop:"(min-width: 1280px)"},Z=function(){var s=(0,N.I0)();return(0,n.useEffect)((function(){s((0,v.f1)())}),[s]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{children:"Wallet"}),(0,d.jsxs)("ul",{className:o.Z.nav,children:[(0,d.jsx)("li",{className:o.Z.navItem,children:(0,d.jsxs)(c.OL,{to:"wallet/transactions",className:o.Z.navLink,activeclassname:o.Z.navLinkActive,children:[(0,d.jsx)("div",{className:o.Z.iconWrapper,children:(0,d.jsx)("svg",{className:o.Z.svg,children:(0,d.jsx)("use",{href:"".concat(p.Z,"#icon-home")})})}),(0,d.jsx)("span",{className:o.Z.navText,children:"Home"})]})}),(0,d.jsx)("li",{className:o.Z.navItem,children:(0,d.jsxs)(c.OL,{to:"wallet/statistics",className:o.Z.navLink,activeclassname:o.Z.navLinkActive,children:[(0,d.jsx)("div",{className:o.Z.iconWrapper,children:(0,d.jsx)("svg",{className:o.Z.svg,children:(0,d.jsx)("use",{href:"".concat(p.Z,"#icon-statistic")})})}),(0,d.jsx)("span",{className:o.Z.navText,children:"Statistics"})]})}),(0,d.jsx)(j.Z,{queries:f,children:function(s){return(s.mobile||s.response)&&(0,d.jsx)("li",{className:o.Z.navItem,children:(0,d.jsx)(c.OL,{to:"currency",className:o.Z.navLink,activeclassname:o.Z.navLinkActive,children:(0,d.jsx)("div",{className:o.Z.iconWrapper,children:(0,d.jsx)("svg",{className:o.Z.svg,children:(0,d.jsx)("use",{href:"".concat(p.Z,"#icon-currency")})})})})})}})]}),(0,d.jsx)(x,{}),(0,d.jsx)(n.Suspense,{children:(0,d.jsx)(i.j3,{})})]})}}}]);
//# sourceMappingURL=954.785fcef1.chunk.js.map