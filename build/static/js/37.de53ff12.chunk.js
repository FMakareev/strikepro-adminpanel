(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{553:function(e,t,a){"use strict";var r="";switch(window.location.hostname){case"localhost":r="https://dev.strikepro.ru";break;case"admin.strikepro.ru":r="https://strikepro.ru";break;case"strike.localhost":r="http://strike.localhost"}t.a={base:r,api:{login:"/dashboard/auth/login",logout:"/dashboard/auth/logout",posts:"/dashboard/blog/posts",post:"/dashboard/blog/post",categories:"/dashboard/blog/categories",category:"/dashboard/blog/category",slides:"/dashboard/slides",tiles:"/dashboard/mainfeeds",tile_types:"/dashboard/mainfeed/types",tile:"/dashboard/mainfeed",nomenclature:"/dashboard/nomenclature",nomenclatures:"/dashboard/nomenclatures",nomenclatureCharacteristic:"/dashboard/nomenclature/characteristic",typesOfNomenclature:"/dashboard/nomenclature/characteristic",fileupload:"/dashboard/fileupload",static_pages:"/dashboard/pages"}}},554:function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"b",function(){return o}),a.d(t,"a",function(){return c}),a.d(t,"d",function(){return i});var r=a(547),n=function(e){return Object(r.a)({method:"POST",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}},e?{body:JSON.stringify(e)}:{})},o=function(){return{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}}},c=function(){return{method:"DELETE",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}}},i=function(e){return{method:"PUT",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(e)}}},556:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var r=a(193),n=function(e){var t=e.status;return 401===t?(r.a.push("#/login"),window.location.reload(),e):404===t?(r.a.push("#/404"),window.location.reload(),e):e}},557:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var r=a(547),n=a(555),o=a(20),c=a(185),i=function e(t){var a=this;Object(c.a)(this,e),this.resourceName=null,this.mergeResourceAndPayload=function(e,t){return t.forEach(function(t){e[a.resourceName][a.resourceName][t.id]=t,e[a.resourceName].metadata={data:[].concat(Object(o.a)(e[a.resourceName].metadata.data),[t.id])}}),e},this.removePayloadFromResources=function(e,t){return t?(console.log("removePayloadFromResources: ",a,e,t),delete e[a.resourceName][a.resourceName][t],e[a.resourceName].metadata.data=e[a.resourceName].metadata.data.filter(function(e){return e!==t}),e):(console.warn("payloadID undefined"),e)},this.payloadToResource=function(e){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c={entities:Object(n.a)({},a.resourceName,(t={},Object(n.a)(t,a.resourceName,{}),Object(n.a)(t,"metadata",{}),t)),result:[]};return e&&e.forEach(function(e){c.result.push(e.id),c.entities[a.resourceName][a.resourceName][e.id]=e}),c.entities[a.resourceName].metadata=Object(r.a)({},o,{data:c.result}),c},this.updateResource=function(e,t){return e[a.resourceName][a.resourceName][t.id]=t,e},this.normalizeError=function(e){return e.errors||(e.errors={}),{entities:Object(r.a)({},e,{message:[e.message]}),result:{errors:e}}},this.resourceName=t}},558:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r=function(e){return function(t,a,r){return t.errors?e.normalizeError(t):t?e.removePayloadFromResources(a,r.id):a}}},561:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var r=a(0),n=a.n(r),o=a(692),c=a(693),i=a(573),l=a(574),s=a(562),u=a(613),d=a(587),p=function(e){var t=e.input,a=e.label,r=e.type,p=e.placeholder,m=e.required,f=e.icon,h=e.meta,b=h.touched,y=h.error;return n.a.createElement(o.a,{className:b?y?"":"was-validated":""},a&&n.a.createElement(c.a,null,a),n.a.createElement(i.a,{className:"mb-3"},f&&n.a.createElement(l.a,{addonType:"prepend"},n.a.createElement(s.a,null,n.a.createElement("i",{className:f}))),n.a.createElement(u.a,Object.assign({},t,{type:r,valid:!!b&&!y,className:b&&y?"form-control-warning is-invalid":"",placeholder:p||a,required:m})),n.a.createElement(d.a,{valid:!!b&&!y,className:"help-block"},y)))}},570:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r=function(e){var t={_error:e.message?e.message[0]:null};for(var a in e.errors)Array.isArray(e.errors[a])&&(t[a]=e.errors[a][0]);return t}},575:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r=function(e){return e?void 0:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}},577:function(e,t,a){"use strict";var r=a(185),n=a(186),o=a(188),c=a(187),i=a(189),l=a(0),s=a.n(l),u=a(692),d=a(693),p=a(613),m=a(651),f=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.input,a=e.label,r=e.type,n=e.data,o=e.meta,c=o.touched,i=o.error,l=e.valueKey,f=e.labelKey;return s.a.createElement(u.a,null,s.a.createElement(d.a,null,a),s.a.createElement(p.a,Object.assign({type:r},t),s.a.createElement("option",null,"\u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e..."),Array.isArray(n)&&n.map(function(e,a){return s.a.createElement("option",{key:a,selected:e[l]===t.value,value:e[l]},e[f])})),c&&i&&s.a.createElement(m.a,{color:"danger"},i))}}]),t}(l.Component);f.defaultProps={valueKey:"id",labelKey:"name"},t.a=f},606:function(e,t,a){"use strict";a.d(t,"g",function(){return s}),a.d(t,"a",function(){return m}),a.d(t,"b",function(){return f}),a.d(t,"c",function(){return h}),a.d(t,"f",function(){return b}),a.d(t,"h",function(){return y}),a.d(t,"j",function(){return R}),a.d(t,"k",function(){return k}),a.d(t,"e",function(){return E}),a.d(t,"d",function(){return v}),a.d(t,"l",function(){return C}),a.d(t,"i",function(){return j});var r=a(190),n=a(557),o=a(553),c=a(556),i=a(554),l=a(558),s="tiles",u=new n.a(s),d=Object(r.b)(s)({createTile:{method:"POST",url:"".concat(o.a.base).concat(o.a.api.tile),normalizer:function(e,t,a,r,n,o){return console.log("createTile: ",e,t,a,r,n,o),e?e.errors||e.message?u.normalizeError(e):t.hasOwnProperty(s)?u.mergeResourceAndPayload(t,[e]):u.payloadToResource([e]):null},networkHelpers:{handleStatusCode:function(e){Object(c.a)(e)},requestPOST:i.c}},deleteTile:{method:"DELETE",url:"".concat(o.a.base).concat(o.a.api.tile,"/::id"),normalizer:Object(l.a)(u),networkHelpers:{handleStatusCode:c.a,requestDELETE:i.a}},getTile:{method:"GET",url:"".concat(o.a.base).concat(o.a.api.tile,"/::id"),normalizer:function(e){return u.payloadToResource([e])},networkHelpers:{handleStatusCode:c.a,requestGET:i.b}},getTiles:{method:"GET",url:"".concat(o.a.base).concat(o.a.api.tiles),normalizer:function(e){return!e&&e.error?null:Array.isArray(e)?u.payloadToResource(e):u.payloadToResource(e.data,e)},networkHelpers:{handleStatusCode:c.a,requestGET:i.b}},updateTile:{method:"PUT",url:"".concat(o.a.base).concat(o.a.api.tile,"/::id"),normalizer:function(e,t){return e.errors?u.normalizeError(e):e?u.updateResource(t,e):t},networkHelpers:{handleStatusCode:c.a,requestPUT:i.d}}}),p=d.actions,m=p.createTile.perform,f=p.deleteTile.perform,h=p.getTile.perform,b=p.getTiles.perform,y=p.updateTile.perform,T=d.selectors,g=T.resource,E=g.getResource,v=g.getResourceById,O=T.createTile.request,j=(O.getResource,O.isPerforming),w=(T.deleteTile.request.getResource,T.getTile.request),R=(w.getResource,w.isPerforming),P=T.getTiles.request,k=(P.getResource,P.isPerforming),N=T.updateTile.request,C=(N.getResource,N.isPerforming)},647:function(e,t,a){"use strict";var r=a(185),n=a(186),o=a(188),c=a(187),i=a(192),l=a(189),s=a(0),u=a.n(s),d=a(692),p=a(693),m=a(172),f=(a(667),a(828)),h=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(i.a)(a)),a}return Object(l.a)(t,e),Object(n.a)(t,[{key:"handleChange",value:function(e){var t;return(0,this.props.input.onChange)((t=e,Object(f.a)(t,"yyyy-MM-d h:mm:ss")))}},{key:"render",value:function(){var e=this.props,t=e.label,a=e.input.value;return u.a.createElement("div",{className:"controls"},u.a.createElement(d.a,null,u.a.createElement(p.a,null,t),u.a.createElement(m.a,{locale:"ru",minDate:new Date,selected:new Date(a||new Date),onChange:this.handleChange,className:"form-control full-width"})))}}]),t}(s.Component);t.a=h},839:function(e,t,a){"use strict";a.r(t);var r=a(185),n=a(186),o=a(188),c=a(187),i=a(189),l=a(0),s=a.n(l),u=a(550),d=a(551),p=a(651),m=a(692),f=a(565),h=a(781),b=a(831),y=a(829),T=a(577),g=a(647),E=a(693),v=a(613),O=function(e){var t=e.input,a=e.label,r=e.type,n=e.meta,o=n.touched,c=n.error;return s.a.createElement("div",{className:"controls"},s.a.createElement(m.a,null,s.a.createElement(E.a,null,a),s.a.createElement(v.a,Object.assign({style:{padding:"inherit",height:"35px"},type:r},t))),s.a.createElement("p",{className:"help-block"},o&&c&&s.a.createElement("span",null,c)))},j=a(561),w=a(190),R=a(606),P=a(570),k=a(66),N=a(575),C=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).onSubmit=function(e){var t=a.props.history;return e.hasOwnProperty("id")?a.props.UpdateTileAction({body:e,urlParams:{id:e.id}}).then(function(e){var a=e.normalizedPayload;if(a&&a.errors)throw a;t.push("/tile-list")}).catch(function(e){throw new h.a(Object(P.a)(e))}):a.props.CreateTileAction({body:e}).then(function(e){var a=e.normalizedPayload;if(a&&a.errors)throw a;t.push("/tile-list")}).catch(function(e){throw new h.a(Object(P.a)(e))})},a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.error,a=e.handleSubmit,r=e.tileTypes;return s.a.createElement("form",{onSubmit:a(this.onSubmit)},s.a.createElement(u.a,null,s.a.createElement(d.a,{xs:"12",md:"6",lg:"4"},s.a.createElement(b.a,{name:"resource_id",component:j.a,label:"resource_id",type:"text",validate:[N.a]})),r&&s.a.createElement(d.a,{xs:"12",md:"6",lg:"4"},s.a.createElement(b.a,{name:"resource_type",component:T.a,valueKey:"name",label:"resource_type",type:"select",data:r})),s.a.createElement(d.a,{xs:"12",md:"6",lg:"4"},s.a.createElement(b.a,{name:"cols",component:j.a,label:"cols",type:"text"})),s.a.createElement(d.a,{xs:"12",md:"6",lg:"4"},s.a.createElement(b.a,{name:"background_color",component:O,label:"background_color",type:"color"})),s.a.createElement(d.a,{xs:"12",md:"6",lg:"4"},s.a.createElement(b.a,{name:"public_at",label:"public_at",component:g.a}))),t&&s.a.createElement(u.a,null,s.a.createElement(d.a,{xs:"12"},s.a.createElement(p.a,{color:"danger"},t))),s.a.createElement(u.a,null,s.a.createElement(d.a,{xs:"6"},s.a.createElement("div",{className:"controls"},s.a.createElement(m.a,null,s.a.createElement(f.a,{color:"primary",type:"submit",className:"px-4"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))))}}]),t}(l.Component);C.defaultProps={},C=Object(y.a)({form:"TileEditorForm"})(C),C=Object(w.a)(function(e,t){return{isRetrievingCreateTile:Object(R.i)(e,t),isRetrievingUpdateTile:Object(R.l)(e,t)}},function(e){return{CreateTileAction:function(t){return e(Object(R.a)(t))},UpdateTileAction:function(t){return e(Object(R.h)(t))}}})(C);C=Object(k.k)(C);var A=a(557),q=a(553),S=a(556),z=a(554),G=a(558),_=new A.a("tileTypes"),x=Object(w.b)("tileTypes")({createTileType:{method:"POST",url:"".concat(q.a.base).concat(q.a.api.tile_types),normalizer:function(e,t,a){return e?e.errors?_.normalizeError(e):t.hasOwnProperty("tileTypes")?_.mergeResourceAndPayload(t,[e]):_.payloadToResource([e]):null},networkHelpers:{handleStatusCode:S.a,requestPOST:z.c}},deleteTileType:{method:"DELETE",url:"".concat(q.a.base).concat(q.a.api.tile_types,"/::id"),normalizer:Object(G.a)(_),networkHelpers:{handleStatusCode:S.a,requestDELETE:z.a}},getTileType:{method:"GET",url:"".concat(q.a.base).concat(q.a.api.tile_types,"/::id"),normalizer:function(e){return _.payloadToResource([e])},networkHelpers:{handleStatusCode:S.a,requestGET:z.b}},getTileTypes:{method:"GET",url:"".concat(q.a.base).concat(q.a.api.tile_types),normalizer:function(e){return!e&&e.error?null:Array.isArray(e)?_.payloadToResource(e.map(function(e,t){return{id:t,name:e}})):_.payloadToResource(e.data,e)},networkHelpers:{handleStatusCode:S.a,requestGET:z.b}},updateTileType:{method:"PUT",url:"".concat(q.a.base).concat(q.a.api.tile_types,"/::id"),normalizer:function(e,t){return e.errors?_.normalizeError(e):e?_.updateResource(t,e):t},networkHelpers:{handleStatusCode:S.a,requestPUT:z.d}}}),D=x.actions,H=(D.createTileType.perform,D.deleteTileType.perform,D.getTileType.perform,D.getTileTypes.perform),U=(D.updateTileType.perform,x.selectors),L=U.resource,K=L.getResource,F=(L.getResourceById,U.createTileType.request),I=(F.getResource,F.isPerforming,U.deleteTileType.request.getResource,U.getTileType.request),J=(I.getResource,I.isPerforming,U.getTileTypes.request),M=(J.getResource,J.isPerforming),B=U.updateTileType.request;B.getResource,B.isPerforming;a.d(t,"TileEditor",function(){return V});var V=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.match.params,a=e.GetTileAction,r=e.GetTileTypesAction;t&&t.id&&a({urlParams:{id:t.id}}),r()}},{key:"render",value:function(){var e=this.props,t=e.tile,a=e.tileTypes,r=e.match.params,n=e.isRetrievingGetTile,o=e.isRetrievingGetTileTypes;if(n||o)return s.a.createElement("div",null,"Loading....");if(!a.length)return null;var c={initialValues:r&&r.id&&t(r.id)},i=a&&Object.values(a[0]);return s.a.createElement("div",{className:"animated fadeIn"},s.a.createElement(C,Object.assign({tileTypes:i},c)))}}]),t}(l.Component);V=Object(w.a)(function(e,t){return{tileTypes:K(e,t),tile:function(t){var a=Object(R.d)(e,R.g,t);return console.log(a),a?a[t]:null},isRetrievingGetTileTypes:M(e,t),isRetrievingGetTile:Object(R.j)(e,t)}},function(e){return{GetTileAction:function(t){return e(Object(R.c)(t))},GetTileTypesAction:function(t){return e(H(t))}}})(V);t.default=V}}]);
//# sourceMappingURL=37.de53ff12.chunk.js.map