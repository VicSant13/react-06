import './App.css'
import {products as initialProducts} from './mocks/products.json'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Products } from './components/Products'
import { useFilters } from './hooks/usefilters.js'
import { Cart } from './components/Cart.jsx'
import {CartProvider} from './Context/cart.jsx'


function App() {
  //useState
  //const [products] = useState(initialProducts) 
  //custom hook 
  const {filterProducts,filters} = useFilters()
  
  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>     
      <Header/>
      <Cart/>
      <Products products={filteredProducts}></Products>
      <Footer filters={filters}></Footer>
    </CartProvider>
  )
}

export default App
