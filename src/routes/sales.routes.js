import { Router } from "express";
import {
  getSales,
  createNewSale,
  getSaleById,
  deleteSaleById,
  updateSaleById,
} from "../controllers/sales.controller";

const router = Router();

router.get("/sales", getSales);
router.post("/sales", createNewSale);
router.get("/sales/:id", getSaleById);
router.delete("/sales/:id", deleteSaleById);
router.put("/sales/:id", updateSaleById);

export default router;
