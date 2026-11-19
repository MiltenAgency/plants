'use client';

import {useEffect,useState} from 'react';
import {Dialog,PagesDropdown,useReveal} from './ui';

const starterPlants = [
  {id:'basil',name:'Kitchen basil',spot:'Kitchen window',done:true},
  {id:'monstera',name:'Living room monstera',spot:'Bright corner',done:false},
  {id:'lavender',name:'Balcony lavender',spot:'Balcony',done:false},
];
const heroPlants = [
  {name:'Succulent',image:'/assets/plants/plant-1-cutout.webp'},
  {name:'Round leaf',image:'/assets/plants/plant-2-cutout.webp'},
  {name:'Heartleaf',image:'/assets/plants/plant-3-cutout.webp'},
  {name:'Leafy green',image:'/assets/plants/plant-4-cutout.webp'},
  {name:'Glossy leaf',image:'/assets/plants/plant-5-cutout.webp'},
  {name:'Orchid',image:'/assets/plants/plant-6-cutout.webp'},
];

export default function Page() {
  useReveal();
  const [modal,setModal]=useState(null);
  const [menu,setMenu]=useState(false);
  const [gardenName,setGardenName]=useState('My little garden');
  const [gardenInput,setGardenInput]=useState('');
  const [plants,setPlants]=useState(starterPlants);
  const [plantName,setPlantName]=useState('');
  const [spot,setSpot]=useState('Kitchen window');
  const [status,setStatus]=useState('');
  const [loaded,setLoaded]=useState(false);
  useEffect(()=>{
    try {
      const saved=JSON.parse(localStorage.getItem('little-grove-garden'));
      if(saved && typeof saved.name==='string' && Array.isArray(saved.plants) && saved.plants.length && saved.plants.every(p=>typeof p.id==='string' && typeof p.name==='string' && typeof p.spot==='string' && typeof p.done==='boolean')) {
        setGardenName(saved.name);setPlants(saved.plants);
      }
    } catch {}
    setLoaded(true);
  },[]);
  useEffect(()=>{
    if(!loaded)return;
    try {localStorage.setItem('little-grove-garden',JSON.stringify({name:gardenName,plants}));}
    catch {setStatus('Browser storage is unavailable. Your garden will stay open for this visit.');}
  },[gardenName,plants,loaded]);
  const selectedPlant=heroPlants.find(plant=>plant.name===modal);
  const completed=plants.filter(p=>p.done).length;
  const spots=new Set(plants.map(p=>p.spot)).size;
  function addPlant(event) {
    event.preventDefault();
    if(!plantName.trim()) {setStatus('Enter a plant name to add it to your garden.');return;}
    setPlants([...plants,{id:crypto.randomUUID(),name:plantName.trim(),spot,done:false}]);
    setStatus(`${plantName.trim()} added to your garden and care checklist.`);
    setPlantName('');
  }
  function planGarden(event) {
    event.preventDefault();
    if(!gardenInput.trim())return;
    setGardenName(gardenInput.trim());setGardenInput('');setModal('garden');
  }
  function closeNavigation(){setMenu(false)}
  return <>
    <a className="skip" href="#content">Skip to content</a>
    <main id="content">
      <section className="hero">
        <header>
          <a className="brand" href="#content" aria-label="Little Grove home"><img className="brand-mark" src="/assets/brand/little-grove-mark.svg" width="32" height="32" alt=""/>Little Grove</a>
          <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menu} aria-controls="main-navigation" onClick={()=>setMenu(!menu)}>☰</button>
          <nav id="main-navigation" aria-label="Main navigation" className={menu?'open':''}>
            <a href="#content" aria-current="page" onClick={closeNavigation}>Home</a>
            <a href="#benefits" onClick={closeNavigation}>Plant care</a>
            <a href="#achievement" onClick={closeNavigation}>Growing guide</a>
            <PagesDropdown onNavigate={closeNavigation}/>
          </nav>
          <div className="header-actions"><button className="dark" onClick={()=>setModal('garden')}>My garden</button></div>
        </header>
        <div className="hero-center">
          <h1>A little care.<br/>A <mark>greener home.</mark></h1>
          <p>From your first windowsill herb to a balcony full of life.<br/>{' '}Make a little room for growing, one plant at a time.</p>
          <form onSubmit={planGarden}>
            <input aria-label="Garden name" placeholder="Name your little garden" maxLength={60} required value={gardenInput} onChange={e=>setGardenInput(e.target.value)}/>
            <button className="dark">Plan my garden <span aria-hidden="true">+</span></button>
          </form>
          <small className="hero-note">Start with a sample garden. Make it your own.</small>
        </div>
        <div className="orbit-path path-one" aria-hidden="true"/><div className="orbit-path path-two" aria-hidden="true"/>
        {heroPlants.map(({name,image},i)=><button className={'person person-'+i} key={name} onClick={()=>setModal(name)} aria-label={'Meet '+name}>
          <img src={image} alt=""/>
        </button>)}
      </section>
      <section className="benefits reveal" id="benefits">
        <div className="section-heading"><h2>A happy garden.<br/>A clearer head.</h2><p>A few plants, a sunny spot, and a routine that fits your day. Keep your growing spaces and little care jobs together, so you can enjoy the green around you.</p></div>
        <p className="garden-caption"><span>A peek at <strong>{gardenName}</strong></span><span>Your personal garden overview</span></p>
        <div className="metrics">
          <div className="metric-column">
            <button className="metric blue" onClick={()=>setModal('garden')}><strong>{String(plants.length).padStart(2,'0')}</strong><span>Plants making themselves at home</span></button>
            <button className="metric orange" onClick={()=>document.getElementById('workflow').scrollIntoView()}><strong>{String(plants.length-completed).padStart(2,'0')}</strong><span>Little care checks left today</span></button>
          </div>
          <img className="team-photo" src="/assets/sunlit-monstera.webp" alt="Monstera leaves glowing in warm sunlight against a golden curtain"/>
          <div className="metric-column">
            <button className="metric green" onClick={()=>document.getElementById('workflow').scrollIntoView()}><strong>{completed}<small>/{plants.length}</small></strong><span>Care checks ticked off</span></button>
            <button className="metric yellow" onClick={()=>setModal('garden')}><strong>{String(spots).padStart(2,'0')}</strong><span>Spots with a little more green</span></button>
          </div>
        </div>
      </section>
      <section className="achievement reveal" id="achievement">
        <div className="achievement-photo"><img src="/assets/garden-planting.webp" alt="A gardener planting a seedling in a sunny raised vegetable bed"/><span>A little care goes a long way</span></div>
        <div><h2>Find your rhythm.<br/>{' '}Let good<br/>{' '}things grow.</h2><p>You don’t need a big garden or a green thumb to begin. Get to know your plants, notice the small changes, and build a care routine around the space you have.</p><ul>{['Give every plant a place to call home','Check the soil before reaching for water','Keep track of the little jobs','Make space for your next new leaf'].map(text=><li key={text}>{text}</li>)}</ul></div>
      </section>
      <section className="workflow reveal" id="workflow">
        <div className="section-heading centered"><h2>Less guesswork.<br/>More growing.</h2><p>A simple home for your plants and their everyday care.<br/>Try the checklist, then add something you’re growing.</p></div>
        <div className="workflow-grid">
          <article>
            <div className="task-preview"><img src="/assets/window-plant.webp" alt="Deep green leaves with pale veins growing beside a bright window"/>
              <div className="task-list"><div className="task-heading"><strong>Today’s care checks</strong><small aria-live="polite">{completed}/{plants.length} complete</small></div>
                <div className="care-items">{plants.map(plant=><label key={plant.id}><input type="checkbox" checked={plant.done} onChange={()=>setPlants(plants.map(p=>p.id===plant.id?{...p,done:!p.done}:p))}/><span className={plant.done?'done':''}>Check {plant.name.toLowerCase()}</span></label>)}</div>
              </div>
            </div>
            <h3>A little attention, every day</h3><p>Check in with your plants and tick off their care as you go. Your checklist is a reminder to look, feel, and notice what each plant needs.</p>
          </article>
          <article>
            <div className="add-preview"><img src="/assets/garden-planting.webp" alt="A gardener gently settling a young plant into a raised garden bed"/>
              <form onSubmit={addPlant}><label htmlFor="plant-input"><span aria-hidden="true">+</span>Welcome a new plant</label>
                <input id="plant-input" placeholder="e.g. Kitchen basil" maxLength={60} required value={plantName} onChange={e=>setPlantName(e.target.value)}/>
                <label className="spot-label" htmlFor="plant-spot">Where will it grow?</label>
                <select id="plant-spot" value={spot} onChange={e=>setSpot(e.target.value)}><option>Kitchen window</option><option>Bright corner</option><option>Balcony</option><option>Garden bed</option></select>
                <button className="dark">Add to my garden</button>
              </form>
            </div>
            <h3>Every garden starts with one</h3><p>Give your plant a name and a growing spot. We’ll add it to your garden overview and daily care checklist.</p>
            <p className="garden-status" role="status">{status}</p>
          </article>
        </div>
      </section>
      <footer className="garden-footer"><a className="footer-brand" href="#content"><img src="/assets/brand/little-grove-mark.svg" width="32" height="32" alt=""/>Little Grove</a><p>A little more green. A little more you.</p><div><button onClick={()=>setModal('privacy')}>Privacy</button><button onClick={()=>setModal('about')}>About this garden</button></div></footer>
    </main>
    {modal&&<Dialog title={modal==='garden'?gardenName:modal==='privacy'?'Your garden, your space':modal==='about'?'Welcome to Little Grove':`Meet ${modal}`} onClose={()=>setModal(null)}>
      {modal==='garden'?<><p>Your plants and care checks are saved in this browser. Add a new plant or pick up where you left off.</p><ul className="garden-plant-list">{plants.map(plant=><li key={plant.id}><span><strong>{plant.name}</strong><small>{plant.spot}</small></span><span className="plant-state">{plant.done?'Checked today':'Ready for a check'}</span></li>)}</ul><button className="primary" onClick={()=>{setModal(null);document.getElementById('workflow').scrollIntoView()}}>Care for my plants</button></>:modal==='privacy'?<><p>Your garden name, plants, and checklist are stored locally in this browser. This demo has no account system and does not send your garden details to a server.</p><p>Clearing this site’s browser storage removes your saved garden. Use a shared device only if you’re comfortable leaving your plant list on it.</p></>:modal==='about'?<><p>Little Grove is a home gardening planner concept for the green spaces that fit into everyday life.</p><p>Explore the sample garden, add your own plants, and build a simple care checklist. The overview reflects the plants you add, rather than customer statistics.</p></>:<><img className="plant-profile" src={selectedPlant?.image} alt={modal+' potted plant'}/><p>A little inspiration for your growing space. Add your own {modal.toLowerCase()} to the garden and keep its care notes close by.</p><button className="primary" onClick={()=>{setPlantName(modal);setModal(null);document.getElementById('plant-input').focus()}}>Add {modal.toLowerCase()} to my garden</button></>}
    </Dialog>}
  </>;
}
