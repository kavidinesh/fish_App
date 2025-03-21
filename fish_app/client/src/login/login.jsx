import { AiOutlineMail } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiFacebook } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import { toast } from "react-hot-toast";

export function Login() {
  const admin = "admin@gmail.com";
  const customer = "chathu@gmail.com";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  function handleEmail(e) {
    let value = e.target.value.replace(/[^a-zA-Z0-9@.]/g, "");
    setEmail(value);
  }

  async function handleLogin() {
    if (!email) {
      toast.error("Please fill email ");
      return;
    }
    if (!password) {
      toast.error("please fill password");
      return;
    }
    if (admin == email) {
      toast.success("Login Successfully");
      navigation("/admin/");
    }
    if (customer == email) {
      toast.success("Login Successfully");
      navigation("/home");
    } else {
      toast.error("User not Found");
    }
  }

  return (
    <div>
      <div className="bg-picture bg- w-full h-screen flex justify-center items-center ">
        <div className="w-[400px] h-[600px] backdrop-blur-xl rounded-2xl flex flex-col justify-center items-center relative ">
          <img
            src="./logo.png"
            className="w-[100px] f-[100px] object-cover  top-2 absolute rounded-full animate-pulse"
          ></img>
          <span className="text-black text-3xl mb-6 mt-2 font-bold animate-bounce ">
            Login
          </span>
          <input
            type="email"
            required
            placeholder="Email"
            className="w-[300px] h-[30px] bg-transparent border-b-2 border-gray-800 text-xl font-semibold text-black outline-none?"
            onChange={(e) => {
              handleEmail(e);
            }}
            value={email}
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="w-[300px] h-[30px] bg-transparent border-b-2 border-gray-800 mt-6 text-xl font-semibold text-black outline-none?"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <Link to="" className="ml-[150px] mt-1.5 hover:text-red-600">
            Forgot Password
          </Link>

          <div className=" w-80 h-[100px] flex flex-row items-center justify-between">
            <button
              className="mt-6 w-[100px] h-[40px] bg-secondary text-lg text-black font-semibold rounded-lg "
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="mt-6 w-[100px] h-[40px] bg-secondary text-lg text-black font-semibold rounded-lg"
              onClick={() => {
                navigation("/signup");
              }}
            >
              SignUp
            </button>
          </div>

          <div>
            <span>or sign up</span>
            <div className="w-75 h-[60px]  flex flex-row items-center justify-between">
              <FcGoogle className="size-11.5" />
              <SiFacebook className="size-10 text-[#1877F2]" />
              <AiFillTwitterCircle className="size-11.5 text-[#1DA1F2]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
