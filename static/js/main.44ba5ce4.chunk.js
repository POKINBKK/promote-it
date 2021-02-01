(this["webpackJsonpsingle-cover-editor"]=this["webpackJsonpsingle-cover-editor"]||[]).push([[0],{15:function(e,t,s){},16:function(e,t,s){},19:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(1),l=s.n(c),i=s(8),n=s.n(i),r=(s(15),s(7)),d=s(3),o=(s(16),s(2)),x=s(9),j=s.n(x);s(17);var m=function(){var e=[{id:"1",name:"joox",display:"Joox"},{id:"2",name:"spotify",display:"Spotify"},{id:"3",name:"applemusic",display:"Apple Music"},{id:"4",name:"itunes",display:"iTunes"},{id:"5",name:"tidal",display:"Tidal"},{id:"6",name:"youtubemusic",display:"Youtube Music"},{id:"7",name:"soundcloud",display:"SoundCloud"},{id:"8",name:"deezer",display:"Deezer"},{id:"9",name:"kkbox",display:"KKBox"}],t=["50","100","200","300","400","500","600","700","800","900"],s=l.a.useState("Your Artist Name"),c=Object(d.a)(s,2),i=c[0],n=c[1],x=l.a.useState("Your Song Title"),m=Object(d.a)(x,2),p=m[0],b=m[1],u=l.a.useState([]),h=Object(d.a)(u,2),O=h[0],g=h[1],f=l.a.useState("bg-pink-400"),N=Object(d.a)(f,2),w=N[0],v=N[1],y=l.a.useState("asset/dummy_songcover.png"),k=Object(d.a)(y,2),S=k[0],C=k[1],P=l.a.useState("asset/dummy_logo.png"),A=Object(d.a)(P,2),z=A[0],_=A[1],F=l.a.useState("w"),K=Object(d.a)(F,2),T=K[0],U=K[1],I=function(t){for(var s,a=Object(r.a)(O),c=!1,l=0;l<e.length;l++)e[l].id===t.target.value&&(s=e[l]);if(a.length>0)for(var i=0;i<a.length;i++)a[i].id===s.id&&(c=!0,a.splice(i,1));c||(a=[].concat(Object(r.a)(a),[s])),g(a)},B=function(e){U(e.target.value)};return Object(a.jsxs)("div",{className:"w-full",children:[Object(a.jsx)("div",{className:"text-center bg-gradient-to-br from-pink-500 to-red-500 shadow-xl z-50",children:Object(a.jsxs)("div",{className:"flex items-center justify-center",children:[Object(a.jsx)("p",{className:"text-3xl text-white header-style",children:"Promote it! by"}),Object(a.jsx)("img",{src:"asset/pok_logo_white.png",className:"w-16 ml-4",alt:"pok supakit logo"})]})}),Object(a.jsxs)("div",{className:"w-full px-8 py-4 grid grid-cols-4 gap-2 z-40",children:[Object(a.jsxs)("div",{className:"col-span-1 p-2 border rounded-xl bg-gray-50 shadow-md",children:[Object(a.jsxs)("div",{className:"pb-2 border-b flex",children:[Object(a.jsx)(o.e,{className:"w-12 mt-2",size:24}),Object(a.jsx)("p",{className:"text-4xl",children:"Editor"})]}),Object(a.jsxs)("div",{className:"w-full pt-4",children:[Object(a.jsx)("p",{className:"text-xl pb-2",children:"Artist Name(s)"}),Object(a.jsx)("input",{onChange:function(e){n(e.target.value)},className:"border rounded-xl h-12 w-full text-xl px-2 focus-within:border-pink-500 focus:outline-none"})]}),Object(a.jsxs)("div",{className:"w-full pt-4",children:[Object(a.jsx)("p",{className:"text-xl pb-2",children:"Song Title"}),Object(a.jsx)("input",{onChange:function(e){b(e.target.value)},className:"border rounded-xl h-12 w-full text-xl px-2 focus-within:border-pink-500 focus:outline-none"})]}),Object(a.jsxs)("div",{className:"w-full pt-4",children:[Object(a.jsx)("p",{className:"text-xl pb-2",children:"Mode"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",id:"white",name:"mode",value:"w",className:"w-8",onClick:B,defaultChecked:!0}),Object(a.jsx)("label",{htmlFor:"white",className:"text-lg",children:"Light"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"radio",id:"black",name:"mode",value:"b",className:"w-8",onClick:B}),Object(a.jsx)("label",{htmlFor:"black",className:"text-lg",children:"Dark"}),Object(a.jsx)("br",{})]})]}),Object(a.jsxs)("div",{className:"w-full pt-4",children:[Object(a.jsx)("p",{className:"text-xl pb-2",children:"Select Streaming Platforms"}),Object(a.jsx)("p",{className:"text-md pb-1 text-red-600",children:"(recommended : up to 4)"}),Object(a.jsx)("div",{className:"w-full",children:e.map((function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{className:"w-8",type:"checkbox",id:e.name,name:e.name,value:e.id,onChange:I}),Object(a.jsx)("label",{className:"text-lg",htmlFor:e.name,children:e.display}),Object(a.jsx)("br",{})]},e.id)}))})]}),Object(a.jsxs)("div",{className:"w-full pt-4",children:[Object(a.jsx)("p",{className:"text-xl pb-2",children:"Upload Your Artwork"}),Object(a.jsx)("p",{className:"text-md pb-1 text-red-600",children:"(recommended : more than 1000px*1000px and square)"}),Object(a.jsx)("input",{type:"file",name:"artwork-upload",id:"image-input1",accept:"image/*",onChange:function(e){var t=new FileReader;t.onload=function(){2===t.readyState&&C(t.result)};try{t.readAsDataURL(e.target.files[0])}catch(s){C("asset/dummy_songcover.png")}},className:"border pt-2 rounded-xl h-12 w-full text-xl px-2 focus-within:border-pink-500 focus:outline-none"})]}),Object(a.jsxs)("div",{className:"w-full pt-4",children:[Object(a.jsx)("p",{className:"text-xl pb-2",children:"Upload Your Logo"}),Object(a.jsx)("p",{className:"text-md pb-1 text-red-600",children:"(recommended : more than 800px*800px and square)"}),Object(a.jsx)("input",{type:"file",name:"logo-upload",id:"image-input2",accept:"image/*",onChange:function(e){var t=new FileReader;t.onload=function(){2===t.readyState&&_(t.result)};try{t.readAsDataURL(e.target.files[0])}catch(s){_("asset/dummy_logo.png")}},className:"border pt-2 rounded-xl h-12 w-full text-xl px-2 focus-within:border-pink-500 focus:outline-none"})]}),Object(a.jsxs)("div",{className:"w-full pt-4",children:[Object(a.jsx)("p",{className:"text-xl pb-2",children:"Select Background Color"}),["gray","red","yellow","green","blue","indigo","purple","pink"].map((function(e){return Object(a.jsx)("div",{className:"grid grid-cols-10 gap-1 pt-1",children:t.map((function(t){return Object(a.jsx)("div",{className:"col-span-1 h-8 rounded cursor-pointer bg-"+e+"-"+t,onClick:function(){return function(e,t){v("bg-"+e+"-"+t)}(e,t)}},t)}))},e)}))]}),Object(a.jsx)("div",{className:"w-full py-4",children:Object(a.jsxs)("button",{onClick:function(){j.a.toBlob(document.getElementById("cover-image")).then((function(e){window.saveAs(e,"single-cover.png")}))},className:"flex mx-auto bg-pink-500 text-md p-2 rounded text-white hover:bg-pink-600 focus:outline-none",children:[Object(a.jsx)(o.b,{className:"my-auto"}),Object(a.jsx)("p",{className:"pl-2",children:"Save Image"})]})})]}),Object(a.jsxs)("div",{className:"col-span-3 items-center justify-center pl-4",children:[Object(a.jsxs)("div",{className:"pb-2 flex items-center justify-center",children:[Object(a.jsx)(o.f,{className:"w-12 mt-2",size:24}),Object(a.jsx)("p",{className:"text-3xl",children:"Preview"})]}),Object(a.jsxs)("div",{id:"cover-image",className:"default-cover relative "+w+" text-center",children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{className:"b"===T?"text-gray-900 pt-14 text-3xl":"text-white pt-14 text-3xl",children:['\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e1f\u0e31\u0e07\u0e40\u0e1e\u0e25\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e08\u0e32\u0e01 "',i,'"']}),Object(a.jsx)("p",{className:"b"===T?"pt-4 text-7xl text-gray-900":"pt-4 text-7xl text-white",children:p})]}),Object(a.jsx)("div",{className:"py-8",children:Object(a.jsx)("img",{src:S,className:"coverimg-size mx-auto shadow-2xl",alt:"your song cover"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:"b"===T?"pt-4 text-3xl text-gray-900":"pt-4 text-3xl text-white",children:"\u0e44\u0e14\u0e49\u0e41\u0e25\u0e49\u0e27\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49\u0e17\u0e35\u0e48"}),Object(a.jsx)("div",{className:"pt-3 flex items-center justify-center overflow-x-hidden",children:O.map((function(e){return Object(a.jsx)("img",{className:"w-1/6 mx-4",src:"asset/streaming-icon-"+T+"/"+e.name+".png",alt:e.display},e.id)}))})]}),Object(a.jsx)("img",{src:z,className:"w-16 absolute bottom-2 right-2",alt:"your logo"})]}),Object(a.jsxs)("div",{className:"w-full border rounded-xl mt-8 bg-gray-50 shadow-md",children:[Object(a.jsxs)("div",{className:"py-6 flex w-fit mx-auto",children:[Object(a.jsx)(o.c,{className:"w-12 text-yellow-400 mt-2",size:28}),Object(a.jsx)("p",{className:"text-4xl",children:"Support me!"})]}),Object(a.jsxs)("div",{className:"flex w-fit mx-auto pb-4",children:[Object(a.jsx)("a",{href:"https://www.youtube.com/channel/UCp-1AwMqegD9rj4SPKtw3sg",target:"_blank",rel:"noreferrer",children:Object(a.jsxs)("div",{className:"py-2 px-4 flex",children:[Object(a.jsx)(o.g,{className:"w-12 mt-1 text-red-500",size:28}),Object(a.jsx)("p",{className:"text-2xl",children:"POK SUPAKIT"})]})}),Object(a.jsx)("a",{href:"https://www.facebook.com/poksupakitishere",target:"_blank",rel:"noreferrer",children:Object(a.jsxs)("div",{className:"py-2 px-4 flex",children:[Object(a.jsx)(o.a,{className:"w-12 mt-1 text-blue-600",size:28}),Object(a.jsx)("p",{className:"text-2xl",children:"POK SUPAKIT"})]})}),Object(a.jsx)("a",{href:"https://www.instagram.com/p_o.k/",target:"_blank",rel:"noreferrer",children:Object(a.jsxs)("div",{className:"py-2 px-4 flex",children:[Object(a.jsx)(o.d,{className:"w-12 mt-2 text-purple-600",size:28}),Object(a.jsx)("p",{className:"text-2xl",children:"p_o.k"})]})})]}),Object(a.jsx)("div",{className:"border-t py-4 text-center",children:Object(a.jsx)("p",{children:"\xa9 Promote it! by POK SUPAKIT 2021, All Right Reserved. "})})]})]})]})]})},p=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,20)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),l(e),i(e)}))};n.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root")),p()}},[[19,1,2]]]);
//# sourceMappingURL=main.44ba5ce4.chunk.js.map