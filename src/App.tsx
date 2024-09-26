import Login from "./pages/Login/Login"
import Costumers from "./pages/Costumers/Costumers"
import SelectedCostumers  from "./pages/Costumers-in/Costumers-in"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/costumers" element={<Costumers />} />
        <Route path="/seleted-costumers" element={<SelectedCostumers />} />
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
