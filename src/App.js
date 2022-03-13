import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/login';
import Registration from "./pages/registration";
import Header from "./components/header";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"login"} element={<Login />} />
        <Route path={"registration"} element={<Registration />} />
      </Routes>
    </Router>
  );
}
export default App;
