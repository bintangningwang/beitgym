/*
 * ============================================================
 *  DATA WEBSITE BEIT GYM
 *  Ubah isi di file ini untuk mengganti harga, jadwal, coach, dll.
 *  Di GitHub: buka file ini → klik ikon pensil (Edit) → ubah → Commit changes.
 *
 *  Aturan menulis:
 *  - Teks selalu di dalam tanda kutip "...".
 *  - Setiap item dipisah koma. Jangan hapus tanda { } [ ] dan koma.
 *  - Foto: upload dulu ke folder images/, lalu tulis "images/nama-file.jpg".
 *    Kosongkan ("") jika belum ada foto.
 *  - Baris baru di dalam teks ditulis \n
 * ============================================================
 */
window.BEIT = {

  // ---------- BAR PROMO (paling atas) ----------
  promo: {
    aktif: true,                        // true = tampil, false = sembunyikan
    teks: "Promo terbatas untuk member baru!",
    tombol: "Klaim via WhatsApp"
  },

  // ---------- KONTAK & LOKASI ----------
  kontak: {
    whatsapp: "628176052120",           // format 62..., tanpa + dan spasi
    pesan: "Assalamualaikum, saya mau tanya tentang Beit Gym.",
    alamat: "Jl. Sunan Kalijaga Gg 1,\nPurwokerto Selatan, Banyumas",
    maps: "https://maps.app.goo.gl/nk9gK9j9LQNzDZoc9",
    // Google Maps → Bagikan → Sematkan peta → salin HANYA alamat di dalam src="..."
    mapsEmbed: "",
    instagram: "https://www.instagram.com/beitgympurwokerto/"
  },

  // ---------- JAM OPERASIONAL ----------
  jadwal: {
    wanita: { hari: "Senin – Jumat", jam: "06.00 – 16.00" },
    pria:   { hari: "Senin – Jumat", jam: "16.00 – 22.00" },
    akhirPekan: "Sabtu & Ahad buka mulai pukul 07.00 pagi."
  },

  // ---------- FOTO UTAMA BERANDA ----------
  hero: {
    foto: ""                            // contoh: "images/hero.jpg"
  },

  // ---------- PAKET & HARGA ----------
  // kategori: "membership" atau "pt"
  // unggulan: true = kartu hitam dengan label
  paket: [
    {
      nama: "Visit Harian",
      kategori: "membership",
      harga: "[HARGA]",
      satuan: "/ visit",
      deskripsi: "Coba dulu suasananya",
      benefit: ["Akses gym 1 hari", "Sesuai jadwal sesi"],
      unggulan: false
    },
    {
      nama: "Bulanan",
      kategori: "membership",
      harga: "[HARGA]",
      satuan: "/ bulan",
      deskripsi: "Latihan rutin tiap minggu",
      benefit: ["Akses sepuasnya 30 hari"],
      unggulan: true,
      label: "PALING DIMINATI"
    },
    {
      nama: "Paket 3 Bulan",
      kategori: "membership",
      harga: "[HARGA]",
      satuan: "/ paket",
      deskripsi: "Lebih hemat untuk komitmen",
      benefit: ["[Benefit paket]"],
      unggulan: false
    },
    {
      nama: "PT 4 Sesi",
      kategori: "pt",
      harga: "[HARGA]",
      satuan: "/ paket",
      deskripsi: "Cocok untuk belajar teknik dasar",
      benefit: ["Coach sesuai gender"],
      unggulan: false
    },
    {
      nama: "PT 8 Sesi",
      kategori: "pt",
      harga: "[HARGA]",
      satuan: "/ paket",
      deskripsi: "Untuk hasil yang mulai terasa",
      benefit: ["Coach sesuai gender", "Program sesuai target"],
      unggulan: true,
      label: "PALING DIMINATI"
    }
  ],

  // ---------- COACH ----------
  // gender: "wanita" atau "pria"
  coach: [
    {
      nama: "[Nama Coach Muslimah]",
      gender: "wanita",
      foto: "",
      sertifikasi: "[Sertifikasi]",
      pengalaman: "[Pengalaman]",
      spesialis: "Fat Loss, Body Transformation"
    },
    {
      nama: "[Nama Coach Pria]",
      gender: "pria",
      foto: "",
      sertifikasi: "[Sertifikasi]",
      pengalaman: "[Pengalaman]",
      spesialis: "Muscle Building, Strength"
    }
  ],

  // ---------- TESTIMONI (kosongkan [] jika belum ada) ----------
  // contoh: { nama: "Fulanah", keterangan: "Member 6 bulan", isi: "...", foto: "" }
  testimoni: [],

  // ---------- FAQ ----------
  faq: [
    { tanya: "Apakah jam pria dan wanita benar-benar terpisah?",
      jawab: "Ya. Senin–Jumat sesi wanita pukul 06.00–16.00 dan sesi pria pukul 16.00–22.00. Sabtu & Ahad buka mulai pukul 07.00." },
    { tanya: "Saya pemula, boleh langsung daftar?",
      jawab: "Boleh. Tim Beit siap mengarahkan, atau ambil paket Personal Trainer supaya didampingi dari awal oleh coach sesuai gender." },
    { tanya: "Bisa coba dulu sebelum jadi member?",
      jawab: "Bisa dengan paket Visit Harian." },
    { tanya: "Apa aturan pakaian saat latihan?",
      jawab: "[Isi aturan dress code]" },
    { tanya: "Metode pembayaran apa saja yang tersedia?",
      jawab: "[Isi metode pembayaran]" }
  ],

  // ---------- GALERI (daftar foto di folder images/) ----------
  // contoh: ["images/galeri-1.jpg", "images/galeri-2.jpg"]
  galeri: []
};
