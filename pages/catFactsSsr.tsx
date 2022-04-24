export interface Fact {
    fact: string
}

export async function getServerSideProps() {
    const response = await fetch('https://catfact.ninja/fact').then((res) => res.json())
    return {
        props: { fact: response.fact }, // will be passed to the page component as props
    }
}

export default function catFact(fact: Fact) {
  return (
    <>
        <h2>{fact.fact}</h2>
        <a href="/">back</a>
    </>)
}