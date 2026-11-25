const A=n=>'assets/'+n,U=(id,w=900)=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;
const P=[
{id:1,n:'Serene Pendant',c:'Necklaces',g:'Women',o:'Daily',col:'Minimalist',p:2490,m:2990,d:'20% OFF',mat:'18K Gold Vermeil',r:4.9,rv:128,model:U('1617038220319-276d3cfab638'),studio:U('1599643477877-530eb83abc8e'),desc:'A fluid pendant designed to sit close to the collarbone and layer beautifully.'},
{id:13,n:'Atlas Compass Pendant',c:'Necklaces',g:'Men',o:'Daily',col:'Minimalist',p:2990,m:3590,d:'17% OFF',mat:'Stainless Steel',r:4.8,rv:64,model:A('m2.jpg'),studio:A('m2_detail.jpg'),desc:'A weighty compass pendant on a box chain, made to sit open-collar or under a shirt.'},
{id:2,n:'Sol Drop Hoops',c:'Earrings',g:'Women',o:'Office',col:'Everyday Chic',p:2190,m:2690,d:'18% OFF',mat:'18K Gold Plated',r:4.8,rv:94,model:A('w7_ear.jpg'),studio:U('1635767798638-3e25273a8236'),desc:'Polished sculptural hoops that move from workday to dinner.'},
{id:14,n:'Orion Link Bracelet',c:'Bracelets',g:'Men',o:'Office',col:'Everyday Chic',p:2490,m:2990,d:'17% OFF',mat:'18K Gold Plated',r:4.8,rv:58,model:A('m1_hand.jpg'),studio:A('m1.jpg'),desc:'Substantial curb links with a quiet shine, sized for a confident wrist.'},
{id:3,n:'Lumi Signet',c:'Rings',g:'Women',o:'Festive',col:'Royal Heritage',p:1890,m:2290,d:'BOGO',mat:'18K Gold Vermeil',r:4.9,rv:77,model:A('w6_model.jpg'),studio:A('w6_hand.jpg'),desc:'A confident silhouette with a softly polished face and a sparkling centre stone.'},
{id:15,n:'Kairo Signet Ring',c:'Rings',g:'Men',o:'Festive',col:'Royal Heritage',p:1990,m:2490,d:'BOGO',mat:'Stainless Steel',r:4.9,rv:87,model:A('m4.jpg'),studio:A('m4_hand.jpg'),desc:'A bold signet with a polished stone face, cut to be worn every day.'},
{id:4,n:'Mira Cuff',c:'Bracelets',g:'Women',o:'Office',col:'Minimalist',p:2290,m:2790,d:'18% OFF',mat:'18K Gold Plated',r:4.8,rv:61,model:A('w8.jpg'),studio:A('w8_hand.jpg'),desc:'A clean open cuff with a subtle architectural curve.'},
{id:16,n:'Noor Gold Pendant',c:'Necklaces',g:'Men',o:'Wedding',col:'Royal Heritage',p:3490,m:4190,d:'17% OFF',mat:'18K Gold Vermeil',r:4.9,rv:102,model:A('m3_model.jpg'),studio:A('m3_detail.jpg'),desc:'An ornate filigree pendant on a fine gold chain — made for weddings and celebrations.'},
{id:5,n:'Halo Layer',c:'Necklaces',g:'Women',o:'Wedding',col:'Royal Heritage',p:3290,m:3990,d:'18% OFF',mat:'18K Gold Vermeil',r:5,rv:153,model:U('1599643477877-530eb83abc8e'),studio:U('1599643478518-a784e5dc4c8f'),desc:'Layered luminosity for ceremonies, celebrations and after-dark dressing.'},
{id:17,n:'Cuban Gold Bracelet',c:'Bracelets',g:'Men',o:'Wedding',col:'Royal Heritage',p:2790,m:3290,d:'15% OFF',mat:'18K Gold Vermeil',r:4.8,rv:73,model:A('m1.jpg'),studio:A('m1_hand.jpg'),desc:'A flat-link Cuban bracelet with a high-polish finish that catches every cuff.'},
{id:6,n:'Pearl Arc',c:'Earrings',g:'Women',o:'Wedding',col:'Royal Heritage',p:2790,m:3290,d:'15% OFF',mat:'18K Gold Plated',r:4.9,rv:86,model:A('w7_model.jpg'),studio:A('w7_ear.jpg'),desc:'Pearl-inspired studs with a high-polish gold finish.'},
{id:18,n:'Onyx Band',c:'Rings',g:'Men',o:'Daily',col:'Minimalist',p:1790,m:2290,d:'22% OFF',mat:'Stainless Steel',r:4.7,rv:49,model:A('m5.jpg'),studio:A('m4_hand.jpg'),desc:'A slim stone-set band that sits flush and wears all day.'},
{id:7,n:'Muse Band',c:'Rings',g:'Women',o:'Daily',col:'Everyday Chic',p:1590,m:1990,d:'BOGO',mat:'Stainless Steel',r:4.7,rv:52,model:A('w7.jpg'),studio:A('w7_hand.jpg'),desc:'A stack-friendly band made for everyday rituals.'},
{id:8,n:'Dune Bangle',c:'Bracelets',g:'Women',o:'Festive',col:'Everyday Chic',p:2590,m:3090,d:'16% OFF',mat:'18K Gold Vermeil',r:4.8,rv:73,model:A('w9.jpg'),studio:A('w9_bangle.jpg'),desc:'A sculpted gold bangle with statement stones for festive dressing.'},
{id:9,n:'Axis Chain',c:'Necklaces',g:'Women',o:'Office',col:'Minimalist',p:1790,m:2190,d:'18% OFF',mat:'Stainless Steel',r:4.7,rv:48,model:U('1506630448388-4e683c67ddb0'),studio:U('1617038220319-276d3cfab638'),desc:'A crisp chain for a clean neckline and effortless layering.'},
{id:10,n:'Rhea Stack',c:'Combos',g:'Women',o:'Festive',col:'Personalized',p:1499,m:2199,d:'32% OFF',mat:'18K Gold Plated',r:4.9,rv:119,model:A('w6.jpg'),studio:U('1599643477877-530eb83abc8e'),desc:'A ready-to-layer set curated for instant impact.'},
{id:11,n:'Aster Mini Hoops',c:'Earrings',g:'Women',o:'Daily',col:'Everyday Chic',p:1299,m:1699,d:'24% OFF',mat:'18K Gold Plated',r:4.8,rv:91,model:A('w7_ear.jpg'),studio:U('1535632066927-ab7c9ab60908'),desc:'Petite hoops with a smooth everyday shine.'},
{id:12,n:'Aria Duo',c:'Combos',g:'Women',o:'Wedding',col:'Personalized',p:999,m:1499,d:'BUNDLE',mat:'18K Gold Plated',r:4.8,rv:67,model:A('w8.jpg'),studio:A('w8_hand.jpg'),desc:'A petite pairing designed to gift beautifully.'}];
const CAT={
'Customize For You':[['Necklaces','Delicate layers & bold pendants',U('1617038220319-276d3cfab638'),'Necklaces','Women'],['Bangles & Cuffs','Statement gold for her',A('w9.jpg'),'Bracelets','Women'],['Men’s Pendants','Heirloom shine, modern lines',A('m3_model.jpg'),'Necklaces','Men'],['Men’s Rings','Signets & bands built to last',A('m4.jpg'),'Rings','Men']],
'For Her':[['Necklaces','Delicate layers & bold pendants',U('1617038220319-276d3cfab638'),'Necklaces','Women'],['Rings','Solitaires & stacking bands',A('w6_model.jpg'),'Rings','Women'],['Earrings','Little details, lasting impact',A('w7_ear.jpg'),'Earrings','Women'],['Bracelets','Soft shine for every day',A('w8.jpg'),'Bracelets','Women']],
'For Him':[['Pendants','Understated, made to layer',A('m2.jpg'),'Necklaces','Men'],['Bracelets','Wrist stacks with quiet weight',A('m1_hand.jpg'),'Bracelets','Men'],['Rings','Signets & bands built to last',A('m4.jpg'),'Rings','Men'],['Gold Edit','Heirloom shine, modern lines',A('m3_model.jpg'),'Necklaces','Men']]};
const O=[['Wedding',A('w9.jpg'),'Wedding'],['Office',A('m4.jpg'),'Office'],['Daily',A('m1.jpg'),'Daily'],['Festive',A('m3_model.jpg'),'Festive']];
const LOOK=[[A('w9.jpg'),'Gold bangles','Bracelets','Women'],[A('m2.jpg'),'Compass pendant','Necklaces','Men'],[A('w6_model.jpg'),'Solitaire rings','Rings','Women'],[A('m1_hand.jpg'),'Link bracelets','Bracelets','Men'],[A('w10.jpg'),'Pearl & rose gold','Necklaces','Women'],[A('m4.jpg'),'Signet rings','Rings','Men'],[A('w8.jpg'),'Cuffs','Bracelets','Women'],[A('m5.jpg'),'Stone bands','Rings','Men'],[A('w7_model.jpg'),'Pearl studs','Earrings','Women'],[A('m3_model.jpg'),'Filigree gold','Necklaces','Men']];
const H=[['THE NEW LUMIRA','Jewellery that<br><em>moves with you.</em>','Modern demi-fine pieces for coffee runs, boardrooms, weddings and every beautiful in-between.','Shop bestsellers',A('w9.jpg'),'50% 25%',['All','All']],
['FOR HIM','Quiet strength.<br><em>Worn daily.</em>','Chains, bracelets and rings with understated weight — made for the way he dresses.','Shop for him',A('m1.jpg'),'60% 30%',['All','Men']],
['THE SOLITAIRE EDIT','Shine that<br><em>says it all.</em>','Stacking bands, studs and statement rings for the moments that deserve an entrance.','Shop rings',A('w7.jpg'),'55% 30%',['Rings','All']]];
const INFO={gift:['Gift Cards','Choose a LUMIRA gift card for birthdays, weddings, milestones and just-because moments.'],offers:['Offers & Discounts','Use LUMIRA10 in the bag for 10% off. Selected BOGO and bundle products are marked on their cards.'],privacy:['Privacy Policy','This demo provides the privacy-policy surface. Replace it with your final legal policy before launch.'],returns:['Return & Exchange Policy','Replace this demo copy with your final return and exchange terms before launch.'],shipping:['Shipping Policy','Free express shipping is shown above ₹1,499. Connect your live courier and serviceability system for production.'],warranty:['Lifetime Warranty Terms','The interface highlights a lifetime plating warranty. Replace this placeholder with your final legal warranty terms.'],track:['Track Order','Connect this front-end to your live order tracking API.'],care:['Jewellery Care Guide','Store pieces separately, avoid harsh chemicals and wipe gently after wear. Use your final material-specific care guide at launch.'],size:['Size Guide','Add your production ring and bracelet sizing chart here.'],faq:['Contact Us / FAQs','Add support email, phone, WhatsApp and final FAQ content here.'],about:['About LUMIRA','LUMIRA is modern demi-fine jewellery made for everyday luxury.'],craft:['Our Craftsmanship','LUMIRA centres on 18K gold plating over selected sterling silver and stainless-steel bases.'],stores:['Store Locator','Connect your retail locations or dealer locator here.'],app:['LUMIRA App','The LUMIRA app is coming soon — get exclusive offers and early access to new drops.'],careers:['Careers','Add current openings and application instructions here.']};
let ME=null;
let S={cart:JSON.parse(localStorage.lumiraCart||'[]'),wish:JSON.parse(localStorage.lumiraWish||'[]'),cat:'All',g:'All',col:null,deal:null,occ:null,sort:'featured',persona:'Customize For You',visible:8,promo:false,hero:0};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],M=n=>'₹'+n.toLocaleString('en-IN');
function save(){localStorage.lumiraCart=JSON.stringify(S.cart);localStorage.lumiraWish=JSON.stringify(S.wish);badges();bag();wishlist();syncUser()}
function badges(){$('#bagCount').textContent=S.cart.reduce((a,x)=>a+x.q,0);$('#wishCount').textContent=S.wish.length}
function toast(t){let e=$('#toast');e.textContent=t;e.classList.add('show');clearTimeout(window.tt);window.tt=setTimeout(()=>e.classList.remove('show'),2200)}
function show(id){$(id).classList.add('open');document.body.classList.add('lock')}
function hide(id){$(id).classList.remove('open');if(!$$('.overlay.open,.modal.open,.drawer.open').length)document.body.classList.remove('lock')}
function by(id){return P.find(p=>p.id==id)}
function goTo(id){$(id).scrollIntoView({behavior:'smooth'})}
/* hero */
function hero(){$('#heroSlides').innerHTML=H.map((h,i)=>`<article class="slide ${i?'':'active'}"><div class="heroCopy"><small>${h[0]}</small><h1>${h[1]}</h1><p>${h[2]}</p><button class="pill" data-h="${i}">${h[3]} →</button></div><div class="heroImg"><img src="${h[4]}" alt="LUMIRA campaign" style="object-position:${h[5]}" ${i?'loading="lazy"':''}></div></article>`).join('');
$('#dots').innerHTML=H.map((_,i)=>`<button aria-label="Slide ${i+1}" class="${i?'':'active'}" data-dot="${i}"></button>`).join('');
$$('[data-dot]').forEach(b=>b.onclick=()=>{go(+b.dataset.dot);restart()});$$('[data-h]').forEach(b=>b.onclick=()=>filter(...H[+b.dataset.h][6]))}
function go(i){S.hero=(i+H.length)%H.length;$$('.slide').forEach((x,n)=>x.classList.toggle('active',n==S.hero));$$('[data-dot]').forEach((x,n)=>x.classList.toggle('active',n==S.hero))}
let heroTimer;function restart(){clearInterval(heroTimer);heroTimer=setInterval(()=>go(S.hero+1),6500)}
/* categories / occasions / lookbook */
function categories(){$('#categories').innerHTML=CAT[S.persona].map((c,i)=>`<article class="category" tabindex="0" data-cat="${c[3]}" data-g="${c[4]}"><img src="${c[2]}" alt="${c[0]}" loading="lazy"><span class="catIcon">✦</span><div class="categoryContent"><small>0${i+1}</small><h3>${c[0]}</h3><p>${c[1]}</p></div></article>`).join('');
$$('#categories .category').forEach(e=>{e.onclick=()=>filter(e.dataset.cat,e.dataset.g);e.onkeydown=k=>{if(k.key==='Enter')e.click()}})}
function occasions(){$('#occasions').innerHTML=O.map(o=>`<article class="occasionCard" data-occ="${o[2]}"><img src="${o[1]}" alt="${o[0]} jewellery styling" loading="lazy"><div class="occasionCopy"><span>Shop the edit</span><h3>${o[0]}</h3></div></article>`).join('');
$$('.occasionCard').forEach(e=>e.onclick=()=>{filter('All','All');S.occ=e.dataset.occ;render();goTo('#bestsellers')})}
function lookbook(){$('#lookTrack').innerHTML=LOOK.map(l=>`<article class="look" data-cat="${l[2]}" data-g="${l[3]}"><img src="${l[0]}" alt="${l[1]}" loading="lazy"><span>${l[1]}</span></article>`).join('');$$('.look').forEach(e=>e.onclick=()=>filter(e.dataset.cat,e.dataset.g))}
/* products */
function list(){let x=P.filter(p=>(S.cat==='All'||p.c===S.cat||(S.cat==='Under ₹1,999'&&p.p<1999))&&(S.g==='All'||p.g===S.g)&&(!S.occ||p.o===S.occ)&&(!S.col||p.col===S.col)&&(!S.deal||p.d===S.deal));
if(S.sort==='low')x.sort((a,b)=>a.p-b.p);if(S.sort==='high')x.sort((a,b)=>b.p-a.p);return x}
function card(p){let w=S.wish.includes(p.id);return `<article class="product"><div class="visual" data-q="${p.id}"><img class="model" src="${p.model}" alt="${p.n} on model" loading="lazy"><img class="studio" src="${p.studio}" alt="${p.n} detail" loading="lazy"><span class="badgeSale">${p.d}</span><button class="wish ${w?'active':''}" aria-label="Wishlist" data-w="${p.id}">${w?'♥':'♡'}</button><button class="quick" data-q="${p.id}">◉ Quick View</button></div><h3>${p.n}</h3><div class="material">${p.g==='Men'?'Men · ':'Women · '}${p.mat}</div><div class="rating"><span>★★★★★</span> ${p.r} (${p.rv})</div><div class="price"><b>${M(p.p)}</b><s>${M(p.m)}</s><span class="save">${p.d}</span></div><button class="add" data-add="${p.id}">Add to Bag</button></article>`}
function bindCards(){$$('[data-w]').forEach(b=>b.onclick=e=>{e.stopPropagation();wish(+b.dataset.w)});$$('[data-add]').forEach(b=>b.onclick=()=>add(+b.dataset.add));$$('[data-q]').forEach(b=>b.onclick=e=>{if(e.target.closest('[data-w]'))return;quick(+b.dataset.q)})}
function products(){let l=list(),x=l.slice(0,S.visible);$('#products').innerHTML=x.length?x.map(card).join(''):'<p class="empty">No pieces match this edit. <button class="text" id="resetF">Reset filters</button></p>';
$('#menProducts').innerHTML=P.filter(p=>p.g==='Men').slice(0,4).map(card).join('');$('#womenProducts').innerHTML=P.filter(p=>p.g==='Women'&&p.c!=='Combos').slice(0,4).map(card).join('');
bindCards();$('#more').style.display=l.length>S.visible?'inline-block':'none';let r=$('#resetF');if(r)r.onclick=()=>filter('All','All');chips()}
function chips(){let c=[];if(S.g!=='All')c.push(['g',S.g==='Men'?'For Him':'For Her']);if(S.cat!=='All')c.push(['cat',S.cat]);if(S.occ)c.push(['occ',S.occ]);if(S.col)c.push(['col',S.col]);if(S.deal)c.push(['deal',S.deal==='BOGO'?'Buy 1 Get 1':S.deal]);
$('#chips').innerHTML=c.map(x=>`<button data-chip="${x[0]}">${x[1]} ✕</button>`).join('');$$('[data-chip]').forEach(b=>b.onclick=()=>{let k=b.dataset.chip;if(k==='g')S.g='All';else if(k==='cat')S.cat='All';else S[k]=null;sync();render()})}
function sync(){S.visible=8;$$('#filters button').forEach(b=>b.classList.toggle('active',(b.dataset.cat||'All')===S.cat&&(b.dataset.g||'All')===S.g&&!S.col&&!S.deal&&!S.occ))}
function render(){products();categories();badges();bag();wishlist()}
function filter(c='All',g='All'){S.cat=c;S.g=g;S.occ=null;S.col=null;S.deal=null;sync();render();goTo('#bestsellers')}
/* cart & wishlist */
function wish(id){S.wish.includes(id)?(S.wish=S.wish.filter(x=>x!==id),toast('Removed from wishlist')):(S.wish.push(id),toast('Added to wishlist'));save();products()}
function add(id){let x=S.cart.find(i=>i.id==id);x?x.q++:S.cart.push({id,q:1});save();toast('Added to your bag');show('#bagDrawer')}
function total(){let t=S.cart.reduce((a,x)=>a+by(x.id).p*x.q,0);return S.promo?Math.round(t*.9):t}
function bag(){let e=$('#bagItems');e.innerHTML=S.cart.length?S.cart.map(i=>{let p=by(i.id);return `<div class="row"><img src="${p.model}" alt=""><div><h4>${p.n}</h4><small>${M(p.p)}</small><div class="qty"><button aria-label="Decrease" data-minus="${p.id}">−</button><b>${i.q}</b><button aria-label="Increase" data-plus="${p.id}">+</button></div><button class="remove" data-rem="${p.id}">Remove</button></div><b>${M(p.p*i.q)}</b></div>`}).join(''):'<div style="padding:60px 0;text-align:center">Your bag is waiting for something beautiful.</div>';
let t=total();$('#total').textContent=M(t);let pc=Math.min(100,t/1499*100);$('#shipBar').style.width=pc+'%';$('#shipPct').textContent=Math.round(pc)+'%';$('#shipText').textContent=t>=1499?'Free express shipping unlocked':'₹'+(1499-t).toLocaleString('en-IN')+' away from free shipping';
$$('[data-plus]').forEach(b=>b.onclick=()=>qty(+b.dataset.plus,1));$$('[data-minus]').forEach(b=>b.onclick=()=>qty(+b.dataset.minus,-1));$$('[data-rem]').forEach(b=>b.onclick=()=>{S.cart=S.cart.filter(x=>x.id!=b.dataset.rem);save()})}
function qty(id,d){let x=S.cart.find(i=>i.id==id);x.q+=d;if(x.q<1)S.cart=S.cart.filter(i=>i.id!=id);save()}
function wishlist(){let e=$('#wishItems');e.innerHTML=S.wish.length?S.wish.map(id=>{let p=by(id);return `<div class="row"><img src="${p.model}" alt=""><div><h4>${p.n}</h4><small>${M(p.p)}</small><button class="add" data-move="${p.id}">Move to Bag</button></div></div>`}).join(''):'<div style="padding:60px 0;text-align:center">No saved pieces yet.</div>';
$$('[data-move]').forEach(b=>b.onclick=()=>{S.wish=S.wish.filter(x=>x!=b.dataset.move);add(+b.dataset.move)})}
/* product detail (quick view) */
function quick(id){let p=by(id),w=S.wish.includes(id);$('#quick').innerHTML=`<div class="quickLayout"><div class="gallery"><img id="qimg" src="${p.model}" alt="${p.n}"><div class="toggle"><button class="active" data-view="model">Model View</button><button data-view="studio">Detail View</button></div></div><div><small>${p.g==='Men'?'For Him':'For Her'} · ${p.c} / ${p.o}</small><h2>${p.n}</h2><div class="rating"><span>★★★★★</span> ${p.r} · ${p.rv} reviews</div><p>${p.desc}</p><h3>${M(p.p)} <s>${M(p.m)}</s> <span class="save">${p.d}</span></h3><div class="selector"><label>Metal</label><button class="active">${p.mat}</button><button>Stainless Steel</button></div><div class="selector"><label>Size</label><button class="active">Standard</button><button>Small</button><button>Large</button></div><button class="pill dark full" id="quickAdd">Add to Bag</button><button class="pill outline full" id="quickWish" style="margin-top:8px">${w?'♥ Saved to wishlist':'♡ Add to wishlist'}</button><p class="perks">✦ Waterproof &amp; anti-tarnish · ✦ Lifetime plating warranty · ✦ Free express shipping above ₹1,499</p></div></div>`;
show('#quickModal');$$('#quick .selector').forEach(g=>g.querySelectorAll('button').forEach(b=>b.onclick=()=>{g.querySelectorAll('button').forEach(x=>x.classList.remove('active'));b.classList.add('active')}));
$$('[data-view]').forEach(b=>b.onclick=()=>{$$('[data-view]').forEach(x=>x.classList.remove('active'));b.classList.add('active');$('#qimg').src=b.dataset.view==='model'?p.model:p.studio});
$('#quickAdd').onclick=()=>{hide('#quickModal');add(p.id)};$('#quickWish').onclick=()=>{wish(p.id);$('#quickWish').textContent=S.wish.includes(p.id)?'♥ Saved to wishlist':'♡ Add to wishlist'}}
/* search (local — never changes the main product grid) */
function search(){let q=$('#search').value.trim().toLowerCase();let x=(q?P.filter(p=>(p.n+' '+p.c+' '+p.o+' '+p.col+' '+p.mat+' '+p.g+' '+(p.g==='Men'?'men him male':'women her female')).toLowerCase().includes(q)):P.slice(0,6)).slice(0,8);
$('#results').innerHTML=x.map(p=>`<div class="result" data-res="${p.id}"><img src="${p.model}" alt=""><div><h4>${p.n}</h4><small>${p.g==='Men'?'For Him':'For Her'} · ${p.c} · ${p.o}</small></div><b>${M(p.p)}</b></div>`).join('')||'<p>No pieces found.</p>';
$$('[data-res]').forEach(e=>e.onclick=()=>{hide('#searchOverlay');quick(+e.dataset.res)})}
function info(k){closeMenu();let a=INFO[k]||INFO.about;$('#infoTitle').textContent=a[0];$('#infoText').textContent=a[1];show('#infoModal')}
function checkout(){if(!S.cart.length)return toast('Your bag is empty');$('#checkoutSummary').innerHTML=S.cart.map(i=>`<div class="row"><span>${by(i.id).n} × ${i.q}</span><b>${M(by(i.id).p*i.q)}</b></div>`).join('')+`<div class="row"><b>Total</b><b>${M(total())}</b></div>`;show('#checkoutModal')}
function openMenu(){$('#mobileDrawer').classList.add('open');$('#scrim').classList.add('open');document.body.classList.add('lock')}
function closeMenu(){$('#mobileDrawer').classList.remove('open');$('#scrim').classList.remove('open');if(!$$('.overlay.open,.modal.open,.drawer.open').length)document.body.classList.remove('lock')}
/* init */
hero();lookbook();occasions();render();restart();
$('#prev').onclick=()=>{go(S.hero-1);restart()};$('#next').onclick=()=>{go(S.hero+1);restart()};
$('#more').onclick=()=>{S.visible+=4;products()};$('#sort').onchange=e=>{S.sort=e.target.value;products()};
$$('#filters button').forEach(b=>b.onclick=()=>filter(b.dataset.cat||'All',b.dataset.g||'All'));
$('#allOcc').onclick=()=>filter('All','All');$('#menAll').onclick=()=>filter('All','Men');$('#womenAll').onclick=()=>filter('All','Women');
$$('[data-feature]').forEach(b=>b.onclick=()=>filter('All',b.dataset.feature));
$$('[data-persona]').forEach(b=>b.onclick=()=>{$$('[data-persona]').forEach(x=>x.classList.remove('active'));b.classList.add('active');S.persona=b.dataset.persona;categories()});
$$('[data-collection]').forEach(b=>b.onclick=e=>{e.preventDefault();filter('All','All');S.col=b.dataset.collection;S.visible=12;render();toast(S.col+' collection');closeMenu();goTo('#bestsellers')});
$('#searchBtn').onclick=()=>{show('#searchOverlay');$('#search').focus();search()};$('#search').oninput=search;
$('#bagBtn').onclick=()=>show('#bagDrawer');$('#wishBtn').onclick=()=>show('#wishDrawer');$('#viewAll').onclick=()=>filter('All','All');
$$('[data-promo]').forEach(b=>b.onclick=()=>{if(b.dataset.promo==='BUNDLE'){filter('Combos','All');$('#promo').value='LUMIRA10';toast('Bundle edit — code LUMIRA10 pre-filled in your bag')}else{filter('All','All');S.deal='BOGO';render();toast('Buy 1 Get 1 — selected pieces')}});
$('#applyPromo').onclick=()=>{if($('#promo').value.trim().toUpperCase()==='LUMIRA10'){S.promo=true;save();toast('LUMIRA10 applied — 10% off')}else toast('Try promo code LUMIRA10')};
$('#checkout').onclick=checkout;$('#placeOrder').onclick=()=>{recordOrder();S.cart=[];S.promo=false;save();hide('#checkoutModal');hide('#bagDrawer');toast('Demo order placed — thank you')};
$$('[data-info]').forEach(b=>b.onclick=()=>info(b.dataset.info));$$('[data-close]').forEach(b=>b.onclick=()=>hide('#'+b.dataset.close));
$('#newsletter').onsubmit=e=>{e.preventDefault();let v=$('#email').value;if(!v.includes('@'))return toast('Enter a valid email');$('#newsMsg').textContent='You are in — welcome to the LUMIRA circle.';e.target.reset();toast('Subscribed successfully')};
$('#tickerClose').onclick=()=>$('.announcement').style.display='none';
$('#menuBtn').onclick=openMenu;$('#mobileClose').onclick=closeMenu;$('#scrim').onclick=closeMenu;$('#mobileCollection').onclick=()=>$('#mobileSub').classList.toggle('open');
$$('#mobileDrawer a').forEach(a=>a.onclick=closeMenu);
$$('[data-soc]').forEach(a=>a.onclick=e=>e.preventDefault());
document.addEventListener('keydown',e=>{if(e.key==='Escape'){$$('.overlay.open,.modal.open,.drawer.open').forEach(x=>x.classList.remove('open'));closeMenu();document.body.classList.remove('lock')}});

/* ================= ACCOUNT / PROFILE =================
   Front-end demo auth: accounts live in this browser's localStorage, passwords are salted + hashed
   (PBKDF2-SHA256 via Web Crypto). For production, replace the `DB` adapter below with calls to a real
   backend (Firebase, Supabase, your own API) — the UI does not need to change. */
const KEY={users:'lumiraUsers',sess:'lumiraSession',fail:'lumiraFails'};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const jr=(k,st=localStorage)=>{try{return JSON.parse(st.getItem(k))}catch(e){return null}};
const jw=(k,v,st=localStorage)=>{try{st.setItem(k,JSON.stringify(v));return true}catch(e){return false}};
const hex=b=>[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');
const rnd=n=>hex(crypto.getRandomValues(new Uint8Array(n)));
function sha256(m){const rr=(v,a)=>(v>>>a)|(v<<(32-a));let H=[],K=[],pr=[];for(let c=2;K.length<64;c++)if(pr.every(q=>c%q)){pr.push(c);if(H.length<8)H.push((Math.pow(c,.5)%1)*4294967296|0);K.push((Math.pow(c,1/3)%1)*4294967296|0)}
 const by=[...new TextEncoder().encode(m)],L=by.length*8;by.push(128);while(by.length%64!==56)by.push(0);for(let i=7;i>=0;i--)by.push(i>3?0:(L>>>(i*8))&255);
 for(let o=0;o<by.length;o+=64){const w=[];for(let i=0;i<64;i++){if(i<16)w[i]=by[o+i*4]<<24|by[o+i*4+1]<<16|by[o+i*4+2]<<8|by[o+i*4+3];else{const x=w[i-15],y=w[i-2];w[i]=(w[i-16]+(rr(x,7)^rr(x,18)^(x>>>3))+w[i-7]+(rr(y,17)^rr(y,19)^(y>>>10)))|0}}
  let [a,b,c,d,e,f,g,h]=H;for(let i=0;i<64;i++){const t1=(h+(rr(e,6)^rr(e,11)^rr(e,25))+((e&f)^(~e&g))+K[i]+w[i])|0,t2=((rr(a,2)^rr(a,13)^rr(a,22))+((a&b)^(a&c)^(b&c)))|0;h=g;g=f;f=e;e=(d+t1)|0;d=c;c=b;b=a;a=(t1+t2)|0}
  H=[H[0]+a|0,H[1]+b|0,H[2]+c|0,H[3]+d|0,H[4]+e|0,H[5]+f|0,H[6]+g|0,H[7]+h|0]}
 return H.map(x=>(x>>>0).toString(16).padStart(8,'0')).join('')}
async function hashPw(pw,salt){const en=new TextEncoder();
 if(window.crypto&&crypto.subtle){const k=await crypto.subtle.importKey('raw',en.encode(pw),'PBKDF2',false,['deriveBits']);return 'p2:'+hex(await crypto.subtle.deriveBits({name:'PBKDF2',hash:'SHA-256',salt:en.encode(salt),iterations:150000},k,256))}
 let h=pw+salt;for(let i=0;i<3000;i++)h=sha256(h+salt);return 's2:'+h}
const DB={all:()=>jr(KEY.users)||[],save:u=>jw(KEY.users,u),byEmail:e=>DB.all().find(u=>u.email===e),byId:i=>DB.all().find(u=>u.id===i),
 put(u){const a=DB.all(),i=a.findIndex(x=>x.id===u.id);i<0?a.push(u):a[i]=u;DB.save(a)},del(id){DB.save(DB.all().filter(u=>u.id!==id))}};
const okEmail=e=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);
const pwIssue=p=>p.length<8?'Use at least 8 characters.':!/[A-Za-z]/.test(p)?'Include at least one letter.':!/\d/.test(p)?'Include at least one number.':p.length>128?'Password is too long.':'';
const first=n=>String(n||'').trim().split(/\s+/)[0]||'there';
const initials=n=>String(n||'?').trim().split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase()||'?';
/* session */
function setSession(u,remember){const st=remember?localStorage:sessionStorage,other=remember?sessionStorage:localStorage;other.removeItem(KEY.sess);jw(KEY.sess,{uid:u.id,token:rnd(16),exp:Date.now()+(remember?30:1)*864e5},st)}
function readSession(){for(const st of [sessionStorage,localStorage]){const s=jr(KEY.sess,st);if(s&&s.exp>Date.now()){const u=DB.byId(s.uid);if(u)return u}if(s)st.removeItem(KEY.sess)}return null}
/* actions */
async function doSignup(f){const u={id:'u'+rnd(8),name:f.name.trim().replace(/\s+/g,' '),email:f.email,phone:f.phone,salt:rnd(16),created:Date.now(),addr:{},wish:[],cart:[],orders:[]};
 u.hash=await hashPw(f.pw,u.salt);DB.put(u);return u}
async function doLogin(email,pw){const fl=jr(KEY.fail)||{},rec=fl[email]||{n:0,until:0};if(rec.until>Date.now())return {err:'Too many attempts. Try again in '+Math.ceil((rec.until-Date.now())/1000)+'s.'};
 const u=DB.byEmail(email),h=await hashPw(pw,u?u.salt:'0'.repeat(32));
 if(!u||h!==u.hash){rec.n++;if(rec.n>=5){rec.until=Date.now()+60000;rec.n=0}fl[email]=rec;jw(KEY.fail,fl);return {err:'Incorrect email or password.'}}
 delete fl[email];jw(KEY.fail,fl);return {user:u}}
function syncUser(){if(!ME)return;ME.cart=S.cart;ME.wish=S.wish;DB.put(ME)}
function adopt(u,remember){ME=u;setSession(u,remember);
 u.wish.forEach(id=>{if(!S.wish.includes(id))S.wish.push(id)});u.cart.forEach(i=>{let x=S.cart.find(c=>c.id===i.id);x?x.q=Math.max(x.q,i.q):S.cart.push({...i})});
 save();uiAccount()}
function logout(){sessionStorage.removeItem(KEY.sess);localStorage.removeItem(KEY.sess);ME=null;S.cart=[];S.wish=[];S.promo=false;save();uiAccount();hide('#profileDrawer');closeMenu();toast('You have been logged out')}
function recordOrder(){if(!ME||!S.cart.length)return;ME.orders.unshift({id:'LUM-'+Date.now().toString(36).toUpperCase(),date:Date.now(),total:total(),items:S.cart.map(i=>({n:by(i.id).n,q:i.q,p:by(i.id).p,img:by(i.id).model}))});DB.put(ME)}
/* UI */
function uiAccount(){$('#profileBtn').classList.toggle('on',!!ME);$('#profileBtn').title=ME?'My account':'Log in / Sign up';
 $('#mdAccount').innerHTML=ME?`<small>Signed in as <b>${esc(first(ME.name))}</b></small><button class="pill dark full" data-account>My account</button><button class="pill outline full" data-logout>Log out</button>`:`<button class="pill dark full" data-account>Log in / Sign up</button>`;
 $$('#mdAccount [data-account]').forEach(b=>b.onclick=()=>{closeMenu();openAccount()});$$('#mdAccount [data-logout]').forEach(b=>b.onclick=logout);if($('#profileDrawer').classList.contains('open'))renderProfile()}
function openAccount(tab){if(ME){renderProfile();show('#profileDrawer')}else openAuth(tab||'login')}
function openAuth(tab){authTab(tab);show('#authModal');setTimeout(()=>$(tab==='signup'?'#suName':'#lgEmail').focus(),60)}
function authTab(t){const su=t==='signup';$('#loginForm').hidden=su;$('#signupForm').hidden=!su;$$('.authTabs button').forEach(b=>{const on=b.dataset.auth===t;b.classList.toggle('active',on);b.setAttribute('aria-selected',on)});
 $('#authTitle').textContent=su?'Create your account':'Log in';$('#authEyebrow').textContent=su?'JOIN THE LUMIRA CIRCLE':'WELCOME BACK';$$('.fe,.formErr').forEach(e=>e.textContent='');$$('.authForm input').forEach(i=>i.removeAttribute('aria-invalid'))}
function ferr(id,msg){const i=$('#'+id);$('#'+id+'Err').textContent=msg||'';if(i){msg?i.setAttribute('aria-invalid','true'):i.removeAttribute('aria-invalid')}return !msg}
function busy(btn,on,txt){btn.disabled=on;btn.textContent=on?'Please wait…':txt}
function strength(p){let n=0;if(p.length>=8)n++;if(p.length>=12)n++;if(/[a-z]/.test(p)&&/[A-Z]/.test(p))n++;if(/\d/.test(p))n++;if(/[^A-Za-z0-9]/.test(p))n++;return Math.min(4,Math.max(p?1:0,n-(p.length<8?1:0)))}
function renderProfile(tab=window.pTab||'details'){window.pTab=tab;const u=ME;if(!u)return;
 const tabs=[['details','Details'],['orders','Orders'],['security','Password']];
 let body='';
 if(tab==='details')body=`<form id="detForm" class="authForm" novalidate><div class="field"><label for="pdName">Full name</label><input id="pdName" value="${esc(u.name)}" maxlength="60" autocomplete="name"><span class="fe" id="pdNameErr"></span></div><div class="field"><label for="pdEmail">Email</label><input id="pdEmail" value="${esc(u.email)}" disabled></div><div class="field"><label for="pdPhone">Mobile number</label><input id="pdPhone" value="${esc(u.phone)}" type="tel" inputmode="tel" maxlength="16" autocomplete="tel"><span class="fe" id="pdPhoneErr"></span></div><div class="field"><label for="pdAddr">Delivery address</label><input id="pdAddr" value="${esc(u.addr.line)}" maxlength="140" autocomplete="street-address"></div><div class="two"><div class="field"><label for="pdCity">City</label><input id="pdCity" value="${esc(u.addr.city)}" maxlength="50" autocomplete="address-level2"></div><div class="field"><label for="pdPin">Pincode</label><input id="pdPin" value="${esc(u.addr.pin)}" inputmode="numeric" maxlength="6" autocomplete="postal-code"><span class="fe" id="pdPinErr"></span></div></div><button class="pill dark full" type="submit">Save changes</button></form>`;
 if(tab==='orders')body=u.orders.length?u.orders.map(o=>`<div class="order"><div class="orderTop"><b>${esc(o.id)}</b><span>${new Date(o.date).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})}</span></div>${o.items.map(i=>`<div class="orderItem"><img src="${esc(i.img)}" alt=""><span>${esc(i.n)} × ${i.q}</span><b>${M(i.p*i.q)}</b></div>`).join('')}<div class="orderTotal"><span>Total</span><b>${M(o.total)}</b></div></div>`).join(''):`<div class="emptyState"><p>No orders yet. Your future favourites will appear here.</p><button class="pill" id="startShop">Start shopping</button></div>`;
 if(tab==='security')body=`<form id="pwForm" class="authForm" novalidate><div class="field"><label for="cpOld">Current password</label><div class="pwWrap"><input id="cpOld" type="password" autocomplete="current-password" maxlength="128"><button type="button" class="eye" data-eye>Show</button></div><span class="fe" id="cpOldErr"></span></div><div class="field"><label for="cpNew">New password</label><div class="pwWrap"><input id="cpNew" type="password" autocomplete="new-password" maxlength="128"><button type="button" class="eye" data-eye>Show</button></div><span class="fe" id="cpNewErr"></span></div><div class="field"><label for="cpNew2">Confirm new password</label><div class="pwWrap"><input id="cpNew2" type="password" autocomplete="new-password" maxlength="128"><button type="button" class="eye" data-eye>Show</button></div><span class="fe" id="cpNew2Err"></span></div><button class="pill dark full" type="submit">Update password</button><button type="button" class="text delAcc" id="delAcc">Delete my account</button></form>`;
 $('#profileBody').innerHTML=`<div class="profHead"><div class="avatar">${esc(initials(u.name))}</div><div><h3>${esc(u.name)}</h3><small>${esc(u.email)}</small><small>Member since ${new Date(u.created).toLocaleDateString('en-IN',{month:'long',year:'numeric'})}</small></div></div><div class="stats"><button data-go="orders"><b>${u.orders.length}</b><span>Orders</span></button><button data-go="wish"><b>${S.wish.length}</b><span>Wishlist</span></button><button data-go="bag"><b>${S.cart.reduce((a,x)=>a+x.q,0)}</b><span>In bag</span></button></div><div class="pTabs" role="tablist">${tabs.map(t=>`<button role="tab" class="${t[0]===tab?'active':''}" data-ptab="${t[0]}">${t[1]}</button>`).join('')}</div><div class="pPanel">${body}</div>`;
 $$('[data-ptab]').forEach(b=>b.onclick=()=>renderProfile(b.dataset.ptab));
 $$('[data-go]').forEach(b=>b.onclick=()=>{const g=b.dataset.go;if(g==='orders')renderProfile('orders');else{hide('#profileDrawer');show(g==='wish'?'#wishDrawer':'#bagDrawer')}});
 bindEyes();const ss=$('#startShop');if(ss)ss.onclick=()=>{hide('#profileDrawer');goTo('#bestsellers')};
 const df=$('#detForm');if(df)df.onsubmit=e=>{e.preventDefault();const n=$('#pdName').value.trim().replace(/\s+/g,' '),ph=$('#pdPhone').value.trim(),pin=$('#pdPin').value.trim();let ok=true;
  ok&=ferr('pdName',n.length<2?'Please enter your full name.':'');ok&=ferr('pdPhone',ph&&!/^\+?[\d\s-]{8,15}$/.test(ph)?'Enter a valid mobile number.':'');ok&=ferr('pdPin',pin&&!/^\d{6}$/.test(pin)?'Pincode must be 6 digits.':'');if(!ok)return;
  ME.name=n;ME.phone=ph;ME.addr={line:$('#pdAddr').value.trim(),city:$('#pdCity').value.trim(),pin};DB.put(ME);uiAccount();toast('Profile updated')};
 const pf=$('#pwForm');if(pf)pf.onsubmit=async e=>{e.preventDefault();const o=$('#cpOld').value,n=$('#cpNew').value,n2=$('#cpNew2').value;let ok=true;
  ok&=ferr('cpOld',o?'':'Enter your current password.');ok&=ferr('cpNew',pwIssue(n));ok&=ferr('cpNew2',n2!==n?'Passwords do not match.':'');if(!ok)return;
  if(await hashPw(o,ME.salt)!==ME.hash)return ferr('cpOld','Current password is incorrect.');
  ME.salt=rnd(16);ME.hash=await hashPw(n,ME.salt);DB.put(ME);pf.reset();toast('Password updated')};
 const da=$('#delAcc');if(da)da.onclick=()=>{if(confirm('Delete your LUMIRA account permanently? This cannot be undone.')){const id=ME.id;logout();DB.del(id);toast('Your account has been deleted')}}}
function bindEyes(){$$('[data-eye]').forEach(b=>b.onclick=()=>{const i=b.parentElement.querySelector('input'),sh=i.type==='password';i.type=sh?'text':'password';b.textContent=sh?'Hide':'Show';b.setAttribute('aria-label',sh?'Hide password':'Show password')})}
/* wiring */
$('#profileBtn').onclick=()=>openAccount();$('#logoutBtn').onclick=logout;
$$('[data-auth]').forEach(b=>b.onclick=()=>authTab(b.dataset.auth));bindEyes();
$('#suPass').oninput=e=>{const p=e.target.value,n=strength(p);$('#meterBar').style.width=(n*25)+'%';$('#meterBar').dataset.s=n;$('#meterTxt').textContent=p?['','Weak — add more characters','Fair — try a mix of cases and numbers','Good','Strong password'][n]:'Use 8+ characters with a letter and a number.'};
$('#loginForm').onsubmit=async e=>{e.preventDefault();const em=$('#lgEmail').value.trim().toLowerCase(),pw=$('#lgPass').value;$('#lgErr').textContent='';let ok=true;
 ok&=ferr('lgEmail',!em?'Enter your email address.':!okEmail(em)?'Enter a valid email address.':'');ok&=ferr('lgPass',pw?'':'Enter your password.');if(!ok)return;
 const b=$('#lgSubmit');busy(b,true);const r=await doLogin(em,pw);busy(b,false,'Log in');if(r.err){$('#lgErr').textContent=r.err;return}
 adopt(r.user,$('#lgRemember').checked);e.target.reset();hide('#authModal');toast('Welcome back, '+first(r.user.name));};
$('#signupForm').onsubmit=async e=>{e.preventDefault();const f={name:$('#suName').value.trim(),email:$('#suEmail').value.trim().toLowerCase(),phone:$('#suPhone').value.trim(),pw:$('#suPass').value},c=$('#suPass2').value;$('#suErr').textContent='';let ok=true;
 ok&=ferr('suName',f.name.length<2?'Please enter your full name.':'');ok&=ferr('suEmail',!okEmail(f.email)?'Enter a valid email address.':'');ok&=ferr('suPhone',f.phone&&!/^\+?[\d\s-]{8,15}$/.test(f.phone)?'Enter a valid mobile number.':'');
 ok&=ferr('suPass',pwIssue(f.pw));ok&=ferr('suPass2',c!==f.pw?'Passwords do not match.':'');$('#suTermsErr').textContent=$('#suTerms').checked?'':'Please accept the policy to continue.';if(!$('#suTerms').checked)ok=false;if(!ok)return;
 if(DB.byEmail(f.email)){ferr('suEmail','An account with this email already exists. Try logging in.');return}
 const b=$('#suSubmit');busy(b,true);try{const u=await doSignup(f);adopt(u,true);e.target.reset();$('#meterBar').style.width='0';hide('#authModal');toast('Welcome to LUMIRA, '+first(u.name));}catch(x){$('#suErr').textContent='Could not create your account. Please try again.'}busy(b,false,'Create account')};
ME=readSession();if(ME){ME.wish.forEach(id=>{if(!S.wish.includes(id))S.wish.push(id)});ME.cart.forEach(i=>{if(!S.cart.find(c=>c.id===i.id))S.cart.push({...i})});save()}uiAccount();
