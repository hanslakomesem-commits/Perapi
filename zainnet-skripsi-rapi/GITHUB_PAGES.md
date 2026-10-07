# Cara Upload ke GitHub Pages

Project ini adalah versi GitHub Pages dari **ZAIN.NET Perapih Skripsi Otomatis V2**. Mesin DOCX dan seluruh fiturnya sama dengan versi AI Studio; yang ditambahkan hanya konfigurasi deployment.

## Cara paling mudah

1. Buat repository baru di GitHub, misalnya `zainnet-perapih-skripsi`.
2. Extract ZIP ini.
3. Upload **semua isi folder project** ke root repository. Pastikan file `package.json`, `index.html`, `vite.config.ts`, folder `src`, dan folder `.github` berada di root repository.
4. Gunakan branch utama bernama `main`.
5. Buka **Settings → Pages**.
6. Pada **Build and deployment → Source**, pilih **GitHub Actions**.
7. Buka tab **Actions**. Workflow `Deploy ZAIN.NET to GitHub Pages` akan menjalankan build dan deploy otomatis.
8. Setelah selesai, alamat web akan tersedia pada halaman deployment GitHub Pages.

## Update aplikasi berikutnya

Cukup upload/commit perubahan ke branch `main`. GitHub Actions otomatis membuat build baru dan mengganti versi website yang online.

## Fitur yang tetap sama

- Pilihan 10 modul dengan checkbox.
- Margin dan ukuran kertas.
- Penomoran halaman Word.
- TOC native Word Level 1–3.
- Pemeriksa BAB, Sub BAB dan Sub-sub BAB sebelum diproses.
- BAB I–V mulai halaman baru.
- Format isi skripsi.
- Daftar Tabel dan Daftar Gambar.
- Pembersihan paragraf kosong berlebih.
- Validasi akhir.
- Batch beberapa DOCX menjadi ZIP.
- Backup/download file asli.
- Seluruh pemrosesan utama berjalan di browser; dokumen tidak perlu dikirim ke server GitHub.

## Catatan Microsoft Word

Setelah hasil DOCX dibuka di Microsoft Word, gunakan `Ctrl + A` lalu `F9` dan pilih **Update Entire Table** agar TOC, PAGE, Daftar Tabel, dan Daftar Gambar dihitung oleh layout engine Microsoft Word.

## Jika alamat repository berubah

Tidak perlu mengubah `vite.config.ts`. Project memakai `base: './'`, sehingga asset hasil build menggunakan path relatif dan tetap cocok untuk GitHub Project Pages.
