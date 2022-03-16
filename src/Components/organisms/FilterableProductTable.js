import { useState } from "react";
import ProductTable from "../molecules/ProductTable"
import SearchBar from "../molecules/SearchBar"

const FilterableProductTable = (props) => {
    const [filterText, setFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);

    const handleFilterTextChange = (filterText) => {
        setFilterText(filterText);
    }

    const handleInStockChange = (inStockOnly) => {
        setInStockOnly(inStockOnly);
    }



    const products = props.products;
    return (
        <>
            <SearchBar 
            filterText={filterText} 
            inStockOnly={inStockOnly}
            onFilterTextChange={handleFilterTextChange} 
            onInStockChange={handleInStockChange}/>

            <ProductTable 
            filterText={filterText} 
            inStockOnly={inStockOnly} 
            products={products} />
        </>
    )
}

export default FilterableProductTable