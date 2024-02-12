import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
function ProductsPage(){
    const [products, setProducts] = useState(jsonData);
    const [filteredProducts, setFilteredProducts] = useState(jsonData);
    const filterItems = event => {
        const filteredProducts = products.filter(product =>{
            return product.name.toLowerCase().startsWith(event.target.value.toLowerCase());
        } );
        setFilteredProducts(filteredProducts);
    }

    const showOnlyInStock = event => {
        if(event.target.checked){
            const inStockProducts = products.filter(product => product.inStock)
            setFilteredProducts(inStockProducts);
        } else {
            setFilteredProducts(products);
        }
    };

    return (
        <div className="flex flex-col">
            <h1>IronStore</h1>
            <SearchBar filterItems={filterItems} showOnlyInStock={showOnlyInStock}/>
            <ProductTable products={filteredProducts}/>
        </div>
    );
}

export default ProductsPage;