import './App.scss';
import UserProfile from './components/UserProfile';
import UserDetails from './components/UserDetails';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';


function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<UserProfile/>} />
        <Route exact path='/userdetails' element={<UserDetails/> } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
