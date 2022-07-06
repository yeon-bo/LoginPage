import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isLoggedIn } from "../utils/atoms";

const Main = () => {
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(isLoggedIn);

  const submitHandler = () => {
    try {
      setIsLoggedIn((value) => !value);
      navigate("/", { replace: true });
    } catch (e) {
      alert("Failed to logout");
    }
  };
  return (
    <>
      <p>Main Page</p>
      <button onClick={submitHandler}>Logout</button>
    </>
  );
};

export default Main;
