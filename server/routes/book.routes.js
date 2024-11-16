import { Router } from "express";
import { makebooking, getBookings } from "./controllers/book.controller.js";

const router = Router();

    router.post("/booking", makebooking)
    router.get("/booking", getBookings )

export default router;