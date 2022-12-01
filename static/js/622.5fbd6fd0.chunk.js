"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[622],{622:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var a=t(2982),r=t(2791),c=t(9434),d=t(3868),i=t(9831),o=t(1951),s=t(9085),u=(t(5462),t(8880)),l=function(e){return e.transactions.transactions},m=function(e){return e.transactions.categories},p=function(e){return e.transactions.error},h=function(e){return e.transactions.isTransactionModalOpen},x=t(2142),y=t(885),f=t(5705),j=t(9513),v=t.n(j),g=t(1724),b=(t(8639),t(365)),C="Transactions_customDateInput__zz46T",k=t(184),I=(0,r.forwardRef)((function(e,n){var t=e.value,a=e.onClick;return(0,k.jsx)("input",{value:t,className:C,onClick:a,onChange:a,ref:n,required:!0})}));function E(){var e=(0,r.useState)(new Date),n=(0,y.Z)(e,2),t=n[0],a=n[1],d=(0,c.I0)();(0,r.useEffect)((function(){d((0,u.CP)())}),[d]),(0,r.useEffect)((function(){var e=function(e){"Escape"===e.code&&d((0,x.$)())};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[d]);var i=(0,c.v9)(m),o=(0,f.TA)({initialValues:{type:!0,amount:"",comment:"",categoryId:""},validationSchema:g.Ry({type:g.Xg().required("Required"),amount:g.Rx().required("Required"),comment:g.Z_().max(40,"40 characters max"),categoryId:g.Z_().required("Required")}),onSubmit:function(e){var n=e.categoryId,a=e.type,r=e.amount,c=e.comment,i={transactionDate:t,comment:c,categoryId:a?n:"063f1132-ba5d-42b4-951d-44011ca46262",amount:a?-1*Number(r):Number(r),type:a?"EXPENSE":"INCOME"};d((0,u.dT)(i)),d((0,x.$)())}}),s=o.handleChange,l=o.handleSubmit,p=o.values,h=o.errors,j=o.touched;return(0,k.jsx)("div",{className:b.Z.backdrop,onClick:function(e){e.target===e.currentTarget&&d((0,x.$)())},children:(0,k.jsxs)("div",{className:b.Z.modal,children:[(0,k.jsx)("button",{className:b.Z.closeBtn,onClick:function(){return d((0,x.$)())},type:"button","aria-label":"close button",children:"X"}),(0,k.jsxs)("form",{className:b.Z.modalForm,onSubmit:l,children:[(0,k.jsx)("h2",{children:"Add transaction"}),(0,k.jsx)("span",{className:p.type?b.Z.inactive:b.Z.income,children:"Income"}),(0,k.jsx)("input",{name:"type",type:"checkbox",checked:p.type,onChange:s}),(0,k.jsx)("span",{className:p.type?b.Z.expense:b.Z.inactive,children:"Expense"}),p.type&&(0,k.jsxs)("select",{name:"categoryId",value:p.categoryId,onChange:s,required:!0,children:[(0,k.jsx)("option",{value:"",disabled:!0,hidden:!0,children:"Select your option"}),i.map((function(e){return"EXPENSE"===e.type?(0,k.jsx)("option",{value:e.id,children:e.name},e.id):null}))]}),j.categoryId&&h.categoryId?(0,k.jsx)("div",{children:h.categoryId}):null,(0,k.jsx)("input",{name:"amount",type:"text",placeholder:"0.00",value:p.amount,onChange:s,required:!0}),j.amount&&h.amount?(0,k.jsx)("div",{children:h.amount}):null,(0,k.jsx)(v(),{selected:t,dateFormat:"dd.MM.yyyy",calendarStartDay:1,onChange:function(e){a(e)},customInput:(0,k.jsx)(I,{})}),(0,k.jsx)("input",{name:"comment",type:"text",placeholder:"Your comment",value:p.comment,onChange:s}),j.comment&&h.comment?(0,k.jsx)("div",{children:h.comment}):null,(0,k.jsxs)("div",{children:[(0,k.jsx)("button",{type:"submit",children:"Add"}),(0,k.jsx)("button",{type:"button",onClick:function(){return d((0,x.$)())},children:"Cancel"})]})]})]})})}var Z=function(){var e=(0,c.v9)(h),n=(0,c.v9)(m),t=(0,c.v9)(l),y=(0,c.v9)(p),f=(0,c.I0)(),j=(0,a.Z)(t).sort((function(e,n){return(0,d.Z)((0,i.default)(e.transactionDate),(0,i.default)(n.transactionDate))}));return(0,r.useEffect)((function(){f((0,u.f1)()),f((0,u.CP)())}),[f]),y&&s.Am.error(y),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("table",{children:[(0,k.jsx)("thead",{children:(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{style:{padding:"5px"},children:"Date"}),(0,k.jsx)("th",{style:{padding:"5px"},children:"Type"}),(0,k.jsx)("th",{style:{padding:"5px"},children:"Category"}),(0,k.jsx)("th",{style:{padding:"5px"},children:"Comment"}),(0,k.jsx)("th",{style:{padding:"5px"},children:"Sum"}),(0,k.jsx)("th",{style:{padding:"5px"},children:"Balance"})]})}),(0,k.jsx)("tbody",{children:j.map((function(e){var t,a=e.id,r=e.transactionDate,c=e.type,d=e.categoryId,s=e.comment,u=e.amount,l=e.balanceAfter;return(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{style:{padding:"5px"},children:(0,o.default)((0,i.default)(r),"dd.MM.yyyy")}),(0,k.jsx)("td",{style:{padding:"5px"},children:c}),(0,k.jsx)("td",{style:{padding:"5px"},children:null===(t=n.find((function(e){return e.id===d})))||void 0===t?void 0:t.name}),(0,k.jsx)("td",{style:{padding:"5px"},children:s}),(0,k.jsx)("td",{style:{padding:"5px"},children:Math.abs(u)}),(0,k.jsx)("td",{style:{padding:"5px"},children:l})]},a)}))})]}),(0,k.jsx)("button",{type:"button","aria-label":"add transaction button",onClick:function(){return f((0,x.$)())},children:"Add Transaction"}),e&&(0,k.jsx)(E,{}),(0,k.jsx)(s.Ix,{})]})}}}]);
//# sourceMappingURL=622.5fbd6fd0.chunk.js.map