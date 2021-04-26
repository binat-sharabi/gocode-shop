import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
//import Toggle from './Components/Toggle';


function App() {
  const [productList, SetProductList] = useState([]);

  const [filterList, setFilterList] = useState(productList);


  const groupBy = (xs, key) => xs.reduce((rv, x) => {
    (rv[x[key]] = true || []);
    return rv;
  }, {});


  const categories = Object.keys(groupBy(productList, 'category'));

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => SetProductList(data))
  }, []);

  //const [category, setCategory] = useState("AllProducts");





  function filterByCategory(category) {
    debugger
    //setCategory(category);

    setFilterList(productList.filter(item => (item.category === category) || category === "AllProducts"));
  }


  return (
    <div className="App">
      <Header filters={categories} filterByCategory={filterByCategory} />
      <Products list={filterList} />
      {/* <Toggle /> */}
    </div>

  );
}

export default App;
