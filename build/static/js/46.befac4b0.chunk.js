(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{549:function(e,t,a){"use strict";var r="";switch(window.location.hostname){case"localhost":case"admin.strikepro.ru":r="https://dev.strikepro.ru";break;case"strike.localhost":r="http://strike.localhost"}t.a={base:r,api:{login:"/dashboard/auth/login",logout:"/dashboard/auth/logout",posts:"/dashboard/blog/posts",post:"/dashboard/blog/post",categories:"/dashboard/blog/categories",category:"/dashboard/blog/category",slides:"/dashboard/slides",tiles:"/dashboard/mainfeeds",tile_types:"/dashboard/mainfeed/types",tile:"/dashboard/mainfeed",nomenclature:"/dashboard/nomenclature",nomenclatures:"/dashboard/nomenclatures",nomenclatureCharacteristic:"/dashboard/nomenclature/characteristic",typesOfNomenclature:"/dashboard/nomenclature/characteristic",fileupload:"/dashboard/fileupload",static_pages:"/dashboard/pages",url_alias:"/dashboard/url_alias"}}},551:function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"b",function(){return o}),a.d(t,"a",function(){return i}),a.d(t,"d",function(){return s});var r=a(547),n=function(e){return Object(r.a)({method:"POST",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}},e?{body:JSON.stringify(e)}:{})},o=function(){return{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}}},i=function(){return{method:"DELETE",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}}},s=function(e){return{method:"PUT",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(e)}}},555:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var r=a(288),n=function(e){var t=e.status;return 401===t?(r.a.push("#/login"),window.location.reload(),e):404===t?(r.a.push("#/404"),window.location.reload(),e):e}},556:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var r=a(547),n=a(558),o=a(18),i=a(185),s=function e(t){var a=this;Object(i.a)(this,e),this.resourceName=null,this.mergeResourceAndPayload=function(e,t){return t.forEach(function(t){e[a.resourceName][a.resourceName][t.id]=t,e[a.resourceName].metadata={data:[].concat(Object(o.a)(e[a.resourceName].metadata.data),[t.id])}}),e},this.removePayloadFromResources=function(e,t){return t?(console.log("removePayloadFromResources: ",a,e,t),delete e[a.resourceName][a.resourceName][t],e[a.resourceName].metadata.data=e[a.resourceName].metadata.data.filter(function(e){return e!==t}),e):(console.warn("payloadID undefined"),e)},this.payloadToResource=function(e){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i={entities:Object(n.a)({},a.resourceName,(t={},Object(n.a)(t,a.resourceName,{}),Object(n.a)(t,"metadata",{}),t)),result:[]};return e&&e.forEach(function(e){i.result.push(e.id),i.entities[a.resourceName][a.resourceName][e.id]=e}),i.entities[a.resourceName].metadata=Object(r.a)({},o,{data:i.result}),i},this.updateResource=function(e,t){return e[a.resourceName][a.resourceName][t.id]=t,e},this.normalizeError=function(e){return e.errors||(e.errors={}),{entities:Object(r.a)({},e,{message:[e.message]}),result:{errors:e}}},this.resourceName=t}},557:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r=function(e){return function(t,a,r){return t.errors?e.normalizeError(t):t?e.removePayloadFromResources(a,r.id):a}}},559:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var r=a(0),n=a.n(r),o=a(552),i=a(553),s=a(550),c=a(554),l=a(548),u=a(563),d=function(e){var t=e.header,a=e.children,r=e.footer;return n.a.createElement("div",{className:"animated fadeIn"},n.a.createElement(o.a,null,n.a.createElement(i.a,{xs:"12"},n.a.createElement(s.a,null,t&&n.a.createElement(c.a,null,n.a.createElement("strong",null,t)),n.a.createElement(l.a,{className:"card-body"},a),r&&n.a.createElement(u.a,{className:"card-footer"},r)))))};t.b=d},566:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(565),i=function(e){var t=e.onDelete,a=e.label,r=e.confirmMessage;return n.a.createElement(o.a,{color:"danger",onClick:function(){window.confirm(r)&&t()}},a)};i.defaultProps={label:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",confirmMessage:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c?"},t.a=i},567:function(e,t,a){"use strict";var r=a(547),n=a(185),o=a(186),i=a(188),s=a(187),c=a(189),l=a(0),u=a.n(l),d=a(66),m=a(190),p=a(668),f=a(669),h=a(553),g=a(667),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).onMovePageHistory=function(e){var t=a.props,r=t.match;return t.history.push("".concat(r.path,"?page=").concat(e)),e},a.onMovePage=function(e,t){e.preventDefault();var r=a.props,n=r.metaData;return(0,r.onMovePage)(n.current_page+t),a.onMovePageHistory(n.current_page+t),t},a.state=a.initialState,a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"onPagination",value:function(e){var t=this,a=e.last_page,r=[],n=this.state,o=n.page_min,i=n.page_max,s=n.current_page;s===i?i<a&&(i+=1,o+=1):s===o+1&&o>0&&(i-=1,o-=1),i!==this.state.page_max&&o!==this.state.page_max&&this.setState(i,o);for(var c=function(e){var a=e+1;a===s?r.push(u.a.createElement(p.a,{key:e,active:!0},u.a.createElement(f.a,{href:"#"},a))):r.push(u.a.createElement(p.a,{key:e},u.a.createElement(f.a,{onClick:function(e){e.preventDefault();var r=t.props.onMovePage;t.onMovePageHistory(a),r(a)}},a)))},l=o;l<a;l++)c(l);return r}},{key:"render",value:function(){var e=this,t=this.props.metaData;return t&&t&&t.last_page>1?u.a.createElement(h.a,{xs:"12"},u.a.createElement("nav",null,u.a.createElement(g.a,{className:"justify-content-center"},t.current_page>1&&u.a.createElement(p.a,null,u.a.createElement(f.a,{onClick:function(t){return e.onMovePage(t,-1)},previous:!0,href:"#"},"Prev")),this.onPagination(t),t.last_page>t.current_page&&u.a.createElement(p.a,null,u.a.createElement(f.a,{onClick:function(t){return e.onMovePage(t,1)},next:!0,href:"#"},"Next"))))):null}},{key:"initialState",get:function(){return{page_min:0,page_max:5}}}]),t}(l.Component),v=(b=Object(d.k)(b),a(559)),E=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).getPaginationParam=function(){try{var e=a.props.location.search.match(/page=[0-9]/gi);return e&&e.length?e[0].match(/[0-9]/g)[0]:1}catch(t){return console.log("Error getPaginationParam: ",t),1}},a.onDelete=function(e){var t=a.props.DeleteAction;return t&&t({urlParams:{id:e}})},a.onGetList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=a.props.GetAction;return t&&t({query:{page:e}})},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.onGetList(this.getPaginationParam())}},{key:"render",value:function(){var e=this.props,t=e.list,a=e.isRetrieving,r=e.ListComponent,n=e.header;if(a&&!t.length)return u.a.createElement("div",null,"Loading...");if(!t.length)return null;var o=Object.values(t[0]),i=t[1];return u.a.createElement(v.a,{header:n},r&&u.a.createElement(r,{data:o,metaData:i,onDelete:this.onDelete}),u.a.createElement(b,{metaData:i,onMovePage:this.onGetList}))}}]),t}(l.Component);E.defaultProps={header:null,list:[],DeleteAction:function(){return null},GetAction:function(){return null},ListComponent:function(){return u.a.createElement("div",null,"empty")}};E=Object(m.a)(function(e,t){var a=t.GetList,n=t.isRetrieving;return a||console.log("GetList in undefined"),Object(r.a)({},a?{list:a(e,t)}:{},n?{isRetrieving:n(e,t)}:{})},function(e,t){var a=t.DeleteAction,n=t.GetAction;return a||console.log("DeleteAction in undefined"),n||console.log("GetAction in undefined"),Object(r.a)({},a?{DeleteAction:function(t){return e(a(t))}}:{},n?{GetAction:function(t){return e(n(t))}}:{})})(E),E=Object(d.k)(E);t.a=E},578:function(e,t,a){"use strict";var r=a(11),n=a(67),o=a(0),i=a.n(o),s=a(24),c=a.n(s),l=a(40),u=a.n(l),d=a(542),m={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,inverse:Object(d.h)(c.a.bool,'Please use the prop "dark"'),dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:d.q,responsiveTag:d.q,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},p=function(e){var t=e.className,a=e.cssModule,o=e.size,s=e.bordered,c=e.borderless,l=e.striped,m=e.inverse,p=e.dark,f=e.hover,h=e.responsive,g=e.tag,b=e.responsiveTag,v=e.innerRef,E=Object(n.a)(e,["className","cssModule","size","bordered","borderless","striped","inverse","dark","hover","responsive","tag","responsiveTag","innerRef"]),y=Object(d.m)(u()(t,"table",!!o&&"table-"+o,!!s&&"table-bordered",!!c&&"table-borderless",!!l&&"table-striped",!(!p&&!m)&&"table-dark",!!f&&"table-hover"),a),j=i.a.createElement(g,Object(r.a)({},E,{ref:v,className:y}));if(h){var O=!0===h?"table-responsive":"table-responsive-"+h;return i.a.createElement(b,{className:O},j)}return j};p.propTypes=m,p.defaultProps={tag:"table",responsiveTag:"div"},t.a=p},586:function(e,t,a){"use strict";a.d(t,"g",function(){return l}),a.d(t,"a",function(){return p}),a.d(t,"b",function(){return f}),a.d(t,"c",function(){return h}),a.d(t,"f",function(){return g}),a.d(t,"h",function(){return b}),a.d(t,"j",function(){return k}),a.d(t,"k",function(){return _}),a.d(t,"e",function(){return y}),a.d(t,"d",function(){return j}),a.d(t,"l",function(){return T}),a.d(t,"i",function(){return A});var r=a(190),n=a(549),o=a(555),i=a(551),s=a(556),c=a(557),l="UrlAlias",u=new s.a(l),d=Object(r.b)(l)({createUrlAlias:{method:"POST",url:"".concat(n.a.base).concat(n.a.api.url_alias),normalizer:function(e,t,a){return console.log("createUrlAlias: ",e,t,a),e?e.errors?u.normalizeError(e):t.hasOwnProperty(l)?u.mergeResourceAndPayload(t,[e]):u.payloadToResource([e]):null},networkHelpers:{handleStatusCode:o.a,requestPOST:i.c}},deleteUrlAlias:{method:"DELETE",url:"".concat(n.a.base).concat(n.a.api.url_alias,"/::id"),normalizer:Object(c.a)(u),networkHelpers:{handleStatusCode:o.a,requestDELETE:i.a}},getUrlAlias:{method:"GET",url:"".concat(n.a.base).concat(n.a.api.url_alias,"/::id"),normalizer:function(e){return u.payloadToResource([e])},networkHelpers:{handleStatusCode:o.a,requestGET:i.b}},getUrlAliases:{method:"GET",url:"".concat(n.a.base).concat(n.a.api.url_alias),normalizer:function(e){return!e&&e.error?null:Array.isArray(e)?u.payloadToResource(e):u.payloadToResource(e.data,e)},networkHelpers:{handleStatusCode:o.a,requestGET:i.b}},updateUrlAlias:{method:"PUT",url:"".concat(n.a.base).concat(n.a.api.url_alias,"/::id"),normalizer:function(e,t){return e.errors?u.normalizeError(e):e?u.updateResource(t,e):t},networkHelpers:{handleStatusCode:o.a,requestPUT:i.d}}}),m=d.actions,p=m.createUrlAlias.perform,f=m.deleteUrlAlias.perform,h=m.getUrlAlias.perform,g=m.getUrlAliases.perform,b=m.updateUrlAlias.perform,v=d.selectors,E=v.resource,y=E.getResource,j=E.getResourceById,O=v.createUrlAlias.request,A=(O.getResource,O.isPerforming),P=(v.deleteUrlAlias.request.getResource,v.getUrlAlias.request),k=(P.getResource,P.isPerforming),N=v.getUrlAliases.request,_=(N.getResource,N.isPerforming),R=v.updateUrlAlias.request,T=(R.getResource,R.isPerforming)},835:function(e,t,a){"use strict";a.r(t),a.d(t,"URLAliasList",function(){return g});var r=a(185),n=a(186),o=a(188),i=a(187),s=a(189),c=a(0),l=a.n(c),u=a(191),d=a(578),m=a(565),p=a(567),f=a(586),h=a(566),g=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,{header:"\u0421\u043f\u0438\u0441\u043e\u043a URL \u043f\u0441\u0435\u0432\u0434\u043e\u043d\u0438\u043c\u043e\u0432",DeleteAction:f.b,GetAction:f.f,GetList:f.e,isRetrieving:f.k,ListComponent:function(e){var t=e.onDelete,a=e.data;return l.a.createElement(d.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"id"),l.a.createElement("th",null,"url"),l.a.createElement("th",null,"alias_url"),l.a.createElement("th",null,"created_at"),l.a.createElement("th",null,"updated_at"),l.a.createElement("th",null))),l.a.createElement("tbody",null,a&&a.map(function(e,a){return l.a.createElement("tr",{key:"".concat(a)},l.a.createElement("td",null,e.id),l.a.createElement("td",null,e.url),l.a.createElement("td",null,e.alias_url),l.a.createElement("td",null,e.created_at),l.a.createElement("td",null,e.updated_at),l.a.createElement("td",null,l.a.createElement(m.a,{color:"warning"},l.a.createElement(u.Link,{to:"/url-alias-editor/".concat(e.id)},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"))," ",l.a.createElement(h.a,{onDelete:function(){return t(e.id)}})))})))}})}}]),t}(c.Component);t.default=g}}]);
//# sourceMappingURL=46.befac4b0.chunk.js.map