import React, { useState, useEffect } from "react";
import { BASE_URL } from "../setings/config";

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const url = `${BASE_URL}/categories`;
      const response = await fetch(url);
      const data = await response.json();
      setCategories(data);
    };
    getCategories();
  }, []);

  return categories;
};

export default useCategories;
