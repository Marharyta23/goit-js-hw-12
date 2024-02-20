import{a as y,S as L,i as c}from"./assets/vendor-64b55ca9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();async function g(r,e){const i=`https://pixabay.com/api/?key=42263237-cb79a6606f476b00f134f6b96&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`,t={page:e,per_page:15};return(await y.get(i,{params:t})).data}function b(r){return r.map(({largeImageURL:o,webformatURL:i,tags:t,likes:a,views:n,comments:p,downloads:f})=>`<li class="gallery-item">
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
            <p class="image-desc-text">${a}</p>
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
      </li>`).join("")}const s={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn"),loader2:document.querySelector(".loader2"),galleryItem:document.querySelector(".gallery-item")},u=new L(".gallery a",{captions:!0,captionSelector:"img",captionPosition:"bottom",captionsData:"alt"});function m(r){const e=b(r);s.gallery.insertAdjacentHTML("beforeend",e),u.refresh(),u.on("show.simplelightbox")}function h(r,e){const o=Math.ceil(r.totalHits/15);console.log(o),o<=e?(s.loadMoreBtn.classList.add("hidden"),s.loader2.classList.add("hidden"),c.show({position:"bottomCenter",color:"yellow",message:"We're sorry, but you've reached the end of search results."})):s.loadMoreBtn.classList.remove("hidden")}let d,l;s.form.addEventListener("submit",M);s.loadMoreBtn.addEventListener("click",P);async function M(r){if(r.preventDefault(),s.gallery.innerHTML="",s.loadMoreBtn.classList.add("hidden"),d=r.target.elements.search.value.trim(),l=1,!d){c.error({position:"bottomCenter",icon:"",message:"Please, write something"});return}try{const e=await g(d,l);if(s.loader.classList.remove("hidden"),e.hits.length===0){m(e.hits),s.loader.classList.add("hidden"),c.error({position:"bottomCenter",icon:"",message:"Sorry, there are no images matching your search query. Please try again!"});return}else m(e.hits),s.loader.classList.add("hidden"),h(e,l)}catch(e){s.loadMoreBtn.classList.add("hidden"),s.loader.classList.add("hidden"),c.error({position:"center",icon:"",message:`${e}`})}r.target.reset()}async function P(){l+=1,s.loadMoreBtn.classList.add("hidden"),s.loader2.classList.remove("hidden");try{const o=await g(d,l);m(o.hits),h(o,l),s.loader2.classList.add("hidden")}catch(o){s.loadMoreBtn.classList.add("hidden"),s.loader2.classList.add("hidden"),c.error({position:"center",icon:"",message:`${o}`})}const r=s.gallery.firstElementChild.getBoundingClientRect(),{height:e}=r;scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
