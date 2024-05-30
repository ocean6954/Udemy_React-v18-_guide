import { ENDPOINT } from "@/constants";
import Client from "./components/Client";
import ArticleList from "../components/articleList";

export default async function SSR() {
  const articles = await fetch(ENDPOINT, { next: { revalidate: 10 } }).then(
    (res) => res.json()
  );

  return (
    <>
      <div>SSR Page</div>
      <Client />
      <ArticleList basePath={"/010_SSR"} list={articles}></ArticleList>
    </>
  );
}
