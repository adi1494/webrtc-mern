import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './components/shared/Navigation/Navigation';
import Home from './pages/Home/Home.jsx';
import Signin from './pages/SignIn/Signin';
import Register from './pages/Register/Register';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/signin" element={<Signin/>}/>
        <Route exact path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
