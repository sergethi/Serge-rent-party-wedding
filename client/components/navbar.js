import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getCart} from '../store/cart'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone'
import Badge from '@material-ui/core/Badge'
import {withStyles} from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import {BsSpeaker} from 'react-icons/bs'

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px'
  }
}))(Badge)

const Navbar = props => {
  useEffect(() => {
    getCart()
  }, [])

  //console.log('HERERE', props)
  // let inCart =

  //   props.cart.reduce((a, b) => {
  //     if (typeof b === 'object') {
  //       return a + b.quantity
  //     }
  //     return a + b
  //   }, 0)

  return (
    // <div>
    <nav>
      <di className="business-name">
        <a href="/home">
          <BsSpeaker />
        </a>
        <a href="/home">Serge-Event-Rentals</a>
      </di>
      {/* <div className="nave"> */}
      {/* The navbar will show these links before you log in */}
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/login" className="log-button">
            Login
          </a>
        </li>
        <li>
          <a href="/signup" className="sign-button">
            Sign Up
          </a>
        </li>

        <li className="cart">
          <Link to="/cart">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={props.cart} color="secondary">
                {/* <ShoppingCartTwoToneIcon /> */}
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            {/* <span>{props.cart.cart}</span> */}
          </Link>
        </li>
      </ul>

      {/* </div> */}
    </nav>

    // </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  console.log('STATE', state)
  return {
    isLoggedIn: !!state.user.id,
    cart: state.cart.cart
  }
}

// const mapDispatch = dispatch => {
//   return {
//     handleClick() {
//       dispatch(logout())
//     }
//   }
// }

export default connect(mapState, {getCart})(Navbar)

// **
//  * PROP TYPES
//  *
Navbar.propTypes = {
  //handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
