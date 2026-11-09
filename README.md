# Website Beit Gym Syar'i Purwokerto

Website statis (HTML, CSS, JS) yang bisa tayang gratis di GitHub Pages.

## Isi folder

| File | Fungsi |
|---|---|
| `index.html` | Beranda |
| `membership.html` | Paket membership, cara daftar, FAQ |
| `personal-trainer.html` | Personal trainer, program, coach, paket PT |
| `cek-bmi.html` | Kalkulator BMI |
| `data.js` | **Semua data yang sering berubah**: promo, WhatsApp, alamat, jam, harga, coach, testimoni, FAQ, galeri |
| `images/` | Tempat foto (hero, coach, galeri) |
| `assets/` | Logo, tampilan (CSS), dan skrip. Tidak perlu diubah |

## Cara mengubah harga, jadwal, coach, dll.

1. Buka repo di github.com → klik file `data.js` → klik ikon pensil (Edit).
2. Ubah teks di dalam tanda kutip. Jangan hapus tanda koma, `{ }`, atau `[ ]`.
3. Klik **Commit changes**. Website ikut berubah dalam 1–2 menit.

## Cara menambah foto

1. Buka folder `images` → **Add file → Upload files** → pilih foto (format .jpg/.webp, di bawah 500 KB) → Commit.
2. Di `data.js`, tulis nama filenya, misalnya `foto: "images/hero.jpg"` atau di `galeri: ["images/galeri-1.jpg", "images/galeri-2.jpg"]`.

Nama file sebaiknya huruf kecil tanpa spasi, contoh `coach-aisyah.jpg`.

## Cara memasang peta Google Maps

Google Maps → cari Beit Gym → **Bagikan → Sematkan peta → Salin HTML**. Dari kode itu, ambil hanya alamat di dalam `src="..."` (diawali `https://www.google.com/maps/embed?...`) lalu tempel di `mapsEmbed` pada `data.js`.

## Kalau tampilan rusak setelah edit

Biasanya karena tanda kutip atau koma terhapus di `data.js`. Buka tab **History** file `data.js` di GitHub, lihat perubahan terakhir, lalu perbaiki atau kembalikan.
