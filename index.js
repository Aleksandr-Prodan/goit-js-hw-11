import{i as c}from"./assets/vendor-I1I71QQ2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const a=document.querySelector(".form");a.addEventListener("submit",i=>{i.preventDefault(),fetch("https://pixabay.com/api/?key=52857453-560792bcb66dbe1ba9d4bb66c&q=query&image_type=photo&orientation=horizontal&safesearch=true").then(t=>t.json()).then(t=>{const o=u(t.hits);document.querySelector(".gallery").innerHTML=o}).catch(t=>{c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})})});function u(i){return i.map(({webformatURL:t,tags:o,likes:n})=>`
        <div class="photo-card">
          <img src="${t}" alt="${o}" loading="lazy" />
          <div class="info">
            <p><b>Likes:</b> ${n}</p>
          </div>
        </div>
      `).join("")}
//# sourceMappingURL=index.js.map
