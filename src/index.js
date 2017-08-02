import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Redbox from 'redbox-react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'

import App from './components/App'
import reducers from './reducers'
import Postsnew from './components/posts_new'
import PostsShow from './components/posts_show'
import './styles/screen.scss'

const root = document.getElementById('root')

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

const render = app => {
  ReactDOM.render(
    <AppContainer errorReporter={Redbox}>{app}</AppContainer>,
    root
  )
}

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/posts/new' component={Postsnew} />
          <Route path='/posts/:id' component={PostsShow} />
          <Route path='/' component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
    render(<NextApp />)
  })
}
