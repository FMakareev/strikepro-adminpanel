(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{546:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e,t){return!(!e||!t)&&Object.prototype.hasOwnProperty.call(e,t)}},549:function(e,t,a){"use strict";var n="";switch(window.location.hostname){case"localhost":case"admin.strikepro.ru":n="https://dev.strikepro.ru";break;case"strike.localhost":n="http://strike.localhost"}t.a={base:n,api:{login:"/dashboard/auth/login",logout:"/dashboard/auth/logout",posts:"/dashboard/blog/posts",post:"/dashboard/blog/post",categories:"/dashboard/blog/categories",category:"/dashboard/blog/category",slides:"/dashboard/slides",tiles:"/dashboard/mainfeeds",tile_types:"/dashboard/mainfeed/types",tile:"/dashboard/mainfeed",nomenclature:"/dashboard/nomenclature",nomenclatures:"/dashboard/nomenclatures",nomenclatureCharacteristic:"/dashboard/nomenclature/characteristic",typesOfNomenclature:"/dashboard/nomenclature/characteristic",fileupload:"/dashboard/fileupload",static_pages:"/dashboard/pages",url_alias:"/dashboard/url_alias"}}},551:function(e,t,a){"use strict";a.d(t,"c",function(){return r}),a.d(t,"b",function(){return o}),a.d(t,"a",function(){return i}),a.d(t,"d",function(){return c});var n=a(547),r=function(e){return Object(n.a)({method:"POST",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}},e?{body:JSON.stringify(e)}:{})},o=function(){return{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}}},i=function(){return{method:"DELETE",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}}},c=function(e){return{method:"PUT",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(e)}}},555:function(e,t,a){"use strict";var n=a(28),r=Object(n.a)();t.a=r},556:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(555),r=function(e){var t=e.status;return 401===t?(n.a.push("#/login"),window.location.reload(),e):404===t?(n.a.push("#/404"),window.location.reload(),e):e}},557:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(547),r=a(559),o=a(18),i=a(185),c=function e(t){var a=this;Object(i.a)(this,e),this.resourceName=null,this.mergeResourceAndPayload=function(e,t){return t.forEach(function(t){e[a.resourceName][a.resourceName][t.id]=t,e[a.resourceName].metadata={data:[].concat(Object(o.a)(e[a.resourceName].metadata.data),[t.id])}}),e},this.removePayloadFromResources=function(e,t){return t?(console.log("removePayloadFromResources: ",a,e,t),delete e[a.resourceName][a.resourceName][t],e[a.resourceName].metadata.data=e[a.resourceName].metadata.data.filter(function(e){return e!==t}),e):(console.warn("payloadID undefined"),e)},this.payloadToResource=function(e){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i={entities:Object(r.a)({},a.resourceName,(t={},Object(r.a)(t,a.resourceName,{}),Object(r.a)(t,"metadata",{}),t)),result:[]};return e&&e.forEach(function(e){i.result.push(e.id),i.entities[a.resourceName][a.resourceName][e.id]=e}),i.entities[a.resourceName].metadata=Object(n.a)({},o,{data:i.result}),i},this.updateResource=function(e,t){return e[a.resourceName][a.resourceName][t.id]=t,e},this.normalizeError=function(e){return e.errors||(e.errors={}),{entities:Object(n.a)({},e,{message:[e.message]}),result:{errors:e}}},this.resourceName=t}},558:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(546);var n=function(e){return function(t,a,n){return t.errors?e.normalizeError(t):t?e.removePayloadFromResources(a,n.id):a}}},560:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var n=a(0),r=a.n(n),o=a(552),i=a(553),c=a(550),l=a(554),s=a(548),u=a(564),d=function(e){var t=e.header,a=e.children,n=e.footer;return r.a.createElement("div",{className:"animated fadeIn"},r.a.createElement(o.a,null,r.a.createElement(i.a,{xs:"12"},r.a.createElement(c.a,null,t&&r.a.createElement(l.a,null,r.a.createElement("strong",null,t)),r.a.createElement(s.a,{className:"card-body"},a),n&&r.a.createElement(u.a,{className:"card-footer"},n)))))};t.b=d},562:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(0),r=a.n(n),o=a(701),i=a(702),c=a(576),l=a(577),s=a(563),u=a(619),d=a(584),m=function(e){var t=e.input,a=e.label,n=e.type,m=e.placeholder,p=e.required,b=e.icon,f=e.meta,g=f.touched,h=f.error;return r.a.createElement(o.a,{className:g?h?"":"was-validated":""},a&&r.a.createElement(i.a,null,a),r.a.createElement(c.a,{className:"mb-3"},b&&r.a.createElement(l.a,{addonType:"prepend"},r.a.createElement(s.a,null,r.a.createElement("i",{className:b}))),r.a.createElement(u.a,Object.assign({},t,{type:n,valid:!!g&&!h,className:g&&h?"form-control-warning is-invalid":"",placeholder:m||a,required:p})),r.a.createElement(d.a,{valid:!!g&&!h,className:"help-block"},h)))}},565:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e){var t={_error:e.message?e.message[0]:null};for(var a in e.errors)Array.isArray(e.errors[a])&&(t[a]=e.errors[a][0]);return t}},575:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(17),r=a.n(n),o=a(569),i=a(790),c=a(565),l=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(a){var n,o,l;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(a);case 2:if(n=t.sent,o=n.normalizedPayload,l=n.error,!(o&&o.errors||l)){t.next=7;break}throw new i.a(Object(c.a)(o||{message:[l.message],errors:{}}));case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},582:function(e,t,a){"use strict";var n=a(185),r=a(186),o=a(188),i=a(187),c=a(189),l=a(0),s=a.n(l),u=a(701),d=a(702),m=a(619),p=a(660),b=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.input,a=e.defaultValue;!t.value&&a&&t.onChange(a)}},{key:"render",value:function(){var e=this.props,t=e.input,a=e.label,n=e.type,r=e.data,o=e.meta,i=o.touched,c=o.error,l=e.valueKey,b=e.labelKey;return s.a.createElement(u.a,null,s.a.createElement(d.a,null,a),s.a.createElement(m.a,Object.assign({type:n},t),s.a.createElement("option",null,"\u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e..."),Array.isArray(r)&&r.map(function(e,a){return s.a.createElement("option",{key:a,selected:e[l]===t.value,value:e[l]},e[b])})),i&&c&&s.a.createElement(p.a,{color:"danger"},c))}}]),t}(l.Component);b.defaultProps={valueKey:"id",labelKey:"name"},t.a=b},601:function(e,t,a){"use strict";var n=a(547),r=a(185),o=a(186),i=a(188),c=a(187),l=a(189),s=a(0),u=a.n(s),d=a(602),m=a.n(d),p=a(701),b=a(702),f=a(660),g=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state=a.initialState,a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.input,a=e.label,r=e.meta,o=r.touched,i=r.error,c=e.config;return u.a.createElement(p.a,null,u.a.createElement(b.a,null,a),u.a.createElement(m.a,{activeClass:"p10",config:Object(n.a)({language:"ru",filebrowserBrowseUrl:"http://new.strikepro.ru/ckfinder/browser",filebrowserImageBrowseUrl:"http://new.strikepro.ru/ckfinder/browser",filebrowserUploadUrl:"http://new.strikepro.ru/ckfinder/connector",filebrowserImageUploadUrl:"http://new.strikepro.ru/ckfinder/connector",imageUploadUrl:""},c),scriptUrl:"//cdn.ckeditor.com/4.7.3/full/ckeditor.js",content:t.value,events:{change:function(e){return t.onChange(e.editor.getData())},onSelect:function(e){console.log("onSelect:",e),e.cancel()},paste:function(e){console.log("paste:",e)},afterPaste:function(e){console.log("afterPaste:",e)},fileUploadRequest:function(e){console.log("fileUploadRequest:",e);var t=e.data.fileLoader.xhr;t.setRequestHeader("Access-Control-Allow-Origin","http://localhost:8080"),t.setRequestHeader("X-Requested-With","XMLHttpRequest"),t.setRequestHeader("Accept","application/json"),t.withCredentials=!0},fileUploadResponse:function(e){console.log("fileUploadResponse:",e)}}}),o&&i&&u.a.createElement(f.a,{color:"danger"},i))}},{key:"initialState",get:function(){return{isInit:!1,editor:null}}}]),t}(s.Component);t.a=g},610:function(e,t,a){"use strict";a.d(t,"a",function(){return p}),a.d(t,"b",function(){return b}),a.d(t,"c",function(){return f}),a.d(t,"f",function(){return g}),a.d(t,"g",function(){return h}),a.d(t,"i",function(){return w}),a.d(t,"j",function(){return T}),a.d(t,"e",function(){return E}),a.d(t,"d",function(){return j}),a.d(t,"k",function(){return L}),a.d(t,"h",function(){return k});var n=a(190),r=a(557),o=a(549),i=a(556),c=a(551),l=a(558),s=a(546),u=new r.a("slides"),d=Object(n.b)("slides")({createSlide:{method:"POST",url:"".concat(o.a.base).concat(o.a.api.slides),normalizer:function(e,t,a){return e?e.errors||e.message?u.normalizeError(e):Object(s.a)(t,"slides")?u.mergeResourceAndPayload(t,[e]):u.payloadToResource([e]):null},networkHelpers:{handleStatusCode:i.a,requestPOST:c.c}},deleteSlide:{method:"DELETE",url:"".concat(o.a.base).concat(o.a.api.slides,"/::id"),normalizer:Object(l.a)(u),networkHelpers:{handleStatusCode:i.a,requestDELETE:c.a}},getSlide:{method:"GET",url:"".concat(o.a.base).concat(o.a.api.slides,"/::id"),normalizer:function(e){return u.payloadToResource([e])},networkHelpers:{handleStatusCode:i.a,requestGET:c.b}},getSlides:{method:"GET",url:"".concat(o.a.base).concat(o.a.api.slides),normalizer:function(e){return!e&&e.error?null:Array.isArray(e)?u.payloadToResource(e):u.payloadToResource(e.data,e)},networkHelpers:{handleStatusCode:i.a,requestGET:c.b}},updateSlide:{method:"PUT",url:"".concat(o.a.base).concat(o.a.api.slides,"/::id"),normalizer:function(e,t){return e.errors?u.normalizeError(e):e?u.updateResource(t,e):t},networkHelpers:{handleStatusCode:i.a,requestPUT:c.d}}}),m=d.actions,p=m.createSlide.perform,b=m.deleteSlide.perform,f=m.getSlide.perform,g=m.getSlides.perform,h=m.updateSlide.perform,v=d.selectors,y=v.resource,E=y.getResource,j=y.getResourceById,O=v.createSlide.request,k=(O.getResource,O.isPerforming),S=(v.deleteSlide.request.getResource,v.getSlide.request),w=(S.getResource,S.isPerforming),N=v.getSlides.request,T=(N.getResource,N.isPerforming),C=v.updateSlide.request,L=(C.getResource,C.isPerforming)},649:function(e,t,a){"use strict";var n=a(185),r=a(186),o=a(188),i=a(187),c=a(189),l=a(0),s=a.n(l),u=a(701),d=a(702),m=a(660),p=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.input,n=e.type,r=e.value,o=e.meta,i=o.touched,c=o.error;return s.a.createElement(u.a,null,s.a.createElement("div",{className:"checkbox"},s.a.createElement(d.a,{check:r===a.value,htmlFor:"checkbox1"},s.a.createElement("input",Object.assign({type:n},a,{name:"checkbox1",value:r}))," ",t)),i&&c&&s.a.createElement(m.a,{color:"danger"},c))}}]),t}(l.Component);t.a=p},651:function(e,t,a){},687:function(e,t){},840:function(e,t,a){"use strict";a.r(t);var n=a(547),r=a(185),o=a(186),i=a(188),c=a(187),l=a(189),s=a(0),u=a.n(s),d=a(190),m=a(655),p=a.n(m),b=(a(651),a(17)),f=a.n(b),g=a(569),h=a(841),v=a(692),y=a(839),E=a(784),j=a(105),O=a(66),k=a(552),S=a(553),w=a(660),N=a(567),T=a(601),C=a(582),L=a(649),x=a(562),R=a(610),P=(a(565),a(550)),_=a(554),A=a(548),U=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!p()(e.video,this.props.video)}},{key:"componentDidUpdate",value:function(){try{var e=document.getElementById("backgroundVideo");e&&(e.load(),e.play())}catch(t){console.log(t)}}},{key:"render",value:function(){var e=this.props.video;return u.a.createElement("video",{width:"100%",id:"backgroundVideo",loop:"true",muted:"true",autoPlay:"true"},e&&Object.values(e).map(function(e){return u.a.createElement("source",{src:e.src,type:e.type})}),"Video not supported.")}}]),t}(u.a.Component),F=function(e){var t=e.image;return u.a.createElement("img",{src:t,alt:"",className:"slides_item-img",draggable:"false"})},q=a(559),D=a(677),I=a.n(D),B=a(40),G=a.n(B),z=a(23),H=a.n(z),V=(H.a.string,H.a.string,H.a.bool,H.a.string,H.a.string,H.a.string,H.a.string,{"top-left":"top-left slides_item-caption--top-left","top-middle":"top-middle slides_item-caption--top-middle","top-right":"top-right slides_item-caption--top-right","middle-left":"middle-left slides_item-caption--middle-left","middle-middle":"middle-middle slides_item-caption--middle-middle","middle-right":"middle-right slides_item-caption--middle-right","bottom-left":"bottom-left slides_item-caption--bottom-left","bottom-middle":"bottom-middle slides_item-caption--bottom-middle","bottom-right":"bottom-right slides_item-caption--bottom-right"}),M=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"middle-center";return G()(Object(q.a)({"slides_item-caption":!0,"slides_item-caption--back-drop":e},function(e){for(var t in V)if(t===e)return V[t];return V["middle-middle"]}(t),!0))},K=function(e){var t=e.backDrop,a=e.position,n=e.body,r=e.buttonLabel,o=e.buttonLink;return u.a.createElement("div",{className:M(t,a)},n&&u.a.createElement("div",{className:"slides_item-caption-content"},I()(n)),r&&u.a.createElement("a",{href:o,className:"button-base"},r))},J="image",W="video",X=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!p()(e.values,this.props.values)}},{key:"render",value:function(){var e=this.props.values,t=e.backgroundType,a=e.image;return u.a.createElement(P.a,null,u.a.createElement(_.a,null,u.a.createElement("strong",null,"\u041f\u0440\u0435\u0432\u044c\u044e")),u.a.createElement(A.a,null,t===J&&u.a.createElement("div",{className:"slides_item"},u.a.createElement(F,{image:a}),u.a.createElement(K,this.props.values)),t===W&&u.a.createElement("div",{className:"slides_item"},u.a.createElement(U,{video:a}),u.a.createElement(K,this.props.values))))}}]),t}(s.Component);X.defaultProps={values:{backgroundType:J,image:""}};var $=a(701),Q=a(584),Y=function(e){var t=e.isLoading,a=e.uploadFile,n=e.accept,r=e.label,o=e.errorSubmit;return u.a.createElement($.a,null,u.a.createElement(N.a,{style:{position:"relative"},type:"button",block:!0,color:"primary"},u.a.createElement("input",{accept:n,type:"file",style:{opacity:"0",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",width:"100%"},onChange:a,multiple:!0}),!t&&u.a.createElement("i",{className:"fa fa-upload"}),t&&u.a.createElement("i",{className:"fa fa-spin fa-circle-o-notch"}),"\xa0",r),o&&u.a.createElement(Q.a,{className:o?"btn-block":""},o))};Y.defaultProps={label:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c",isLoading:!1,errorSubmit:null,accept:""};var Z=Y,ee=a(549),te=a(546),ae=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).setNewVideoInStore=function(e,t,r){var o=a.props.input,i=o.value,c=o.onChange;if(Object(te.a)(i,t))i[t]!==e.url&&c(Object(q.a)({},t,{type:t,src:e.url}));else{for(var l in i)if(-1!==i[l].src.indexOf(r))return void c(Object(n.a)({},i,Object(q.a)({},t,{type:t,src:e.url})));c(Object(q.a)({},t,{type:t,src:e.url}))}},a.uploadFile=function(e){var t=e.target.files[0].type,n=e.target.files[0].name.replace(/[.mp4|.ogg|.webm]/g,"");a.setState({isLoading:!0});var r=new FormData;r.append("file",e.target.files[0]),r.append("folder",n),fetch("".concat(ee.a.base).concat(ee.a.api.fileupload),{credentials:"include",method:"POST",body:r}).then(function(e){return console.log("response: ",e),e.status>=400&&a.setState({isLoading:!1,errorSubmit:e.statusText}),e.json()}).then(function(e){console.log("response: ",e),"ok"===e.status?a.setNewVideoInStore(e,t,n):a.setState({isLoading:!1,errorSubmit:"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430"})}).catch(function(e){console.error(e),a.setState({isLoading:!1})})},a.state=a.initialState,a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.errorSubmit;return console.log(this.state),u.a.createElement(Z,{label:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0432\u0438\u0434\u0435\u043e",isLoading:t,errorSubmit:a,uploadFile:this.uploadFile,accept:"video/mp4,video/ogg,video/webm"})}},{key:"initialState",get:function(){return{isLoading:!1,errorSubmit:null}}}]),t}(s.Component),ne=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).uploadFile=function(e){var t=a.props.input.onChange,n=e.target.files[0].name.replace(/[.mp4|.ogg|.webm]/g,"");a.setState({isLoading:!0});var r=new FormData;r.append("file",e.target.files[0]),r.append("folder",n),fetch("".concat(ee.a.base).concat(ee.a.api.fileupload),{credentials:"include",method:"POST",body:r}).then(function(e){return console.log("response: ",e),e.json()}).then(function(e){"ok"===e.status?(t(e.url),a.setState({isLoading:!1,errorSubmit:!0})):a.setState({isLoading:!1,errorSubmit:!0})}).catch(function(e){console.error(e),a.setState({isLoading:!1,errorSubmit:!0})})},a.state=a.initialState,a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.errorSubmit;return u.a.createElement(Z,{label:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439",isLoading:t,errorSubmit:a,uploadFile:this.uploadFile,accept:"image/jpeg, image/pjpeg, image/png"})}},{key:"initialState",get:function(){return{isLoading:!1,errorSubmit:null}}}]),t}(s.Component),re=function(e){return u.a.createElement("div",{className:"slides_item"},u.a.createElement(U,{video:e.image}),u.a.createElement(K,e))},oe=function(e){return u.a.createElement("div",{className:"slides_item"},u.a.createElement(F,{image:e.image}),u.a.createElement(K,e))},ie=a(575),ce=function(e){function t(){var e,a;Object(r.a)(this,t);for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).getSlideBody=function(e){try{if(e.backgroundType===J)return Object(E.renderToString)(u.a.createElement(oe,e));if(e.backgroundType===W)return Object(E.renderToString)(u.a.createElement(re,e))}catch(t){return console.log(t),null}},a.onSubmit=function(){var e=Object(g.a)(f.a.mark(function e(t){var r,o,i,c,l;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("values: ",t),r=a.getSlideBody(t),o=a.props,i=o.history,c=o.UpdateSlideAction,l=o.CreateSlideAction,!Object(te.a)(t,"id")){e.next=8;break}return e.next=6,Object(ie.a)(c)({body:Object(n.a)({},t,{body:r}),urlParams:{id:t.id}});case 6:e.next=10;break;case 8:return e.next=10,Object(ie.a)(l)({body:{body:r}});case 10:i.push("/slides");case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleSubmit,a=e.pristine,n=e.submitting,r=e.error,o=e.values;return u.a.createElement("form",{onSubmit:t(this.onSubmit)},u.a.createElement(X,{values:o}),u.a.createElement(k.a,null,u.a.createElement(S.a,{xs:"6"},o&&o.backgroundType===J&&u.a.createElement(h.a,{name:"image",component:ne,type:"file"}),o&&o.backgroundType===W&&u.a.createElement(h.a,{name:"image",component:ae,type:"file"})),u.a.createElement(S.a,{xs:"6"}),u.a.createElement(S.a,{xs:"6"},u.a.createElement(h.a,{name:"backgroundType",component:C.a,label:"\u0422\u0438\u043f \u0444\u043e\u043d\u0430",type:"select",data:[{name:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",id:J},{name:"\u0412\u0438\u0434\u0435\u043e",id:W}]})),u.a.createElement(S.a,{xs:"6"},u.a.createElement(h.a,{name:"position",component:C.a,label:"\u041f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430",type:"select",data:[{name:"\u0421\u0432\u0443\u0440\u0445\u0443 \u0441\u043b\u0435\u0432\u0430",id:"top-left"},{name:"\u0421\u0432\u0435\u0440\u0445\u0443 \u043f\u043e \u0446\u0435\u043d\u0442\u0440\u0443",id:"top-middle"},{name:"\u0421\u0432\u0435\u0440\u0445\u0443 \u0441\u043f\u0440\u0430\u0432\u0430",id:"top-right"},{name:"\u041f\u043e\u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0435 \u0441\u043b\u0435\u0432\u0430",id:"middle-left"},{name:"\u041f\u043e\u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0435",id:"middle-center"},{name:"\u041f\u043e\u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0435 \u0441\u043f\u0440\u0430\u0432\u0430",id:"middle-right"},{name:"\u0421\u043d\u0438\u0437\u0443 \u0441\u043b\u0435\u0432\u0430",id:"bottom-left"},{name:"\u0421\u043d\u0438\u0437\u0443 \u043f\u043e \u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0435",id:"bottom-center"},{name:"\u0421\u043d\u0438\u0437\u0443 \u0441\u043f\u0440\u0430\u0432\u0430",id:"bottom-right"}]})),u.a.createElement(S.a,{xs:"7"},u.a.createElement(h.a,{name:"backDrop",component:L.a,label:"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0444\u043e\u043d \u0434\u043b\u044f \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430?",type:"checkbox",value:!0})),u.a.createElement(S.a,{xs:"6"},u.a.createElement(h.a,{name:"buttonLabel",component:x.a,label:"\u0422\u0435\u043a\u0441\u0442 \u043a\u043d\u043e\u043f\u043a\u0438",type:"text"})),u.a.createElement(S.a,{xs:"6"},u.a.createElement(h.a,{name:"buttonLink",component:x.a,label:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043a\u043d\u043e\u043f\u043a\u0438",type:"text"})),u.a.createElement(S.a,{xs:12},u.a.createElement(h.a,{name:"body",component:T.a,label:"\u041a\u043e\u043d\u0442\u0435\u043d\u0442",type:"text",ref:"CKEDITOR",config:{toolbarGroups:[{name:"basicstyles",groups:["basicstyles"]},"/",{name:"styles"},{name:"colors"},{name:"tools"}]}}))),r&&u.a.createElement(w.a,{className:"pb-3",color:"danger"},r),u.a.createElement(k.a,{className:"pb-3"},u.a.createElement(S.a,{xs:"12",md:"6",lg:"4"},u.a.createElement(N.a,{color:"primary",type:"submit",disabled:a||n},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))}}]),t}(s.Component);ce=Object(j.b)(function(e){return{values:Object(v.a)("FormSlidesEditor")(e)}})(ce),ce=Object(y.a)({form:"FormSlidesEditor"})(ce),ce=Object(d.a)(function(e,t){return{isRetrievingCreateSlide:Object(R.h)(e,t),isRetrievingUpdateSlide:Object(R.k)(e,t)}},function(e){return{CreateSlideAction:function(t){return e(Object(R.a)(t))},UpdateSlideAction:function(t){return e(Object(R.g)(t))}}})(ce);var le=ce=Object(O.k)(ce),se=function(e){return e?e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""):e},ue=function(e){var t={backgroundType:"image",position:"top-middle",backDrop:!0,buttonLabel:null,buttonLink:null,body:null,image:null},a=(new DOMParser).parseFromString(e,"text/html").body;switch(function(e){return e.getElementsByTagName("video").length?"video":"image"}(a)){case J:t.backgroundType=J,t.image=function(e){var t=e.getElementsByClassName("slides_item-img");return t.length?t[0].src:""}(a);break;case W:t.backgroundType=W,t.image=function(e){var t=e.getElementsByTagName("video");if(t&&t.length){for(var a={},n=0;n<t[0].children.length;n+=1)a[t[0].children[n].type]={src:t[0].children[n].src,type:t[0].children[n].type};return a}return""}(a)}return t.backDrop=function(e){return-1!==e.indexOf("slides_item-caption--back-drop")}(e),t.body=function(e){var t=e.getElementsByClassName("slides_item-caption-content");return t&&t.length?se(t[0].innerHTML):""}(a),t.position=function(e){for(var t in V)if(-1!==e.indexOf(t))return t;return"middle-middle"}(e),t=Object(n.a)({},t,function(e){var t=e.getElementsByClassName("button-base");return t&&t.length?{buttonLabel:se(t[0].textContent),buttonLink:t[0].href}:{buttonLabel:null,buttonLink:null}}(a))},de=a(560);a.d(t,"SlideEditor",function(){return me});var me=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).createInitialValues=function(){var e=a.props,t=e.GetSlideById,r=e.match,o=r&&r.params&&r.params.id&&t(r.params.id),i={backgroundType:J,position:"middle-middle",backDrop:!1,buttonLabel:null,buttonLink:null,body:"",image:""};return o&&(i=Object(n.a)({},o,ue(o.body))),i},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!p()(e,this.props)}},{key:"componentWillMount",value:function(){var e=this.props.match;e&&e.params&&e.params.id&&this.props.GetSlideAction({urlParams:{id:e.params.id}})}},{key:"render",value:function(){return this.props.isRetrievingGetSlide?u.a.createElement("div",null,"Loading...."):u.a.createElement(de.b,{header:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u043b\u0430\u0439\u0434"},u.a.createElement(le,{initialValues:this.createInitialValues()}))}}]),t}(s.Component);me=Object(d.a)(function(e,t){return{GetSlideById:function(a){var n=Object(R.d)(e,"slides",a,t);return n?n[a]:null},isRetrievingGetSlide:Object(R.i)(e,t)}},function(e){return{GetSlideAction:function(t){return e(Object(R.c)(t))}}})(me);t.default=me}}]);
//# sourceMappingURL=19.779b1442.chunk.js.map