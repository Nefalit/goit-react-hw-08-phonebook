"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[841],{2841:function(e,a,n){n.r(a),n.d(a,{default:function(){return v}});var t=n(9434),r=n(6871),s=n(1291),i=n(8724),l=n(1413),o=n(158),u=n(4595),c={label:"Name",name:"name",type:"text",placeholder:"Input name",required:!0},d={label:"Email",name:"email",type:"email",placeholder:"Input email",required:!0},m={label:"Password",name:"password",type:"password",placeholder:"Input password",required:!0},h={name:"",email:"",password:""},p="register-form_form__AtyVK",f="register-form_btn__Gn5O+",_=n(3329),g=function(e){var a=e.onSubmit,n=(0,o.Z)({onSubmit:a,initialState:h}),t=n.state,r=n.handleChange,s=n.handleSubmit,i=t.name,g=t.email,x=t.password;return(0,_.jsxs)("form",{className:p,onSubmit:s,children:[(0,_.jsx)(u.Z,(0,l.Z)({value:i,onChange:r},c)),(0,_.jsx)(u.Z,(0,l.Z)({value:g,onChange:r},d)),(0,_.jsx)(u.Z,(0,l.Z)({value:x,onChange:r},m)),(0,_.jsx)("button",{className:f,type:"submit",children:"Singup"})]})},x=n(9869),b="register-page_title__HKJZ2",v=function(){var e=(0,s.Z)(),a=(0,t.v9)(x.v0),n=a.error,l=a.loading,o=(0,t.I0)();return e?(0,_.jsx)(r.Fg,{to:"/contacts"}):(0,_.jsx)("main",{children:(0,_.jsxs)("div",{className:"container",children:[(0,_.jsx)("h2",{className:b,children:"Register Page"}),(0,_.jsx)(g,{onSubmit:function(e){o((0,i.IU)(e))}}),l&&(0,_.jsx)("p",{className:"loading",children:"...Loading"}),n&&(0,_.jsxs)("p",{className:"error",children:["Error : ",n.message]}),n&&(0,_.jsx)("p",{className:"error",children:n.messageForUser})]})})}},4595:function(e,a,n){n.d(a,{Z:function(){return c}});var t=n(2791),r=n(6382),s="text-field_block__JkCnA",i="text-field_label__VYX-y",l="text-field_input__YM8fs",o=n(3329),u=function(e){var a=e.label,n=e.name,u=e.value,c=e.onChange,d=e.placeholder,m=e.required,h=e.type,p=(0,t.useMemo)((function(){return(0,r.x0)()}),[]);return(0,o.jsxs)("div",{className:s,children:[a&&(0,o.jsxs)("label",{className:i,htmlFor:p,children:[a,":"," "]}),(0,o.jsx)("input",{className:l,id:p,name:n,value:u,onChange:c,placeholder:d,required:m,type:h})]})},c=u;u.defaultProps={type:"text",required:!1}},158:function(e,a,n){var t=n(4942),r=n(1413),s=n(8152),i=n(2791);a.Z=function(e){var a=e.onSubmit,n=e.initialState,l=e.isReset,o=void 0===l||l,u=(0,i.useState)((0,r.Z)({},n)),c=(0,s.Z)(u,2),d=c[0],m=c[1];return{state:d,setState:m,handleChange:function(e){var a=e.target,n=a.name,s=a.value,i=a.type,l=a.checked,o="checkbox"===i?l:s;m((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,t.Z)({},n,o))}))},handleSubmit:function(e){e.preventDefault(),a((0,r.Z)({},d)),o&&m((0,r.Z)({},n))}}}}}]);
//# sourceMappingURL=841.63ef090b.chunk.js.map