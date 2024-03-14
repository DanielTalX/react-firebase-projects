import { useState, useEffect } from "react";
import './App.css';
import './style.scss';
import Home from './pages/Home';
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Detail from './pages/Detail';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Auth from "./pages/Auth";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import AddEditRecipe from "./pages/AddEditRecipe";


function App() {
  const [active, setActive] = useState("home");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setActive("login");
      navigate("/auth");
    });
  };

  return (
    <div className="App">
      <Header
        setActive={setActive}
        active={active}
        user={user}
        handleLogout={handleLogout}
      />
      <ToastContainer position="top-center" />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route
          path="/create"
          element={
            user?.uid ? <AddEditRecipe user={user} /> : <Navigate to="/" />
          }
        />
        <Route path='/update/:id' element={<AddEditRecipe/>} />
        <Route path='/about' element={<About/>} />
        <Route
          path="/auth"
          element={<Auth setActive={setActive} setUser={setUser} />}
        />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
