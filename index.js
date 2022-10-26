const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const courses = require("./Data/Courses.json");
const categories = require("./Data/Category.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Beautiful People");
});

//# Get All Courses :
app.get("/courses", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
