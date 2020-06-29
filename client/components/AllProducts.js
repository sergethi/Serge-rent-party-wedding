import React from 'react'
import {connect} from 'react-redux'
import {getAllProductsThunk} from '../store/products'
import {addToCart, getCart} from '../store/cart'
import {Link} from 'react-router-dom'
import SideBar from './SideBar'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'

class AllProducts extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.props.getAllProducts()
  }
  handleClick(product) {
    this.props.addProductToCart(product)
  }
  render() {
    let products = this.props.products
    //console.log('herere', products)
    return products.length > 0 ? (
      <div>
        {/* <div><SideBar /></div> */}
        <div id="App">
          <SideBar pageWrapId="page-wrap" outerContainerId="App" />

          <div id="page-wrap">
            <h1 className="side-menu-head">SCROLL DOWN TO SEE OUR PRODUCTS</h1>
          </div>
        </div>

        {/* limit */}
        <div className="positioning">
          {products.map(product => (
            <div className="productsContainer" key={product.id}>
              <img className="img" src={product.imageURL} />
              <Link className="bold" to={`/products/${product.id}`}>
                {product.name}
              </Link>

              <p className="bold">price: ${product.price}</p>
              <p className="bold">Quantity: {product.quantity}</p>
              {/* <p className="desc">Description: {product.description}</p> */}

              <Typography>
                {product.description.length < 50
                  ? product.description
                  : product.description.slice(0, 75) + '...'}
              </Typography>

              <p className="bold">Category: {product.category}</p>

              <Tooltip title="ADD TO CART" arrow>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={() => this.handleClick(product)}
                >
                  <AddShoppingCartIcon />
                </Button>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <h1 className="bold">waiiiittt........</h1>
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
    getAllProducts: () => dispatch(getAllProductsThunk()),
    addProductToCart: product => dispatch(addToCart(product)),
    getCart: () => dispatch(getCart())
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
