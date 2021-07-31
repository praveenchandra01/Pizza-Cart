(this["webpackJsonpreact-cart"]=this["webpackJsonpreact-cart"]||[]).push([[0],{23:function(t,e,c){},30:function(t,e,c){},31:function(t,e,c){"use strict";c.r(e);var s=c(17),n=c.n(s),a=c(4),i=c(7),l=c(2),r=(c(23),c(1)),d=c(9),o=Object(r.createContext)(null),j=c(0),b=function(t){var e=Object(r.useState)(!1),c=Object(a.a)(e,2),s=c[0],n=c[1],l=Object(r.useContext)(o),b=l.cart,m=l.setCart,x=t.product;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(i.b,{to:"/products/".concat(x._id),children:Object(j.jsxs)("div",{style:{border:"2px solid #dbdbdb",borderRadius:"5px",maxWidth:"250px",boxShadow:"0px 5px 10px 0px #e8e8e8"},children:[Object(j.jsx)("img",{src:x.image,alt:x.name}),Object(j.jsxs)("div",{className:"text-center",children:[Object(j.jsx)("h2",{className:"text-lg font-bold py-2",children:x.name}),Object(j.jsx)("span",{className:"bg-gray-200 py-1 rounded-full text-sm px-4",children:x.size})]}),Object(j.jsxs)("div",{className:"p-2 flex justify-between items-center mt-4",children:[Object(j.jsxs)("span",{className:"font-bold",children:["\u20b9",x.price]}),Object(j.jsxs)("button",{disabled:s,onClick:function(t){!function(t,e){t.preventDefault();var c=Object(d.a)({},b);c.items||(c.items={}),c.items[e._id]?c.items[e._id]+=1:c.items[e._id]=1,c.totalItems||(c.totalItems=0),c.totalItems+=1,m(c),n(!0),setTimeout((function(){n(!1)}),1e3)}(t,x)},className:"".concat(s?"bg-green-500":"bg-yellow-500 hover:bg-yellow-400","  transition duration-300 py-1 px-3 rounded-full font-bold"),children:["ADD",s?"ED":""]})]})]})})})},m=function(){var t=Object(r.useState)([]),e=Object(a.a)(t,2),c=e[0],s=e[1];return Object(r.useEffect)((function(){fetch("https://star-spark-pasta.glitch.me/api/products/").then((function(t){return t.json()})).then((function(t){s(t)}))}),[]),Object(j.jsxs)("div",{className:"container mx-auto pb-24",children:[Object(j.jsx)("h1",{className:"text-lg pl-3 font-bold my-8",children:"Products"}),Object(j.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 my-8 px-2.5 gap-6 md:gap-12 ",children:c.map((function(t){return Object(j.jsx)(b,{product:t},t._id)}))})]})},x=c.p+"static/media/pizza.80b3d1db.png",u=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"hero pb-10",children:Object(j.jsxs)("div",{className:"container mx-auto flex items-center justify-between",children:[Object(j.jsxs)("div",{className:"p-6 md:pl-12 w-1/2",children:[Object(j.jsx)("h6",{className:"text-lg md:text-3xl",children:Object(j.jsx)("em",{children:"Are you hungry?"})}),Object(j.jsx)("h1",{className:"text-3xl md:text-7xl font-bold",children:"Don't wait !"}),Object(j.jsx)("button",{style:{transition:"all .3s"},className:"px-3 py-1 sm:px-6 sm:py-2 text-sm sm:text-lg rounded-full text-white font-bold mt-2 sm:mt-4 bg-yellow-500 hover:bg-yellow-400",children:"Order Now"})]}),Object(j.jsx)("div",{className:"w-1/2",children:Object(j.jsx)("img",{className:"w-5/6 m-auto py-10",src:x,alt:"Pizza"})})]})}),Object(j.jsx)("div",{className:"pb-12",children:Object(j.jsx)(m,{})})]})},O=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(m,{})})},p=c.p+"static/media/empty-cart.621445dd.png";var h=function(){var t=0,e=Object(r.useState)([]),c=Object(a.a)(e,2),s=c[0],n=c[1],l=Object(r.useContext)(o),b=l.cart,m=l.setCart,x=Object(r.useState)(!1),u=Object(a.a)(x,2),O=u[0],h=u[1];Object(r.useEffect)((function(){Object(d.a)({},b).items&&(O||fetch("https://star-spark-pasta.glitch.me/api/products/cart-items",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({ids:Object.keys(b.items)})}).then((function(t){return t.json().then((function(t){n(t),h(!0)}))})))}),[b,O]);var f=function(t){return b.items[t]},g=function(e,c){var s=c*f(e);return t+=s,s};return s.length?Object(j.jsxs)("div",{className:"container mx-auto lg:w-1/2 w-full pb-24 p-4",children:[Object(j.jsx)("h1",{className:"my-12 font-bold",children:"Cart items"}),Object(j.jsx)("ul",{children:s.map((function(t){return Object(j.jsx)("li",{style:{background:"#ececec",padding:"10px",borderRadius:"10px"},className:"mb-6",children:Object(j.jsxs)("div",{className:"flex items-center justify-between",children:[Object(j.jsx)(i.b,{to:"/products/".concat(t._id),children:Object(j.jsxs)("div",{className:"flex items-center",children:[Object(j.jsx)("img",{className:"h-16",src:t.image,alt:""}),Object(j.jsx)("span",{className:"font-bold ml-4 w-20 md:w-48",children:t.name})]})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){!function(t){var e=b.items[t];if(1!==e){var c=Object(d.a)({},b);c.items[t]=e-1,c.totalItems-=1,m(c)}}(t._id)},className:"bg-yellow-500 hover:bg-yellow-400 transition duration-300 px-3 py-1 rounded-full leading-none",children:Object(j.jsx)("i",{className:"text-xs fas fa-minus"})}),Object(j.jsx)("b",{className:"px-4",children:f(t._id)}),Object(j.jsx)("button",{onClick:function(){!function(t){var e=b.items[t],c=Object(d.a)({},b);c.items[t]=e+1,c.totalItems+=1,m(c)}(t._id)},className:"bg-yellow-500 hover:bg-yellow-400 transition duration-300 px-3 py-1 rounded-full leading-none",children:Object(j.jsx)("i",{className:"text-xs fas fa-plus"})})]}),Object(j.jsxs)("span",{children:["\u20b9 ",g(t._id,t.price)]}),Object(j.jsx)("button",{onClick:function(){!function(t){var e=Object(d.a)({},b),c=e.items[t];delete e.items[t],e.totalItems-=c,m(e);var a=s.filter((function(e){return e._id!==t}));n(a)}(t._id)},className:"bg-red-500 hover:bg-red-600 transition duration-500 px-4 py-2 rounded-full leading-none text-white",children:"Delete"})]})},t._id)}))}),Object(j.jsx)("hr",{className:"my-6"}),Object(j.jsxs)("div",{className:"text-right",children:[Object(j.jsx)("b",{children:"Grand Total:"})," \u20b9 ",t]}),Object(j.jsx)("div",{className:"text-right mt-6",children:Object(j.jsx)("button",{onClick:function(){window.alert("Order placed successfully!"),n([]),m({})},className:"bg-yellow-500 px-4 py-2 rounded-full leading-none",children:"Order Now"})})]}):Object(j.jsx)("img",{className:"mx-auto w-1/2 mt-6 mb-6",src:p,alt:"empty-cart"})};c(30);var f=function(){var t=Object(r.useState)(!1),e=Object(a.a)(t,2),c=e[0],s=e[1];Object(r.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>30?s(!0):s(!1)}))}),[]);var n=Object(r.useContext)(o).cart,l=Object(d.a)({},n);return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("nav",{className:"nav ".concat(c&&"nav_background"," w-full flex items-center justify-between md:p-4"),children:[Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("img",{style:{height:45,paddingLeft:10},src:"data:image/png;base64,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",alt:"logo"})}),Object(j.jsxs)("ul",{className:"flex items-center",children:[Object(j.jsxs)("li",{className:"listItems highlight",children:[" ",Object(j.jsx)(i.b,{to:"/",children:"Home"})," "]}),Object(j.jsxs)("li",{className:"ml-6 listItems highlight",children:[" ",Object(j.jsx)(i.b,{to:"/products",children:"Products"})," "]}),Object(j.jsx)("li",{className:"ml-6 ",children:Object(j.jsx)(i.b,{to:"/cart",children:Object(j.jsxs)("div",{style:{background:"#F59E0D",display:"flex",borderRadius:50,padding:"5px 10px",marginRight:10},children:[Object(j.jsx)("span",{children:l.totalItems?l.totalItems:""}),Object(j.jsx)("img",{className:"ml-2",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFzSURBVHgBvVSBUcMwDJSzAGECsgEZwRvABmQD2CBsQJkANqAbNBu0nSBlAtjASI3cU4ytxL20f6eLYtnRSy/HAMM5V3nfGHOApYEJejfGD1oLS4EqcGlYWAAFt+YdrWOTeIRLgNiLStZwKbAmR20iBJqIX6M9B3tp7ZXkKBJ5dvwscdOdWK/RHiK+ZZP4QGv5Ga1kJVrWQCbwTCnOb6cq8YzBl87+y4Rfi/PfqSSd8O+JGQytqdh/0nwYty49PFJ8/sBs4P4v0a5K27gJLyVPTKP5/N57Pei9UAjthe97bGE8Uf98Zl7x+g40EDNRyQZmIjh3/GMYZTOx34olEnA/keMGrUHzGt7ib+sXlCRy1s/BiWBSE2ag91TH6azRdrGI1NesEUYQwU+1VUrSUrszTrsTMxO0ot9v4cdJA471PDTZCWJDYEV8FcRGI1/MzFNmxnM1HODGv5k+iNmgkkbGDWTADTeYWK7DyWHRLdoBYx1cG3891gjItGU6pwAAAABJRU5ErkJggg==",alt:"cart-icon"})]})})})]})]})})},g=function(){var t=Object(r.useState)(!1),e=Object(a.a)(t,2),c=e[0],s=e[1],n=Object(r.useContext)(o),i=n.cart,b=n.setCart,m=Object(r.useState)({}),x=Object(a.a)(m,2),u=x[0],O=x[1],p=Object(l.g)();Object(r.useEffect)((function(){fetch("https://star-spark-pasta.glitch.me/api/products/".concat(p._id)).then((function(t){return t.json()})).then((function(t){console.log(t),O(t)}))}),[p._id]);var h=Object(l.f)();return Object(j.jsxs)("div",{className:"container mx-auto mt-12 px-6",children:[Object(j.jsx)("button",{className:"mb-12 font-bold",onClick:function(){h.goBack()},children:"Back"}),Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)("img",{src:u.image,alt:""}),Object(j.jsxs)("div",{className:"ml-6 md:ml-16",children:[Object(j.jsx)("h1",{className:"text-xl font-bold",children:u.name}),Object(j.jsx)("div",{className:"text-md",children:u.size}),Object(j.jsxs)("div",{className:"font-bold mt-2",children:["\u20b9 ",u.price]}),Object(j.jsx)("button",{disabled:c,onClick:function(t){!function(t,e){t.preventDefault();var c=Object(d.a)({},i);c.items||(c.items={}),c.items[e._id]?c.items[e._id]+=1:c.items[e._id]=1,c.totalItems||(c.totalItems=0),c.totalItems+=1,b(c),s(!0),setTimeout((function(){s(!1)}),1e3)}(t,u)},className:"".concat(c?"bg-green-500":"bg-yellow-500 hover:bg-yellow-400"," transition duration-300 py-1 px-3 rounded-full font-bold"),children:"".concat(c?"ADDED":"Add to cart")})]})]})]})},A=function(){var t=Object(r.useState)({}),e=Object(a.a)(t,2),c=e[0],s=e[1];return Object(r.useEffect)((function(){var t=window.localStorage.getItem("cart");s(JSON.parse(t))}),[]),Object(r.useEffect)((function(){!function(t){window.localStorage.setItem("cart",JSON.stringify(t))}(c)}),[c]),Object(j.jsx)("div",{children:Object(j.jsx)(i.a,{children:Object(j.jsxs)(o.Provider,{value:{cart:c,setCart:s},children:[Object(j.jsx)(f,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",component:u,exact:!0}),Object(j.jsx)(l.a,{path:"/products",exact:!0,component:O}),Object(j.jsx)(l.a,{path:"/products/:_id",component:g}),Object(j.jsx)(l.a,{path:"/cart",component:h})]})]})})})};n.a.render(Object(j.jsx)(A,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.b1c7c42f.chunk.js.map