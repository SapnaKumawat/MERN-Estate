import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/about" element={< About />} />
        <Route path="/profile" element={< Profile />} />
        <Route path="/signin" element={< SignIn />} />
        <Route path="/signup" element={< SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
