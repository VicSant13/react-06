import './App.css'
import {products as initialProducts} from './mocks/products.json'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Products } from './components/Products'
import { useState } from 'react'
import { useFilters } from './hooks/usefilters.js'



function App() {
  //useState
  const [products] = useState(initialProducts) 
  //custom hook 
  const {filterProducts,filters} = useFilters()
  
  const filteredProducts = filterProducts(products)

  return (
    <>     
      <Header/>
      <Products products={filteredProducts}></Products>
      <Footer filters={filters}></Footer>
    </>
  )
}

export default App
