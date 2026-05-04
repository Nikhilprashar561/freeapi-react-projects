import { useEffect, useState } from "react"

function App() {

  const [apiData, setApiData] = useState()

  useEffect(async () => {
    const data = await fetch(``)
  }, [])
  
  return (
    <>
      <h1>Product Listing</h1>
    </>
  )
}

export default App
