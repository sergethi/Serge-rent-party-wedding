import React from 'react'
import {connect} from 'react-redux'
import {getOneProductThunk} from '../store/products'
import OneProductView from './OneProductView'

class OneProduct extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getOneProduct(this.props.match.params.id)
    console.log('herere', this.props.match.params.id)
  }
  render() {
    let product = this.props.products
    //console.log('herere', product)
    return (
      <div>
        {/* <p>price: {product.price}</p>
             <p>Quantity: {product.quantity}</p>
             <p>Description: {product.description}</p>
             <p>Category: {product.category}</p>
             <img src = {product.imageURL} /> */}
        <OneProductView product={product} />
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.products
  }
}

const mapDispatch = dispatch => {
  return {
    getOneProduct: id => dispatch(getOneProductThunk(id))
  }
}

export default connect(mapState, mapDispatch)(OneProduct)
