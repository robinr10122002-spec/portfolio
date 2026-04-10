import { FaUser, FaCode, FaRocket } from "react-icons/fa";
export function About() {
  return (
    <>
    <div className="about-content">
      <h1 className="highlight-name">This is Robin. R</h1>
      <h2 className="highlight-domain">I am a Full Stack Developer</h2>
    </div>
      <div className="about">
      <img 
      
        src="https://media.licdn.com/dms/image/v2/D5635AQHUGIS-8meFpg/profile-framedphoto-shrink_400_400/B56Zs_xMpqJsAc-/0/1766301420476?e=1776445200&v=beta&t=CU_ioTmkMuDEj6HfmBr0WLdVS3jknTgiF2JZaUa0uXU" 
        alt="profile" 
        className="profile-img"
      />

      <h2><FaUser /> About Me</h2>

      <p>
        I am a <span className="highlight">Full Stack Developer</span> skilled in 
        <span className="highlight"> React</span>, 
        <span className="highlight"> Python</span>, 
        <span className="highlight"> Flask</span>, and 
        <span className="highlight"> PostgreSQL</span>.
      </p>

      <p>
        <FaCode /> I build <span className="highlight">responsive web applications</span> 
        and <span className="highlight">REST APIs</span>.
      </p>

      <p>
        <FaRocket /> I am passionate about learning new technologies and 
        looking for an opportunity to start my career.
      </p>

    </div>
    </>
  );
}