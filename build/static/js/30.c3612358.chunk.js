(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{553:function(e,t,r){"use strict";t.a={base:"localhost"===window.location.hostname?"https://dev.strikepro.ru":"",api:{login:"/dashboard/auth/login",logout:"/dashboard/auth/logout",posts:"/dashboard/blog/posts",post:"/dashboard/blog/post",categories:"/dashboard/blog/categories",category:"/dashboard/blog/category",slides:"/dashboard/slides",tiles:"/dashboard/mainfeeds",tile_types:"/dashboard/mainfeed/types",tile:"/dashboard/mainfeed",nomenclature:"/dashboard/nomenclature",nomenclatures:"/dashboard/nomenclatures",nomenclatureCharacteristic:"/dashboard/nomenclature/characteristic",typesOfNomenclature:"/dashboard/nomenclature/characteristic",fileupload:"/dashboard/fileupload"}}},555:function(e,t,r){"use strict";r.d(t,"c",function(){return n}),r.d(t,"b",function(){return o}),r.d(t,"a",function(){return c}),r.d(t,"d",function(){return i});var a=r(547),n=function(e){return Object(a.a)({method:"POST",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}},e?{body:JSON.stringify(e)}:{})},o=function(){return{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}}},c=function(){return{method:"DELETE",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}}},i=function(e){return{method:"PUT",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(e)}}},556:function(e,t,r){"use strict";var a=r(28),n=Object(a.a)();t.a=n},557:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var a=r(556),n=function(e){var t=e.status;return 401===t?(a.a.push("/login"),e):404===t?(a.a.push("/404"),e):e}},558:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var a=r(547),n=r(552),o=r(41),c=r(185),i=function e(t){var r=this;Object(c.a)(this,e),this.resourceName=null,this.mergeResourceAndPayload=function(e,t){return t.forEach(function(t){e[r.resourceName][r.resourceName][t.id]=t,e[r.resourceName].metadata={data:[].concat(Object(o.a)(e[r.resourceName].metadata.data),[t.id])}}),e},this.removePayloadFromResources=function(e,t){return t?(console.log("removePayloadFromResources: ",r,e,t),delete e[r.resourceName][r.resourceName][t],e[r.resourceName].metadata.data=e[r.resourceName].metadata.data.filter(function(e){return e!==t}),e):(console.warn("payloadID undefined"),e)},this.payloadToResource=function(e){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c={entities:Object(n.a)({},r.resourceName,(t={},Object(n.a)(t,r.resourceName,{}),Object(n.a)(t,"metadata",{}),t)),result:[]};return e&&e.forEach(function(e){c.result.push(e.id),c.entities[r.resourceName][r.resourceName][e.id]=e}),c.entities[r.resourceName].metadata=Object(a.a)({},o,{data:c.result}),c},this.updateResource=function(e,t){return e[r.resourceName][r.resourceName][t.id]=t,e},this.normalizeError=function(e){return e.errors||(e.errors={}),{entities:Object(a.a)({},e,{message:[e.message]}),result:{errors:e}}},this.resourceName=t}},559:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var a=function(e){return function(t,r,a){return t.errors?e.normalizeError(t):t?e.removePayloadFromResources(r,a.id):r}}},568:function(e,t,r){"use strict";r.d(t,"a",function(){return m});var a=r(0),n=r.n(a),o=r(685),c=r(686),i=r(573),l=r(574),s=r(560),u=r(595),d=r(596),m=function(e){var t=e.input,r=e.label,a=e.type,m=e.placeholder,p=e.required,f=e.icon,h=e.meta,b=h.touched,y=h.error;return n.a.createElement(o.a,{className:b?y?"":"was-validated":""},r&&n.a.createElement(c.a,null,r),n.a.createElement(i.a,{className:"mb-3"},f&&n.a.createElement(l.a,{addonType:"prepend"},n.a.createElement(s.a,null,n.a.createElement("i",{className:f}))),n.a.createElement(u.a,Object.assign({},t,{type:a,valid:!!b&&!y,className:b&&y?"form-control-warning is-invalid":"",placeholder:m||r,required:p})),n.a.createElement(d.a,{valid:!!b&&!y,className:"help-block"},y)))}},576:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var a=function(e){var t={_error:e.message?e.message[0]:null};for(var r in e.errors)Array.isArray(e.errors[r])&&(t[r]=e.errors[r][0]);return t}},586:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var a=function(e){return e?void 0:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}},594:function(e,t,r){"use strict";var a=r(185),n=r(186),o=r(188),c=r(187),i=r(189),l=r(0),s=r.n(l),u=r(685),d=r(686),m=r(595),p=r(648),f=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.input,r=e.label,a=e.type,n=e.data,o=e.meta,c=o.touched,i=o.error,l=e.valueKey,f=e.labelKey;return s.a.createElement(u.a,null,s.a.createElement(d.a,null,r),s.a.createElement(m.a,Object.assign({type:a},t),s.a.createElement("option",null,"\u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e..."),Array.isArray(n)&&n.map(function(e,r){return s.a.createElement("option",{key:r,selected:e[l]===t.value,value:e[l]},e[f])})),c&&i&&s.a.createElement(p.a,{color:"danger"},i))}}]),t}(l.Component);f.defaultProps={valueKey:"id",labelKey:"name"},t.a=f},605:function(e,t,r){"use strict";r.d(t,"g",function(){return s}),r.d(t,"a",function(){return p}),r.d(t,"b",function(){return f}),r.d(t,"c",function(){return h}),r.d(t,"f",function(){return b}),r.d(t,"h",function(){return y}),r.d(t,"j",function(){return w}),r.d(t,"k",function(){return N}),r.d(t,"e",function(){return E}),r.d(t,"d",function(){return v}),r.d(t,"l",function(){return k}),r.d(t,"i",function(){return j});var a=r(191),n=r(558),o=r(553),c=r(557),i=r(555),l=r(559),s="tiles",u=new n.a(s),d=Object(a.b)(s)({createTile:{method:"POST",url:"".concat(o.a.base).concat(o.a.api.tile),normalizer:function(e,t,r,a,n,o){return console.log("createTile: ",e,t,r,a,n,o),e?e.errors||e.message?u.normalizeError(e):t.hasOwnProperty(s)?u.mergeResourceAndPayload(t,[e]):u.payloadToResource([e]):null},networkHelpers:{handleStatusCode:function(e){Object(c.a)(e)},requestPOST:i.c}},deleteTile:{method:"DELETE",url:"".concat(o.a.base).concat(o.a.api.tile,"/::id"),normalizer:Object(l.a)(u),networkHelpers:{handleStatusCode:c.a,requestDELETE:i.a}},getTile:{method:"GET",url:"".concat(o.a.base).concat(o.a.api.tile,"/::id"),normalizer:function(e){return u.payloadToResource([e])},networkHelpers:{handleStatusCode:c.a,requestGET:i.b}},getTiles:{method:"GET",url:"".concat(o.a.base).concat(o.a.api.tiles),normalizer:function(e){return!e&&e.error?null:Array.isArray(e)?u.payloadToResource(e):u.payloadToResource(e.data,e)},networkHelpers:{handleStatusCode:c.a,requestGET:i.b}},updateTile:{method:"PUT",url:"".concat(o.a.base).concat(o.a.api.tile,"/::id"),normalizer:function(e,t){return e.errors?u.normalizeError(e):e?u.updateResource(t,e):t},networkHelpers:{handleStatusCode:c.a,requestPUT:i.d}}}),m=d.actions,p=m.createTile.perform,f=m.deleteTile.perform,h=m.getTile.perform,b=m.getTiles.perform,y=m.updateTile.perform,T=d.selectors,g=T.resource,E=g.getResource,v=g.getResourceById,O=T.createTile.request,j=(O.getResource,O.isPerforming),R=(T.deleteTile.request.getResource,T.getTile.request),w=(R.getResource,R.isPerforming),P=T.getTiles.request,N=(P.getResource,P.isPerforming),C=T.updateTile.request,k=(C.getResource,C.isPerforming)},644:function(e,t,r){"use strict";var a=r(185),n=r(186),o=r(188),c=r(187),i=r(192),l=r(189),s=r(0),u=r.n(s),d=r(685),m=r(686),p=r(172),f=(r(661),r(825)),h=function(e){function t(e){var r;return Object(a.a)(this,t),(r=Object(o.a)(this,Object(c.a)(t).call(this,e))).handleChange=r.handleChange.bind(Object(i.a)(r)),r}return Object(l.a)(t,e),Object(n.a)(t,[{key:"handleChange",value:function(e){var t;return(0,this.props.input.onChange)((t=e,Object(f.a)(t,"yyyy-MM-d h:mm:ss")))}},{key:"render",value:function(){var e=this.props,t=e.label,r=e.input.value;return u.a.createElement("div",{className:"controls"},u.a.createElement(d.a,null,u.a.createElement(m.a,null,t),u.a.createElement(p.a,{locale:"ru",minDate:new Date,selected:new Date(r||new Date),onChange:this.handleChange,className:"form-control full-width"})))}}]),t}(s.Component);t.a=h},835:function(e,t,r){"use strict";r.r(t);var a=r(185),n=r(186),o=r(188),c=r(187),i=r(189),l=r(0),s=r.n(l),u=r(548),d=r(549),m=r(648),p=r(685),f=r(561),h=r(777),b=r(828),y=r(826),T=r(594),g=r(644),E=r(686),v=r(595),O=function(e){var t=e.input,r=e.label,a=e.type,n=e.meta,o=n.touched,c=n.error;return s.a.createElement("div",{className:"controls"},s.a.createElement(p.a,null,s.a.createElement(E.a,null,r),s.a.createElement(v.a,Object.assign({style:{padding:"inherit",height:"35px"},type:a},t))),s.a.createElement("p",{className:"help-block"},o&&c&&s.a.createElement("span",null,c)))},j=r(568),R=r(191),w=r(605),P=r(576),N=r(66),C=r(586),k=function(e){function t(){var e,r;Object(a.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(r=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).onSubmit=function(e){var t=r.props.history;return e.hasOwnProperty("id")?r.props.UpdateTileAction({body:e,urlParams:{id:e.id}}).then(function(e){var r=e.normalizedPayload;if(r&&r.errors)throw r;t.push("/tile-list")}).catch(function(e){throw new h.a(Object(P.a)(e))}):r.props.CreateTileAction({body:e}).then(function(e){var r=e.normalizedPayload;if(r&&r.errors)throw r;t.push("/tile-list")}).catch(function(e){throw new h.a(Object(P.a)(e))})},r}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.error,r=e.handleSubmit,a=e.tileTypes;return s.a.createElement("form",{onSubmit:r(this.onSubmit)},s.a.createElement(u.a,null,s.a.createElement(d.a,{xs:"12",md:"6",lg:"4"},s.a.createElement(b.a,{name:"resource_id",component:j.a,label:"resource_id",type:"text",validate:[C.a]})),a&&s.a.createElement(d.a,{xs:"12",md:"6",lg:"4"},s.a.createElement(b.a,{name:"resource_type",component:T.a,valueKey:"name",label:"resource_type",type:"select",data:a})),s.a.createElement(d.a,{xs:"12",md:"6",lg:"4"},s.a.createElement(b.a,{name:"cols",component:j.a,label:"cols",type:"text"})),s.a.createElement(d.a,{xs:"12",md:"6",lg:"4"},s.a.createElement(b.a,{name:"background_color",component:O,label:"background_color",type:"color"})),s.a.createElement(d.a,{xs:"12",md:"6",lg:"4"},s.a.createElement(b.a,{name:"public_at",label:"public_at",component:g.a}))),t&&s.a.createElement(u.a,null,s.a.createElement(d.a,{xs:"12"},s.a.createElement(m.a,{color:"danger"},t))),s.a.createElement(u.a,null,s.a.createElement(d.a,{xs:"6"},s.a.createElement("div",{className:"controls"},s.a.createElement(p.a,null,s.a.createElement(f.a,{color:"primary",type:"submit",className:"px-4"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))))}}]),t}(l.Component);k.defaultProps={},k=Object(y.a)({form:"TileEditorForm"})(k),k=Object(R.a)(function(e,t){return{isRetrievingCreateTile:Object(w.i)(e,t),isRetrievingUpdateTile:Object(w.l)(e,t)}},function(e){return{CreateTileAction:function(t){return e(Object(w.a)(t))},UpdateTileAction:function(t){return e(Object(w.h)(t))}}})(k);k=Object(N.k)(k);var A=r(558),q=r(553),S=r(557),z=r(555),G=r(559),_=new A.a("tileTypes"),x=Object(R.b)("tileTypes")({createTileType:{method:"POST",url:"".concat(q.a.base).concat(q.a.api.tile_types),normalizer:function(e,t,r){return e?e.errors?_.normalizeError(e):t.hasOwnProperty("tileTypes")?_.mergeResourceAndPayload(t,[e]):_.payloadToResource([e]):null},networkHelpers:{handleStatusCode:S.a,requestPOST:z.c}},deleteTileType:{method:"DELETE",url:"".concat(q.a.base).concat(q.a.api.tile_types,"/::id"),normalizer:Object(G.a)(_),networkHelpers:{handleStatusCode:S.a,requestDELETE:z.a}},getTileType:{method:"GET",url:"".concat(q.a.base).concat(q.a.api.tile_types,"/::id"),normalizer:function(e){return _.payloadToResource([e])},networkHelpers:{handleStatusCode:S.a,requestGET:z.b}},getTileTypes:{method:"GET",url:"".concat(q.a.base).concat(q.a.api.tile_types),normalizer:function(e){return!e&&e.error?null:Array.isArray(e)?_.payloadToResource(e.map(function(e,t){return{id:t,name:e}})):_.payloadToResource(e.data,e)},networkHelpers:{handleStatusCode:S.a,requestGET:z.b}},updateTileType:{method:"PUT",url:"".concat(q.a.base).concat(q.a.api.tile_types,"/::id"),normalizer:function(e,t){return e.errors?_.normalizeError(e):e?_.updateResource(t,e):t},networkHelpers:{handleStatusCode:S.a,requestPUT:z.d}}}),D=x.actions,H=(D.createTileType.perform,D.deleteTileType.perform,D.getTileType.perform,D.getTileTypes.perform),U=(D.updateTileType.perform,x.selectors),L=U.resource,K=L.getResource,F=(L.getResourceById,U.createTileType.request),I=(F.getResource,F.isPerforming,U.deleteTileType.request.getResource,U.getTileType.request),J=(I.getResource,I.isPerforming,U.getTileTypes.request),M=(J.getResource,J.isPerforming),B=U.updateTileType.request;B.getResource,B.isPerforming;r.d(t,"TileEditor",function(){return V});var V=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.match.params,r=e.GetTileAction,a=e.GetTileTypesAction;t&&t.id&&r({urlParams:{id:t.id}}),a()}},{key:"render",value:function(){var e=this.props,t=e.tile,r=e.tileTypes,a=e.match.params,n=e.isRetrievingGetTile,o=e.isRetrievingGetTileTypes;if(n||o)return s.a.createElement("div",null,"Loading....");if(!r.length)return null;var c={initialValues:a&&a.id&&t(a.id)},i=r&&Object.values(r[0]);return s.a.createElement("div",{className:"animated fadeIn"},s.a.createElement(k,Object.assign({tileTypes:i},c)))}}]),t}(l.Component);V=Object(R.a)(function(e,t){return{tileTypes:K(e,t),tile:function(t){var r=Object(w.d)(e,w.g,t);return console.log(r),r?r[t]:null},isRetrievingGetTileTypes:M(e,t),isRetrievingGetTile:Object(w.j)(e,t)}},function(e){return{GetTileAction:function(t){return e(Object(w.c)(t))},GetTileTypesAction:function(t){return e(H(t))}}})(V);t.default=V}}]);
//# sourceMappingURL=30.c3612358.chunk.js.map