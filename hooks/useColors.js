import React, { useState, useEffect } from "react";
import { BASE_URL } from "../setings/config";

const useColors = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const getColors = async () => {
      const url = `${BASE_URL}/colors`
      const response = await fetch(url);
      const data = await response.json();
      setColors(data);
    };
    getColors();
  }, []);

  return colors;
};

export default useColors;