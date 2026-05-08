const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {

  const products = [

    // ================= MEN =================

    {
      name: "Men T-Shirt",
      price: 499,
      category: "Mens Wear",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },

    {
      name: "Formal Shirt",
      price: 899,
      category: "Mens Wear",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
    },

    {
      name: "Blue Jeans",
      price: 1299,
      category: "Mens Wear",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d"
    },

    {
      name: "Mens Jacket",
      price: 2499,
      category: "Mens Wear",
      image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234"
    },

    // ================= WOMEN =================

    {
      name: "Women Kurti",
      price: 799,
      category: "Women Wear",
      image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=300"
    },

    {
      name: "Women Saree",
      price: 1999,
      category: "Women Wear",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c"
    },

    {
      name: "Handbag",
      price: 1499,
      category: "Women Wear",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3"
    },

    // ================= ELECTRONICS =================

    {
      name: "Wireless Headphones",
      price: 2999,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },

    {
      name: "Smart Watch",
      price: 3999,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },

    {
      name: "Gaming Mouse",
      price: 999,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db"
    },

    {
      name: "Bluetooth Speaker",
      price: 2499,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1585386959984-a41552231658"
    },

    // ================= KITCHEN =================

    {
      name: "Mixer Grinder",
      price: 3499,
      category: "Kitchen",
      image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b"
    },

    {
      name: "Cookware Set",
      price: 4599,
      category: "Kitchen",
      image: "https://images.unsplash.com/photo-1584990347449-a2d4f2a2d6c2"
    },

    {
      name: "Dinner Set",
      price: 2999,
      category: "Kitchen",
      image: "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?w=300"
    },

    // ================= SHOES =================

    {
      name: "Running Shoes",
      price: 1999,
      category: "Shoes",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },

    {
      name: "Sneakers",
      price: 2499,
      category: "Shoes",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772"
    },

    // ================= BEAUTY =================

    {
      name: "Lipstick",
      price: 499,
      category: "Beauty",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa"
    },

    {
      name: "Perfume",
      price: 1999,
      category: "Beauty",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601"
    }

  ];

  // 🟢 MAKE 200 PRODUCTS AUTOMATICALLY
  const bigProducts = [];

  for(let i = 0; i < 2; i++){

    products.forEach(product => {

      bigProducts.push({
        ...product,
        name: product.name + " " + (i + 1)
      });

    });

  }

  res.json(bigProducts);

});

module.exports = router;