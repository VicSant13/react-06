import { useContext } from "react"
import { FiltersContext } from '../Context/filters'

export function useFilters(){

    const {filters,setFilters} = useContext(FiltersContext)
    //const setFilters=()=>{}
   
   
     //ESTO ES DE JUNIORSSSSSSSSSSSSSSS filtross
     const filterProducts = (products)=>{
       return products.filter(product => {
         return (
         product.price >= filters.minPrice && (
           filters.category === 'all' ||
           product.category === filters.category
         ))
       })
     }
   
     return {filterProducts,setFilters,filters}
   }