var IMG={
  "apel": "images/apel.jpg",
  "arsitektur": "images/arsitektur.jpg",
  "bengkel": "images/bengkel.jpg",
  "cenderamata": "images/cenderamata.jpg",
  "guru": "images/guru.jpg",
  "kampus2": "images/kampus2.jpg",
  "kelas": "images/kelas.jpg",
  "kepsek": "images/kepsek.jpg",
  "lab": "images/lab.jpg",
  "logo": "images/logo.png",
  "milad": "images/milad.jpg",
  "render": "images/render.jpg",
  "sarasehan": "images/sarasehan.jpg",
  "tefa": "images/tefa.jpg",
  "tsm": "images/tsm.jpg",
  "upacara": "images/upacara.jpg",
  "validasi": "images/validasi.jpg",
  "youngcoder": "images/youngcoder.jpg"
};
(function(){
  var nav=document.getElementById('nav'),mb=document.getElementById('mb');
  mb.onclick=function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
  var links=[].slice.call(nav.querySelectorAll('a'));
  links.forEach(function(a){a.onclick=function(){nav.classList.remove('open')}});
  var ids=links.map(function(a){return a.getAttribute('href').slice(1)});
  function spy(){var y=scrollY+130,c=ids[0];ids.forEach(function(id){var e=document.getElementById(id);if(e&&e.getBoundingClientRect().top+scrollY<=y)c=id});links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+c)})}
  addEventListener('scroll',spy,{passive:true});spy();

  var items=[['Gedung Kampus 2','kampus2'],['Young Coder World Cup 2025','youngcoder'],['Praktik Teknik Sepeda Motor','tsm'],['Validasi Kurikulum Pesantren Vokasi','validasi'],['Laboratorium TEFA Perbankan Syariah','tefa'],['Kegiatan Milad Muhammadiyah','milad'],['Apel di halaman sekolah','apel'],['Sarasehan Pendidikan: Mencetak Juara Vokasi','sarasehan'],['Praktik Teknik Kendaraan Ringan dengan penerapan K3','bengkel'],['Penyerahan cenderamata Pesantren Vokasi','cenderamata'],['Belajar di laboratorium komputer','kelas'],['Rancangan Kampus 2','render'],['Merancang bangunan dengan komputer dan maket','arsitektur'],['Keceriaan warga sekolah','guru'],['Laboratorium komputer','lab'],['Upacara bersama seluruh siswa','upacara']];
  var g=document.getElementById('gal'),lb=document.getElementById('lb'),lbv=document.getElementById('lbv'),cur=0;
  function show(i){cur=(i+items.length)%items.length;lbv.innerHTML='<img src="'+IMG[items[cur][1]]+'" alt="'+items[cur][0]+'"><p>'+items[cur][0]+'</p>'}
  items.forEach(function(it,i){
    var b=document.createElement('button');b.className='box';b.type='button';b.setAttribute('aria-label','Perbesar: '+it[0]);
    b.innerHTML='<img src="'+IMG[it[1]]+'" alt="'+it[0]+'"><span>'+it[0]+'</span>';
    b.onclick=function(){show(i);lb.hidden=false;document.getElementById('lbx').focus()};g.appendChild(b);
  });
  function close(){lb.hidden=true}
  document.getElementById('lbx').onclick=close;
  document.getElementById('lbp').onclick=function(){show(cur-1)};
  document.getElementById('lbn').onclick=function(){show(cur+1)};
  lb.onclick=function(e){if(e.target===lb)close()};
  addEventListener('keydown',function(e){if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});
  document.getElementById('f').onsubmit=function(e){e.preventDefault();document.getElementById('ok').hidden=false;this.reset()};
})();
