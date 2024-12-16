import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Footer from './components/Footer/Footer'
import Product from './Pages/Product/Product'
const App = () => {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/service' element={<Product/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
