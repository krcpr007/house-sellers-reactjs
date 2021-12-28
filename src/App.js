import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'; 
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Offers from './pages/Offers';
import ForgotPassword from './pages/ForgotPassword'; 
import Explore from './pages/Explore';
import NavBar from './components/NavBar';
import PrivateComponent from './components/PrivateComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore/>}/>
          <Route path='/offers' element={<Offers/>}/>
          <Route path='/profile' element={<PrivateComponent/>}>
          <Route path='/profile' element={<Profile/>}/>
          </Route>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
        </Routes>
        <NavBar/>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
