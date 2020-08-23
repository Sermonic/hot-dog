import {
  SHOW_PRODUCTS,
  SHOW_PRODUCT,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  EDIT_PRODUCT,
} from '../actions/types'

// each reducers has its own state
const initialState = {
  products: [],
}

// the reducers are the only ones that can modify the store
export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      }
    case SHOW_PRODUCT:
      return {
        ...state,
        product: action.payload,
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      }
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      }
    case EDIT_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload ? (product = action.payload) : product
        ),
      }
    default:
      return state
  }
}
