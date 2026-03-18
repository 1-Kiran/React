import "./index.css";
import Navbar from "./Navbar";
import Page1content from "./Page1content";

function Section1() {
  return (
    <div className="bg-amber-200 h-screen">
        <Navbar/>
        <Page1content />
    </div>
  )
}

export default Section1