import { useState } from "react"
import confetti from "canvas-confetti"

import { Square } from "./components/Square.jsx"
import { WinnerModal } from "./components/WinnerModal.jsx"

import { TURNS } from "./constants.js"

import { checkWinnerFrom } from "./logic/board.js"



function App() {
  const [board,setBoard] = useState(() =>
    {
      const boardFromStorage = window.localStorage.getItem('board')
      return boardFromStorage ? JSON.parse(boardFromStorage) :
      Array(9).fill(null)
    }) //usar board como state, este es inmutable, por eso se usa setBoard para actualizarlo

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? turnFromStorage : TURNS.X
  }) //usar turn como state

  const [winner, setWinner] = useState(null) //usar winner como state, null es que no hay ganador, false = empate


  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null) //si todos los squares están ocupados, retornar true
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
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

    //guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard)) //no se puede guardar el board directamente, por eso se usa JSON.stringify
    window.localStorage.setItem('turn', newTurn) //no se puede guardar el board directamente, por eso se usa JSON.stringify
    //verificar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
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
        {board.map((square, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}> {/*pasar updateBoard y index como props para renderizar los squares dentro del tablero*/}
            {square}
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
        <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
    )
  }
export default App
