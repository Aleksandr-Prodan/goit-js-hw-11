import{a as p,S as m,i as a}from"./assets/vendor-BNibzuFn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",g="52857453-560792bcb66dbe1ba9d4bb66c";async function h(i){const r={key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(y,{params:r})).data}let l;function b(i){const r=document.querySelector(".gallery"),o=i.map(({webformatURL:n,largeImageURL:e,tags:t,likes:s,views:u,comments:d,downloads:f})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e}">
        <img class="gallery-image" src="${n}" alt="${t}" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${s}</p>
        <p><b>Views:</b> ${u}</p>
        <p><b>Comments:</b> ${d}</p>
        <p><b>Downloads:</b> ${f}</p>
      </div>
    </li>
  `).join("");r.insertAdjacentHTML("beforeend",o),l?l.refresh():l=new m(".gallery a")}function L(){document.querySelector(".gallery").innerHTML=""}function S(){document.querySelector("#loader").classList.remove("hidden")}function q(){document.querySelector("#loader").classList.add("hidden")}const c=document.querySelector(".form"),w=c.querySelector("input");c.addEventListener("submit",async i=>{i.preventDefault();const r=w.value.trim();if(!r){a.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}L(),S();try{const o=await h(r);o.hits.length===0?a.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):b(o.hits)}catch(o){a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(o)}finally{q()}});
//# sourceMappingURL=index.js.map
