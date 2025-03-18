import { useState } from 'react'
import './Filters.css'


// la funcion Filters recibe
// la función {setState} para poder cambiar el estado del componente padre
export function Filters ({onChange}){
    const [minPrice,setMinPrice] = useState(null)

    const handleChangeMinPrice = (event)=>{
        //Smells bad...
        //Dos fuentes de la verdad
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice:event.target.value
        }))
    }

    const handleChangeCategory = (event) =>{

        onChange(prevState => ({
            ...prevState,
            category:event.target.value
        }))
    }
    return (
        <section className='filters'>
            <div>
                <label htmlFor="price">Precio</label>
                <input 
                    type="range" 
                    id ='price' 
                    min='0' 
                    max='1000'
                    onChange={handleChangeMinPrice}
                />
                <span>${minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Categoría</label>
                <select id='category' onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portátiles</option>
                    <option value="smartphones">Celúlares</option>
                </select>
            </div>
        </section>
    )
}