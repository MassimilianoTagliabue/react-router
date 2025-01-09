import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import About from "./components/About"
import HomePage from "./components/Homepage"
import AppPostList from "./components/AppPostList"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/postList" element={<AppPostList/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
