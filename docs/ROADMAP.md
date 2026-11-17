# Roadmap

Setiap fase harus selesai dan teruji sebelum fase berikutnya dimulai.

## Fase 0 — Fondasi
- [ ] Buat repo GitHub baru (kosong) dan push folder ini
- [ ] Scaffold `app/` dengan Flutter (`flutter create`), target Android & iOS
- [ ] Scaffold `web/` dengan Next.js
- [ ] CI sederhana: analisis + test (GitHub Actions, tier gratis)
- [ ] Keputusan awal dicatat di `docs/adr/`

## Fase 1 — Kurikulum & latihan dasar
- [ ] Format data kurikulum (JSON): unit → pelajaran → latihan
- [ ] Vocabulary + flashcard dengan spaced repetition (algoritma SM-2 sebagai awal)
- [ ] Satu jalur belajar Inggris dan satu jalur Jepang (contoh konten)
- [ ] Penyimpanan progres lokal (offline-first)

## Fase 2 — Jenis latihan lengkap
- [ ] Grammar, reading, writing
- [ ] Listening & speaking (uji coba dulu: TTS & speech-to-text bawaan perangkat)
- [ ] Tes mingguan (weekly assessment)
- [ ] Pelacakan progres dan statistik

## Fase 3 — Tutor AI adaptif
- [ ] Tutor AI dengan batas biaya per pengguna (quota dan caching)
- [ ] Penyesuaian tingkat kesulitan dari hasil latihan
- [ ] Evaluasi kualitas jawaban tutor sebelum dirilis

## Fase 4 — Akun, sinkronisasi, dan rilis
- [ ] Autentikasi dan sinkronisasi antar perangkat
- [ ] Audit keamanan (penyimpanan kunci API, validasi input, aturan akses data)
- [ ] Rilis: Play Store & App Store, website publik
