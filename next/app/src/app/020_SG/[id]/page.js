import { paths } from "../paths";
export default async function Page({ params }) {
  const date = new Date();

  return (
    <>
      <h3>
        このページは{params.id}です。{date.toJSON()}
      </h3>
    </>
  );
}

export async function generateStaticParams() {
  return paths;
}
