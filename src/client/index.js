import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import routes from '@/routes'
import { getClientStore } from '../store'


const App = ()=> {
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>
        <Fragment>
          { routes.map(item => <Route key={item.key} {...item}></Route> ) }
        </Fragment>
      </BrowserRouter>
    </Provider>
  )
}


ReactDOM.hydrate(<App />, document.getElementById('root'))