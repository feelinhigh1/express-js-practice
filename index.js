import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello Express");
});

// Get all product

app.get("/api/products", (req, res) => {
  const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ];
  res.status(200).json({ products });
});

// Get a single product by ID

app.get("/api/products/:id", (req, res) => {
  const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ];
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.status(200).json({ product });
});

// Create a new product

app.post("/api/products", (req, res) => {
  const newProduct = req.body;
  newProduct.id = Date.now(); // Simple ID generation
  res.status(201).json({ message: "Product created", product: newProduct });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
