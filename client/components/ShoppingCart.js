import React, {Fragment} from 'react'
import {addToCart, removeFromCart, deleteFromCart} from '../store'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
//import ConfirmCheckout from './ConfirmCheckout'

import {makeStyles} from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import MinusIcon from '@material-ui/icons/Remove'
import DeleteIcon from '@material-ui/icons/Delete'
import Tooltip from '@material-ui/core/Tooltip'
import Grid from '@material-ui/core/Grid'
import ReceiptIcon from '@material-ui/icons/Receipt'
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded'
//import ConfirmationCheckout from './ConfirmCheckout'

const useStyles = makeStyles(theme => ({
  media: {
    paddingTop: '56.25%' // 16:9
  },
  head: {
    backgroundColor: 'lightsalmon'
    // '#bc658d'
  },
  whiteColor: {
    color: theme.palette.common.white
  },
  footer: {
    backgroundColor: '#f9d89c',
    padding: '10'
  }
}))
const ShoppingCart = ({cart}) => {
  const classes = useStyles()
  console.log('shopping====', cart)

  // let productsArr = []

  // Object.keys(cart.products).forEach(item => {
  //   console.log(item)
  //   if(cart.products[item].inCart){
  //     productsArr.push(cart.products[item])
  //   }
  // })

  // productsArr.map((product, idx) => {
  //   return (
  //     <Fragment key = {product.id}>
  //       <div className="product"><span className="sm-hide">{product.name}</span></div>
  //       <div className="price sm-hide">${product.price}</div>
  //       <div className="quantity"><span>{product.number}</span></div>
  //       <div className="total">${product.number * product.price}</div>
  //     </Fragment>

  //   )
  // })

  // console.log('PROPPPPSS SHOPPPIGNGNIGNIGNCART',props)
  // console.log('IS THERE A USER', props)

  return (
    <div>
      <Container className="cart-container">
        <Grid container item xs={12} justify="center" alignItems="center">
          <ShoppingCartRoundedIcon fontSize="large" />
          <h1> My Shopping Cart</h1>
        </Grid>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow className={classes.head}>
                <TableCell align="center" className={classes.whiteColor}>
                  Keyboard
                </TableCell>
                <TableCell align="center" className={classes.whiteColor}>
                  Keyboard Name
                </TableCell>
                <TableCell align="center" className={classes.whiteColor}>
                  Price
                </TableCell>
                <TableCell align="center" className={classes.whiteColor}>
                  QTY
                </TableCell>
                <TableCell align="center" className={classes.whiteColor}>
                  Amount
                </TableCell>
                <TableCell align="center" className={classes.whiteColor} />
              </TableRow>
            </TableHead>

            <div className="container-products">
              <div className="product-header">
                <h5 className="product-title">PRODUCT</h5>
                <h5 className="price sm-hide">PRICE</h5>
                <h5 className="quantity">QUANTITY</h5>
                <h5 className="total">TOTAL</h5>
              </div>
              <div className="products">{/* {productsArr} */}</div>
              <div className="basketTotalContainer">
                <h4 className="baskettotalTitle">Basket Total</h4>
                <h4 className="basketTotal">${cart.cartCost}</h4>
              </div>
            </div>
          </Table>
        </TableContainer>
      </Container>
    </div>
  )
}

const mapState = state => {
  return {
    cart: state.cart,
    user: state.user
  }
}

// const mapDispatch = dispatch => {
//   return {
//     handlePlus(product) {
//       dispatch(addToCart(product))
//     },
//     handleMinus(product) {
//       dispatch(removeFromCart(product))
//     },
//     handleDelete(product) {
//       dispatch(deleteFromCart(product))
//     }
//   }
// }

export default connect(mapState)(ShoppingCart)

// import React from 'react'
// import {addToCart, removeFromCart, deleteFromCart} from '../store'
// import {Link} from 'react-router-dom'
// import {connect} from 'react-redux'
// //import ConfirmCheckout from './ConfirmCheckout'

// import {makeStyles} from '@material-ui/core/styles'
// import CardMedia from '@material-ui/core/CardMedia'
// import Table from '@material-ui/core/Table'
// import TableBody from '@material-ui/core/TableBody'
// import TableCell from '@material-ui/core/TableCell'
// import TableContainer from '@material-ui/core/TableContainer'
// import TableHead from '@material-ui/core/TableHead'
// import TableRow from '@material-ui/core/TableRow'
// import Paper from '@material-ui/core/Paper'
// import Container from '@material-ui/core/Container'
// import ButtonGroup from '@material-ui/core/ButtonGroup'
// import Button from '@material-ui/core/Button'
// import AddIcon from '@material-ui/icons/Add'
// import MinusIcon from '@material-ui/icons/Remove'
// import DeleteIcon from '@material-ui/icons/Delete'
// import Tooltip from '@material-ui/core/Tooltip'
// import Grid from '@material-ui/core/Grid'
// //import ReceiptIcon from '@material-ui/icons/Receipt'
// import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded'
// //import ConfirmationCheckout from './ConfirmCheckout'

// const useStyles = makeStyles(theme => ({
//   media: {
//     paddingTop: '56.25%' // 16:9
//   },
//   head: {
//     backgroundColor: '#bc658d'
//   },
//   whiteColor: {
//     color: theme.palette.common.white
//   },
//   footer: {
//     backgroundColor: '#f9d89c',
//     padding: '10'
//   }
// }))
// const ShoppingCart = props => {
//   console.log('SHOPPING', props)
//   const classes = useStyles()
//   let total = 0

//   // console.log('PROPPPPSS SHOPPPIGNGNIGNIGNCART',props)
//   // console.log('IS THERE A USER', props)

//   return (

//           <TableHead />
//           <TableBody>
//             {props.cart.map(cartItem => {
//               let imageURL = cartItem.keyboard.imageURL
//               let name =
//                 cartItem.keyboard.name.split(' ').length <= 3
//                   ? cartItem.keyboard.name
//                   : cartItem.keyboard.name
//                       .split(' ')
//                       .slice(0, 3)
//                       .join(' ')
//               let price = cartItem.keyboard.price
//               let quantity = cartItem.quantity
//               let amount = cartItem.keyboard.price * quantity
//               total += amount
//               return (
//                 <TableRow key={cartItem.keyboard.id}>
//                   <TableCell align="center">
//                     <CardMedia className={classes.media} image={imageURL} />
//                   </TableCell>
//                   <TableCell align="center">
//                     <Link to={`/products/${cartItem.keyboard.id}`}>
//                       <h3>{name}</h3>
//                     </Link>
//                   </TableCell>
//                   <TableCell align="center">
//                     <h3>${price}</h3>
//                   </TableCell>
//                   <TableCell align="center">
//                     <h3>{quantity}</h3>
//                     <ButtonGroup size="small">
//                       <Button
//                         aria-label="reduce"
//                         // onClick={() => props.handleMinus(cartItem.keyboard)}
//                       >
//                         <MinusIcon fontSize="small" />
//                       </Button>
//                       <Button
//                         aria-label="increase"
//                         // onClick={() => {
//                         //   // props.handlePlus(cartItem.keyboard)
//                         // }}
//                       >
//                         <AddIcon />
//                       </Button>
//                     </ButtonGroup>
//                   </TableCell>
//                   <TableCell align="center">
//                     <h3>${amount}</h3>
//                   </TableCell>
//                   <TableCell align="center">
//                     <Tooltip title="DELETE KEYBOARD" arrow>
//                       <Button
//                         variant="contained"
//                         color="secondary"
//                         // onClick={() => props.handleDelete(cartItem.keyboard)}
//                       >
//                         <DeleteIcon />
//                       </Button>
//                     </Tooltip>
//                   </TableCell>
//                 </TableRow>
//               )
//             })}
//           </TableBody>
//         </Table>
//         <Table>
//           <TableHead>
//             <TableRow className={classes.footer}>
//               <TableCell>
//                 <Grid
//                   container
//                   item
//                   xs={12}
//                   justify="flex-end"
//                   alignItems="center"
//                 >
//                   {props.cart.length > 0 ? (
//                     <>
//                       <Grid item xs={1}>
//                         <h3>SubTotal:</h3>
//                       </Grid>
//                       <Grid item xs={2}>
//                         <h3>${total} </h3>
//                       </Grid>
//                       <Grid item xs={2}>
//                         {/* <Link to='/checkout'>
//                           <Button variant="contained" color="primary" onClick={() => <ConfirmCheckout cart={props.cart} />}>
//                             Checkout */}
//                             {/* <ReceiptIcon /> */}
//                           {/* </Button>
//                         </Link> */}

//                         {/* <ConfirmationCheckout
//                           order={props.cart}
//                           user={props.user}
//                         /> */}
//                       </Grid>
//                     </>
//                   ) : (
//                     <Grid item xs={12} container justify="center">
//                       <Link to="/products">
//                         <Tooltip title="CHECK KEYBOARDS" arrow>
//                           <h3> CART IS EMPTY</h3>
//                         </Tooltip>
//                       </Link>
//                     </Grid>
//                   )}
//                 </Grid>
//               </TableCell>
//             </TableRow>
//           </TableHead>
//         </Table>
//       </TableContainer>
//     </Container>
//   )
// }

// const mapState = state => {
//   return {
//     cart: state.cart,
//     user: state.user
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handlePlus(product) {
//       dispatch(addToCart(product))
//     },
//     handleMinus(product) {
//       dispatch(removeFromCart(product))
//     },
//     handleDelete(product) {
//       dispatch(deleteFromCart(product))
//     }
//   }
// }

// export default connect(mapState, mapDispatch)(ShoppingCart)
