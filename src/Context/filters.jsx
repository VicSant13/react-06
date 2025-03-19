import { createContext,useState } from "react";

//1.-Crear el contexto 
// Este es el que tenemos que consumir
export const FiltersContext = createContext();

///2 Crea el provider, para proveer el contexto a los componentes hijos
// Este es el que provee los datos.
export function FiltersProvider({children}){
    //se agrega el estado para que se pueda actualizar en el context
    const [filters,setFilters] = useState(
        {
            category:'all',
            minPrice:0
        }
    )
    return (
        <FiltersContext.Provider value={{ filters,setFilters }}>
            {children}
        </FiltersContext.Provider>
    )
}