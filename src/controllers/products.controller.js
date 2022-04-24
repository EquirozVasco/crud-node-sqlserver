import { getConnection, querys, sql } from "../services";

export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllProducts);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewProduct = async (req, res) => {
  const { name, description } = req.body;
  let { price } = req.body;

  // validating
  if (description == null || name == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  if (price == null) price = 0;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.Text, description)
      .input("price", sql.Int, price)
      .query(querys.addNewProduct);

    res.json({ name, description, price });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getProductById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("productId", req.params.id)
      .query(querys.getProducById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("productId", req.params.id)
      .query(querys.deleteProduct);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateProductById = async (req, res) => {
  const { description, name, price } = req.body;

  // validating
  if (description == null || name == null || price == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.Text, description)
      .input("price", sql.Int, price)
      .input("productId", req.params.id)
      .query(querys.updateProductById);
    res.json({ name, description, price });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
