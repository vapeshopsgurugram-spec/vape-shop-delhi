const express = require("express");
const router = express.Router();
const path = require("path");

// Load data directly from the central data file
const {
  PRODUCTS,
  CATEGORIES,
  STORE_INFO,
  Gurgaon_LOCATIONS,
} = require(path.join(__dirname, "../../data/products.js"));

// GET all products with filtering
router.get("/", (req, res) => {
  const { category, search, featured } = req.query;
  let result = [...PRODUCTS];

  if (category) {
    result = result.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (search) {
    const q = search.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.flavors.some((f) => f.toLowerCase().includes(q))
    );
  }

  if (featured === "true") {
    result = result.filter((p) => p.isFeatured);
  }

  res.json({
    success: true,
    count: result.length,
    data: result,
  });
});

// GET single product by slug
router.get("/:slug", (req, res) => {
  const { slug } = req.params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.json({
    success: true,
    data: product,
  });
});

// GET categories
router.get("/meta/categories", (req, res) => {
  res.json({
    success: true,
    data: CATEGORIES,
  });
});

// GET delivery zones
router.get("/meta/locations", (req, res) => {
  res.json({
    success: true,
    data: Gurgaon_LOCATIONS,
  });
});

// GET store info
router.get("/meta/store", (req, res) => {
  res.json({
    success: true,
    data: STORE_INFO,
  });
});

module.exports = router;
