import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { useSetRecoilState } from "recoil";
import { isLoggedIn } from "./utils/atoms";
import { useNavigate } from "react-router-dom";
import Form from './pages/Form';
import Main from './pages/Main';

function App() {
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(isLoggedIn);

  useEffect(() => {
    if (setIsLoggedIn) {
      navigate("/main", { replace: true });
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route exact path="/main" element={<PrivateRoute />}>
          <Route path="/main" element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
