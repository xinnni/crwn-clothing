import React, { useCallback, useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  }, []);

  const handleChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handleChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          value={email}
          onChange={handleChangeEmail}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={password}
          onChange={handleChangePassword}
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
};

export default SignIn;
