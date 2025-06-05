import React from "react";

const HomeCard = () => {
  const products = [
    {
      id: 1,
      category: "Clothes",
      name: "Cotton T-Shirt",
      description: "Comfortable unisex cotton t-shirt, available in multiple colors.",
      price: 399,
      brand: "FabWear",
      size: "M",
      inStock: true,
    },
    {
      id: 2,
      category: "Clothes",
      name: "Denim Jeans",
      description: "Slim-fit blue denim jeans with a classic look.",
      price: 999,
      brand: "DenimCo",
      size: "32",
      inStock: true,
    },
    {
      id: 3,
      category: "Food",
      name: "Basmati Rice (5kg)",
      description: "Premium long-grain Basmati rice for daily cooking.",
      price: 550,
      brand: "Daawat",
      expiryDate: "2025-12-31",
      inStock: true,
    },
    {
      id: 4,
      category: "Food",
      name: "Sunflower Oil (1L)",
      description: "Refined sunflower oil for healthy cooking.",
      price: 180,
      brand: "Fortune",
      expiryDate: "2026-03-10",
      inStock: true,
    },
    {
      id: 5,
      category: "Medicine",
      name: "Paracetamol 500mg",
      description: "Used to treat fever and mild pain.",
      price: 30,
      brand: "Calpol",
      expiryDate: "2026-01-01",
      inStock: true,
      prescriptionRequired: false,
    },
    {
      id: 6,
      category: "Medicine",
      name: "Cough Syrup (100ml)",
      description: "Relieves dry and wet cough.",
      price: 90,
      brand: "Benadryl",
      expiryDate: "2025-11-15",
      inStock: true,
      prescriptionRequired: false,
    },
    {
      id: 7,
      category: "Others",
      name: "Dishwash Liquid (750ml)",
      description: "Powerful grease removal dishwash liquid with lemon fragrance.",
      price: 120,
      brand: "Vim",
      inStock: true,
    },
    {
      id: 8,
      category: "Others",
      name: "Toilet Paper Roll (Pack of 4)",
      description: "Soft, 2-ply toilet tissue rolls for daily hygiene.",
      price: 99,
      brand: "SoftCare",
      inStock: true,
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center py-6">
      {products.map((product) => (
        <div key={product.id} className="card bg-base-100 w-80 shadow-md">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt={product.name}
              className="h-48 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {product.name}
              <div className="badge badge-secondary">₹{product.price}</div>
            </h2>
            <p className="text-sm text-gray-600">{product.description}</p>
            <div className="card-actions justify-between mt-4">
              <div className="badge badge-outline">{product.category}</div>
              <div className="badge badge-outline">{product.brand}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCard;
