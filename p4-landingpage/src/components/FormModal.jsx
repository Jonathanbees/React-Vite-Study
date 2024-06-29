export const FormModal = ({ enviado, cerrarModal, datos }) => {
    if (!enviado) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-lg font-semibold mb-4">Confirmar Datos</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre:</label>
                        <input type="text" id="nombre" value={datos.nombre} readOnly className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input type="email" id="email" value={datos.email} readOnly className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="contraseña" className="block text-sm font-medium text-gray-700">Contraseña:</label>
                        <input type="text" id="contraseña" value={datos.contraseña} readOnly className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmarContraseña" className="block text-sm font-medium text-gray-700">Confirmar Contraseña:</label>
                        <input type="text" id="confirmarContraseña" value={datos.confirmarContraseña} readOnly className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                    <div className="options grid grid-cols-2 place-content-center">
                    <button type="button" onClick={cerrarModal} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Enviar
                    </button>
                    <button type="button" onClick={cerrarModal} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                        Cerrar
                    </button>
                    </div>
                </form>
            </div>
        </div>
    );
};