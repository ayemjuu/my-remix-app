import { NavLink } from "@remix-run/react"

function Navigation () {

    return (

        <nav>
            <header className="flex justify-center items-center gap-x-10 py-4 bg-white shadow-xl">
                <NavLink to={"/"}
                
                className={({ isActive }) =>
                    isActive ? '' : ' hover:text-sky-400'
                }
                >Home</NavLink>

                <NavLink to={"/notes"}
                className={({ isActive }) =>
                    isActive ? 'font-bold underline underline-offset-2 decoration-sky-400' : 'text-black hover:text-sky-400'
                }
                >Notes</NavLink>

                <NavLink to={"/about"}
                   className={({ isActive }) =>
                    isActive ? 'font-bold underline underline-offset-2 decoration-sky-400' : 'text-black hover:text-sky-400'
                }
                >About</NavLink>

                <NavLink to={"/support"}
                   className={({ isActive }) =>
                    isActive ? 'font-bold underline underline-offset-2 decoration-sky-400' : 'text-black hover:text-sky-400'
                }
                >Support</NavLink>

            </header>


        </nav>
    )
}

export default Navigation;