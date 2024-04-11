import ProductContext from "./ProductContext";
import { useContext } from "react";

const ProductContextProvider = (props) => {
    const productCtx = useContext(ProductContext);

    return (
        <ProductContext.Provider value={productCtx}>
            {props.children} 
        </ProductContext.Provider >
    )
}

export default ProductContextProvider;