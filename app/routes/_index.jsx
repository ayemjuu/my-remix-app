import { Link } from "@remix-run/react"

export default function Index () {


  return (

    <div id="background" className=" h-screen w-full flex justify-center p-10 ">
      <div className="flex flex-col leading-9 w-full px-5 py-8">
        <h1 className="text-7xl font-bold">TODO'S</h1>
        <p className="mb-10 font-bold text-4xl text-sky-400">A mini-project by Kyle (jsx)</p>
        <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

        <div className="flex items-center justify-center">
          <Link to={'/notes'}> <button className="  text-2xl font-bold text-black bg-sky-400 px-3 py-1.5 rounded hover:bg-black hover:text-sky-400
          ">Open Todo</button></Link>
        </div>
      </div>
    </div>

  )
}



// export function links () {
//     return [{rel: 'stylesheet', href: mainStyles }]
// }


