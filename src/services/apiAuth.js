import client from "./client";

export async function signup(userData) {
  const avatar = userData.photo?.[0];

  const formData = new FormData();

  if (avatar) formData.append("photo", avatar);

  formData.append("name", userData.name);
  formData.append("email", userData.email);
  formData.append("about", userData.about);
  formData.append("password", userData.password);
  formData.append("passwordConfirm", userData.passwordConfirm);

  const { data: res } = await (
    await client({
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  ).post("/users/signup", formData);

  const { data, token, status, message } = res;

  if (status === "fail") {
    console.log(message);
    throw new Error(message);
  }

  return { user: data.user, token };
}

export async function login({ email, password }) {
  const { data: res } = await (
    await client()
  ).post("/users/login", {
    email,
    password,
  });

  const { data, token, status, message } = res;

  if (status === "fail") {
    throw new Error(message);
  }

  return { user: data.user, token, status };
}

export async function getCurrentUser() {
  const { data: res } = await (await client())("/users/me");

  const { data, status, message } = res;

  if (status === "fail") {
    throw new Error(message);
  }

  return { user: data.doc, status };
}

export async function logout() {
  const { data: res } = await (await client())("/users/logout");

  const { status, message } = res;

  if (status === "fail") {
    throw new Error(message);
  }
}

export async function updateCurrentUser(userData) {
  const avatar = userData.photo?.[0];
  console.log(avatar, userData.photo);

  const formData = new FormData();

  if (avatar) formData.append("photo", avatar);

  formData.append("name", userData.name);
  formData.append("about", userData.about);

  const { data: res } = await (
    await client({
      "Content-Type": "multipart/form-data",
    })
  ).patch("/users/updateme", formData);

  const { data, token, status, message } = res;

  if (status === "fail") {
    console.log(message);
    throw new Error(message);
  }

  return { user: data.user, token };
}

export async function updatePassword(userData) {
  const { data: res } = await (
    await client()
  ).patch("/users/updateMyPassword", userData);

  const { data, token, status, message } = res;

  if (status === "fail") {
    console.log(message);
    throw new Error(message);
  }

  return { user: data.user, token, status };
}
