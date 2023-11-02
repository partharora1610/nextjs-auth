import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-6 list-none ">
        <li className="bg-indigo-400">
          <Link href="/">Home</Link>
        </li>
        <li className="bg-indigo-400">
          <Link href="/api/auth/signin">Sign In</Link>
        </li>
        <li className="bg-indigo-400">
          <Link href="/api/auth/signout">Sign Out</Link>
        </li>
        <li className="bg-indigo-400">
          <Link href="/server">Server</Link>
        </li>
        <li className="bg-indigo-400">
          <Link href="/client">Client</Link>
        </li>
        <li className="bg-indigo-400">
          <Link href="/extra">Extra</Link>
        </li>
      </div>
      <h1>Hello! This is me!!!</h1>
    </main>
  );
}
