const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../frontend")));

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Message received:", name, email, message);
  res.json({ message: "Thank you for your message, " + name + "!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
