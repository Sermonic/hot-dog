import React, { Component } from 'react'
// Componentes
import Header from './components/Header'
// Redux
import { Provider } from 'react-redux'
// Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Store
import store from './store'
import Products from './components/Products'
import NewProduct from './components/NewProduct'
import EditProduct from './components/EditProduct'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Header />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Products} />
                <Route exact path='/products/new' component={NewProduct} />
                <Route
                  exact
                  path='/products/edit/:id'
                  component={EditProduct}
                />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App
