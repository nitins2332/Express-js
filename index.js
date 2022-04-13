const express = require("express");
const res = require("express/lib/response");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello Nitins</h1>");
});

// app.get("/about", (req, res) => {
//   res.send("<h1>This is about</h1>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>this is contact</h1>");
// });

app.listen(port, () => {
  console.log(`Server is working on port: ${port}`);
});
