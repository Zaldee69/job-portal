"use client";
import React, { useState } from "react";
import { buttonVariants } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const LoginOrRegisterDialog = () => {
  const [showLoginForm, setShowLoginForm] = useState<boolean>(true);

  const toggle = (): void => {
    setShowLoginForm((prev) => !prev);
  };

  return (
    <Dialog>
      <DialogTrigger className={buttonVariants()}>Login</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {showLoginForm ? "Login" : "Register"}
          </DialogTitle>
        </DialogHeader>
        {showLoginForm ? (
          <LoginForm toggle={toggle} />
        ) : (
          <RegisterForm toggle={toggle} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LoginOrRegisterDialog;
