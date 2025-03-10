import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'
import AboutUsPage from "./pages/AboutUsPage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="app min-vh-100">
          {/* Route definitions */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
