import { useState } from 'react';

export const SingleCard = ({ image }) => {
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false); // Nuevo estado para el segundo div

    function toggleMenu(e) {
        e.stopPropagation();
        setIsOpen2(!isOpen2); // Cambia el estado de isOpen2
        if (isOpen2) setIsOpen3(false); // Si isOpen2 se activa, desactiva isOpen3
    }

    // Función para manejar el clic en el botón que controla la visibilidad del segundo div
    function toggleSecondDiv() {
        if (isOpen2) {
            setIsOpen2(false); // Desactiva isOpen2
            setIsOpen3(true); // Activa isOpen3
        } else if (isOpen3) {
            setIsOpen3(false); // Desactiva isOpen3
            setIsOpen2(true); // Activa isOpen2
        } else {
            // Si ninguno está activo, puedes decidir cuál activar por defecto
            setIsOpen2(true); // Activa isOpen2 por defecto
        }
    }

    return (
        <section className='bg-white p-6 w-full md:w-9/10 grid place-items-center border-2 border-gray-300 shadow-lg'>
            <figure className="logo w-36 md:w-60">
                <img src={image} alt="React Logo" />
            </figure>
            <div className="content">
                <h1>React</h1>
                <p className='text-xl md:text-2xl font-bold underline'>Una biblioteca de JavaScript para construir interfaces de usuario</p>
                <div className='w-full bg-slate-500 grid grid-cols-2 place-content-center p-4 rounded'>
                    <h1>Conoce más sobre React</h1>
                    <span className='grid place-items-center hover:cursor-pointer hover:bg-slate-700 hover:rounded-full' onClick={(e) => toggleMenu(e)}>+</span>
                </div>
                {isOpen2 && (
                    <div className='bg-gray-400 p-4 rounded-lg text-center'>
                        <a href="https://www.youtube.com/watch?v=mCdA4bJAGGk">Referencias</a>
                        <div onClick={toggleSecondDiv} className='mt-4 cursor-pointer text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded'>
                            Otro div
                        </div>
                    </div>
                )}
                {isOpen3 && (
                    <div className='bg-blue-400 p-4 mt-4 rounded-lg text-center'>
                        <img className='w-32' src={image}></img>
                    </div>
                )}
            </div>
        </section>
    )
}