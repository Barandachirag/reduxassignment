import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Thunkusers from './Thunkusers'
//import Thunkcomponent from './Thunkcomponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Thunkcomponent /> */}
     <BrowserRouter>
      <Routes>
        <Route path='/' Component={Thunkusers} />
      </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
