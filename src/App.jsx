import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from "react-redux";
import authService from './appwrite/auth';
import { login, logout } from './store/authSilce';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';
function App() {

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    authService.getCurrUser().then((userData) => {
      if (userData) {
        dispatch(login({ userData }));
      } else {
        dispatch(logout());
      }
    }).finally(() => {
      setLoading(false);
    })
  }, [])
  return !loading ? (
    <div className="min-h-screen w-full flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        {/* <Header></Header> */}
        <main>
          <Outlet></Outlet>
        </main>
        {/* <Footer></Footer> */}
      </div>
    </div>
  ) : null;
}

export default App
