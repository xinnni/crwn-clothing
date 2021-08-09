import React, { useState, useCallback } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        alert("Hey, password don't match!");
        return;
      }

      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );

        await createUserProfileDocument(user, { displayName });

        setDisplayName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } catch (error) {
        console.log(error);
      }
    },
    [displayName, email, password, confirmPassword]
  );

  const handleChangeDisplayName = useCallback((e) => {
    setDisplayName(e.target.value);
  }, []);

  const handleChangeEmail = useCallback((e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  }, []);
  const handleChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleChangeConfirmPassword = useCallback((e) => {
    setConfirmPassword(e.target.value);
  }, []);

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChangeDisplayName}
          label="Display Name"
          required
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
          label="Password"
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
