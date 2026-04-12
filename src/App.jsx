import { Routes, Route } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import Suing     from './suing/Suing'
import Verano    from './verano/Verano'

export default function App() {
  return (
    <Routes>
      <Route path="/"       element={<Dashboard />} />
      <Route path="/suing"  element={<Suing />} />
      <Route path="/verano" element={<Verano />} />
    </Routes>
  )
}