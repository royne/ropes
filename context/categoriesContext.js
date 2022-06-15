import React, { useState, useEffect, useContext, useMemo } from "react";
import {BASE_URL} from '../setings/config'

const CategoriesContext = React.createContext()

export function CategoriesProvider(props) {
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    const chargeCategories = async () => {
      try {
        const url = `${BASE_URL}/categories?parents=true`;
        const response = await fetch(url);
        const data = await response.json();
        setCategories(data)
      } catch (error) {
        console.log(error)
      }
    }
    chargeCategories()
  }, [])

  const value = useMemo(() => {
    return categories
  }, [categories])

  return <CategoriesContext.Provider value={value} {...props} />
}

export function useMenu() {
  const context = useContext(CategoriesContext)
  if (!context) {
    throw new Error('no exite el provider para el componente')
  }
  return context
}