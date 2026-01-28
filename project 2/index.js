const express = require('express');

const app = express();

app.get('/home', (req, res) => {
   res.send('selamat datang di API SMK TELKOM MAKASSAR');
});


app.get('/jurusan', (req, res) => {
   res.send(`Daftar Jurusan
                - RPL
                - TKJ
                - DKV
                - Multimedia
                - DBP`);
});

app.get('/prodi/:nama', (req, res) => {
   const namaJurusan = req.params.nama;
   res.send(`Anda sedang melihat jurusan ${namaJurusan}`);
});

app.get('/Berita/:kategori/:judul', (req, res) => {
  const kategori = req.params.kategori;
  const judul = req.params.judul;

   res.send(`Kategori Berita : ${kategori}
                Judul Berita    : ${judul}
`);
});

app.get('/search', (req, res) => {
  const query = req.query.q;
  
  if (query.length == 0) {
    return res.send('Keyword tidak boleh kosong');
  }

   res.send(`Hasil pencarian untuk kata kunci: ${query}`);
});

app.get('/guru/:nama', (req, res) => {
   const namaSiswa = req.params.nama;
   res.send(`Menampilkan data siswa: ${namaSiswa}`);
});

app.post('/siswa', (req, res) => {
   res.send('Data siswa berhasil ditambahkan');
});

app.get('/guru/:nama/:mapel', (req, res) => {
   const namaGuru = req.params.nama;
   const mapel = req.params.mapel;
   
   res.send(`Murid ${namaGuru} mengajar mata pelajaran ${mapel}`);
});

app.use((req, res) => {
   res.status(404).send('Halaman tidak ditemukan (404)');
});


app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});

