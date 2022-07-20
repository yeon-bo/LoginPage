# 과제

## 요구 조건
- 로그인 페이지 컴포넌트 개발
- 최소 input 2개와 button 1개 사용
- 로그인시 Local Storage 로그인 정보 저장, 메인 페이지로 이동
- README.md 작성

## 사용 스펙
- react
- react-router-dom
- recoil

## 컴포넌트
- Form (login page)
- Main (main page)

## 코드 설명

### router
Outlet 사용으로 주소로 통한 접근 차단
```javascript
const PrivateRoute = () => {
  const isLogged = useRecoilValue(isLoggedIn);
  return isLogged ? <Outlet /> : <Navigate to="/" />;
};

<Routes>
 <Route path="/" element={<Form />} />
   <Route exact path="/main" element={<PrivateRoute />}>
   <Route path="/main" element={<Main />} />
 </Route>
</Routes>
```

### auth.js
id와 pw 데이터를 만드는 과정에서 보안문제로 auth.js로 분리
```javascript
export function signIn({ userId, userPw }) {
  const user = users.some(
    (user) => user.id === userId && user.pw === userPw
  );
  if (!user) throw new Error("정보가 일치하지 않습니다.");
}
```

### recoil
local storage를 확인하기 위한 상태 관리 라이브러리 recoil atom 사용
```javascript
const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
      });
  };

export const isLoggedIn = atom({
  key: "isLoggedIn",
  default: false,
  effects: [localStorageEffect("isLoggedIn")],
});
```

### catch
아이디가 틀릴 시 catch로 예외 발생처리
```javascript
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
```

### useEffect
local storage에 저장된 로그인 데이터가 true라면 메인 페이지로 바로 이동
```javascript
const Main = () => {
useEffect(() => {
    if (setIsLoggedIn) {
      navigate("/main", { replace: true });
    }
  }, []);
```

### logout
메인 페이지에서 로그아웃 버튼으로 local storage의 값 변경 -> 로그인 페이지로 이동
```javascript
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
```
