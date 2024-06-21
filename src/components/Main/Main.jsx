import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import FirstPage from "../FirstPage/FirstPage";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Skill from "../Skills/Skill";

function Main() {
  return (
    <>
      <Navbar />
      <FirstPage />
      <About />
      <Skill />
      <Projects />
      <Contacts />
    </>
  );
}

export default Main;
