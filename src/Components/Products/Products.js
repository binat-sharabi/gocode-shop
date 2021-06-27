import "./Products.css";
import Product from "../Product/Product";
import Slider from "@material-ui/core/Slider";
import { useState } from "react";

function Products(props) {
  const [sliderValue, setSliderValue] = useState([0, 1000]);
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("id");
  const [order, setOrder] = useState("1");

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  function valuetext(value) {
    return `${value}$`;
  }

  const categories = props.list
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);
  const marks = props.list
    .filter((p) => p.category === category || !category.length)
    .map((p) => ({ value: p.price, label: "" }))
    .sort((a, b) => (a.value > b.value ? 1 : b.value > a.value ? -1 : 0));

  return (
    <>
      {props.list.length > 0 && (
        <div className="slider">
          {marks.length > 0 && (
            <Slider
              value={sliderValue}
              onChange={handleChange}
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
              marks={marks}
              defaultValue={[marks[0].value, marks[marks.length - 1].value]}
              min={marks[0].value}
              max={marks[marks.length - 1].value}
              valueLabelDisplay="on"
            />
          )}
        </div>
      )}

      <section className="products">
        {props.list
          .filter((p) => p.category === category || !category.length)
          .filter((p) => sliderValue[0] <= p.price && p.price <= sliderValue[1])
          .sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1) * order)
          .map((item) => (
            <Product
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              id={item.id}
            />
          ))}
      </section>
    </>
  );
}

export default Products;
