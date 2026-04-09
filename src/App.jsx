import { Link, Route, Routes } from "react-router-dom"
import { About } from "./About"
import { Skills } from "./Skills"
import { Contact } from "./Contact"
 



 
 export  default function App(){
 
 
  return (
    <section>
  <h1>Welcome To My Portfolio </h1>
  <nav>
<Link to="/about">About</Link>
<Link to="/skills">Skills</Link>
<Link to="/contact">Contact</Link>
</nav>
<Routes>
  <Route path="/about"element=
  {<About/>}/>
 <Route path="/skills"element=
  {<Skills/>}/>
  <Route path="/contact"element={<Contact/>}/>
</Routes>
</section>
  )
}