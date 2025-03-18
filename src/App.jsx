import './App.css'
import {products as initialProducts} from './mocks/products.json'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { useState } from 'react'

function App() {
  const [products] = useState(initialProducts)
  const [filters,setFilters] = useState({
    category: 'laptops',
    minPrice:0
  }

  )

  //ESTO ES DE JUNIORSSSSSSSSSSSSSSS
  const filterProducts = (products)=>{

    return products.filter(product => {
      return (
      product.price >= filters.minPrice && (
        filters.category === 'all' ||
        product.category === filters.category
      ))
    })
  }

  const filteredProducts = filterProducts(products)
  return (
    <>
      <p>Shopping Cart</p>
      <Header changeFilters={setFilters}></Header>
      <Products products={filteredProducts}></Products>
    </>
  )
}

export default App
