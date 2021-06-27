import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../Loader/Loader";

function ProductDetails() {
  let { id } = useParams();
  console.log("id:", id);

  const [productItem, setProductItem] = useState({});

  useEffect(() => {
    debugger;
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProductItem(data));
  }, [id]);

  return (
    <>
      {!productItem ? (
        <Loader />
      ) : (
        <>
          <div className="product-info">
            <img src={productItem.image} />
            <h5>{productItem.title}</h5>
            <h6>{productItem.price}</h6>
          </div>
        </>
      )}
    </>
  );
}

export default ProductDetails;
