import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import Registration from './pages/registration'
import Home from './pages/home'
import {AuthUser} from './globals/AuthUser'

function App() {
  return (
    <AuthUser>
      <Router>
        <Routes>
          <Route path={'login'} element={<Login />} />
          <Route path={'registration'} element={<Registration />} />
          <Route path={'/'} element={<Home />} />
        </Routes>
      </Router>
    </AuthUser>
  )
}
export default App
