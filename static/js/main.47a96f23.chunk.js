(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{299:function(e,t,n){},300:function(e,t,n){},301:function(e,t,n){},303:function(e,t,n){},304:function(e,t,n){},309:function(e,t,n){},556:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(65),i=n.n(o),s=(n(299),n(18)),c=n(19),l=n(27),u=n(26),d=(n(300),n(301),n(7)),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleDetailsButton=function(){e.setState((function(e){return{showDetails:!e.showDetails}}))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.event,t=this.state.showDetails,n=new Date(e.start.dateTime).toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",timeZoneName:"short"});return Object(d.jsxs)("div",{className:"event",children:[Object(d.jsx)("h1",{className:"event-summary",children:e.summary}),t&&Object(d.jsxs)("div",{className:"event-details",children:[Object(d.jsx)("p",{className:"event-location",children:e.location}),Object(d.jsx)("p",{className:"event-date",children:n}),Object(d.jsx)("p",{className:"event-description",children:e.description})]}),Object(d.jsx)("button",{className:"details-btn",onClick:this.handleDetailsButton,children:t?"Hide Details":"Show Details"})]})}}]),n}(a.Component),f=h,p=(n(303),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(d.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(f,{event:e})},e.id)}))})}}]),n}(a.Component)),m=p,v=(n(304),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a,r=e.props.locations.filter((function(e){return e.toUpperCase().includes(n.toUpperCase())}));return a=0===r.length?"We can not find the city you are looking for. Please try another city":"",e.props.updateInfoAlert(a),e.setState({query:n,suggestions:r})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t),e.props.updateInfoAlert("")},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"CitySearch",children:Object(d.jsxs)("div",{className:"searchField",children:[Object(d.jsxs)("label",{className:"inputField",children:[Object(d.jsx)("span",{className:"label-text",children:"City Search"}),Object(d.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}})]}),Object(d.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(d.jsx)("li",{className:"see-all",onClick:function(){return e.handleItemClicked("all")},children:Object(d.jsx)("b",{children:"See all cities"})})]})]})})}}]),n}(a.Component)),b=v,g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32},e.handleInputChanged=function(t){var n=t.target.value;e.setState({numberOfEvents:n}),""===n?e.props.updateErrorAlert("Please enter a number of events"):isNaN(n)||n<=0?e.props.updateErrorAlert("Please enter a valid number"):(e.props.updateNumberOfEvents(n),e.props.updateErrorAlert(""))},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"NumberOfEvents",children:Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{className:"label-text",children:"Number of Events "}),Object(d.jsx)("input",{id:"numberOfEvents",type:"text",className:"number-input",value:this.state.numberOfEvents,onChange:this.handleInputChanged})]})})}}]),n}(a.Component),j=g,w=n(293),O=n(47),y=n(84),k=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200522T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-22T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-22T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-22T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200523T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-23T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-23T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-23T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],x=n(85),S=n.n(x),T=n(560),Z=function(){var e=Object(y.a)(Object(O.a)().mark((function e(){var t,n,a,r,o,i;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,A(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,T.a.get("https://tb4onctkod.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,i=o.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",r&&N(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(y.a)(Object(O.a)().mark((function e(t){var n;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},N=function(){var e=Object(y.a)(Object(O.a)().mark((function e(t){var n,a,r;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://tb4onctkod.execute-api.us-east-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(y.a)(Object(O.a)().mark((function e(){var t,n,a,r,o,i;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("getEvents called"),S.a.start(),navigator.onLine){e.next=10;break}return t=localStorage.getItem("lastEvents"),console.log("Events from localStorage:",t),n=JSON.parse(t),console.log("Parsed events:",n),S.a.done(),console.log("Parsed events:",n),e.abrupt("return",n||[]);case 10:if(!window.location.href.startsWith("http://localhost")){e.next=13;break}return S.a.done(),e.abrupt("return",k);case 13:return e.next=15,Z();case 15:if(!(a=e.sent)){e.next=25;break}return E(),r="https://tb4onctkod.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+a,e.next=21,T.a.get(r);case 21:return(o=e.sent).data&&(console.log("Data received from API:",o.data),i=W(o.data.events),localStorage.setItem("lastEvents",JSON.stringify(o.data.events)),localStorage.setItem("locations",JSON.stringify(i))),S.a.done(),e.abrupt("return",o.data.events);case 25:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(e){var t=e.map((function(e){return e.location}));return Object(w.a)(new Set(t))},J=(n(309),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,backgroundColor:a.backgroundColor,borderWidth:"2px",borderStyle:"solid",fontWeight:"bolder",borderRadius:"7px",borderColor:a.color,textAlign:"center",fontSize:"12px",margin:"10px 0",padding:"10px"}},a.color=null,a.backgroundColor=null,a}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"Alert",style:this.getStyle(),children:this.props.text})}}]),n}(a.Component)),D=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="blue",a.backgroundColor="lightblue",a}return Object(c.a)(n)}(J),M=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="red",a.backgroundColor="pink",a}return Object(c.a)(n)}(J),I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="orange",a.backgroundColor="lightyellow",a}return Object(c.a)(n)}(J),B=n(51),L=n(562),F=n(558),R=n(559),q=n(286),U=n(287),H=n(88),z=n(285),Y=function(e){var t=e.active,n=e.payload;e.label;return t&&n&&n.length?Object(d.jsxs)("div",{className:"custom-tooltip",style:{backgroundColor:"#FA92FB",color:"black",border:"solid 1px black",padding:"10px",borderRadius:"5px",boxShadow:"2px 2px 5px black"},children:[Object(d.jsx)("p",{className:"label",children:"City : ".concat(n[0].payload.city)}),Object(d.jsx)("p",{className:"intro",children:"Number of events : ".concat(n[0].payload.count)})]}):null},G=function(e){var t=e.allLocations,n=e.events,r=Object(a.useState)([]),o=Object(B.a)(r,2),i=o[0],s=o[1];return Object(a.useEffect)((function(){s(t.map((function(e){var t=n.filter((function(t){return t.location===e})).length;return{city:e.split(/, | - /)[0],count:t}})))}),[t,n]),Object(d.jsx)(L.a,{width:"99%",height:400,children:Object(d.jsxs)(F.a,{margin:{top:20,right:20,bottom:60,left:-20},children:[Object(d.jsx)(R.a,{stroke:"#000000"}),Object(d.jsx)(q.a,{type:"category",dataKey:"city",name:"City",angle:45,interval:0,tick:{dx:20,dy:40,fontSize:16},stroke:"#000000"}),Object(d.jsx)(U.a,{type:"number",dataKey:"count",name:"Number of events",allowDecimals:!1,stroke:"#000000",fontWeight:"bold"}),Object(d.jsx)(H.a,{cursor:{strokeDasharray:"3 3"},content:Object(d.jsx)(Y,{})}),Object(d.jsx)(z.a,{data:i,fill:"#A653F5",size:100})]})})},P=n(561),V=n(288),_=n(69),X=["#A653F5","#8F8CF2","#65B8BF","#F96CFF","#FA92FB"],K=["React","JavaScript","Node","jQuery","AngularJS"],Q=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(B.a)(n,2),o=r[0],i=r[1];return Object(a.useEffect)((function(){i((function(){return K.map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}})).filter((function(e){return e.value>0}))}))}),[t]),Object(d.jsx)(L.a,{height:400,children:Object(d.jsx)(P.a,{children:Object(d.jsx)(V.a,{data:o,labelLine:!1,outerRadius:80,dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},children:o.map((function(e,t){return Object(d.jsx)(_.a,{fill:X[t]},"cell-S{index}")}))})})})},$=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).updateNumberOfEvents=function(e){a.setState({numberOfEvents:e},(function(){a.updateEvents()}))},a.updateEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.state.selectedLocation,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.state.numberOfEvents;if(navigator.onLine)C().then((function(n){var r=("all"===e?n:n.filter((function(t){return t.location===e}))).slice(0,t);a.mounted&&a.setState({events:r,locations:W(n),selectedLocation:e,numberOfEvents:t,warningAlert:""})}));else{var n=localStorage.getItem("lastEvents");n&&a.setState({events:JSON.parse(n).slice(0,t),locations:W(JSON.parse(n)),warningAlert:"Warning: You are currently offline. Events are loaded from the cache."})}},a.updateInfoAlert=function(e){a.setState({infoAlert:e})},a.updateErrorAlert=function(e){a.setState({errorAlert:e})},a.state={events:e.events||[],locations:e.locations||[],numberOfEvents:32,selectedLocation:"all",infoAlert:"",errorAlert:"",warningAlert:""},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){if(this.mounted=!0,navigator.onLine)this.updateEvents();else{var e=localStorage.getItem("lastEvents");e&&this.setState({events:JSON.parse(e),locations:W(JSON.parse(e))})}}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("div",{className:"alerts-container",children:[this.state.infoAlert.length?Object(d.jsx)(D,{text:this.state.infoAlert}):null,this.state.errorAlert.length?Object(d.jsx)(M,{text:this.state.errorAlert}):null,this.state.warningAlert.length?Object(d.jsx)(I,{text:this.state.warningAlert}):null]}),Object(d.jsx)(b,{locations:this.state.locations,updateEvents:this.updateEvents,updateInfoAlert:this.updateInfoAlert}),Object(d.jsx)("br",{}),Object(d.jsx)(j,{numberOfEvents:this.state.numberOfEvents,updateNumberOfEvents:this.updateNumberOfEvents,updateErrorAlert:this.updateErrorAlert}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"chart-container",children:[Object(d.jsx)(Q,{events:this.state.events}),Object(d.jsx)(G,{allLocations:this.state.locations,events:this.state.events})]}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"EventContainer",children:Object(d.jsx)(m,{events:this.state.events})})]})}}]),n}(a.Component),ee=$,te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,563)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),o(e),i(e)}))};n(292).config("ff0790b218714736929ce200cffa1333").install(),i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(ee,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");te?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ne(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ne(t,e)}))}}(),ae()}},[[556,1,2]]]);
//# sourceMappingURL=main.47a96f23.chunk.js.map