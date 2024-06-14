//import React from 'react'
import ReactDOM from 'react-dom/client' 
import { App } from './App'
import './index.css'
//Componente funcional, tiene que ser en PascalCase
/*
const Button = ({text}) => {
  return (
    <button onClick={() => console.log('click')}>Click {text}</button>
  )
}
*/
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <App />
)