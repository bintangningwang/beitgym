/* Beit Gym – mengisi halaman dari data.js. Tidak perlu diubah untuk ganti harga/jadwal. */
(function () {
  'use strict';

  var D = window.BEIT || {};
  var K = D.kontak || {};

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined && text !== null) n.textContent = text;
    return n;
  }
  function waUrl(msg) {
    var nomor = String(K.whatsapp || '').replace(/\D+/g, '');
    var text = msg || K.pesan || '';
    return 'https://wa.me/' + nomor + (text ? '?text=' + encodeURIComponent(text) : '');
  }
  function waDisplay() {
    var n = String(K.whatsapp || '').replace(/\D+/g, '');
    if (n.indexOf('62') === 0) n = '0' + n.slice(2);
    return n.replace(/^(\d{4})(\d{3})(\d+)$/, '$1-$2-$3');
  }
  function safeImg(src) {
    return typeof src === 'string' && /^(images\/|assets\/|https:\/\/)/.test(src) ? src : '';
  }
  function btn(text, href, style, extra) {
    var a = el('a', 'btn btn--' + style + (extra ? ' ' + extra : ''), text);
    a.href = href;
    if (href.indexOf('https://wa.me/') === 0) { a.target = '_blank'; a.rel = 'noopener'; }
    return a;
  }

  /* ---------- Kontak & link ---------- */
  $$('[data-wa]').forEach(function (a) {
    a.href = waUrl(a.getAttribute('data-wa'));
    a.target = '_blank';
    a.rel = 'noopener';
  });
  $$('[data-maps]').forEach(function (a) { if (K.maps) a.href = K.maps; });
  $$('[data-ig]').forEach(function (a) { if (K.instagram) a.href = K.instagram; });
  $$('[data-text="alamat"]').forEach(function (n) { n.innerText = K.alamat || ''; });
  $$('[data-text="wa"]').forEach(function (n) { n.textContent = waDisplay(); });
  $$('[data-year]').forEach(function (n) { n.textContent = new Date().getFullYear(); });

  /* ---------- Promo ---------- */
  var promo = $('#promo');
  if (promo) {
    var P = D.promo || {};
    if (P.aktif && P.teks) {
      promo.appendChild(el('span', '', P.teks));
      if (P.tombol) {
        var pa = el('a', '', P.tombol);
        pa.href = waUrl('Assalamualaikum, saya mau klaim promo Beit Gym.');
        pa.target = '_blank'; pa.rel = 'noopener';
        promo.appendChild(pa);
      }
      promo.hidden = false;
    }
  }

  /* ---------- Menu HP ---------- */
  var toggle = $('.nav-toggle');
  var nav = $('#nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---------- Foto hero ---------- */
  var heroPhoto = $('#hero-photo');
  if (heroPhoto && D.hero && safeImg(D.hero.foto)) {
    heroPhoto.innerHTML = '';
    var hi = el('img');
    hi.src = safeImg(D.hero.foto);
    hi.alt = 'Area latihan Beit Gym Purwokerto';
    heroPhoto.appendChild(hi);
  }

  /* ---------- Jadwal ---------- */
  var J = D.jadwal || {};
  $$('[data-jadwal]').forEach(function (root) {
    var w = J.wanita || {}, p = J.pria || {};
    $('[data-j="wanita-jam"]', root).textContent = w.jam || '';
    $('[data-j="wanita-hari"]', root).textContent = (w.hari || '') + ' · WIB';
    $('[data-j="pria-jam"]', root).textContent = p.jam || '';
    $('[data-j="pria-hari"]', root).textContent = (p.hari || '') + ' · WIB';
    var we = $('[data-j="weekend"]', root);
    if (we) we.textContent = J.akhirPekan || '';
  });

  /* ---------- Paket ---------- */
  $$('[data-paket]').forEach(function (root) {
    var kat = root.getAttribute('data-paket');
    var limit = parseInt(root.getAttribute('data-limit') || '0', 10);
    var items = (D.paket || []).filter(function (x) { return x.kategori === kat; });
    if (limit) items = items.slice(0, limit);
    items.forEach(function (x) {
      var c = el('div', 'paket__card' + (x.unggulan ? ' is-featured' : ''));
      if (x.unggulan) c.appendChild(el('span', 'pill pill--lime paket__badge', x.label || 'PALING DIMINATI'));
      c.appendChild(el('span', 'paket__name', x.nama));
      if (x.deskripsi) c.appendChild(el('span', 'paket__desc', x.deskripsi));
      var pr = el('span', 'paket__price');
      pr.appendChild(el('span', 'paket__amount', x.harga));
      if (x.satuan) pr.appendChild(el('span', 'paket__unit', x.satuan));
      c.appendChild(pr);
      if (x.benefit && x.benefit.length) {
        var ul = el('ul', 'paket__list');
        x.benefit.forEach(function (b) { ul.appendChild(el('li', '', b)); });
        c.appendChild(ul);
      }
      c.appendChild(btn(x.tombol || 'Pilih Paket', waUrl('Assalamualaikum, saya mau daftar paket ' + x.nama + ' di Beit Gym.'), x.unggulan ? 'lime' : 'outline', 'btn--block'));
      root.appendChild(c);
    });
  });

  /* ---------- Coach ---------- */
  $$('[data-coach]').forEach(function (root) {
    (D.coach || []).forEach(function (x) {
      var c = el('div', 'coach__card');
      var ph = el('div', 'coach__photo');
      if (safeImg(x.foto)) {
        var im = el('img'); im.src = safeImg(x.foto); im.alt = x.nama; im.loading = 'lazy';
        ph.appendChild(im);
      } else {
        var ini = el('span', 'coach__initial', (x.nama || '?').replace(/[^A-Za-z]/g, '').charAt(0).toUpperCase() || 'B');
        ini.setAttribute('aria-hidden', 'true');
        ph.appendChild(ini);
      }
      c.appendChild(ph);
      var body = el('div', 'coach__body');
      body.appendChild(el('span', 'pill pill--lime', x.gender === 'pria' ? 'UNTUK MEMBER PRIA' : 'UNTUK MEMBER WANITA'));
      body.appendChild(el('span', 'coach__name', x.nama));
      var meta = [x.sertifikasi, x.pengalaman].filter(Boolean).join(' · ');
      if (meta) body.appendChild(el('span', 'coach__meta', meta));
      if (x.spesialis) body.appendChild(el('span', 'coach__meta', 'Spesialis: ' + x.spesialis));
      c.appendChild(body);
      root.appendChild(c);
    });
  });

  /* ---------- Testimoni ---------- */
  $$('[data-testimoni]').forEach(function (root) {
    var items = D.testimoni || [];
    if (!items.length) {
      var sec = root.closest('section');
      if (sec) sec.hidden = true;
      return;
    }
    items.forEach(function (x) {
      var f = el('figure', 'testi');
      f.appendChild(el('blockquote', '', x.isi));
      var cap = el('figcaption');
      if (safeImg(x.foto)) { var im = el('img'); im.src = safeImg(x.foto); im.alt = ''; cap.appendChild(im); }
      var who = el('span');
      who.appendChild(el('strong', '', x.nama));
      if (x.keterangan) who.appendChild(el('small', '', x.keterangan));
      cap.appendChild(who);
      f.appendChild(cap);
      root.appendChild(f);
    });
  });

  /* ---------- FAQ ---------- */
  $$('[data-faq]').forEach(function (root) {
    (D.faq || []).forEach(function (x, i) {
      var d = el('details');
      if (i === 0) d.open = true;
      d.appendChild(el('summary', '', x.tanya));
      d.appendChild(el('div', 'faq__a', x.jawab));
      root.appendChild(d);
    });
  });

  /* ---------- Galeri ---------- */
  $$('[data-galeri]').forEach(function (root) {
    var items = (D.galeri || []).map(safeImg).filter(Boolean);
    if (!items.length) {
      var sec = root.closest('section');
      if (sec) sec.hidden = true;
      return;
    }
    items.forEach(function (src, i) {
      var im = el('img'); im.src = src; im.alt = 'Foto Beit Gym ' + (i + 1); im.loading = 'lazy';
      root.appendChild(im);
    });
  });

  /* ---------- Peta ---------- */
  $$('[data-map]').forEach(function (root) {
    var src = String(K.mapsEmbed || '');
    if (/^https:\/\/(www\.)?google\.com\/maps\/embed/.test(src)) {
      root.innerHTML = '';
      var f = el('iframe');
      f.src = src; f.title = 'Peta lokasi Beit Gym'; f.loading = 'lazy';
      f.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
      f.setAttribute('allowfullscreen', '');
      root.appendChild(f);
    }
  });

  /* ---------- Kalkulator BMI ---------- */
  $$('[data-bmi]').forEach(function (root) {
    var t = $('[data-t]', root), b = $('[data-b]', root);
    var o = { v: $('[data-v]', root), k: $('[data-k]', root), s: $('[data-s]', root), m: $('[data-m]', root), cta: $('[data-cta]', root) };
    if (o.cta) o.cta.href = waUrl('Assalamualaikum, saya mau konsultasi program latihan setelah cek BMI.');
    function hitung() {
      var tv = parseFloat(t.value), bv = parseFloat(b.value);
      if (!(tv > 0 && bv > 0)) { o.v.textContent = '–'; o.k.textContent = 'Isi tinggi & berat'; o.s.textContent = ''; o.m.hidden = true; return; }
      var v = bv / Math.pow(tv / 100, 2), k, s;
      if (v < 18.5) { k = 'Berat kurang'; s = 'Program Muscle Building dan arahan pola makan bisa bantu menambah berat badan secara sehat.'; }
      else if (v < 25) { k = 'Normal'; s = 'Mantap! Pertahankan dengan latihan rutin supaya tubuh tetap kuat dan bugar.'; }
      else if (v < 30) { k = 'Berat berlebih'; s = 'Program Fat Loss bersama coach bisa bantu menurunkan lemak secara terarah.'; }
      else { k = 'Obesitas'; s = 'Mulai bertahap dengan pendampingan coach, dan konsultasikan juga ke tenaga kesehatan.'; }
      o.v.textContent = v.toFixed(1).replace('.', ',');
      o.k.textContent = k; o.s.textContent = s;
      o.m.style.left = Math.max(0, Math.min(100, (v - 10) / 30 * 100)) + '%';
      o.m.hidden = false;
    }
    t.addEventListener('input', hitung);
    b.addEventListener('input', hitung);
    $$('.bmi__g', root).forEach(function (g) {
      g.addEventListener('click', function () {
        $$('.bmi__g', root).forEach(function (x) { var on = x === g; x.classList.toggle('is-active', on); x.setAttribute('aria-pressed', on ? 'true' : 'false'); });
        if (o.cta) o.cta.textContent = g.getAttribute('data-g') === 'l' ? 'Konsultasi dengan Coach Pria' : 'Konsultasi dengan Coach Muslimah';
      });
    });
    hitung();
  });

  /* ---------- Pilih goal (Personal Trainer) ---------- */
  $$('[data-goals]').forEach(function (root) {
    var title = $('[data-goal-title]'), desc = $('[data-goal-desc]');
    $$('.goal', root).forEach(function (g) {
      g.addEventListener('click', function () {
        $$('.goal', root).forEach(function (x) { var on = x === g; x.classList.toggle('is-active', on); x.setAttribute('aria-pressed', on ? 'true' : 'false'); });
        title.textContent = g.getAttribute('data-title');
        desc.textContent = g.getAttribute('data-desc');
      });
    });
  });
})();
