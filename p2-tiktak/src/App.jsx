import { useState } from "react"

const TURNS = {
  X: 'x',
  O: 'o'
  }
/*Componente Square*/
const Square = ({ children,isSelected, updateBoard, index}) =>{

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


const WINNER_COMBOS = [
  [0,1,2], [3,4,5], [6,7,8], //filas
  [0,3,6], [1,4,7], [2,5,8], //columnas
  [0,4,8], [2,4,6] //diagonales
]


function App() {
  const [board,setBoard] = useState(Array(9).fill(null)) //usar board como state, este es inmutable, por eso se usa setBoard para actualizarlo

  const [turn, setTurn] = useState(TURNS.X) //usar turn como state

  const [winner, setWinner] = useState(null) //usar winner como state, null es que no hay ganador, false = empate

  const checkWinner = (boardToCheck) => {
    //recorrer los combos ganadores y verificar si hay un ganador
    for (const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if(boardToCheck[a] && // si el square no está vacío
        boardToCheck[a] === boardToCheck[b] && // si el square a es igual al square b
        boardToCheck[a] === boardToCheck[c]) // si el square a es igual al square c
        { 
        return boardToCheck[a] // x u o
      }
    }
    return null //si no hay ganador
  }
  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null) //si todos los squares están ocupados, retornar true
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    if(board[index] !== null || winner) return //si el square ya está ocupado no hacer nada
    //actualizar el tablero
    const newBoard = [...board] //crear una copia del board porque no se puede modificar directamente
    newBoard[index] = turn //actualizar el valor del square seleccionado con el valor de turn (x u o)
    setBoard(newBoard) //actualizar el board con la nueva copia

    //cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    
    //verificar si hay un ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) //empate
    }
  }

  return ( 
    <main className="board"> 
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Resetear juego</button>
      <section className="game"> 
        {board.map((_, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}> {/*pasar updateBoard y index como props para renderizar los squares dentro del tablero*/}
            {board[index]}
          </Square>
        ))}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      {
        winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>
                {winner === false ? 'Empató' : 'Ganó'}
              </h2>
              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Jugar otra vez</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
    )
  }
export default App
