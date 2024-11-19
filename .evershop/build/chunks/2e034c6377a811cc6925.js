"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[9461],{29461:(e,t,r)=>{r.d(t,{default:()=>i}),function(){try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".cdx-list{margin:0;padding-left:40px;outline:none}.cdx-list__item{padding:5.5px 0 5.5px 3px;line-height:1.6em}.cdx-list--unordered{list-style:disc}.cdx-list--ordered{list-style:decimal}.cdx-list-settings{display:flex}.cdx-list-settings .cdx-settings-button{width:50%}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}}();const s='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>';class i{static get isReadOnlySupported(){return!0}static get enableLineBreaks(){return!0}static get toolbox(){return{icon:s,title:"List"}}constructor({data:e,config:t,api:r,readOnly:i}){this._elements={wrapper:null},this.api=r,this.readOnly=i,this.settings=[{name:"unordered",label:this.api.i18n.t("Unordered"),icon:s,default:"unordered"===t.defaultStyle||!1},{name:"ordered",label:this.api.i18n.t("Ordered"),icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>',default:"ordered"===t.defaultStyle||!0}],this._data={style:this.settings.find((e=>!0===e.default)).name,items:[]},this.data=e}render(){return this._elements.wrapper=this.makeMainTag(this._data.style),this._data.items.length?this._data.items.forEach((e=>{this._elements.wrapper.appendChild(this._make("li",this.CSS.item,{innerHTML:e}))})):this._elements.wrapper.appendChild(this._make("li",this.CSS.item)),this.readOnly||this._elements.wrapper.addEventListener("keydown",(e=>{const[t,r]=[13,8];switch(e.keyCode){case t:this.getOutofList(e);break;case r:this.backspace(e)}}),!1),this._elements.wrapper}save(){return this.data}static get conversionConfig(){return{export:e=>e.items.join(". "),import:e=>({items:[e],style:"unordered"})}}static get sanitize(){return{style:{},items:{br:!0}}}renderSettings(){return this.settings.map((e=>({...e,isActive:this._data.style===e.name,closeOnActivate:!0,onActivate:()=>this.toggleTune(e.name)})))}onPaste(e){const t=e.detail.data;this.data=this.pasteHandler(t)}static get pasteConfig(){return{tags:["OL","UL","LI"]}}makeMainTag(e){const t="ordered"===e?this.CSS.wrapperOrdered:this.CSS.wrapperUnordered,r="ordered"===e?"ol":"ul";return this._make(r,[this.CSS.baseBlock,this.CSS.wrapper,t],{contentEditable:!this.readOnly})}toggleTune(e){const t=this.makeMainTag(e);for(;this._elements.wrapper.hasChildNodes();)t.appendChild(this._elements.wrapper.firstChild);this._elements.wrapper.replaceWith(t),this._elements.wrapper=t,this._data.style=e}get CSS(){return{baseBlock:this.api.styles.block,wrapper:"cdx-list",wrapperOrdered:"cdx-list--ordered",wrapperUnordered:"cdx-list--unordered",item:"cdx-list__item"}}set data(e){e||(e={}),this._data.style=e.style||this.settings.find((e=>!0===e.default)).name,this._data.items=e.items||[];const t=this._elements.wrapper;t&&t.parentNode.replaceChild(this.render(),t)}get data(){this._data.items=[];const e=this._elements.wrapper.querySelectorAll(`.${this.CSS.item}`);for(let t=0;t<e.length;t++)e[t].innerHTML.replace("<br>"," ").trim()&&this._data.items.push(e[t].innerHTML);return this._data}_make(e,t=null,r={}){const s=document.createElement(e);Array.isArray(t)?s.classList.add(...t):t&&s.classList.add(t);for(const i in r)s[i]=r[i];return s}get currentItem(){let e=window.getSelection().anchorNode;return e.nodeType!==Node.ELEMENT_NODE&&(e=e.parentNode),e.closest(`.${this.CSS.item}`)}getOutofList(e){const t=this._elements.wrapper.querySelectorAll("."+this.CSS.item);if(t.length<2)return;const r=t[t.length-1],s=this.currentItem;s===r&&!r.textContent.trim().length&&(s.parentElement.removeChild(s),this.api.blocks.insert(),this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex()),e.preventDefault(),e.stopPropagation())}backspace(e){const t=this._elements.wrapper.querySelectorAll("."+this.CSS.item),r=t[0];r&&t.length<2&&!r.innerHTML.replace("<br>"," ").trim()&&e.preventDefault()}selectItem(e){e.preventDefault();const t=window.getSelection(),r=t.anchorNode.parentNode.closest("."+this.CSS.item),s=new Range;s.selectNodeContents(r),t.removeAllRanges(),t.addRange(s)}pasteHandler(e){const{tagName:t}=e;let r;switch(t){case"OL":r="ordered";break;case"UL":case"LI":r="unordered"}const s={style:r,items:[]};if("LI"===t)s.items=[e.innerHTML];else{const t=Array.from(e.querySelectorAll("LI"));s.items=t.map((e=>e.innerHTML)).filter((e=>!!e.trim()))}return s}}}}]);