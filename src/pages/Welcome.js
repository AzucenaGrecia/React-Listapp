import react from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/UI/Buttons/button";
import "./Welcome.css"

export default function Welcome({ goto }){
  const element = <FontAwesomeIcon className="icon-size-medium" icon={faPencilAlt} />;

  return (
  <main className="welcome">
      <div className="welcome-container">
        <div className="welcome-title">
          <i>{element}</i> 
          <h2>Listable</h2>
        </div>

        <blockquote className="welcome-quote">
          <p className="quote">
          “Sometimes our stop-doing list needs to be bigger than our to-do list.”
          </p>
          <figcaption className="author">- Patti Digh</figcaption>
        </blockquote>

        <Button title="Start Here" onPress={()=>goto("main")}/>
      </div>
    </main>
    );
}