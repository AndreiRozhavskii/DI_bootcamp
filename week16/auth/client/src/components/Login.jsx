import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Box, TextField, Button } from "@mui/material";
import { AuthContext } from "../App";
import { BASE_URL } from "../App";

const Login = ({ page }) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const { setToken } = useContext(AuthContext);

  const navigate = useNavigate();

  const loginregister = async () => {
    if (page === "Login") {
      try {
        const response = await axios.post(
          BASE_URL + "/login",
          {
            email,
            password,
          },
          {
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          console.log(response.data);
          setToken(response.data);
          setMessage("");
          navigate("/");
        }
      } catch (error) {
        console.log(error);
        setMessage(error.response.data.msg);
      }
    } else {
      try {
        const response = await axios.post(
          BASE_URL + "/register",
          {
            email,
            password,
          },
          {
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          setMessage("");
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
        setMessage(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h2>{page}</h2>
      <Box component={"form"} sx={{ m: 1 }} autoComplete='off'>
        <TextField
          sx={{ m: 1 }}
          id='email'
          type='email'
          label='Enter your email'
          variant='outlined'
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          id='password'
          type='password'
          label='Enter your password'
          variant='outlined'
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Button onClick={loginregister} variant='contained'>
        {page}
      </Button>
      <div>{message}</div>
    </div>
  );
};
export default Login;
