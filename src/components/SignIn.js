import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import Navbar from "./Navbar";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        window.location.assign("/home");
      })
      .catch((error) => alert(error));
  };
  return (
    <>
      <Navbar />
      <div className="center">
        <div className="mbox">
          <h1>Log in</h1>
          <form onSubmit={signin}>
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
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have and account?<a href="/register">Create one here</a>
          </p>
        </div>
      </div>
    </>
  );
};
export default SignIn;
