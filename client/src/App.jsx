import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpdateListing from './Pages/UpdateListing';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import About from './Pages/About';
import Search from './Pages/Search';
import Listing from './Pages/Listing';
import PrivateRoute from './components/PrivateRoute';
import Profile from './Pages/Profile';
import CreateListing from './Pages/CreateListing';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/about' element={<About />} />
      <Route path='/search' element={<Search />} />
      <Route path='/listing/:listingId' element={<Listing />} />
      <Route element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile />} />
        <Route path='/create-listing' element={<CreateListing />} />
        <Route path='/update-listing/:listingId' element={<UpdateListing />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
};