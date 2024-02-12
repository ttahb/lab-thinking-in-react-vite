function ProductRow({ product }) {

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th  scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" style={{color: product.inStock? 'black': 'red'}}>{product.name}</th>
            <td  scope="row" className="px-6 py-4">{product.price}</td>
        </tr>

    )
}

export default ProductRow;