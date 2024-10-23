import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Home from './pages/Home';

function RefreshHandler({ setIsAuthenticated }) {
  const location = useLocation();
  // const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuthenticated(true);
      if (
        location.pathname === '/' ||
        location.pathname === '/login' ||
        location.pathname === '/signup'
      ) {
        return (
          <Routes>
            <Route path='/home' element={<Home />} />
          </Routes>
        );
        // navigate('/home', { replace: false });
      }
    }
  }, [location, setIsAuthenticated]);

  return null;
}

export default RefreshHandler;
