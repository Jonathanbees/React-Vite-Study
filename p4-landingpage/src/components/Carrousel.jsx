export const Carrousel = ({ images, prevImage, currentImageIndex, nextImage }) => {
    return (
        <div className='bg-white p-6 w-3/4 grid place-items-center border-2 border-gray-300 shadow-lg' style={{ gridTemplateColumns: '1fr 2fr 1fr' }}>
            <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded' onClick={prevImage}>&lt;</button>
            <img src={images[currentImageIndex]} alt="Carrusel" className="carousel-image" style={{ width: '100%', gridColumn: '2' }} />
            <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded' onClick={nextImage}>&gt;</button>
        </div>
    );
}
