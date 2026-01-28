const getAdminPage = (req, res) => {
  console.log('Admin mengakses halaman admin');
  
  res.send(`
    Halaman Admin Perpustakaan
    Selamat datang, Admin! Anda memiliki akses penuh ke sistem.
    
      Kelola Buku
      Kelola Anggota
      Laporan Peminjaman
    
  `);
};

module.exports = { getAdminPage };