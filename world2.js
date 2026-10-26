(()=>{
const q=id=>document.getElementById(id);
const BL=[
{k:"lec",n:"Lecture Hall",i:"📖",x:-40,z:-40,w:22,d:14,c:"#c9a27a",a:0},
{k:"lib",n:"Library",i:"📚",x:0,z:-48,w:22,d:14,c:"#7aa7c9",a:1},
{k:"caf",n:"Cafeteria",i:"🍲",x:40,z:-40,w:18,d:12,c:"#e0a35a",a:2},
{k:"host",n:"Student Hostel",i:"🛏️",x:-50,z:0,w:18,d:16,c:"#c97a8e",a:"home"},
{k:"apt",n:"Off-campus Apartments",i:"🏢",x:-50,z:32,w:18,d:14,c:"#9a8fc9",a:"home"},
{k:"game",n:"Game Center",i:"🎮",x:50,z:2,w:24,d:18,c:"#6a3fb5",a:"game"},
{k:"chap",n:"Chapel and Mosque",i:"🙏",x:50,z:36,w:18,d:14,c:"#eeeeee",a:7},
{k:"sug",n:"SUG Office",i:"🗳️",x:-30,z:52,w:14,d:10,c:"#6aa86a",a:13},
{k:"mkt",n:"Market",i:"💼",x:0,z:50,w:20,d:12,c:"#d9b26a",a:4},
{k:"bou",n:"Boutique Mall",i:"👗",x:30,z:52,w:18,d:10,c:"#d96aa0",a:11},
{k:"bank",n:"Bank",i:"🏦",x:-58,z:-22,w:12,d:10,c:"#4f7f6a",a:"app:bank"},
{k:"deal",n:"Car Dealership",i:"🚗",x:56,z:-30,w:14,d:10,c:"#c9382c",a:"app:car"},
{k:"clin",n:"Health Centre",i:"💊",x:-24,z:-12,w:12,d:10,c:"#e8e8f0",a:"app:hlt"},
{k:"tax",n:"Taxi Rank",i:"🚕",x:24,z:-12,w:12,d:8,c:"#f2b01e",a:"app:tax"}];
const CI=[[0,-6,4.6]],SP=[4.5,8,15,19],KD={};let K=null,RET=false,JV={x:0,y:0};
const st=document.createElement("style");st.textContent=".nt{position:absolute;transform:translate(-50%,-100%);background:#14202ecc;color:#fff;border-radius:99px;padding:2px 8px;font-size:.72rem;white-space:nowrap;pointer-events:auto}.nt.me{background:#0b6b3a}.joy{position:absolute;left:12px;bottom:12px;width:110px;height:110px;border-radius:50%;background:#ffffff33;border:2px solid #ffffff88;touch-action:none}.knob{position:absolute;width:46px;height:46px;border-radius:50%;background:#ffffffdd;left:32px;top:32px;pointer-events:none}.wb{position:absolute;right:10px;border:0;border-radius:12px;background:#14202ecc;color:#fff;padding:10px 14px;font-weight:700}";document.head.appendChild(st);
function col(p,r){for(const b of BL){const hx=b.w/2+r,hz=b.d/2+r,dx=p.x-b.x,dz=p.z-b.z;if(Math.abs(dx)<hx&&Math.abs(dz)<hz){const ox=hx-Math.abs(dx),oz=hz-Math.abs(dz);if(ox<oz)p.x+=(dx<0?-1:1)*ox;else p.z+=(dz<0?-1:1)*oz}}
for(const c of CI){const dx=p.x-c[0],dz=p.z-c[1],d=Math.hypot(dx,dz),m=c[2]+r;if(d<m&&d>0){p.x+=dx/d*(m-d);p.z+=dz/d*(m-d)}}p.x=Math.max(-66,Math.min(66,p.x));p.z=Math.max(-66,Math.min(66,p.z))}
function mkVeh(i){const T=THREE,g=new T.Group(),c=CARS[i],m=(w,h,d,co,x,y,z)=>{const b=new T.Mesh(new T.BoxGeometry(w,h,d),mat(co));b.position.set(x,y,z);g.add(b)},wh=(x,z,r)=>{const w=new T.Mesh(new T.CylinderGeometry(r,r,.3,10),mat("#111111"));w.rotation.x=Math.PI/2;w.position.set(x,r,z);g.add(w)};
if(i==1){wh(-.9,0,.45);wh(.9,0,.45);m(1.8,.12,.12,c[2],0,.8,0);m(.1,.8,.1,c[2],0,.8,0)}
else{m(3.4,.8,1.7,c[2],0,.7,0);m(1.8,.7,1.5,sh(c[2],.8),-.2,1.4,0);[[-1.1,-.8],[1.1,-.8],[-1.1,.8],[1.1,.8]].forEach(p=>wh(p[0],p[1],.4))}
if(i==3)g.scale.set(1.15,1.15,1.15);return g}
function build(){const T=THREE,r=new T.WebGLRenderer({antialias:true});r.setPixelRatio(Math.min(devicePixelRatio||1,2));const c=r.domElement;c.style.cssText="display:block;width:100%;touch-action:none";
const s=new T.Scene();s.background=new T.Color("#bfe3ff");s.fog=new T.Fog("#bfe3ff",70,170);const am=new T.AmbientLight("#ffffff",.8),dl=new T.DirectionalLight("#fff4d6",.7);dl.position.set(30,60,20);s.add(am);s.add(dl);
const bm=(w,h,d,co,x,y,z)=>{const m=new T.Mesh(new T.BoxGeometry(w,h,d),mat(co));m.position.set(x,y,z);s.add(m);return m};
bm(260,.2,260,"#8fcf7a",0,-.1,0);bm(150,.05,6,"#4a4f57",0,.03,22);bm(6,.05,66,"#4a4f57",0,.03,-9);
const fo=new T.Mesh(new T.CylinderGeometry(4,4.4,1.2,16),mat("#9aa5b1"));fo.position.set(0,.6,-6);s.add(fo);const wa=new T.Mesh(new T.CylinderGeometry(3.4,3.4,1.3,16),mat("#5ab4ff"));wa.position.set(0,.65,-6);s.add(wa);
BL.forEach(b=>{const h=b.k=="game"?11:b.k=="host"||b.k=="apt"?10:8;bm(b.w,h,b.d,b.c,b.x,h/2,b.z);bm(b.w+1,.8,b.d+1,sh(b.c,.7),b.x,h+.4,b.z);bm(4,5,.4,"#2b2f3a",b.x,2.5,b.z+b.d/2+.1);
const cv=document.createElement("canvas");cv.width=320;cv.height=72;const x=cv.getContext("2d");x.fillStyle="#14202e";x.fillRect(0,0,320,72);x.fillStyle="#ffffff";x.font="bold 28px sans-serif";x.textAlign="center";x.fillText(b.i+" "+b.n,160,48);
const sp=new T.Sprite(new T.SpriteMaterial({map:new T.CanvasTexture(cv)}));sp.scale.set(13,2.9,1);sp.position.set(b.x,h+3.4,b.z);s.add(sp);b.dx=b.x;b.dz=b.z+b.d/2+3});
const R=GL.rng(11);for(let i=0;i<120&&CI.length<28;i++){const x=R()*130-65,z=R()*130-65;if(BL.some(b=>Math.abs(x-b.x)<b.w/2+5&&Math.abs(z-b.z)<b.d/2+7)||Math.hypot(x,z+6)<10||Math.abs(z-22)<5||(Math.abs(x)<5&&z<22&&z>-42))continue;CI.push([x,z,1.2]);bm(.6,2,.6,"#7a4a1e",x,1,z);const cn=new T.Mesh(new T.ConeGeometry(1.8,4,7),mat("#2f9e5b"));cn.position.set(x,4,z);s.add(cn)}
K={r,c,s,am,dl,cam:new T.PerspectiveCamera(50,1,.1,300),az:0,el:.85,d:26,tx:0,tz:20,o:{},me:null,on:0,drive:false,fa:0,w:340,h:420,campus:""};
const loop=ms=>{requestAnimationFrame(loop);if(!K.on||!K.c.isConnected||document.hidden)return;const t=ms/1000,dt=Math.min(.05,t-(K.t||t));K.t=t;frame(dt,t)};requestAnimationFrame(loop)}
function mkMe(){const m={x:S.wx==null?0:S.wx,z:S.wz==null?20:S.wz,ang:Math.PI,m:"",mv:false,v:mkAv(S.av),veh:0,vg:null,vk:0};K.s.add(m.v.g);K.ak=JSON.stringify(S.av);const e=document.createElement("div");e.className="nt me";e.textContent="You";q("wl").appendChild(e);m.el=e;return m}
function setVeh(p,i){if(p.vk===i)return;if(p.vg){K.s.remove(p.vg);p.vg=null}p.vk=i;if(i){p.vg=mkVeh(i);K.s.add(p.vg)}}
function setO(list){const seen={};list.forEach(o=>{seen[o.u]=1;let p=K.o[o.u];if(!p){p={x:o.x,z:o.z,tx:o.x,tz:o.z,ang:o.a,ta:o.a,m:"",mv:false,v:mkAv(o.av||{sk:1,hr:0,hc:0,os:0,oc:2}),vk:0,vg:null,u:o.u};K.s.add(p.v.g);const e=document.createElement("div");e.className="nt";e.onclick=()=>wChat(o.u);q("wl").appendChild(e);p.el=e;K.o[o.u]=p}
p.tx=o.x;p.tz=o.z;p.ta=o.a;p.mvr=o.m;p.veh=o.v;p.d=o.d;p.dept=o.dept;p.uni=o.uni;p.el.textContent=(o.v?"🚗 ":"")+o.d;setVeh(p,o.v)});
Object.keys(K.o).forEach(u=>{if(!seen[u]){const p=K.o[u];K.s.remove(p.v.g);if(p.vg)K.s.remove(p.vg);p.el.remove();delete K.o[u]}})}
const turn=(a,to,k)=>a+(((to-a+Math.PI*3)%(Math.PI*2))-Math.PI)*Math.min(1,k);
function frame(dt,t){const m=K.me,veh=K.drive&&S.car?S.car:0;if(K.ak!==JSON.stringify(S.av)){K.s.remove(m.v.g);m.v=mkAv(S.av);K.s.add(m.v.g);K.ak=JSON.stringify(S.av)}
let ix=JV.x+((KD.d||KD.arrowright)?1:0)-((KD.a||KD.arrowleft)?1:0),iy=-JV.y+((KD.w||KD.arrowup)?1:0)-((KD.s||KD.arrowdown)?1:0);const L=Math.hypot(ix,iy);if(L>1){ix/=L;iy/=L}
const fx=-Math.sin(K.az),fz=-Math.cos(K.az),rx=Math.cos(K.az),rz=-Math.sin(K.az),vx=fx*iy+rx*ix,vz=fz*iy+rz*ix,mag=Math.min(1,L);
if(mag>.12){const sp=SP[veh]*mag,ox=m.x,oz=m.z;m.x+=vx*sp*dt;m.z+=vz*sp*dt;col(m,veh?1.6:.6);m.ang=turn(m.ang,Math.atan2(vx,vz),dt*(veh?5:12));m.mv=!veh;
if(veh>=2){K.fa+=Math.hypot(m.x-ox,m.z-oz)*2;if(K.fa>=25){const p=Math.floor(K.fa);K.fa-=p;if(S.$>=p)apply({$:-p});else{K.drive=false;S.log="⛽ No fuel money. You’re on foot now."}}}}else m.mv=false;
setVeh(m,veh);m.v.g.rotation.y=m.ang;pose(m,t);if(veh)m.v.g.position.y+=.55;if(m.vg){m.vg.position.set(m.x,0,m.z);m.vg.rotation.y=m.ang-Math.PI/2}
for(const u in K.o){const p=K.o[u];p.x+=(p.tx-p.x)*Math.min(1,dt*6);p.z+=(p.tz-p.z)*Math.min(1,dt*6);p.ang=turn(p.ang,p.ta,dt*8);p.mv=!p.veh&&Math.hypot(p.tx-p.x,p.tz-p.z)>.3;p.v.g.rotation.y=p.ang;pose(p,t);if(p.veh)p.v.g.position.y+=.55;if(p.vg){p.vg.position.set(p.x,0,p.z);p.vg.rotation.y=p.ang-Math.PI/2}}
K.tx+=(m.x-K.tx)*Math.min(1,dt*5);K.tz+=(m.z-K.tz)*Math.min(1,dt*5);const D=K.d*(veh?1.3:1);K.cam.position.set(K.tx+D*Math.cos(K.el)*Math.sin(K.az),D*Math.sin(K.el),K.tz+D*Math.cos(K.el)*Math.cos(K.az));K.cam.lookAt(K.tx,1,K.tz);
const sl=S.slot,bg=["#bfe3ff","#9fd4ff","#1b2a4a"][sl];K.s.background.set(bg);K.s.fog.color.set(bg);K.am.intensity=[.8,.9,.4][sl];K.dl.intensity=sl==2?.25:.7;
const V3=new THREE.Vector3(),lab=(p,y)=>{V3.set(p.x,y,p.z).project(K.cam);p.el.style.left=((V3.x*.5+.5)*K.w)+"px";p.el.style.top=((-V3.y*.5+.5)*K.h)+"px";p.el.style.display=V3.z<1?"block":"none"};
lab(m,3);for(const u in K.o)lab(K.o[u],3);
let nb=null,bd=6;BL.forEach(b=>{const d=Math.hypot(m.x-b.dx,m.z-b.dz);if(d<bd){bd=d;nb=b}});const nk=nb?nb.k:"";if(nk!==K.nk){K.nk=nk;const e=q("we");if(e){e.style.display=nb?"block":"none";e.textContent=nb?"Enter "+nb.i+" "+nb.n:""}}
K.r.render(K.s,K.cam)}
const near=()=>{const m=K.me;return Object.values(K.o).map(p=>({p,d:Math.hypot(p.x-m.x,p.z-m.z)})).sort((a,b)=>a.d-b.d).slice(0,5)};
function wH(){if(!q("ww")||!K)return;q("ww").textContent="💰 "+N(S.$)+" · 🕒 "+TM[S.slot]+" · Day "+S.day;q("wlog").textContent=S.log||"";
const ev=S.ev!=null?EV[S.ev]:null,e=q("wev");e.style.display=ev?"block":"none";e.innerHTML=ev?"<b>"+ev[0]+"</b>"+ev[1].map((c,j)=>`<button class="ch" onclick="wCh(${j})">${c[0]}</button>`).join(""):"";
const L=near();q("wn").innerHTML=L.length?L.map(({p,d})=>`<div class="row" style="margin:4px 0"><span>${p.veh?"🚗":"🚶"} <b>@${esc(p.d||p.u)}</b> <span class="sm">${Math.round(d)}m · ${esc(p.dept||"")}</span></span><span><button class="sb on" onclick="wChat('${esc(p.u)}')">💬</button> <button class="sb" onclick="wVis('${esc(p.u)}')">🏠</button></span></div>`).join(""):'<span class="sm">No one else on this campus right now. Ask a friend to join the same campus.</span>';
const ms=CH.box?CH.box.filter(x=>x.t==="#square").slice(-4):[];q("wm").innerHTML=ms.map(x=>`<div class="sm"><b>@${esc(x.fd)}</b> ${esc(x.b)}</div>`).join("")||'<span class="sm">Campus Square is quiet. Say hi!</span>'}
async function sync(){if(!T||!K||K.busy||!K.on)return;K.busy=1;try{const m=K.me,l=await rpc("uni_world_sync",{p_token:T,p_campus:K.campus,p_x:m.x,p_z:m.z,p_ang:m.ang,p_veh:K.drive&&S.car?S.car:0,p_mv:!!(m.mv||(K.drive&&JV.x*JV.x+JV.y*JV.y>.02))});setO(l);if(q("wo"))q("wo").textContent=(l.length+1)+" online here";wH()}catch(e){}K.busy=0}
function wBuild(){if(!K)build();K.on=1;K.campus=K.campus||S.uni||U[S.u][0];K.o={};K.nk=null;const h=Math.round(Math.min(window.innerHeight*.58,520));K.h=h;
q("app").innerHTML=`<div class="flag"></div><div class="sc" id="wr" style="height:${h}px"><div id="wl" style="position:absolute;inset:0;pointer-events:none;overflow:hidden"></div><span class="chip" id="ww" style="left:8px;top:8px"></span><div class="cb"><button onclick="wCam(0)">⟲</button><button onclick="wCam(1)">⟳</button><button onclick="wCam(2)">＋</button><button onclick="wCam(3)">－</button><button id="wd" onclick="wDrive()">🚗</button></div><div class="joy" id="wj"><div class="knob" id="wk"></div></div><button class="wb" id="we" style="bottom:12px;display:none" onclick="wGo()"></button></div><div class="card" id="wev" style="display:none"></div><div class="card"><div class="sm" id="wlog"></div></div><div class="card"><div class="row"><b>Campus</b><select id="wc" style="max-width:190px" onchange="wCamp(this.value)">${U.map(u=>`<option value="${u[0]}"${u[0]==K.campus?" selected":""}>${u[0]}</option>`).join("")}</select></div><div class="sm" id="wo">${T?"Connecting…":"Log in to see other students."}</div></div><div class="card"><b>Nearby students</b><div id="wn"></div></div><div class="card"><b>🏫 Campus Square chat</b><div id="wm"></div><div class="row" style="margin-top:6px"><input id="wi" placeholder="Say something…" maxlength="200"><button class="sb on" onclick="wSend()">Send</button></div></div><div class="acts"><button class="go alt" style="margin:0" onclick="wHome()">🏠 Go home</button><button class="go alt" style="margin:0" onclick="wPhone()">📱 Phone</button></div>`;
const w=q("wr").clientWidth||340;K.w=w;K.r.setSize(w,h);K.cam.aspect=w/h;K.cam.updateProjectionMatrix();q("wr").prepend(K.c);
K.me=mkMe();K.me.mv=false;K.drive=K.drive&&!!S.car;q("wd").textContent=K.drive?"🚶":"🚗";
const j=q("wj"),kn=q("wk");let on=0;const mv=e=>{const b=j.getBoundingClientRect(),dx=e.clientX-(b.left+55),dy=e.clientY-(b.top+55),L=Math.min(45,Math.hypot(dx,dy)),a=Math.atan2(dy,dx);JV.x=Math.cos(a)*L/45;JV.y=Math.sin(a)*L/45;kn.style.left=32+Math.cos(a)*L+"px";kn.style.top=32+Math.sin(a)*L+"px"};
j.onpointerdown=e=>{on=1;j.setPointerCapture&&j.setPointerCapture(e.pointerId);mv(e)};j.onpointermove=e=>{if(on)mv(e)};const up=()=>{on=0;JV.x=JV.y=0;kn.style.left="32px";kn.style.top="32px"};j.onpointerup=up;j.onpointercancel=up;
let dg=null;K.c.onpointerdown=e=>{dg={x:e.clientX,az:K.az}};K.c.onpointermove=e=>{if(dg)K.az=dg.az-(e.clientX-dg.x)*.01};K.c.onpointerup=()=>{dg=null};
clearInterval(K.si);clearInterval(K.hi);clearInterval(K.pi);K.si=setInterval(sync,700);K.hi=setInterval(wH,1000);K.pi=setInterval(()=>{if(T&&K.on)pull()},3500);sync();wH()}
function wLeave(){if(!K||!K.on)return;K.on=0;clearInterval(K.si);clearInterval(K.hi);clearInterval(K.pi);JV.x=JV.y=0;if(K.me){S.wx=K.me.x;S.wz=K.me.z;K.s.remove(K.me.v.g);if(K.me.vg)K.s.remove(K.me.vg);K.me=null}
Object.values(K.o).forEach(p=>{K.s.remove(p.v.g);if(p.vg)K.s.remove(p.vg)});K.o={};if(T)rpc("uni_world_leave",{p_token:T}).catch(()=>{});save()}
window.wEnter=()=>{if(!S||S.scr!=="play")return;if(!window.THREE){alert("3D could not load. Check your connection and refresh.");return}V="W";draw()};
window.wCam=k=>{if(!K)return;if(k==0)K.az-=.4;if(k==1)K.az+=.4;if(k==2)K.d=Math.max(12,K.d*.85);if(k==3)K.d=Math.min(48,K.d/.85)};
window.wDrive=()=>{if(!S.car){S.log="🚗 Buy a ride at the Car Dealership first!";wH();return}K.drive=!K.drive;q("wd").textContent=K.drive?"🚶":"🚗";S.log=K.drive?"You’re driving your "+CARS[S.car][0]+". Fuel is paid as you go.":"You’re on foot."};
window.wCamp=c=>{K.campus=c;Object.values(K.o).forEach(p=>{K.s.remove(p.v.g);if(p.vg)K.s.remove(p.vg);p.el.remove()});K.o={};sync()};
window.wCh=j=>{choose(j)};
window.wChat=u=>{RET=true;wLeave();openC(u)};window.wVis=u=>{RET=true;wLeave();visit(u)};
window.wHome=()=>{RET=false;wLeave();V=null;draw()};window.wPhone=()=>{RET=true;wLeave();ph()};
window.wSend=async()=>{const t=q("wi").value.trim();if(!t||!T)return;try{await rpc("uni_send",{p_token:T,p_to:"#square",p_body:t});q("wi").value="";await pull();wH()}catch(e){S.log=e.message;wH()}};
window.wGo=()=>{const b=BL.find(x=>x.k==K.nk);if(!b)return;const a=b.a;
if(a==="home"){wHome();return}
if(a==="game"){const fee=500*P[S.ci];if(S.$<fee){S.log="The Game Center entry fee is "+N(fee)+". Not enough money.";wH();return}apply({$:-fee});S.log="🎮 You paid "+N(fee)+" to enter the Game Center.";RET=true;wLeave();gamesHub();return}
if(typeof a==="string"){RET=true;wLeave();openA(a.slice(4));return}
const ac=acts()[a];if(!can(ac)){S.log="You can’t afford that right now.";wH();return}S.wx=K.me.x;S.wz=K.me.z;act(a)};
document.addEventListener("keydown",e=>{if(V!=="W"||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;KD[e.key.toLowerCase()]=1});
document.addEventListener("keyup",e=>{KD[e.key.toLowerCase()]=0});
const _bk=back;back=function(){if(RET&&S&&S.scr==="play"){RET=false;wEnter()}else{RET=false;_bk()}};
mapV=function(){wEnter()};FNX.mapV=window.wEnter;
const _d7=draw;
draw=function(){if(S&&V==="W"){if(S.scr!=="play"){wLeave();V=null;return _d7()}if(!q("wr"))wBuild();wH();return}
if(K&&K.on)wLeave();_d7();
if(S&&S.scr==="play"&&V===null){const n=document.querySelector('.nav button[onclick="mapV()"]');if(n)n.textContent="🌍"}};
window.W2T={frame:(a,b)=>frame(a,b),K:()=>K,JV};
})();
