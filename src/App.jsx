/**
 * Author: Ria Gino
 * GitHub: https://github.com/astrobunnydev
 */

import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Cats from './pages/Cats.jsx'
import Coffees from './pages/Coffees.jsx'
import Codes from './pages/Codes.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cats" element={<Cats />} />
        <Route path="coffees" element={<Coffees />} />
        <Route path="codes" element={<Codes />} />
      </Route>
    </Routes>
  )
}

export default App
