(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,n,o){"use strict";o.r(n);var e=o(4),c=o.n(e),r=o(3),i=o(1),u=(o(9),o(0)),a=function(t){var n=t.goods;return Object(u.jsx)("ul",{children:null===n||void 0===n?void 0:n.map((function(t){return Object(u.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})};function d(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var s=function(){var t=Object(i.useState)([]),n=Object(r.a)(t,2),o=n[0],e=n[1],c=Object(i.useState)(""),s=Object(r.a)(c,2),l=s[0],f=s[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Dynamic list of Goods"}),l&&Object(u.jsx)("p",{children:l}),Object(u.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){f(""),d().then((function(t){return e(t)}))},children:"Load all goods"}),Object(u.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){f(""),d().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})).then((function(t){return e(t)})).catch((function(){return f("Could not load goods")}))},children:"Load 5 first goods"}),Object(u.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){f(""),d().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then((function(t){return e(t)})).catch((function(){return f("Could not load goods")}))},children:"Load red goods"}),Object(u.jsx)(a,{goods:o})]})};c.a.render(Object(u.jsx)(s,{}),document.getElementById("root"))},9:function(t,n,o){}},[[11,1,2]]]);
//# sourceMappingURL=main.66207545.chunk.js.map