(this["webpackJsonpreact-expense-tracker"]=this["webpackJsonpreact-expense-tracker"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),s=n.n(a),i=(n(13),n(0)),o=function(){return Object(i.jsx)("h2",{children:"Expense"})},u=n(3),j=n(8),l=n(4),d=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(l.a)(Object(l.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(l.a)(Object(l.a)({},e),{},{transactions:[t.payload].concat(Object(j.a)(e.transactions))});default:return e}},b={transactions:[]},O=Object(c.createContext)(b),x=function(e){var t=e.children,n=Object(c.useReducer)(d,b),r=Object(u.a)(n,2),a=r[0],s=r[1];return Object(i.jsx)(O.Provider,{value:{transactions:a.transactions,deleteTransaction:function(e){s({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){s({type:"ADD_TRANSACTION",payload:e})}},children:t})};function h(e){var t=e.toFixed(2).split(".");return"$ "+t[0].split("").reverse().reduce((function(e,t,n,c){return"-"===t?e:t+(!n||n%3?"":",")+e}),"")+"."+t[1]}var m=function(){var e=Object(c.useContext)(O).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h4",{children:"Your Balance"}),Object(i.jsx)("h1",{children:h(e)})]})},f=function(){var e=Object(c.useContext)(O).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0),n=-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0);return Object(i.jsxs)("div",{className:"inc-exp-container",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Income"}),Object(i.jsx)("p",{className:"money plus",children:h(t)})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Expense"}),Object(i.jsx)("p",{className:"money minus",children:h(n)})]})]})},p=function(e){var t=e.transaction,n=Object(c.useContext)(O).deleteTransaction,r=t.amount<0?"-":"+";return Object(i.jsxs)("li",{className:t.amount<0?"minus":"plus",children:[t.text,Object(i.jsxs)("span",{children:[r,h(t.amount)]}),Object(i.jsx)("button",{onClick:function(){return n(t.id)},className:"delete-btn",children:"x"})]})},v=function(){var e=Object(c.useContext)(O).transactions;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:"History"}),Object(i.jsx)("ul",{className:"list",children:e.map((function(e){return Object(i.jsx)(p,{transaction:e},e.id)}))})]})},N=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(u.a)(a,2),o=s[0],j=s[1],l=Object(c.useContext)(O).addTransaction;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:"Add new transaction"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e8*Math.random()),text:n,amount:+o};l(t),r(""),j("")},children:[Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("input",{type:"text",value:n,onChange:function(e){return r(e.target.value)},placeholder:"Enter text..."})]}),Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(i.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(i.jsx)("input",{type:"number",value:o,onChange:function(e){return j(e.target.value)},placeholder:"Enter amount..."})]}),Object(i.jsx)("button",{className:"btn",children:"Add transaction"})]})]})};var T=function(){return Object(i.jsxs)(x,{children:[Object(i.jsx)(o,{}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(m,{}),Object(i.jsx)(f,{}),Object(i.jsx)(v,{}),Object(i.jsx)(N,{})]})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(T,{})}),document.getElementById("root")),C()}},[[15,1,2]]]);
//# sourceMappingURL=main.ffb9efd6.chunk.js.map