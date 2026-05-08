const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {

  const products = [

    // ================= MEN =================

    {
      name: "Men T-Shirt",
      price: 499,
      category: "Mens Wear",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300"
    },

    {
      name: "Formal Shirt",
      price: 899,
      category: "Mens Wear",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300"
    },

    {
      name: "Blue Jeans",
      price: 1299,
      category: "Mens Wear",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300"
    },

    {
      name: "Mens Jacket",
      price: 2499,
      category: "Mens Wear",
      image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=300"
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
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300"
    },

    {
      name: "Handbag",
      price: 1499,
      category: "Women Wear",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300"
    },

    // ================= ELECTRONICS =================

    {
      name: "Wireless Headphones",
      price: 2999,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300"
    },

    {
      name: "Smart Watch",
      price: 3999,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300"
    },

    {
      name: "Gaming Mouse",
      price: 999,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=300"
    },

    {
      name: "Bluetooth Speaker",
      price: 2499,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=300"
    },

    // ================= KITCHEN =================

    {
      name: "Mixer Grinder",
      price: 3499,
      category: "Kitchen",
      image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=300"
    },

    {
      name: "Cookware Set",
      price: 4599,
      category: "Kitchen",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=300"
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
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300"
    },

    {
      name: "Sneakers",
      price: 2499,
      category: "Shoes",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300"
    },

    // ================= BEAUTY =================

    {
      name: "Lipstick",
      price: 499,
      category: "Beauty",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300"
    },

    {
      name: "Perfume",
      price: 1999,
      category: "Beauty",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300"
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