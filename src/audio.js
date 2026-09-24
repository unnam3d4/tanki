(()=>{'use strict';
let ctx=null,master=null,enabled=true,volume=.65;
function ensure(){
  if(!ctx){
    const AC=window.AudioContext||window.webkitAudioContext;
    if(!AC)return null;
    ctx=new AC(); master=ctx.createGain(); master.gain.value=enabled?volume*.22:0; master.connect(ctx.destination);
  }
  if(ctx.state==='suspended')ctx.resume().catch(()=>{});
  return ctx;
}
function tone(freq=440,dur=.08,type='square',vol=.2,slide=0){
  const c=ensure(); if(!c)return;
  const o=c.createOscillator(),g=c.createGain(),t=c.currentTime;
  o.type=type;o.frequency.setValueAtTime(freq,t);
  if(slide)o.frequency.exponentialRampToValueAtTime(Math.max(30,freq+slide),t+dur);
  g.gain.setValueAtTime(Math.max(.0001,vol),t);
  g.gain.exponentialRampToValueAtTime(.0001,t+dur);
  o.connect(g);g.connect(master);o.start(t);o.stop(t+dur+.02);
}
function noise(dur=.12,vol=.12,cut=1200){
  const c=ensure();if(!c)return;
  const n=Math.max(1,Math.floor(c.sampleRate*dur)),b=c.createBuffer(1,n,c.sampleRate),d=b.getChannelData(0);
  for(let i=0;i<n;i++)d[i]=(Math.random()*2-1)*(1-i/n);
  const s=c.createBufferSource(),f=c.createBiquadFilter(),g=c.createGain(),t=c.currentTime;
  f.type='lowpass';f.frequency.value=cut;g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(.0001,t+dur);
  s.buffer=b;s.connect(f);f.connect(g);g.connect(master);s.start(t);
}
function applyGain(){if(master)master.gain.value=enabled?volume*.22:0}
const api={
 setEnabled(v){enabled=!!v;applyGain()},
 setVolume(v){volume=Math.max(0,Math.min(1,Number(v)||0));applyGain()},
 suspend(){if(ctx&&ctx.state==='running')ctx.suspend().catch(()=>{})},
 resume(){if(ctx&&ctx.state==='suspended')ctx.resume().catch(()=>{})},
 unlock:ensure,
 click(){tone(620,.035,'square',.08,-80)},
 shoot(){tone(175,.055,'sawtooth',.11,-70);noise(.055,.045,1800)},
 hit(){tone(780,.035,'square',.055,-180)},
 explosion(big=false){noise(big?.32:.16,big?.20:.11,big?650:1000);tone(big?78:115,big?.26:.12,'sine',big?.18:.09,-35)},
 upgrade(){tone(520,.08,'sine',.09,180);setTimeout(()=>tone(760,.11,'sine',.08,220),70)},
 wave(){tone(330,.07,'square',.06,90);setTimeout(()=>tone(500,.1,'square',.06,160),80)},
 boss(){tone(110,.22,'sawtooth',.10,-25);setTimeout(()=>tone(82,.28,'sawtooth',.12,-18),170)},
 win(){tone(440,.09,'sine',.08,130);setTimeout(()=>tone(660,.11,'sine',.08,170),90);setTimeout(()=>tone(880,.18,'sine',.09,120),200)},
 lose(){tone(220,.16,'sawtooth',.08,-80);setTimeout(()=>tone(135,.28,'sawtooth',.09,-50),120)}
};
window.AudioFX=api;
})();