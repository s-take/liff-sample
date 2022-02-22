import liff from '@line/liff'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

liff
  .init({
    liffId: process.env.REACT_APP_LIFF_ID || '',
    withLoginOnExternalBrowser: true,
  })
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    )
  })
  .catch((e) => {
    alert(`LIFF error: ${e.message}`)
  })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
