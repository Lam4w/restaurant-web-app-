import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import Menu from './pages/menu/menu';
import Homepage from './pages/home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user" element={<Profile />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
