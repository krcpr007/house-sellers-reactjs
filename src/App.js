import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'; 
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Offers from './pages/Offers';
import Listing from './pages/Listing'; 
import ForgotPassword from './pages/ForgotPassword'; 
import Explore from './pages/Explore';
import NavBar from './components/NavBar';
import Category from './pages/Category';
import Contact from './pages/Contact'
import PrivateComponent from './components/PrivateComponent';
import { ToastContainer } from 'react-toastify';
import CreateListings  from './pages/CreateListings';
import 'react-toastify/dist/ReactToastify.css';
import EditListing from './pages/EditListing';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore/>}/>
          <Route path='/offers' element={<Offers/>}/>
          <Route path='/category/:categoryName' element={<Category/>}/>
          <Route path='/profile' element={<PrivateComponent/>}>
          <Route path='/profile' element={<Profile/>}/>
          
          </Route>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/create-listing' element={<CreateListings/>}/>
          <Route path='/edit-listing/:listingId' element={<EditListing/>}/>
          <Route path='/category/:categoryName/:listingId'  element={<Listing/>} />
          <Route path='/contact/:landlordId' element={<Contact />} />
        </Routes>
        <NavBar/>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
