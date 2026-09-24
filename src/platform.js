(()=>{'use strict';let sdk=null,initPromise=null,readySent=false,playing=false;
const sdkUrl=()=>{const h=location.hostname;return(h==='localhost'||h==='127.0.0.1'||h.endsWith('.github.io'))?'https://sdk.games.s3.yandex.net/sdk.js':'/sdk.js'};
function load(){if(window.YaGames)return Promise.resolve();return new Promise((ok,fail)=>{const s=document.createElement('script');s.src=sdkUrl();s.async=true;s.onload=ok;s.onerror=fail;document.head.appendChild(s)})}
async function init(){if(initPromise)return initPromise;initPromise=(async()=>{try{await load();if(!window.YaGames)return null;sdk=await YaGames.init();return sdk}catch(e){console.info('[platform] preview mode');return null}})();return initPromise}
function ready(){if(readySent)return;readySent=true;try{sdk?.features?.LoadingAPI?.ready()}catch(e){}}
function start(){if(playing)return;playing=true;try{sdk?.features?.GameplayAPI?.start()}catch(e){}}
function stop(){if(!playing)return;playing=false;try{sdk?.features?.GameplayAPI?.stop()}catch(e){}}
window.Platform={init,ready,start,stop,get sdk(){return sdk}};
})();