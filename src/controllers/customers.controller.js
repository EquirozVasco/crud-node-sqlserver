import { getConnection, querys, sql } from "../services";

export const getCustomer = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllCustomers);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewCustomer = async (req, res) => {
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
      .query(querys.addNewCustomer);

    res.json({ name, adress });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getCustomerById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("customerId", req.params.id)
      .query(querys.getCustomerById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteCustomerById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("customerId", req.params.id)
      .query(querys.deleteCustomer);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateCustomerById = async (req, res) => {
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
      .input("customerId", req.params.id)
      .query(querys.updateCustomerById);
    res.json({ name, adress });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
