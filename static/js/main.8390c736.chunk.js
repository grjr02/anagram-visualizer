(this["webpackJsonpanagram-finder"]=this["webpackJsonpanagram-finder"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),r=n.n(s),i=n(18),c=n.n(i),d=(n(26),n(3)),l=(n(27),function(e){var t=Object(s.useState)(""),n=Object(d.a)(t,2),r=n[0],i=n[1];return Object(a.jsx)("div",{className:"input_container",children:Object(a.jsxs)("form",{className:"form_container",onSubmit:function(t){t.preventDefault(),e.setWord(r),i(""),e.setWordList([])},children:[Object(a.jsx)("input",{className:"textfield",type:"text",value:r,onChange:function(e){e.preventDefault();var t=e.target.value;!t.charAt(t.length-1).match(/[a-z]/i)&&t.length>0?i(r):i(t.substring(0,5).trim().toLowerCase())}}),Object(a.jsx)("input",{className:"button",type:"submit",value:"Search",disabled:e.disableInput?"disabled":"",style:{background:e.disableInput?"rgb(221, 160, 221, .1)":"var(--color-one)",cursor:e.disableInput?"default":"pointer"}})]})})}),o=n(8),u=n.n(o),b=n(6),p=n(9),j=n(19),h=n(20),f=n.n(h);function O(e,t){var n=[];return v(e,new Set,"",t,n),n}function v(e,t,n,a,s){if(n.length!==e.length)for(var r=0;r<e.length;r++)t.has(r)||(t.add(r),s.push([r]),n=(n+=e[r]).toLowerCase(),a.push(n),console.log("Word: "+n),v(e,t,n,a,s),t.delete(r),a.push(n),n=n.substring(0,n.length-1),s.push([r]))}var m=Object({NODE_ENV:"production",PUBLIC_URL:"/anagram-visualizer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_KEY:"272f671020msh94eb77b6292d3e4p1f5e61jsnf98eb101ecd0",REACT_APP_HOST:"wordsapiv1.p.rapidapi.com"}),x=m.REACT_APP_KEY,g=m.REACT_APP_HOST,_=function(e){var t=Object(s.useState)({id:"",arr:[]}),n=Object(d.a)(t,2),r=n[0],i=n[1],c=Object(s.useState)(""),l=Object(d.a)(c,2),o=l[0],h=l[1],v=e.word,m=e.setWordList;Object(s.useEffect)((function(){if(i({id:"",arr:[]}),h(""),m([]),v){var e=[];for(var t in v)e.push(v.charAt(t));i({id:v,arr:e}),r.arr.length>0&&r.id===v&&_()}}),[r.id,v,m,r.arr.length]);var _=function(){var t=Object(j.a)(u.a.mark((function t(){var n,a,s,r,i,c,d,l,o,j,v,m,_,y;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setDisableInput(!0),n=[],a=O(e.word,n),s=new Set,r=new Set,i=[],(c=document.getElementsByClassName("spinner"))[0].style.display="block",d=0,l=n;case 9:if(!(d<l.length)){t.next=33;break}if(o=l[d],r.has(o)){t.next=29;break}if(r.add(o),1!==o.length){t.next=16;break}return i.push(null),t.abrupt("continue",30);case 16:return j={method:"GET",url:"https://wordsapiv1.p.rapidapi.com/words/".concat(o,"/definitions"),headers:{"x-rapidapi-key":"".concat(x),"x-rapidapi-host":"".concat(g)}},t.prev=17,t.next=20,f.a.request(j);case 20:(v=t.sent).data.definitions.length>0?i.push(v.data):i.push(null),t.next=27;break;case 24:t.prev=24,t.t0=t.catch(17),i.push(null);case 27:t.next=30;break;case 29:i.push(null);case 30:d++,t.next=9;break;case 33:c[0].style.display="none",m=0,_=a.map((function(e){return{an:e,list:n[m],v:i[m++]}})),y=0,_.forEach((function(t){var n=document.getElementsByClassName("letters-arr"),a=[t.an];setTimeout((function(){(n[a].style.color="red"===n[a].style.color?"black":"red",s.has(a)?s.delete(a):(h(t.list),s.add(a)),t.v)&&(t.v=Object(p.a)(Object(p.a)({},t.v),{},{display:!1}),(0,e.setWordList)((function(e){return[].concat(Object(b.a)(e),[t.v])})))}),150*y+150),y++})),setTimeout((function(){h(""),e.setDisableInput(!1)}),150*y+150);case 39:case"end":return t.stop()}}),t,null,[[17,24]])})));return function(){return t.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"animation_container",children:[Object(a.jsx)("div",{className:"character_container",style:{display:r.arr.length>0?"block":"none"},children:r.arr.map((function(e,t){return Object(a.jsxs)("span",{className:"letters-arr",children:[" ",e," "]},e+t)}))}),Object(a.jsx)("div",{className:"spinner_container",children:Object(a.jsx)("span",{className:"spinner"})}),Object(a.jsx)("div",{className:"current_word_container",style:{display:o?"block":"none"},children:o})]})},y=(n(47),function(e){var t=Object(s.useState)(""),n=Object(d.a)(t,2),r=n[0],i=n[1],c=Object(s.useState)(!1),o=Object(d.a)(c,2),u=o[0],b=o[1];return Object(a.jsxs)("div",{className:"input_and_display",children:[Object(a.jsxs)("div",{className:"search_input",children:[Object(a.jsx)("h4",{className:"label",children:"Enter text"}),Object(a.jsx)(l,{setWord:i,setWordList:e.setWordList,disableInput:u})]}),Object(a.jsx)("div",{className:"word_display",children:Object(a.jsx)(_,{wordList:e.wordList,setWordList:e.setWordList,word:r,setDisableInput:b})})]})}),w=function(e){var t=Object(s.useState)([]),n=Object(d.a)(t,2),r=n[0],i=n[1];Object(s.useEffect)((function(){i(e.wordList)}),[e.wordList,r.display]);return Object(a.jsx)("div",{className:"list_container",children:Object(a.jsx)("div",{className:"word_container_item",children:r.map((function(e,t){return Object(a.jsxs)("div",{onClick:function(){return function(e){for(var t=r,n=0;n<t.length;n++)n===e?t[e].display=!t[e].display:t[n].display=!1;i(Object(b.a)(t))}(t)},className:"word_item",children:[e.word,Object(a.jsx)("div",{style:{flex:.5,padding:e.display?"10px":"0"},children:e.definitions.map((function(t,n){return Object(a.jsxs)("div",{className:"definitions",style:{display:e.display?"block":"none"},children:[n+1,". ",t.definition]},n)}))})]},e.word)}))})})};var S=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("span",{style:{alignSelf:"center",fontSize:"24px"},children:"Anagram Finder"})}),Object(a.jsx)("div",{className:"search_container",children:Object(a.jsx)(y,{wordList:n,setWordList:r})}),Object(a.jsx)("div",{className:"display_container",children:Object(a.jsx)(w,{wordList:n})})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))};c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root")),N()}},[[48,1,2]]]);
//# sourceMappingURL=main.8390c736.chunk.js.map