const express = require("express");
const mongoose = require("mongoose");
const cors=require('cors')
const app = express();
const PORT = 5000;
const Form = require("./models/form.model");

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.post("/addData", async (req, res) => {
  const data = req.body;
  try {
    const result = await Form.create(data);
    if (result) {
      res.json(
        { success: true, message: "Data stored successfully", data: result },
        { status: 200 }
      );
    } else {
      res.json(
        { success: true, message: "Failed to store data" },
        { status: 200 }
      );
    }
  } catch (e) {
    console.log(e.message);
    res.send(e.message);
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  mongoose
    .connect("mongodb://localhost:27017/ReactHookForm")
    .then(() => {
      console.log("Mongoose Connected Succesfully");
    })
    .catch((e) => {
      console.log(e);
    });
});
