import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound404 = () => {
  const router = useRouter();

  useEffect(() => {
    console.log("use effect run");
    setTimeout(() => {
      //router.go(1)
      router.push("/");
    }, 5000);
  }, []);

  return (
    <>
      <Head>
        <title>Vonn website | 404 Error</title>
      </Head>
      <div className="not-found">
        <h1>Oppppss...</h1>
        <h1>That page cannot be found</h1>
        <p>
          Go back to the{" "}
          <Link href="/">
            <a>Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound404;
