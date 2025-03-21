import { AiOutlineMail } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiFacebook } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import { useState } from "react";
import { toast } from "react-hot-toast";

export function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [fullName, setFullName] = useState("");
  const navigation = useNavigate();

  function handleFullName(e) {
    let value = e.target.value.replace(/[^a-zA-Z]/g, "");
    setFullName(value);
  }

  function handleEmail(e) {
    let value = e.target.value.replace(/[^a-zA-Z0-9@.]/g, "");
    setEmail(value);
  }

  async function handleSignUp() {
    if (!fullName) {
      toast.error("Please enter fullName");
      return;
    }
    if (!username) {
      toast.error("Please enter username");
      return;
    }
    if (!email) {
      toast.error("Please enter email");
      return;
    }
    if (!password) {
      toast.error("Please enter password");
      return;
    }

    if (password !== repassword) {
      toast.error("Passwords do not match");
      return;
    }
    toast.success("Sign Up Successful");
    navigation("/");
  }

  return (
    <div>
      <div className="bg-picture w-full h-screen flex justify-center items-center">
        <div className="w-[500px] h-[700px] backdrop-blur-xl rounded-2xl flex flex-col justify-center items-center relative">
          <img
            src="./logo.png"
            className="w-[100px] f-[100px] object-cover top-2 absolute rounded-full animate-pulse"
          ></img>
          <span className="text-black text-3xl mb-6 mt-2 font-bold animate-bounce">
            Sign Up
          </span>

          <input
            type="text"
            required
            placeholder="Full Name"
            className="w-[300px] h-[30px] bg-transparent border-b-2 border-gray-800 text-xl font-semibold text-black outline-none"
            onChange={handleFullName}
            value={fullName}
          ></input>

          <input
            type="text"
            required
            placeholder="Username"
            className="w-[300px] h-[30px] bg-transparent border-b-2 border-gray-800 mt-6 text-xl font-semibold text-black outline-none"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          ></input>
          <input
            type="email"
            required
            placeholder="Email"
            className="w-[300px] h-[30px] bg-transparent border-b-2 mt-6 border-gray-800 text-xl font-semibold text-black outline-none"
            onChange={handleEmail}
            value={email}
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="w-[300px] h-[30px] bg-transparent border-b-2 border-gray-800 mt-6 text-xl font-semibold text-black outline-none"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Re-enter Password"
            className="w-[300px] h-[30px] bg-transparent border-b-2 border-gray-800 mt-6 text-xl font-semibold text-black outline-none"
            onChange={(e) => setRepassword(e.target.value)}
          ></input>

          <div className="w-80 h-[100px] flex flex-row items-center justify-between">
            <button
              className="mt-6 w-[100px] h-[40px] bg-secondary text-lg text-black font-semibold rounded-lg"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>

          <div>
            <span>or sign up with</span>
            <div className="w-75 h-[60px] flex flex-row items-center justify-between">
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
