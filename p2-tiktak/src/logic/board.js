import { WINNER_COMBOS } from '../constants.js'

export const checkWinnerFrom = (boardToCheck) => {
    //recorrer los combos ganadores y verificar si hay un ganador
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (boardToCheck[a] && // si el square no está vacío
            boardToCheck[a] === boardToCheck[b] && // si el square a es igual al square b
            boardToCheck[a] === boardToCheck[c]) // si el square a es igual al square c
        {
            return boardToCheck[a] // x u o
        }
    }
    return null //si no hay ganador
}