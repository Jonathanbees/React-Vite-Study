//Nota: Añadir menú desplegable para más opciones (seguir practicando)
export const Header = () => {
    return (
        <header className='w-full bg-blue-800 text-gray-100 font-mono text-xl flex justify-between items-center p-4 md:flex-col sm:flex-col lg:flex-row'>
            <h1 className='text-3xl font-bold hover:cursor-pointer'>React</h1>
            <div className='flex items-center space-x-8'>
                <button className='px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300'>Inicio</button>
                <button className='px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-600 active:bg-gray-600 focus:bg-gray-600 focus:ring focus:ring-gray-300'>Contacto</button>
            </div>
        </header>
    );
}