import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
//import Planets from './pages/Planets'
//import Transformations from './pages/Transformations'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path='planets' element={<Planets />} /> */}
          {/* <Route path='transformations' element={<Transformations />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
