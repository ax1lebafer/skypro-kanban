const host = "https://wedev-api.sky.pro/api/kanban";
const loginHost = "https://wedev-api.sky.pro/api/user/login";
const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

export async function login({ login, password }) {
  const response = await fetch(loginHost, {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });

  if (response.status === 400) {
    throw new Error("Не верный логин или пароль!");
  }

  if (response.status === 500) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}

export async function getTasks() {
  const response = await fetch(host, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}
