# Zyan Lingua (nama kerja)

Aplikasi belajar bahasa (Inggris & Jepang) untuk Android dan iOS, dengan website pendamping.
Status: **Fase 0 — perencanaan & fondasi.** Belum ada fitur yang berjalan.

## Struktur

```
app/      Flutter — aplikasi Android & iOS (satu codebase)      [belum dibuat]
web/      Next.js — website landing page & dokumentasi          [belum dibuat]
docs/     arsitektur, roadmap, keputusan teknis (ADR)
```

## Dokumen

- [Roadmap & milestone](docs/ROADMAP.md)
- [Arsitektur](docs/ARCHITECTURE.md)

## Prinsip

- Biaya operasional diusahakan serendah mungkin: pakai tier gratis dan open-source.
- Konten kurikulum disimpan sebagai data (JSON), bukan hard-code di UI.
- Setiap fitur wajib memikirkan performa, aksesibilitas, keamanan, dan maintainability.
