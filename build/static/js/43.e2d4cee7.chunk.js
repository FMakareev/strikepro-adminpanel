(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{546:function(e,t,a){"use strict";var n=a(9),r=a(20),c=a(0),o=a.n(c),s=a(24),l=a.n(s),u=a(40),i=a.n(u),m=a(542),b={tag:m.q,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},d=function(e){var t=e.className,a=e.cssModule,c=e.innerRef,s=e.tag,l=Object(r.a)(e,["className","cssModule","innerRef","tag"]),u=Object(m.m)(i()(t,"card-body"),a);return o.a.createElement(s,Object(n.a)({},l,{className:u,ref:c}))};d.propTypes=b,d.defaultProps={tag:"div"},t.a=d},550:function(e,t,a){"use strict";var n=a(9),r=a(20),c=a(0),o=a.n(c),s=a(24),l=a.n(s),u=a(40),i=a.n(u),m=a(542),b={tag:m.q,inverse:l.a.bool,color:l.a.string,block:Object(m.h)(l.a.bool,'Please use the props "body"'),body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},d=function(e){var t=e.className,a=e.cssModule,c=e.color,s=e.block,l=e.body,u=e.inverse,b=e.outline,d=e.tag,p=e.innerRef,f=Object(r.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),v=Object(m.m)(i()(t,"card",!!u&&"text-white",!(!s&&!l)&&"card-body",!!c&&(b?"border":"bg")+"-"+c),a);return o.a.createElement(d,Object(n.a)({},f,{className:v,ref:p}))};d.propTypes=b,d.defaultProps={tag:"div"},t.a=d},551:function(e,t,a){"use strict";var n=a(9),r=a(20),c=a(0),o=a.n(c),s=a(24),l=a.n(s),u=a(40),i=a.n(u),m=a(542),b={tag:m.q,className:l.a.string,cssModule:l.a.object},d=function(e){var t=e.className,a=e.cssModule,c=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),l=Object(m.m)(i()(t,"card-header"),a);return o.a.createElement(c,Object(n.a)({},s,{className:l}))};d.propTypes=b,d.defaultProps={tag:"div"},t.a=d},562:function(e,t,a){"use strict";var n=a(9),r=a(20),c=a(0),o=a.n(c),s=a(24),l=a.n(s),u=a(40),i=a.n(u),m=a(542),b={tag:m.q,className:l.a.string,cssModule:l.a.object},d=function(e){var t=e.className,a=e.cssModule,c=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),l=Object(m.m)(i()(t,"card-footer"),a);return o.a.createElement(c,Object(n.a)({},s,{className:l}))};d.propTypes=b,d.defaultProps={tag:"div"},t.a=d},563:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(0),r=a.n(n),c=a(548),o=a(549),s=a(550),l=a(551),u=a(570),i=a(562),m=function(e){var t=e.header,a=e.children,n=e.footer;return r.a.createElement("div",{className:"animated fadeIn"},r.a.createElement(c.a,null,r.a.createElement(o.a,{xs:"12"},r.a.createElement(s.a,null,t&&r.a.createElement(l.a,null,r.a.createElement("strong",null,t)),r.a.createElement(u.a,{className:"card-body"},a),n&&r.a.createElement(i.a,{className:"card-footer"},n)))))};t.b=m},570:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(0),r=a.n(n),c=a(546),o=a(542);function s(e){return Object(o.s)('The "CardBlock" component has been deprecated.\nPlease use component "CardBody".'),r.a.createElement(c.a,e)}},637:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(685),o=a(686),s=a(595),l=a(648);t.a=function(e){var t=e.input,a=e.label,n=e.type,u=e.meta,i=u.touched,m=u.error;return r.a.createElement("div",{className:"controls"},r.a.createElement(c.a,null,r.a.createElement(o.a,null,a),r.a.createElement(s.a,Object.assign({type:n},t)),i&&m&&r.a.createElement(l.a,{color:"danger"},m)))}},638:function(e,t,a){"use strict";var n=a(185),r=a(186),c=a(188),o=a(187),s=a(189),l=a(0),u=a.n(l),i=a(685),m=a(686),b=a(648),d=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.input,n=e.type,r=e.value,c=e.meta,o=c.touched,s=c.error;return u.a.createElement(i.a,null,u.a.createElement("div",{className:"checkbox"},u.a.createElement(m.a,{check:r===a.value,htmlFor:"checkbox1"},u.a.createElement("input",Object.assign({type:n},a,{name:"checkbox1",value:r}))," ",t)),o&&s&&u.a.createElement(b.a,{color:"danger"},s))}}]),t}(l.Component);t.a=d},736:function(e,t,a){"use strict";var n=a(83),r=a.n(n),c=a(67),o=a.n(c),s=a(0),l=a.n(s),u=a(566),i=a(24),m=a.n(i),b=a(597),d=function(e){function t(t){var a;if(a=e.call(this,t)||this,!t._reduxForm)throw new Error("Form must be inside a component decorated with reduxForm()");return a}o()(t,e);var a=t.prototype;return a.componentWillMount=function(){this.props._reduxForm.registerInnerOnSubmit(this.props.onSubmit)},a.render=function(){var e=this.props,t=(e._reduxForm,r()(e,["_reduxForm"]));return l.a.createElement("form",t)},t}(s.Component);d.propTypes={onSubmit:m.a.func.isRequired,_reduxForm:m.a.object},Object(u.polyfill)(d),t.a=Object(b.b)(d)},844:function(e,t,a){"use strict";a.r(t);var n=a(185),r=a(186),c=a(188),o=a(187),s=a(189),l=a(0),u=a.n(l),i=a(563),m=a(548),b=a(549),d=a(561),p=a(736),f=a(828),v=a(826),E=a(637),j=a(638),y=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"onSubmit",value:function(){}},{key:"render",value:function(){var e=this.props.handleSubmit;return u.a.createElement(p.a,{onSubmit:e(this.onSubmit)},u.a.createElement(m.a,{className:"pb-3"},u.a.createElement(b.a,{xs:"12",md:"6",lg:"4"},u.a.createElement(f.a,{name:"title",component:E.a,label:"title",type:"title"})),u.a.createElement(b.a,{xs:"12",md:"6",lg:"4"},u.a.createElement(f.a,{name:"description",component:E.a,label:"description",type:"text"})),u.a.createElement(b.a,{xs:"12",md:"6",lg:"4"},u.a.createElement(f.a,{name:"measurement",component:E.a,label:"measurement",type:"text"})),u.a.createElement(b.a,{xs:"12",md:"6",lg:"4"},u.a.createElement(f.a,{name:"value_type",component:E.a,label:"value_type",type:"text"})),u.a.createElement(b.a,{xs:"12",md:"7"},u.a.createElement(f.a,{name:"is_visible",component:j.a,label:"is_visible",type:"checkbox",value:!0}))),u.a.createElement(m.a,{className:"pb-3"},u.a.createElement(b.a,{xs:"12",md:"6",lg:"4"},u.a.createElement(d.a,{color:"primary",type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))}}]),t}(l.Component),O=y=Object(v.a)({form:"TypeOfNomenclatureEditorForm"})(y);a.d(t,"TypeOfNomenclatureEditor",function(){return h});var h=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(i.a,{header:"\u0422\u0438\u043f\u044b \u043d\u043e\u043c\u0435\u043d\u043a\u043b\u0430\u0442\u0443\u0440\u044b\u044b"},u.a.createElement(O,null))}}]),t}(l.Component);t.default=h}}]);
//# sourceMappingURL=43.e2d4cee7.chunk.js.map