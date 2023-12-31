import React,{lazy,Suspense} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Loader from "./components/loader"
const Home=lazy(()=>import("./pages/home"))
const Cart=lazy(()=>import("./pages/cart"))
const Search=lazy(()=>import("./pages/search"))

const App = () => {
  return (
    
    <Router>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
      </Suspense>
    </Router>
    
  )
}

export default App
