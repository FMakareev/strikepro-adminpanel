(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1141:function(e,t,a){"use strict";a.r(t);var r=a(210),n=a(211),o=a(213),c=a(212),i=a(214),l=a(0),s=a.n(l),u=a(908),m=a(216),d=a(953),p=a(1087),f=a(1132),g=a(985),b=a(1130),h=a(910),E=a(900),v=a(901),y=a(1021),j=a(990),O=a(75),k=a(913),w=a(909),P=a(8),S=function(){return s.a.createElement(l.Fragment,null,s.a.createElement(v.a,{xs:"12"},s.a.createElement("h4",null,s.a.createElement(P.FormattedMessage,{id:"form.title.ogMeta"}))),s.a.createElement(v.a,{xs:"12",md:"6",lg:"4"},s.a.createElement(f.a,{name:"og_url",component:w.a,label:s.a.createElement(P.FormattedMessage,{id:"form.label.ogUrl"}),type:"text"})),s.a.createElement(v.a,{xs:"12",md:"6",lg:"4"},s.a.createElement(f.a,{name:"og_image",component:w.a,label:s.a.createElement(P.FormattedMessage,{id:"form.label.ogImage"}),type:"text"})),s.a.createElement(v.a,{xs:"12",md:"6",lg:"4"},s.a.createElement(f.a,{name:"og_type",component:w.a,label:s.a.createElement(P.FormattedMessage,{id:"form.label.ogType"}),type:"text"})),s.a.createElement(v.a,{xs:"12",md:"6",lg:"4"},s.a.createElement(f.a,{name:"og_title",component:w.a,label:s.a.createElement(P.FormattedMessage,{id:"form.label.ogTitle"}),type:"text"})))},x=a(948),_=function(){return s.a.createElement(l.Fragment,null,s.a.createElement(v.a,{xs:"12"},s.a.createElement("h4",null,s.a.createElement(P.FormattedMessage,{id:"form.title.meta"}))),s.a.createElement(v.a,{xs:"12",md:"6",lg:"4"},s.a.createElement(f.a,{name:"meta_description",component:w.a,label:s.a.createElement(P.FormattedMessage,{id:"form.label.metaDescription"}),type:"text"})),s.a.createElement(v.a,{xs:"12",md:"6",lg:"4"},s.a.createElement(f.a,{name:"meta_title",component:w.a,label:s.a.createElement(P.FormattedMessage,{id:"form.label.metaTitle"}),type:"text"})),s.a.createElement(v.a,{xs:"12",md:"6",lg:"4"},s.a.createElement(f.a,{name:"meta_keywords",component:x.a,label:s.a.createElement(P.FormattedMessage,{id:"form.label.metaKeywords"}),type:"text"})))},C=a(926),M=a(937),N=a(976),F=a(77),A=a(896),R=a(949),T=a(912),U=a(941),q=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).onSubmit=function(e){var t=a.props.history;return Object(A.a)(e,"id")?a.props.UpdateAction({body:e,urlParams:{id:e.id}}).then(function(e){var a=e.normalizedPayload;if(a&&a.errors)throw a;t.push("/static-page-list")}).catch(function(e){throw new p.a(Object(k.a)(e))}):a.props.CreateAction({body:e}).then(function(e){var a=e.normalizedPayload;if(a&&a.errors)throw a;t.push("/static-page-list")}).catch(function(e){throw new p.a(Object(k.a)(e))})},a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleSubmit,a=e.values,r=e.error,n=e.intl,o=e.reset;return s.a.createElement("form",{onSubmit:t(this.onSubmit)},s.a.createElement(u.b,{header:s.a.createElement(P.FormattedMessage,{id:a&&a.id?"staticPages.editor.title":"staticPages.create.title"}),footer:s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,{color:"primary",type:"submit",className:"px-4"},s.a.createElement(P.FormattedMessage,{id:"button.save"})),s.a.createElement(h.a,{type:"reset",onClick:o,color:"danger"},s.a.createElement("i",{className:"fa fa-ban"}),s.a.createElement(P.FormattedMessage,{id:"button.reset",defaultMessage:"button.reset"})))},s.a.createElement(E.a,null,s.a.createElement(v.a,{xs:"12"},s.a.createElement(f.a,{name:"title",component:w.a,label:s.a.createElement(P.FormattedMessage,{id:"form.label.title",defaultMessage:"form.label.title"}),type:"text"})),s.a.createElement(v.a,{xs:"12"},s.a.createElement(f.a,{name:"excerpt",component:w.a,label:s.a.createElement(P.FormattedMessage,{id:"form.label.introductory",defaultMessage:"form.label.introductory"}),type:"textarea"})),s.a.createElement(v.a,{xs:"12"},s.a.createElement(y.a,null,s.a.createElement(P.FormattedMessage,{id:"form.label.urlAlias"})),s.a.createElement(f.a,{isAutoGenTransliteration:!(a&&a.id),name:"alias_url",component:N.a,type:"text",subscribeField:"title",formValues:a})),s.a.createElement(v.a,{xs:"12",md:"6"},s.a.createElement(f.a,{name:"status",component:C.a,label:s.a.createElement(P.FormattedMessage,{id:"form.label.publishStatus"}),type:"select",defaultValue:"INACTIVE",data:[{id:"INACTIVE",name:Object(T.a)(n,"publishStatus.INACTIVE")},{id:"ACTIVE",name:Object(T.a)(n,"publishStatus.ACTIVE")}]})),s.a.createElement(v.a,{xs:"12",md:"6"},s.a.createElement(f.a,{name:"image",component:w.a,label:s.a.createElement(P.FormattedMessage,{id:"form.label.linkPreviewImage"}),description:s.a.createElement(P.FormattedMessage,{id:"form.description.linkPreviewImage"}),type:"text"})),s.a.createElement(v.a,{xs:"12",md:"6"},s.a.createElement(f.a,{name:"parent_id",component:w.a,label:s.a.createElement(P.FormattedMessage,{id:"form.label.parentID"}),type:"text"})),s.a.createElement(v.a,{xs:"12"},s.a.createElement(f.a,{name:"body",component:M.a,label:s.a.createElement(P.FormattedMessage,{id:"form.label.HTMLContent"}),type:"text"})),s.a.createElement(_,null),s.a.createElement(S,null)),r&&s.a.createElement(E.a,null,s.a.createElement(v.a,{xs:"12"},s.a.createElement(j.a,{color:"danger"},s.a.createElement(P.FormattedMessage,{id:r}))))))}}]),t}(l.Component),I=function(e){return Object(R.a)("validation.maxLength")(255)(e)?Object(P.defineMessages)({maxLength:{id:"validation.maxLength",defaultMessage:"validation.maxLength"}}):null};q=Object(F.connect)(function(e){return{values:Object(g.a)("FormStaticPage")(e)}})(q),q=Object(b.a)({form:"FormStaticPage",validate:function(e,t){var a=t.intl,r={};if(e.body||(r.body=Object(T.a)(a,"validation.required")),e.excerpt||(r.excerpt=Object(T.a)(a,"validation.required")),e.title||(r.title=Object(T.a)(a,"validation.required")),e.alias_url){var n=Object(U.a)("validation.URIValidation")(e.alias_url);n&&(r.alias_url=Object(T.a)(a,n))}if(e.meta_description){var o=I(e.meta_description);o&&(r.meta_description=Object(T.a)(a,o.maxLength,{count:255}))}if(e.meta_title){var c=I(e.meta_title);c&&(r.meta_title=Object(T.a)(a,c.maxLength,{count:255}))}if(e.meta_keywords){var i=I(e.meta_keywords);i&&(r.meta_keywords=Object(T.a)(a,i.maxLength,{count:255}))}if(e.og_type){var l=I(e.og_type);l&&(r.og_type=Object(T.a)(a,l.maxLength,{count:255}))}if(e.og_title){var s=I(e.og_title);s&&(r.og_title=Object(T.a)(a,s.maxLength,{count:255}))}if(e.og_image){var u=I(e.og_image);u&&(r.og_image=Object(T.a)(a,u.maxLength,{count:255}))}if(e.og_url){var m=I(e.og_url);m&&(r.og_url=Object(T.a)(a,m.maxLength,{count:255}))}return r}})(q),q=Object(m.a)(function(e,t){return{isRetrievingCreate:Object(d.i)(e,t),isRetrievingUpdate:Object(d.l)(e,t)}},function(e){return{CreateAction:function(t){return e(Object(d.a)(t))},UpdateAction:function(t){return e(Object(d.h)(t))}}})(q);var V=q=Object(O.k)(q),L=a(219);a.d(t,"StaticPageEditor",function(){return z});var z=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.match.params,a=e.GetAction;t&&t.id&&a({urlParams:{id:t.id}})}},{key:"render",value:function(){var e=this.props,t=e.item,a=e.match.params,r=e.isRetrieving,n=e.intl;if(r&&!t&&n&&!n.messages)return s.a.createElement(L.a,null);var o=t(a&&a.id);return s.a.createElement(V,{initialValues:o})}}]),t}(l.Component);z=Object(m.a)(function(e,t){return{item:function(t){if(!t)return null;var a=Object(d.d)(e,d.g,t);return a?a[t]:null},isRetrieving:Object(d.j)(e,t)}},function(e){return{GetAction:function(t){return e(Object(d.c)(t))}}})(z);t.default=Object(P.injectIntl)(z)},896:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r=function(e,t){return!(!e||!t)&&Object.prototype.hasOwnProperty.call(e,t)}},897:function(e,t,a){"use strict";var r="";switch(window.location.hostname){case"localhost":case"admin.strikepro.ru":r="https://dev.strikepro.ru";break;case"strike.localhost":r="http://strike.localhost"}t.a={base:r,api:{login:"/dashboard/auth/login",logout:"/dashboard/auth/logout",posts:"/dashboard/blog/posts",post:"/dashboard/blog/post",categories:"/dashboard/blog/categories",category:"/dashboard/blog/category",slides:"/dashboard/slides",tiles:"/dashboard/mainfeeds",tile_types:"/dashboard/mainfeed/types",tile:"/dashboard/mainfeed",nomenclature:"/dashboard/nomenclature",nomenclatures:"/dashboard/nomenclatures",nomenclatureCharacteristic:"/dashboard/nomenclature/characteristic",typesOfNomenclature:"/dashboard/nomenclature/characteristic",fileupload:"/dashboard/fileupload",static_pages:"/dashboard/pages",url_alias:"/dashboard/url_alias",feedback:"/dashboard/feedback"}}},899:function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"b",function(){return o}),a.d(t,"a",function(){return c}),a.d(t,"d",function(){return i});var r=a(215),n=function(e){return Object(r.a)({method:"POST",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}},e?{body:JSON.stringify(e)}:{})},o=function(){return{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}}},c=function(){return{method:"DELETE",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}}},i=function(e){return{method:"PUT",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(e)}}},902:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var r=a(153),n=function(e){var t=e.status;return 401===t?(r.a.push("#/login"),window.location.reload(),e):404===t?(r.a.push("#/404"),window.location.reload(),e):e}},903:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var r=a(215),n=a(94),o=a(18),c=a(210),i=function e(t){var a=this;Object(c.a)(this,e),this.resourceName=null,this.mergeResourceAndPayload=function(e,t){return t.forEach(function(t){e[a.resourceName][a.resourceName][t.id]=t,e[a.resourceName].metadata={data:[].concat(Object(o.a)(e[a.resourceName].metadata.data),[t.id])}}),e},this.removePayloadFromResources=function(e,t){return t?(console.log("removePayloadFromResources: ",a,e,t),delete e[a.resourceName][a.resourceName][t],e[a.resourceName].metadata.data=e[a.resourceName].metadata.data.filter(function(e){return e!==t}),e):(console.warn("payloadID undefined"),e)},this.payloadToResource=function(e){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c={entities:Object(n.a)({},a.resourceName,(t={},Object(n.a)(t,a.resourceName,{}),Object(n.a)(t,"metadata",{}),t)),result:[]};return e&&e.forEach(function(e){c.result.push(e.id),c.entities[a.resourceName][a.resourceName][e.id]=e}),c.entities[a.resourceName].metadata=Object(r.a)({},o,{data:c.result}),c},this.updateResource=function(e,t){return e[a.resourceName][a.resourceName][t.id]=t,e},this.normalizeError=function(e){return e.errors||(e.errors={}),{entities:Object(r.a)({},e,{message:[e.message]}),result:{errors:e}}},this.resourceName=t}},904:function(e,t,a){"use strict";a.d(t,"a",function(){return r});a(896);var r=function(e){return function(t,a,r){return t.errors?e.normalizeError(t):t?e.removePayloadFromResources(a,r.id):a}}},908:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var r=a(0),n=a.n(r),o=a(900),c=a(901),i=a(907),l=a(898),s=a(905),u=a(914),m=function(e){var t=e.header,a=e.children,r=e.footer;return n.a.createElement("div",{className:"animated fadeIn"},n.a.createElement(o.a,null,n.a.createElement(c.a,{xs:"12"},n.a.createElement(i.a,null,t&&n.a.createElement(l.a,null,n.a.createElement("strong",null,t)),n.a.createElement(s.a,{className:"card-body"},a),r&&n.a.createElement(u.a,{className:"card-footer"},r)))))};t.b=m},909:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var r=a(0),n=a.n(r),o=a(1020),c=a(1021),i=a(959),l=a(960),s=a(925),u=a(961),m=a(1022),d=a(8),p=function(e){var t=e.input,a=e.label,r=e.type,p=e.placeholder,f=e.required,g=e.icon,b=e.meta,h=b.touched,E=b.error;return n.a.createElement(o.a,{className:h?E?"":"was-validated":""},a&&n.a.createElement(c.a,null,a),n.a.createElement(i.a,{className:"mb-3"},g&&n.a.createElement(l.a,{addonType:"prepend"},n.a.createElement(s.a,null,n.a.createElement("i",{className:g}))),n.a.createElement(u.a,Object.assign({},t,{type:r,valid:!!h&&!E,className:h&&E?"form-control-warning is-invalid":"",placeholder:p,required:f})),n.a.createElement(m.a,{valid:!!h&&!E,className:"help-block"},E&&n.a.createElement(d.FormattedMessage,{id:E}))))}},912:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var r=a(896),n=function(e,t,a){if(t&&e&&e.messages){try{if(a&&"object"===typeof t)return e.formatMessage(t,a)}catch(n){console.log(n)}if(Object(r.a)(e.messages,t))return e.messages[t]}return t}},913:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r=function(e){var t={_error:e.message?e.message[0]:null};for(var a in e.errors)Array.isArray(e.errors[a])&&(t[a]=e.errors[a][0]);return t}},926:function(e,t,a){"use strict";var r=a(210),n=a(211),o=a(213),c=a(212),i=a(214),l=a(0),s=a.n(l),u=a(1020),m=a(1021),d=a(961),p=a(990),f=a(8),g=a(912),b=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.input,a=e.defaultValue;!t.value&&a&&t.onChange(a)}},{key:"render",value:function(){var e=this.props,t=e.input,a=e.label,r=e.type,n=e.data,o=e.meta,c=o.touched,i=o.error,l=e.valueKey,b=e.labelKey,h=e.intl;return s.a.createElement(u.a,null,s.a.createElement(m.a,null,a),s.a.createElement(d.a,Object.assign({type:r},t),s.a.createElement("option",null,Object(g.a)(h,"form.select.placeholder")),Array.isArray(n)&&n.map(function(e,a){return s.a.createElement("option",{key:a,selected:e[l]===t.value,value:e[l]},e[b])})),c&&i&&s.a.createElement(p.a,{color:"danger"},i&&s.a.createElement(f.FormattedMessage,{id:i})))}}]),t}(l.Component);b.defaultProps={valueKey:"id",labelKey:"name"},t.a=Object(f.injectIntl)(b)},937:function(e,t,a){"use strict";var r=a(215),n=a(210),o=a(211),c=a(213),i=a(212),l=a(214),s=a(0),u=a.n(s),m=a(938),d=a.n(m),p=a(1020),f=a(1021),g=a(990),b=a(8),h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state=a.initialState,a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.input,a=e.label,n=e.meta,o=n.touched,c=n.error,i=e.config;return u.a.createElement(p.a,null,u.a.createElement(f.a,null,a),u.a.createElement(d.a,{activeClass:"p10",config:Object(r.a)({language:"ru",filebrowserBrowseUrl:"http://new.strikepro.ru/ckfinder/browser",filebrowserImageBrowseUrl:"http://new.strikepro.ru/ckfinder/browser",filebrowserUploadUrl:"http://new.strikepro.ru/ckfinder/connector",filebrowserImageUploadUrl:"http://new.strikepro.ru/ckfinder/connector",imageUploadUrl:""},i),scriptUrl:"//cdn.ckeditor.com/4.7.3/full/ckeditor.js",content:t.value,events:{change:function(e){return t.onChange(e.editor.getData())},onSelect:function(e){console.log("onSelect:",e),e.cancel()},paste:function(e){console.log("paste:",e)},afterPaste:function(e){console.log("afterPaste:",e)},fileUploadRequest:function(e){console.log("fileUploadRequest:",e);var t=e.data.fileLoader.xhr;t.setRequestHeader("Access-Control-Allow-Origin","http://localhost:8080"),t.setRequestHeader("X-Requested-With","XMLHttpRequest"),t.setRequestHeader("Accept","application/json"),t.withCredentials=!0},fileUploadResponse:function(e){console.log("fileUploadResponse:",e)}}}),o&&c&&u.a.createElement(g.a,{color:"danger"},c&&u.a.createElement(b.FormattedMessage,{id:c})))}},{key:"initialState",get:function(){return{isInit:!1,editor:null}}}]),t}(s.Component);t.a=h},941:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r=function(e){return function(t){return t&&t.replace(/[a-zA-Z\u0430-\u044f\u0410-\u042f0-9 -]/gi,"")?e:null}}},948:function(e,t,a){"use strict";a.d(t,"a",function(){return v});var r=a(210),n=a(211),o=a(213),c=a(212),i=a(217),l=a(214),s=a(0),u=a.n(s),m=a(1020),d=a(1021),p=a(959),f=a(1022),g=a(974),b=a.n(g),h=(a(975),a(8)),E=a(912),v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state=a.initialState,a.handleChange=a.handleChange.bind(Object(i.a)(a)),a}return Object(l.a)(t,e),Object(n.a)(t,[{key:"handleChange",value:function(e){var t=this.props.input.onChange,a=this.returnUnique(e);t(a.join(", ")),this.setState({tags:a})}},{key:"returnUnique",value:function(e){for(var t={},a=0,r=e.length;a<r;a++)t[e[a]]="";return Object.keys(t)}},{key:"render",value:function(){var e=this.props,t=e.input.value,a=e.label,r=e.meta,n=r.touched,o=r.error,c=e.intl;return console.log(Object(E.a)(c,"form.tags.placeholder")),u.a.createElement(m.a,{className:n?o?"":"was-validated":""},u.a.createElement(d.a,null,a),u.a.createElement(p.a,{className:"mb-3"},u.a.createElement(b.a,{className:"react-tagsinput form-control ".concat(n&&o?"form-control-warning is-invalid":""),value:t?t.split(", "):[],onChange:this.handleChange,inputProps:{placeholder:Object(E.a)(c,"form.tags.placeholder")}}),n&&o&&u.a.createElement(f.a,{valid:!!n&&!o,className:"help-block"},o&&u.a.createElement(h.FormattedMessage,{id:o}))))}},{key:"initialState",get:function(){return{tags:[]}}}]),t}(s.Component);t.b=Object(h.injectIntl)(v)},949:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r=function(e){return function(t){return function(a){return a&&a.length>t?e:null}}}},953:function(e,t,a){"use strict";a.d(t,"g",function(){return u}),a.d(t,"a",function(){return f}),a.d(t,"b",function(){return g}),a.d(t,"c",function(){return b}),a.d(t,"f",function(){return h}),a.d(t,"h",function(){return E}),a.d(t,"j",function(){return S}),a.d(t,"k",function(){return _}),a.d(t,"e",function(){return j}),a.d(t,"d",function(){return O}),a.d(t,"l",function(){return M}),a.d(t,"i",function(){return w});var r=a(216),n=a(903),o=a(897),c=a(902),i=a(899),l=a(904),s=a(896),u="staticPage",m=new n.a(u),d=Object(r.b)(u)({createStaticPage:{method:"POST",url:"".concat(o.a.base).concat(o.a.api.static_pages),normalizer:function(e,t,a){return e?e.errors||e.message?m.normalizeError(e):Object(s.a)(t,u)?m.mergeResourceAndPayload(t,[e]):m.payloadToResource([e]):null},networkHelpers:{handleStatusCode:c.a,requestPOST:i.c}},deleteStaticPage:{method:"DELETE",url:"".concat(o.a.base).concat(o.a.api.static_pages,"/::id"),normalizer:Object(l.a)(m),networkHelpers:{handleStatusCode:c.a,requestDELETE:i.a}},getStaticPage:{method:"GET",url:"".concat(o.a.base).concat(o.a.api.static_pages,"/::id"),normalizer:function(e){return console.log(e),m.payloadToResource([e])},networkHelpers:{handleStatusCode:c.a,requestGET:i.b}},getStaticPages:{method:"GET",url:"".concat(o.a.base).concat(o.a.api.static_pages),normalizer:function(e){return!e&&e.error?null:Array.isArray(e)?m.payloadToResource(e):m.payloadToResource(e.data,e)},networkHelpers:{handleStatusCode:c.a,requestGET:i.b}},updateStaticPage:{method:"PUT",url:"".concat(o.a.base).concat(o.a.api.static_pages,"/::id"),normalizer:function(e,t){return e.errors?m.normalizeError(e):e?m.updateResource(t,e):t},networkHelpers:{handleStatusCode:c.a,requestPUT:i.d}}}),p=d.actions,f=p.createStaticPage.perform,g=p.deleteStaticPage.perform,b=p.getStaticPage.perform,h=p.getStaticPages.perform,E=p.updateStaticPage.perform,v=d.selectors,y=v.resource,j=y.getResource,O=y.getResourceById,k=v.createStaticPage.request,w=(k.getResource,k.isPerforming),P=(v.deleteStaticPage.request.getResource,v.getStaticPage.request),S=(P.getResource,P.isPerforming),x=v.getStaticPages.request,_=(x.getResource,x.isPerforming),C=v.updateStaticPage.request,M=(C.getResource,C.isPerforming)},976:function(e,t,a){"use strict";a.d(t,"a",function(){return f});var r=a(210),n=a(211),o=a(213),c=a(212),i=a(214),l=a(0),s=a.n(l),u=a(977),m=a.n(u),d=a(909),p=a(77),f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).clearString=function(e){try{return e&&e.replace(/[^a-zA-Z\u0430-\u044f\u0410-\u042f0-9 ]/gi,"").replace(/\s\s+/g," ")}catch(t){return console.log(t),e}},a.transformString=function(e){return m()().transform(a.clearString(e),"-")},a.state=a.initialValues,a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){var r=this.props,n=r.input,o=r.meta,c=e.input;o.visited&&o.active&&n.value!==c.value&&this.setState({autoGen:!1})}},{key:"shouldComponentUpdate",value:function(e,t){var a=e.input,r=e.formValues,n=e.subscribeField;if(this.state.autoGen){if(this.props.formValues&&e.formValues&&this.props.formValues[n]!==r[n]){var o=this.transformString(r[n]);return a.onChange(o),!0}if(e.formValues&&(r[n]||!r[n])){var c=this.transformString(r[n]);return a.onChange(c),!0}}return!Object(p.shallowEqual)(e,this.props)}},{key:"render",value:function(){return s.a.createElement(d.a,this.props)}},{key:"initialValues",get:function(){return{prevValue:null,autoGen:this.props.isAutoGenTransliteration}}}]),t}(l.Component);f.defaultProps={isAutoGenTransliteration:!0}}}]);
//# sourceMappingURL=20.3dbd5f02.chunk.js.map