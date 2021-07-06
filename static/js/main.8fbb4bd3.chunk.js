(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},32:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),o=n.n(r),u=(n(21),n(22),n(23),n(1)),i=function(e){var t=e.name,n=e.number;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("span",{className:"contact-name",children:[t,": "]}),Object(u.jsx)("span",{className:"contact-number",children:n})]})};i.defaultProps={name:"Mickey Mouse",number:123456789};var s,b=i,l=(n(8),n(25),n(3)),j=n(39),m=n(5),d={addContact:Object(m.a)("phonebook/add",(function(e,t){return{payload:{id:Object(j.a)(),name:e,number:t}}})),deleteContact:Object(m.a)("phonebook/delete"),changeFilter:Object(m.a)("phonebook/changeFilter")},h=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},f=Object(l.b)((function(e){var t=e.contacts,n=e.filter;return{contacts:h(t,n)}}),(function(e){return{onClick:function(t){return e(d.deleteContact(t))}}}))((function(e){var t=e.contacts,n=e.onClick;return Object(u.jsx)("ul",{className:"contact-list",children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(u.jsxs)("li",{className:"contact-item",children:[Object(u.jsx)(b,{name:a,number:c}),Object(u.jsx)("button",{type:"button",onClick:function(){n(t)},className:"button contact-item__button",children:"Delete"})]},t)}))})})),O=n(4),p=n(11),g=n(12),x=n(15),C=n(14),v=(n(32),function(e){Object(x.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){e.setState(Object(O.a)({},t.currentTarget.name,t.currentTarget.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.name,e.state.number),e.reset()},e}return Object(g.a)(n,[{key:"reset",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){return Object(u.jsxs)("form",{onSubmit:this.handleSubmit,className:"contacts-form",children:[Object(u.jsxs)("label",{className:"label",children:["Name",Object(u.jsx)("input",{type:"text",value:this.state.name,onChange:this.handleChange,name:"name",className:"input"})]}),Object(u.jsxs)("label",{className:"label",children:["Number",Object(u.jsx)("input",{type:"tel",value:this.state.number,onChange:this.handleChange,name:"number",className:"input"})]}),Object(u.jsx)("button",{type:"submit",className:"button contacts-form__button",children:"Add contact"})]})}}]),n}(a.Component)),y=Object(l.b)(null,(function(e){return{onSubmit:function(t,n){return e(d.addContact(t,n))}}}))(v),N=Object(l.b)((function(e){return{value:e.filter}}),(function(e){return{onChange:function(t){return e(d.changeFilter(t.target.value))}}}))((function(e){var t=e.value,n=e.onChange;return Object(u.jsxs)("label",{className:"label",children:["Find contact by name",Object(u.jsx)("input",{type:"text",value:t,onChange:n,className:"input"})]})})),k=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Phonebook"}),Object(u.jsx)(y,{}),Object(u.jsx)("h2",{children:"Contacts"}),Object(u.jsx)(N,{}),Object(u.jsx)(f,{})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},S=(n(33),n(13)),w=n(2),L=[{id:Object(j.a)(),name:"Rosie Simpson",number:"459-12-56"},{id:Object(j.a)(),name:"Hermione Kline",number:"443-89-12"},{id:Object(j.a)(),name:"Eden Clements",number:"645-17-79"},{id:Object(j.a)(),name:"Annie Copeland",number:"227-91-26"}],P=(n(38),n(34),Object(m.b)(L,(s={},Object(O.a)(s,d.addContact,(function(e,t){var n=t.payload;return[].concat(Object(S.a)(e),[n])})),Object(O.a)(s,d.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),s))),T=Object(m.b)("",Object(O.a)({},d.changeFilter,(function(e,t){return t.payload}))),_=Object(w.b)({contacts:P,filter:T}),A={store:Object(w.d)(_)};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(l.a,{store:A.store,children:Object(u.jsx)(k,{})})}),document.getElementById("root")),F()},8:function(e,t,n){}},[[37,1,2]]]);
//# sourceMappingURL=main.8fbb4bd3.chunk.js.map