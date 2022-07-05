import "./Form.css";

const Form = () => {
  return (
    <>
      <section className="form-wrap">
        <form id="form" className="form">
          <div className="form__id">
            <label htmlFor="id" className="form__label">
              ID
            </label>
            <input
              type="text"
              id="id"
              placeholder="아이디를 입력해주세요."
              className="form__input"
            />
          </div>
          <div className="form__pw">
            <label htmlFor="pw" className="form__label">
              PW
            </label>
            <input
              type="password"
              id="pw"
              placeholder="비밀번호를 입력해주세요."
              className="form__input"
            />
          </div>
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
