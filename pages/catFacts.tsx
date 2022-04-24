import { useEffect, useState } from "react"

export async function fetchData() {
    const response = await fetch('https://catfact.ninja/fact').then((res) => res.json())
    return response.fact
}

export default function catFact() {

    const [fact, setFact] = useState('loading cat fact...')

    useEffect(() => {
        fetchData().then((fact) => setFact(fact))
    }, [])

    return (
        <>
            <h2>{fact}</h2>
            <a href="/">back</a>
        </>)
}