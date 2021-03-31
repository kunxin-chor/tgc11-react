import React, {useContext} from "react"
import ProductContext from "./ProductContext"
import ProductTable from "./ProductTable"



export default function ProductListing() {
    let context = useContext(ProductContext)
    return(
        <React.Fragment>
            <h1>Product Listing</h1>
            <ProductTable/>
        </React.Fragment>
    )
}