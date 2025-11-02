
(function(){
  try{ const nav = document.querySelectorAll('.header-nav a'); const path = location.pathname.split('/').pop() || 'index.html'; nav.forEach(a=>{ if(a.getAttribute('href')===path) a.classList.add('active'); }); }catch(e){}
  const track = document.querySelector('.carousel-track');
  if(track){
    const slides = Array.from(track.children);
    let idx = 0;
    function go(i){ idx = (i+slides.length)%slides.length; track.style.transform = 'translateX(' + (-idx*100) + '%)'; }
    document.querySelectorAll('.carousel-prev').forEach(b=>b.addEventListener('click', ()=>go(idx-1)));
    document.querySelectorAll('.carousel-next').forEach(b=>b.addEventListener('click', ()=>go(idx+1)));
    setInterval(()=>{ go(idx+1); }, 5000);
  }
  window.Ayesha = {
    quickQuote:function(m){ location.href='contact.html#prefill='+encodeURIComponent('Request quote for: '+m); },
    setupCatalogFilters:function(opts){ const search=document.getElementById(opts.searchId); const type=document.getElementById(opts.typeId); const container=document.getElementById(opts.containerId); if(!container) return; const cards=Array.from(container.querySelectorAll('.card')); function apply(){ const q=search?search.value.toLowerCase():''; const t=type?type.value:''; cards.forEach(c=>{ const txt=(c.dataset.keywords||'')+' '+(c.querySelector('.model')?.textContent||''); const ok=(q===''||txt.toLowerCase().includes(q))&&(t===''||c.dataset.type===t); c.style.display=ok?'':'none'; }); } if(search) search.addEventListener('input', apply); if(type) type.addEventListener('change', apply); apply(); },
    setupContactForm:function(formId){ const form=document.getElementById(formId); if(!form) return; form.addEventListener('submit', function(){ setTimeout(()=>{ const s=document.getElementById('formStatus'); if(s){ s.style.display='block'; s.textContent='✅ Message sent. We will contact you shortly.'; } form.reset(); },400); }); if(location.hash && location.hash.startsWith('#prefill=')){ const msg=decodeURIComponent(location.hash.replace('#prefill=')); const mi=document.querySelector('#message'); if(mi) mi.value=msg; history.replaceState(null,'',location.pathname); } }
  };
  document.addEventListener('DOMContentLoaded', function(){ Ayesha.setupContactForm('contactForm'); });
})();
