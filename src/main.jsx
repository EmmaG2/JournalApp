import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { JournalRouter } from './JournalRouter'
import { store } from './context/store'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <JournalRouter />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
