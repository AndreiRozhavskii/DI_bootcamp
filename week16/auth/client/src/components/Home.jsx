import { useState, useEffect } from "react";
import { BASE_URL } from "../App";
import axios from "axios";

const Home = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getusers();
  }, []);

  const getusers = async () => {
    try {
      const response = await axios.get(BASE_URL + "/users", {
        withCredentials: true,
      });
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2>Home</h2>
      {users.map((item) => {
        return <div key={item.id}>{item.email}</div>;
      })}
    </>
  );
};
export default Home;
