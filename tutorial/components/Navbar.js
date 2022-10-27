import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/googleIcon.jpg" width={128} height={128} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/vonn">
        <a>Vonn Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
