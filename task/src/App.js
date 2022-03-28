import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import UserList from './components/UserList';
import UserDetails from './components/UserDetails';


import { useState, useEffect } from 'react';
function App() {
  

  return (
    <div>
      <Router>

        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/user/:userId' element={<UserDetails />} />
          <Route>404 Not Found</Route>
        </Routes>


      </Router>
    </div>
  );
}

export default App;
