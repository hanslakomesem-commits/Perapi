# ZAIN.NET — Perapih Skripsi Otomatis V2

Aplikasi web lokal untuk menganalisis dan memperbaiki struktur file Microsoft Word `.docx` tanpa mengirim skripsi ke server/API.

## Perubahan utama V2

V2 memperbaiki masalah penting pada versi awal: **TOC tidak lagi hanya mengandalkan BAB**. Mesin menganalisis dan menulis Outline Level Word untuk:

- Level 1 — BAB dan bagian utama
- Level 2 — Sub BAB
- Level 3 — Sub-sub BAB

Sebelum diproses, pengguna mendapat **Pemeriksa Level TOC** sehingga setiap kandidat judul bisa diubah menjadi Level 1/2/3 atau dikeluarkan dari TOC. Deteksi tidak hanya memakai pola `A.` atau `1.1`; aplikasi juga membaca list numbering Word, outline lama, bold/indent, konteks BAB, serta pola judul akademik.

## 10 modul yang dapat dicentang bebas

1. Margin & ukuran kertas
2. Penomoran halaman otomatis
3. Daftar Isi TOC Level 1–3
4. BAB I–V mulai halaman baru
5. Rapikan BAB/Sub BAB/Sub-sub BAB
6. Format isi skripsi
7. Daftar Tabel otomatis
8. Daftar Gambar otomatis
9. Bersihkan Enter/paragraf kosong berlebih
10. Validasi akhir

Pengguna boleh memilih hanya 1 modul, 3 modul, atau seluruh modul. Contoh: hanya **Margin + Penomoran + TOC**.

## Fitur tambahan

- Mode Aman / konservatif dan Mode Total.
- Preset margin ZAIN.NET 4-3-3-3, umum 4-4-3-3, atau custom.
- Upload banyak DOCX dan proses batch menjadi ZIP.
- Deteksi bagian awal, BAB I–V, daftar pustaka, lampiran, caption tabel/gambar.
- Backup: file asli tidak ditimpa; hasil selalu dibuat dengan nama baru.
- Penomoran memakai field `PAGE` Word pada header/footer.
- TOC memakai field Word: `TOC \\o "1-3" \\h \\z \\u`.
- Daftar Tabel/Gambar memakai field TC + TOC identifier sehingga tetap dinamis.
- Section Break dibuat sebelum BAB bila diperlukan untuk penomoran halaman awal BAB.
- Tidak menulis ulang isi skripsi dari nol.

## Cara menjalankan

```bash
npm install
npm run dev
```

Build produksi:

```bash
npm run build
```

## GitHub Pages

Versi ini siap di-deploy ke GitHub Pages. File `vite.config.ts` memakai base relatif dan workflow `.github/workflows/deploy-pages.yml` akan melakukan build + deploy otomatis dari branch `main`. Panduan langkah demi langkah ada di `GITHUB_PAGES.md`.

Project tetap memakai Vite + TypeScript dan dependency utama `jszip`. Tidak membutuhkan Gemini API key untuk pemrosesan DOCX karena seluruh proses dilakukan di browser pengguna.

## Catatan penting Microsoft Word

Field TOC/PAGE baru dihitung sempurna oleh layout engine Microsoft Word. Setelah file hasil dibuka:

1. Tekan `Ctrl + A`.
2. Tekan `F9`.
3. Jika Word bertanya tentang Daftar Isi, pilih **Update Entire Table**.

## Pengujian internal V2

Mesin V2 diuji pada pasangan file contoh SEBELUM/SESUDAH ZAIN.NET. Pada contoh TOC, deteksi menemukan BAB I–V lengkap serta Level 1/2/3, hasil DOCX dapat dimuat ulang sebagai ZIP, seluruh XML dapat diparse, dan field TOC/PAGE terdeteksi setelah proses.

## Prinsip keamanan dokumen

Modul yang agresif seperti **Format Isi** dan **Bersihkan Enter Berlebih** tidak aktif pada preset inti. Untuk file pelanggan, gunakan Mode Aman dan periksa tabel Level TOC terlebih dahulu.
