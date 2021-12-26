import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'; 
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Offers from './pages/Offers';
import ForgotPassword from './pages/ForgotPassword'; 
import Explore from './pages/Explore';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore/>}/>
          <Route path='/offers' element={<Offers/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
        </Routes>
        <NavBar/>
        {/* Navbar */}
      </Router>
    </>
  );
}

export default App;
