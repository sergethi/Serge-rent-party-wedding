import axios from 'axios'

const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const GET_ONE_PRODUCT = 'GET_ONE_PRODUCT'
const SORT_PRODUCTS = 'SORT_PRODUCTS'

const initialState = {
  products: [],
  singleProduct: []
}

const getAllProducts = products => ({
  type: GET_ALL_PRODUCTS,
  products
})
const getOneProduct = id => ({
  type: GET_ONE_PRODUCT,
  id
})
export const sortProducts = category => ({
  type: SORT_PRODUCTS,
  category
})

export const getAllProductsThunk = () => async dispatch => {
  try {
    const res = await axios.get('/api/products')
    dispatch(getAllProducts(res.data))
  } catch (err) {
    console.error(err)
  }
}
export const getOneProductThunk = productId => async dispatch => {
  try {
    const res = await axios.get(`/api/products/${productId}`)
    dispatch(getOneProduct(res.data))
  } catch (err) {
    console.error(err)
  }
}

// export const sortProductsThunk = (categoryId) => async dispatch => {
//   try {
//     const res = await axios.get(`/api/products/${categoryId}`)
//     dispatch(sortProducts(res.data))

//   } catch (err) {
//     console.error(err)

//   }
// }

export default function allProductsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_PRODUCTS':
      return action.products
    // return  action.products
    case 'GET_ONE_PRODUCT':
      return action.id
    case 'SORT_PRODUCTS':
      return state.filter(product => product.category === action.category)

    default:
      return state
  }
}
