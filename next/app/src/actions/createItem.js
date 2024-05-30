"use server";

import { ENDPOINT } from "@/constants";

export async function createItem(state, formData) {
  const id = formData.get("id");
  const title = formData.get("title");
  console.log("state is", state);

  if (id === "" || title === "") {
    return { msg: "空です" };
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, title }),
    });
    const data = await res.json();
    return { msg: `${data.id}:${data.title}の登録が完了しました` };
  } catch (e) {
    {
      msg: "登録でエラーが起きています";
    }
  }
}
