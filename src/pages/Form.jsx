import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isLoggedIn } from "../utils/atoms";
import { signIn } from "../utils/auth";
import "./Form.css";

const Form = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(isLoggedIn);

  const submitHandler = () => {
    try {
      signIn({ userId, userPw });
      setIsLoggedIn((value) => true);
      navigate("/main", { replace: true });
    } catch (e) {
      alert("Failed to login");
      setUserId("");
      setUserPw("");
    }
  };

  return (
    <>
      <section className="form-wrap">
        <form id="form" className="form">
          <div className="form__input">
            <label htmlFor="id" className="form__input_label">
              ID
            </label>
            <input
              type="text"
              id="id"
              placeholder="ifg를 입력해주세요."
              className="form__input__input"
              value={userId}
              onChange={({ target: { value } }) => {
                setUserId(value);
              }}
            />
          </div>
          <div className="form__input">
            <label htmlFor="id" className="form__input_label">
              PW
            </label>
            <input
              type="password"
              id="pw"
              placeholder="1234를 입력해주세요."
              className="form__input__input"
              value={userPw}
              onChange={({ target: { value } }) => {
                setUserPw(value);
              }}
            />
          </div>
          <div className="form__btn-wrap">
            <button
              type="submit"
              className="form__btn-wrap__btn"
              onClick={submitHandler}
            >
              login
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Form;
