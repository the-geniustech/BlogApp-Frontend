import client from "./client";

export async function getAllNews() {
  const { data: res } = await (await client())("/news");

  const { data, status, message } = res;

  if (status === "fail") {
    throw new Error(message);
  }

  return data.docs;
}

export async function getNewsDetails(id) {
  const { data: res } = await (await client())(`/news/${id}`);

  const { data, status, message } = res;

  if (status === "fail") {
    throw new Error(message);
  }

  return data.doc;
}

export async function createNews(newNews) {
  const avatar = newNews.coverImage?.[0];

  const formData = new FormData();

  if (avatar) formData.append("coverImage", avatar);

  formData.append("title", newNews.title);
  formData.append("summary", newNews.summary);
  formData.append("tags", newNews.tags);
  formData.append("content", newNews.content);

  const { data: res } = await (
    await client({
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  ).post("/news", formData);

  const { data, status, message, error, stack } = res;

  if (status === "fail") {
    console.log(message, error, stack);
    throw new Error(message);
  }

  return data;
}

export async function editPost(updatedPostData, id) {
  const avatar = updatedPostData.coverImage?.[0];

  const formData = new FormData();

  if (avatar) formData.append("coverImage", avatar);

  formData.append("title", updatedPostData.title);
  formData.append("summary", updatedPostData.summary);
  formData.append("tags", updatedPostData.tags);
  formData.append("content", updatedPostData.content);

  const { data: res } = await (
    await client({
      "Content-Type": "multipart/form-data",
    })
  ).patch(`/news/${id}`, formData);

  const { data, status, message, error, stack } = res;

  if (status === "fail") {
    console.log(message, error, stack);
    throw new Error(message);
  }

  return data;
}

export async function deletePost(id) {
  const { data: res } = await (await client()).delete(`/news/${id}`);

  const { data, status, message } = res;

  if (status === "fail") {
    throw new Error(message);
  }

  return data;
}
