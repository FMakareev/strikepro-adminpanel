(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{549:function(e,t,a){"use strict";var n="";switch(window.location.hostname){case"localhost":case"admin.strikepro.ru":n="https://dev.strikepro.ru";break;case"strike.localhost":n="http://strike.localhost"}t.a={base:n,api:{login:"/dashboard/auth/login",logout:"/dashboard/auth/logout",posts:"/dashboard/blog/posts",post:"/dashboard/blog/post",categories:"/dashboard/blog/categories",category:"/dashboard/blog/category",slides:"/dashboard/slides",tiles:"/dashboard/mainfeeds",tile_types:"/dashboard/mainfeed/types",tile:"/dashboard/mainfeed",nomenclature:"/dashboard/nomenclature",nomenclatures:"/dashboard/nomenclatures",nomenclatureCharacteristic:"/dashboard/nomenclature/characteristic",typesOfNomenclature:"/dashboard/nomenclature/characteristic",fileupload:"/dashboard/fileupload",static_pages:"/dashboard/pages",url_alias:"/dashboard/url_alias"}}},551:function(e,t,a){"use strict";a.d(t,"c",function(){return r}),a.d(t,"b",function(){return o}),a.d(t,"a",function(){return i}),a.d(t,"d",function(){return l});var n=a(547),r=function(e){return Object(n.a)({method:"POST",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}},e?{body:JSON.stringify(e)}:{})},o=function(){return{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}}},i=function(){return{method:"DELETE",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}}},l=function(e){return{method:"PUT",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(e)}}},555:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(288),r=function(e){var t=e.status;return 401===t?(n.a.push("#/login"),window.location.reload(),e):404===t?(n.a.push("#/404"),window.location.reload(),e):e}},556:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(547),r=a(558),o=a(18),i=a(185),l=function e(t){var a=this;Object(i.a)(this,e),this.resourceName=null,this.mergeResourceAndPayload=function(e,t){return t.forEach(function(t){e[a.resourceName][a.resourceName][t.id]=t,e[a.resourceName].metadata={data:[].concat(Object(o.a)(e[a.resourceName].metadata.data),[t.id])}}),e},this.removePayloadFromResources=function(e,t){return t?(console.log("removePayloadFromResources: ",a,e,t),delete e[a.resourceName][a.resourceName][t],e[a.resourceName].metadata.data=e[a.resourceName].metadata.data.filter(function(e){return e!==t}),e):(console.warn("payloadID undefined"),e)},this.payloadToResource=function(e){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i={entities:Object(r.a)({},a.resourceName,(t={},Object(r.a)(t,a.resourceName,{}),Object(r.a)(t,"metadata",{}),t)),result:[]};return e&&e.forEach(function(e){i.result.push(e.id),i.entities[a.resourceName][a.resourceName][e.id]=e}),i.entities[a.resourceName].metadata=Object(n.a)({},o,{data:i.result}),i},this.updateResource=function(e,t){return e[a.resourceName][a.resourceName][t.id]=t,e},this.normalizeError=function(e){return e.errors||(e.errors={}),{entities:Object(n.a)({},e,{message:[e.message]}),result:{errors:e}}},this.resourceName=t}},557:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e){return function(t,a,n){return t.errors?e.normalizeError(t):t?e.removePayloadFromResources(a,n.id):a}}},559:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var n=a(0),r=a.n(n),o=a(552),i=a(553),l=a(550),c=a(554),s=a(548),u=a(563),d=function(e){var t=e.header,a=e.children,n=e.footer;return r.a.createElement("div",{className:"animated fadeIn"},r.a.createElement(o.a,null,r.a.createElement(i.a,{xs:"12"},r.a.createElement(l.a,null,t&&r.a.createElement(c.a,null,r.a.createElement("strong",null,t)),r.a.createElement(s.a,{className:"card-body"},a),n&&r.a.createElement(u.a,{className:"card-footer"},n)))))};t.b=d},561:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(0),r=a.n(n),o=a(699),i=a(700),l=a(573),c=a(574),s=a(562),u=a(616),d=a(581),m=function(e){var t=e.input,a=e.label,n=e.type,m=e.placeholder,p=e.required,b=e.icon,f=e.meta,h=f.touched,g=f.error;return r.a.createElement(o.a,{className:h?g?"":"was-validated":""},a&&r.a.createElement(i.a,null,a),r.a.createElement(l.a,{className:"mb-3"},b&&r.a.createElement(c.a,{addonType:"prepend"},r.a.createElement(s.a,null,r.a.createElement("i",{className:b}))),r.a.createElement(u.a,Object.assign({},t,{type:n,valid:!!h&&!g,className:h&&g?"form-control-warning is-invalid":"",placeholder:m||a,required:p})),r.a.createElement(d.a,{valid:!!h&&!g,className:"help-block"},g)))}},570:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e){var t={_error:e.message?e.message[0]:null};for(var a in e.errors)Array.isArray(e.errors[a])&&(t[a]=e.errors[a][0]);return t}},579:function(e,t,a){"use strict";var n=a(185),r=a(186),o=a(188),i=a(187),l=a(189),c=a(0),s=a.n(c),u=a(699),d=a(700),m=a(616),p=a(658),b=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.input,a=e.defaultValue;!t.value&&a&&t.onChange(a)}},{key:"render",value:function(){var e=this.props,t=e.input,a=e.label,n=e.type,r=e.data,o=e.meta,i=o.touched,l=o.error,c=e.valueKey,b=e.labelKey;return s.a.createElement(u.a,null,s.a.createElement(d.a,null,a),s.a.createElement(m.a,Object.assign({type:n},t),s.a.createElement("option",null,"\u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e..."),Array.isArray(r)&&r.map(function(e,a){return s.a.createElement("option",{key:a,selected:e[c]===t.value,value:e[c]},e[b])})),i&&l&&s.a.createElement(p.a,{color:"danger"},l))}}]),t}(c.Component);b.defaultProps={valueKey:"id",labelKey:"name"},t.a=b},598:function(e,t,a){"use strict";var n=a(547),r=a(185),o=a(186),i=a(188),l=a(187),c=a(189),s=a(0),u=a.n(s),d=a(599),m=a.n(d),p=a(699),b=a(700),f=a(658),h=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state=a.initialState,a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.input,a=e.label,r=e.meta,o=r.touched,i=r.error,l=e.config;return u.a.createElement(p.a,null,u.a.createElement(b.a,null,a),u.a.createElement(m.a,{activeClass:"p10",config:Object(n.a)({language:"ru",filebrowserBrowseUrl:"http://new.strikepro.ru/ckfinder/browser",filebrowserImageBrowseUrl:"http://new.strikepro.ru/ckfinder/browser",filebrowserUploadUrl:"http://new.strikepro.ru/ckfinder/connector",filebrowserImageUploadUrl:"http://new.strikepro.ru/ckfinder/connector",imageUploadUrl:""},l),scriptUrl:"//cdn.ckeditor.com/4.7.3/full/ckeditor.js",content:t.value,events:{change:function(e){return t.onChange(e.editor.getData())},onSelect:function(e){console.log("onSelect:",e),e.cancel()},paste:function(e){console.log("paste:",e)},afterPaste:function(e){console.log("afterPaste:",e)},fileUploadRequest:function(e){console.log("fileUploadRequest:",e);var t=e.data.fileLoader.xhr;t.setRequestHeader("Access-Control-Allow-Origin","http://localhost:8080"),t.setRequestHeader("X-Requested-With","XMLHttpRequest"),t.setRequestHeader("Accept","application/json"),t.withCredentials=!0},fileUploadResponse:function(e){console.log("fileUploadResponse:",e)}}}),o&&i&&u.a.createElement(f.a,{color:"danger"},i))}},{key:"initialState",get:function(){return{isInit:!1,editor:null}}}]),t}(s.Component);t.a=h},607:function(e,t,a){"use strict";a.d(t,"a",function(){return m}),a.d(t,"b",function(){return p}),a.d(t,"c",function(){return b}),a.d(t,"f",function(){return f}),a.d(t,"g",function(){return h}),a.d(t,"i",function(){return S}),a.d(t,"j",function(){return N}),a.d(t,"e",function(){return y}),a.d(t,"d",function(){return E}),a.d(t,"k",function(){return C}),a.d(t,"h",function(){return j});var n=a(190),r=a(556),o=a(549),i=a(555),l=a(551),c=a(557),s=new r.a("slides"),u=Object(n.b)("slides")({createSlide:{method:"POST",url:"".concat(o.a.base).concat(o.a.api.slides),normalizer:function(e,t,a){return e?e.errors||e.message?s.normalizeError(e):t.hasOwnProperty("slides")?s.mergeResourceAndPayload(t,[e]):s.payloadToResource([e]):null},networkHelpers:{handleStatusCode:i.a,requestPOST:l.c}},deleteSlide:{method:"DELETE",url:"".concat(o.a.base).concat(o.a.api.slides,"/::id"),normalizer:Object(c.a)(s),networkHelpers:{handleStatusCode:i.a,requestDELETE:l.a}},getSlide:{method:"GET",url:"".concat(o.a.base).concat(o.a.api.slides,"/::id"),normalizer:function(e){return s.payloadToResource([e])},networkHelpers:{handleStatusCode:i.a,requestGET:l.b}},getSlides:{method:"GET",url:"".concat(o.a.base).concat(o.a.api.slides),normalizer:function(e){return!e&&e.error?null:Array.isArray(e)?s.payloadToResource(e):s.payloadToResource(e.data,e)},networkHelpers:{handleStatusCode:i.a,requestGET:l.b}},updateSlide:{method:"PUT",url:"".concat(o.a.base).concat(o.a.api.slides,"/::id"),normalizer:function(e,t){return e.errors?s.normalizeError(e):e?s.updateResource(t,e):t},networkHelpers:{handleStatusCode:i.a,requestPUT:l.d}}}),d=u.actions,m=d.createSlide.perform,p=d.deleteSlide.perform,b=d.getSlide.perform,f=d.getSlides.perform,h=d.updateSlide.perform,g=u.selectors,v=g.resource,y=v.getResource,E=v.getResourceById,O=g.createSlide.request,j=(O.getResource,O.isPerforming),k=(g.deleteSlide.request.getResource,g.getSlide.request),S=(k.getResource,k.isPerforming),w=g.getSlides.request,N=(w.getResource,w.isPerforming),T=g.updateSlide.request,C=(T.getResource,T.isPerforming)},647:function(e,t,a){"use strict";var n=a(185),r=a(186),o=a(188),i=a(187),l=a(189),c=a(0),s=a.n(c),u=a(699),d=a(700),m=a(658),p=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.input,n=e.type,r=e.value,o=e.meta,i=o.touched,l=o.error;return s.a.createElement(u.a,null,s.a.createElement("div",{className:"checkbox"},s.a.createElement(d.a,{check:r===a.value,htmlFor:"checkbox1"},s.a.createElement("input",Object.assign({type:n},a,{name:"checkbox1",value:r}))," ",t)),i&&l&&s.a.createElement(m.a,{color:"danger"},l))}}]),t}(c.Component);t.a=p},649:function(e,t,a){},685:function(e,t){},838:function(e,t,a){"use strict";a.r(t);var n=a(547),r=a(185),o=a(186),i=a(188),l=a(187),c=a(189),s=a(0),u=a.n(s),d=a(190),m=a(653),p=a.n(m),b=(a(649),a(788)),f=a(839),h=a(690),g=a(837),v=a(782),y=a(105),E=a(66),O=a(552),j=a(553),k=a(658),S=a(565),w=a(598),N=a(579),T=a(647),C=a(561),L=a(607),R=a(570),P=a(550),x=a(554),_=a(548),A=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!p()(e.video,this.props.video)}},{key:"componentDidUpdate",value:function(){try{var e=document.getElementById("backgroundVideo");e&&(e.load(),e.play())}catch(t){console.log(t)}}},{key:"render",value:function(){var e=this.props.video;return u.a.createElement("video",{width:"100%",id:"backgroundVideo",loop:"true",muted:"true",autoPlay:"true"},e&&Object.values(e).map(function(e){return u.a.createElement("source",{src:e.src,type:e.type})}),"Video not supported.")}}]),t}(u.a.Component),U=function(e){var t=e.image;return u.a.createElement("img",{src:t,alt:"",className:"slides_item-img",draggable:"false"})},F=a(558),q=a(675),D=a.n(q),I=a(40),B=a.n(I),G=a(24),z=a.n(G),H=(z.a.string,z.a.string,z.a.bool,z.a.string,z.a.string,z.a.string,z.a.string,{"top-left":"top-left slides_item-caption--top-left","top-middle":"top-middle slides_item-caption--top-middle","top-right":"top-right slides_item-caption--top-right","middle-left":"middle-left slides_item-caption--middle-left","middle-middle":"middle-middle slides_item-caption--middle-middle","middle-right":"middle-right slides_item-caption--middle-right","bottom-left":"bottom-left slides_item-caption--bottom-left","bottom-middle":"bottom-middle slides_item-caption--bottom-middle","bottom-right":"bottom-right slides_item-caption--bottom-right"}),V=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"middle-center";return B()(Object(F.a)({"slides_item-caption":!0,"slides_item-caption--back-drop":e},function(e){for(var t in H)if(t===e)return H[t];return H["middle-middle"]}(t),!0))},M=function(e){var t=e.backDrop,a=e.position,n=e.body,r=e.buttonLabel,o=e.buttonLink;return u.a.createElement("div",{className:V(t,a)},n&&u.a.createElement("div",{className:"slides_item-caption-content"},D()(n)),r&&u.a.createElement("a",{href:o,className:"button-base"},r))},K="image",J="video",W=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!p()(e.values,this.props.values)}},{key:"render",value:function(){var e=this.props.values,t=e.backgroundType,a=e.image;return u.a.createElement(P.a,null,u.a.createElement(x.a,null,u.a.createElement("strong",null,"\u041f\u0440\u0435\u0432\u044c\u044e")),u.a.createElement(_.a,null,t===K&&u.a.createElement("div",{className:"slides_item"},u.a.createElement(U,{image:a}),u.a.createElement(M,this.props.values)),t===J&&u.a.createElement("div",{className:"slides_item"},u.a.createElement(A,{video:a}),u.a.createElement(M,this.props.values))))}}]),t}(s.Component);W.defaultProps={values:{backgroundType:K,image:""}};var X=a(699),$=a(581),Q=function(e){var t=e.isLoading,a=e.uploadFile,n=e.accept,r=e.label,o=e.errorSubmit;return u.a.createElement(X.a,null,u.a.createElement(S.a,{style:{position:"relative"},type:"button",block:!0,color:"primary"},u.a.createElement("input",{accept:n,type:"file",style:{opacity:"0",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",width:"100%"},onChange:a,multiple:!0}),!t&&u.a.createElement("i",{className:"fa fa-upload"}),t&&u.a.createElement("i",{className:"fa fa-spin fa-circle-o-notch"}),"\xa0",r),o&&u.a.createElement($.a,{className:o?"btn-block":""},o))};Q.defaultProps={label:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c",isLoading:!1,errorSubmit:null,accept:""};var Y=Q,Z=a(549),ee=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).setNewVideoInStore=function(e,t,r){var o=a.props.input,i=o.value,l=o.onChange;if(i.hasOwnProperty(t))i[t]!==e.url&&l(Object(F.a)({},t,{type:t,src:e.url}));else{for(var c in i)if(-1!==i[c].src.indexOf(r))return void l(Object(n.a)({},i,Object(F.a)({},t,{type:t,src:e.url})));l(Object(F.a)({},t,{type:t,src:e.url}))}},a.uploadFile=function(e){var t=e.target.files[0].type,n=e.target.files[0].name.replace(/[.mp4|.ogg|.webm]/g,"");a.setState({isLoading:!0});var r=new FormData;r.append("file",e.target.files[0]),r.append("folder",n),fetch("".concat(Z.a.base).concat(Z.a.api.fileupload),{credentials:"include",method:"POST",body:r}).then(function(e){return console.log("response: ",e),e.status>=400&&a.setState({isLoading:!1,errorSubmit:e.statusText}),e.json()}).then(function(e){console.log("response: ",e),"ok"===e.status?a.setNewVideoInStore(e,t,n):a.setState({isLoading:!1,errorSubmit:"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430"})}).catch(function(e){console.error(e),a.setState({isLoading:!1})})},a.state=a.initialState,a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.errorSubmit;return console.log(this.state),u.a.createElement(Y,{label:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0432\u0438\u0434\u0435\u043e",isLoading:t,errorSubmit:a,uploadFile:this.uploadFile,accept:"video/mp4,video/ogg,video/webm"})}},{key:"initialState",get:function(){return{isLoading:!1,errorSubmit:null}}}]),t}(s.Component),te=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).uploadFile=function(e){var t=a.props.input.onChange,n=e.target.files[0].name.replace(/[.mp4|.ogg|.webm]/g,"");a.setState({isLoading:!0});var r=new FormData;r.append("file",e.target.files[0]),r.append("folder",n),fetch("".concat(Z.a.base).concat(Z.a.api.fileupload),{credentials:"include",method:"POST",body:r}).then(function(e){return console.log("response: ",e),e.json()}).then(function(e){"ok"===e.status?(t(e.url),a.setState({isLoading:!1,errorSubmit:!0})):a.setState({isLoading:!1,errorSubmit:!0})}).catch(function(e){console.error(e),a.setState({isLoading:!1,errorSubmit:!0})})},a.state=a.initialState,a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.errorSubmit;return u.a.createElement(Y,{label:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439",isLoading:t,errorSubmit:a,uploadFile:this.uploadFile,accept:"image/jpeg, image/pjpeg, image/png"})}},{key:"initialState",get:function(){return{isLoading:!1,errorSubmit:null}}}]),t}(s.Component),ae=function(e){return u.a.createElement("div",{className:"slides_item"},u.a.createElement(A,{video:e.image}),u.a.createElement(M,e))},ne=function(e){return u.a.createElement("div",{className:"slides_item"},u.a.createElement(U,{image:e.image}),u.a.createElement(M,e))},re=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).getSlideBody=function(e){try{if(e.backgroundType===K)return Object(v.renderToString)(u.a.createElement(ne,e));if(e.backgroundType===J)return Object(v.renderToString)(u.a.createElement(ae,e))}catch(t){return console.log(t),null}},a.onSubmit=function(e){var t=a.props.history,n=a.getSlideBody(e);return console.log(n),e.hasOwnProperty("id")?a.props.UpdateSlideAction({body:{body:n},urlParams:{id:e.id}}).then(function(e){var a=e.normalizedPayload;if(a&&a.errors)throw a;t.push("/slides")}).catch(function(e){throw new b.a(Object(R.a)(e))}):a.props.CreateSlideAction({body:{body:n}}).then(function(e){var a=e.normalizedPayload;if(a&&a.errors)throw a;t.push("/slides")}).catch(function(e){throw new b.a(Object(R.a)(e))})},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleSubmit,a=(e.pristine,e.submitting,e.error),n=e.values;return u.a.createElement("form",{onSubmit:t(this.onSubmit)},u.a.createElement(W,{values:n}),u.a.createElement(O.a,null,u.a.createElement(j.a,{xs:"6"},n&&n.backgroundType===K&&u.a.createElement(f.a,{name:"image",component:te,type:"file"}),n&&n.backgroundType===J&&u.a.createElement(f.a,{name:"image",component:ee,type:"file"})),u.a.createElement(j.a,{xs:"6"}),u.a.createElement(j.a,{xs:"6"},u.a.createElement(f.a,{name:"backgroundType",component:N.a,label:"\u0422\u0438\u043f \u0444\u043e\u043d\u0430",type:"select",data:[{name:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",id:K},{name:"\u0412\u0438\u0434\u0435\u043e",id:J}]})),u.a.createElement(j.a,{xs:"6"},u.a.createElement(f.a,{name:"position",component:N.a,label:"\u041f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430",type:"select",data:[{name:"\u0421\u0432\u0443\u0440\u0445\u0443 \u0441\u043b\u0435\u0432\u0430",id:"top-left"},{name:"\u0421\u0432\u0435\u0440\u0445\u0443 \u043f\u043e \u0446\u0435\u043d\u0442\u0440\u0443",id:"top-middle"},{name:"\u0421\u0432\u0435\u0440\u0445\u0443 \u0441\u043f\u0440\u0430\u0432\u0430",id:"top-right"},{name:"\u041f\u043e\u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0435 \u0441\u043b\u0435\u0432\u0430",id:"middle-left"},{name:"\u041f\u043e\u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0435",id:"middle-center"},{name:"\u041f\u043e\u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0435 \u0441\u043f\u0440\u0430\u0432\u0430",id:"middle-right"},{name:"\u0421\u043d\u0438\u0437\u0443 \u0441\u043b\u0435\u0432\u0430",id:"bottom-left"},{name:"\u0421\u043d\u0438\u0437\u0443 \u043f\u043e \u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0435",id:"bottom-center"},{name:"\u0421\u043d\u0438\u0437\u0443 \u0441\u043f\u0440\u0430\u0432\u0430",id:"bottom-right"}]})),u.a.createElement(j.a,{xs:"7"},u.a.createElement(f.a,{name:"backDrop",component:T.a,label:"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0444\u043e\u043d \u0434\u043b\u044f \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430?",type:"checkbox",value:!0})),u.a.createElement(j.a,{xs:"6"},u.a.createElement(f.a,{name:"buttonLabel",component:C.a,label:"\u0422\u0435\u043a\u0441\u0442 \u043a\u043d\u043e\u043f\u043a\u0438",type:"text"})),u.a.createElement(j.a,{xs:"6"},u.a.createElement(f.a,{name:"buttonLink",component:C.a,label:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043a\u043d\u043e\u043f\u043a\u0438",type:"text"})),u.a.createElement(j.a,{xs:12},u.a.createElement(f.a,{name:"body",component:w.a,label:"\u041a\u043e\u043d\u0442\u0435\u043d\u0442",type:"text",ref:"CKEDITOR",config:{toolbarGroups:[{name:"basicstyles",groups:["basicstyles"]},"/",{name:"styles"},{name:"colors"},{name:"tools"}]}}))),a&&u.a.createElement(k.a,{className:"pb-3",color:"danger"},a),u.a.createElement(O.a,{className:"pb-3"},u.a.createElement(j.a,{xs:"12",md:"6",lg:"4"},u.a.createElement(S.a,{color:"primary",type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))}}]),t}(s.Component);re=Object(y.b)(function(e){return{values:Object(h.a)("FormSlidesEditor")(e)}})(re),re=Object(g.a)({form:"FormSlidesEditor"})(re),re=Object(d.a)(function(e,t){return{isRetrievingCreateSlide:Object(L.h)(e,t),isRetrievingUpdateSlide:Object(L.k)(e,t)}},function(e){return{CreateSlideAction:function(t){return e(Object(L.a)(t))},UpdateSlideAction:function(t){return e(Object(L.g)(t))}}})(re);var oe=re=Object(E.k)(re),ie=function(e){return e?e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""):e},le=function(e){var t={backgroundType:"image",position:"top-middle",backDrop:!0,buttonLabel:null,buttonLink:null,body:null,image:null},a=(new DOMParser).parseFromString(e,"text/html").body;switch(function(e){return e.getElementsByTagName("video").length?"video":"image"}(a)){case K:t.backgroundType=K,t.image=function(e){var t=e.getElementsByClassName("slides_item-img");return t.length?t[0].src:""}(a);break;case J:t.backgroundType=J,t.image=function(e){var t=e.getElementsByTagName("video");if(t&&t.length){for(var a={},n=0;n<t[0].children.length;n+=1)a[t[0].children[n].type]={src:t[0].children[n].src,type:t[0].children[n].type};return a}return""}(a)}return t.backDrop=function(e){return-1!==e.indexOf("slides_item-caption--back-drop")}(e),t.body=function(e){var t=e.getElementsByClassName("slides_item-caption-content");return t&&t.length?ie(t[0].innerHTML):""}(a),t.position=function(e){for(var t in H)if(-1!==e.indexOf(t))return t;return"middle-middle"}(e),t=Object(n.a)({},t,function(e){var t=e.getElementsByClassName("button-base");return t&&t.length?{buttonLabel:ie(t[0].textContent),buttonLink:t[0].href}:{buttonLabel:null,buttonLink:null}}(a))},ce=a(559);a.d(t,"SlideEditor",function(){return se});var se=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).createInitialValues=function(){var e=a.props,t=e.GetSlideById,r=e.match,o=r&&r.params&&r.params.id&&t(r.params.id),i={backgroundType:K,position:"middle-middle",backDrop:!1,buttonLabel:null,buttonLink:null,body:"",image:""};return o&&(i=Object(n.a)({},o,le(o.body))),i},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!p()(e,this.props)}},{key:"componentWillMount",value:function(){var e=this.props.match;e&&e.params&&e.params.id&&this.props.GetSlideAction({urlParams:{id:e.params.id}})}},{key:"render",value:function(){return this.props.isRetrievingGetSlide?u.a.createElement("div",null,"Loading...."):u.a.createElement(ce.b,{header:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u043b\u0430\u0439\u0434"},u.a.createElement(oe,{initialValues:this.createInitialValues()}))}}]),t}(s.Component);se=Object(d.a)(function(e,t){return{GetSlideById:function(a){var n=Object(L.d)(e,"slides",a,t);return n?n[a]:null},isRetrievingGetSlide:Object(L.i)(e,t)}},function(e){return{GetSlideAction:function(t){return e(Object(L.c)(t))}}})(se);t.default=se}}]);
//# sourceMappingURL=25.75ec123f.chunk.js.map