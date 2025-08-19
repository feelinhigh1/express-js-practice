import express from "express";

const app = express();
const PORT = 8000;

app.use("/public", express.static("public")); //http://localhost:8000/public/example.txt
app.use("/images", express.static("images")); //http://localhost:8000/images/abc.jpg

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
