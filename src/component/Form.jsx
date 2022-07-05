import "./Form.css";
import Input from "./Input";

const Form = () => {
  return (
    <>
      <section className="form-wrap">
        <form id="form" className="form">
          <Input
            id={"id"}
            label={"ID"}
            type={"text"}
            placeholder={"아이디를 입력해주세요."}
          />
          <Input
            id={"pw"}
            label={"PW"}
            type={"password"}
            placeholder={"비밀번호를 입력해주세요."}
          />
          <div className="form__btn-wrap">
            <button type="submit" className="form__btn-wrap__btn">
              login
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Form;
