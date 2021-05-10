import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import Loader from './Components/Loader/Loader';
import Cart from './Components/Cart/Cart';
import CartContext from './Contexts/CartContext';
//import Toggle from './Components/Toggle';


function App() {
  const [productList, SetProductList] = useState([]);

  const [filterList, setFilterList] = useState(productList);

  const [cart, setCart] = useState([]);

  const [sliderMinMaxValue, SetSliderMinMaxValue] = useState([0,0]);

  

  const groupBy = (xs, key) => xs.reduce((rv, x) => {
    (rv[x[key]] = true || []);
    return rv;
  }, {});


  const categories = Object.keys(groupBy(productList, 'category'));


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => (SetProductList(data),mapFilterList(data), setSliderValues(data)))
  }, []);

function mapFilterList(data){
  debugger
  const listWithQuantity= data.map(item=>({...item,quantity:0}));
  console.log(listWithQuantity);
  setFilterList(listWithQuantity);
}


  function setSliderValues(data) {
    debugger
    const sortList = data.sort(function (a, b) {
      return a.price - b.price
    })

    SetSliderMinMaxValue(sortList[0].price,sortList[sortList.length - 1].price);
  };

  function filterByCategory(category) {
    setFilterList(productList.filter(item => (item.category === category) || category === "AllProducts"));
  }


  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {productList.length === 0 ?
        <Loader></Loader> :
        <div className="App" style={{ position: "relative" }}>
          <div className="cartDiv">
            <Cart></Cart>
          </div>
          <div style={{ position: "absolute", right: "auto", width: "80%", height: "100%" }}>
            <Header filters={categories} filterByCategory={filterByCategory} sliderValues={[0,99] } />
            <Products list={filterList} />
          </div>
        </div>}
    </CartContext.Provider>
  );
}

export default App;
