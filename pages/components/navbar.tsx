import Link from "next/link";

export const ProjectNavbar = () => {
  return (
    <div className="bg-navPink">
      <nav className="flex items-center justify-between container mx-auto pt-6 pb-6">
        <div className="flex justify-center items-center gap-10">
          <h1 className="text-3xl font-Pattaya text-lightGray ">Sophia Ameh </h1>
          
          <div className="loader"></div>
        </div>
        <ul className="flex gap-10 items-center font-mulish text-lg text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Service</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
