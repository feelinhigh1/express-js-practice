import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 3000;
app.use(cookieParser());

// Define a simple route
app.get("/", (req, res) => {
  res.cookie("myCookie", "cookieValue"); // , { maxAge: 360000 } means expires in 6 minutes
  res.send("Hello Express");
});

app.get("/fetch", (req, res) => {
  console.log(req.cookies);
  res.send("API Called");
});

app.get("/remove-cookie", (req, res) => {
  res.clearCookie("myCookie");
  res.send("Cookie Removed");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
