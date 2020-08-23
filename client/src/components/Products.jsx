import React, { Component } from 'react'
import Product from './Product'
import { connect } from 'react-redux'
import { showProducts } from '../actions/productsActions'

class Products extends Component {
  componentDidMount() {
    this.props.showProducts()
  }

  render() {
    const { products } = this.props

    return (
      <React.Fragment>
        <h2 className='text-center products-title my-4'>List of Products</h2>
        <div className='row justify-content-around'>
          {products.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
})

export default connect(mapStateToProps, { showProducts })(Products)
