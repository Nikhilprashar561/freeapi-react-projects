import { useState } from "react"
import { Login } from "./Components/Login"
import { Register } from "./Components/Register"
import { Navbar } from "./Components/Navbar"


function App() {
  const [tabs, setTabs] = useState('register')

  return (
    <>
      <Navbar activeTab={tabs} onTabChange={setTabs} />
      {tabs === 'login' ? <Login onTabChange={setTabs} /> : <Register onTabChange={setTabs} />}
    </>
  )
}

export default App
