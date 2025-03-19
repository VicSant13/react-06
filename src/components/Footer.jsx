import { useFilters } from '../hooks/usefilters';
import './Footer.css';
export function Footer(){
    //hace uso del contexto por medio del custom hook
    const {filters}=useFilters()
    return (
        <footer className='footer'>
            {
                JSON.stringify(filters,null,2)
            }
         {/*   <h4>Prueba Técnica de React *-</h4>
            <span>@vicSant13</span>
            <h5>Shopping Cart con useContext & useReducer</h5>
            <p>© 2025 Shopping Cart</p>*/}
        </footer>
    )
}