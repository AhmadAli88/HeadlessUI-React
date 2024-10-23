import { useState } from 'react'
import './App.css'
import DropdownMenu from './components/DropdownMenu'
import MyDisclosure from './components/Disclosure'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    {/* <DropdownMenu/> */}
    <MyDisclosure/>
   </div>
  )
}

export default App
