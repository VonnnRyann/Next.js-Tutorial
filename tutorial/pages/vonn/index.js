import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { cruz: data },
  };
};

const Index = ({ cruz }) => {
  return (
    <div>
      <h1>show all data</h1>
      {cruz.map((cruz) => (
        <Link href={"/vonn/" + cruz.id} key={cruz.id}>
          <a>
            <h3>{cruz.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Index;
