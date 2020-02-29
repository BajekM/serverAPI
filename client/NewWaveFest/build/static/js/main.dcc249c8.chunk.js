(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(30),o=a.n(c),l=a(39),s=a(25),i=a(29),u=a(55),m=a(28),p=a(8),d=a(15),E=a.n(d),f=a(26),h=a(32),y=a.n(h),v=function(e){return"app/".concat("concerts","/").concat(e)},b=v("START_REQUEST"),O=v("END_REQUEST"),g=v("ERROR_REQUEST"),S=v("LOAD_CONCERTS"),_={data:[],request:{pending:!1,error:null,success:null}};var j=a(23),k=function(e){return e.seats.requests},D=function(e){return"app/".concat("seats","/").concat(e)},A=D("START_REQUEST"),T=D("END_REQUEST"),w=D("ERROR_REQUEST"),x=D("LOAD_SEATS"),N=D("ADD_SEAT"),q=function(e){return{payload:e,type:A}},R=function(e){return{payload:e,type:T}},C=function(e){return{payload:e,type:w}},L=function(){return function(){var e=Object(f.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(q({name:"LOAD_SEATS"})),e.prev=1,e.next=4,y.a.get("".concat("/api","/seats"));case 4:a=e.sent,t({payload:a.data,type:x}),t(R({name:"LOAD_SEATS"})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(C({name:"LOAD_SEATS",error:e.t0.message}));case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}()},F={data:[],requests:[]};var P=Object(i.c)({concerts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case S:return Object(p.a)({},e,{data:Object(m.a)(t.payload)});case b:return Object(p.a)({},e,{request:{pending:!0,error:null,success:!1}});case O:return Object(p.a)({},e,{request:{pending:!1,error:null,success:!0}});case g:return Object(p.a)({},e,{request:{pending:!1,error:t.error,success:!1}});default:return e}},seats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case x:return Object(p.a)({},e,{data:Object(m.a)(t.payload)});case N:return Object(p.a)({},e,{data:[].concat(Object(m.a)(e.data),[t.payload])});case A:return Object(p.a)({},e,{requests:Object(p.a)({},e.requests,Object(j.a)({},t.payload.name,{pending:!0,error:null,success:!1}))});case T:return Object(p.a)({},e,{requests:Object(p.a)({},e.requests,Object(j.a)({},t.payload.name,{pending:!1,error:null,success:!0}))});case w:return Object(p.a)({},e,{requests:Object(p.a)({},e.requests,Object(j.a)({},t.payload.name,{pending:!1,error:t.payload.error,success:!1}))});default:return e}}}),U=Object(i.e)(P,Object(i.d)(Object(i.a)(u.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),H=a(18),I=a(19),M=a(22),W=a(20),Q=a(21),J=a(27),X=a(106),Y=a(107),$=a(108),G=a(109),V=a(110),B=a(111),z=a(112),K=a(113),Z=function(e){function t(){var e,a;Object(H.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(M.a)(this,(e=Object(W.a)(t)).call.apply(e,[this].concat(n)))).state={isOpen:!1},a.toggle=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(Q.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(X.a,{color:"dark",dark:!0,expand:"md"},n.a.createElement(Y.a,{href:"/"},"New Wave Festival"),n.a.createElement($.a,{onClick:this.toggle}),n.a.createElement(G.a,{isOpen:this.state.isOpen,navbar:!0},n.a.createElement(V.a,{className:"ml-auto align-items-center",navbar:!0},n.a.createElement(B.a,null,n.a.createElement(z.a,{href:"/"},"Home")),n.a.createElement(B.a,null,n.a.createElement(z.a,{href:"/prices"},"Prices")),n.a.createElement(B.a,null,n.a.createElement(z.a,{href:"/order-a-ticket"},n.a.createElement(K.a,{outline:!0,color:"primary"},"Order a ticket!")))))))}}]),t}(n.a.Component),ee=function(){return n.a.createElement("footer",{id:"sticky-footer",className:"py-4 mt-5 bg-dark text-white-50"},n.a.createElement("div",{className:"text-center"},n.a.createElement("small",null,"Copyright \xa9 New Wave Festival 2019")))},te=function(e){var t=e.children;return n.a.createElement("div",null,n.a.createElement(Z,null),t,n.a.createElement(ee,null))},ae=a(117),re=a(122),ne=(a(94),[{src:"/img/promo/promo1.jpg",header:"Great atmosphere!",caption:"Have fun with thousands of people!",alt:"Have fun with thousands of people!"},{src:"/img/promo/promo2.jpg",altText:"Listen to the greatest hits!",caption:"Take a part in phenomenal performances.",header:"Listen to the greatest hits"},{src:"/img/promo/promo3.jpg",altText:"Meet stars!",caption:"Meet the biggest music starts live!",header:"Meet stars!"}]),ce=function(){return n.a.createElement(re.a,{className:"promoCarousel",items:ne})},oe=a(116),le=a(123),se=a(114),ie=a(115),ue=(a(95),function(e){var t=e.performer,a=e.price,r=e.genre,c=e.day,o=e.image;return n.a.createElement("article",{className:"concert"},n.a.createElement(se.a,{noGutters:!0},n.a.createElement(ie.a,{xs:"6"},n.a.createElement("div",{className:"concert__image-container"},n.a.createElement("img",{className:"concert__image-container__img",src:o,alt:t}))),n.a.createElement(ie.a,{xs:"6"},n.a.createElement("div",{className:"concert__info"},n.a.createElement("img",{className:"concert__info__back",src:o,alt:t}),n.a.createElement("h2",{className:"concert__info__performer"},t),n.a.createElement("h3",{className:"concert__info__genre"},r),n.a.createElement("p",{className:"concert__info__day-n-price"},"Day: ",c,", Price: ",a,"$")))))}),me=function(e){var t=e.concerts;return n.a.createElement("section",null,t.map(function(e){return n.a.createElement(ue,Object.assign({key:e.id},e))}))},pe=function(e){function t(){return Object(H.a)(this,t),Object(M.a)(this,Object(W.a)(t).apply(this,arguments))}return Object(Q.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.loadConcerts)()}},{key:"render",value:function(){var e=this.props,t=e.request,a=e.concerts;return t.pending?n.a.createElement(oe.a,{animated:!0,color:"primary",value:50}):t.error?n.a.createElement(le.a,{color:"warning"},t.error):t.success&&a.length?t.success?n.a.createElement(n.a.Fragment,null,n.a.createElement(me,{concerts:a})):void 0:n.a.createElement(le.a,{color:"info"},"No concerts")}}]),t}(n.a.Component),de=Object(s.b)(function(e){return{concerts:(a=e,a.concerts.data),request:(t=e,t.concerts.request)};var t,a},function(e){return{loadConcerts:function(){return e(function(){var e=Object(f.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:b}),e.prev=1,e.next=4,y.a.get("".concat("/api","/concerts"));case 4:return a=e.sent,e.next=7,new Promise(function(e,t){return setTimeout(e,2e3)});case 7:t({payload:a.data,type:S}),t({type:O}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t({error:e.t0.message,type:g});case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}())}}})(pe),Ee=function(){return n.a.createElement("div",null,n.a.createElement(ce,null),n.a.createElement(ae.a,null,n.a.createElement("h1",null,"Who's on?"),n.a.createElement(de,null)))},fe=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"404 Not Found"))},he=function(){return n.a.createElement(ae.a,null,n.a.createElement("h1",null,"Prices"),n.a.createElement("p",null,"Prices may differ according the day of the festival. Remember that ticket includes not only the star performance, but also 10+ workshops. We gathered several genre teachers to help you increase your vocal skills, as well as self confidence."),n.a.createElement(le.a,{color:"info"},"Attention! ",n.a.createElement("strong",null,"Children under 4 can go freely with you without any other fee!")),n.a.createElement("h2",null,"Day one"),n.a.createElement("p",null,"Price: 25$"),n.a.createElement("p",null,'Workshops: "Rock Music Style", "How to make you voice grooowl", "Make your voice stronger", "History of Rock"'),n.a.createElement("h2",null,"Day Two"),n.a.createElement("p",null,"Price: 25$"),n.a.createElement("p",null,'Workshops: "Find your real tune", "Find your real YOU", "Fell the music", "Jam session"'),n.a.createElement("h2",null,"Day three"),n.a.createElement("p",null,"Price: 50$"),n.a.createElement("p",null,'Workshops: "Increase your vocal range", "How to properly warmup before singing", "It\'s time for YOU!"'))},ye=a(118),ve=a(119),be=a(120),Oe=a(121),ge=(a(96),a(36)),Se=(a(97),function(e){function t(){var e,a;Object(H.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(M.a)(this,(e=Object(W.a)(t)).call.apply(e,[this].concat(c)))).isTaken=function(e){var t=a.props,r=t.seats,n=t.chosenDay;return r.some(function(t){return t.seat===e&&t.day===n})},a.prepareSeat=function(e){var t=a.props,r=t.chosenSeat,c=t.updateSeat,o=Object(ge.a)(a).isTaken;return e===r?n.a.createElement(K.a,{key:e,className:"seats__seat",color:"primary"},e):o(e)?n.a.createElement(K.a,{key:e,className:"seats__seat",disabled:!0,color:"secondary"},e):n.a.createElement(K.a,{key:e,color:"primary",className:"seats__seat",outline:!0,onClick:function(t){return c(t,e)}},e)},a}return Object(Q.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.loadSeats;e(),setInterval(e(),12e4)}},{key:"componentWillUnmount",value:function(){var e=this.props.loadSeats;clearInterval(setInterval({loadSeats:e},1200))}},{key:"render",value:function(){var e=this.prepareSeat,t=this.props.requests;return n.a.createElement("div",null,n.a.createElement("h3",null,"Pick a seat"),n.a.createElement("small",{id:"pickHelp",className:"form-text text-muted ml-2"},n.a.createElement(K.a,{color:"secondary"})," \u2013 seat is already taken"),n.a.createElement("small",{id:"pickHelpTwo",className:"form-text text-muted ml-2 mb-4"},n.a.createElement(K.a,{outline:!0,color:"primary"})," \u2013 it's empty"),t.LOAD_SEATS&&t.LOAD_SEATS.success&&n.a.createElement("div",{className:"seats"},Object(m.a)(Array(50)).map(function(t,a){return e(a+1)})),t.LOAD_SEATS&&t.LOAD_SEATS.pending&&n.a.createElement(oe.a,{animated:!0,color:"primary",value:50}),t.LOAD_SEATS&&t.LOAD_SEATS.error&&n.a.createElement(le.a,{color:"warning"},"Couldn't load seats..."))}}]),t}(n.a.Component)),_e=Object(s.b)(function(e){return{seats:(t=e,t.seats.data),requests:k(e)};var t},function(e){return{loadSeats:function(){return e(L())}}})(Se),je=function(e){function t(){var e,a;Object(H.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(M.a)(this,(e=Object(W.a)(t)).call.apply(e,[this].concat(n)))).state={order:{client:"",email:"",day:1,seat:""},isError:!1},a.updateSeat=function(e,t){var r=a.state.order;e.preventDefault(),a.setState({order:Object(p.a)({},r,{seat:t})})},a.updateTextField=function(e){var t=e.target,r=a.state.order,n=t.value,c=t.name;a.setState({order:Object(p.a)({},r,Object(j.a)({},c,n))})},a.updateNumberField=function(e){var t=e.target,r=a.state.order,n=t.value,c=t.name;a.setState({order:Object(p.a)({},r,Object(j.a)({},c,parseInt(n)))})},a.submitForm=function(){var e=Object(f.a)(E.a.mark(function e(t){var r,n,c;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a.state.order,n=a.props.addSeat,c=a.props.loadSeats,t.preventDefault(),!(r.client&&r.email&&r.day&&r.seat)){e.next=11;break}return e.next=7,n(r);case 7:c(),a.setState({order:{client:"",email:"",day:1,seat:""},isError:!1}),e.next=12;break;case 11:a.setState({isError:!0});case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(Q.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this.updateSeat,t=this.updateTextField,a=this.updateNumberField,r=this.submitForm,c=this.props.requests,o=this.state,l=o.order,s=o.isError;return n.a.createElement(ye.a,{className:"order-ticket-form",onSubmit:r},n.a.createElement(se.a,null,n.a.createElement(ie.a,{xs:"12",md:"6"},s&&n.a.createElement(le.a,{color:"warning"},"There are some errors in you form. Have you fill all the fields? Maybe you forgot to choose your seat?"),c.ADD_SEAT&&c.ADD_SEAT.error&&!s&&n.a.createElement(le.a,{color:"danger"},c.ADD_SEAT.error),c.ADD_SEAT&&c.ADD_SEAT.success&&!s&&n.a.createElement(le.a,{color:"success"},"You've booked your ticket! Check you email in order to make a payment."),c.ADD_SEAT&&c.ADD_SEAT.pending&&n.a.createElement(oe.a,{animated:!0,className:"mb-5",color:"primary",value:75}),n.a.createElement(ve.a,null,n.a.createElement(be.a,{for:"clientEmail"},"Name"),n.a.createElement(Oe.a,{type:"text",value:l.client,name:"client",onChange:t,id:"clientName",placeholder:"John Doe"})),n.a.createElement(ve.a,null,n.a.createElement(be.a,{for:"clientEmail"},"Email"),n.a.createElement(Oe.a,{type:"email",value:l.email,name:"email",onChange:t,id:"clientEmail",placeholder:"johndoe@example.com"})),n.a.createElement(ve.a,null,n.a.createElement(be.a,{for:"clientDay"},"Select which day of festivals are you interested in:"),n.a.createElement(Oe.a,{type:"select",value:l.day,name:"day",onChange:a,id:"exampleSelect"},n.a.createElement("option",null,"1"),n.a.createElement("option",null,"2"),n.a.createElement("option",null,"3")),n.a.createElement("small",{id:"dayHelp",className:"form-text text-muted"},"Every day of the festival uses individual ticket. You can book only one ticket at the time.")),n.a.createElement(ve.a,{check:!0},n.a.createElement(be.a,{check:!0},n.a.createElement(Oe.a,{required:!0,type:"checkbox"})," I agree with ",n.a.createElement("a",{href:"#"},"Terms and conditions")," and ",n.a.createElement("a",{href:"#"},"Privacy Policy"),".")),n.a.createElement(K.a,{color:"primary",className:"mt-3"},"Submit")),n.a.createElement(ie.a,{xs:"12",md:"6"},n.a.createElement(_e,{chosenDay:l.day,chosenSeat:l.seat,updateSeat:e}))))}}]),t}(n.a.Component),ke=Object(s.b)(function(e){return{requests:k(e)}},function(e){return{addSeat:function(t){return e(function(e){return function(){var t=Object(f.a)(E.a.mark(function t(a){var r;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(q({name:"ADD_SEAT"})),t.prev=1,t.next=4,y.a.post("".concat("/api","/seats"),e);case 4:r=t.sent,a({payload:r,type:N}),a(R({name:"ADD_SEAT"})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),a(C({name:"ADD_SEAT",error:t.t0.message}));case 12:case"end":return t.stop()}},t,null,[[1,9]])}));return function(e){return t.apply(this,arguments)}}()}(t))},loadSeats:function(){return e(L())}}})(je),De=function(){return n.a.createElement(ae.a,null,n.a.createElement("h1",null,"Order a ticket"),n.a.createElement(ke,null))},Ae=function(e){function t(){return Object(H.a)(this,t),Object(M.a)(this,Object(W.a)(t).apply(this,arguments))}return Object(Q.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return n.a.createElement(te,null,n.a.createElement(J.c,null,n.a.createElement(J.a,{path:"/",exact:!0,component:Ee}),n.a.createElement(J.a,{path:"/prices",exact:!0,component:he}),n.a.createElement(J.a,{path:"/order-a-ticket",exact:!0,component:De}),n.a.createElement(J.a,{component:fe})))}}]),t}(n.a.Component);a(103),a(104);o.a.render(n.a.createElement(function(){return n.a.createElement(s.a,{store:U},n.a.createElement(l.a,null,n.a.createElement(Ae,null)))},null),document.getElementById("root"))},58:function(e,t,a){e.exports=a(105)},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.dcc249c8.chunk.js.map