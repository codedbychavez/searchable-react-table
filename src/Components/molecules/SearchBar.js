const SearchBar = (props) => {
    
  const handleFilterTextChange = (event) => {
    props.onFilterTextChange(event.target.value);
  };

  const handleInStockChange = (event) => {
    props.onInStockChange(event.target.checked);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={props.filterText}
        onChange={handleFilterTextChange}
      />
      <p>
        <input
          type="checkbox"
          checked={props.inStockOnly}
          onChange={handleInStockChange}
        />{" "}
        Only show products in stock
      </p>
    </form>
  );
};

export default SearchBar;
