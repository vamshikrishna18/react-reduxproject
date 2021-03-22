import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {updateProduct} from '../actions/product'

class UpdateProduct extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       pid: '',
       product_name: '',
       price: null,
       product_image: '',
       category: '',
       category: '',
       seller: ''
    }
  }

  update = (event) => {
    event.preventDefault()
    this.props.updateProduct(this.state.pid)
    console.log(this.state)
  }
  
  render() {
    return (
      <div>
        <form className="form-horizontal">
          <fieldset>
            <div id="legend">
              <legend className="">Update Product</legend>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="productId">Product ID:</label>
              <div className="controls">
                <input type="text" name="pid" placeholder="product ID" id="productId" className="input-xlarge" onChange={e => this.setState({ pid: e.target.value})} />
              </div>
            </div>
            <br />
            <div className="control-group">
              <label className="control-label" htmlFor="productName">Product Name:</label>
              <div className="controls">
                <input type="text" name="product_name" id="productName" placeholder="product name" className="input-xlarge" onChange={e => this.setState({ product_name: e.target.value})}  />
              </div>
            </div>
            <br />
            <div className="control-group">
              <label className="control-label" htmlFor="productPrice">Product Price:</label>
              <div className="controls">
                <input type="number" name="price" id="productPrice" placeholder="product price" className="input-xlarge" onChange={e => this.setState({ price: e.target.value})} />
              </div>
            </div>
            <br />
            <div className="control-group">
              <label className="control-label" htmlFor="productImage">Product Image:</label>
              <div className="controls">
                <input type="file" name="product_image" id="productImage" className="input-xlarge"  />
              </div>
            </div>
            <br />
            <div className="control-group">
              <label className="control-label" htmlFor="category">Category:</label>
              <div className="controls">
                <input type="text" name="category" placeholder="product category" id="category" className="input-xlarge" onChange={e => this.setState({ category: e.target.value})} />
              </div>
            </div>
            <br />
            <div className="control-group">
              <label className="control-label" htmlFor="seller">Seller:</label>
              <div className="controls">
                <input type="text" name="seller" placeholder="seller" id="seller" className="input-xlarge" onChange={e => this.setState({ seller: e.target.value})} />
              </div>
            </div>
            <br />
            <div className="control-group">
              <div className="controls">
                <button className="btn btn-success" onClick={this.update}>Update</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    updateProduct: state.updateProduct
  }
}
export default connect(mapStateToProps, dispatch => bindActionCreators({ updateProduct }, dispatch))(UpdateProduct)
