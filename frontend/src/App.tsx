import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import MonumentDetails from "./pages/MonumentDetails"

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/monument/:name" element={<MonumentDetails />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App