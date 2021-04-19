import './Products.css'
import Product from "../Product/Product";




function Products(props) {
    return (
        <section className="products">
            {props.list.map((item) => <Product
                key={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
            />)}
        </section>
    );
}



export default Products;