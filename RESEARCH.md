# Riset: UI/UX, Section & Copywriting Undangan Pernikahan Digital

> Disusun 18 November 2026. Basis: audit langsung [our-wedding.link](https://our-wedding.link/) (landing, katalog desain, demo live tema *Glass Wonder*), pembanding [withjoy.com](https://withjoy.com/wedding-website), dan pola pasar undangan digital Indonesia.
> Dokumen ini jadi *source of truth* untuk arah desain & konten project ini.

---

## 0. Ringkasan eksekutif

Sepuluh temuan yang paling menentukan:

1. **Undangan digital bukan website biasa — ini ritual satu halaman.** Tamu tidak "browsing"; mereka membuka amplop, masuk, menyusuri cerita, lalu pulang. Semua keputusan desain harus melayani pengalaman teatrikal itu.
2. **Cover adalah poster, bukan hero section.** Nama pasangan = headline. Tanggal = subheadline. Nama tamu = personalisasi. Satu tombol: *Buka Undangan*. Tidak ada navigasi di atas fold.
3. **Personalized guest link adalah pembeda utama pasar Indonesia.** Nama tamu muncul di sampul (`Kepada Bapak/Ibu/Saudara/i, ...`). Ini yang membuat undangan terasa "dibuat untuk saya", bukan broadcast.
4. **Urutan section adalah dramaturgi, bukan daftar fitur.** Quote → pasangan → cerita → tanggal → acara → RSVP → hadiah → doa → penutup. Informasi praktis ditunda sampai tamu sudah terlibat secara emosional.
5. **Pasar punya 8 arketipe gaya yang jelas**, dari *Luxury Editorial* sampai *3D/Game*. Tema bukan sekadar warna — ia menentukan tipografi, ornamen, gerak, audio, dan bahkan pilihan kata.
6. **Copywriting Indonesia punya register sendiri:** formal, hangat, banyak formula warisan (mis. "Dengan memohon rahmat dan ridho Allah SWT..."). Yang membedakan kualitas bukan formula itu, tapi **ketepatan konteks** (agama, adat, hubungan dengan tamu) dan **keberanian memangkas cliché**.
7. **Section yang paling sering diabaikan justru paling terasa:** empty state, error state, konfirmasi RSVP, label tombol, dan pesan penutup. Di sinilah produk terasa "mahal" atau "template murahan".
8. **Kegagalan UX terbesar di kategori ini:** autoplay audio sebelum interaksi, gambar 5 MB, teks emas di atas krem (kontras gagal), countdown yang salah zona waktu, dan peta yang hanya berupa iframe tanpa tombol buka aplikasi.
9. **Peluang diferensiasi:** tipografi-first (lebih sedikit stock floral), navigasi bab, *progressive disclosure* untuk info praktis, microcopy yang ditulis serius, dan performa sebagai fitur.
10. **Model konten harus dipisah dari tema.** Satu skema data undangan harus bisa dirender oleh 8 tema berbeda tanpa duplikasi konten. Ini fondasi teknis yang menentukan biaya jangka panjang.

---

## 1. Metode & sumber

| Sumber | Yang diambil |
|---|---|
| `our-wedding.link` — landing & katalog desain | Positioning, taksonomi tema (Adat, Minimalis, Vintage, Animasi, Game, Luxury), fitur (guest link, buku tamu QR, amplop digital, live streaming, 2 bahasa) |
| Demo live `our-wedding.link/design/coba/royal-glass-castel` | **Urutan section asli**, struktur DOM (`#coupleProfile`, `#story`, `#galleries`, `#weddingDetail`, `#rsvp`, `#live`, `#wishes`, `#footer`), font (Mea Culpa, Cormorant Upright, Space Grotesk), copy contoh |
| `withjoy.com/wedding-website` | Inventaris section model *wedding website* Barat: schedule, FAQ, travel, registry, party bios, photo sharing, privacy per tamu |
| Observasi pasar Indonesia | Konvensi bahasa, amplop digital, WhatsApp broadcast, QR check-in, adat |

Catatan: halaman demo memakai *lorem ipsum* dan nama contoh. Itu justru bukti bahwa **copy adalah lapisan yang paling sering diabaikan vendor** — dan tempat kita bisa menang.

---

## 2. Peta produk: dua model yang sering tertukar

| | **Undangan Digital (Indonesia)** | **Wedding Website (US/EU)** |
|---|---|---|
| Bentuk | Single page, naratif, mobile-first | Multi-page, fungsional |
| Pintu masuk | Cover + nama tamu + tombol buka | Home + navigasi |
| Tujuan utama | Menyampaikan rasa & mengundang | Mengelola logistik tamu |
| Konten inti | Quote, pasangan, cerita, tanggal, RSVP, doa, amplop | Schedule, travel, FAQ, registry, RSVP, foto |
| Nada | Puitis, sakral, personal | Informatif, hangat, efisien |
| Distribusi | WhatsApp / link / QR | Email / link |
| Durasi | 3–7 menit menyusuri | 30 detik mencari info |

**Rekomendasi:** bangun model Indonesia sebagai *spine* emosional, lalu selipkan kekuatan model Barat (FAQ, dress code, travel, aksesibilitas) sebagai **lapisan opsional yang bisa dilipat** agar tidak merusak alur ritual.

---

## 3. Audit Our Wedding Link

### 3.1 Struktur section yang benar-benar dipakai

Diambil dari DOM demo live, urut dari atas:

| # | Section | ID / label | Isi |
|---|---|---|---|
| 1 | **Cover** | — | "THE WEDDING OF", inisial "D & P", "scroll down" |
| 2 | **Opening / blessing** | — | Label "Allah's blessings message" + kutipan QS Ar-Rum: 21 |
| 3 | **Couple profile** | `#coupleProfile` | "The Wedding Of", nama lengkap, "youngest Daughter of", nama orang tua, asal |
| 4 | **Love story** | `#story` | "Our Love Story" — timeline/carousel: First Date, The Proposal, The Beginning |
| 5 | **Gallery** | `#galleries` | "Precious Moment" + kutipan + grid foto |
| 6 | **Save the Date + Events** | `#weddingDetail` | Countdown (hari/jam/menit/detik), tanggal, "Marriage Contract" & "Reception", alamat, "see location" |
| 7 | **RSVP** | `#rsvp` | "357 guest response will join, let's send your response too." + tombol reservasi |
| 8 | **Live streaming** | `#live` | Catatan + tombol "go to streaming" |
| 9 | **Digital gift** | — | "SEND YOUR GIFT" + catatan + tombol |
| 10 | **Wishes** | `#wishes` | Dinding ucapan + form "Send a wish" + "also invite" + "Thank You" |
| 11 | **Footer** | `#footer` | Kredit / kustom |

### 3.2 Keputusan yang bagus (patut ditiru)

- **Cover sebagai gerbang.** Pengalaman dibuka dengan gestur sadar, bukan langsung scroll.
- **Nama tamu di sampul.** Personalisasi terasa di detik pertama.
- **Countdown menempel di section acara**, bukan section terpisah — mengurangi scroll.
- **"357 guest response will join"** — social proof yang halus dan relevan.
- **"also invite"** di penutup: tamu bisa meneruskan undangan. Fitur distribusi yang cerdas.
- **Pemisahan akad vs resepsi** dengan tanggal, jam, alamat, dan tombol peta masing-masing.
- **Label section memakai frasa emosional** (`Precious Moment`, `Our Love Story`), bukan label teknis (`Galeri`, `Detail Acara`).

### 3.3 Kelemahan yang bisa kita lampaui

| Masalah | Dampak | Perbaikan |
|---|---|---|
| Campuran 3 jenis font (script + serif + grotesk) tanpa hierarki ketat | Terasa ramai, tidak konsisten | Tetapkan **1 display + 1 body + 1 aksen** per tema, maksimal |
| *Lorem ipsum* di demo publik | Menurunkan kepercayaan calon pembeli | Demo harus memakai copy jadi, bukan placeholder |
| Gallery sebelum detail acara | Tamu yang butuh tanggal/venue harus scroll jauh | Taruh ringkasan tanggal+venue tepat setelah pasangan, atau buat sticky "info" |
| Tidak ada navigasi bab | Scroll panjang terasa tanpa arah | Chapter marker / progress rail / bottom nav 5 ikon |
| Kontras teks emas di krem | Gagal WCAG, sulit dibaca di layar terang | Uji kontras; sediakan varian teks gelap |
| Aset gambar besar | Loading lambat di 3G/4G Indonesia | AVIF/WebP, LQIP, preload hanya cover |
| Copy template berulang ("see location" 3×) | Terasa dirakit | Variasikan aksi: "Buka Peta", "Rute ke Akad", "Parkir & Lokasi" |
| Info praktis (dress code, FAQ, parkir) tidak ada | Tamu bertanya via WhatsApp | Section "Sebelum Datang" yang bisa dilipat |

---

## 4. Delapan arketipe gaya UI/UX

Tema bukan palet warna. Tiap arketipe adalah **paket keputusan**: warna, tipografi, ornamen, foto, gerak, audio, dan nada copy.

### 4.1 Luxury Editorial / Chateau

- **Nuansa:** undangan cetak mahal, kertas tebal, tinta emas, ballroom.
- **Palet:** Ivory `#F7F1E6` · Champagne `#D9C3A0` · Espresso `#2B2119` · Gold `#A8865B` · Dusty Rose `#C9A6A0`
- **Tipografi:** display serif kontras tinggi (Cormorant Garamond / Playfair Display) + script aksen (Mea Culpa / Pinyon Script) + UI sans (Inter / Space Grotesk)
- **Ornamen:** ilustrasi cat air venue, bingkai garis emas tipis, monogram/crest, wax seal
- **Foto:** warm film, kontras lembut, tone krem
- **Gerak:** fade + scale 1.04, durasi 900–1200 ms, parallax halus 0.15
- **Audio:** piano / string instrumental
- **Paling cocok untuk:** venue hotel, ballroom, pasangan yang ingin terasa "timeless".
- **Risiko:** emas di krem gagal kontras; script di bawah 14 px tidak terbaca.

### 4.2 Botanical Garden

- **Nuansa:** taman, cahaya pagi, kertas bertekstur, botanical illustration.
- **Palet:** Sage `#8A9A7B` · Olive `#55603F` · Cream `#FAF6EC` · Clay `#C08A6A` · Ink `#2F3327`
- **Tipografi:** serif organik (Lora / EB Garamond) + handwritten (Caveat) + sans (Karla)
- **Ornamen:** line-art floral, leaf divider, deckled edge, SVG draw-on
- **Foto:** natural light, udara terbuka, sedikit overexposed
- **Gerak:** sway lembut, daun "tumbuh" saat scroll
- **Paling cocok untuk:** garden party, outdoor, intimate wedding.
- **Risiko:** floral berlebihan = generik dan berat secara visual.

### 4.3 Quiet Minimalist

- **Nuansa:** galeri seni, ruang kosong, tipografi sebagai ornamen.
- **Palet:** Bone `#F4F1EC` · Sand `#E3DACD` · Charcoal `#1F1F1D` · Stone `#8C877E` + satu aksen (rust `#B4552D` atau slate `#4A5A6A`)
- **Tipografi:** display serif ringan (Instrument Serif) **atau** sans rapi (Inter Tight) + label uppercase letter-spacing lebar
- **Ornamen:** hairline, nomor indeks (`01 — 04`), ruang kosong besar
- **Foto:** hitam-putih atau desaturasi ringan
- **Gerak:** 400–600 ms, opacity + translateY 12 px, tanpa parallax
- **Paling cocok untuk:** pasangan urban, venue arsitektural, second marriage, intimate dinner.
- **Risiko:** terasa dingin; kehangatan harus datang dari copy dan foto.

### 4.4 Vintage Postcard

- **Nuansa:** kartu pos lama, stempel, tinta pudar, album foto keluarga.
- **Palet:** Paper `#F3E9D2` · Sepia `#E8D8BE` · Burgundy `#6E2B2B` · Mustard `#C99B3F` · Forest `#3E4A3A`
- **Tipografi:** typewriter (Special Elite / Courier Prime) + condensed serif (Bodoni Moda)
- **Ornamen:** perangko, postmark, tali, tiket, wax seal, foto Polaroid
- **Foto:** grain 35 mm, sedikit warm
- **Gerak:** kertas terlipat, stempel jatuh, foto muncul seperti ditarik
- **Paling cocok untuk:** tema retro, destinasi, pasangan yang suka analog.
- **Risiko:** kitsch; jaga grid tetap modern agar tidak terasa "template 2012".

### 4.5 Adat / Traditional

- **Nuansa:** sakral, megah, penuh makna keluarga.
- **Sub-gaya:** Jawa (maroon–gold, parang/kawung), Minang (maroon–gold, songket), Bugis (teal/burgundy, pinishi), Bali (putih–gold, pura, frangipani), Sunda (hijau lembut, blawong).
- **Tipografi:** serif ornate + script; hindari sans modern yang memutus nuansa
- **Ornamen:** border batik, gunungan, tenun band, songket, motif yang **akurat secara budaya**
- **Audio:** gamelan / instrumental tradisional
- **Gerak:** tirai membuka, reveal lambat dan khidmat
- **Paling cocok untuk:** prosesi adat, acara keluarga besar.
- **Risiko:** kesalahan motif = fatal secara sosial. Wajib libatkan keluarga/adat consultant; jangan campur motif dari daerah berbeda.

### 4.6 3D Diorama / Game

- **Nuansa:** dunia mini, paper-craft, playful, Gen Z.
- **Palet:** isometrik pastel (mint, peach, sky) **atau** palet pixel 8-bit terbatas
- **Tipografi:** rounded sans (Nunito / Fredoka) atau pixel font (Press Start 2P — sangat terbatas)
- **Ornamen:** venue isometrik, karakter avatar, objek interaktif
- **Gerak:** kamera scroll-driven, mini-interaksi, easter egg
- **Paling cocok untuk:** pasangan muda, tema game, acara kasual.
- **Risiko:** performa WebGL, novelty cepat bosan, keterbacaan teks kecil.

### 4.7 Cinematic Motion

- **Nuansa:** film pendek, trailer, title sequence.
- **Palet:** near-black `#0E0E10` · warm white · color grade filmic
- **Tipografi:** condensed grotesk uppercase + serif elegan untuk nama
- **Ornamen:** fullscreen video, letterbox, timecode, chapter title
- **Gerak:** scroll-driven sequence, masked reveal, hard cut
- **Paling cocok untuk:** pre-wedding video, venue dramatis, pasangan yang ingin "wow".
- **Risiko:** kuota data, baterai, `prefers-reduced-motion`, autoplay diblokir.

### 4.8 Modern Magazine

- **Nuansa:** editorial fashion, layout asimetris, tipografi besar.
- **Palet:** off-white + hitam + satu aksen jenuh (electric blue / tomato)
- **Tipografi:** grotesk oversized (Archivo / Anton) + serif untuk body
- **Ornamen:** rule, caption, nomor edisi, grid asimetris, foto duotone
- **Gerak:** hard cut, stagger, tanpa easing berlebihan
- **Paling cocok untuk:** pasangan kreatif, kota, venue industrial.
- **Risiko:** bisa terasa seperti brand deck, bukan pernikahan — tambahkan kehangatan lewat copy dan foto candid.

### 4.9 Tabel perbandingan cepat

| Arketipe | Kepadatan | Kehangatan | Biaya produksi | Risiko utama |
|---|---|---|---|---|
| Luxury Editorial | Sedang | Tinggi | Tinggi | Kontras & berat aset |
| Botanical | Sedang | Tinggi | Sedang | Generik |
| Quiet Minimalist | Rendah | Rendah–sedang | Rendah | Dingin |
| Vintage Postcard | Tinggi | Tinggi | Sedang | Kitsch |
| Adat | Tinggi | Sangat tinggi | Tinggi | Akurasi budaya |
| 3D / Game | Tinggi | Sedang | Sangat tinggi | Performa |
| Cinematic | Rendah | Sedang | Sangat tinggi | Data & aksesibilitas |
| Modern Magazine | Sedang | Rendah–sedang | Sedang | Terasa korporat |

---

## 5. Anatomi section: blueprint 16 bagian

Urutan ini yang saya rekomendasikan. Kolom **"Wajib"** menandai apakah section masuk MVP.

| # | Section | Tujuan | Wajib | Layout khas | Copy anchor |
|---|---|---|---|---|---|
| 0 | **Gate / Cover** | Ritual pembuka + identitas tamu | ✅ | 100dvh, nama jadi hero, 1 CTA | "Kepada Bapak/Ibu/Saudara/i, {Nama}" |
| 1 | **Opening** | Menyapa & menetapkan nada | ✅ | Teks pendek centered, 2–4 baris | "Dengan memohon rahmat..." |
| 2 | **Quote** | Menambatkan makna | ✅ | Kutipan + sumber, ornamen tipis | "Dan di antara tanda-tanda..." |
| 3 | **Couple** | Memperkenalkan kedua mempelai & keluarga | ✅ | Dua blok vertikal / split, foto portrait | "Putri terakhir dari..." |
| 4 | **Story** | Membangun emosi & konteks | ⬜ | Timeline vertikal / carousel kartu | "Bagaimana semuanya dimulai" |
| 5 | **Save the Date** | Mengunci tanggal di kepala tamu | ✅ | Countdown + tanggal besar | "Menghitung Hari" |
| 6 | **Events** | Info akad & resepsi | ✅ | Kartu acara, tanggal–jam–venue–peta | "Akad Nikah", "Resepsi" |
| 7 | **Location** | Memandu tamu | ✅ | Peta + alamat + tombol rute | "Buka di Google Maps" |
| 8 | **Gallery** | Menunjukkan chemistry & estetika | ⬜ | Masonry / horizontal snap | "Precious Moment" |
| 9 | **RSVP** | Konfirmasi kehadiran | ✅ | Form singkat, pilihan hadir/tidak | "Konfirmasi Kehadiran" |
| 10 | **Wishes** | Doa & ucapan tamu | ✅ | Wall of wishes + form | "Tinggalkan doa & ucapan" |
| 11 | **Gift** | Amplop digital | ⬜ | Kartu rekening + copy + QR | "Amplop Digital" |
| 12 | **Live** | Siaran langsung | ⬜ | Kartu link + catatan | "Saksikan dari jauh" |
| 13 | **Practical** | Dress code, FAQ, parkir, hadiah fisik | ⬜ | Accordion | "Sebelum Datang" |
| 14 | **Closing** | Ucapan terima kasih & salam | ✅ | Full-bleed foto + teks | "Terima kasih atas doa & restu" |
| 15 | **Floating UI** | Navigasi, musik, share | ✅ | Bottom bar 5 ikon / FAB | "Putar musik", "Bagikan" |

### 5.1 Detail tiap section

#### 0. Gate / Cover
- **Tujuan:** menciptakan jeda sebelum masuk; mengonfirmasi "ini undangan untuk saya".
- **Isi:** label kecil (`The Wedding Of`), nama panggilan pasangan, tanggal, nama tamu, tombol.
- **Aturan:** satu CTA saja; tidak ada menu; tidak ada teks paragraf; tombol minimal 48 px tinggi.
- **Jangan:** autoplay audio sebelum tap; menaruh 5 tombol sosial di cover.

#### 1. Opening
- **Tujuan:** menyapa dan menetapkan register (sakral / hangat / playful).
- **Panjang ideal:** 2–4 baris. Bukan paragraf.
- **Contoh:** "Assalamu'alaikum warahmatullahi wabarakatuh. Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami."

#### 2. Quote
- **Tujuan:** memberi bobot emosional dan konteks budaya/agama.
- **Aturan:** selalu cantumkan sumber; jangan memalsukan atribusi; sediakan opsi tanpa kutipan religius.
- **Pilihan:** QS Ar-Rum 21 (Islam), 1 Korintus 13:4–7 (Kristen), doa/mantra sesuai tradisi (Hindu/Buddha), atau kutipan netral.

#### 3. Couple
- **Tujuan:** memperkenalkan nama, urutan anak, dan orang tua — informasi sosial yang penting dalam konteks Indonesia.
- **Struktur:** foto → nama panggilan → nama lengkap → "Putra/putri ke-/dari" → nama orang tua → asal kota.
- **Aturan:** konsisten format kiri/kanan; jangan campur "bin" dan "putra dari" dalam satu undangan.

#### 4. Story
- **Tujuan:** memberi tamu alasan emosional untuk peduli.
- **Format:** 3–5 bab, masing-masing 1 judul + 1–2 kalimat + 1 foto (opsional).
- **Judul yang bekerja:** "Pertemuan", "Penantian", "Lamaran", "Rumah".
- **Jangan:** paragraf 200 kata; timestamp tanggal yang tidak akurat.

#### 5. Save the Date
- **Tujuan:** satu angka yang mudah diingat.
- **Aturan:** countdown memakai zona waktu acara (`Asia/Jakarta` = +07:00), bukan zona device.
- **Copy:** "Menghitung Hari" / "Save the Date" / "The Day".

#### 6. Events
- **Tujuan:** informasi paling dicari tamu.
- **Struktur per acara:** nama acara → hari & tanggal → jam mulai–selesai → nama venue → alamat → tombol peta.
- **Aturan:** urutkan sesuai kronologi; bedakan akad dan resepsi secara visual; tampilkan zona waktu eksplisit (WIB/WITA/WIT).
- **Jangan:** menyembunyikan venue di balik accordion yang tidak terlihat.

#### 7. Location
- **Tujuan:** tamu tidak tersesat.
- **Aturan:** tombol ke Google Maps / Apple Maps; sediakan alamat teks yang bisa disalin; sebutkan patokan & parkir jika perlu.

#### 8. Gallery
- **Tujuan:** menunjukkan chemistry, estetika, dan kualitas foto.
- **Aturan:** maksimal 20 foto; `loading="lazy"`; lightbox; rasio konsisten; jangan campur 10 gaya editing.
- **Copy:** beri satu kutipan pendek di atas grid agar tidak terasa album Dropbox.

#### 9. RSVP
- **Tujuan:** konversi. Ini section paling fungsional.
- **Field minimum:** nama, hadir/tidak, jumlah orang.
- **Field opsional:** sesi yang dihadiri, pilihan menu, pesan.
- **Aturan:** satu layar, tanpa login, tombol besar, konfirmasi jelas, bisa diubah.
- **Jangan:** memaksa isi email/telepon; CAPTCHA yang menyiksa; error tanpa penjelasan.

#### 10. Wishes
- **Tujuan:** buku tamu digital yang jadi kenang-kenangan.
- **Aturan:** moderasi, batas karakter (280–500), tampilkan nama + kota, urut terbaru, optimistik saat submit.
- **Copy kosong:** "Belum ada ucapan. Jadilah yang pertama mendoakan."

#### 11. Gift
- **Tujuan:** amplop digital tanpa memaksa.
- **Aturan:** awali dengan "kehadiran & doa sudah cukup"; sediakan copy rekening, QR e-wallet, alamat kirim kado; jangan tampilkan nominal.
- **Copy:** "Doa restu adalah hadiah terindah. Namun jika ingin memberi lebih, kami sediakan kanal berikut dengan penuh terima kasih."

#### 12. Live
- **Tujuan:** menyertakan keluarga yang jauh.
- **Aturan:** satu tombol jelas, catatan singkat, waktu mulai, fallback link.

#### 13. Practical
- **Tujuan:** mengurangi pertanyaan berulang.
- **Isi:** dress code (dengan contoh warna), parkir, transportasi, FAQ, wedding hashtag, kebijakan foto.
- **Format:** accordion — jangan tampilkan semua sekaligus.

#### 14. Closing
- **Tujuan:** menutup dengan hangat dan berkesan.
- **Isi:** terima kasih, salam, nama pasangan, foto full-bleed.
- **Aturan:** jangan menambahkan CTA baru di sini; biarkan tenang.

#### 15. Floating UI
- **Bottom nav:** Beranda · Pasangan · Acara · Galeri · Hadiah/RSVP.
- **Music toggle:** selalu terlihat, bisa dimatikan, tidak pernah autoplay sebelum gesture.
- **Share:** WhatsApp-first, lalu salin link.

### 5.2 Dua urutan yang sah

**A. Ceremonial (rekomendasi untuk tema adat/luxury):**
Cover → Opening → Quote → Couple → Story → Gallery → Save the Date → Events → RSVP → Live → Gift → Wishes → Closing

**B. Practical (rekomendasi untuk tamu banyak & venue jauh):**
Cover → Couple → Save the Date → Events → Location → Practical → Story → Gallery → RSVP → Gift → Wishes → Closing

Perbedaan kuncinya: **kapan info praktis muncul**. Jika tamu cenderung membuka undangan sambil mengurus perjalanan, taruh info praktis lebih awal.

---

## 6. Alur UX & interaksi khas

### 6.1 Flow tamu (happy path)

```
Link WhatsApp
  → Cover (nama tamu terisi otomatis)
  → Tap "Buka Undangan" (audio unlock + fade)
  → Opening + Quote
  → Couple
  → [Story / Gallery]
  → Save the Date + Events + Peta
  → RSVP (pilih hadir / tidak, jumlah orang)
  → Wishes (opsional)
  → Gift (opsional)
  → Closing
  → "Bagikan undangan" / "Simpan tanggal"
```

Target waktu: 90–180 detik untuk tamu yang hanya butuh info; 4–6 menit untuk yang menyusuri.

### 6.2 Flow pasangan (builder)

```
Daftar → Pilih tema → Isi data inti (nama, tanggal, venue)
  → Pilih tamu & buat link bernama
  → Preview mobile/desktop
  → Publish → Broadcast WhatsApp
  → Pantau RSVP, ucapan, hadiah
```

### 6.3 Edge case yang wajib dirancang

| Situasi | Perilaku yang benar |
|---|---|
| Link tanpa `?to=` | Tampilkan "Kepada Bapak/Ibu/Saudara/i" generik, jangan error |
| Nama tamu sangat panjang | Truncate 2 baris + ellipsis, jangan rusak layout |
| Audio diblokir browser | Tetap jalan tanpa musik; tampilkan ikon musik "off" |
| Jaringan lambat | Cover image prioritas; section lain skeleton; teks tetap terbaca |
| `prefers-reduced-motion` | Matikan parallax & autoplay; sisakan fade 150 ms |
| RSVP dikirim dua kali | Idempotent; tampilkan "sudah tercatat" + opsi ubah |
| Tamu menolak kehadiran | Copy hangat, jangan "OK" atau "Ditolak" |
| Ucapan mengandung spam | Honeypot + rate limit + moderasi; jangan blokir seluruh tamu |
| Undangan sudah lewat | Tampilkan mode "Thank You" + galeri, bukan countdown negatif |
| Link privat | Token bertanda tangan, `noindex`, pesan jelas jika kedaluwarsa |

### 6.4 Prinsip interaksi

1. **Satu gestur, satu makna.** Tap = buka; scroll = lanjut; tidak ada swipe tersembunyi tanpa petunjuk.
2. **Jangan pernah menahan konten di balik animasi.** Teks harus ada di DOM sejak awal.
3. **Personalisasi terlihat, bukan terasa.** Nama tamu harus muncul di layar pertama.
4. **Progress terasa.** Chapter marker atau nomor section membantu tamu tahu "masih berapa lama".
5. **Audio adalah tamu, bukan tuan.** Selalu bisa dimatikan, tidak pernah memaksa.

---

## 7. Copywriting: prinsip, formula, bank kalimat

### 7.1 Enam prinsip

1. **Sapa tamu, bukan audiens.** "Bapak/Ibu/Saudara/i" > "para tamu undangan".
2. **Satu ide per section.** Kalau satu paragraf punya dua pesan, belah.
3. **Formal tapi manusiawi.** Hindari bahasa surat dinas; pertahankan sopan santun.
4. **Konkret mengalahkan puitis kosong.** "Kami bertemu di halte Blok M, 2016" > "takdir mempertemukan kami".
5. **Konsisten sudut pandang.** Pilih "kami" (pasangan) atau "kedua mempelai"; jangan berganti-ganti.
6. **Hormati konteks.** Agama, adat, dan hubungan keluarga menentukan kata pembuka dan penutup.

### 7.2 Formula per section

| Section | Formula | Contoh |
|---|---|---|
| Cover | Label + nama + tanggal + tamu + aksi | "The Wedding Of / Adinda & Bima / 28.12.2026" |
| Opening | Salam + niat + siapa | "Dengan memohon rahmat Allah SWT, kami menyelenggarakan pernikahan putra-putri kami." |
| Quote | Kutipan + sumber | "QS. Ar-Rum: 21" |
| Couple | Nama + urutan + orang tua | "Putri terakhir dari Bapak ... & Ibu ..." |
| Story | Waktu + tempat + satu detail sensorik | "2016 — Bertemu di halte, sama-sama kehujanan." |
| Save the Date | Ajakan + tanggal | "Catat tanggalnya. Kami ingin kamu ada." |
| Events | Nama acara + waktu + tempat + aksi | "Akad Nikah · 09.00 WIB · Masjid Al-Barkah" |
| RSVP | Ajakan + alasan | "Kami ingin menyiapkan kursi yang tepat untukmu." |
| Gift | Rendahkan pemberian + kemudahan | "Kehadiranmu cukup. Jika ingin memberi, ini caranya." |
| Wishes | Ajakan + warisan emosi | "Tulis satu kalimat yang bisa kami baca lagi sepuluh tahun nanti." |
| Closing | Terima kasih + salam + nama | "Terima kasih atas doa dan restunya. Sampai jumpa di hari itu." |

### 7.3 Bank kalimat

**Pembuka (Islam):**
- "Assalamu'alaikum warahmatullahi wabarakatuh."
- "Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami."
- "Bismillahirrahmanirrahim. Atas izin Allah, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri..."

**Pembuka (Kristen/Katolik):**
- "Salam damai Kristus."
- "Dengan penuh syukur atas kasih Tuhan, kami bermaksud menyelenggarakan pernikahan kami."
- "Kiranya Tuhan memberkati langkah kami, dan kehadiran Bapak/Ibu/Saudara/i menjadi bagian dari sukacita itu."

**Pembuka (Hindu/Bali):**
- "Om Swastyastu."
- "Om Awighnam Astu Namo Sidham."
- "Dengan memohon restu Ida Sang Hyang Widhi Wasa, kami bermaksud menyelenggarakan upacara pernikahan kami."

**Pembuka (netral):**
- "Kami menikah. Dan kami ingin merayakannya bersama orang-orang yang kami sayangi."
- "Ada satu hari yang kami tunggu. Kami ingin kamu ada di sana."

**Ajakan hadir:**
- "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir."
- "Kehadiran dan doa restu Bapak/Ibu/Saudara/i akan membuat hari kami lengkap."
- "Kami tidak meminta hadiah. Kami hanya ingin kamu duduk di sana, menyaksikan."

**Penutup:**
- Islam: "Wassalamu'alaikum warahmatullahi wabarakatuh."
- Kristen: "Tuhan memberkati."
- Hindu: "Om Shanti Shanti Shanti Om."
- Netral: "Terima kasih. Sampai jumpa di hari itu."

**Amplop digital:**
- "Doa restu adalah hadiah terindah. Namun jika ingin memberi lebih, kami sediakan kanal berikut dengan penuh terima kasih."
- "Kehadiranmu sudah cukup. Jika tetap ingin memberi, ini caranya — tanpa kewajiban apa pun."

**Ucapan kosong:**
- "Belum ada ucapan. Jadilah yang pertama mendoakan."
- "Dinding ini masih tenang. Tulis satu doa untuk memulainya."

**RSVP ditolak:**
- "Terima kasih sudah memberi kabar. Kami akan merindukanmu di hari itu."
- "Tidak apa-apa. Doa dari jauh sama berharganya."

### 7.4 Blacklist cliché

Hindari (atau pakai sekali saja, dengan sadar):
- "Merupakan suatu kebahagiaan yang tak terhingga..."
- "Tiada kata yang dapat kami ucapkan selain..."
- "Dengan segala kerendahan hati..."
- "Kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara kami" (diulang 4×)
- "Demikian undangan ini kami sampaikan, atas perhatiannya kami ucapkan terima kasih" (terlalu surat dinas)
- Emoji berlebihan di teks formal (💕✨🥰) — simpan untuk tema playful
- Campur bahasa Inggris dan Indonesia tanpa alasan ("Our Love Story" boleh, "The Wedding Of" + "Kami mengundang" dalam satu paragraf jangan)

### 7.5 Tone dial

| Dimensi | Sakral | Hangat | Playful |
|---|---|---|---|
| Kata ganti | kami | kami / kita | aku & kamu |
| Panjang kalimat | sedang, berirama | pendek–sedang | sangat pendek |
| Metafora | doa, cahaya, janji | rumah, perjalanan, hujan | game, level, chapter |
| Emoji | tidak ada | minimal | boleh |
| Contoh | "Atas izin Allah..." | "Kami ingin kamu ada." | "Kami memutuskan co-op seumur hidup." |

---

## 8. Tiga varian copy lengkap

### Varian A — Klasik Religius (Jawa/Islam)

**Cover**
```
The Wedding Of
Adinda & Bima
28 Desember 2026

Kepada Bapak/Ibu/Saudara/i
Bapak Sujono & Keluarga

[Buka Undangan]
```

**Opening**
```
Assalamu'alaikum warahmatullahi wabarakatuh.

Dengan memohon rahmat dan ridho Allah SWT,
kami bermaksud menyelenggarakan pernikahan
putra-putri kami.
```

**Quote**
```
"Dan di antara tanda-tanda kebesaran-Nya,
Dia menciptakan pasangan untukmu dari jenismu sendiri,
agar kamu merasa tenteram kepadanya.
Dia menjadikan di antara kamu rasa kasih dan sayang."

QS. Ar-Rum: 21
```

**Couple**
```
The Wedding Of

Adinda Mawaria
Putri terakhir dari
Bapak Sanusi, S.M. & Ibu Jubaedah
Bekasi

&

Bima Arya Pratama
Putra pertama dari
Bapak Akbar, S.Kom. & Ibu Siti Maimunah
Jakarta
```

**Story**
```
Perjalanan Kami

01 — Pertemuan
2016. Bertemu di halte Blok M, sama-sama kehujanan.
Kami berbagi satu payung dan satu nomor telepon.

02 — Penantian
Empat tahun berpacaran jarak jauh.
Setiap Minggu, satu panggilan yang tidak pernah kami lewatkan.

03 — Lamaran
2025. Di dapur rumah orang tua Adinda,
Bima berlutut di antara uap teh yang masih mengepul.
```

**Save the Date / Events**
```
Menghitung Hari
28 Desember 2026

Akad Nikah
Senin, 28 Desember 2026 · 09.00 WIB
Masjid Al-Barkah
Jl. Veteran No. 46, Marga Jaya, Bekasi Selatan
[Buka Peta]

Resepsi
Senin, 28 Desember 2026 · 15.00 WIB
DoubleTree by Hilton Jakarta
Jl. Diponegoro No. 8, Jakarta Pusat
[Buka Peta]
```

**RSVP**
```
Konfirmasi Kehadiran

Merupakan suatu kehormatan dan kebahagiaan bagi kami
apabila Bapak/Ibu/Saudara/i berkenan hadir.

[Hadir]  [Tidak dapat hadir]
```

**Gift**
```
Amplop Digital

Doa restu adalah hadiah terindah.
Namun jika ingin memberi lebih, kami sediakan kanal berikut
dengan penuh terima kasih.

Bank BCA · 1234567890 · Adinda Mawaria
[Salin Nomor]
```

**Wishes**
```
Doa & Ucapan

Tulis satu kalimat yang bisa kami baca lagi sepuluh tahun nanti.

[Nama] [Ucapan] [Kirim]
```

**Closing**
```
Terima kasih atas doa dan restu yang Bapak/Ibu/Saudara/i berikan.
Kami menantikan kehadiran Anda di hari bahagia kami.

Wassalamu'alaikum warahmatullahi wabarakatuh.

Adinda & Bima
```

---

### Varian B — Modern Minimalis

**Cover**
```
ADINDA — BIMA
28 . 12 . 26
Jakarta

Kepada {Nama Tamu}

[Open]
```

**Opening**
```
Kami menikah.
Dan kami ingin merayakannya
bersama orang-orang yang kami sayangi.
```

**Note (pengganti quote)**
```
"Rumah bukan tempat.
Rumah adalah orang yang kita pilih untuk pulang."

— catatan kami
```

**Couple**
```
Adinda
Arsitek. Kopi pahit, hujan sore, kamera film.

Bima
Penulis. Jalan kaki, buku bekas, lagu lama.
```

**Story**
```
Bagaimana semuanya dimulai

2016 — Bertemu di sebuah pameran arsitektur.
Adinda pura-pura tertarik pada maket. Bima pura-pura paham.

2019 — Pindah ke kota yang sama, tanpa pernah membicarakannya.
Kami hanya berhenti berpura-pura.

2025 — Satu pertanyaan, di dapur, pukul sebelas malam.
```

**Save the Date**
```
28 Desember 2026
Jakarta

Akad · 09.00
Resepsi · 15.00
```

**RSVP**
```
Will you be there?

Kami ingin menyiapkan kursi yang tepat untukmu.

[Datang]  [Berhalangan]
```

**Gift**
```
Your presence is enough.

Tapi kalau kamu tetap ingin memberi,
ini caranya — tanpa kewajiban apa pun.

[Salin rekening]
```

**Wishes**
```
Leave a note.

Satu kalimat yang bisa kami baca lagi sepuluh tahun nanti.

[Tulis]
```

**Closing**
```
Sampai jumpa di hari itu.
Adinda & Bima
```

---

### Varian C — Playful / Cinematic (Game)

**Cover**
```
PLAYER 1: ADINDA
PLAYER 2: BIMA
Ready?

[Start]
```

**Opening**
```
Kami memutuskan untuk co-op seumur hidup.
Tidak ada tombol undo. Dan kami tidak ingin ada.
```

**Chapter**
```
CHAPTER 01 — First Spawn
2016. Bertemu di pameran arsitektur.
Keduanya salah pilih jurusan percakapan.

CHAPTER 02 — Side Quest
2019. Pindah ke kota yang sama.
Tidak ada yang mengaku, tapi keduanya sudah tahu.

CHAPTER 03 — Save Point
2025. Satu pertanyaan di dapur, pukul sebelas malam.
```

**Save the Date**
```
SAVE POINT
28 . 12 . 2026
Jakarta
```

**RSVP**
```
Are you joining the party?

[Join]  [Can't, but sending love]
```

**Gift**
```
Send a buff.

Kehadiranmu sudah cukup.
Kalau mau lebih, ini caranya.
```

**Wishes**
```
Leaderboard doa & ucapan

Tinggalkan satu pesan sebelum kamu pergi.
```

**Closing**
```
GG. Sampai jumpa di hari itu.
Adinda & Bima
```

> Catatan: tema playful paling rawan. Batasi metafora game maksimal 3–4 kali; setelah itu, kembali ke bahasa manusia.

---

## 9. Microcopy & states

Microcopy adalah tempat produk terasa mahal. Tabel ini bisa langsung dipakai.

| Konteks | Buruk | Baik |
|---|---|---|
| CTA cover | "Masuk" | "Buka Undangan" |
| CTA peta | "Lihat lokasi" | "Buka di Google Maps" |
| CTA kalender | "Tambahkan" | "Simpan Tanggal" |
| CTA musik | "Musik" | "Putar Musik" / "Matikan Musik" |
| RSVP submit | "Submit" | "Kirim Konfirmasi" |
| RSVP sukses hadir | "Data tersimpan" | "Terima kasih! Kehadiranmu sudah kami catat." |
| RSVP sukses tidak hadir | "Data tersimpan" | "Terima kasih sudah memberi kabar. Kami akan merindukanmu." |
| RSVP error | "Error 400" | "Konfirmasi belum terkirim. Coba lagi, ya." |
| Wishes kosong | "No data" | "Belum ada ucapan. Jadilah yang pertama mendoakan." |
| Wishes sukses | "Success" | "Ucapanmu sudah tampil di dinding doa." |
| Gift salin | "Copy" | "Nomor disalin" |
| Galeri habis | "End" | "Itu semua momen yang kami simpan." |
| Link kedaluwarsa | "404" | "Undangan ini sudah tidak aktif. Hubungi kami jika perlu." |
| Nama tamu kosong | "Unknown" | "Bapak/Ibu/Saudara/i" |
| Loading | "Loading..." | "Menyiapkan hari bahagia..." (pakai hemat) |

**Aturan penulisan microcopy:**
- Kalimat aktif, kata kerja di depan.
- Maksimal 2 baris untuk pesan sukses/error.
- Jangan menyalahkan pengguna ("Input tidak valid" → "Nomor telepon belum lengkap").
- Konsisten: pilih "kamu" atau "Anda" per tema, jangan campur.

---

## 10. Sistem desain (tokens siap pakai)

### 10.1 Tiga arah yang saya rekomendasikan untuk dieksplorasi

**A. Quiet Romantic (default)**
```css
--bg: #F4F1EC;
--surface: #FBF8F3;
--ink: #1F1F1D;
--muted: #6E6A63;
--line: #DED6CA;
--accent: #A8865B;
--accent-strong: #8A6A43;
--display: "Instrument Serif", Georgia, serif;
--body: "Inter", system-ui, sans-serif;
--radius: 2px;
--shadow: none;
```

**B. Botanical Warm**
```css
--bg: #FAF6EC;
--surface: #FFFDF7;
--ink: #2F3327;
--muted: #6B7160;
--line: #DCE3D3;
--accent: #55603F;
--accent-strong: #3E472D;
--display: "Lora", Georgia, serif;
--body: "Karla", system-ui, sans-serif;
--radius: 999px;
--shadow: 0 8px 30px rgba(47, 51, 39, .08);
```

**C. Modern Editorial**
```css
--bg: #F7F5F2;
--surface: #FFFFFF;
--ink: #111111;
--muted: #6B6B6B;
--line: #E3E0DB;
--accent: #C24B2A;
--accent-strong: #9E3A1E;
--display: "Archivo", system-ui, sans-serif;
--body: "Source Serif 4", Georgia, serif;
--radius: 0px;
--shadow: none;
```

### 10.2 Skala tipografi

| Token | Mobile | Desktop | Pemakaian |
|---|---|---|---|
| `display-xl` | 44–52 px | 72–96 px | Nama pasangan di cover |
| `display-lg` | 32–40 px | 48–56 px | Judul section |
| `title` | 20–24 px | 24–28 px | Nama acara |
| `body` | 16 px | 17–18 px | Paragraf |
| `caption` | 12–13 px | 13 px | Label, sumber kutipan |
| `micro` | 11 px | 11 px | Eyebrow uppercase, letter-spacing .16em |

Aturan: **maksimal 3 keluarga font**; line-height body 1.6–1.75; lebar paragraf 60–70 karakter.

### 10.3 Gerak

| Elemen | Durasi | Easing | Catatan |
|---|---|---|---|
| Reveal section | 600–900 ms | `cubic-bezier(.22,.61,.36,1)` | translateY 16–24 px + opacity |
| Cover open | 900–1200 ms | ease-out | fade + scale 1.04 |
| Tombol | 150–200 ms | ease-out | scale .98 saat press |
| Parallax | — | linear | maksimal 0.15, matikan saat reduced motion |
| Countdown tick | 200 ms | ease-out | hanya angka yang berubah |

### 10.4 Aturan visual

- **Satu aksen per tema.** Jangan dua warna "mahal" bersaing.
- **Teks di atas foto wajib punya scrim** (gradient hitam 40–60%) atau panel solid.
- **Jangan pakai emas murni `#FFD700` untuk teks.** Pakai `#A8865B` di atas krem gelap, atau teks gelap di atas emas.
- **Border tipis 1 px** lebih mahal daripada shadow tebal.
- **Foto portrait 4:5** untuk pasangan; **3:2** untuk venue; **1:1** untuk grid galeri.
- **Whitespace minimal 64 px** antar section di mobile; 96–120 px di desktop.

---

## 11. Content model (TypeScript)

Pisahkan konten dari tema. Ini yang membuat 8 tema bisa memakai satu data.

```ts
type Invitation = {
  slug: string;
  status: "draft" | "published" | "archived";
  themeId: string;
  locale: "id" | "en";
  timezone: string; // "Asia/Jakarta"

  cover: {
    eyebrow?: string;        // "The Wedding Of"
    shortNames: string;      // "Adinda & Bima"
    dateLabel: string;       // "28 . 12 . 2026"
    city?: string;
    guestLabel: string;      // "Kepada Bapak/Ibu/Saudara/i"
    cta: string;             // "Buka Undangan"
    image?: Media;
    video?: Media;
  };

  opening?: { text: string };
  quote?: { text: string; source: string; religion?: string };

  couple: {
    bride: Person;
    groom: Person;
    order?: "bride-first" | "groom-first";
  };

  story?: { title: string; items: StoryItem[] };
  gallery?: { title: string; note?: string; images: Media[] };

  events: Event[];
  rsvp: {
    enabled: boolean;
    deadline?: string;       // ISO
    askMeal?: boolean;
    askSession?: boolean;
    successPresent: string;
    successAbsent: string;
  };

  wishes: { enabled: boolean; moderation: boolean; maxLength: number };
  gifts: { enabled: boolean; note: string; channels: GiftChannel[] };
  live?: { enabled: boolean; url: string; note: string; startsAt?: string };

  practical?: {
    dressCode?: { title: string; description: string; palette?: string[] };
    faq?: { q: string; a: string }[];
    parking?: string;
    hashtag?: string;
  };

  closing: { text: string; salutation?: string; signature: string; image?: Media };
  settings: {
    music?: { url: string; title: string; artist?: string };
    showCountdown: boolean;
    guestParam: string;      // "to"
    noIndex: boolean;
  };
};

type Person = {
  shortName: string;
  fullName: string;
  order?: string;            // "Putri terakhir dari"
  parents?: string[];
  origin?: string;
  bio?: string;
  photo?: Media;
  instagram?: string;
};

type Event = {
  id: string;
  name: string;              // "Akad Nikah"
  startsAt: string;          // ISO with offset
  endsAt?: string;
  venue: string;
  address: string;
  mapsUrl?: string;
  note?: string;
  dressCode?: string;
};

type GiftChannel = {
  type: "bank" | "ewallet" | "address";
  provider: string;          // "BCA", "GoPay"
  accountName: string;
  accountNumber?: string;
  qrImage?: Media;
  address?: string;
};

type StoryItem = { title: string; body: string; date?: string; image?: Media };
type Media = { src: string; alt: string; width?: number; height?: number; blurhash?: string };
```

---

## 12. Performa, aksesibilitas, dan teknis

### 12.1 Budget performa

| Metrik | Target |
|---|---|
| LCP (4G, mobile) | < 2.5 s |
| Cover image | < 300 KB (AVIF/WebP) |
| JS awal | < 150 KB gzip |
| Font | maksimal 2 file, `font-display: swap`, subset latin |
| Galeri | lazy load, maksimal 20 gambar, thumbnail 480 px |
| Video | poster dulu, `<video preload="none">`, maksimal 8 MB atau pakai YouTube/Vimeo |
| CLS | < 0.1 — selalu set `width`/`height` atau `aspect-ratio` |

### 12.2 Aksesibilitas

- Kontras minimum **4.5:1** untuk body, **3:1** untuk teks besar.
- Jangan mengandalkan warna saja untuk status RSVP.
- `prefers-reduced-motion` mematikan parallax, autoplay, dan animasi panjang.
- Semua tombol punya label; ikon saja butuh `aria-label`.
- Fokus keyboard terlihat (jangan `outline: none` tanpa pengganti).
- Form punya `<label>` nyata, bukan placeholder sebagai label.
- Audio tidak pernah autoplay sebelum interaksi.
- Lightbox bisa ditutup dengan `Esc`.

### 12.3 Detail teknis yang sering salah

| Isu | Solusi |
|---|---|
| `100vh` di iOS memotong cover | Pakai `100dvh` + fallback `100vh` |
| Countdown salah jam | Simpan ISO dengan offset (`2026-12-28T09:00:00+07:00`) |
| Nama tamu dari URL | Sanitasi, jangan `innerHTML`; batasi panjang |
| OG image tidak muncul di WhatsApp | `og:title`, `og:description`, `og:image` 1200×630, URL absolut |
| Undangan privat terindeks Google | `noindex` + token bertanda tangan |
| RSVP spam | Honeypot + rate limit + moderasi |
| Double submit | Idempotency key / disable tombol |
| Audio tidak jalan | Unlock pada gesture pertama, sediakan toggle |
| Font script tidak terbaca | Minimum 28 px untuk script; jangan untuk body |
| Foto portrait terpotong | `object-position: center 30%` |

### 12.4 Analitik yang layak diukur

- Cover open rate (berapa persen tamu menekan "Buka Undangan").
- Section reach (berapa jauh tamu scroll).
- RSVP conversion (hadir / total link dibuka).
- Wishes participation.
- Gift channel click.
- Share / forward rate.
- Device & koneksi dominan (menentukan budget aset).

---

## 13. Peluang diferensiasi

1. **Tipografi-first, bukan floral-first.** Mayoritas kompetitor mengandalkan stock floral. Tema yang dibangun dari tipografi + grid akan terasa lebih mahal dan lebih sulit ditiru.
2. **Chapter navigation.** Progress rail tipis di kanan + label bab. Mengubah scroll panjang jadi film.
3. **Progressive disclosure untuk info praktis.** "Sebelum Datang" sebagai accordion: dress code, parkir, FAQ, hadiah fisik. Estetika tetap bersih, informasi tetap lengkap.
4. **Microcopy yang ditulis serius.** Empty state, error, konfirmasi RSVP, dan pesan penolakan yang hangat. Ini pembeda yang paling murah dan paling terasa.
5. **Guest-mode vs planner-mode.** Tampilan tamu fokus ritual; tampilan pasangan fokus kontrol. Jangan campur.
6. **Performa sebagai fitur.** Klaim "undangan yang tetap ringan di 3G" — dan buktikan dengan budget aset.
7. **Kutipan & doa yang bisa diganti per agama/tradisi**, bukan default Islam untuk semua.
8. **Mode "Setelah Acara".** Undangan berubah jadi album kenangan + ucapan + video, bukan mati setelah tanggal lewat.

---

## 14. Rekomendasi untuk project ini

### 14.1 Arah yang saya sarankan

**"Quiet Romantic"** — minimalis hangat, tipografi-first, satu gerak khas.

- Palet krem–tinta–satu aksen emas pudar.
- Display serif ringan + body sans yang tenang.
- Cover poster, bukan hero marketing.
- Satu section satu ide; banyak ruang kosong.
- Copy formal-hangat, tanpa cliché, dengan microcopy lengkap.
- Section praktis dilipat agar tidak merusak alur.

Alasan: paling luas pasarannya (bukan hanya adat, bukan hanya Gen Z), paling murah diproduksi, paling mudah dibuat konsisten, dan paling sulit terasa "template".

### 14.2 Scope MVP

**Fase 1 — undangan yang bisa dibagikan**
- Cover + nama tamu dari URL
- Opening + quote
- Couple
- Save the Date + countdown
- Events + peta
- RSVP
- Wishes
- Gift
- Closing
- Musik + bottom nav

**Fase 2 — kedalaman**
- Story timeline
- Gallery + lightbox
- Live streaming
- Practical accordion (dress code, FAQ, parkir)
- Simpan ke kalender (ICS)

**Fase 3 — platform**
- Theme system (8 arketipe)
- Builder / editor
- Daftar tamu + link bernama massal
- WhatsApp broadcast
- Analitik + laporan RSVP
- Mode setelah acara

### 14.3 Yang jangan dilakukan di awal

- Jangan bangun drag-and-drop editor sebelum satu undangan jadi terbukti bagus.
- Jangan bangun 8 tema sebelum 1 tema selesai sampai microcopy.
- Jangan pakai WebGL/video fullscreen di versi pertama.
- Jangan taruh *lorem ipsum* di demo publik.
- Jangan mengorbankan kontras demi "terlihat mewah".

---

## 15. Checklist produksi per undangan

**Konten**
- [ ] Nama lengkap & panggilan sesuai ejaan keluarga
- [ ] Urutan anak & nama orang tua sudah dikonfirmasi
- [ ] Tanggal, jam, zona waktu, venue, alamat akurat
- [ ] Link peta diuji di Android & iOS
- [ ] Kutipan & salam sesuai agama/tradisi
- [ ] Copy opening & closing dibaca ulang keluarga
- [ ] Nama tamu di link diuji (termasuk nama panjang & gelar)

**Desain**
- [ ] Maksimal 3 font, hierarki jelas
- [ ] Kontras teks lolos 4.5:1
- [ ] Cover terbaca di layar 360 px
- [ ] Foto punya `alt`
- [ ] Tidak ada teks menempel di tepi (minimal 20 px)
- [ ] Script tidak dipakai untuk body

**Teknis**
- [ ] LCP < 2.5 s di 4G
- [ ] `100dvh` + safe-area
- [ ] Countdown memakai timezone acara
- [ ] Audio tidak autoplay
- [ ] `prefers-reduced-motion` dihormati
- [ ] OG image & meta WhatsApp benar
- [ ] RSVP idempotent
- [ ] Wishes termoderasi
- [ ] `noindex` jika privat

**Setelah rilis**
- [ ] Uji buka di WhatsApp (Android & iPhone)
- [ ] Uji di 3G
- [ ] Uji nama tamu aneh (emoji, gelar, nama 60 karakter)
- [ ] Siapkan balasan WhatsApp untuk pertanyaan umum
- [ ] Pantau RSVP harian
- [ ] Siapkan mode "hari H" (info parkir, kontak)

---

## 16. Sumber

- Our Wedding Link — landing: <https://our-wedding.link/>
- Our Wedding Link — katalog desain: <https://our-wedding.link/design>
- Our Wedding Link — demo live *Glass Wonder*: <https://our-wedding.link/design/coba/royal-glass-castel>
- Our Wedding Link — harga & fitur: <https://our-wedding.link/pricelist>
- Our Wedding Link — buku tamu digital: <https://our-wedding.link/digital-guestbook>
- Joy (Withjoy) — wedding website: <https://withjoy.com/wedding-website>
- Observasi struktur DOM & font dari demo live, 18 November 2026.

---

## Lampiran: ringkasan satu halaman

**Kalau hanya boleh mengingat 8 hal:**

1. Cover = poster + nama tamu + satu tombol.
2. Urutan section = dramaturgi: quote → pasangan → cerita → tanggal → acara → RSVP → hadiah → doa → penutup.
3. Tema = paket warna + font + ornamen + gerak + nada copy, bukan sekadar palet.
4. Copy: formal-hangat, satu ide per section, konkret, konsisten sudut pandang.
5. Microcopy adalah pembeda termurah dan paling terasa.
6. Mobile-first: `100dvh`, safe-area, countdown dengan timezone, peta yang bisa dibuka.
7. Performa & kontras adalah bagian dari desain, bukan urusan belakangan.
8. Diferensiasi: tipografi-first, chapter navigation, info praktis yang dilipat, dan mode setelah acara.
