import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductContext from './ProductContext';
import ProductListing from "./ProductListing";
import AddProductForm from "./AddProductForm";

export default class App extends React.Component {

    state = {
    products: [
        { id: 1, product_name: "ACME Anvils", cost:9.99 },
        { id: 2, product_name: "ACME Hammer", cost:15.50},
        { id: 3, product_name: "ACME Screwdriver", cost: 12.50}
    ]
  };
  render() {
    const context = {
        products: () => {
            return this.state.products
        },
        addProduct: (newProductName, cost) => {
            // before updating the array, call axios to add the new
            // product using the API
            let id = Math.floor(Math.random() * 10000 + 9999);
            
            // clone the original array
            const clone = [...this.state.products, {
                'id': id,
                'product_name': newProductName,
                'cost': cost
            }];

            this.setState({
                'products': clone
            })


        }
    }
    return (
    <div className="App container-fluid">
        <ProductContext.Provider value={context}>
            <ProductListing/>
            <AddProductForm/>
        </ProductContext.Provider>
    </div>);
  }
}
