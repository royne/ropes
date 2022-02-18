import React, { useState, useEffect } from "react";
import { BASE_URL } from "../setings/config";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const url = `${BASE_URL}/products`;
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    };
    getProducts();
  }, []);

  return products;
};

export default useProducts;
