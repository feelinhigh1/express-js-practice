import express from "express";

const app = express();
const PORT = 8000;

//Set EJS as the view engine
app.set("view engine", "ejs");

// Define a simple route
app.get("/", (req, res) => {
  const userName = "Sushan Poudel";
  res.render("index", { userName });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
