// import styles from "./page.module.css";
import { navList } from "@/data/nav";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul>
        {navList.map((item) => {
          return (
            <li key={item}>
              <Link href={`/${item}`}>{item}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
