import { useState, useEffect } from 'react';
import emoticono from './assets/emoticono.jpg';
import { images } from './constants.js';
import { Header } from './components/Header.jsx';
import { Carrousel } from './components/Carrousel.jsx';
import { Cards } from './components/Cards.jsx';
import './App.css';
import './Aditional_styles.css';



function App() {
  const [count, setCount] = useState(0);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex) => (currentImageIndex + 1) % images.length); // Cambia la imagen ya que el índice se incrementa en 1 y usa % para volver al principio
    }, 10000); // Cambia la imagen cada 10 segundos

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };
  //<Carrousel images={images} prevImage={prevImage} currentImageIndex={currentImageIndex} nextImage={nextImage} />
  return (
    <body className='h-full bg-gray-100'>

      < Header />
      <main className='text-gray-800 font-mono text-xl my-4 md:flex-wrap'>
        <section className='carousel grid place-items-center h-full gap-3'>
        <Carrousel images={images} prevImage={prevImage} currentImageIndex={currentImageIndex} nextImage={nextImage} />
        </section>

        <br />
        <section className='grid place-items-center my-4'>
          <div className='bg-white p-6 flex flex-col md:flex-row justify-center items-center border-2 border-gray-300 shadow-lg'>
            <img src={emoticono} alt="React Logo" className="logo w-36 md:w-36 mr-6" />
            <div className="content text-center md:text-left">
              <h3 className='text-xl md:text-2xl font-bold mb-3'>Una biblioteca de JavaScript para construir interfaces de usuario</h3>
              <div className="card flex justify-center items-center border-2 border-gray-400 rounded-lg mt-3 p-4">
                <button onClick={() => setCount(count + 1)} className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
                  Contador {count}
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className='grid place-items-center my-4'>
          <div className='bg-white p-6 w-full md:w-9/10 grid place-items-center border-2 border-gray-300 shadow-lg'>
            <img src={emoticono} alt="React Logo" className="logo w-36 md:w-60" />
            <div className="content">
              <h1>React</h1>
              <p className='text-xl md:text-2xl font-bold underline'>Una biblioteca de JavaScript para construir interfaces de usuario</p>
              <div className="card">
                <button onClick={() => setCount(count + 1)} className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
                  Contador {count}
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className='cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-slate-600 mb-3'>
          <Cards image={emoticono} /> 
          <Cards image={emoticono} />
          <div className='card bg-white p-6 m-2 grid place-items-center border-2 border-gray-300 shadow-lg'>
            <img src={emoticono} alt="" className='w-60' />
            <div className='texts grid grid-cols-2 gap-4'>
              <p>si</p>
              <p>no</p>
            </div>
            <h1>hola rey</h1>
          </div>
          <div className='card bg-white p-6 m-2 grid place-items-center border-2 border-gray-300 shadow-lg'>
            <img src={emoticono} alt="" className='w-60' />
            <div className='texts grid grid-cols-2 gap-4'>
              <p>si</p>
              <p>no</p>
            </div>
            <h1>hola rey</h1>
          </div>
        </section>
        <section className='grid grid-rows-3 bg-slate-500 mx-1'>
          <div className='form '>
            <form action="">
              <label htmlFor="">si</label>
              <input type="email" name="hola rey" id="" />
              <label htmlFor="">si</label>
              <input type="email" name="hola rey" id="" />
              <label htmlFor="">si</label>
              <input type="email" name="hola rey" id="" />
              <label htmlFor="">si</label>
              <input type="email" name="hola rey" id="" />
            </form>

          </div>
        </section>

      </main>
    </body>
  );
}

export default App;