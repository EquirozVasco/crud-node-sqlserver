import { Router } from "express";
import {
  getSellers,
  createNewSeller,
  getSellerById,
  deleteSellerById,
  updateSellerById,
} from "../controllers/sellers.controller";

const router = Router();

router.get("/sellers", getSellers);
router.post("/sellers", createNewSeller);
router.get("/sellers/:id", getSellerById);
router.delete("/sellers/:id", deleteSellerById);
router.put("/sellers/:id", updateSellerById);

export default router;
