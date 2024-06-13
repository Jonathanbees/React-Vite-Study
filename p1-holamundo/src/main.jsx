import React from 'react'
import ReactDOM from 'react-dom/client'
const createButtton = ({text}) => {
  return (
    <button onClick={() => console.log('click')}>Click {text}</button>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.Fragment>
    {createButtton({text: 'si'})}
    {createButtton({text: 'no'})}
    {createButtton({text: 'tal vez'})}
  </React.Fragment>
)