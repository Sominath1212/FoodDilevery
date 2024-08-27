import { createContext } from "react";
import { foodList, categories } from "../components/Metadata";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const contextvalue = {
        foodList, categories
    }
    return(
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider