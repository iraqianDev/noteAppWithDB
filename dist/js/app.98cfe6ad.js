(function(){"use strict";var e={2898:function(e,t,l){var n=l(9242),o=(l(7658),l(3396)),r=l(4870);const a={class:"pt-5"},s={class:"bg-white w-full px-5 py-7 sm:px-10 sm:py-10 rounded-full flex items-center overflow-hidden gap-3"},i={class:"grid gap-2 flex-1 min-w-[50px]"};var u={__name:"addNote",emits:["add"],setup(e,{emit:t}){const l=(0,r.iH)(""),u=(0,r.iH)(""),c=()=>{const e=l.value.trim();e.length>0?(t("add",{messege:l.value,time:(new Date).toDateString(),description:u.value}),l.value="",u.value=""):alert("Please Add messege to the note!")};return(e,t)=>((0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",s,[(0,o._)("div",i,[(0,o.wy)((0,o._)("input",{type:"text",class:"flex-1 shrink py-2 px-2 sm:py-5 sm:px-5 h-full outline-none rounded-full","onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),placeholder:"Note Title"},null,512),[[n.nr,l.value]]),(0,o.wy)((0,o._)("input",{type:"text",class:"flex-1 shrink py-2 px-2 sm:py-5 sm:px-5 h-full outline-none rounded-full","onUpdate:modelValue":t[1]||(t[1]=e=>u.value=e),placeholder:"description"},null,512),[[n.nr,u.value]])]),(0,o._)("button",{onClick:c,class:"bg-blue-500 text-white px-1 py-2 sm:px-3 sm:py-5 rounded-full"}," Add Note ")])]))}};const c=u;var d=c,p=l(7139);const v={class:"mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3"},f={class:"font-bold w-full text-2xl after:absolute after:w-1 after:h-10 after:left-0 after:bg-black mb-1 max-w-[10ch] overflow-x-visible"},g={class:"text-gray-400 mb-5"},m={class:"text-lg"},w={class:"flex gap-2 justify-end"},x=["onClick"],y=(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"},null,-1),h=[y],b=["onClick"],_=(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"},null,-1),k=[_];var N={__name:"NotesList",props:{Notes:Array},emits:["delet","edit"],setup(e,{emit:t}){const l=(e,l)=>{t("delet",{note:e,index:l})},n=(e,l)=>{t("edit",{note:e,index:l})};return(t,r)=>((0,o.wg)(),(0,o.iD)("div",v,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.Notes,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"bg-white w-full p-8 relative rounded-lg",key:t},[(0,o._)("h3",f,(0,p.zw)(e.messege),1),(0,o._)("p",g,(0,p.zw)(e.time),1),(0,o._)("p",m,(0,p.zw)(e.description),1),(0,o._)("div",w,[((0,o.wg)(),(0,o.iD)("svg",{onClick:l=>n(e,t),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 cursor-pointer hover:stroke-green-500 duration-300"},h,8,x)),((0,o.wg)(),(0,o.iD)("svg",{onClick:n=>l(e,t),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 cursor-pointer hover:stroke-red-500 duration-300"},k,8,b))])])))),128))]))}};const A=N;var C=A;const j={class:"relative w-full h-full z-50"},O=["onClick"],S={class:"bg-white w-1/2 p-7 rounded-lg grid"},H=(0,o._)("h2",{class:"text-3xl"},"Edit Note",-1),D={class:"flex justify-end gap-3"};var M={__name:"ModelForm",props:{NotesArray:Array,currentindex:Number},emits:["close","save"],setup(e,{emit:t}){const l=e,a=(0,r.iH)(l.NotesArray[l.currentindex].messege),s=(0,r.iH)(l.NotesArray[l.currentindex].description),i=()=>{t("close")},u=()=>{let e=a.value.trim();e.length>0?t("save",{EditMessege:a,Editdesc:s,index:l.currentindex}):alert("Please add value")};return(e,t)=>((0,o.wg)(),(0,o.j4)(o.lR,{to:"#model"},[(0,o._)("div",j,[(0,o._)("div",{onClick:(0,n.iM)(i,["self"]),class:"bg-black bg-opacity-50 absolute w-screen h-screen top-0 flex justify-center items-center"},[(0,o.Wm)(n.uT,{name:"fade",appear:""},{default:(0,o.w5)((()=>[(0,o._)("div",S,[H,(0,o.wy)((0,o._)("input",{type:"text",class:"bg-gray-100 my-3 px-2 py-3","onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e)},null,512),[[n.nr,a.value]]),(0,o.wy)((0,o._)("input",{type:"text",class:"bg-gray-100 px-2 py-3 mb-3","onUpdate:modelValue":t[1]||(t[1]=e=>s.value=e)},null,512),[[n.nr,s.value]]),(0,o._)("div",D,[(0,o.WI)(e.$slots,"default"),(0,o._)("button",{class:"bg-green-500 px-3 py-2 rounded-xl text-white",onClick:u}," save ")])])])),_:3})],8,O)])]))}};const E=M;var U=E;const L={class:"relative w-full h-full z-50"},z=["onClick"],I=(0,o._)("h3",{class:"text-2xl font-bold"},"Do you wish to delete?",-1),P=(0,o._)("p",{class:"my-3"}," Please confirm that you want to delete this Note below ",-1);var T={__name:"ModelDelete",emits:["close","delete"],setup(e,{emit:t}){const l=()=>{t("close")},r=()=>{t("delete")};return(e,t)=>((0,o.wg)(),(0,o.j4)(o.lR,{to:"#model"},[(0,o._)("div",L,[(0,o._)("div",{onClick:(0,n.iM)(l,["self"]),class:"bg-black bg-opacity-50 absolute w-screen h-screen top-0 flex justify-center items-center"},[(0,o.Wm)(n.uT,{name:"fade",appear:""},{default:(0,o.w5)((()=>[(0,o._)("div",{class:"bg-white w-1/2 p-7 rounded-lg grid"},[I,P,(0,o._)("div",{class:"flex justify-end gap-3"},[(0,o._)("button",{class:"bg-red-500 px-3 py-2 rounded-xl text-white",onClick:l}," cancel "),(0,o._)("button",{class:"bg-green-500 px-3 py-2 rounded-xl text-white",onClick:r}," delete ")])])])),_:1})],8,z)])]))}};const V=T;var W=V;const J={class:"container mx-auto max-w-[90%]"};var Y={__name:"App",setup(e){const t=(0,r.iH)(!1),l=(0,r.iH)(!1),n=(0,r.iH)(null),a=(0,r.iH)(null),s=(0,r.iH)([]),i=e=>{s.value.push(e),localStorage.setItem("NotesArray",JSON.stringify(s.value))};(0,o.bv)((()=>{if(localStorage.getItem("NotesArray")){const e=JSON.parse(localStorage.getItem("NotesArray"));s.value=e}}));const u=e=>{l.value=!0,(0,o.YP)([l,n],(([t,l])=>{t&&l&&(s.value.splice(e.index,1),p(),n.value=!1,localStorage.setItem("NotesArray",JSON.stringify(s.value))),t&&!1===l&&(n.value=null)}))},c=e=>{t.value=!0,a.value=e.index},p=()=>{t.value?t.value=!1:l.value=!1},v=e=>{s.value[e.index].messege=e.EditMessege,s.value[e.index].description=e.Editdesc,t.value=!1,localStorage.setItem("NotesArray",JSON.stringify(s.value))};return(e,f)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[t.value?((0,o.wg)(),(0,o.j4)((0,r.SU)(U),{key:0,isEditing:t.value,onClose:p,onSave:v,currentindex:a.value,NotesArray:s.value},{default:(0,o.w5)((()=>[(0,o._)("button",{class:"bg-red-500 px-3 py-2 rounded-xl text-white",onClick:p}," cancel ")])),_:1},8,["isEditing","currentindex","NotesArray"])):(0,o.kq)("",!0),l.value?((0,o.wg)(),(0,o.j4)((0,r.SU)(W),{key:1,onClose:p,onDelete:f[0]||(f[0]=e=>n.value=!0)},{default:(0,o.w5)((()=>[(0,o.Uk)(" >")])),_:1})):(0,o.kq)("",!0),(0,o._)("div",J,[(0,o.Wm)((0,r.SU)(d),{onAdd:i}),(0,o.Wm)((0,r.SU)(C),{Notes:s.value,onDelet:u,onEdit:c},null,8,["Notes"])])],64))}};const q=Y;var B=q;(0,n.ri)(B).mount("#app")}},t={};function l(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,l),r.exports}l.m=e,function(){var e=[];l.O=function(t,n,o,r){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],r=e[c][2];for(var s=!0,i=0;i<n.length;i++)(!1&r||a>=r)&&Object.keys(l.O).every((function(e){return l.O[e](n[i])}))?n.splice(i--,1):(s=!1,r<a&&(a=r));if(s){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,o,r]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){l.d=function(e,t){for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};l.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,a=n[0],s=n[1],i=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)l.o(s,o)&&(l.m[o]=s[o]);if(i)var c=i(l)}for(t&&t(n);u<a.length;u++)r=a[u],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(c)},n=self["webpackChunknoteapp"]=self["webpackChunknoteapp"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=l.O(void 0,[998],(function(){return l(2898)}));n=l.O(n)})();
//# sourceMappingURL=app.98cfe6ad.js.map