'use client';
import {useEffect,useRef,useState} from 'react';
export function PagesDropdown({onNavigate}) {
  const [open,setOpen]=useState(false);
  const root=useRef(null);
  const trigger=useRef(null);
  useEffect(()=>{
    if(!open)return;
    function outside(event){if(!root.current?.contains(event.target))setOpen(false)}
    function escape(event){if(event.key==='Escape'){setOpen(false);trigger.current?.focus()}}
    document.addEventListener('pointerdown',outside);
    document.addEventListener('keydown',escape);
    return()=>{document.removeEventListener('pointerdown',outside);document.removeEventListener('keydown',escape)};
  },[open]);
  return <div className="pages-dropdown" ref={root} onBlur={event=>{if(!event.currentTarget.contains(event.relatedTarget))setOpen(false)}}>
    <button className="pages-trigger" ref={trigger} type="button" aria-expanded={open} aria-controls="pages-links" onClick={()=>setOpen(!open)}>
      Explore
      <svg viewBox="0 0 256 256" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="m48 96 80 80 80-80"/></svg>
    </button>
    <div id="pages-links" className="pages-links" hidden={!open}>
      {[["Your garden overview","#benefits"],["Find your growing rhythm","#achievement"],["Plant care checklist","#workflow"]].map(([label,href])=><a key={href} href={href} onClick={()=>{setOpen(false);onNavigate?.()}}>{label}</a>)}
    </div>
  </div>;
}
export function useReveal(){useEffect(()=>{const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('shown');o.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(e=>o.observe(e));return()=>o.disconnect()},[])}
export function Dialog({title,onClose,children}){const ref=useRef(null);const[done,setDone]=useState(false);useEffect(()=>{const before=document.activeElement;ref.current?.showModal();const onKey=e=>{if(e.key==='Escape'){e.preventDefault();onClose()}};const prior=document.body.style.overflow;document.body.style.overflow='hidden';document.addEventListener('keydown',onKey);return()=>{document.body.style.overflow=prior;document.removeEventListener('keydown',onKey);before?.focus()}},[onClose]);return <dialog ref={ref} className="dialog" aria-labelledby="dialog-title" onClick={e=>{if(e.target===ref.current)onClose()}}><button className="dialog-close" aria-label="Close dialog" onClick={onClose}>×</button><h2 id="dialog-title">{title}</h2>{children|| (done?<div role="status"><p>Your request is ready.</p><p>This is a local preview. No information was sent.</p><button className="primary" onClick={onClose}>Back to the website ↗</button></div>:<form onSubmit={e=>{e.preventDefault();setDone(true)}}><label>Your name<input name="name" required autoComplete="name"/></label><label>Email address<input type="email" name="email" required autoComplete="email"/></label><label>How can we help?<textarea name="message" rows="3" required/></label><button className="primary">Prepare request ↗</button><small>Local preview. Your entries stay in this browser.</small></form>)}</dialog>}
