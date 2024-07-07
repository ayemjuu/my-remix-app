
import { Link, NavLink } from "@remix-run/react"
import Todo from "../components/todo"
import Navigation from "../components/Navigation"

import background from "../images/bg.png"

export default function landingPage () {

    return (

        <div >
            <div className=" bg-[url('./images/bg.png')]">
            <Navigation></Navigation>
            <Todo></Todo>

            </div>
         
          

        </div>
    )
}