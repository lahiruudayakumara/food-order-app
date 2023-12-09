import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PaymentSucess from '../pages/PaymentSucess'
import Cart from '../pages/Cart'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainRouter = () => {

  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/payment-sucess' element={<PaymentSucess />} />
        </Routes>
        <Footer/>        
    </BrowserRouter>
  )
        

}

export default MainRouter
