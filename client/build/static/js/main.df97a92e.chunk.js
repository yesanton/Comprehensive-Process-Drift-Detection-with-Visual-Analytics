(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{135:function(e,t,a){},173:function(e,t,a){e.exports=a(282)},178:function(e,t,a){},233:function(e,t,a){},281:function(e,t,a){},282:function(e,t,a){"use strict";a.r(t);var n,r,l=a(0),c=a.n(l),o=a(12),i=a.n(o),s=(a(178),a(179),a(36)),u=a.n(s),m=a(19),d=a(57),f=a(286),p=a(288),h=a(115),E=a(30);!function(e){e.plasma="plasma",e.bw="bw",e.PiYG="PiYG"}(n||(n={})),function(e){e.plasma="confidence",e.bw="support",e.PiYG="interestF"}(r||(r={}));var v=Object(l.createContext)({state:{},dispatch:function(){return null}});v.displayName="AppContext";var b=function(e,t){switch(t.type){case"SET_SESSION_ACTION":return Object(m.a)(Object(m.a)({},e),t.payload);case"UPDATE_DEFINED_PARAM_ACTION":return Object(m.a)(Object(m.a)({},e),{},{defined:Object(m.a)(Object(m.a)({},e.defined),t.payload)});case"SET_ALGORITHM_RESULT":return Object(m.a)(Object(m.a)({},e),{},{algorithmResult:t.payload,algorithmSliceIndex:0});case"SET_ALGORITHM_SLICE_INDEX":return Object(m.a)(Object(m.a)({},e),{},{algorithmSliceIndex:t.payload.index});default:return e}},g=function(e){return function(t){console.log("DISPATCH:",t),e(t)}},_=function(e){var t=e.children,a=Object(l.useReducer)(b,{}),n=Object(E.a)(a,2),r=n[0],o=n[1];return console.log({state:r}),c.a.createElement(v.Provider,{value:{state:r,dispatch:g(o)}},t)},y=a(111),O="https://processdrift.ai.wu.ac.at",j=function(e,t){var a=new URL("".concat(O).concat(e));return a.search=new URLSearchParams(Object(m.a)({},t?function(e){return Object.entries(e).reduce((function(e,t){var a=Object(E.a)(t,2),n=a[0],r=a[1];return r&&(e[n]=r),e}),{})}(t):{})).toString(),a.toString()},x=function(e){return fetch(j("/makeDriftMap",e)).then((function(e){return e.json()}))},S=function(e){return fetch(j("/makeStationarityTest",e)).then((function(e){return e.json()})).then((function(e){var t=e.path_to_stationarity;return fetch("".concat(O).concat(t))})).then((function(e){return e.text()})).then((function(e){return Object(y.parse)(e,{skipEmptyLines:!0})})).then((function(e){var t=e.data,a=e.errors;if(a.length>0)throw a;return console.log({data:t}),t.slice(1)})).catch(console.error)},k=function(e){return fetch(j("/makeSpreadOfConstraints",e)).then((function(e){return e.json()}))},C=function(e){return fetch(j("/makeAutocorrelationPlots",e)).then((function(e){return e.json()}))},T=function(e){return fetch(j("/makeEDFG",e)).then((function(e){return e.json()}))},w=function(){return c.a.createElement("header",{className:"App-header"},c.a.createElement(f.a.Title,{level:1},"Visual drift detection for sequence data analysis system"),c.a.createElement(v.Consumer,null,(function(e){var t=e.state,a=e.dispatch,n=function(){var e=Object(d.a)(u.a.mark((function e(){var n,r,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.session_id){e.next=7;break}return n=Object(m.a)({logName:t.session_id},t.defined),e.next=4,T(n);case 4:r=e.sent,l=r.paths_to_edfgs,a({type:"SET_ALGORITHM_RESULT",payload:Object(m.a)(Object(m.a)({},t.algorithmResult),{},{edfgs:l})});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(!t.algorithmResult)return null;var r=t.algorithmResult,l=r.edfgs,o=r.erraticMeasureData,i=t.algorithmSliceIndex,s=void 0===i?0:i;return c.a.createElement("div",null,c.a.createElement(p.a,{onChange:function(e){return a({type:"SET_ALGORITHM_SLICE_INDEX",payload:{index:e}})},defaultValue:0},o.map((function(e,t){return c.a.createElement(p.a.Option,{value:t},"Section ",t)}))),!(null===l||void 0===l?void 0:l[s])&&c.a.createElement(h.a,{onClick:n},"Get EDFG"))})))},A=a(289),I=a(67),D=a(285),N=a(293),R=(a(233),function(){var e=Object(l.useContext)(v),t=e.dispatch,a=e.state,n=Object(l.useState)(!1),r=Object(E.a)(n,2),o=r[0],i=r[1];if(a.session_id)return null;var s=function(){var e=Object(d.a)(u.a.mark((function e(a){var n,r,l,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.file,r=a.onSuccess,l=a.onError,!n){e.next=18;break}return i(!0),(c=new FormData).append("file",n),e.prev=5,e.next=8,s=c,fetch("".concat(O,"/uploadFile"),{method:"POST",body:s}).then((function(e){return e.json()})).catch(console.error);case 8:o=e.sent,t({type:"SET_SESSION_ACTION",payload:o}),r(o,n),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5),console.log(e.t0),l(e.t0);case 17:i(!1);case 18:case"end":return e.stop()}var s}),e,null,[[5,13]])})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"Upload-area"},c.a.createElement(I.a,{description:c.a.createElement(f.a.Title,{level:2},"Process Drift Detection with Visual Analytics. Our technique supports the discovery of process drifts in the processes from event logs in several different visual representations!"),image:I.a.PRESENTED_IMAGE_SIMPLE},c.a.createElement(D.a,{accept:".xes",name:"file",customRequest:s},c.a.createElement(h.a,{loading:o,size:"large"},c.a.createElement(N.a,null)," Click to upload a ",c.a.createElement("b",null," .xes ")," file"))))}),P=a(37),L=a(290),M=a(292),G=a(48),F=a(283),U=a(287),V=a(284),B=a(291),z=a(294),H=a(295),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Object(P.a)({},e,e)},W=function(){var e,t,a,n,r,o,i,s,f=Object(l.useContext)(v),p=f.state,b=f.dispatch,g=Object(l.useState)(!1),_=Object(E.a)(g,2),j=_[0],T=_[1],w=Object(l.useState)(!1),I=Object(E.a)(w,2),D=I[0],N=I[1];if(!p.session_id)return null;var R=function(e){return function(t){b({type:"UPDATE_DEFINED_PARAM_ACTION",payload:Object(P.a)({},e,t)})}},W=function(e){return function(t){b({type:"UPDATE_DEFINED_PARAM_ACTION",payload:Object(P.a)({},e,t.target.checked)})}},Y=function(e){return function(t){b({type:"UPDATE_DEFINED_PARAM_ACTION",payload:Object(P.a)({},e,t.target.value)})}},J=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,n,r,l,c,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p.session_id){e.next=30;break}return T(!0),e.prev=2,t=Object(m.a)({logName:p.session_id},p.defined),e.next=6,x(t);case 6:return a=e.sent,e.next=9,k(t);case 9:return n=e.sent,r=n.spread_constraints,e.next=13,S(t);case 13:return l=e.sent,e.next=16,s=a.path_to_erratic_measure,fetch("".concat(O).concat(s)).then((function(e){return e.text()})).then((function(e){return Object(y.parse)(e,{skipEmptyLines:!0})})).then((function(e){var t=e.data,a=e.errors;if(a.length>0)throw a;return console.log({data:t}),t.slice(1)})).catch(console.error);case 16:return c=e.sent,e.next=19,C(t);case 19:o=e.sent,i=o.paths_to_autocorrelation,b({type:"SET_ALGORITHM_RESULT",payload:Object(m.a)(Object(m.a)({},a),{},{erraticMeasureData:c,spread_constraints:r,stationarityTestResult:l,autocorrelationPlots:i})}),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(2),console.error(e.t0);case 27:return e.prev=27,T(!1),e.finish(27);case 30:case"end":return e.stop()}var s}),e,null,[[2,24,27,30]])})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(A.a.Sider,{collapsible:!0,collapsed:D,onCollapse:N,width:350,className:"App-sider"},D&&c.a.createElement(z.a,{style:{width:"50px",height:"50px"}}),c.a.createElement("div",{style:{opacity:D?0:1,pointerEvents:D?"none":"inherit"}},c.a.createElement(L.a,null,c.a.createElement(M.a,{span:24},c.a.createElement(G.a,{title:"the size of the sliding window for mining declare constraints",color:"green"},c.a.createElement(F.a,null,"Win size"," ",c.a.createElement("sup",null,c.a.createElement(H.a,null))))),c.a.createElement(M.a,{span:24},c.a.createElement(U.a,{min:p.subL_min,max:p.subL_max,defaultValue:p.subL_default,marks:q(p.subL_default),onAfterChange:R("subL")}))),c.a.createElement(L.a,null,c.a.createElement(M.a,{span:24},c.a.createElement(G.a,{title:"this parameter sets the number of event sequences will be skipped with each new window. this number shouldn't be larger than the Win size",color:"pink",key:"?"},c.a.createElement(F.a,null,"Slide Size",c.a.createElement("sup",null,c.a.createElement(H.a,null))))),c.a.createElement(M.a,{span:24},c.a.createElement(U.a,{min:p.sliBy_min,max:p.sliBy_max,defaultValue:p.sliBy_default,marks:q(p.sliBy_default),onAfterChange:R("sliBy")}))),c.a.createElement(L.a,null,c.a.createElement(M.a,{span:24},c.a.createElement(G.a,{title:"this parameter affects the hierarchical clustering algorithm to determine the number of clusters,  and there fore number of changing behaviours. the larger the number the less clusters will be found ",color:"orange",key:"?"},c.a.createElement(F.a,null,"Cut Threshold"," ",c.a.createElement("sup",null,c.a.createElement(H.a,null))))),c.a.createElement(M.a,{span:24},c.a.createElement(U.a,{min:p.cluCut_min,max:p.cluCut_max,defaultValue:p.cluCut_default,marks:q(p.cluCut_default),onAfterChange:R("cluCut")}))),c.a.createElement(L.a,null,c.a.createElement(M.a,{span:24},c.a.createElement(G.a,{title:"choose the color scheme for the Drift Map visualizatoin. All of the options should be colorblind friendly. Read more about color schemas at https://matplotlib.org/examples/color/colormaps_reference.html",color:"volcano",key:"?"},c.a.createElement(F.a,null,"Color scheme"," ",c.a.createElement("sup",null,c.a.createElement(H.a,null))))),c.a.createElement(M.a,{span:24},c.a.createElement(V.default.Group,{defaultValue:(null===(e=p.defined)||void 0===e?void 0:e.colorTheme)||p.colorTheme_default,onChange:Y("colorTheme")},null===(t=p.colorTheme)||void 0===t?void 0:t.map((function(e){return c.a.createElement(V.default,{value:e,key:e},e)}))))),c.a.createElement(L.a,null,c.a.createElement(M.a,{span:24},c.a.createElement(G.a,{title:"Choose between three types of measures on Declare constraints",color:"lime",key:"?"},c.a.createElement(F.a,null,"Type of constraint"," ",c.a.createElement("sup",null,c.a.createElement(H.a,null))))),c.a.createElement(M.a,{span:24},c.a.createElement(V.default.Group,{defaultValue:(null===(a=p.defined)||void 0===a?void 0:a.typeConstr)||p.typeConstr_default,onChange:Y("typeConstr")},null===(n=p.typeConstr)||void 0===n?void 0:n.map((function(e){return c.a.createElement(V.default,{value:e,key:e},e)}))))),c.a.createElement(L.a,null,c.a.createElement(M.a,{span:24},c.a.createElement(F.a,null,"Additional parameters")),c.a.createElement(M.a,{span:24},c.a.createElement(G.a,{title:"Click in driftAll if you want find sudden drifts in all separate clusters of behaviour. Leave it if you want to find sudden drifts on the whole dataset.",color:"geekblue",key:"?"},c.a.createElement(B.a,{checked:null!==(r=null===(o=p.defined)||void 0===o?void 0:o.driftAll)&&void 0!==r?r:p.driftAll,onChange:W("driftAll")},"drift all"," ",c.a.createElement("sup",null,c.a.createElement(H.a,null)))),c.a.createElement("br",null),c.a.createElement(G.a,{title:"Click in noSort if you do not want to sort constrants in clusters by similarity for the drift map. This only influences the visul representation",color:"geekblue",key:"?"},c.a.createElement(B.a,{checked:null!==(i=null===(s=p.defined)||void 0===s?void 0:s.noSort)&&void 0!==i?i:p.noSort,onChange:W("noSort")},"no sort"," ",c.a.createElement("sup",null,c.a.createElement(H.a,null)))))),c.a.createElement(L.a,null,c.a.createElement(M.a,{span:24},c.a.createElement(h.a,{loading:j,onClick:J,style:{margin:"20px 0"}},"Start algorithm")))))},Y=a(169),J=function(e){var t=e.selected,a=e.data,n=Object(E.a)(a[t],3),r=n[1],o=n[2],i=Object(l.useMemo)((function(){return+(Math.max.apply(Math,Object(Y.a)(a.map((function(e){return+Object(E.a)(e,3)[2]}))))/+r).toFixed(3)}),[a,r]),s=+(+o/+r).toFixed(3);return c.a.createElement(U.a,{disabled:!0,marks:Object(P.a)({1:1},i,i),min:1,max:i,step:.001,tooltipVisible:!0,value:s,tooltipPlacement:"right"})},X=function(e){var t=e.value;return c.a.createElement(U.a,{disabled:!0,marks:{0:0,1:1},min:0,max:1,step:.001,tooltipVisible:!0,value:+(+t/100).toFixed(3),tooltipPlacement:"right"})},$=(a(281),function(){var e,t,a=Object(l.useContext)(v).state;if(!(null===(e=a.algorithmResult)||void 0===e?void 0:e.path_to_driftmap))return null;var n=a.algorithmResult,r=n.path_to_driftmap,o=n.erraticMeasureData,i=void 0===o?[]:o,s=n.paths_to_drift_plots,u=void 0===s?[]:s,m=n.spread_constraints,d=n.stationarityTestResult,p=n.autocorrelationPlots,h=n.edfgs,E=a.algorithmSliceIndex,b=void 0===E?0:E;console.log({edfgs:h});var g=null===(t=d[b])||void 0===t?void 0:t[2],_=g>.05?"Incremental drift present, p = ".concat(g):"No incremental drift, p = ".concat(g);return c.a.createElement("div",null,c.a.createElement(L.a,null,c.a.createElement(M.a,{span:10},c.a.createElement("img",{src:"".concat(O).concat(r),alt:"Drift map",className:"image"})),c.a.createElement(M.a,{span:8},c.a.createElement("img",{className:"image",src:"".concat(O).concat(u[b]),alt:"drift plot"})),c.a.createElement(M.a,{span:5,offset:1},c.a.createElement("img",{src:"".concat(O).concat(p[b]),alt:"autocorrelation plots",className:"image"}),c.a.createElement(f.a.Text,null,"Erratic measure"),c.a.createElement(J,{selected:b,data:i}),c.a.createElement(f.a.Text,null,"Spread of constraints"),c.a.createElement(X,{value:m}),c.a.createElement(f.a.Paragraph,null,_))),c.a.createElement(L.a,null,(null===h||void 0===h?void 0:h[b])&&c.a.createElement(M.a,{span:24},c.a.createElement("img",{src:"".concat(O).concat(h[b]),alt:"EDGF",className:"image"}))))}),K=(a(135),function(){return c.a.createElement("main",null,c.a.createElement(v.Consumer,null,(function(e){var t=e.state;return t.session_id?c.a.createElement(A.a,null,c.a.createElement(W,null),t.algorithmResult&&c.a.createElement(A.a.Content,null,c.a.createElement($,null))):c.a.createElement(R,null)})))});var Q=function(){return c.a.createElement(_,null,c.a.createElement("div",{className:"App"},c.a.createElement(w,null),c.a.createElement(K,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[173,1,2]]]);
//# sourceMappingURL=main.df97a92e.chunk.js.map