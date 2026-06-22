/* ═══════════════════════════════════════════
   AK PACK FITNESS — MAIN JAVASCRIPT
   js/main.js
═══════════════════════════════════════════ */

/* ─── CURSOR ─────────────────────────────── */
const cursor=document.getElementById('cursor');
const cursorRing=document.getElementById('cursor-ring');
document.addEventListener('mousemove',e=>{
  cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';
  cursorRing.style.left=e.clientX+'px';cursorRing.style.top=e.clientY+'px';
});
document.querySelectorAll('a,button,.btn,.know-card,.tip-card,.review-card,.hours-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cursor.style.transform='translate(-50%,-50%) scale(2.5)';cursorRing.style.width='64px';cursorRing.style.height='64px'});
  el.addEventListener('mouseleave',()=>{cursor.style.transform='translate(-50%,-50%) scale(1)';cursorRing.style.width='36px';cursorRing.style.height='36px'});
});

/* ─── MOBILE NAV ─────────────────────────── */
const hamburger=document.getElementById('hamburger');
const navMobile=document.getElementById('navMobile');
if(hamburger&&navMobile){
  hamburger.addEventListener('click',()=>navMobile.classList.toggle('open'));
  navMobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navMobile.classList.remove('open')));
}

/* ─── QUOTES ─────────────────────────────── */
const quotes=[
  {text:"The only bad workout is the one that didn't happen.",author:"— Unknown"},
  {text:"Train insane or remain the same.",author:"— Jillian Michaels"},
  {text:"Your body can stand almost anything. It's your mind you have to convince.",author:"— Unknown"},
  {text:"No pain, no gain. Shut up and train.",author:"— Unknown"},
  {text:"Champions aren't made in gyms. Champions are made from something deep inside.",author:"— Muhammad Ali"},
  {text:"The last three or four reps is what makes the muscle grow.",author:"— Arnold Schwarzenegger"},
  {text:"Strength does not come from winning. Your struggles develop your strengths.",author:"— Arnold Schwarzenegger"},
  {text:"If something stands between you and your success, move it. Never be denied.",author:"— Dwayne Johnson"},
  {text:"You don't find the will to win. You bring it with you.",author:"— Urban Meyer"},
  {text:"Success is usually the culmination of controlling failure.",author:"— Sylvester Stallone"},
];
let qIdx=0;
const qText=document.getElementById('quote-text');
const qAuth=document.getElementById('quote-author');
const dotsEl=document.getElementById('quoteDots');
if(qText&&dotsEl){
  quotes.forEach((_,i)=>{const d=document.createElement('div');d.className='qdot'+(i===0?' active':'');d.addEventListener('click',()=>goQuote(i));dotsEl.appendChild(d)});
  function goQuote(i){
    qText.classList.add('quote-fade');qAuth.classList.add('quote-fade');
    setTimeout(()=>{qIdx=i;qText.textContent='\u201C'+quotes[i].text+'\u201D';qAuth.textContent=quotes[i].author;qText.classList.remove('quote-fade');qAuth.classList.remove('quote-fade');document.querySelectorAll('.qdot').forEach((d,j)=>d.classList.toggle('active',j===i))},500);
  }
  goQuote(0);
  setInterval(()=>goQuote((qIdx+1)%quotes.length),6000);
}

/* ─── FITNESS TIPS ───────────────────────── */
const allTips=[
  {emoji:'🏋️',cat:'Strength',title:'Compound Lifts First',body:'Always do compound movements (squat, deadlift, bench) before isolation exercises. Your CNS is freshest at the start — use it for big lifts.'},
  {emoji:'⏱️',cat:'HIIT',title:'20-Minute Rule',body:'Research shows 20 minutes of HIIT 3x per week can match the fat-loss of 60 minutes of steady-state cardio daily. Work smarter, not longer.'},
  {emoji:'🥗',cat:'Nutrition',title:'Eat Greens Pre-Workout',body:'Nitrates in leafy greens convert to nitric oxide, boosting blood flow to muscles by up to 20% — a natural pump you can eat.'},
  {emoji:'🔄',cat:'Recovery',title:'Active Rest Days Win',body:'Light walking, yoga, or swimming on rest days reduces DOMS by 40% by flushing lactic acid and increasing blood flow to damaged tissue.'},
  {emoji:'☀️',cat:'Hormones',title:'Morning Sun = More Gains',body:'10 minutes of morning sunlight boosts testosterone and serotonin. It sets your circadian rhythm for better sleep and recovery at night.'},
  {emoji:'🧊',cat:'Recovery',title:'Cold Exposure Works',body:'Cold showers or ice baths post-workout reduce inflammation markers and cut recovery time by up to 30%. Keep it under 15 minutes.'},
  {emoji:'📊',cat:'Training',title:'Track Everything',body:'Athletes who log their workouts are 33% more consistent and progress 2x faster than those who train by feel alone. Data drives results.'},
  {emoji:'💊',cat:'Nutrition',title:'Creatine Is King',body:'Creatine monohydrate is the most studied legal supplement. 3–5g daily increases strength output by 10–15% consistently.'},
  {emoji:'🧘',cat:'Mental',title:'Breathing Controls Output',body:'Box breathing before heavy sets (4s in, 4s hold, 4s out) activates the parasympathetic system, reducing cortisol and improving focus.'},
  {emoji:'🍌',cat:'Fuel',title:'Carbs Are Not the Enemy',body:'Glycogen (from carbs) is your primary fuel for high-intensity training. Low-carb before lifting cuts power output by up to 25%.'},
  {emoji:'📐',cat:'Form',title:'Slow Eccentrics Build More',body:'Spending 3–4 seconds on the lowering phase creates more micro-tears and hypertrophy than fast reps. Go slow to grow.'},
  {emoji:'💤',cat:'Recovery',title:'Naps Spike Growth Hormone',body:'A 20-minute nap triggers a pulse of growth hormone. Elite athletes use strategic napping to double their recovery between sessions.'},
];
const tipGrid=document.getElementById('tipGrid');
let currentTipSet=0;
function renderTips(){
  if(!tipGrid)return;
  const start=(currentTipSet*4)%allTips.length;
  const batch=[];
  for(let i=0;i<4;i++)batch.push(allTips[(start+i)%allTips.length]);
  tipGrid.innerHTML='';
  batch.forEach((t,i)=>{
    const div=document.createElement('div');
    div.className='tip-card reveal';
    div.innerHTML=`<div class="tip-card-accent"></div><div class="tip-emoji">${t.emoji}</div><div class="tip-category">${t.cat}</div><div class="tip-headline">${t.title}</div><div class="tip-body">${t.body}</div>`;
    tipGrid.appendChild(div);
    setTimeout(()=>div.classList.add('visible'),50+i*80);
  });
  currentTipSet++;
}
renderTips();
setInterval(renderTips,8000);

/* ─── REVIEWS ────────────────────────────── */
const reviewsData=[
  {name:'Arjun K.',stars:5,text:'Best gym in Kodungallur! The trainers are incredibly dedicated and the equipment is top-notch. Transformed my body in 3 months!',date:'2 weeks ago'},
  {name:'Priya S.',stars:5,text:'AK Pack Fitness changed my life. The morning sessions at 5:30 AM are amazing — trainers are always energetic and motivating.',date:'1 month ago'},
  {name:'Mohammed R.',stars:5,text:'Great atmosphere and professional coaching. The evening batches are well-managed. Highly recommended for serious fitness goals.',date:'3 weeks ago'},
  {name:'Sneha T.',stars:5,text:"I've tried many gyms but this one stands out. The trainers know exactly what they're doing and the facility is very clean.",date:'1 month ago'},
  {name:'Rahul M.',stars:5,text:'Excellent gym with great trainers. The diet plans they provide along with workouts are truly effective. Lost 12kg in 4 months!',date:'2 months ago'},
  {name:'Divya P.',stars:4,text:'Really good gym with dedicated coaches. The timings are very convenient — both early morning and evening sessions work perfectly.',date:'3 weeks ago'},
  {name:'Vishnu A.',stars:5,text:'The coaches at AK Pack push you to your limits in the best way possible. Results speak for themselves. Worth every penny!',date:'1 week ago'},
  {name:'Fathima N.',stars:5,text:'Safe and welcoming environment. The trainers are supportive and make sure your form is correct to avoid injuries. Love it here!',date:'5 days ago'},
];
function buildReviews(){
  const track=document.getElementById('reviewsTrack');
  if(!track)return;
  const doubled=[...reviewsData,...reviewsData];
  track.innerHTML=doubled.map(r=>`
    <div class="review-card">
      <div class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div>
      <div class="review-text">"${r.text}"</div>
      <div class="review-author">${r.name}</div>
      <div class="review-date">${r.date}</div>
      <div class="review-google">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
        Google Review
      </div>
    </div>
  `).join('');
}
buildReviews();

/* ─── PROGRESS CHART ─────────────────────── */
function drawChart(){
  const canvas=document.getElementById('progressChart');
  if(!canvas)return;
  const ctx=canvas.getContext('2d');
  const W=canvas.parentElement.clientWidth-80;
  const H=280;
  canvas.width=W;canvas.height=H;
  const weeks=['Wk1','Wk2','Wk3','Wk4','Wk5','Wk6','Wk7','Wk8','Wk9','Wk10','Wk11','Wk12'];
  const datasets=[
    {color:'#cc0000',data:[10,18,26,34,40,49,55,63,70,78,85,92]},
    {color:'#ff6b6b',data:[8,14,22,28,35,42,50,56,62,68,75,80]},
    {color:'#ff9a3c',data:[5,10,16,21,27,33,38,44,50,55,60,65]},
  ];
  const padL=50,padR=20,padT=20,padB=40;
  const plotW=W-padL-padR,plotH=H-padT-padB;
  ctx.strokeStyle='rgba(255,255,255,0.05)';ctx.lineWidth=1;
  for(let i=0;i<=5;i++){
    const y=padT+plotH-(i/5)*plotH;
    ctx.beginPath();ctx.moveTo(padL,y);ctx.lineTo(W-padR,y);ctx.stroke();
    ctx.fillStyle='rgba(255,255,255,0.2)';ctx.font='10px Barlow,sans-serif';
    ctx.fillText((i*20)+'%',padL-32,y+4);
  }
  ctx.fillStyle='rgba(255,255,255,0.3)';ctx.font='10px Barlow,sans-serif';
  weeks.forEach((w,i)=>{const x=padL+(i/(weeks.length-1))*plotW;ctx.fillText(w,x-10,H-8)});
  datasets.forEach(ds=>{
    ctx.beginPath();
    ds.data.forEach((v,i)=>{const x=padL+(i/(weeks.length-1))*plotW;const y=padT+plotH-(v/100)*plotH;i===0?ctx.moveTo(x,y):ctx.lineTo(x,y)});
    ctx.lineTo(padL+plotW,padT+plotH);ctx.lineTo(padL,padT+plotH);ctx.closePath();
    const hex=ds.color.replace('#','');
    const r=parseInt(hex.substring(0,2),16),g=parseInt(hex.substring(2,4),16),b=parseInt(hex.substring(4,6),16);
    const grad=ctx.createLinearGradient(0,padT,0,padT+plotH);
    grad.addColorStop(0,`rgba(${r},${g},${b},0.18)`);grad.addColorStop(1,`rgba(${r},${g},${b},0)`);
    ctx.fillStyle=grad;ctx.fill();
    ctx.beginPath();
    ds.data.forEach((v,i)=>{const x=padL+(i/(weeks.length-1))*plotW;const y=padT+plotH-(v/100)*plotH;i===0?ctx.moveTo(x,y):ctx.lineTo(x,y)});
    ctx.strokeStyle=ds.color;ctx.lineWidth=2;ctx.lineJoin='round';ctx.stroke();
    ds.data.forEach((v,i)=>{const x=padL+(i/(weeks.length-1))*plotW;const y=padT+plotH-(v/100)*plotH;ctx.beginPath();ctx.arc(x,y,3,0,Math.PI*2);ctx.fillStyle=ds.color;ctx.fill()});
  });
}
window.addEventListener('load',drawChart);
window.addEventListener('resize',drawChart);

/* ─── SCROLL REVEAL ──────────────────────── */
const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

/* ─── MUSCLE BARS ────────────────────────── */
const barObserver=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.querySelectorAll('.muscle-fill').forEach(bar=>{bar.style.width=bar.dataset.pct+'%'})});
},{threshold:0.3});
const muscleSection=document.querySelector('.muscle-section');
if(muscleSection)barObserver.observe(muscleSection);

/* ─── ACTIVE NAV ─────────────────────────── */
const sections=document.querySelectorAll('section[id]');
const navLinks=document.querySelectorAll('nav a');
window.addEventListener('scroll',()=>{
  let current='';
  sections.forEach(s=>{if(window.scrollY>=s.offsetTop-100)current=s.id});
  navLinks.forEach(a=>{a.style.color=a.getAttribute('href')==='#'+current?'var(--text)':''});
});
