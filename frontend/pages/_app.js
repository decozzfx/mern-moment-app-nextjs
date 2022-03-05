import 'tailwindcss/tailwind.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { useStore } from '../store'

import reducers from '../reducers'

const store = createStore(reducers, compose(applyMiddleware(thunk)))
// const store = useStore()

function MyApp({ Component, pageProps }) {
  return (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
