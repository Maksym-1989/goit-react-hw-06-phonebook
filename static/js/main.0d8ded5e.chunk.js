(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={label:"Filter_label__14TKo",input:"Filter_input__dYuwy"}},16:function(t,e,n){t.exports={container:"App_container__3oAcL"}},17:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},27:function(t,e,n){},35:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(8),r=n.n(c),o=(n(27),n(6)),i=n(13),s=n(14),l=n(22),u=n(20),b=n(7),d=n.n(b),j=n(5),m=n(41),p=n(3),h=Object(p.b)("phonebook/addContact",(function(t,e){return{payload:{name:t,number:e,id:Object(m.a)()}}})),O=Object(p.b)("phonebook/deleteContact"),f=Object(p.b)("phonebook/changeFilter"),x=n(1),C=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(o.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.name;t.props.contacts.some((function(t){return t.name===n}))?console.log(alert("".concat(n," is already in contacts"))):(t.props.addContact(t.state.name,t.state.number),t.setState({name:"",number:""}))},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsxs)("label",{className:d.a.label,children:["Name",Object(x.jsx)("input",{className:d.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,value:this.state.name})]}),Object(x.jsxs)("label",{className:d.a.label,children:["Number",Object(x.jsx)("input",{className:d.a.input,type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,value:this.state.number})]}),Object(x.jsx)("button",{type:"submit",className:d.a.button,children:"Add Contact"})]})}}]),n}(a.Component),_={addContact:h},g=Object(j.b)((function(t){return{contacts:t.contacts.items}}),_)(C),v=(n(35),function(t){var e=t.children,n=t.title;return Object(x.jsxs)("section",{children:[Object(x.jsx)("h2",{children:n.toUpperCase()}),e]})});v.defaultProps={title:"Some title"};var y,N=v,k=n(9),A=n.n(k),w={deleteContact:O},F=Object(j.b)((function(t){return{items:t.contacts.items,filter:t.contacts.filter}}),w)((function(t){var e=t.items,n=t.filter,a=t.deleteContact,c=function(){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))}();return Object(x.jsx)("ul",{children:c.map((function(t){var e=t.name,n=t.number,c=t.id;return Object(x.jsxs)("li",{className:A.a.item,children:[Object(x.jsxs)("p",{className:A.a.text,children:[e,": ",n]}),Object(x.jsx)("button",{className:A.a.button,type:"button",onClick:function(){a(c)},children:"Delete"})]},c)}))})})),S=n(12),L=n.n(S),z={onChangeFilter:f},J=Object(j.b)((function(t){return{filter:t.contacts.filter}}),z)((function(t){var e=t.filter,n=t.onChangeFilter;return Object(x.jsxs)("label",{className:L.a.label,children:["Find contacts by name",Object(x.jsx)("input",{className:L.a.input,type:"text",value:e,onChange:function(t){n(t.target.value)}})]})})),B=n(16),P=n.n(B),U=function(){return Object(x.jsxs)("div",{className:P.a.container,children:[Object(x.jsx)(N,{title:"Phonebook",children:Object(x.jsx)(g,{})}),Object(x.jsxs)(N,{title:"Contacts",children:[Object(x.jsx)(J,{}),Object(x.jsx)(F,{})]})]})},Z=(n(36),n(2)),q=n(21),D=n(17),E=Object(p.c)(D,(y={},Object(o.a)(y,h,(function(t,e){return[e.payload].concat(Object(q.a)(t))})),Object(o.a)(y,O,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),y)),K=Object(p.c)("",Object(o.a)({},f,(function(t,e){return e.payload}))),R=Object(Z.b)({items:E,filter:K}),T=n(4),V=n(18),H={key:"ContactList",storage:n.n(V).a},I=Object(Z.b)({contacts:R}),M=Object(T.g)(H,I),X=Object(p.a)({reducer:M,middleware:Object(p.d)({serializableCheck:{ignoredActions:[T.a,T.f,T.b,T.c,T.d,T.e]}})}),Y={store:X,persistor:Object(T.h)(X)},$=n(19);r.a.render(Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(j.a,{store:Y.store,children:Object(x.jsx)($.a,{loading:null,persistor:Y.persistor,children:Object(x.jsx)(U,{})})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={label:"ContactForm_label__1UR5X",input:"ContactForm_input__3kPxh",button:"ContactForm_button__2-VUm"}},9:function(t,e,n){t.exports={item:"ContactList_item__3318V",text:"ContactList_text__mr7Aw",button:"ContactList_button__2SyrB"}}},[[39,1,2]]]);
//# sourceMappingURL=main.0d8ded5e.chunk.js.map