
import ProductRow from "./ProductRow";
function ProductTable(props){
    const {products} = props;
    return (
        <div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product=>{
                            return (
                                    <ProductRow key={product.id} product={product}/>
                            )
                        })
                    }  
                </tbody>
            </table>
        </div>
    );
}

export default ProductTable;