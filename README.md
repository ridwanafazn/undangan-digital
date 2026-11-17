# Undangan Pernikahan Digital — Demo Portofolio

Contoh undangan pernikahan digital satu halaman: cover personal, hitung mundur,
detail acara, galeri, RSVP, dinding doa, amplop digital, dan label meja yang bisa dicetak.

**Live:** https://adinda-bima.pages.dev
**Repo:** https://github.com/ridwanafazn/undangan-digital

> Semua nama, lokasi, nomor rekening, dan detail acara adalah fiksi. Dibuat sebagai
> contoh portofolio, bukan undangan sungguhan.

---

## Yang ada di dalamnya

| Halaman | Isi |
|---|---|
| `index.html` | Undangan utama: cover, pembuka, mempelai, cerita, hitung mundur, acara, galeri, RSVP, doa & ucapan, hadiah, info praktis, penutup |
| `table-card.html` | Generator label meja: *table card* 15×10 cm dan *place card* 9×5 cm, siap cetak |
| `styleboard.html` | 8 arketipe gaya undangan, palet, font pairing, dan catatan risiko |
| `RESEARCH.md` | Riset UI/UX, anatomi section, dan sistem copywriting |
| `assets/` | Foto (Unsplash) yang sudah dikompres ke WebP |

## Fitur

- **Personalized guest link** — `?to=Bapak%20Sujono` mengisi nama tamu di sampul dan form.
- **Cover gate** — halaman dibuka dengan gestur sadar, bukan langsung scroll.
- **Hitung mundur** — dikunci ke `Asia/Jakarta` (UTC+7), bukan zona waktu perangkat.
- **Simpan tanggal** — mengunduh file `.ics` yang bisa dibuka di Google Calendar / Apple Calendar.
- **Galeri + lightbox** — `<dialog>` native, tutup dengan `Esc` atau klik latar.
- **RSVP** — validasi, state sukses, bisa diubah, tersimpan di `localStorage` (demo).
- **Dinding doa** — ucapan baru muncul langsung, tersimpan di perangkat (demo).
- **Amplop digital** — tombol salin rekening dengan fallback `execCommand`.
- **Info praktis** — dress code, parkir, anak-anak, foto, hadiah, hashtag.
- **Musik ambient** — disintesis dengan Web Audio API, tanpa file audio; default mati.
- **Bagikan** — Web Share API dengan fallback WhatsApp.
- **Bottom dock** — navigasi 5 tujuan + progress bar scroll.
- **Aksesibilitas** — skip link, label form, `aria-live`, fokus terlihat, `prefers-reduced-motion`.
- **Tanpa build step** — HTML, CSS, JS murni. Deploy langsung ke Cloudflare Pages.

## Struktur

```
.
├── index.html          # undangan
├── styles.css
├── app.js
├── table-card.html     # generator label meja + print CSS
├── styleboard.html     # 8 arketipe visual
├── RESEARCH.md         # riset & blueprint
├── assets/             # foto WebP
├── _headers            # security + cache headers (Cloudflare Pages)
├── 404.html
└── robots.txt
```

## Menjalankan lokal

Karena tidak ada build step, cukup buka `index.html`. Untuk perilaku yang sama
dengan produksi (dan agar `?to=` mudah diuji):

```bash
npx serve .
# atau
python -m http.server 8080
```

Lalu buka `http://localhost:3000/?to=Bapak%20Sujono`.

## Deploy ke Cloudflare Pages

### Opsi 1 — Git integration (disarankan)

1. Push repo ke GitHub.
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Pilih repo, branch `main`.
4. Build command: kosongkan. Build output directory: `/`.
5. Save and Deploy.

### Opsi 2 — Wrangler

```bash
npx wrangler pages deploy . --project-name adinda-bima
```

## Catatan desain

Arah yang dipakai: **Quiet Romantic** — krem hangat, hijau hutan, brass, tipografi
serif editorial, dan satu gerak khas (reveal halus). Detail keputusan ada di
[`RESEARCH.md`](RESEARCH.md) dan [`styleboard.html`](styleboard.html).

Prinsip yang dipegang:

1. Cover adalah poster, bukan hero marketing.
2. Satu section satu ide.
3. Info praktis dilipat agar tidak merusak alur ritual.
4. Microcopy ditulis serius — state sukses, error, dan penolakan tetap hangat.
5. Performa dan kontras adalah bagian dari desain.

## Label meja

Untuk resepsi dengan seating, yang perlu dicetak:

- **Table card** — nomor meja di atas meja (15×10 cm). Cukup angka besar.
- **Place card** — nama tamu di kursi (9×5 cm, dilipat jadi tent card).
- **Escort card** — kartu pengantar di meja resepsionis, menunjukkan tamu ke meja mana.
- **Seating chart** — denah meja, biasanya satu papan besar.

Untuk acara di bawah ~80 tamu, table card saja biasanya cukup. Generator ada di
[`table-card.html`](table-card.html).

## Kredit foto

Foto dari [Unsplash](https://unsplash.com), lisensi Unsplash. Digunakan sebagai
placeholder demo, bukan foto klien.

## Lisensi

Kode: bebas dipakai untuk belajar dan portofolio.
Teks dan nama tokoh: fiksi.
