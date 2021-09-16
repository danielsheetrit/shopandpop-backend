(this.webpackJsonpshopandpop=this.webpackJsonpshopandpop||[]).push([[0],{114:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(16),a=c.n(r),s=c(12),o=c(9),i=c(41),u=c(70),l=c(49),d=c(23),j={loadFromStorage:function(e){var t=localStorage.getItem(e);return JSON.parse(t)},saveToStorage:function(e,t){localStorage.setItem(e,JSON.stringify(t))},clearAllStorage:function(e){localStorage.clear(e)}};var p="cartdb",b={products:[],cart:j.loadFromStorage(p)||[],currentUser:null};var h=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,f=Object(i.b)({productModule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PRODUCTS":return Object(d.a)(Object(d.a)({},e),{},{products:t.products});case"ADD_PRODUCT":return Object(d.a)(Object(d.a)({},e),{},{cart:[t.product].concat(Object(l.a)(e.cart))});case"REMOVE_PRODUCT":var c=e.cart.findIndex((function(e){return e.id===t.productId}));return Object(d.a)(Object(d.a)({},e),{},{cart:[].concat(Object(l.a)(e.cart.slice(0,c)),Object(l.a)(e.cart.slice(c+1)))});case"SET_USER":return Object(d.a)(Object(d.a)({},e),{},{currentUser:t.user});case"ERASE_CART":return Object(d.a)(Object(d.a)({},e),{},{cart:[]});default:return e}}}),O=Object(i.d)(f,h(Object(i.a)(u.a))),x=c(35),m=c(134),v=(c(85),c(8)),g=c(3),y=c.n(g),w=c(7),k=c(13),S=c(71),N=c.n(S),C="/api/",E={get:function(e){return P.apply(this,arguments)}};function P(){return(P=Object(w.a)(y.a.mark((function e(t){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N()({url:"".concat(C).concat(t),method:"get"});case 3:return c=e.sent,e.abrupt("return",c.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("Http service: error in",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var A={query:function(e){return T.apply(this,arguments)},addProduct:function(e){return D.apply(this,arguments)},removeProduct:function(e){return I.apply(this,arguments)},clearStorage:function(){return _.apply(this,arguments)}};function T(){return(T=Object(w.a)(y.a.mark((function e(t){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.get(t);case 3:return c=e.sent,e.abrupt("return",c);case 7:e.prev=7,e.t0=e.catch(0),console.log("product service: issues with get requset",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function D(){return(D=Object(w.a)(y.a.mark((function e(t){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.loadFromStorage(p);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0=[];case 5:(c=e.t0).unshift(t),j.saveToStorage(p,c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(w.a)(y.a.mark((function e(t){var c,n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.loadFromStorage(p);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0=[];case 5:(c=e.t0).length>0&&(n=c.find((function(e){return e.id===t})),r=c.findIndex((function(e){return e===n})),c.splice(r,1),j.saveToStorage(p,c));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(w.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j.clearAllStorage(p);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return function(){var t=Object(w.a)(y.a.mark((function t(c){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A.query(e);case 3:return n=t.sent,c({type:"SET_PRODUCTS",products:n}),t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),console.error("Products Action: err in getProducts",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}function U(e){return function(){var t=Object(w.a)(y.a.mark((function t(c){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=c({type:"ADD_PRODUCT",product:e}),t.abrupt("return",n);case 5:t.prev=5,t.t0=t.catch(0),console.error("Products Action: err in saveProducts",t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}()}function R(e){return function(){var t=Object(w.a)(y.a.mark((function t(c){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=c({type:"REMOVE_PRODUCT",productId:e}),t.abrupt("return",n);case 5:t.prev=5,t.t0=t.catch(0),console.error("Product Actions: err in removeProducts",t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}()}function F(e){return function(){var t=Object(w.a)(y.a.mark((function t(c){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=c({type:"SET_USER",user:e}),t.abrupt("return",n);case 5:t.prev=5,t.t0=t.catch(0),console.error("Product Actions: err in Setting user",t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}()}function M(){return function(){var e=Object(w.a)(y.a.mark((function e(t){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=t({type:"ERASE_CART"}),e.abrupt("return",c);case 5:e.prev=5,e.t0=e.catch(0),console.error("Product Actions: err in erase_cart",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}var q=c(1);function z(e){var t=e.product,c=Object(o.b)();function n(){return(n=Object(w.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c(U(t));case 3:n=e.sent,A.addProduct(n.product),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(q.jsxs)("div",{className:"product-preview flex column align-center",children:[Object(q.jsx)("div",{className:"preview-image",children:Object(q.jsx)("img",{src:t.image,alt:t.title})}),Object(q.jsx)("h4",{children:"".concat(t.title.slice(0,20),"...")}),Object(q.jsx)("span",{children:t.category}),Object(q.jsx)("span",{children:"$".concat(t.price)}),Object(q.jsxs)("div",{className:"preview-linkbox flex align-center",children:[Object(q.jsx)("button",{onClick:function(){return function(e){return n.apply(this,arguments)}(t)},children:"Add to cart"}),Object(q.jsx)(s.b,{to:"/details/".concat(t.id),children:"Details"})]})]})}function W(e){var t=e.products,c=e.productsToShow,n=e.productsHeader;return Object(q.jsxs)("div",{className:"product-list",children:[Object(q.jsx)("h2",{children:"".concat(n)}),Object(q.jsx)("div",{className:"product-list-grid",children:t.slice(0,c).map((function(e){return Object(q.jsx)(z,{product:e},e.id)}))})]})}function H(){return Object(q.jsx)("footer",{className:"flex column justify-center align-center",children:Object(q.jsx)("i",{children:"By Daniel Dev"})})}W.defaultProps={productsToShow:20,productsHeader:"Our latest products"};var J=c(140),B=c(138),Y=c(137),Z=Object(Y.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#6F00FF"}}}));function V(e){var t=e.isLoading,c=Z();return Object(q.jsx)("div",{children:Object(q.jsx)(J.a,{className:c.backdrop,open:t,children:Object(q.jsx)(B.a,{color:"inherit"})})})}function $(e){var t=e.product,c=Object(o.b)();function n(e,t){return r.apply(this,arguments)}function r(){return(r=Object(w.a)(y.a.mark((function e(t,n){var r,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,c(U(n));case 3:r=e.sent,A.addProduct(r.product),e.next=11;break;case 7:return e.next=9,c(R(n.id));case 9:a=e.sent,A.removeProduct(a.productId);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(q.jsxs)("div",{className:"product-amount flex align-center",children:[Object(q.jsx)("button",{onClick:function(){n(!1,t)},children:"-"}),Object(q.jsx)("span",{children:t.amount}),Object(q.jsx)("button",{onClick:function(){n(!0,t)},children:"+"})]})}function G(e){var t=e.cart,c=e.previewSize;return Object(q.jsx)("div",{children:t.map((function(e){return Object(q.jsxs)("div",{className:"".concat(c," flex"),children:[Object(q.jsx)("div",{className:"checkout-preview-img",children:Object(q.jsx)("img",{src:e.image,alt:e.title})}),Object(q.jsxs)("div",{className:"checkout-preview-header",children:[Object(q.jsx)("h3",{children:e.title}),Object(q.jsx)("p",{children:e.category.toUpperCase()}),Object(q.jsx)($,{product:e})]})]},e.id)}))})}function Q(e){var t=e.handleLogout,c=Object(o.c)((function(e){return e.productModule.currentUser}));return Object(q.jsxs)("section",{className:"dashbored",children:[Object(q.jsx)("h1",{children:"Dashbored"}),c&&Object(q.jsxs)("article",{className:"flex column",children:[Object(q.jsxs)("span",{children:["Email: ",c.email]}),Object(q.jsx)("button",{onClick:function(){t()},children:"Log out"})]})]})}G.defaultProps={previewSize:"large-preview"};var X=c(55),K=(c(106),X.a.initializeApp({apiKey:"AIzaSyBmejN4UyW8raYZWJ3GDYy6q2JQxQlnI18",authDomain:"milk-and-honey-951e7.firebaseapp.com",projectId:"milk-and-honey-951e7",storageBucket:"milk-and-honey-951e7.appspot.com",messagingSenderId:"768525696319",appId:"1:768525696319:web:be57340bcf6ba55c69a78a",measurementId:"G-CD79ZRZT4N"}));K.auth().setPersistence(X.a.auth.Auth.Persistence.LOCAL);var ee=K.auth();var te=[{path:"/details/:id",component:function(){var e=Object(n.useState)(null),t=Object(k.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),s=Object(k.a)(a,2),i=s[0],u=s[1],l=Object(v.g)().id,d=Object(o.b)();function j(){return(j=Object(w.a)(y.a.mark((function e(t){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(U(t));case 2:c=e.sent,A.addProduct(c.product);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(w.a)(y.a.mark((function e(t){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,A.query("product/".concat(t));case 3:c=e.sent,r(c),u(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(e){p.apply(this,arguments)}(l)}),[]),i?Object(q.jsx)(V,{isLoading:i}):Object(q.jsx)("section",{className:"product-details container",children:Object(q.jsxs)("div",{children:[c&&Object(q.jsxs)("div",{className:"details-main flex align-center justify-space-between",children:[Object(q.jsx)("div",{className:"details-image",children:Object(q.jsx)("img",{src:c.image,alt:c.title})}),Object(q.jsxs)("div",{className:"details-header flex column",children:[Object(q.jsx)("h2",{children:c.title}),Object(q.jsx)("span",{children:c.category.toUpperCase()}),Object(q.jsx)("p",{children:c.description}),Object(q.jsx)("span",{children:"$".concat(c.price)}),Object(q.jsx)("button",{onClick:function(){return function(e){return j.apply(this,arguments)}(c)},children:"Add to cart"})]})]}),Object(q.jsx)(H,{})]})})}},{path:"/categories/:category",component:function(){var e=Object(n.useState)([]),t=Object(k.a)(e,2),c=t[0],r=t[1],a=Object(v.g)().category,s=Object(n.useState)(!1),o=Object(k.a)(s,2),i=o[0],u=o[1];function l(){return(l=Object(w.a)(y.a.mark((function e(){var t,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),t="products/".concat(a),e.next=4,A.query(t);case 4:c=e.sent,r(c),u(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){l.apply(this,arguments)}()}),[a]),i?Object(q.jsx)(V,{isLoading:i}):Object(q.jsx)("section",{className:"category container",children:c&&Object(q.jsxs)("div",{children:[Object(q.jsx)(W,{products:c,productsHeader:a}),Object(q.jsx)(H,{})]})})}},{path:"/checkout",component:function(){var e=Object(n.useState)(null),t=Object(k.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),s=Object(k.a)(a,2),i=s[0],u=s[1],l=Object(n.useState)(null),d=Object(k.a)(l,2),j=d[0],p=d[1],b=Object(x.b)(),h=b.enqueueSnackbar,f=b.closeSnackbar,O=Object(o.c)((function(e){return e.productModule.cart})),m=Object(o.b)(),g=Object(v.f)();function S(e){var t=e.map((function(e){return e.title})),c={};t.forEach((function(e){c[e]?c[e]+=1:c[e]=1})),r(c)}function N(){return(N=Object(w.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.signOut();case 3:m(F(null)),g.push("/login"),C("You have successfully logged out.","success"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("faild to log out",e.t0),C("Had problem logging you out.","error");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function C(e,t){h("".concat(e),{variant:t}),setTimeout((function(){return f()}),4e3)}function E(){return(E=Object(w.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.clearStorage();case 2:m(M()),g.push("/"),C("Purchase successfully","success");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){S(O)}),[]),Object(n.useEffect)((function(){S(O)}),[O]),Object(n.useEffect)((function(){c&&function(e){var t=[],c=0,n=function(n){var r=O.find((function(e){return e.title===n}));n===r.title&&(r.amount=e[n],r.priceByAmount=r.amount*r.price,c+=r.priceByAmount),t.push(r)};for(var r in e)n(r);u(t),p(c)}(c)}),[c]),Object(q.jsx)("div",{className:"product-checkout container",children:Object(q.jsxs)("div",{className:"checkout-main",children:[Object(q.jsx)(Q,{handleLogout:function(){return N.apply(this,arguments)}}),Object(q.jsx)("div",{className:"checkout-header",children:Object(q.jsx)("h2",{children:"Order summary"})}),i.length?Object(q.jsxs)("div",{children:[Object(q.jsx)(G,{cart:i}),Object(q.jsxs)("div",{className:"prices-box flex align-center justify-space-between",children:[j&&Object(q.jsxs)("span",{children:["Total price: $",j.toFixed(2)]}),Object(q.jsx)("button",{onClick:function(){return function(){return E.apply(this,arguments)}()},children:"Complete oreder"})]})]}):Object(q.jsxs)("section",{className:"empty-msg-container flex column align-center",children:[Object(q.jsx)("h2",{className:"empty-msg",children:"Shopping cart is empty"}),Object(q.jsx)("div",{className:"empty-cart-img",children:Object(q.jsx)("img",{src:"https://res.cloudinary.com/dvbojtbzc/image/upload/v1630058584/milkhoney/empty_wa3q4o.svg",alt:"empty-cart-img"})})]}),Object(q.jsx)(H,{})]})})}},{path:"/auth/:login",component:function(){var e=Object(n.useState)(!0),t=Object(k.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),s=Object(k.a)(a,2),i=s[0],u=s[1],l=Object(n.useState)(""),d=Object(k.a)(l,2),j=d[0],p=d[1],b=Object(x.b)(),h=b.enqueueSnackbar,f=b.closeSnackbar,O=Object(o.b)(),m=Object(v.f)(),g=Object(v.g)();function S(e){"email"===e.target.name?u(e.target.value):p(e.target.value)}function N(){return(N=Object(w.a)(y.a.mark((function e(t){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!c){e.next=10;break}return e.next=5,ee.signInWithEmailAndPassword(i,j);case 5:n=e.sent,O(F(n.user)),C("You are now logged in!","success"),e.next=13;break;case 10:r=ee.createUserWithEmailAndPassword(i,j),O(F(r.i.user)),C("Welcome! we already logged you in","success");case 13:m.push("/"),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(1),console.log("faild to login",e.t0),C("Failed to login, try again.","error");case 20:return e.prev=20,E(),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[1,16,20,23]])})))).apply(this,arguments)}function C(e,t){h("".concat(e),{variant:t}),setTimeout((function(){return f()}),4e3)}function E(){u(""),p("")}return Object(n.useEffect)((function(){return g.login||r(!1),ee.onAuthStateChanged((function(e){O(F(e))}))}),[]),Object(q.jsx)("section",{className:"login container",children:Object(q.jsxs)("div",{className:"flex column align-center",children:[Object(q.jsxs)("h2",{children:[c?"Log in":"Sign up"," "]}),Object(q.jsxs)("form",{onSubmit:function(e){return function(e){return N.apply(this,arguments)}(e)},children:[Object(q.jsxs)("div",{className:"flex column input-container",children:[Object(q.jsx)("label",{htmlFor:"email-id",children:"Email"}),Object(q.jsx)("input",{value:i,id:"email-id",name:"email",type:"email",onChange:function(e){return S(e)},autoComplete:!0})]}),Object(q.jsxs)("div",{className:"flex column input-container",children:[Object(q.jsx)("label",{htmlFor:"password-id",children:"Password"}),Object(q.jsx)("input",{value:j,id:"password-id",name:"password",type:"password",onChange:function(e){return S(e)},autoComplete:!0})]}),Object(q.jsx)("button",{children:c?"Log in":"Sign up"})]}),Object(q.jsx)("div",{className:"signup-login-suggest",children:Object(q.jsxs)("p",{children:[c?"Not have an account yet?":"Already have an account?",Object(q.jsx)("button",{onClick:function(){return r(!c)},children:c?"Sign up":"Log in"})]})})]})})}},{path:"/",component:function(){var e=Object(o.c)((function(e){return e.productModule.products})),t=Object(o.b)(),c=Object(n.useState)(!1),r=Object(k.a)(c,2),a=r[0],i=r[1];function u(){return(u=Object(w.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,t(L("products/explore"));case 3:i(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){u.apply(this,arguments)}()}),[]),a?Object(q.jsx)(V,{isLoading:a}):Object(q.jsxs)("section",{className:"home container",children:[Object(q.jsxs)("div",{className:"hero-container flex align-center justify-space-between",children:[Object(q.jsx)("div",{className:"hero-img flex justify-center",children:Object(q.jsx)("img",{src:"https://res.cloudinary.com/dvbojtbzc/image/upload/v1629984131/milkhoney/shop-hero_dsqfch.svg",alt:"Milk&honey logo"})}),Object(q.jsxs)("div",{className:"hero-title",children:[Object(q.jsx)("h1",{children:"Welcome to Shop & pop"}),Object(q.jsxs)("p",{children:["We\u2019re a local shop to everything you desire. ",Object(q.jsx)("br",{}),"Located in one of Olympus\u2019s up and coming neighborhoods,",Object(q.jsx)("br",{}),"we are part of the city fabric, among entrepreneurs and innovators."]}),Object(q.jsx)(s.b,{to:"/categories/explore",children:"Start shopping"})]})]}),e&&Object(q.jsx)(W,{products:e,productsToShow:"8"}),Object(q.jsx)(H,{})]})}}],ce=c(72),ne=c(57),re=c(139),ae=c(25),se=c(73),oe=c.n(se),ie=Object(ae.a)((function(e){return{badge:{right:-3,top:7}}}))(re.a);function ue(e){var t=e.numOfItems;return Object(q.jsx)(ie,{badgeContent:t,color:"secondary",showZero:!0,children:Object(q.jsx)(oe.a,{})})}function le(){var e=Object(n.useState)(!1),t=Object(k.a)(e,2),c=t[0],r=t[1],a=Object(o.c)((function(e){return e.productModule.cart})),i=Object(o.c)((function(e){return e.productModule.currentUser})),u=Object(o.b)();return Object(n.useEffect)((function(){c?document.body.classList.add("hamburger-mode"):document.body.classList.remove("hamburger-mode")}),[c]),Object(n.useEffect)((function(){return ee.onAuthStateChanged((function(e){u(F(e))}))}),[]),Object(q.jsx)("header",{className:"container",children:Object(q.jsxs)("nav",{children:[Object(q.jsx)("div",{className:"logo",children:Object(q.jsx)("h1",{children:Object(q.jsx)(s.c,{to:"/",children:"SHOP&POP"})})}),Object(q.jsxs)("div",{className:"header-links",children:[Object(q.jsx)(s.c,{onClick:function(){return r(!1)},exact:!0,activeClassName:"selected",to:"/",children:"Home"}),Object(q.jsx)(s.c,{onClick:function(){return r(!1)},activeClassName:"selected",to:"/categories/men's clothing",children:"Mens"}),Object(q.jsx)(s.c,{onClick:function(){return r(!1)},activeClassName:"selected",to:"/categories/women's clothing",children:"Women"}),Object(q.jsx)(s.c,{onClick:function(){return r(!1)},activeClassName:"selected",to:"/categories/jewelery",children:"Jewelery"}),Object(q.jsx)(s.c,{onClick:function(){return r(!1)},activeClassName:"selected",to:"/categories/electronics",children:"Electronics"}),Object(q.jsx)(s.c,{onClick:function(){return r(!1)},activeClassName:"selected",to:"/categories/explore",children:"Explore"})]}),Object(q.jsx)("div",{className:"header-cart",children:i?Object(q.jsxs)(s.b,{to:"/checkout",children:["Dashbored",Object(q.jsx)(ue,{numOfItems:a.length})]}):Object(q.jsx)(s.b,{className:"login-btn",to:"/auth/login",children:"Log in"})}),Object(q.jsx)("div",{className:"hamburger",onClick:function(){return r(!c)},children:Object(q.jsx)(ce.a,{icon:c?ne.b:ne.a,size:"2x"})})]})})}function de(){return Object(q.jsxs)("div",{className:"App",children:[Object(q.jsx)(le,{}),Object(q.jsx)(v.c,{children:te.map((function(e){return Object(q.jsx)(v.a,{component:e.component,path:e.path},e.path)}))})]})}a.a.render(Object(q.jsx)(o.a,{store:O,children:Object(q.jsx)(s.a,{children:Object(q.jsx)(x.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},TransitionComponent:m.a,preventDuplicate:!0,maxSnack:1,children:Object(q.jsx)(de,{})})})}),document.getElementById("root"))},85:function(e,t,c){}},[[114,1,2]]]);
//# sourceMappingURL=main.233ea06b.chunk.js.map