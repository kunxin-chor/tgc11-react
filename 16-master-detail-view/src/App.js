import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductListing from "./ProductListing";
import AddProductForm from "./AddProductForm";
import ProductProvider from "./ProductProvider";

export default class App extends React.Component {
  render() {
    return (
      <div className="App container-fluid">
        <ProductProvider>
          <ProductListing />
          <AddProductForm />
        </ProductProvider>
      </div>
    );
  }
}
