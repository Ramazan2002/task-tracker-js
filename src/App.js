import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import Registration from './pages/registration'
import Header from './components/header'
import {AuthUser} from './globals/AuthUser'

function App() {
  return (
    <AuthUser>
      <Router>
        <Routes>
          <Route path={'login'} element={<Login />} />
          <Route path={'registration'} element={<Registration />} />
        </Routes>
      </Router>
    </AuthUser>
  )
}
export default App
