import { getConnection, querys, sql } from "../services";

export const getSales = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllSales);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewSale = async (req, res) => {
  const { productId, customerId, sellerId } = req.body;

  // validating
  if (productId == null || customerId == null || sellerId == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("productId", sql.Int, productId)
      .input("customerId", sql.Int, customerId)
      .input("sellerId", sql.Int, sellerId)
      .query(querys.addNewSale);

    res.json({ productId, customerId, sellerId });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getSaleById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("saleId", req.params.id)
      .query(querys.getSaleById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteSaleById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("saleId", req.params.id)
      .query(querys.deleteSale);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateSaleById = async (req, res) => {
  const { productId, customerId, sellerId } = req.body;

  // validating
  if (productId == null || customerId == null || sellerId == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("productId", sql.Int, productId)
      .input("customerId", sql.Int, customerId)
      .input("sellerId", sql.Int, sellerId)
      .input("saleId", req.params.id)
      .query(querys.updateSaleById);
    res.json({ productId, customerId, sellerId });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
