import React from 'react';

import ProductListing from '../ProductListing'
import AddProduct from '../AddProductForm'

export default function ProductListingPage() {
    return (
        <React.Fragment>
            <ProductListing/>
            <AddProduct/>
        </React.Fragment>

    )
}