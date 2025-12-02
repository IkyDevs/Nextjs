import Link from "next/link";
import {  usePathname, useRouter } from "next/navigation";


export default function Navbars() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <>
      <div className="flex justify-between   p-2 shadow">
        <h1 className="font-bold text-3xl">Navbar</h1>
        <ul className="flex gap-x-10 justify-center items-center ml-5 cursor-pointer">
          <Link href={"/"}>
            <li
              className={`${
                pathname === "/"
                  ? "text-teal-300 font-bold italic"
                  : "text-white"
              }`}
            >
              Home
            </li>
          </Link>
          <Link href={"/about"}>
            <li
              className={`${
                pathname === "/about"
                  ? "text-teal-300 font-bold italic"
                  : "text-white"
              }`}
            >
              about
            </li>
          </Link>
          <Link href={"/about/profile"}>
            <li
              className={`${
                pathname === "/about/profile"
                  ? "text-teal-300 font-bold italic"
                  : "text-white"
              }`}
            >
              profile
            </li>
          </Link>
          <Link href={"/product"}>
            <li
              className={`${
                pathname === "/product"
                  ? "text-teal-300 font-bold italic"
                  : "text-white"
              }`}
            >
              product
            </li>
          </Link>
        </ul>
        <div className="flex">
          <button
            className="bg-white rounded  text-black px-3 cursor-pointer"
            onClick={() => router.push("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
