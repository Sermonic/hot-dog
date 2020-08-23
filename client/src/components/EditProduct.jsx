import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showProduct, editProduct } from '../actions/productsActions'

class EditProduct extends Component {
  state = {
    name: '',
    price: '',
    description: '',
    src: '',
  }

  componentDidMount() {
    const { id } = this.props.match.params

    this.props.showProduct(id)
  }

  componentWillReceiveProps(nextProps, nextState) {
    const { name, price, description, src } = nextProps.product

    this.setState({
      name,
      price,
      description,
      src,
    })
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

  updateProduct = (e) => {
    e.preventDefault()

    const { name, price, description, src } = this.state

    if (name === '' || price === '' || description === '' || src === '') {
      this.setState({ error: true })
      return
    }
    this.setState({ error: false })

    // take the id
    const { id } = this.props.match.params

    // create the object
    const product = {
      id,
      name,
      price,
      description,
      src,
    }
    console.log(product)

    // Update Current Product
    this.props.editProduct(product)

    // redirect
    this.props.history.push('/')
  }

  render() {
    const { name, price, description, src, error } = this.state

    return (
      <div className='row justify-content-center mt-5'>
        <div className='col-md-8'>
          <div className='card'>
            <div className='card-body'>
              <h2 className='text-center'>Add New Product</h2>
              <form onSubmit={this.updateProduct}>
                <div className='form-group'>
                  <label>Name</label>
                  <input
                    value={name}
                    onChange={this.nameProduct}
                    type='text'
                    className='form-control'
                    placeholder='Name'
                  />
                  <label>Price</label>
                  <input
                    value={price}
                    onChange={this.priceProduct}
                    type='text'
                    className='form-control'
                    placeholder='Price'
                  />
                  <label>Description</label>
                  <input
                    value={description}
                    onChange={this.descriptionProduct}
                    type='text'
                    className='form-control'
                    placeholder='Description'
                  />
                  <label>Image Link</label>
                  <input
                    value={src}
                    onChange={this.srcProduct}
                    type='text'
                    className='form-control'
                    placeholder='Image Link'
                  />
                </div>
                <button type='submit' className='btn btn-primary'>
                  Save Changes
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

const mapStateToProps = (state) => ({
  product: state.products.product,
})

export default connect(mapStateToProps, { showProduct, editProduct })(
  EditProduct
)
