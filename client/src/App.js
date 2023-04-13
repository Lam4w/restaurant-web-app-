import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { useSelector } from "react-redux";
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import Menu from './pages/menu/menu';
import Homepage from './pages/home/Home';

function App() {
  const isAuth = Boolean(useSelector((state) => state.token));
  
  return (
    <Router>
      <div className="App">
        <Header/>
          <Routes>
            <Route exact path="/" element={ isAuth ? <Homepage /> : <Navigate to='/login'/> } />
            <Route path="/login" element={ isAuth ? <Navigate to='/' /> : <Login /> } />
            <Route path="/register" element={ isAuth ? <Navigate to='/' /> : <Register /> } />
            <Route path="/user" element={ isAuth ? <Profile /> : <Navigate to='/login'/> } />
            <Route path="/menu" element={ isAuth ? <Menu /> : <Navigate to='/login'/> } />
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
