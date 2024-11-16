import express from "express";
import { config } from "dotenv";
import cors from 'cors';
import usersRouter from "./routes/users.routes.js";
import menucreateRouter from "./routes/foods.routes.js";
import menugetRouter from "./routes/foods.routes.js";
import menudeleteRouter from "./routes/foods.routes.js";
import menuupdateRouter from "./routes/foods.routes.js";
import menugetidRouter from "./routes/foods.routes.js";
import makebooking from "./routes/book.routes.js"
import getBookings from "./routes/book.routes.js";
import datainfo from "../sizzle-and-spice/src/Pages/data.js"
config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PATCH", "DELETE"],
  credentials:true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/api/users", usersRouter);
app.post("/api/menu", menucreateRouter);
app.get("/api/menu", menugetRouter);
app.delete("/api/menu", menudeleteRouter);
app.put("/api/menu", menuupdateRouter);
app.get("/api/menu", menugetidRouter);
app.post("/api/table", makebooking);
app.get("/api/table", getBookings);



const addIdsToData = (data) => {
  return data.map((item, index) => ({
    ...item,
    id: index + 1,
  }));
};

app.get("/api/menu/foods", (req, res) => {
  const dataWithIds = addIdsToData(datainfo);
  res.json({ menu: dataWithIds });
});

app.post("/api/menu/foods", (req, res) => {
  res.status(201).send("Data added successfully");
});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000...");
});

