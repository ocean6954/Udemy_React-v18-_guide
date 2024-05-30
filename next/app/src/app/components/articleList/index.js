import Link from "next/link";

export default function ArticleList({ basePath, list }) {
  return (
    <>
      <ul>
        {list.map((item) => {
          return (
            <li key={list.id}>
              <Link href={`${basePath}/${item.id}`}>
                <article>
                  <h1>{item.title}</h1>
                  <div>投稿日: {item.date}</div>
                </article>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
