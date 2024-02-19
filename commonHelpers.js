import{a as y,S as L,i as d}from"./assets/vendor-64b55ca9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function u(s,t){const i=`https://pixabay.com/api/?key=42263237-cb79a6606f476b00f134f6b96&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`,e={page:t,per_page:15};return(await y.get(i,{params:e})).data}function b(s){return s.map(({largeImageURL:a,webformatURL:i,tags:e,likes:r,views:c,comments:p,downloads:f})=>`<li class="gallery-item">
        <a
          class="gallery-link"
          href='${a}'
        >
          <img
            class="gallery-image"
            src='${i}'
            data-source="large-image.jpg"
            alt='${e}'
          />
        </a>
        <ul class="image-desc-list">
          <li class="image-desc-item">
            <h3 class="image-desc-title">Likes</h3>
            <p class="image-desc-text">${r}</p>
          </li>
          <li class="image-desc-item">
            <h3 class="image-desc-title">Views</h3>
            <p class="image-desc-text">${c}</p>
          </li>
          <li class="image-desc-item">
            <h3 class="image-desc-title">Comments</h3>
            <p class="image-desc-text">${p}</p>
          </li>
          <li class="image-desc-item">
            <h3 class="image-desc-title">Downloads</h3>
            <p class="image-desc-text">${f}</p>
          </li>
        </ul>
      </li>`).join("")}const o={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn"),loader2:document.querySelector(".loader2"),galleryItem:document.querySelector(".gallery-item")},m=new L(".gallery a",{captions:!0,captionSelector:"img",captionPosition:"bottom",captionsData:"alt"});function g(s){const t=b(s);o.gallery.insertAdjacentHTML("beforeend",t),m.refresh(),m.on("show.simplelightbox")}function h(s,t){const a=Math.ceil(s.totalHits/15);console.log(a),a<=t?(o.loadMoreBtn.classList.add("hidden"),d.show({position:"bottomCenter",color:"yellow",message:"We're sorry, but you've reached the end of search results."})):o.loadMoreBtn.classList.remove("hidden")}let n,l;o.form.addEventListener("submit",P);o.loadMoreBtn.addEventListener("click",M);async function P(s){if(s.preventDefault(),o.gallery.innerHTML="",o.loadMoreBtn.classList.add("hidden"),n=s.target.elements.search.value.trim(),l=1,!n){d.error({position:"bottomCenter",icon:"",message:"Please, write something"});return}try{const t=await u(n,l);if(o.loader.classList.remove("hidden"),t.hits.length===0){d.error({position:"bottomCenter",icon:"",message:"Sorry, there are no images matching your search query. Please try again!"});return}else g(t.hits),o.loader.classList.add("hidden"),h(t,l)}catch(t){console.log(t)}s.target.reset()}async function M(){l+=1,o.loadMoreBtn.classList.add("hidden"),o.loader2.classList.remove("hidden");try{const a=await u(n,l);g(a.hits),h(a,l),o.loader2.classList.add("hidden")}catch(a){console.log(a)}const s=o.gallery.firstElementChild.getBoundingClientRect(),{height:t}=s;scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
