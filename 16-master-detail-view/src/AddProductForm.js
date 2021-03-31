import React from 'react';
import ProductContext from './ProductContext'
export default class AddProductForm extends React.Component {
   
      
    static contextType = ProductContext;
    state = {
        'product_name':'',
        'cost': 0.0
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
            <div>
                <label className="form-label">Product Name:</label>
                <input className="form-control "type="text" name="product_name" value={this.state.product_name}
                    onChange={this.updateFormField}/>
            </div>
            <div>
                <label class="form-label">Cost:</label>
                <input type="text" className="form-control" name="cost" 
                value={this.state.cost} onChange={this.updateFormField}/>
            </div>

            <button className="btn btn-primary mt-3" onClick={()=>{
                this.context.addProduct(this.state.product_name, this.state.cost)
            }}>Add Product</button>

            </React.Fragment>

        )
    }
}