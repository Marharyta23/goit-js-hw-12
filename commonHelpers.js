import{a as f,S as y,i as d}from"./assets/vendor-64b55ca9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function m(s,t){const i=`https://pixabay.com/api/?key=42263237-cb79a6606f476b00f134f6b96&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`,e={page:t,per_page:15};return(await f.get(i,{params:e})).data}function L(s){return s.map(({largeImageURL:o,webformatURL:i,tags:e,likes:r,views:c,comments:h,downloads:p})=>`<li class="gallery-item">
        <a
          class="gallery-link"
          href='${o}'
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
            <p class="image-desc-text">${h}</p>
          </li>
          <li class="image-desc-item">
            <h3 class="image-desc-title">Downloads</h3>
            <p class="image-desc-text">${p}</p>
          </li>
        </ul>
      </li>`).join("")}const a={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn"),loader2:document.querySelector(".loader2"),galleryItem:document.querySelector(".gallery-item")};function u(s){const t=L(s);a.gallery.insertAdjacentHTML("beforeend",t);const o=new y(".gallery a",{captions:!0,captionSelector:"img",captionPosition:"bottom",captionsData:"alt"});o.on("show.simplelightbox"),o.refresh()}function g(s,t){Math.ceil(s.totalHits/s.hits.length)<=t?(a.loadMoreBtn.classList.add("hidden"),d.show({position:"bottomCenter",color:"yellow",message:"We're sorry, but you've reached the end of search results."})):a.loadMoreBtn.classList.remove("hidden")}let n,l;a.form.addEventListener("submit",b);a.loadMoreBtn.addEventListener("click",P);async function b(s){if(s.preventDefault(),a.gallery.innerHTML="",a.loadMoreBtn.classList.add("hidden"),n=s.target.elements.search.value.trim(),l=1,!n){d.error({position:"bottomCenter",icon:"",message:"Please, write something"});return}try{const t=await m(n,l);if(a.loader.classList.remove("hidden"),t.hits.length===0){d.error({position:"bottomCenter",icon:"",message:"Sorry, there are no images matching your search query. Please try again!"});return}else u(t.hits),a.loader.classList.add("hidden"),g(t,l)}catch(t){console.log(t)}s.target.reset()}async function P(){l+=1,a.loadMoreBtn.classList.add("hidden"),a.loader2.classList.remove("hidden");try{const o=await m(n,l);u(o.hits),a.loader2.classList.add("hidden"),g(o,l)}catch(o){console.log(o)}const s=a.gallery.firstElementChild.getBoundingClientRect(),{height:t}=s;scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
