import { useEffect, useState } from 'react'
//const CAT_IMAGE_ENDPOINT = `https://cataas.com/cat/says/${text}`
const CAT_FACT_ENDPOINT = `https://catfact.ninja/fact`
export function App () {

    const [fact, setFact] = useState()

    // fetch a random fact from the API
    useEffect(() => { //promesa que se ejecuta una vez, es una promesa porque es una funcion asincrona
        fetch(CAT_FACT_ENDPOINT)
            .then(response => response.json())
            .then(data => {
                const {fact} = data
                setFact(fact)
                
                const firstWord = fact.split(' ')[0] //array de palabras
                const threewords = fact.split(' ').slice(0, 3).join(' ') //array de palabras ya que slice 
                console.log(firstWord)
                console.log(threewords)
            }
        )
    }, [])

    // render the fact


    return (
        <main>
            <h1>My App</h1>
            <input type="text" />
            <button>Submit</button>
            <h2>Random Cat Fact</h2>
            {fact && <p>{ fact }</p>}
        </main>
    );
    
}