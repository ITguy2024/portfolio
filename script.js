document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('.pcard').forEach(c=>c.classList.toggle('hidden',f!=='all'&&c.dataset.cat!==f));}));
