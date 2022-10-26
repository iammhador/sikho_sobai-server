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

//# Get Single Course By Using ID :
app.get("/courses/:id", (req, res) => {
  const courseId = req.params.id;
  const singleCourse = courses.find((course) => course.id === courseId);
  res.send(singleCourse);
});

//# Get All Category :
app.get("/category", (req, res) => {
  res.send(categories);
});

//# Get Category All Courses:
app.get("/category/:id", (req, res) => {
  const categoryId = req.params.id;
  const selectCategory = courses.filter(
    (singleCourse) => singleCourse.category_id === categoryId
  );
  res.send(selectCategory);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
