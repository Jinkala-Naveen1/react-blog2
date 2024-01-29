import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Topbar from './components/Topbar/topbar';
import Home from './Pages/Home/home';
import Register from './Pages/Registration/register';
import Login from './Pages/Login/login';
import Settings from './Pages/Settings/settings';
import Single from './Pages/Single/single';
import Write from './Pages/Write/wite';

function App() {
  const currentUser = false; // Set to true or false based on authentication status

  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={currentUser ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/login"
          element={currentUser ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/post/:id" element={<Single />} />
        <Route
          path="/write"
          element={
            currentUser ? (
              <Write />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/settings"
          element={
            currentUser ? (
              <Settings />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
