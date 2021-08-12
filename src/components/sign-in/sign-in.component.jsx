import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

export default function SignIn() {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(user.email, user.password);
      setUser({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}
