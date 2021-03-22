import React from 'react';
import {bindActionCreators} from 'redux'
import {updateProduct, deleteProduct} from '../actions/product'
import {connect} from 'react-redux'
class ProductListItem extends React.Component{

     specificProduct= () => {
        // console.log(this.props);
        localStorage.setItem('currentProductId',this.props.product._id);
        this.props.history.push('/product');
     }

     update = () => {
         localStorage.setItem('currentProductDetails', JSON.stringify(this.props.product))
         this.props.history.push('/update-product')
     }

     delete = () => {
        //  console.log(this.props)
         this.props.deleteProduct(this.props.product._id)
     }


    render(){
        let product=this.props.product;

        return(
            <div>   
                <li onClick={this.specificProduct}>
                    <h3>product name: {product.product_name}</h3>
                    <h5>price: {product.price}</h5>
                    <img src={product.product_image}></img>
                </li>
                <button onClick={this.update} className="btn btn-primary">update</button>
                <button onClick={this.delete} className="btn btn-danger">delete</button>
            </div>
        )

    }
}

function mapStateToProps(appState) {

    return {
        updateProduct: appState.updateProduct,
        deleteProduct: appState.deleteProduct
    }
}
export default connect(mapStateToProps, dispatch => bindActionCreators({ updateProduct, deleteProduct}, dispatch))(ProductListItem)