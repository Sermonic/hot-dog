import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../actions/productsActions'

class NewProduct extends Component {
  state = {
    name: '',
    price: '',
    description: '',
    src: '',
  }

  nameProduct = (e) => {
    this.setState({ name: e.target.value })
  }

  priceProduct = (e) => {
    this.setState({ price: e.target.value })
  }

  descriptionProduct = (e) => {
    this.setState({ description: e.target.value })
  }

  srcProduct = (e) => {
    this.setState({ src: e.target.value })
  }

  newProduct = (e) => {
    e.preventDefault()

    const { name, price, description, src } = this.state

    debugger

    if (name === '' || price === '' || description === '' || src === '') {
      this.setState({ error: true })
      return
    }
    this.setState({ error: false })

    // Create the object
    const product = {
      name,
      price,
      description,
      src,
    }
    console.log(product)

    // create the new product
    this.props.addProduct(product)

    // redirect
    this.props.history.push('/')
  }

  render() {
    const { error } = this.state

    return (
      <div className='row justify-content-center mt-5'>
        <div className='col-md-8'>
          <div className='card'>
            <div className='card-body'>
              <h2 className='text-center'>Add New Product</h2>
              <form onSubmit={this.newProduct}>
                <div className='form-group'>
                  <label>Name</label>
                  <input
                    onChange={this.nameProduct}
                    type='text'
                    className='form-control'
                    placeholder='Name'
                  />
                </div>
                <div className='form-group'>
                  <label>Price</label>
                  <input
                    onChange={this.priceProduct}
                    type='number'
                    className='form-control'
                    placeholder='Price'
                  />
                </div>
                <div className='form-group'>
                  <label>Description</label>
                  <textarea
                    onChange={this.descriptionProduct}
                    type='text'
                    className='form-control'
                    placeholder='Description'
                  />
                </div>
                <div className='form-group'>
                  <label>Image Link</label>
                  <input
                    onChange={this.srcProduct}
                    type='text'
                    className='form-control'
                    placeholder='Image Link'
                  />
                </div>
                <button type='submit' className='btn btn-primary'>
                  Add
                </button>
              </form>
              {error ? (
                <div className='font-weight-bold alert alert-danger text-center mt-4 '>
                  All fields are required
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { addProduct })(NewProduct)
