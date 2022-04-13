const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
// const { use } = require("express/lib/application");
const router = require("./userRoutes");

const app = express();
const port = 4000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/abi/v1", router);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
  // res.json({
  //   name: "Abhi",
  //   email: "sample@gmail.com",
  //   password: "shiva",
  // });
  // res.sendFile(path.join(__dirname + "/index.html"));
});

// app.post("/abi/v1/register");

// app.post("/abi/v1/login", (req, res) => {
//   res.send(
//     `<h1>Done Mr.${req.body.name}</h1> <h2>Your Email is ${req.body.email}</h2>`
//   );
//   console.log(req.body);
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>Hello about</h1>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>Hello contact </h1>");
// });

app.listen(port, () => {
  console.log(`Server is working on port ${port}`);
});
