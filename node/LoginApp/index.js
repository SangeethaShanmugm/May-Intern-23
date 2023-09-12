const express = require("express");
const app = express();
const PORT = 9000;
const db = require("./db");
const cors = require("cors");
app.use(cors());
const AuthController = require("./controller/authController");

app.use("/api/auth", AuthController);

app.listen(PORT, () => console.log("Server started on the port", PORT));

