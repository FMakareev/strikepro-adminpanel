(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{553:function(e,t,a){"use strict";t.a={base:"https://dev.strikepro.ru",api:{login:"/dashboard/auth/login",logout:"/dashboard/auth/logout",posts:"/dashboard/blog/posts",post:"/dashboard/blog/post",categories:"/dashboard/blog/categories",category:"/dashboard/blog/category",slides:"/dashboard/slides",tiles:"/dashboard/mainfeeds",tile_types:"/dashboard/mainfeed/types",tile:"/dashboard/mainfeed",nomenclature:"/dashboard/nomenclature",nomenclatures:"/dashboard/nomenclatures",nomenclatureCharacteristic:"/dashboard/nomenclature/characteristic",typesOfNomenclature:"/dashboard/nomenclature/characteristic",fileupload:"/dashboard/fileupload"}}},555:function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"b",function(){return o}),a.d(t,"a",function(){return s}),a.d(t,"d",function(){return c});var r=a(547),n=function(e){return Object(r.a)({method:"POST",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}},e?{body:JSON.stringify(e)}:{})},o=function(){return{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}}},s=function(){return{method:"DELETE",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}}},c=function(e){return{method:"PUT",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(e)}}},556:function(e,t,a){"use strict";var r=a(28),n=Object(r.a)();t.a=n},557:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var r=a(556),n=function(e){var t=e.status;return 401===t?(r.a.push("/login"),e):404===t?(r.a.push("/404"),e):e}},558:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var r=a(547),n=a(552),o=a(41),s=a(185),c=function e(t){var a=this;Object(s.a)(this,e),this.resourceName=null,this.mergeResourceAndPayload=function(e,t){return t.forEach(function(t){e[a.resourceName][a.resourceName][t.id]=t,e[a.resourceName].metadata={data:[].concat(Object(o.a)(e[a.resourceName].metadata.data),[t.id])}}),e},this.removePayloadFromResources=function(e,t){return t?(console.log("removePayloadFromResources: ",a,e,t),delete e[a.resourceName][a.resourceName][t],e[a.resourceName].metadata.data=e[a.resourceName].metadata.data.filter(function(e){return e!==t}),e):(console.warn("payloadID undefined"),e)},this.payloadToResource=function(e){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s={entities:Object(n.a)({},a.resourceName,(t={},Object(n.a)(t,a.resourceName,{}),Object(n.a)(t,"metadata",{}),t)),result:[]};return e&&e.forEach(function(e){s.result.push(e.id),s.entities[a.resourceName][a.resourceName][e.id]=e}),s.entities[a.resourceName].metadata=Object(r.a)({},o,{data:s.result}),s},this.updateResource=function(e,t){return e[a.resourceName][a.resourceName][t.id]=t,e},this.normalizeError=function(e){return e.errors||(e.errors={}),{entities:Object(r.a)({},e,{message:[e.message]}),result:{errors:e}}},this.resourceName=t}},559:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r=function(e){return function(t,a,r){return t.errors?e.normalizeError(t):t?e.removePayloadFromResources(a,r.id):a}}},569:function(e,t,a){"use strict";var r=a(185),n=a(186),o=a(189),s=a(187),c=a(188),u=a(0),i=a.n(u),l=a(601),d=a(602),p=a(549),m=a(600),f=a(66),h=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).onMovePageHistory=function(e){var t=a.props,r=t.match;return t.history.push("".concat(r.path,"?page=").concat(e)),e},a.onMovePage=function(e,t){e.preventDefault();var r=a.props,n=r.metaData;return(0,r.onMovePage)(n.current_page+t),a.onMovePageHistory(n.current_page+t),t},a.state=a.initialState,a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"onPagination",value:function(e){var t=this,a=e.last_page,r=[],n=this.state,o=n.page_min,s=n.page_max,c=n.current_page;c===s?s<a&&(s+=1,o+=1):c===o+1&&o>0&&(s-=1,o-=1),s!==this.state.page_max&&o!==this.state.page_max&&this.setState(s,o);for(var u=function(e){var a=e+1;a===c?r.push(i.a.createElement(l.a,{key:e,active:!0},i.a.createElement(d.a,{href:"#"},a))):r.push(i.a.createElement(l.a,{key:e},i.a.createElement(d.a,{onClick:function(e){e.preventDefault();var r=t.props.onMovePage;t.onMovePageHistory(a),r(a)}},a)))},p=o;p<a;p++)u(p);return r}},{key:"render",value:function(){var e=this,t=this.props.metaData;return t&&t&&t.last_page>1?i.a.createElement(p.a,{xs:"12"},i.a.createElement("nav",null,i.a.createElement(m.a,{className:"justify-content-center"},t.current_page>1&&i.a.createElement(l.a,null,i.a.createElement(d.a,{onClick:function(t){return e.onMovePage(t,-1)},previous:!0,href:"#"},"Prev")),this.onPagination(t),t.last_page>t.current_page&&i.a.createElement(l.a,null,i.a.createElement(d.a,{onClick:function(t){return e.onMovePage(t,1)},next:!0,href:"#"},"Next"))))):null}},{key:"initialState",get:function(){return{page_min:0,page_max:5}}}]),t}(u.Component);h=Object(f.k)(h),t.a=h},581:function(e,t,a){"use strict";a.d(t,"a",function(){return p}),a.d(t,"b",function(){return m}),a.d(t,"c",function(){return f}),a.d(t,"f",function(){return h}),a.d(t,"g",function(){return g}),a.d(t,"i",function(){return N}),a.d(t,"j",function(){return R}),a.d(t,"e",function(){return v}),a.d(t,"d",function(){return E}),a.d(t,"h",function(){return y});var r=a(191),n=a(553),o=a(557),s=a(555),c=a(558),u=a(559),i=new c.a("posts"),l=Object(r.b)("posts")({createPost:{method:"POST",url:"".concat(n.a.base).concat(n.a.api.post),normalizer:function(e,t,a){return console.log("createPost: ",e,t,a),e?e.errors||e.message?i.normalizeError(e):t.hasOwnProperty("posts")?i.mergeResourceAndPayload(t,[e]):i.payloadToResource([e]):null},networkHelpers:{handleStatusCode:o.a,requestPOST:s.c}},deletePost:{method:"DELETE",url:"".concat(n.a.base).concat(n.a.api.post,"/::id"),normalizer:Object(u.a)(i),networkHelpers:{handleStatusCode:o.a,requestDELETE:s.a}},getPost:{method:"GET",url:"".concat(n.a.base).concat(n.a.api.post,"/::id"),normalizer:function(e){return i.payloadToResource([e])},networkHelpers:{handleStatusCode:o.a,requestGET:s.b}},getPosts:{method:"GET",url:"".concat(n.a.base).concat(n.a.api.posts),normalizer:function(e){return!e&&e.error?null:Array.isArray(e)?i.payloadToResource(e):i.payloadToResource(e.data,e)},networkHelpers:{handleStatusCode:o.a,requestGET:s.b}},updatePost:{method:"PUT",url:"".concat(n.a.base).concat(n.a.api.post,"/::id"),normalizer:function(e,t){return e.errors?i.normalizeError(e):e?i.updateResource(t,e):t},networkHelpers:{handleStatusCode:o.a,requestPUT:s.d}}}),d=l.actions,p=d.createPost.perform,m=d.deletePost.perform,f=d.getPost.perform,h=d.getPosts.perform,g=d.updatePost.perform,b=l.selectors,P=b.resource,v=P.getResource,E=P.getResourceById,j=b.createPost.request,y=(j.getResource,j.isPerforming),O=(b.deletePost.request.getResource,b.getPost.request),N=(O.getResource,O.isPerforming),k=b.getPosts.request,R=(k.getResource,k.isPerforming),T=b.updatePost.request;T.getResource,T.isPerforming},660:function(e,t,a){"use strict";var r=a(9),n=a(20),o=a(0),s=a.n(o),c=a(24),u=a.n(c),i=a(40),l=a.n(i),d=a(542),p={tag:d.q,className:u.a.string,cssModule:u.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.tag,c=Object(n.a)(e,["className","cssModule","tag"]),u=Object(d.m)(l()(t,"card-title"),a);return s.a.createElement(o,Object(r.a)({},c,{className:u}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},676:function(e,t,a){"use strict";a.r(t);var r=a(185),n=a(186),o=a(189),s=a(187),c=a(192),u=a(188),i=a(0),l=a.n(i),d=a(548),p=a(549),m=a(191),f=a(581),h=a(550),g=a(546),b=a(660),P=a(821),v=a(562),E=a(561),j=a(565),y=a(193),O=function(e){var t=e.title,a=e.excerpt,r=e.id,n=e.status,o=e.onDeletePost;return l.a.createElement(h.a,null,l.a.createElement(g.a,null,l.a.createElement(b.a,null,t),l.a.createElement(P.a,null,a)),l.a.createElement(v.a,{className:"text-muted"},l.a.createElement(E.a,{color:"warning"},l.a.createElement(y.Link,{to:"/post-editor/".concat(r)},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c")),l.a.createElement(E.a,{color:"danger",onClick:o},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),l.a.createElement(j.a,{color:"success",className:"float-right"},n)))},N=a(569),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).onDeletePost=function(e){return a.props.DeletePostAction({urlParams:{id:e}})},a.onGetPosts=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return a.props.GetPostsAction({query:{page:e}})},a.onGetPosts=a.onGetPosts.bind(Object(c.a)(a)),a}return Object(u.a)(t,e),Object(n.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.location.search.match(/[0-9]/g);e&&e.length?this.onGetPosts(e[0]):this.onGetPosts()}},{key:"render",value:function(){var e=this,t=this.props,a=t.posts;if(t.isRetrievingGetPosts&&!a)return l.a.createElement("div",null,"Loading...");if(!a.length)return null;var r=Object.values(a[0]),n=a[1];return l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement(d.a,null,r&&r.map(function(t,a){return l.a.createElement(p.a,{xs:"12",sm:"6",md:"4",key:a},l.a.createElement(O,Object.assign({},t,{onDeletePost:function(){return e.onDeletePost(t.id)}})))}),l.a.createElement(N.a,{metaData:n,onMovePage:this.onGetPosts})))}}]),t}(i.Component);k=Object(m.a)(function(e,t){return{posts:Object(f.e)(e,t),isRetrievingGetPosts:Object(f.j)(e,t)}},function(e){return{DeletePostAction:function(t){return e(Object(f.b)(t))},GetPostsAction:function(t){return e(Object(f.f)(t))}}})(k);t.default=k}}]);
//# sourceMappingURL=44.66ae95c8.chunk.js.map