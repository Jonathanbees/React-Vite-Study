export const Cards = ({image}) => {
    return (
        <div className='card bg-white p-6 m-2 grid place-items-center border-2 border-gray-300 shadow-lg'>
            <img src={image} alt="" className='w-60' />
            <h1>hola rey</h1>
        </div>
    );
}