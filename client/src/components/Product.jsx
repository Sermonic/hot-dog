import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import { deleteProduct } from '../actions/productsActions'

class Product extends Component {
  removeProduct = () => {
    const { id } = this.props.data

    this.props.deleteProduct(id)
  }

  shortText = (text, maxLength = 110) => {
    if (!text) return ' '
    if (text.length <= maxLength) return text

    return text.substr(0, maxLength) + '...'
  }

  render() {
    const { id, name, price, description, src, createdAt } = this.props.data

    return (
      <div className='col-lg-3 col-md-4 col-sm-6'>
        <div className='card my-4 shadow-sm'>
          <img
            className='card-img-top'
            width='100%'
            height='225'
            focusable='false'
            aria-label={name}
            alt={name}
            src={src}
          />
          <div className='card-body'>
            <h4 className='card-title'>{name}</h4>
            <p className='card-text'>$ {price}</p>
            <p className='card-text'>{this.shortText(description)}</p>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='btn-group'>
                <Link
                  to={`products/edit/${id}`}
                  type='button'
                  className='btn btn-sm btn-outline-secondary'
                >
                  Edit
                </Link>
                <button
                  onClick={this.removeProduct}
                  type='button'
                  className='btn btn-sm btn-outline-secondary'
                >
                  Delete
                </button>
              </div>
              <small className='text-muted'>
                {moment(createdAt).format('dddd')}
              </small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { deleteProduct })(Product)
