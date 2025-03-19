import { useState,useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/usefilters'


// la funcion Filters recibe
// la función {setState} para poder cambiar el estado del componente padre
export function Filters (){
    const {filters,setFilters} = useFilters()

    const [minPrice,setMinPrice] = useState(0)

    const minPriceId = useId()
    const categoryId = useId()

    const handleChangeMinPrice = (event)=>{
        //Smells bad...
        //Dos fuentes de la verdad
        //setMinPrice(event.target.value)
        setFilters(prevState => ({
            ...prevState,
            minPrice:event.target.value
        }))
    }

    const handleChangeCategory = (event) =>{

        setFilters(prevState => ({
            ...prevState,
            category:event.target.value
        }))
    }
    return (
        <section className='filters'>

            <div>
                <label htmlFor={minPriceId}>Precio</label>
                <input 
                    type="range" 
                    id = {minPriceId}
                    min='0' 
                    max='1000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryId}>Categoría</label>
                <select id={categoryId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portátiles</option>
                    <option value="smartphones">Celúlares</option>
                </select>
            </div>
        </section>
    )
}