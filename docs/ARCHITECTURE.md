# Arsitektur (draft awal)

Status: keputusan awal, bisa berubah setelah prototipe Fase 1.

## Keputusan utama

| Area | Pilihan | Alasan | Alternatif yang ditolak |
|---|---|---|---|
| Mobile | Flutter | Satu codebase Android & iOS; UI kustom mudah | React Native (lebih ramai ekosistemnya, tapi Flutter lebih cocok untuk UI kustom yang halus) |
| State | Riverpod | Testable, aman dari bug rebuild | Bloc (lebih verbose untuk tim kecil) |
| Penyimpanan lokal | SQLite (drift) | Offline-first, query progres & jadwal review | Hive (kurang cocok untuk relasi data) |
| Website | Next.js | SEO untuk halaman publik | Flutter Web (SEO lemah) |
| Backend | Supabase (tier gratis) | Auth + Postgres + sinkronisasi, biaya awal nol | Firebase (vendor lock-in lebih kuat) |
| Tutor AI | API LLM dengan proxy di backend | Kunci API tidak pernah ada di aplikasi | Kunci API di aplikasi (tidak aman) |

## Keamanan
- Kunci API LLM hanya di backend (Edge Function), tidak pernah di binary aplikasi.
- Row Level Security di database: pengguna hanya bisa membaca data miliknya.
- Batas pemakaian AI per pengguna untuk mengontrol biaya.

## Konten
- Kurikulum disimpan sebagai JSON versi-kan (`content/`), dimuat aplikasi saat dibutuhkan.
- Konten dimuat dari backend dan di-cache offline.

## Yang belum diputuskan
- Model LLM mana yang dipakai (biaya vs kualitas perlu diuji).
- Apakah speaking memakai speech-to-text bawaan perangkat atau layanan berbayar.
- Model monetisasi.
