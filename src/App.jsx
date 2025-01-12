import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import HomePage from "./components/Homepage"
import AppPostList from "./pages/AppPostList"
import About from "./pages/About"
import CreatePost from "./pages/admin/CreatePost"
import ShowPost from "./pages/admin/ShowPost"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/postList">
            <Route index element={<AppPostList/>}/>
            <Route path="create" element={<CreatePost/>}/>
            <Route path=":id" element={<ShowPost/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
