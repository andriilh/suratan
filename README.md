# Suratan

Aplikasi yang <s>**_iseng_**</s> dibuat berbasis website untuk memonitoring
surat pada institusi desa. Aplikasi ini memiliki fitur untuk pelaporan atau
pengaduan warga, warga juga dapat melakuakan pengajuan surat.

## Teknologi

Aplikasi ini dibuat menggunakan [Laravel 10](https://laravel.com/docs/10.x)
bersamaan dengan [Inertia Js](https://inertiajs.com/) serta React Js sebagai
Frontend. UI menggunakan [Tailwindcss.](https://www.tailwindcss.com/)

## Instalasi

Clone repositori ini ke lokal komputer

```bash
git clone https://github.com/andriilham/suratan.git
cd suratan
```

Install semua dependency aplikasi

```bash
composer install
npm install
```

Buat file `.env`

```bash
cp .env.example .env
```

Generate secret key untuk aplikasi laravel

```bash
php artisan key:generate
```

Buat database baru dengan nama `suratan` atau bebas namakan apa saja, kemudian
tambahkan pengaturan database pada file `.env`

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=suratan
DB_USERNAME=root
DB_PASSWORD=
```

Lakukan migrasi ke database

```bash
php artisan migrate
```

Aplikasi siap dijalankan 🎉🎉🎉 untuk menjalankan aplikasi laravel gunakan
perintah

```bash
php artisan serve
```

Buka terminal satu lagi dan masuk ke directory aplikasi untuk menjalankan react
js dengan perintah

```bash
npm run dev
```

Aplikasi sekarang berjalan 🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉

Silahkan buka `http://localhost:8000` klik tombol `register` pada pojok kanan
atas halaman untuk menambahkan user baru.

## Todo

Aplikasi ini masih dalam pengembangan, berikut fitur yang akan ditambahkan

-   [x] Implementasi Authentikasi
-   [ ] Implementasi Role & Permission
-   [x] Dashboard UI
-   [ ] Dark Mode Support
-   [ ] Akumulasi data di Dashboard
-   [ ] CRUD Aduan Warga
-   [ ] CRUD Pengajuan Surat Warga
-   [ ] CRUD Surat Masuk
-   [ ] CRUD Surat Keluar
-   [x] CRUD Data Masyarakat
-   [ ] CRUD Data Pegawai Desa
-   [ ] Log Activity
-   [ ] Membuat surat otomatis dengan template
-   [ ] Notifikasi

Dll nanti ditambahkan kalau sudah kepikiran 🤣🤣
