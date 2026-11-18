# 💖 Kalkulator Level Afinitas Pahlawan

[English](../../README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md) | [Français](README.fr.md) | [Deutsch](README.de.md) | [Português](README.pt.md) | [Tiếng Việt](README.vi.md) | [ไทย](README.th.md) | **Bahasa Indonesia** | [Русский](README.ru.md) | [Türkçe](README.tr.md) | [Italiano](README.it.md) | [Polski](README.pl.md) | [العربية](README.ar.md) | [Filipino](README.fil.md)

Kalkulator web gratis untuk **Pixel Brave Idle**: masukkan hadiah yang kamu miliki, pilih hadiah afinitas yang dituju, lalu lihat jumlah minimum tiap jenis hadiah yang dibutuhkan.

Berjalan sepenuhnya di browser. Tanpa akun, tanpa server, tidak ada yang diunggah.

**Pakai secara online:** https://ghg-jam.github.io/PBI-hero-affinity-calculator/

> Alat tidak resmi buatan penggemar. Tidak berafiliasi dengan atau didukung oleh pengembang game.

<p>
  <img src="../phone-gifts.png" width="240">
  <img src="../phone-results.png" width="240">
</p>

## Fitur

- Penghitung hadiah untuk tiga tingkat (hijau / ungu / emas) dengan favorit.
- Target hadiah: daftar tonggak bawaan, target kustom, dan target akhir.
- Beberapa kombo (rencana), masing-masing dengan aturan keseimbangan hadiah sendiri: warna mana yang lebih banyak dan selisih yang dijaga **dalam rentang** (ada preset cepat seperti 0–25 atau 0–200), **sebesar** mungkin, atau **sekecil** mungkin.
- Rencana dari afinitas saat ini: memperkirakan hadiah yang sudah terpakai dan hanya menghitung tonggak yang tersisa.
- Hasil: tepat sasaran, kelebihan dan kekurangan per tonggak, hadiah yang dibutuhkan per tahap (dengan ikon hadiah yang dipakai), grafik selisih, dan bilah kemajuan. Hasil hanya berubah saat Anda menekan **Hitung Semua Kombo**, dan sebuah bilah memberi tahu bila hasil sudah usang.
- Opsi lanjutan (tersembunyi secara default): awal batas selisih, batas “poin maksimum di atas target”, hadiah non-favorit, batas total per warna, batas per hadiah (bisa dihapus semua sekali ketuk), dan urutan pemakaian khusus.
- Pengisian dengan AI: salin prompt, kirim bersama tangkapan layar ke chat AI **baru**, lalu tempel balasan JSON (atau impor dari file). AI bisa salah membaca angka, jadi selalu cocokkan dengan game. Juga: simpan/muat data, 18 bahasa, mode terang/gelap, dan 11 tema warna.

## Cara memakai

1. **Hadiah**: masukkan jumlah tiap hadiah dan tandai favorit dengan bintang.
2. **Target**: masukkan afinitas saat ini (opsional) dan centang daftar hadiah yang diinginkan.
3. **Kombo**: pertahankan default atau pilih aturan selisih (rentang, terbesar, atau terkecil) lalu buka *Pengaturan Lanjutan*.
4. **Hasil**: tekan **Hitung Semua Kombo**, lalu lihat berapa banyak tiap hadiah yang dipakai.

## Jalankan secara lokal

- Unduh `download/combo_calculator_single.html` lalu klik dua kali.
- Atau unduh seluruh repositori, simpan folder `css`, `js`, dan `lang` di samping `index.html`, lalu buka `index.html`.

## Terbitkan di GitHub Pages

1. Unggah **seluruh isi** folder ke root repositori (pertahankan struktur folder).
2. Di **Settings → Pages**, pilih branch main dan folder root.
3. Setelah pembaruan, muat ulang paksa (Ctrl/Cmd + Shift + R).

## Untuk pengembang

Struktur proyek, cara berkontribusi terjemahan, dan riwayat perubahan ada di [README bahasa Inggris](../../README.md).

## Lisensi

Lisensi MIT (hanya kode).
