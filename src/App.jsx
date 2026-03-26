import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './Components/Landing'
import Header from './Components/Header'
import AboutUs from './Pages/AboutUs'
import Blogs from './Pages/Blogs'
import ContactPage from './Pages/ContactPage'
import ProductPage from './Pages/ProductPage'
import ProductGallery from './Pages/ProductGallery'
import OurManagement from './Pages/OurManagement'
import TradeEnquiry from './Pages/TradeEnquiry'
import QuotationPage from './Pages/QuotationPage'
import AuctionPage from './Pages/AuctionPage'
import TenderPage from './Pages/TenderContract'
import CareerPage from './Pages/CareerPage'
import CircularPage from './Pages/CircularPage'
import ReviewsPage from './Pages/ReviewsPage'
import AppointmentPage from './Pages/AppointmentPage'
import GalleryPage from './Pages/GalleryPage'
import Associates from './Pages/Associates'
import Footer from './Components/Footer'
import ScrollToTop from '../ScrollToTop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter>
    <ScrollToTop/>
    <Header/>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/blog' element={<Blogs/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='/gallery-sarees' element={<ProductGallery/>}/>
      <Route path='/management' element={<OurManagement/>}/>
      <Route path='/trade-enquiry' element={< TradeEnquiry/>}/>
      <Route path='/e-quotation' element={< QuotationPage/>}/>
      <Route path='/e-auction' element={<  AuctionPage/>}/>
      <Route path='/tender-contract' element={<  TenderPage/>}/>
      <Route path='/careers' element={< CareerPage/>}/>
      <Route path='/circular' element={< CircularPage/>}/>
      <Route path='/reviews' element={< ReviewsPage/>}/>
      <Route path='/appointment' element={< AppointmentPage/>}/>
      <Route path='/media' element={<  GalleryPage/>}/>
      <Route path='/associates' element={<Associates/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
     
    </>
  )
}

export default App
