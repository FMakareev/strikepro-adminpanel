(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{553:function(e,t,a){"use strict";t.a={base:"https://dev.strikepro.ru",api:{login:"/dashboard/auth/login",logout:"/dashboard/auth/logout",posts:"/dashboard/blog/posts",post:"/dashboard/blog/post",categories:"/dashboard/blog/categories",category:"/dashboard/blog/category",slides:"/dashboard/slides",tiles:"/dashboard/mainfeeds",tile_types:"/dashboard/mainfeed/types",tile:"/dashboard/mainfeed",nomenclature:"/dashboard/nomenclature",nomenclatures:"/dashboard/nomenclatures",nomenclatureCharacteristic:"/dashboard/nomenclature/characteristic",typesOfNomenclature:"/dashboard/nomenclature/characteristic",fileupload:"/dashboard/fileupload"}}},555:function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"b",function(){return o}),a.d(t,"a",function(){return c}),a.d(t,"d",function(){return u});var r=a(547),n=function(e){return Object(r.a)({method:"POST",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}},e?{body:JSON.stringify(e)}:{})},o=function(){return{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}}},c=function(){return{method:"DELETE",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}}},u=function(e){return{method:"PUT",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(e)}}},556:function(e,t,a){"use strict";var r=a(28),n=Object(r.a)();t.a=n},557:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var r=a(556),n=function(e){var t=e.status;return 401===t?(r.a.push("/login"),e):404===t?(r.a.push("/404"),e):e}},558:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var r=a(547),n=a(552),o=a(41),c=a(185),u=function e(t){var a=this;Object(c.a)(this,e),this.resourceName=null,this.mergeResourceAndPayload=function(e,t){return t.forEach(function(t){e[a.resourceName][a.resourceName][t.id]=t,e[a.resourceName].metadata={data:[].concat(Object(o.a)(e[a.resourceName].metadata.data),[t.id])}}),e},this.removePayloadFromResources=function(e,t){return t?(console.log("removePayloadFromResources: ",a,e,t),delete e[a.resourceName][a.resourceName][t],e[a.resourceName].metadata.data=e[a.resourceName].metadata.data.filter(function(e){return e!==t}),e):(console.warn("payloadID undefined"),e)},this.payloadToResource=function(e){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c={entities:Object(n.a)({},a.resourceName,(t={},Object(n.a)(t,a.resourceName,{}),Object(n.a)(t,"metadata",{}),t)),result:[]};return e&&e.forEach(function(e){c.result.push(e.id),c.entities[a.resourceName][a.resourceName][e.id]=e}),c.entities[a.resourceName].metadata=Object(r.a)({},o,{data:c.result}),c},this.updateResource=function(e,t){return e[a.resourceName][a.resourceName][t.id]=t,e},this.normalizeError=function(e){return e.errors||(e.errors={}),{entities:Object(r.a)({},e,{message:[e.message]}),result:{errors:e}}},this.resourceName=t}},559:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r=function(e){return function(t,a,r){return t.errors?e.normalizeError(t):t?e.removePayloadFromResources(a,r.id):a}}},569:function(e,t,a){"use strict";var r=a(185),n=a(186),o=a(189),c=a(187),u=a(188),i=a(0),s=a.n(i),l=a(601),d=a(602),m=a(549),g=a(600),p=a(66),f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).onMovePageHistory=function(e){var t=a.props,r=t.match;return t.history.push("".concat(r.path,"?page=").concat(e)),e},a.onMovePage=function(e,t){e.preventDefault();var r=a.props,n=r.metaData;return(0,r.onMovePage)(n.current_page+t),a.onMovePageHistory(n.current_page+t),t},a.state=a.initialState,a}return Object(u.a)(t,e),Object(n.a)(t,[{key:"onPagination",value:function(e){var t=this,a=e.last_page,r=[],n=this.state,o=n.page_min,c=n.page_max,u=n.current_page;u===c?c<a&&(c+=1,o+=1):u===o+1&&o>0&&(c-=1,o-=1),c!==this.state.page_max&&o!==this.state.page_max&&this.setState(c,o);for(var i=function(e){var a=e+1;a===u?r.push(s.a.createElement(l.a,{key:e,active:!0},s.a.createElement(d.a,{href:"#"},a))):r.push(s.a.createElement(l.a,{key:e},s.a.createElement(d.a,{onClick:function(e){e.preventDefault();var r=t.props.onMovePage;t.onMovePageHistory(a),r(a)}},a)))},m=o;m<a;m++)i(m);return r}},{key:"render",value:function(){var e=this,t=this.props.metaData;return t&&t&&t.last_page>1?s.a.createElement(m.a,{xs:"12"},s.a.createElement("nav",null,s.a.createElement(g.a,{className:"justify-content-center"},t.current_page>1&&s.a.createElement(l.a,null,s.a.createElement(d.a,{onClick:function(t){return e.onMovePage(t,-1)},previous:!0,href:"#"},"Prev")),this.onPagination(t),t.last_page>t.current_page&&s.a.createElement(l.a,null,s.a.createElement(d.a,{onClick:function(t){return e.onMovePage(t,1)},next:!0,href:"#"},"Next"))))):null}},{key:"initialState",get:function(){return{page_min:0,page_max:5}}}]),t}(i.Component);f=Object(p.k)(f),t.a=f},582:function(e,t,a){"use strict";a.d(t,"a",function(){return m}),a.d(t,"b",function(){return g}),a.d(t,"e",function(){return p}),a.d(t,"d",function(){return f}),a.d(t,"g",function(){return h}),a.d(t,"c",function(){return v}),a.d(t,"f",function(){return E}),a.d(t,"h",function(){return N}),a.d(t,"j",function(){return P}),a.d(t,"i",function(){return j}),a.d(t,"k",function(){return T});var r=a(191),n=a(553),o=a(557),c=a(555),u=a(558),i=a(559),s=new u.a("categories"),l=Object(r.b)("categories")({createCategory:{method:"POST",url:"".concat(n.a.base).concat(n.a.api.category),normalizer:function(e,t){return!e&&e.error?null:t.hasOwnProperty("categories")?s.mergeResourceAndPayload(t,[e]):s.payloadToResource([e])},networkHelpers:{handleStatusCode:o.a,requestPOST:c.c}},deleteCategory:{method:"DELETE",url:"".concat(n.a.base).concat(n.a.api.category,"/::id"),normalizer:Object(i.a)(s),networkHelpers:{handleStatusCode:o.a,requestDELETE:c.a}},getCategory:{method:"GET",url:"".concat(n.a.base).concat(n.a.api.category,"/::id"),normalizer:function(e){return s.payloadToResource([e])},networkHelpers:{handleStatusCode:o.a,requestGET:c.b}},getCategories:{method:"GET",url:"".concat(n.a.base).concat(n.a.api.categories),normalizer:function(e){return!e&&e.error?null:Array.isArray(e)?s.payloadToResource(e):s.payloadToResource(e.data,e)},networkHelpers:{handleStatusCode:o.a,requestGET:c.b}},updateCategory:{method:"PUT",url:"".concat(n.a.base).concat(n.a.api.category,"/::id"),normalizer:function(e,t){return e?s.updateResource(t,e):t},networkHelpers:{handleStatusCode:o.a,requestPUT:c.d}}}),d=l.actions,m=d.createCategory.perform,g=d.deleteCategory.perform,p=d.getCategory.perform,f=d.getCategories.perform,h=d.updateCategory.perform,y=l.selectors,b=y.resource,v=b.getResource,E=b.getResourceById,C=y.createCategory.request,j=(C.getResource,C.isPerforming),O=(y.deleteCategory.request.getResource,y.getCategory.request),P=(O.getResource,O.isPerforming),k=y.getCategories.request,N=(k.getResource,k.isPerforming),R=y.updateCategory.request,T=(R.getResource,R.isPerforming)},847:function(e,t,a){"use strict";a.r(t);var r=a(185),n=a(186),o=a(189),c=a(187),u=a(192),i=a(188),s=a(0),l=a.n(s),d=a(548),m=a(549),g=a(550),p=a(551),f=a(546),h=a(579),y=a(191),b=a(582),v=a(569),E=a(561),C=a(193),j=function(e){var t=e.id,a=e.name,r=e.created_at,n=e.updated_at,o=e.onDelete;return l.a.createElement("tr",null,l.a.createElement("td",null,t),l.a.createElement("td",null,a),l.a.createElement("td",null,r),l.a.createElement("td",null,n),l.a.createElement("td",null,l.a.createElement(E.a,{color:"warning"},l.a.createElement(C.Link,{to:"/category-editor/".concat(t)},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"))," ",l.a.createElement(E.a,{color:"danger",onClick:function(){o(t)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))};a.d(t,"CategoryList",function(){return O});var O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).onGetCategory=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return a.props.GetCategoriesAction({query:{page:e}})},a.onGetCategory=a.onGetCategory.bind(Object(u.a)(a)),a.onDeleteCategory=a.onDeleteCategory.bind(Object(u.a)(a)),a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.location.search.match(/[0-9]/g);e&&e.length?this.onGetCategory(e[0]):this.onGetCategory()}},{key:"onDeleteCategory",value:function(e){return this.props.DeleteCategoryAction({urlParams:{id:e}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.categories;if(t.isRetrievingGetPosts&&!a)return l.a.createElement("div",null,"Loading...");if(!a.length)return null;var r=Object.values(a[0]),n=a[1];return l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement(d.a,null,l.a.createElement(m.a,{xs:"12"},l.a.createElement(g.a,null,l.a.createElement(p.a,null,l.a.createElement("strong",null,"Categories")),l.a.createElement(f.a,{className:"card-body"},l.a.createElement(h.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"id"),l.a.createElement("th",null,"\u0418\u043c\u044f"),l.a.createElement("th",null,"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f"),l.a.createElement("th",null,"\u0414\u0430\u0442\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f"),l.a.createElement("th",null))),l.a.createElement("tbody",null,r&&r.map(function(t,a){return l.a.createElement(j,Object.assign({key:a},t,{onDelete:e.onDeleteCategory}))})))))),l.a.createElement(v.a,{metaData:n,onMovePage:this.onGetSlides})))}}]),t}(s.Component);O=Object(y.a)(function(e,t){return{categories:Object(b.c)(e,t),isRetrievingCategories:Object(b.h)(e,t)}},function(e){return{GetCategoriesAction:function(t){return e(Object(b.d)(t))},DeleteCategoryAction:function(t){return e(Object(b.b)(t))}}})(O);t.default=O}}]);
//# sourceMappingURL=51.cef7ae1e.chunk.js.map