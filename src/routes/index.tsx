
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/Home'
import ProductPage from '../pages/Product'

export default function () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produto/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  )
}