import { Link, Route, Routes } from "react-router-dom"
import { About } from "./About"
import { Skills } from "./Skills"
import { Contact } from "./Contact"
import { Projects } from "./Project"
 



 
 export  default function App(){
 
 
  return (
    <section>
  <h1>Welcome To My Portfolio </h1>
  <nav>
<Link to="/">About</Link>
<Link to="/skills">Skills</Link>
<Link to="/contact">Contact</Link>
<Link to="/projects">Projects</Link>
</nav>
<Routes>
  <Route path="/"element=
  {<About/>}/>

 <Route path="/skills"element=
  {<Skills/>}/>
  <Route path="/projects" element={<Projects/>}/>
  <Route path="/contact"element={<Contact/>}/>
</Routes>
<Skills/>
<Projects/>
<Contact/>
</section>

  )
}