import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const app = express();
const PORT = 3000;

app.use(express.json());

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello Express");
});

const users = [];

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({
    username,
    hashedPassword,
  });
  res.send("User registered");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user || !(await bcrypt.compare(password, user.hashedPassword))) {
    return res.send("Invalid credentials");
  }
  const token = jwt.sign({ username }, "test#secret");
  res.json({ token });
});

app.get("/dashboard", (req, res) => {
  try {
    const token = req.header("Authorization");
    const decodedToken = jwt.verify(token, "test#secret");
    if (decodedToken.username) {
      return res.send(`Welcome to your dashboard, ${decodedToken.username}`);
    } else {
      res.send("Access Denied");
    }
    res.send(`Welcome to your dashboard, ${decodedToken.username}`);
  } catch (err) {
    res.send("Invalid Token");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
