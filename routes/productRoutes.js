const express = require("express");
const router = express.Router();

// ✅ REAL PRODUCTS WITH IMAGE LINKS
router.get("/", (req, res) => {
  res.json([
    {
      name: "Casual Shirt",
      price: 499,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
      name: "Running Shoes",
      price: 1299,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
      name: "Headphones",
      price: 999,
      image: "https://www.shopyvision.com/wp-content/uploads/2023/07/Infinity-Glide-4000-Wireless-Over-Ear-Headphone.jpg"
    }
  ]);
});

module.exports = router;