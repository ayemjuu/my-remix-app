

import { NavLink } from "@remix-run/react"
import Navigation from "../components/Navigation"
export default function About ()
{
    return (

        <div>
            <Navigation></Navigation>
            <div className="flex justify-center items-center h-screen w-full">
                <h1 className="text-5xl font-bold">About</h1>
            </div>

        </div>
    )
}