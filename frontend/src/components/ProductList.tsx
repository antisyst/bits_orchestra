import React, { useEffect, useState } from "react";
import api from "../fake-api";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/api/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h3 className="text-xl font-semibold mb-2">
        The Innovation Leader in Luxury Vinyl Plank
      </h3>
      <h2 className="text-2xl font-bold mb-4">Let's get started</h2>
      {loading ? (
        <p className="text-gray-500">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: Product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer"
            >
              <img
                src={product.img}
                alt={product.name}
                className="object-cover w-full h-40 rounded-md mb-4"
              />
              <div className="text-lg font-bold mb-2">{product.name}</div>
              <div className="text-gray-700">${product.price}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
