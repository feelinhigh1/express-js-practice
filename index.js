import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "sample-secret",
    resave: false, // don't save session if unmodified
    saveUninitialized: true,
  })
);

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello Express");
});

const users = [];

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  users.push({
    username,
    password,
  });
  res.send("User registered");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user || password !== user.password) {
    return res.send("Invalid credentials");
  }
  req.session.user = user;
  res.send("User Logged In");
});

app.get("/dashboard", (req, res) => {
  if (!req.session.user) {
    return res.status(401).send("Please login to access this page");
  }
  res.send(`Welcome to your dashboard, ${req.session.user.username}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
