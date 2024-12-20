import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Counter from './Counter.jsx'
import { store } from './ReduxCounter/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store= {store}>
      <Counter />
    </Provider>
    {/* <App /> */}
  </React.StrictMode>,
)
