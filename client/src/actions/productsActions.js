import {
  SHOW_PRODUCTS,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  SHOW_PRODUCT,
  EDIT_PRODUCT,
} from './types'

import axios from 'axios'

export const showProducts = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3001/api/v1/products')
  dispatch({
    type: SHOW_PRODUCTS,
    payload: response.data,
  })
}
export const showProduct = (id) => async (dispatch) => {
  const response = await axios.get(`/api/v1/products/${id}`)
  dispatch({
    type: SHOW_PRODUCT,
    payload: response.data,
  })
}

export const deleteProduct = (id) => async (dispatch) => {
  await axios.delete(`/api/v1/products/${id}`)
  dispatch({
    type: DELETE_PRODUCT,
    payload: id,
  })
}

export const addProduct = (product) => async (dispatch) => {
  const response = await axios.post('/api/v1/products', product)
  dispatch({
    type: ADD_PRODUCT,
    payload: response.data,
  })
}

export const editProduct = (product) => async (dispatch) => {
  const response = await axios.put(`/api/v1/products/${product.id}`, product)
  dispatch({
    type: EDIT_PRODUCT,
    payload: response.data,
  })
}
