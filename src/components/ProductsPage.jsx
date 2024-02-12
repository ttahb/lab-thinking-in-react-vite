import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
function ProductsPage(){
    const [products, setProducts] = useState(jsonData);
    const [filteredProducts, setFilteredProducts] = useState(jsonData);
    const [query, setQuery] = useState('');
    const [check, setCheck] = useState(false);

    const filterItems = event => {
        const query = event.target.value;
        const filteredProducts = products.filter(product =>{
            return product.name.toLowerCase().startsWith(query.toLowerCase()) && (check? product.inStock:true);
        } );

        setQuery(query); //setting state is asynchronous.
        setFilteredProducts(filteredProducts);
    }

    const showOnlyInStock = event => {
        const isChecked = event.target.checked;
        const inStockProducts = products.filter(product => { 
                return (isChecked? product.inStock:true) && product.name.toLowerCase().startsWith(query.toLowerCase());
        })
        setFilteredProducts(inStockProducts);
        setCheck(isChecked); //setting state is asynchronous.
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