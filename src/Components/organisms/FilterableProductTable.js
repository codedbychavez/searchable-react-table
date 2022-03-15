import { useState } from "react";
import ProductTable from "../molecules/ProductTable"
import SearchBar from "../molecules/SearchBar"

const FilterableProductTable = (props) => {
    const [filterText, setFilterText] = useState("")
    const [isStockOnly, setIsStockOnly] = useState(false)

    const products = props.products;
    return (
        <>
            <SearchBar filterText={filterText} />
            <ProductTable isStockOnly={isStockOnly} products={products} />
        </>
    )
}

export default FilterableProductTable