import "dotenv/config";
import express from "express";
import cors from "cors";

import router from "./Routes/router.js";
// import "./DatabaseConnection/db.js";
const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Server started at port no : ${port}`);
});
