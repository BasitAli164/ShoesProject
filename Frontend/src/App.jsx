import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
const App = () => {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
