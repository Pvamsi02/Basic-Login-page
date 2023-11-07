import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import Navbar from "./Navbar";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        alert("register Succesful");
        window.location.assign("/login");
      })
      .catch((error) => alert(error));
  };
  return (
    <>
    <Navbar/>
      <div class="center">
        <div class="mbox">
          <h1>Register</h1>
          <form onSubmit={signup}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Register</button>
          </form>
          <span>
            Already have an account?<a href="/login">login</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default SignUp;
