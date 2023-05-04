import './App.scss';
import UserProfile from './components/UserProfile';
import UserDetails from './components/UserDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <UserProfile/>
      <Routes>
        <Route exact path='/userdetails' element={<UserDetails/> } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
