import './App.scss';
import UserProfile from './components/UserProfile';
import UserDetails from './components/UserDetails';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Heade
      <Routes>
        <Route exact path='/' element={<UserProfile/>} />
        <Route exact path='/userdetails' element={<UserDetails/> } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
