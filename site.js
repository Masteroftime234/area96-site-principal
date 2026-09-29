const DISCORD='https://discord.gg/ahd8JJVqsF';
const PAGES=[['index.html','Accueil'],['regles.html','Règles'],['informations.html','Informations'],['communaute.html','Communauté']];
const cur=document.body.dataset.page;
const dis='<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5c2-1 4-1.5 7-1.5S17 4 19 5c2 3 3 7 3 11-2 1.5-4 2.5-6 3l-1-2c-1 .3-2 .5-3 .5s-2-.2-3-.5l-1 2c-2-.5-4-1.5-6-3 0-4 1-8 3-11z"/><circle class="e" cx="9" cy="12" r="1.6"/><circle class="e" cx="15" cy="12" r="1.6"/></svg>';
const shield='<svg class="ico s" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/></svg>';
const group='<svg class="ico s" viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M3 20c0-4 3-6 6-6s6 2 6 6M15 14.5c3 0 6 1.500 6 5.500"/></svg>';
document.body.insertAdjacentHTML('afterbegin',
 `<header><a class="logo" href="index.html">AREA-96</a><nav aria-label="Navigation principale">${PAGES.map(([h,t])=>`<a href="${h}"${h===cur?' aria-current="page"':''}>${t}</a>`).join('')}</nav><a class="dl" data-discord href="#">${dis}<span>Rejoindre sur Discord</span></a></header>`);
document.body.insertAdjacentHTML('beforeend',
 `<footer class="strip">${cur==='index.html'?`<span>${shield}Rôles variés</span><span>${group}Communauté active</span><span>${shield}Expérience immersive</span>`:''}<em>SCP Foundation — Site-96</em></footer>`);
document.querySelectorAll('[data-discord]').forEach(a=>{a.href=DISCORD;a.target='_blank';a.rel='noopener'});
