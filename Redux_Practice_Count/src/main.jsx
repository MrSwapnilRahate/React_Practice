import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import { Provider } from 'react-redux'
import { Provider } from 'react-redux';
import { store } from './redux/store.js'
import Counter from './redux/Counter.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <Counter />
    </Provider>
  </React.StrictMode>,
)
