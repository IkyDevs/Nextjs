import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbars() {
  const pathname = usePathname();
  const router = useRouter();
  const { status }: { status: string } = useSession();

  return (
    <>
      <div className="flex justify-between   p-2 shadow">
        <h1 className="font-bold text-3xl">IkyDevs</h1>
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
          <Link href={"/dashboard"}>
            <li
              className={`${
                pathname === "/about/profile"
                  ? "text-teal-300 font-bold italic"
                  : "text-white"
              }`}
            >
              Dashboard
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
          <Link href={"/users"}>
            <li
              className={`${
                pathname === "/users"
                  ? "text-teal-300 font-bold italic"
                  : "text-white"
              }`}
            >
              users
            </li>
          </Link>
          <Link href={"/post"}>
            <li
              className={`${
                pathname === "/post"
                  ? "text-teal-300 font-bold italic"
                  : "text-white"
              }`}
            >
              Post
            </li>
          </Link>
          <Link href={"/todos"}>
            <li
              className={`${
                pathname === "/todos"
                  ? "text-teal-300 font-bold italic"
                  : "text-white"
              }`}
            >
              todos
            </li>
          </Link>
        </ul>
        <div className="flex">
          {status === "authenticated" ? (
            <button
              className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer text-black"
              onClick={() => signOut()}
            >
              LogOut
            </button>
          ) : (
            <button
              className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer text-black"
              onClick={() => signIn()}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </>
  );
}
