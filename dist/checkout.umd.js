(function(o){typeof define=="function"&&define.amd?define(o):o()})(function(){"use strict";var w=Object.defineProperty;var C=(o,n,i)=>n in o?w(o,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[n]=i;var s=(o,n,i)=>(C(o,typeof n!="symbol"?n+"":n,i),i);var o=(e=>(e.Development="development",e.Staging="staging",e.Production="production",e))(o||{}),n=(e=>(e.Development="https://pay.dev.bavabank.com",e.Staging="https://pay.stg.bavabank.com",e.Production="https://pay.bavabank.com",e))(n||{});const i=({win:e,url:t,title:r,w:c,h:a})=>{if(!e.top)throw new Error("win.top is null");const p=e.top.outerHeight/2+e.top.screenY-a/2,h=e.top.outerWidth/2+e.top.screenX-c/2,l=e.open(t,r,`
    toolbar=no,
    location=no,
    directories=no,
    status=no,
    menubar=no,
    scrollbars=yes,
    resizable=yes,
    copyhistory=no,
    width=${c},
    height=${a},
    top=${p},
    left=${h}
   `);if(l===null)throw new Error("cannot open popup");return document.hasFocus()&&l.focus(),l},y=()=>{const e=document.createElement("div");return e.style.display="block",e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.width="100vw",e.style.height="100vh",e.style.maxWidth="100%",e.style.maxHeight="100%",e.style.minWidth="100%",e.style.minHeight="100%",e.style.zIndex="2147483647",e.style.animationDuration="0.3s",e.style.animationIterationCount="1",e.style.animationFillMode="forwards !important",e.style.animation="fadeIn 2s",e.style.opacity="1",e.style.transform="translate3d(0, 0, 0)",e.style.backgroundColor="black",e.style.backgroundColor="rgba(0, 0, 0, 0.8)",e.style.background="radial-gradient(50% 50%, ellipse closest-corner, rgba(0, 0, 0, 0.6) 1%, rgba(0, 0, 0, 0.8) 100%)",e.style.fontFamily='"HelveticaNeue", "HelveticaNeue-Light", "Helvetica Neue Light", helvetica, arial, sans-serif',e.style.fontSize="14px",e.style.color="#fff",e},m=()=>{const e=document.createElement("a");return e.style.position="absolute",e.style.right="16px",e.style.top="16px",e.style.width="16px",e.style.height="16px",e.style.opacity="0.6",e.textContent="X",e},v=()=>{const e=document.createElement("div");return e.style.textAlign="center",e.style.boxSizing="border-box",e.style.maxWidth="350px",e.style.top="50%",e.style.left="50%",e.style.position="absolute",e.style.transform="translateX(-50%) translateY(-50%)",e.style.cursor="pointer",e},f=()=>{const e=document.createElement("div");return e.style.marginBottom="30px",e.style.display="inline-block",e},g=()=>{const e=document.createElement("div");e.style.height="36px",e.style.display="inline-block";const t=`
    <svg width="46" height="46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FFFFFF" d="M38.961 21.264c1.344.767 1.344 2.705 0 3.473L2.992 45.29C1.66 46.052 0 45.09 0 43.554V2.446C0 .911 1.659-.052 2.992.71l35.97 20.553Z" />
    </svg>
  `;return e.insertAdjacentHTML("beforeend",t),e},_=()=>{const e=document.createElement("div");return e.style.fontSize="15px",e.style.lineHeight="1.5",e.style.padding="10px 0",e},b=()=>{const e=document.createElement("a");return e.style.fontSize="15px",e.style.lineHeight="1.35",e.style.padding="10px 0",e.style.fontWeight="bold",e},k=({focus:e,close:t})=>{const r=y(),c=m(),a=v(),p=f(),h=g(),l=_(),d=b();return c.onclick=u=>{u.preventDefault(),t()},d.textContent="Clique para continuar",d.onclick=u=>{u.preventDefault(),e()},l.textContent="N\xE3o v\xEA o navegador seguro do Bava? Ajudaremos voc\xEA a relan\xE7ar a janela para que finalize sua compra",r.append(c),r.append(a),a.append(p),a.append(l),a.append(d),p.append(h),r};class x{constructor(){s(this,"_id");s(this,"_body");s(this,"_overlay");s(this,"_popup");s(this,"_checkInterval");s(this,"_endpoint");s(this,"_onClose");const t=document.querySelector("body");if(!t)throw new Error("tag body not found");this._id=`bava-checkout-container-${new Date().toString()}`,this._popup=void 0,this._overlay=void 0,this._body=t,this._endpoint=n.Production,this._onClose=()=>{}}setEnvironment(t){switch(t){case o.Development:this._endpoint=n.Development;break;case o.Staging:this._endpoint=n.Staging;break;case o.Production:this._endpoint=n.Production;break;default:throw new Error("invalid environment")}}checkout(t){this._popup&&(this._popup.location=`${this._endpoint}/payment-link/#/${t}`)}close(){this._callback()}isOpen(){return this._popup?!this._popup.closed:!1}open(t){if(this.isOpen())throw new Error("checkout is already opened");if(!t.onClose)throw new Error("onClose function must be defined");this._onClose=t.onClose,this._popup=i({win:window,url:`${this._endpoint}/init.html`,title:"Bava Checkout",w:1230,h:730}),this._overlay=k({close:()=>{this._callback()},focus:()=>{this._focus()}}),this._body.append(this._overlay),this._check()}_callback(){this._overlay&&(this._overlay.remove(),this._overlay=void 0),this._checkInterval&&(clearTimeout(this._checkInterval),this._checkInterval=void 0),this._popup&&(this._popup.close(),this._popup=void 0),this._onClose&&this._onClose()}_check(){if(this.isOpen()){this._checkInterval=setTimeout(()=>{this._check()},700);return}this._callback()}_focus(){this._popup&&this._popup.focus()}}window.BavaCheckout=new x});