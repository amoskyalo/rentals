import React,{useState} from "react";
import logo from "../../Assets/house.jpg";
// import { useDispatch } from "react-redux";
// import { login } from "./LoginSlice";
import { Link } from "react-router-dom";
import { FcManager } from "react-icons/fc";
import {BASE_URL} from "../Config/Config";
import axios from "axios";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setloginData((initial) => {
      return { ...initial, [e.target.name]: e.target.value };
    });
  };

//   const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${BASE_URL}/auth/login`,
        loginData
      );
    //   dispatch(login(res.data.user));
      setLoading(false);
      res.data && window.location.replace("/");
    } catch (error) {
      setLoginError(error.response.data);
      setLoading(false);
    }
  };

  return (
    <div className="bg-navColor h-screen overflow-auto">
      <div className="login flex flex-col items-center m-auto md:flex-row md:h-screen md:py-20">
        <div className="flex relative justify-center items-center h-[50vh] w-full md:w-1/2 md:h-full">
          <img
            src={logo}
            alt="house"
            className="object-cover h-full w-full rounded-l"
          />
          <div className="welcome flex flex-col justify-center absolute top-50 left-50 px-5 h-full w-full">
            <h2 className="animation text-white font-bold capitalize">
              <FcManager className="icon" /> Manage Your Rentals with ease and
              comfort...
            </h2>
          </div>
        </div>
        <div className="flex items-center w-[100%] rounded-r h-full bg-white md:w-1/2 md:px-10">
          <form
            action="#"
            className="w-full p-4 rounded mx-auto md:p-10"
            onSubmit={(e) => handleLogin(e)}
          >
            <h2 className="text-center mb-5 text-3xl font-semibold">Login</h2>
            <label htmlFor="#" className="block text-xl">
              Email
              <input
                type="text"
                name="email"
                placeholder="Enter your username"
                className="block border-2 text-lg w-full p-2 mt-1 rounded-3xl outline-none md:mt-2"
                onChange={(e) => handleChange(e)}
              />
            </label>
            <label htmlFor="#" className="block mt-2 text-xl md:mt-4">
              Password
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="block border-2 text-lg w-full p-2 rounded-3xl mt-1 mb-2 outline-none md:t-2"
                onChange={(e) => handleChange(e)}
              />
            </label>
            <Link to="/" className="text-navColor">
              Forget password
            </Link>
            <div className="flex justify-center md:mt-5">
              <button className="bg-navColor text-white py-2 w-full rounded-3xl text-lg mt-5" disabled={loading ? true : false}> 
              {loading ? "Loading..." : "Login"}
              </button>
            </div>
            {loginError ? (
              <div className="text-center text-redColor mt-1">
                <p>{loginError}!</p>
              </div>
            ) : (
              ""
            )}
            <div className="text-center mt-5 md:mt-10">
              <Link to="/signup" className="text-navColor">
                Creat an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
