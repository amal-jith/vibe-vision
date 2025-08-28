(function(){
  const scrollers = document.querySelectorAll('.h-scroll');
  if(!scrollers.length) return;

  scrollers.forEach(setup);

  function setup(scroller){
    const track = scroller.querySelector('.h-track');
    if(!track) return;

    // panels = number of direct children in the track
    const panels = track.children.length;
    scroller.style.setProperty('--panels', panels);

    let start = 0, end = 0, maxX = 0;

    function compute(){
      const rect = scroller.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      start = rect.top + scrollY;                              // top of scroller in page
      end   = start + scroller.offsetHeight - window.innerHeight;
      // total horizontal distance the track needs to travel
      maxX  = Math.max(0, track.scrollWidth - window.innerWidth);
      onScroll();                                              // sync transform after resize
    }

    function onScroll(){
      const y = window.scrollY || window.pageYOffset;
      if (y <= start){ track.style.transform = 'translateX(0px)'; return; }
      if (y >= end){   track.style.transform = `translateX(-${maxX}px)`; return; }
      const progress = (y - start) / (end - start);            // 0 → 1 while pinned
      const tx = -(progress * maxX);
      track.style.transform = `translateX(${tx}px)`;
    }

    compute();
    window.addEventListener('resize', compute, {passive:true});
    window.addEventListener('scroll', onScroll, {passive:true});
  }
})();