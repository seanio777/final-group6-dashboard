import { Routes, Route } from 'react-router-dom'
import Dashboard  from './dashboard/Dashboard'
import Suing      from './suing/Suing'
import Verano     from './verano/Verano'
import Manlangit  from './manlangit/Manlangit'

export default function App() {
  return (
    <Routes>
      <Route path="/"           element={<Dashboard />} />
      <Route path="/suing"      element={<Suing />} />
      <Route path="/verano"     element={<Verano />} />
      <Route path="/manlangit"  element={<Manlangit />} />
    </Routes>
  )
}