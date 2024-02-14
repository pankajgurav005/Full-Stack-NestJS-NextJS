import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <div className="h-14 flex justify-center content-center border-white">
        <Link href="/" className="h-auto flex flex-wrap content-center">
          <span className="text-xl font-bold text-white">DEMO APP</span>
        </Link>
      </div>
      <div>
        <ul className="flex flex-col gap-4 px-4">
          <li>
            <Link className="text-white font-bold" href={'/about'}>Home</Link>
          </li>
          <li>
            <Link className="text-white font-bold" href={'/about'}>About</Link>
          </li>
        </ul>
      </div>
    </>
  )
}