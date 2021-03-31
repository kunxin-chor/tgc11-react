import React from "react";
import ProductContext from "../ProductContext"

export default class ProductDetailPage extends React.Component {
  state = {
    productID: 0 // store the id of the product that we want to display
  };

  static contextType = ProductContext;

  componentDidMount() {
      this.setState({
          productID: this.props.match.params.product_id
      })
  }

  render() {
      let product = this.context.findProduct(this.state.productID);
      console.log(product)
    return (
      <React.Fragment>
        <h1>Details for Product ID#{this.state.productID}</h1>
        { product ?
            <ul>
                <li>Product Name: {product.product_name}</li>
                <li>Cost: {product.cost}</li>
            </ul> : null
        }

      </React.Fragment>
    );
  }
}
