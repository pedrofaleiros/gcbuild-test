const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "Ok 2.0" });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
