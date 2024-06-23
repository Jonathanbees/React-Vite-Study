import { useState } from 'react'
import emoticono from './assets/emoticono.jpg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body className='h-screen bg-neutral-950 flex-wrap'>
      <main className=' w-screen grid place-items-center text-slate-300 font-mono text-xl flex-wrap mb-10 '>
        <div className='bg-slate-600  p-6 flex justify-center items-center '>
          <img src={emoticono} alt="React Logo" className="logo w-36 mr-5" />
          <div className="content flex-wrap w-96">
            <h3 className='text-3xl font-bold text-justify mb-3'>A JavaScript library for building user interfaces</h3>
            <h1>React</h1>
            <div className="card flex justify-center items-center border-2 border-black rounded-lg mt-3">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
            </div>
          </div>
        </div>
      </main>

      <main className='w-screen grid place-items-center text-slate-300 font-mono text-xl flex-wrap'>
        <div className='bg-slate-600  p-6 border-spacing-x-16 w-90 grid place-items-center   '>
          <img src={emoticono} alt="React Logo" className="logo w-60 px-3" />
          <div className="content flex-wrap" >
            <h1>React</h1>
            <p className='text-3xl font-bold underline'>A JavaScript library for building user interfaces</p>
          </div>
        </div>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>

      </main>
    </body>
  )
}

export default App
