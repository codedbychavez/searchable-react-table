import FilterableProductTable from './Components/organisms/FilterableProductTable';
import Products from './data/data';

function App() {
  const products = Products;
  return (
      <FilterableProductTable products={products} />
  );
}

export default App;
