import history from '../history'

/**
 * ACTION TYPES
 */

const GET_CART = 'GET_CART'
const CLEAR_CART = 'CLEAR_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const DELETE_FROM_CART = 'DELETE_FROM_CART'

/**
 * INITIAL STATE
 */
const initialState = {
  cart: 0,
  cartCost: 0,
  products: {
    lemy: {
      name:
        'LEMY 10 X 20 Outdoor Wedding Party Tent Camping Shelter Gazebo Canopy with Removable Sidewalls Easy Set Gazebo BBQ Pavilion Canopy Cater Events',
      price: 50,
      number: 0,
      inCart: false
    },
    vingly: {
      name:
        'VINGLI 48" Round Bi-Folding Commercial Table, 4 Feet Portable Plastic Dining Card Table for Kitchen or Outdoor Party Wedding Event, White Granite',
      price: 20,
      number: 0,
      inCart: false
    },
    curtain: {
      name:
        'LE 306 LED Curtain Lights 9.8 x 9.8 ft Fairy String Lights for Bedroom Wall Wedding Backdrop Patio Party Garden, Warm White, 8 Modes, Plug in Indoor Outdoor Decorative Window Twinkle Christmas Lights',
      price: 10,
      number: 0,
      inCart: false
    },
    akustic: {
      name:
        'AKUSTIK 12 Inch 4000Watt Powered PA Speaker System Combo Set, DJ Array Speaker Set with Remote Control, Two Subwoofers & 8 X Array Speakers Set, Bluetooth/USB/SD/RCA',
      price: 300,
      number: 0,
      inCart: false
    }
  }
}
// let currentCart
// if (localStorage.getItem('cart')) {
//   currentCart = JSON.parse(localStorage.getItem('cart'))
// } else {
//   currentCart = []
// }

/**
 * ACTION CREATORS
 */
export const getCart = () => ({type: GET_CART})
export const addToCart = product => ({type: ADD_TO_CART, product})
export const removeFromCart = product => ({type: REMOVE_FROM_CART, product})
export const deleteFromCart = product => ({type: DELETE_FROM_CART, product})
export const clearCart = () => ({type: CLEAR_CART})

/**
 * REDUCER
 */

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return state
    case ADD_TO_CART:
      // let addQuantity = { ...state.products[action.product]}
      // addQuantity.number += 1
      // addQuantity.inCart = true
      // console.log('reducerkkkkkk',addQuantity)
      return {
        // ...state,
        cart: state.cart + 1
        //cartCost: state.cartCost + state.products[action.product].price,
        //products: { ...state.products, [action.product]: addQuantity}
      }

    default:
      return state
  }
  // let products, searchId
  // switch (action.type) {
  //   case GET_CART:
  //     return state

  //   case ADD_TO_CART:
  //     searchId = state.findIndex(product => product.id === action.product.id)
  //     // if its there add 1
  //     if (searchId > -1) {
  //       products = state.slice()
  //       products[searchId].quantity += 1
  //     } else {
  //       products = state.concat([
  //         {
  //           id: action.product.id,
  //           product: action.product,
  //           quantity: 1
  //         }
  //       ])
  //     }
  //     localStorage.setItem('cart', JSON.stringify(products))
  //     return products

  //   case REMOVE_FROM_CART:
  //     searchId = state.findIndex(el => el.id === action.product.id)
  //     if (searchId > -1) {
  //       // if its there decrease by 1 otherwise delete if quantity is 1
  //       products = state.slice()
  //       if (products[searchId].quantity > 1) products[searchId].quantity -= 1
  //       else products.splice(searchId, 1)
  //     }
  //     localStorage.setItem('cart', JSON.stringify(products))
  //     history.push('/cart')
  //     return products

  //   case DELETE_FROM_CART:
  //     searchId = state.findIndex(el => el.id === action.product.id)
  //     if (searchId > -1) {
  //       products = state.slice()
  //       products.splice(searchId, 1)
  //     }
  //     localStorage.setItem('cart', JSON.stringify(products))
  //     history.push('/cart')
  //     return products

  //   default:
  //     return state
  // }
}
