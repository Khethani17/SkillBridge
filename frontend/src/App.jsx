import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return ( 
    <BrowserRouter>
    <Navbar />
    <main className="main-content">
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login />} />
       <Route path="/profile" element={<Profile />} />
     </Routes>
     </main>
     <Footer />
    </BrowserRouter>
   );
}
 
export default App;
