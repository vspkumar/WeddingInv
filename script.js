/* Lightweight interactions for the heritage invitation page. */
(function(){
 const target=new Date("2026-12-13T20:22:00+05:30").getTime();
 const els={d:document.getElementById("cd-d"),h:document.getElementById("cd-h"),m:document.getElementById("cd-m"),s:document.getElementById("cd-s")};
 function tick(){const n=Math.max(0,Math.floor((target-Date.now())/1000));if(els.d)els.d.textContent=String(Math.floor(n/86400)).padStart(2,"0");if(els.h)els.h.textContent=String(Math.floor(n%86400/3600)).padStart(2,"0");if(els.m)els.m.textContent=String(Math.floor(n%3600/60)).padStart(2,"0");if(els.s)els.s.textContent=String(n%60).padStart(2,"0");}tick();setInterval(tick,1000);
 const toggle=document.getElementById("music-toggle"),panel=document.getElementById("music-panel"),frame=document.getElementById("music-frame"),close=document.getElementById("music-close"),action=document.getElementById("music-action");
 function openMusic(){if(!panel||!frame)return;panel.hidden=false;toggle?.setAttribute("aria-expanded","true");if(frame.src==="about:blank")frame.src=frame.dataset.src; if(action)action.textContent="Ⅱ";}
 function closeMusic(){if(!panel||!frame)return;panel.hidden=true;toggle?.setAttribute("aria-expanded","false");frame.src="about:blank";if(action)action.textContent="▶";}
 toggle?.addEventListener("click",()=>panel?.hidden?openMusic():closeMusic());close?.addEventListener("click",closeMusic);
})();