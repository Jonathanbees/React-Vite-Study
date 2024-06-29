import { useState } from 'react';
import { FormModal } from './FormModal';

export const Form = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmarContraseña, setConfirmarContraseña] = useState('');
    const [enviado, setEnviado] = useState(false); // Estado para el modal

    const cerrarModal = () => {
        setEnviado(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevenir recarga de la página
        console.log({ nombre, email, contraseña, confirmarContraseña });
        setEnviado(true); // Mostrar el modal
    };

    return (
        <section className='bg-slate-500 mx-1 p-6 md:w-9/10 grid place-items-center border-2 border-gray-300 shadow-lg'>
            <div className='form w-full'>
                <h2 className='text-center'>Formulario de prueba</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label htmlFor="Nombre" className="block text-sm font-medium text-black">Nombre</label>
                            <input type="text" name="Nombre" id="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
                            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label htmlFor="contraseña" className="block text-sm font-medium text-black">Contraseña</label>
                            <input type="password" name="contraseña" id="contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="C_Contraseña" className="block text-sm font-medium text-black">Confirmar</label>
                            <input type="password" name="C_Contraseña" id="C_Contraseña" value={confirmarContraseña} onChange={(e) => setConfirmarContraseña(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</button>
                </form>
            </div>
            {enviado && <FormModal enviado={enviado} cerrarModal={cerrarModal} datos={{ nombre, email, contraseña, confirmarContraseña }} />}
        </section>
    );
};