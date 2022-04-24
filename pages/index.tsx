export default function HomePage() {
return (
    <>
    <h3>Welcome to my simple next.js experiment</h3>
    <ul>
      <li>
        <a href="/catFacts">Click here to see a client side rendered page fetching and setting the data using react hooks</a>
      </li>
      <li>
        <a href="/catFactsSsr">Click here to see the same page with all data fetched and rendered on the server</a>
      </li>
    </ul>
    </>
  )
}

