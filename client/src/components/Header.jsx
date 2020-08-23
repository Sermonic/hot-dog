import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className='collapse bg-dark' id='navbarHeader'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-8 col-md-7 py-4'>
                  <h4 className='text-white'>Hello there</h4>
                  <p className='text-muted'>
                    If you want to know more about my skills and projects follow
                    the link -{' '}
                    <a
                      href='https://vshcherbanych.netlify.app/'
                      className='text-white'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      My Portfolio Site
                    </a>
                  </p>
                </div>
                <div className='col-sm-4 offset-md-1 py-4'>
                  <h4 className='text-white'>Contact</h4>
                  <ul className='list-unstyled'>
                    <li>
                      <i className='fab fa-telegram-plane text-white mr-2'></i>
                      <a
                        href='https://t.me/sermonic'
                        rel='noopener noreferrer'
                        target='_blank'
                        className='text-white'
                      >
                        Telegram
                      </a>
                    </li>
                    <li>
                      <i className='fab fa-linkedin text-white mr-2'></i>
                      <a
                        href='https://www.linkedin.com/in/shcherbanych/'
                        rel='noopener noreferrer'
                        target='_blank'
                        className='text-white'
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <i className='fab fa-github-square text-white mr-2 '></i>
                      <a
                        href='https://github.com/Sermonic'
                        rel='noopener noreferrer'
                        target='_blank'
                        className='text-white'
                      >
                        GitHub
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='navbar navbar-dark bg-dark box-shadow'>
            <div className='container d-flex justify-content-between'>
              <a href='/' className='navbar-brand d-flex align-items-center'>
                <i class='fas fa-hotdog mr-2'></i>
                <strong>Hot Dog</strong>
              </a>
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarHeader'
                aria-controls='navbarHeader'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <Link to={'/products/new'} className='btn btn-success'>
                Add Product
              </Link>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Header
