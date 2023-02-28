const users = [{ id: "user", pw: "1234" }];

export function signIn({ userId, userPw }) {
  const user = users.some(
    (user) => user.id === userId && user.pw === userPw
  );
  if (!user) throw new Error("정보가 일치하지 않습니다.");
}