import { Router } from "express";
import {getMenus,createMenu,deleteMenu,updateMenu,getMenuById,} from "./controllers/food.controller.js";

const router = Router();

router.get("/menu", getMenus);
router.post("/menu", createMenu);
router.delete("/menu/:id", deleteMenu);
router.put("/menu/:id", updateMenu);
router.get("/menu/:id", getMenuById);

export default router;
