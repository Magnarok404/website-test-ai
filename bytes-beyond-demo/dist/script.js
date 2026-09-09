const header=document.querySelector('[data-header]');
const menuButton=document.querySelector('[data-menu-button]');
const mobileNav=document.querySelector('[data-mobile-nav]');
const dialog=document.querySelector('[data-dialog]');
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const setHeader=()=>header.classList.toggle('scrolled',window.scrollY>24);
setHeader();window.addEventListener('scroll',setHeader,{passive:true});

menuButton?.addEventListener('click',()=>{
  const open=menuButton.getAttribute('aria-expanded')!=='true';
  menuButton.setAttribute('aria-expanded',String(open));
  menuButton.setAttribute('aria-label',open?'Menu sluiten':'Menu openen');
  mobileNav.classList.toggle('open',open);document.body.classList.toggle('menu-open',open);
});
mobileNav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  menuButton.setAttribute('aria-expanded','false');mobileNav.classList.remove('open');document.body.classList.remove('menu-open');
}));

const countUp=element=>{
  if(element.dataset.done)return;element.dataset.done='true';
  const target=Number(element.dataset.count);const duration=reduceMotion?0:1300;const start=performance.now();
  const tick=now=>{const p=duration?Math.min((now-start)/duration,1):1;const eased=1-Math.pow(1-p,3);element.textContent=Math.round(target*eased);if(p<1)requestAnimationFrame(tick)};requestAnimationFrame(tick);
};

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(!entry.isIntersecting)return;entry.target.classList.add('visible');
  entry.target.querySelectorAll?.('[data-count]').forEach(countUp);
  if(entry.target.classList.contains('score-wrap')){entry.target.classList.add('animate');entry.target.querySelectorAll('[data-count]').forEach(countUp)}
  observer.unobserve(entry.target);
}),{threshold:.16,rootMargin:'0px 0px -35px'});
document.querySelectorAll('.reveal,.score-wrap').forEach(el=>observer.observe(el));

if(!reduceMotion){window.addEventListener('scroll',()=>{
  const image=document.querySelector('.hero-image');if(image&&window.scrollY<850)image.style.transform=`translateY(${window.scrollY*.1}px)`;
},{passive:true});}

document.querySelectorAll('[data-dialog-open]').forEach(button=>button.addEventListener('click',()=>dialog?.showModal()));
dialog?.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
document.querySelectorAll('.round-button').forEach(button=>button.addEventListener('click',()=>dialog?.showModal()));
document.querySelector('[data-year]').textContent=new Date().getFullYear();
