/* Admin Keuangan Harian - demo by Dooza. Pure logic first (testable in node), UI after. */
(function (root) {
  'use strict';

  // ---------- master data ----------
  var CATS = {
    'Penjualan Tunai':         { type: 'masuk',  limit: 10000000, en: 'Cash sales' },
    'Penjualan QRIS/Transfer': { type: 'masuk',  limit: 10000000, en: 'QRIS / transfer sales' },
    'Pendapatan Lain':         { type: 'masuk',  limit: 5000000,  en: 'Other income' },
    'Bahan Baku':              { type: 'keluar', limit: 4000000,  en: 'Raw materials' },
    'Gaji Karyawan':           { type: 'keluar', limit: 4000000,  en: 'Staff wages' },
    'Sewa Tempat':             { type: 'keluar', limit: 5500000,  en: 'Rent' },
    'Listrik & Air':           { type: 'keluar', limit: 2500000,  en: 'Electricity & water' },
    'Internet & Pulsa':        { type: 'keluar', limit: 600000,   en: 'Internet & phone credit' },
    'Transportasi':            { type: 'keluar', limit: 300000,   en: 'Transport' },
    'Perlengkapan':            { type: 'keluar', limit: 1000000,  en: 'Supplies' },
    'Perawatan & Servis':      { type: 'keluar', limit: 1500000,  en: 'Maintenance & repairs' },
    'Pemasaran':               { type: 'keluar', limit: 1000000,  en: 'Marketing' },
    'Lain-lain':               { type: 'keluar', limit: 1000000,  en: 'Other' }
  };
  var METHODS = { 'Tunai': 'Cash', 'Transfer BCA': 'BCA transfer', 'QRIS': 'QRIS', 'Kartu Debit': 'Debit card', 'Autodebet': 'Auto-debit' };
  var OPENING_DEFAULT = 25000000; // saldo awal per 1 Okt 2026 (contoh)

  // [tanggal, keterangan, kategori, tipe, jumlah, metode, ada bukti?]
  var SAMPLE_RAW = [
    ['2026-10-01', 'Sewa ruko bulan Oktober', 'Sewa Tempat', 'keluar', 5000000, 'Transfer BCA', 1],
    ['2026-10-02', 'Biji kopi arabika Gayo 10 kg', 'Bahan Baku', 'keluar', 3200000, 'Transfer BCA', 1],
    ['2026-10-03', 'Setoran penjualan tunai 1-3 Okt', 'Penjualan Tunai', 'masuk', 4350000, 'Tunai', 1],
    ['2026-10-03', 'Settlement QRIS 1-3 Okt', 'Penjualan QRIS/Transfer', 'masuk', 2780000, 'QRIS', 1],
    ['2026-10-05', 'Tagihan listrik PLN Oktober', 'Listrik & Air', 'keluar', 1850000, 'Transfer BCA', 1],
    ['2026-10-06', 'Internet IndiHome Oktober', 'Internet & Pulsa', 'keluar', 450000, 'Autodebet', 1],
    ['2026-10-07', 'Susu UHT 48 liter', 'Bahan Baku', 'keluar', 1250000, 'Tunai', 1],
    ['2026-10-08', 'Cup plastik & sedotan 1.000 pcs', 'Perlengkapan', 'keluar', 875000, 'Transfer BCA', 1],
    ['2026-10-10', 'Setoran penjualan tunai 5-10 Okt', 'Penjualan Tunai', 'masuk', 7920000, 'Tunai', 1],
    ['2026-10-10', 'Settlement QRIS 5-10 Okt', 'Penjualan QRIS/Transfer', 'masuk', 5140000, 'QRIS', 1],
    ['2026-10-12', 'Bensin & parkir belanja pasar', 'Transportasi', 'keluar', 185000, 'Tunai', 1],
    ['2026-10-13', 'Gula aren & sirup', 'Bahan Baku', 'keluar', 640000, 'Tunai', 1],
    ['2026-10-14', 'Iklan Instagram promo 2 minggu', 'Pemasaran', 'keluar', 750000, 'Kartu Debit', 1],
    ['2026-10-15', 'Susu UHT 48 liter', 'Bahan Baku', 'keluar', 1250000, 'Tunai', 0],
    ['2026-10-17', 'Setoran penjualan tunai 12-17 Okt', 'Penjualan Tunai', 'masuk', 8210000, 'Tunai', 1],
    ['2026-10-17', 'Settlement QRIS 12-17 Okt', 'Penjualan QRIS/Transfer', 'masuk', 5460000, 'QRIS', 1],
    ['2026-10-17', 'DP 50% catering rapat PT Sinar Jaya', 'Pendapatan Lain', 'masuk', 1500000, 'Transfer BCA', 1],
    ['2026-10-19', 'Biji kopi robusta Temanggung 8 kg', 'Bahan Baku', 'keluar', 1680000, 'Transfer BCA', 1],
    ['2026-10-20', 'Servis mesin espresso', 'Perawatan & Servis', 'keluar', 950000, 'Transfer BCA', 1],
    ['2026-10-21', 'Air galon & gas LPG', 'Listrik & Air', 'keluar', 210000, 'Tunai', 1],
    ['2026-10-22', 'Sewa pick-up angkut kursi baru', 'Transportasi', 'keluar', 750000, 'Tunai', 1],
    ['2026-10-24', 'Setoran penjualan tunai 19-24 Okt', 'Penjualan Tunai', 'masuk', 7650000, 'Tunai', 1],
    ['2026-10-24', 'Settlement QRIS 19-24 Okt', 'Penjualan QRIS/Transfer', 'masuk', 5890000, 'QRIS', 1],
    ['2026-10-24', 'Pelunasan catering PT Sinar Jaya', 'Pendapatan Lain', 'masuk', 1500000, 'Transfer BCA', 1],
    ['2026-10-26', 'Susu UHT & krimer', 'Bahan Baku', 'keluar', 1380000, 'Tunai', 1],
    ['2026-10-27', 'Paket data HP kasir', 'Internet & Pulsa', 'keluar', 100000, 'Tunai', 0],
    ['2026-10-28', 'Cetak menu & stiker logo', 'Pemasaran', 'keluar', 420000, 'Transfer BCA', 1],
    ['2026-10-30', 'Gaji barista - Rina', 'Gaji Karyawan', 'keluar', 3500000, 'Transfer BCA', 1],
    ['2026-10-30', 'Gaji barista - Dimas', 'Gaji Karyawan', 'keluar', 3350000, 'Transfer BCA', 1],
    ['2026-10-30', 'Gaji kasir - Ayu', 'Gaji Karyawan', 'keluar', 3200000, 'Transfer BCA', 1],
    ['2026-10-31', 'Setoran penjualan tunai 26-31 Okt', 'Penjualan Tunai', 'masuk', 8430000, 'Tunai', 1],
    ['2026-10-31', 'Settlement QRIS 26-31 Okt', 'Penjualan QRIS/Transfer', 'masuk', 6120000, 'QRIS', 1],
    ['2026-11-01', 'Sewa ruko bulan November', 'Sewa Tempat', 'keluar', 5000000, 'Transfer BCA', 1],
    ['2026-11-02', 'Biji kopi arabika Gayo 10 kg', 'Bahan Baku', 'keluar', 3200000, 'Transfer BCA', 1],
    ['2026-11-02', 'Biji kopi arabika Gayo 10 kg', 'Bahan Baku', 'keluar', 3200000, 'Transfer BCA', 2],
    ['2026-11-04', 'Tagihan listrik PLN November', 'Listrik & Air', 'keluar', 1920000, 'Transfer BCA', 1],
    ['2026-11-05', 'Internet IndiHome November', 'Internet & Pulsa', 'keluar', 450000, 'Autodebet', 1],
    ['2026-11-06', 'Susu UHT 48 liter', 'Bahan Baku', 'keluar', 1250000, 'Tunai', 1],
    ['2026-11-07', 'Setoran penjualan tunai 2-7 Nov', 'Penjualan Tunai', 'masuk', 8040000, 'Tunai', 1],
    ['2026-11-07', 'Settlement QRIS 2-7 Nov', 'Penjualan QRIS/Transfer', 'masuk', 5730000, 'QRIS', 1],
    ['2026-11-09', 'Bensin & parkir belanja pasar', 'Transportasi', 'keluar', 165000, 'Tunai', 0],
    ['2026-11-10', 'Bagi hasil kue titipan (konsinyasi)', 'Lain-lain', 'keluar', 900000, 'Tunai', 1]
  ];

  function sampleRows() {
    var out = [], lastReceipt = '';
    SAMPLE_RAW.forEach(function (r, i) {
      var id = 1001 + i, month = r[0].slice(0, 7), bukti = '';
      if (r[6] === 1) bukti = 'Drive/Bukti Transaksi/' + month + '/BKT-' + id + '.jpg';
      if (r[6] === 2) bukti = lastReceipt; // same receipt entered twice (double entry)
      if (bukti) lastReceipt = bukti;
      out.push({ id: id, tanggal: r[0], keterangan: r[1], kategori: r[2], tipe: r[3], jumlah: r[4], metode: r[5], bukti: bukti, contoh: true });
    });
    return out;
  }

  // ---------- helpers ----------
  function group3(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
  function fmtRp(n) {
    n = Math.round(Number(n) || 0);
    return (n < 0 ? '-' : '') + 'Rp ' + group3(Math.abs(n));
  }
  function fmtShort(n, lang) { // for chart labels: 7,9 jt / 7.9M
    var m = n / 1e6;
    var s = (Math.round(m * 10) / 10).toString();
    return lang === 'en' ? s + 'M' : s.replace('.', ',') + ' jt';
  }
  function parseAmount(s) {
    if (typeof s === 'number') return Math.round(s);
    var d = String(s || '').replace(/[^0-9]/g, '');
    return d ? parseInt(d, 10) : 0;
  }
  function toUTC(d) { var p = d.split('-'); return Date.UTC(+p[0], +p[1] - 1, +p[2]); }
  function isoDate(ms) { return new Date(ms).toISOString().slice(0, 10); }
  function addDays(d, n) { return isoDate(toUTC(d) + n * 864e5); }
  function weekStart(d) { // Monday
    var dow = new Date(toUTC(d)).getUTCDay(); // 0 Sun
    return addDays(d, -((dow + 6) % 7));
  }
  var MON = { id: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
              en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] };
  var MONL = { id: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
               en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] };
  function fmtDate(d, lang) { var p = d.split('-'); return (+p[2]) + ' ' + MON[lang || 'id'][+p[1] - 1] + ' ' + p[0]; }
  function weekLabel(ws, lang) {
    var we = addDays(ws, 6), a = ws.split('-'), b = we.split('-'), M = MON[lang || 'id'];
    return (+a[2]) + (a[1] === b[1] ? '' : ' ' + M[+a[1] - 1]) + '-' + (+b[2]) + ' ' + M[+b[1] - 1] + ' ' + b[0];
  }
  function monthLabel(m, lang) { var p = m.split('-'); return MONL[lang || 'id'][+p[1] - 1] + ' ' + p[0]; }
  function sortRows(rows) {
    return rows.slice().sort(function (a, b) { return a.tanggal < b.tanggal ? -1 : a.tanggal > b.tanggal ? 1 : a.id - b.id; });
  }
  function signed(r) { return r.tipe === 'masuk' ? r.jumlah : -r.jumlah; }

  // ---------- checks (Cek Bukti) ----------
  function checkRows(rows) {
    var byKey = {}, byReceipt = {}, res = [];
    rows.forEach(function (r) {
      var k = r.tanggal + '|' + r.tipe + '|' + r.jumlah;
      (byKey[k] = byKey[k] || []).push(r.id);
      if (r.bukti) { var bk = r.bukti.trim().toLowerCase(); (byReceipt[bk] = byReceipt[bk] || []).push(r.id); }
    });
    sortRows(rows).forEach(function (r) {
      var issues = [], cat = CATS[r.kategori];
      if (!r.bukti || !String(r.bukti).trim()) issues.push({ code: 'no_receipt' });
      var k = r.tanggal + '|' + r.tipe + '|' + r.jumlah;
      if (byKey[k].length > 1) issues.push({ code: 'duplicate', ids: byKey[k].filter(function (x) { return x !== r.id; }) });
      if (r.bukti) {
        var bk = r.bukti.trim().toLowerCase();
        if (byReceipt[bk].length > 1) issues.push({ code: 'dup_receipt', ids: byReceipt[bk].filter(function (x) { return x !== r.id; }) });
      }
      if (!cat) issues.push({ code: 'bad_category' });
      else {
        if (cat.type !== r.tipe) issues.push({ code: 'wrong_type', expected: cat.type });
        if (r.jumlah > cat.limit) issues.push({ code: 'over_limit', limit: cat.limit });
      }
      if (issues.length) res.push({ row: r, issues: issues });
    });
    return res;
  }

  // ---------- reports ----------
  function emptyCats(type) { var o = {}; Object.keys(CATS).forEach(function (c) { if (CATS[c].type === type) o[c] = 0; }); return o; }
  function summarize(rows, opening, from, to) { // inclusive ISO dates
    var s = { from: from, to: to, saldoAwal: opening, masuk: 0, keluar: 0, saldoAkhir: 0, count: 0,
              keluarByCat: emptyCats('keluar'), masukByCat: emptyCats('masuk') };
    rows.forEach(function (r) {
      if (r.tanggal < from) { s.saldoAwal += signed(r); return; }
      if (r.tanggal > to) return;
      s.count++;
      if (r.tipe === 'masuk') { s.masuk += r.jumlah; s.masukByCat[r.kategori] = (s.masukByCat[r.kategori] || 0) + r.jumlah; }
      else { s.keluar += r.jumlah; s.keluarByCat[r.kategori] = (s.keluarByCat[r.kategori] || 0) + r.jumlah; }
    });
    s.saldoAkhir = s.saldoAwal + s.masuk - s.keluar;
    return s;
  }
  function range(rows) {
    var s = sortRows(rows);
    return s.length ? [s[0].tanggal, s[s.length - 1].tanggal] : null;
  }
  function weeklyReport(rows, opening) {
    var rg = range(rows); if (!rg) return [];
    var out = [], ws = weekStart(rg[0]);
    while (ws <= rg[1]) {
      var s = summarize(rows, opening, ws, addDays(ws, 6)); s.key = ws; out.push(s); ws = addDays(ws, 7);
    }
    return out;
  }
  function monthEnd(m) { var p = m.split('-'); return isoDate(Date.UTC(+p[0], +p[1], 0)); }
  function monthlyReport(rows, opening) {
    var rg = range(rows); if (!rg) return [];
    var out = [], m = rg[0].slice(0, 7), last = rg[1].slice(0, 7);
    while (m <= last) {
      var s = summarize(rows, opening, m + '-01', monthEnd(m)); s.key = m; out.push(s);
      var p = m.split('-'), y = +p[0], mo = +p[1] + 1; if (mo > 12) { mo = 1; y++; }
      m = y + '-' + (mo < 10 ? '0' : '') + mo;
    }
    return out;
  }
  function reconcile(rows, opening, periods) { // returns list of problems (empty = all reconcile)
    var errs = [], totalIn = 0, totalOut = 0;
    rows.forEach(function (r) { if (r.tipe === 'masuk') totalIn += r.jumlah; else totalOut += r.jumlah; });
    periods.forEach(function (p, i) {
      if (p.saldoAkhir !== p.saldoAwal + p.masuk - p.keluar) errs.push('formula ' + p.key);
      if (i > 0 && p.saldoAwal !== periods[i - 1].saldoAkhir) errs.push('carry ' + p.key);
      var sumCat = 0; Object.keys(p.keluarByCat).forEach(function (c) { sumCat += p.keluarByCat[c]; });
      if (sumCat !== p.keluar) errs.push('categories ' + p.key);
    });
    if (periods.length) {
      if (periods[0].saldoAwal !== opening) errs.push('opening');
      if (periods[periods.length - 1].saldoAkhir !== opening + totalIn - totalOut) errs.push('closing');
    }
    return errs;
  }

  // ---------- CSV ----------
  function csvCell(v, sep) {
    var s = v == null ? '' : String(v);
    return (s.indexOf(sep) >= 0 || /["\r\n]/.test(s)) ? '"' + s.replace(/"/g, '""') + '"' : s;
  }
  function toCSV(header, rows, sep) {
    sep = sep || ',';
    return [header].concat(rows).map(function (r) { return r.map(function (c) { return csvCell(c, sep); }).join(sep); }).join('\r\n');
  }

  var API = { CATS: CATS, METHODS: METHODS, OPENING_DEFAULT: OPENING_DEFAULT, sampleRows: sampleRows, fmtRp: fmtRp,
    fmtShort: fmtShort, parseAmount: parseAmount, weekStart: weekStart, addDays: addDays, sortRows: sortRows,
    checkRows: checkRows, summarize: summarize, weeklyReport: weeklyReport, monthlyReport: monthlyReport,
    reconcile: reconcile, toCSV: toCSV, weekLabel: weekLabel, monthLabel: monthLabel, fmtDate: fmtDate };
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  if (typeof document === 'undefined') return;

  // =================== UI ===================
  var T = {
    id: {
      banner: '<b>Data contoh</b>: usaha kecil fiktif (Kedai Kopi Senja, Bandung). Data yang Anda tambahkan hanya tersimpan di browser ini.',
      brandSub: 'Admin keuangan harian: input, cek bukti, laporan',
      tabTx: 'Transaksi Harian', tabCek: 'Cek Bukti', tabW: 'Laporan Mingguan', tabM: 'Laporan Bulanan',
      txTitle: 'Transaksi Harian', txSub: 'Satu baris per transaksi, setiap angka punya bukti di folder Drive bersama.',
      addTitle: 'Tambah transaksi', fDate: 'Tanggal', fDesc: 'Keterangan', fType: 'Masuk / Keluar', fCat: 'Kategori', fAmt: 'Jumlah (Rp)',
      fMeth: 'Metode', fRec: 'Link bukti (Google Drive)', fRecPh: 'https://drive.google.com/...', addBtn: 'Simpan transaksi',
      masuk: 'Masuk', keluar: 'Keluar', all: 'Semua', allMonths: 'Semua bulan', search: 'Cari keterangan...',
      thNo: 'No', thDate: 'Tanggal', thDesc: 'Keterangan', thCat: 'Kategori', thType: 'Masuk/Keluar', thAmt: 'Jumlah', thMeth: 'Metode',
      thRec: 'Bukti', thStat: 'Status', total: 'Total', noRec: 'belum ada', okStat: 'OK', flagStat: 'cek',
      csv: 'Unduh CSV', xlsx: 'Download .xlsx-ready CSV', reset: 'Kembalikan data contoh', opening: 'Saldo awal 1 Okt 2026',
      errReq: 'Isi tanggal, keterangan dan jumlah lebih dari 0.', saved: 'Transaksi disimpan', deleted: 'Baris dihapus',
      resetDone: 'Data contoh dikembalikan', recSaved: 'Link bukti disimpan', del: 'Hapus',
      sheetsNote: '<b>Di Google Sheets / Excel:</b><ol><li>Klik <b>Download .xlsx-ready CSV</b>, lalu buka di Excel atau <code>File &gt; Import</code> di Google Sheets (pemisah titik koma).</li><li>Kolom <code>Minggu</code> dan <code>Bulan</code> sudah terisi, jadi pivot table langsung jadi laporan.</li><li>Bukti disimpan dengan pola <code>Bukti Transaksi/2026-11/BKT-1035.jpg</code>, nomor BKT sama dengan nomor baris.</li></ol>',
      cekTitle: 'Cek Bukti', cekSub: 'Setiap angka harus punya bukti. Baris di bawah perlu diperbaiki sebelum laporan dikirim.',
      kNo: 'Tanpa bukti', kDup: 'Kemungkinan dobel', kLim: 'Lewat batas kategori', kType: 'Salah jenis', kOk: 'Baris bersih',
      i_no_receipt: 'Bukti belum diunggah', i_duplicate: 'Jumlah + tanggal sama dengan baris', i_dup_receipt: 'File bukti sama dengan baris',
      i_over_limit: 'Lewat batas kategori', i_wrong_type: 'Kategori ini seharusnya', i_bad_category: 'Kategori tidak dikenal',
      pasteRec: 'Tempel link bukti...', saveRec: 'Simpan', noIssues: 'Semua baris punya bukti dan lolos cek.',
      limitsTitle: 'Batas per transaksi (bisa diatur)', thLimit: 'Batas',
      wTitle: 'Laporan Mingguan', wSub: 'Senin sampai Minggu. Saldo akhir = saldo awal + masuk - keluar.',
      mTitle: 'Laporan Bulanan', mSub: 'Arus kas, biaya operasional per kategori dan saldo akhir per bulan.',
      pick: 'Periode', sAwal: 'Saldo awal', sMasuk: 'Kas masuk', sKeluar: 'Kas keluar', sAkhir: 'Saldo akhir', sNet: 'Arus kas bersih',
      opTitle: 'Biaya operasional per kategori', inTitle: 'Pemasukan per kategori', chartW: 'Kas masuk vs keluar per minggu',
      chartM: 'Kas masuk vs keluar per bulan', allW: 'Semua minggu', allM: 'Semua bulan', thPeriod: 'Periode', thTx: 'Trx',
      recOk: 'Cocok: saldo akhir = saldo awal + masuk - keluar, dan saldo berpindah benar antar periode.', recBad: 'Tidak cocok: ',
      pending: 'baris masih perlu bukti di periode ini', none: 'Tidak ada transaksi di periode ini.', footer: 'Dibuat oleh Dooza sebagai contoh gratis untuk proyek ini.',
      footer2: 'Semua nama, angka dan link di halaman ini adalah data contoh.', share: 'dari kas keluar'
    },
    en: {
      banner: '<b>Sample data</b>: a fictional small business (Kedai Kopi Senja, Bandung). Anything you add is saved in this browser only.',
      brandSub: 'Daily finance admin: input, receipt check, reports',
      tabTx: 'Daily Transactions', tabCek: 'Receipt Check', tabW: 'Weekly Report', tabM: 'Monthly Report',
      txTitle: 'Daily Transactions', txSub: 'One row per transaction; every number has a receipt in the shared Drive folder.',
      addTitle: 'Add transaction', fDate: 'Date', fDesc: 'Description', fType: 'In / Out', fCat: 'Category', fAmt: 'Amount (Rp)',
      fMeth: 'Method', fRec: 'Receipt link (Google Drive)', fRecPh: 'https://drive.google.com/...', addBtn: 'Save transaction',
      masuk: 'In', keluar: 'Out', all: 'All', allMonths: 'All months', search: 'Search description...',
      thNo: 'No', thDate: 'Date', thDesc: 'Description', thCat: 'Category', thType: 'In/Out', thAmt: 'Amount', thMeth: 'Method',
      thRec: 'Receipt', thStat: 'Status', total: 'Total', noRec: 'missing', okStat: 'OK', flagStat: 'check',
      csv: 'Download CSV', xlsx: 'Download .xlsx-ready CSV', reset: 'Restore sample data', opening: 'Opening balance 1 Oct 2026',
      errReq: 'Fill in date, description and an amount above 0.', saved: 'Transaction saved', deleted: 'Row deleted',
      resetDone: 'Sample data restored', recSaved: 'Receipt link saved', del: 'Delete',
      sheetsNote: '<b>In Google Sheets / Excel:</b><ol><li>Click <b>Download .xlsx-ready CSV</b> and open it in Excel, or use <code>File &gt; Import</code> in Google Sheets (semicolon separator).</li><li>The <code>Minggu</code> (week) and <code>Bulan</code> (month) columns are filled, so a pivot table gives the report directly.</li><li>Receipts are stored as <code>Bukti Transaksi/2026-11/BKT-1035.jpg</code>; the BKT number equals the row number.</li></ol>',
      cekTitle: 'Receipt Check', cekSub: 'Every number needs a receipt. Fix the rows below before the report goes out.',
      kNo: 'No receipt', kDup: 'Possible duplicate', kLim: 'Over category limit', kType: 'Wrong in/out', kOk: 'Clean rows',
      i_no_receipt: 'Receipt not uploaded', i_duplicate: 'Same amount + date as row', i_dup_receipt: 'Same receipt file as row',
      i_over_limit: 'Over category limit', i_wrong_type: 'This category should be', i_bad_category: 'Unknown category',
      pasteRec: 'Paste receipt link...', saveRec: 'Save', noIssues: 'Every row has a receipt and passes the checks.',
      limitsTitle: 'Per-transaction limits (configurable)', thLimit: 'Limit',
      wTitle: 'Weekly Report', wSub: 'Monday to Sunday. Ending balance = opening + in - out.',
      mTitle: 'Monthly Report', mSub: 'Cash flow, operating costs by category and ending balance per month.',
      pick: 'Period', sAwal: 'Opening balance', sMasuk: 'Cash in', sKeluar: 'Cash out', sAkhir: 'Ending balance', sNet: 'Net cash flow',
      opTitle: 'Operating costs by category', inTitle: 'Income by category', chartW: 'Cash in vs out per week',
      chartM: 'Cash in vs out per month', allW: 'All weeks', allM: 'All months', thPeriod: 'Period', thTx: 'Tx',
      recOk: 'Reconciles: ending = opening + in - out, and balances carry over correctly between periods.', recBad: 'Does not reconcile: ',
      pending: 'rows in this period still need a receipt', none: 'No transactions in this period.', footer: 'Dibuat oleh Dooza sebagai contoh gratis untuk proyek ini.',
      footer2: 'Built by Dooza as a free sample for this project. All names, numbers and links on this page are sample data.', share: 'of cash out'
    }
  };

  var KEY = 'dooza-admin-keuangan-v1';
  var S = { lang: 'id', view: 'tx', rows: sampleRows(), opening: OPENING_DEFAULT, week: null, month: null, fMonth: '', fType: '', q: '' };
  function load() {
    try {
      var raw = localStorage.getItem(KEY); if (!raw) return;
      var d = JSON.parse(raw);
      if (d && Array.isArray(d.rows)) { S.rows = d.rows; S.opening = d.opening || OPENING_DEFAULT; }
      if (d && d.lang) S.lang = d.lang;
    } catch (e) { /* storage blocked: keep sample */ }
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify({ rows: S.rows, opening: S.opening, lang: S.lang })); } catch (e) {} }

  var $ = function (s) { return document.querySelector(s); };
  function t(k) { return T[S.lang][k] || T.id[k] || k; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function catName(c) { return S.lang === 'en' && CATS[c] ? CATS[c].en : c; }
  function methName(m) { return S.lang === 'en' && METHODS[m] ? METHODS[m] : m; }
  function typeName(x) { return t(x); }
  function toast(msg) { var el = $('#toast'); el.textContent = msg; el.classList.add('show'); clearTimeout(toast._t); toast._t = setTimeout(function () { el.classList.remove('show'); }, 1800); }
  function download(name, text) {
    var blob = new Blob(['﻿' + text], { type: 'text/csv;charset=utf-8' });
    var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }
  function receiptHTML(b) {
    if (!b) return '<span class="chip miss">' + esc(t('noRec')) + '</span>';
    var name = b.split('/').pop() || b;
    if (/^https?:\/\//i.test(b)) return '<a class="chip" href="' + esc(b) + '" target="_blank" rel="noopener noreferrer" title="' + esc(b) + '">' + esc(name) + '</a>';
    return '<span class="chip" title="' + esc(b) + '">' + esc(name) + '</span>';
  }

  function applyStatic() {
    document.documentElement.lang = S.lang;
    document.querySelectorAll('[data-t]').forEach(function (el) { el.innerHTML = t(el.getAttribute('data-t')); });
    document.querySelectorAll('[data-ph]').forEach(function (el) { el.placeholder = t(el.getAttribute('data-ph')); });
    $('#lang').textContent = S.lang === 'id' ? 'EN' : 'ID';
    fillCatSelect(); fillMethSelect();
  }
  function fillCatSelect() {
    var type = $('#f-type').value, sel = $('#f-cat'), cur = sel.value;
    sel.innerHTML = Object.keys(CATS).filter(function (c) { return CATS[c].type === type; })
      .map(function (c) { return '<option value="' + esc(c) + '">' + esc(catName(c)) + '</option>'; }).join('');
    if (CATS[cur] && CATS[cur].type === type) sel.value = cur;
  }
  function fillMethSelect() {
    var sel = $('#f-meth'), cur = sel.value;
    sel.innerHTML = Object.keys(METHODS).map(function (m) { return '<option value="' + esc(m) + '">' + esc(methName(m)) + '</option>'; }).join('');
    if (cur) sel.value = cur;
    $('#f-type').innerHTML = '<option value="keluar">' + t('keluar') + '</option><option value="masuk">' + t('masuk') + '</option>';
  }

  function flagMap() { var m = {}; checkRows(S.rows).forEach(function (f) { m[f.row.id] = f.issues; }); return m; }

  // ---------- tab: transactions ----------
  function renderTx() {
    var flags = flagMap();
    var months = {}; S.rows.forEach(function (r) { months[r.tanggal.slice(0, 7)] = 1; });
    $('#t-month').innerHTML = '<option value="">' + t('allMonths') + '</option>' + Object.keys(months).sort().map(function (m) {
      return '<option value="' + m + '"' + (S.fMonth === m ? ' selected' : '') + '>' + monthLabel(m, S.lang) + '</option>'; }).join('');
    $('#t-type').innerHTML = ['', 'masuk', 'keluar'].map(function (x) { return '<option value="' + x + '"' + (S.fType === x ? ' selected' : '') + '>' + (x ? t(x) : t('all')) + '</option>'; }).join('');
    var q = S.q.toLowerCase();
    var rows = sortRows(S.rows).filter(function (r) {
      return (!S.fMonth || r.tanggal.slice(0, 7) === S.fMonth) && (!S.fType || r.tipe === S.fType) &&
        (!q || (r.keterangan + ' ' + r.kategori).toLowerCase().indexOf(q) >= 0);
    });
    var tin = 0, tout = 0;
    $('#tx-body').innerHTML = rows.map(function (r) {
      if (r.tipe === 'masuk') tin += r.jumlah; else tout += r.jumlah;
      var f = flags[r.id];
      return '<tr class="' + (f ? 'flag' : '') + '"><td>' + r.id + '</td><td>' + fmtDate(r.tanggal, S.lang) + '</td><td class="desc">' + esc(r.keterangan) +
        '</td><td>' + esc(catName(r.kategori)) + '</td><td class="' + (r.tipe === 'masuk' ? 'in' : 'out') + '">' + typeName(r.tipe) +
        '</td><td class="n ' + (r.tipe === 'masuk' ? 'in' : 'out') + '">' + fmtRp(r.jumlah) + '</td><td>' + esc(methName(r.metode)) +
        '</td><td>' + receiptHTML(r.bukti) + '</td><td>' + (f ? '<span class="tag">' + t('flagStat') + ' (' + f.length + ')</span>' : '<span class="tag g">' + t('okStat') + '</span>') +
        '</td><td><button class="btn2 small danger" data-del="' + r.id + '" aria-label="' + t('del') + '">' + t('del') + '</button></td></tr>';
    }).join('');
    $('#tx-foot').innerHTML = '<tr><td colspan="4">' + t('total') + ' (' + rows.length + ')</td><td></td><td class="n">' +
      '<span class="in">' + fmtRp(tin) + '</span><br><span class="out">' + fmtRp(tout) + '</span></td><td colspan="4"></td></tr>';
    $('#opening').value = group3(S.opening);
  }

  // ---------- tab: checks ----------
  function issueText(i) {
    var s = t('i_' + i.code);
    if (i.ids) s += ' ' + i.ids.join(', ');
    if (i.code === 'over_limit') s += ' (' + fmtRp(i.limit) + ')';
    if (i.code === 'wrong_type') s += ' ' + t(i.expected);
    return s;
  }
  function renderCek() {
    var res = checkRows(S.rows), cnt = { no_receipt: 0, dup: 0, over_limit: 0, wrong_type: 0 };
    res.forEach(function (f) { f.issues.forEach(function (i) {
      if (i.code === 'duplicate' || i.code === 'dup_receipt') cnt.dup++; else if (cnt[i.code] != null) cnt[i.code]++; }); });
    var dupRows = res.filter(function (f) { return f.issues.some(function (i) { return i.code === 'duplicate' || i.code === 'dup_receipt'; }); }).length;
    $('#cek-kpis').innerHTML =
      '<div class="kpi out"><span>' + t('kNo') + '</span><b>' + cnt.no_receipt + '</b></div>' +
      '<div class="kpi out"><span>' + t('kDup') + '</span><b>' + dupRows + '</b></div>' +
      '<div class="kpi out"><span>' + t('kLim') + '</span><b>' + cnt.over_limit + '</b></div>' +
      '<div class="kpi out"><span>' + t('kType') + '</span><b>' + cnt.wrong_type + '</b></div>' +
      '<div class="kpi in"><span>' + t('kOk') + '</span><b>' + (S.rows.length - res.length) + ' / ' + S.rows.length + '</b></div>';
    $('#cek-list').innerHTML = res.length ? res.map(function (f) {
      var r = f.row, hard = f.issues.some(function (i) { return i.code === 'no_receipt' || i.code === 'duplicate'; });
      var needRec = f.issues.some(function (i) { return i.code === 'no_receipt'; });
      var isDup = f.issues.some(function (i) { return i.code === 'duplicate' && i.ids.some(function (x) { return x < r.id; }); });
      return '<div class="issue' + (hard ? ' r' : '') + '"><div><b>#' + r.id + '</b> ' + fmtDate(r.tanggal, S.lang) + ' &middot; ' + esc(r.keterangan) +
        ' &middot; <span class="' + (r.tipe === 'masuk' ? 'in' : 'out') + '">' + fmtRp(r.jumlah) + '</span><br>' +
        f.issues.map(function (i) { return '<span class="tag' + (i.code === 'no_receipt' || i.code === 'duplicate' ? ' r' : '') + '">' + esc(issueText(i)) + '</span>'; }).join('') +
        '<br><small>' + esc(catName(r.kategori)) + ' &middot; ' + esc(methName(r.metode)) + '</small></div><div class="act">' +
        (needRec ? '<input type="url" data-rec-in="' + r.id + '" placeholder="' + esc(t('pasteRec')) + '"><button class="btn small" data-rec="' + r.id + '">' + t('saveRec') + '</button>' : '') +
        (isDup ? '<button class="btn2 small danger" data-del="' + r.id + '">' + t('del') + '</button>' : '') + '</div></div>';
    }).join('') : '<p class="ok">' + t('noIssues') + '</p>';
    $('#limits-body').innerHTML = Object.keys(CATS).map(function (c) {
      return '<tr><td>' + esc(catName(c)) + '</td><td class="' + (CATS[c].type === 'masuk' ? 'in' : 'out') + '">' + t(CATS[c].type) + '</td><td class="n">' + fmtRp(CATS[c].limit) + '</td></tr>'; }).join('');
    var n = res.length; $('#cek-cnt').textContent = n; $('#cek-cnt').classList.toggle('hide', !n);
  }

  // ---------- charts ----------
  function chartSVG(periods, labelFn, selKey) {
    var W = 720, H = 260, L = 56, R = 12, Tp = 16, B = 44, n = periods.length || 1;
    var max = 1; periods.forEach(function (p) { max = Math.max(max, p.masuk, p.keluar); });
    var step = Math.pow(10, Math.floor(Math.log10(max))); var top = Math.ceil(max / step) * step; if (top / step < 4) { step /= 2; top = Math.ceil(max / step) * step; }
    var ph = H - Tp - B, gw = (W - L - R) / n, bw = Math.min(28, gw * 0.32);
    var y = function (v) { return Tp + ph - v / top * ph; };
    var g = '';
    for (var v = 0; v <= top + 1; v += step) g += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + y(v) + '" y2="' + y(v) + '" stroke="#e3e8ef"/><text x="' + (L - 6) + '" y="' + (y(v) + 4) + '" text-anchor="end" font-size="11" fill="#5b6476">' + fmtShort(v, S.lang) + '</text>';
    periods.forEach(function (p, i) {
      var cx = L + gw * i + gw / 2, sel = p.key === selKey;
      if (sel) g += '<rect x="' + (L + gw * i + 2) + '" y="' + Tp + '" width="' + (gw - 4) + '" height="' + ph + '" fill="#0b7a75" opacity=".07" rx="4"/>';
      g += '<rect x="' + (cx - bw - 1) + '" y="' + y(p.masuk) + '" width="' + bw + '" height="' + Math.max(0, ph - (y(p.masuk) - Tp)) + '" fill="#1a7f37" rx="3"><title>' + t('sMasuk') + ': ' + fmtRp(p.masuk) + '</title></rect>';
      g += '<rect x="' + (cx + 1) + '" y="' + y(p.keluar) + '" width="' + bw + '" height="' + Math.max(0, ph - (y(p.keluar) - Tp)) + '" fill="#c2362b" rx="3"><title>' + t('sKeluar') + ': ' + fmtRp(p.keluar) + '</title></rect>';
      g += '<text x="' + cx + '" y="' + (H - B + 16) + '" text-anchor="middle" font-size="11" fill="#1b2230"' + (sel ? ' font-weight="700"' : '') + '>' + esc(labelFn(p)) + '</text>';
    });
    g += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + y(0) + '" y2="' + y(0) + '" stroke="#9aa4b2"/>';
    return '<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="chart">' + g + '</svg>' +
      '<div class="legend"><span><i style="background:#1a7f37"></i>' + t('sMasuk') + '</span><span><i style="background:#c2362b"></i>' + t('sKeluar') + '</span></div>';
  }
  function catBars(byCat, total, color) {
    var keys = Object.keys(byCat).filter(function (c) { return byCat[c] > 0; }).sort(function (a, b) { return byCat[b] - byCat[a]; });
    var max = keys.length ? byCat[keys[0]] : 1;
    if (!keys.length) return '<p class="sub">' + t('none') + '</p>';
    return '<div class="bars">' + keys.map(function (c) {
      var pct = total ? Math.round(byCat[c] / total * 100) : 0;
      return '<div class="brow"><span>' + esc(catName(c)) + '</span><span class="track"><i style="' + (color ? 'background:' + color + ';' : '') + 'width:' + (byCat[c] / max * 100).toFixed(1) + '%"></i></span><span class="n">' + fmtRp(byCat[c]) + ' <small>(' + pct + '%)</small></span></div>';
    }).join('') + '</div>';
  }

  // ---------- tab: reports ----------
  function renderReport(kind) {
    var periods = kind === 'w' ? weeklyReport(S.rows, S.opening) : monthlyReport(S.rows, S.opening);
    var lab = function (p) { return kind === 'w' ? weekLabel(p.key, S.lang) : monthLabel(p.key, S.lang); };
    var short = function (p) { return kind === 'w' ? weekLabel(p.key, S.lang).replace(/ \d{4}$/, '') : monthLabel(p.key, S.lang).slice(0, 3) + ' ' + p.key.slice(2, 4); };
    var selKey = kind === 'w' ? S.week : S.month;
    if (!periods.some(function (p) { return p.key === selKey; })) selKey = periods.length ? periods[periods.length - 1].key : null;
    if (kind === 'w') S.week = selKey; else S.month = selKey;
    var p = periods.filter(function (x) { return x.key === selKey; })[0];
    var el = $('#' + kind + '-out');
    if (!p) { el.innerHTML = ''; return; }
    var errs = reconcile(S.rows, S.opening, periods);
    var flags = flagMap(), pend = S.rows.filter(function (r) { return r.tanggal >= p.from && r.tanggal <= p.to && flags[r.id]; }).length;
    var net = p.masuk - p.keluar;
    el.innerHTML =
      '<div class="row"><label style="min-width:220px">' + t('pick') + '<select id="' + kind + '-sel">' +
      periods.map(function (x) { return '<option value="' + x.key + '"' + (x.key === selKey ? ' selected' : '') + '>' + lab(x) + '</option>'; }).join('') +
      '</select></label><span class="sp"></span><button class="btn2" data-csv="' + kind + '">' + t('csv') + '</button></div>' +
      '<div class="kpis"><div class="kpi"><span>' + t('sAwal') + '</span><b>' + fmtRp(p.saldoAwal) + '</b></div>' +
      '<div class="kpi in"><span>' + t('sMasuk') + '</span><b>' + fmtRp(p.masuk) + '</b></div>' +
      '<div class="kpi out"><span>' + t('sKeluar') + '</span><b>' + fmtRp(p.keluar) + '</b></div>' +
      '<div class="kpi ' + (net >= 0 ? 'in' : 'out') + '"><span>' + t('sNet') + '</span><b>' + fmtRp(net) + '</b></div>' +
      '<div class="kpi"><span>' + t('sAkhir') + '</span><b>' + fmtRp(p.saldoAkhir) + '</b></div></div>' +
      '<p>' + (errs.length ? '<span class="bad">' + t('recBad') + esc(errs.join(', ')) + '</span>' : '<span class="ok">' + t('recOk') + '</span>') +
      (pend ? ' <span class="bad">' + pend + ' ' + t('pending') + '</span>' : '') + '</p>' +
      '<div class="grid2"><div class="card"><h3>' + t('opTitle') + '</h3>' + catBars(p.keluarByCat, p.keluar) + '</div>' +
      '<div class="card"><h3>' + t('inTitle') + '</h3>' + catBars(p.masukByCat, p.masuk, '#1a7f37') + '</div></div>' +
      '<div class="card"><h3>' + t(kind === 'w' ? 'chartW' : 'chartM') + '</h3>' + chartSVG(periods, short, selKey) + '</div>' +
      '<div class="card"><h3>' + t(kind === 'w' ? 'allW' : 'allM') + '</h3><div class="tw"><table><thead><tr><th>' + t('thPeriod') + '</th><th class="n">' + t('thTx') +
      '</th><th class="n">' + t('sAwal') + '</th><th class="n">' + t('sMasuk') + '</th><th class="n">' + t('sKeluar') + '</th><th class="n">' + t('sAkhir') + '</th></tr></thead><tbody>' +
      periods.map(function (x) { return '<tr' + (x.key === selKey ? ' class="flag"' : '') + '><td>' + lab(x) + '</td><td class="n">' + x.count + '</td><td class="n">' + fmtRp(x.saldoAwal) +
        '</td><td class="n in">' + fmtRp(x.masuk) + '</td><td class="n out">' + fmtRp(x.keluar) + '</td><td class="n"><b>' + fmtRp(x.saldoAkhir) + '</b></td></tr>'; }).join('') +
      '</tbody></table></div></div>';
  }

  // ---------- exports ----------
  function txTable(rows, flags) {
    return sortRows(rows).map(function (r) {
      return [r.id, r.tanggal, r.keterangan, r.kategori, r.tipe === 'masuk' ? 'Masuk' : 'Keluar', r.tipe === 'masuk' ? r.jumlah : 0,
        r.tipe === 'keluar' ? r.jumlah : 0, r.metode, r.bukti || '', flags[r.id] ? flags[r.id].map(function (i) { return i.code; }).join(' ') : 'ok',
        weekStart(r.tanggal), r.tanggal.slice(0, 7)];
    });
  }
  var TXH = ['No', 'Tanggal', 'Keterangan', 'Kategori', 'Masuk/Keluar', 'Masuk (Rp)', 'Keluar (Rp)', 'Metode', 'Link Bukti', 'Status Bukti', 'Minggu', 'Bulan'];
  function reportCSV(kind) {
    var periods = kind === 'w' ? weeklyReport(S.rows, S.opening) : monthlyReport(S.rows, S.opening);
    var cats = Object.keys(CATS).filter(function (c) { return CATS[c].type === 'keluar'; });
    var h = ['Periode', 'Dari', 'Sampai', 'Saldo Awal', 'Kas Masuk', 'Kas Keluar', 'Saldo Akhir'].concat(cats.map(function (c) { return 'Biaya: ' + c; }));
    return toCSV(h, periods.map(function (p) {
      return [kind === 'w' ? weekLabel(p.key, 'id') : monthLabel(p.key, 'id'), p.from, p.to, p.saldoAwal, p.masuk, p.keluar, p.saldoAkhir]
        .concat(cats.map(function (c) { return p.keluarByCat[c] || 0; }));
    }));
  }
  function doCSV(kind) {
    var flags = flagMap();
    if (kind === 'tx') download('transaksi-harian.csv', toCSV(TXH, txTable(S.rows, flags)));
    if (kind === 'cek') download('cek-bukti.csv', toCSV(['No', 'Tanggal', 'Keterangan', 'Kategori', 'Jumlah (Rp)', 'Masalah'],
      checkRows(S.rows).map(function (f) { return [f.row.id, f.row.tanggal, f.row.keterangan, f.row.kategori, f.row.jumlah, f.issues.map(function (i) { return t('i_' + i.code) + (i.ids ? ' ' + i.ids.join('/') : ''); }).join('; ')]; })));
    if (kind === 'w') download('laporan-mingguan.csv', reportCSV('w'));
    if (kind === 'm') download('laporan-bulanan.csv', reportCSV('m'));
    if (kind === 'xlsx') download('admin-keuangan-xlsx-ready.csv', toCSV(TXH, txTable(S.rows, flags), ';'));
  }

  function render() {
    document.querySelectorAll('nav button').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-v') === S.view); });
    ['tx', 'cek', 'w', 'm'].forEach(function (v) { $('#v-' + v).classList.toggle('hide', v !== S.view); });
    renderCek();
    if (S.view === 'tx') renderTx();
    if (S.view === 'w' || S.view === 'm') renderReport(S.view);
  }

  function init() {
    load();
    var today = new Date(); var iso = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
    $('#f-date').value = iso;
    fillMethSelect(); applyStatic();
    $('#nav').addEventListener('click', function (e) { var v = e.target.closest('button'); if (v) { S.view = v.getAttribute('data-v'); render(); window.scrollTo(0, 0); } });
    $('#lang').addEventListener('click', function () { S.lang = S.lang === 'id' ? 'en' : 'id'; save(); applyStatic(); render(); });
    $('#f-type').addEventListener('change', fillCatSelect);
    $('#f-amt').addEventListener('input', function () { var n = parseAmount(this.value); this.value = n ? group3(n) : ''; });
    $('#opening').addEventListener('change', function () { S.opening = parseAmount(this.value); save(); render(); });
    $('#tx-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var r = { tanggal: $('#f-date').value, keterangan: $('#f-desc').value.trim(), tipe: $('#f-type').value, kategori: $('#f-cat').value,
        jumlah: parseAmount($('#f-amt').value), metode: $('#f-meth').value, bukti: $('#f-rec').value.trim() };
      if (!/^\d{4}-\d{2}-\d{2}$/.test(r.tanggal) || !r.keterangan || !(r.jumlah > 0)) { $('#f-err').textContent = t('errReq'); return; }
      $('#f-err').textContent = '';
      r.id = S.rows.reduce(function (m, x) { return Math.max(m, x.id); }, 1000) + 1;
      S.rows.push(r); save();
      $('#f-desc').value = ''; $('#f-amt').value = ''; $('#f-rec').value = '';
      S.fMonth = ''; render(); toast(t('saved') + ' #' + r.id);
    });
    $('#t-month').addEventListener('change', function () { S.fMonth = this.value; renderTx(); });
    $('#t-type').addEventListener('change', function () { S.fType = this.value; renderTx(); });
    $('#t-q').addEventListener('input', function () { S.q = this.value; renderTx(); });
    $('#reset').addEventListener('click', function () { S.rows = sampleRows(); S.opening = OPENING_DEFAULT; save(); render(); toast(t('resetDone')); });
    document.addEventListener('click', function (e) {
      var b = e.target.closest('[data-del],[data-rec],[data-csv]'); if (!b) return;
      if (b.hasAttribute('data-csv')) { doCSV(b.getAttribute('data-csv')); return; }
      if (b.hasAttribute('data-del')) { var id = +b.getAttribute('data-del'); S.rows = S.rows.filter(function (r) { return r.id !== id; }); save(); render(); toast(t('deleted') + ' #' + id); return; }
      if (b.hasAttribute('data-rec')) {
        var rid = +b.getAttribute('data-rec'), v = (document.querySelector('[data-rec-in="' + rid + '"]').value || '').trim();
        if (!v) return; S.rows.forEach(function (r) { if (r.id === rid) r.bukti = v; }); save(); render(); toast(t('recSaved') + ' #' + rid);
      }
    });
    document.addEventListener('change', function (e) {
      if (e.target.id === 'w-sel') { S.week = e.target.value; renderReport('w'); }
      if (e.target.id === 'm-sel') { S.month = e.target.value; renderReport('m'); }
    });
    render();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})(this);
