import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductProvider from "./ProductProvider";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import ProductListingPage from "./pages/ProductListingPage";
import ProductDetailPage from './pages/ProductDetailPage'

export default class App extends React.Component {
  render() {
    return (
      <div className="App container-fluid">
        <ProductProvider>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <ProductListingPage/>
                    </Route>
                    <Route exact path="/product_details/:product_id"
                        render={
                            (props) => <ProductDetailPage {...props}/>
                        }
                    />
                </Switch>
            </Router>
        </ProductProvider>
      </div>
    );
  }
}
