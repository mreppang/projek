const db = require('../config/db');
const bcrypt = require('bcrypt');







const tampilUserdata = async (req, res) => {
  try {
    const query = 'SELECT * FROM users';
    const [rows] = await db.execute(query);
    res.status(200).json({
      message: 'Berhasil mendapatkan semua data User',
      data: rows,
    });
  } catch (error) {
    throw error;
  }
};


const tampilUserdataById = async (req, res) => {
  try {
    const { id } = req.params;
    const query = 'SELECT * FROM users WHERE id = ?';
    const [rows] = await db.execute(query, [id]);
    res.status(200).json({
      message: `Berhasil mendapatkan data User dengan id ${id}`,
      data: rows,
    });
  } catch (error) {
    throw error;
  }
};

const tambahUserdata = async (req, res) => {
  try {
    const { nama: Nama, email: Email, password: Password, role: Role } = req.body;
  
    if (!Nama || !Email || !Password || !Role) {
      return res.status(400).json({
        status: 'error',
        message: 'Semua field harus diisi' });
    }
      const hashedPassword = await bcrypt.hash(Password, 10);

    const query = 'insert into users (Nama, Email, Password, Role) values (?, ?, ?, ?)';
    await db.execute(query, [Nama, Email, hashedPassword, Role]);

    return res.status(201).json({
      status: 'success',
      message: 'User berhasil didaftarkan',
    });


  } catch (error) {
    throw error;
  } 
};

const updateUserdata = async (req, res) => {
  try {
    const { id } = req.params;
    const { Nama, Email, Password, Role } = req.body;
    const query = 'UPDATE User SET Nama = ?, Email = ?, Password = ?, Role = ? WHERE id = ?';
    await db.execute(query, [Nama, Email, Password, Role, id]);
    return res.status(200).json({
      message: `Berhasil update data User dengan id ${id}`,
    });
  } catch (error) {
    throw error;
  }
};

const hapusUserdata = async (req, res) => {
  try {
    const { id } = req.params;
    const query = 'DELETE FROM User WHERE id = ?';
    await db.execute(query, [id]);
    return res.status(200).json({
      message: `Berhasil menghapus data User dengan id ${id}`,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  tampilUserdata,
  tampilUserdataById,
  tambahUserdata,
  updateUserdata,
  hapusUserdata,
};