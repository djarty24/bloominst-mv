import { useState } from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Events from './components/events/Events'
import Footer from './components/footer/Footer'

function App() {
  return (
	<>
	<BrowserRouter>
	<Navbar />
		<Routes>
			<Route path='/' element={< Home/>}></Route>
			<Route path='/about' element={< About/>}></Route>
			<Route path='/events' element={< Events/>}></Route>
		</Routes>
    <Footer />
	</BrowserRouter>
	</>
  )
}

export default App