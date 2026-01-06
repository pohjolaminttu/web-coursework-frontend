import Etusivu from './pages/etusivu'
import Reseptit from './pages/reseptit'
import Uusi from './pages/uusi'
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'

const App = () => {

  return (
    /*<Route path='/reseptit/${id}' element={<Uusi />} /> */
    <Router>
      <Routes>
        <Route path="/" element={<Etusivu />} />
        <Route path='/reseptit' element={<Reseptit />} />
        <Route path='/reseptit/uusi' element={<Uusi />} />
      </Routes>
    </Router>
  )
}




export default App