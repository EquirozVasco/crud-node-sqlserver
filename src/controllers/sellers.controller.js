import { getConnection, querys, sql } from "../services";

export const getSellers = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllSellers);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewSeller = async (req, res) => {
  const { name, adress } = req.body;

  // validating
  if (name == null || adress == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("adress", sql.VarChar, adress)
      .query(querys.addNewSeller);

    res.json({ name, adress });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getSellerById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("sellerId", req.params.id)
      .query(querys.getSellerById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteSellerById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("sellerId", req.params.id)
      .query(querys.deleteSeller);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateSellerById = async (req, res) => {
  const { name, adress } = req.body;

  // validating
  if (name == null || adress == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("adress", sql.VarChar, adress)
      .input("sellerId", req.params.id)
      .query(querys.updateSellerById);
    res.json({ name, adress });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
