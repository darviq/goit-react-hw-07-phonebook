(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{73:function(n,t,e){},74:function(n,t,e){"use strict";e.r(t);var a,c=e(1),r=e(0),o=e(12),i=e.n(o),u=e(5),b=e(3),s=e(4),j=e(18),l=e(2),f="ADD_CONCTACT",d="LOAD_CONCTACTS",O="REMOVE_CONCTACT",p=Object(l.b)(f),x=Object(l.b)(d),h=Object(l.b)(O),m=Object(l.c)([],(a={},Object(s.a)(a,p,(function(n,t){var e=t.payload;return[].concat(Object(j.a)(n),[Object(b.a)({},e)])})),Object(s.a)(a,x,(function(n,t){var e=t.payload;return Object(j.a)(e)})),Object(s.a)(a,h,(function(n,t){var e=t.payload;return Object(j.a)(n.filter((function(n){return n.id!==e})))})),a)),g=Object(l.b)("CHANGE_LOADING_STATUS"),v=Object(l.c)(!1,Object(s.a)({},g,(function(n){return!n}))),w=Object(l.b)("SET_ERROR"),y=Object(l.c)([],Object(s.a)({},w,(function(n,t){var e=t.payload;return[].concat(Object(j.a)(n),[Object(b.a)({},e)])}))),C=e(25),k=e.n(C),N="https://phonebook-aed1e-default-rtdb.firebaseio.com",E=e(22),T=function(n){return n.contacts.items},A=function(n){return n.contacts.filter},X={getContacts:T,getLoadingStatus:function(n){return n.contacts.loading},getFilter:A,getFilteredContacts:Object(E.a)([A,T],(function(n,t){return t.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))}))},S=e(24),F=e(10),L=e(15);function _(){var n=Object(F.a)(["\n    position: absolute;\n    top: 26px;\n    left: 70px;\n    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);\n    border-radius: 6px;\n    background-color: hotpink;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    width: 200px;\n    height: 50px;\n    vertical-align: center;\n\n\n    &:enter {\n        transform: translateX(-150%);\n    }\n    &:enter-active {\n        transform: translateX(0);\n        transition: transform 250ms;\n    }\n    &:exit {\n        transform: translateX(0);\n    }\n    &:exit-active {\n        transform: translateX(-150%);\n        transition: transform 250ms;\n    }\n"]);return _=function(){return n},n}var D=L.a.div(_()),R=function(n){var t=n.showNotification;return Object(c.jsx)(D,{in:t,timeout:250,unmountOnExit:!0,children:"Contact already exists!"})},G=e(11);function I(){var n=Object(F.a)(["\n    width: 100%;\n    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);\n    padding: 25px;\n\n    label {\n        display: block;\n    }\n\n    input {\n        display: block;\n        width: 100%;\n        height: 26px;\n    }\n\n    button {\n        width: 100%;\n        height: 26px;\n        margin-top: 10px;\n        background-color: honeydew;\n    }\n\n    button:hover,\n    button:focus {\n        background-color: lightgreen;\n    }\n"]);return I=function(){return n},n}var H=G.b.form(I()),J=function(n){var t=n.contacts,e=Object(r.useState)({name:"",number:"",showNotification:!1}),a=Object(S.a)(e,2),o=a[0],i=a[1],j=Object(u.b)(),l=function(n){var t=n.target,e=t.name,a=t.value;i((function(n){return Object(b.a)(Object(b.a)({},n),{},Object(s.a)({},e,a))}))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(H,{onSubmit:function(n){var e;n.preventDefault(),t.find((function(n){return n.name===o.name}))?(i((function(n){return Object(b.a)(Object(b.a)({},n),{},{showNotification:!0})})),setTimeout((function(){i((function(n){return Object(b.a)(Object(b.a)({},n),{},{showNotification:!1})}))}),4e3)):(j((e={name:o.name,number:o.number},function(n){n(g()),k.a.post("".concat(N,"/contacts.json"),Object(b.a)({},e)).then((function(t){return n(p(Object(b.a)(Object(b.a)({},e),{},{id:t.data.name})))})).catch((function(t){return n(w(t))})).finally((function(){return n(g())}))})),i({name:"",number:"",showNotification:!1}))},children:[Object(c.jsxs)("label",{children:["Name",Object(c.jsx)("input",{type:"text",value:o.name,name:"name",onChange:l})]}),Object(c.jsxs)("label",{children:["Number",Object(c.jsx)("input",{type:"text",value:o.number,name:"number",onChange:l})]}),Object(c.jsx)("button",{type:"submit",children:"Add contact"})]}),Object(c.jsx)(R,{showNotification:o.showNotification})]})},B=Object(l.b)("CHANGE_FILTER"),M=Object(l.c)("",Object(s.a)({},B,(function(n,t){return t.payload})));function P(){var n=Object(F.a)(["\n    width: 100%;\n    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);\n    padding: 25px;\n\n    label {\n        display: block;\n    }\n\n    input {\n        display: block;\n        width: 100%;\n        height: 26px;\n    }\n"]);return P=function(){return n},n}var U=G.b.div(P()),V=function(){var n=Object(r.useState)({value:""}),t=Object(S.a)(n,2),e=t[0],a=t[1],o=Object(u.b)();return Object(c.jsx)(U,{children:Object(c.jsxs)("label",{children:["Find contacts by name",Object(c.jsx)("input",{type:"text",value:e.value,name:"filter",onChange:function(n){a({value:n.target.value}),o(B(n.target.value))}})]})})},q=e(76);function z(){var n=Object(F.a)(["\n    width: 100%;\n    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);\n    padding: 16px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    &:enter {\n        transform: translateX(-120%);\n    }\n    &:enter-active {\n        transform: translateX(0);\n        transition: transform 250ms;\n    }\n    &:exit {\n        transform: translateX(0);\n    }\n    &:exit-active {\n        transform: translateX(-120%);\n        transition: transform 250ms;\n    }\n\n    button {\n        background-color: hotpink;\n        font-weight: 700;\n        width: 30px;\n        height: 30px;\n\n        :hover,\n        :focus {\n            background-color: red;\n        }\n    }\n"]);return z=function(){return n},n}var K=L.a.li(z()),Q=function(n){var t=n.name,e=n.number,a=n.id,r=Object(u.b)();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{children:t}),Object(c.jsx)("p",{children:e}),Object(c.jsx)("button",{type:"button","data-id":a,onClick:function(n){r(function(n){return function(t){t(g()),k.a.delete("".concat(N,"/contacts/").concat(n,".json")).then((function(){return t(h(n))})).catch((function(n){return t(w(n))})).finally((function(){return t(g())}))}}(n.target.dataset.id))},children:"\u2715"})]})},W=function(){var n=Object(u.c)(X.getFilteredContacts);return Object(c.jsx)(q.a,{component:"ul",children:n.map((function(n){return Object(c.jsx)(K,{timeout:1e3,mountOnEnter:!0,unmountOnExit:!0,children:Object(c.jsx)(Q,Object(b.a)({},n))},n.id)}))})};function Y(){var n=Object(F.a)(["\n    text-align: center;\n\n    &:appear {\n        transform: translateX(-100%);\n    }\n    &:appear-active {\n        transform: translateX(0);\n        transition: transform 500ms;\n    }\n"]);return Y=function(){return n},n}function Z(){var n=Object(F.a)(["\n    width: 300px;\n    margin-left: 25px;\n\n    h2 {\n        margin-top: 10px;\n        text-align: center;\n    }\n"]);return Z=function(){return n},n}var $=G.b.div(Z()),nn=L.a.h1(Y()),tn=function(){var n=Object(u.c)(X.getContacts),t=Object(u.c)(X.getLoadingStatus),e=Object(u.b)();return Object(r.useEffect)((function(){e((function(n){n(g()),k.a.get("".concat(N,"/contacts.json")).then((function(t){if(t.data){var e=Object.keys(t.data).map((function(n){return Object(b.a)(Object(b.a)({},t.data[n]),{},{id:n})}));n(x(e))}})).catch((function(t){return n(w(t))})).finally((function(){return n(g())}))}))}),[]),Object(c.jsxs)($,{children:[Object(c.jsx)(nn,{in:!0,appear:!0,timeout:500,children:t?"Loading...":"Phonebook"}),Object(c.jsx)(J,{contacts:n}),n.length>0&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Contacts"}),Object(c.jsx)(V,{})]}),Object(c.jsx)(W,{})]})},en=function(){return Object(c.jsx)(tn,{})},an=(e(73),e(9)),cn={contacts:Object(an.c)({items:m,loading:v,errors:y,filter:M})},rn=e(20),on=Object(l.a)({reducer:cn,middleware:[rn.a]});i.a.render(Object(c.jsx)(u.a,{store:on,children:Object(c.jsx)(en,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.6a7517ea.chunk.js.map