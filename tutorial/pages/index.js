import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vonn Website | home</title>
      </Head>
      <div>
        <h1>Homepage</h1>
        <p className={styles.container}>
          fdssfshngfdnmdbdxncvxncnmaghfbgfsnmsfgdhdgsbdfsgv fh dfhjndfgjh
          TGBDSGNHASGH ASDG ADFH SDFH FGJ GDFGJN SDFG
        </p>
        <p className={styles.container}>
          fdssfshngfdnmdbdxncvxncnmaghfbgfsnmsfgdhdgsbdfsgv fh dfhjndfgjh
          TGBDSGNHASGH ASDG ADFH SDFH FGJ GDFGJN SDFG
        </p>
        <Link href="/vonn">
          <a>See Vonn links</a>
        </Link>
      </div>
    </>
  );
}
