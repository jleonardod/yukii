import { BrowserRouter, Routes, Route } from "react-router-dom"
//Layouts
import LayoutAuth from "./layouts/LayoutAuth"

//Pages
import Login from "./pages/auth/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutAuth />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
