const db = require('../config/db');

const tampilData = async (req, res,next) => {
  try {
    const query = 'SELECT * FROM products';
    const [rows] = await db.execute(query);
    res.status(200).json({ 
      message: 'Berhasil mendapatkan produk',
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

const tampilDataById = async (req, res,next) => {
  try {
    const { id } = req.params;  
    const query = 'SELECT * FROM products WHERE id = ?';
    const [rows] = await db.execute(query, [id]);
    res.status(200).json({ 
      message: `Berhasil mendapatkan produk dengan id ${id}`,
      data: rows,
    });
  } catch (error) {
    next(error);
  } 
};

const tambahData = async (req, res,next) => {
  try {
    const { nama } = req.body; 
    const query = 'INSERT INTO products (nama) value (?) ';
    await db.execute(query, [nama]);
    res.status(201).json({
      message: 'Berhasil menambahkan data',
    })
  } catch (error) {
    next(error);
  } 
};

const updateData = async (req, res,next) => {
  try {
    const { id } = req.params;
    const { nama } = req.body; 
    const query = 'UPDATE products SET nama = ? WHERE id = ?';
    await db.execute(query, [nama, id]);
    return res.status(200).json({
      message: `Berhasil update data produk dengan id ${id}`,
    });
  }
  catch (error) {
    next(error);
  }
};

const hapusData = async (req, res,next) => {
  try {
    const { id } = req.params;
    const query = 'DELETE FROM products WHERE id = ?';
    await db.execute(query, [id]);
    return res.status(200).json({
      message: `Berhasil menghapus data produk dengan id ${id}`,
    });
  }
  catch (error) {
    next(error);
  }
};



module.exports = {
  tampilData,
  tampilDataById,
  tambahData,
  updateData,
  hapusData
};