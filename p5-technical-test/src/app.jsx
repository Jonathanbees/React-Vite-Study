import { useEffect, useState } from 'react'
//const CAT_IMAGE_ENDPOINT = `https://cataas.com/cat/says/${text}?size=50&color=red&json=true`
const CAT_FACT_ENDPOINT = `https://catfact.ninja/fact`
export function App() {

    const [fact, setFact] = useState()

    // fetch a random fact from the API
    useEffect(() => { //promesa que se ejecuta una vez, es una promesa porque es una funcion asincrona
        fetch(CAT_FACT_ENDPOINT)
            .then(response => response.json())
            .then(data => {
                const { fact } = data
                setFact(fact)

                const firstWord = fact.split(' ')[0] //array de palabras
                const threewords = fact.split(' ').slice(0, 3).join(' ') //array de palabras ya que slice dice cuantas palabras quiero tomar
                console.log(firstWord)
                console.log(threewords)
                fetch(`https://cataas.com/cat/says/${threewords}?size=50&color=red&json=true`)
                    .then(response => response.json())
                    .then(data => {console.log(data)})
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
            {fact && <p>{fact}</p>}
        </main>
    );

}