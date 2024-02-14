import Link from "next/link"

export default function Noaccess() {
  const redirectToLogin = () => {

  }
  return(
    <>
      <div className="flex flex-wrap content-center flex-col" style={{ height: '90vh', width: '95vw', textAlign: 'center' }}>
      <h1 className="text-2xl text-black font-bold">404 - Page Not Found</h1>
      <p className="text-xl text-black">Sorry, the page you are looking for might not exist.</p>
      <div className="text-center flex flex-wrap justify-center">
      <Link className="mt-4 rounded cursor-pointer uppercase h-8 text-sm bg-slate-800 w-24 text-white font-semibold flex flex-wrap justify-center content-center mr-4" href="/">
        Home
      </Link>
      </div>
    </div>
    </>
  )
}