import{a as y,S as L,i as c}from"./assets/vendor-64b55ca9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();async function u(a,s){const i=`https://pixabay.com/api/?key=42263237-cb79a6606f476b00f134f6b96&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`,t={page:s,per_page:15};return(await y.get(i,{params:t})).data}function b(a){return a.map(({largeImageURL:o,webformatURL:i,tags:t,likes:r,views:n,comments:p,downloads:f})=>`<li class="gallery-item">
        <a
          class="gallery-link"
          href='${o}'
        >
          <img
            class="gallery-image"
            src='${i}'
            data-source="large-image.jpg"
            alt='${t}'
          />
        </a>
        <ul class="image-desc-list">
          <li class="image-desc-item">
            <h3 class="image-desc-title">Likes</h3>
            <p class="image-desc-text">${r}</p>
          </li>
          <li class="image-desc-item">
            <h3 class="image-desc-title">Views</h3>
            <p class="image-desc-text">${n}</p>
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
      </li>`).join("")}const e={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn"),loader2:document.querySelector(".loader2"),galleryItem:document.querySelector(".gallery-item")},m=new L(".gallery a",{captions:!0,captionSelector:"img",captionPosition:"bottom",captionsData:"alt"});function g(a){const s=b(a);e.gallery.insertAdjacentHTML("beforeend",s),m.refresh(),m.on("show.simplelightbox")}function h(a,s){const o=Math.ceil(a.totalHits/15);console.log(o),o<=s?(e.loadMoreBtn.classList.add("hidden"),e.loader2.classList.add("hidden"),c.show({position:"bottomCenter",color:"yellow",message:"We're sorry, but you've reached the end of search results."})):e.loadMoreBtn.classList.remove("hidden")}let d,l;e.form.addEventListener("submit",M);e.loadMoreBtn.addEventListener("click",P);async function M(a){if(a.preventDefault(),e.gallery.innerHTML="",e.loadMoreBtn.classList.add("hidden"),e.loader.classList.remove("hidden"),d=a.target.elements.search.value.trim(),l=1,!d){e.loader.classList.add("hidden"),c.error({position:"bottomCenter",icon:"",message:"Please, write something"});return}try{const s=await u(d,l);if(s.hits.length===0){c.error({position:"bottomCenter",icon:"",message:"Sorry, there are no images matching your search query. Please try again!"}),e.loader.classList.add("hidden");return}else g(s.hits),e.loader.classList.add("hidden"),h(s,l)}catch(s){e.loadMoreBtn.classList.add("hidden"),e.loader.classList.add("hidden"),c.error({position:"center",icon:"",message:`${s}`})}a.target.reset()}async function P(){l+=1,e.loadMoreBtn.classList.add("hidden"),e.loader2.classList.remove("hidden");try{const o=await u(d,l);g(o.hits),h(o,l),e.loader2.classList.add("hidden")}catch(o){e.loadMoreBtn.classList.add("hidden"),e.loader2.classList.add("hidden"),c.error({position:"center",icon:"",message:`${o}`})}const a=e.gallery.firstElementChild.getBoundingClientRect(),{height:s}=a;scrollBy({top:s*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
