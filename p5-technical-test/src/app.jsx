import { useEffect, useState } from 'react'
//const CAT_IMAGE_ENDPOINT = `https://cataas.com/cat/says/${text}`
const CAT_FACT_ENDPOINT = `https://catfact.ninja/fact`
export function App () {

    const [fact, setFact] = useState('lorem ipsum dolor sit amet')

    // fetch a random fact from the API
    useEffect(() => {
        fetch(CAT_FACT_ENDPOINT)
            .then(response => response.json())
            .then(data => setFact(data.fact))
    }, [])

    // render the fact


    return (
        <main>
            <h1>My App</h1>
            <input type="text" />
            <button>Submit</button>
            <h2>Random Cat Fact</h2>
            <p>{ fact }</p>
        </main>
    );
    
}