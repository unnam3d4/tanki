(()=>{'use strict';
let sdk=null,player=null,initPromise=null,playerPromise=null,readySent=false,playing=false,eventsBound=false;
const sdkUrl=()=>{const h=location.hostname;return(h==='localhost'||h==='127.0.0.1'||h.endsWith('.github.io'))?'https://sdk.games.s3.yandex.net/sdk.js':'/sdk.js'};
function load(){if(window.YaGames)return Promise.resolve();return new Promise((ok,fail)=>{const s=document.createElement('script');s.src=sdkUrl();s.async=true;s.onload=ok;s.onerror=fail;document.head.appendChild(s)})}
function bindPlatformEvents(){if(!sdk||eventsBound||typeof sdk.on!=='function')return;eventsBound=true;try{sdk.on('game_api_pause',()=>window.dispatchEvent(new Event('yandex-game-pause')));sdk.on('game_api_resume',()=>window.dispatchEvent(new Event('yandex-game-resume')))}catch(e){}}
async function init(){if(initPromise)return initPromise;initPromise=(async()=>{try{await load();if(!window.YaGames)return null;sdk=await YaGames.init();bindPlatformEvents();return sdk}catch(e){console.info('[platform] preview mode');return null}})();return initPromise}
function ready(){if(readySent)return;readySent=true;try{sdk?.features?.LoadingAPI?.ready()}catch(e){}}
function start(){if(playing)return;playing=true;try{sdk?.features?.GameplayAPI?.start()}catch(e){}}
function stop(){if(!playing)return;playing=false;try{sdk?.features?.GameplayAPI?.stop()}catch(e){}}
function language(){return sdk?.environment?.i18n?.lang||navigator.language?.slice(0,2)||'ru'}
async function getPlayer(){if(player)return player;if(playerPromise)return playerPromise;playerPromise=(async()=>{try{player=sdk?await sdk.getPlayer():null;return player}catch(e){return null}})();return playerPromise}
async function getData(keys){try{const p=await getPlayer();return p?.getData?await p.getData(keys):null}catch(e){return null}}
async function setData(data,flush=true){try{const p=await getPlayer();if(!p?.setData)return false;await p.setData(data,flush);return true}catch(e){return false}}
async function isAuthorized(){try{const p=await getPlayer();return !!p?.isAuthorized?.()}catch(e){return false}}
async function requestAuth(){try{if(!sdk?.auth?.openAuthDialog)return false;await sdk.auth.openAuthDialog();player=null;playerPromise=null;await getPlayer();return isAuthorized()}catch(e){return false}}
async function showFullscreenAdv(callbacks={}){if(!sdk?.adv?.showFullscreenAdv)return false;stop();return new Promise(resolve=>{try{sdk.adv.showFullscreenAdv({callbacks:{onOpen:()=>callbacks.onOpen?.(),onClose:(wasShown)=>{callbacks.onClose?.(wasShown);resolve(!!wasShown)},onError:(err)=>{callbacks.onError?.(err);resolve(false)}}})}catch(e){resolve(false)}})}
async function showRewardedVideo(callbacks={}){if(!sdk?.adv?.showRewardedVideo)return false;stop();return new Promise(resolve=>{let rewarded=false;try{sdk.adv.showRewardedVideo({callbacks:{onOpen:()=>callbacks.onOpen?.(),onRewarded:()=>{rewarded=true;callbacks.onRewarded?.()},onClose:()=>{callbacks.onClose?.();resolve(rewarded)},onError:(err)=>{callbacks.onError?.(err);resolve(false)}}})}catch(e){resolve(false)}})}
window.Platform={init,ready,start,stop,language,getPlayer,getData,setData,isAuthorized,requestAuth,showFullscreenAdv,showRewardedVideo,get sdk(){return sdk}};
})();