import React from 'react' 
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom' 
import About from './pages/About'
import Resume from './pages/Resume' 
import Works from './pages/Works'
import Contact from './pages/Contact'
import Navbar from './components/Navbar/Navbar' 
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <> 
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Works />} />
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/*' element={<ErrorPage />} /> 
      </Routes>
    </>
  )
}

export default App