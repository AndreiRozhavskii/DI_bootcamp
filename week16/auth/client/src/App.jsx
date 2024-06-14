import { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Auth from "./auth/Auth";
import "./App.css";

export const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const AuthContext = createContext();

function App() {
  const [token, setToken] = useState();

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <Routes>
        <Route path='/' element={<Auth><Home/></Auth>} />
        <Route path='/login' element={<Login page="Login"/>}/> 
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
