import { Router } from "express";
import {
  getCustomer,
  createNewCustomer,
  getCustomerById,
  deleteCustomerById,
  updateCustomerById,
} from "../controllers/customers.controller";

const router = Router();

router.get("/customers", getCustomer);
router.post("/customers", createNewCustomer);
router.get("/customers/:id", getCustomerById);
router.delete("/customers/:id", deleteCustomerById);
router.put("/customers/:id", updateCustomerById);

export default router;
