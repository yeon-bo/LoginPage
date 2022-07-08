const users = [{ id: "ifg", pw: "1234" }];

export function signIn({ userId, userPw }) {
  const user = users.some(
    // some: 배열 중에서 true 값이 하나 이상 있다면 반환.
    (user) => user.id === userId && user.pw === userPw
  );
  if (!user) throw new Error("정보가 일치하지 않습니다.");
}
