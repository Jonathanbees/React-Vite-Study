/*Componente Square*/
export const Square = ({ children,isSelected, updateBoard, index}) =>{

    const className = `square ${isSelected ? 'is-selected' : ''}`
    const handleCLick = () => {
      updateBoard(index)
    }
    return (
      <div onClick={handleCLick} className={className}> {/*agregar evento onClick para que al hacer click en un square se ejecute la función updateBoard*/}
        {children} 
      </div>
    )
  } 
  /*Fin de componente Square*/