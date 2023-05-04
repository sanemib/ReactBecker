import { createContext } from "react";

export const AddDotContext = createContext()


const AddDot = ({ children }) => {

    const addDot = (number) =>{
        return number.toLocaleString("es-ES")
      }
      

    return (
        <AddDotContext.Provider value={{ addDot }}>
            {children}
        </AddDotContext.Provider>
    )
}

export default AddDot;