import "./Form.css";

const Form = () => {
  return (
    <>
      <section className="form-wrapper">
        <form id="form" className="">
          <div>
            <label htmlFor="id">ID</label>
            <input type="text" id="id" placeholder="아이디를 입력해주세요." />
          </div>
          <div>
            <label htmlFor="pw">PW</label>
            <input
              type="password"
              id="pw"
              placeholder="비밀번호를 입력해주세요."
            />
          </div>
          <div>
            <button type="submit">login</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Form;
