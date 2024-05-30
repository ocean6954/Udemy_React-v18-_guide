export default function Article({ data }) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.text}</p>
      <div>投稿日: {data.date}</div>
    </div>
  );
}
