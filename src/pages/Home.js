import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import Button from "../components/UI/Buttons/button";


export default function Home({ goto }) {
  const element = <FontAwesomeIcon className="icon-size" icon={faPencilAlt} />;

  return (
    <main className="home">
      <div className="home-container">
        <i>{element}</i>
        <h2>
          Welcome to <br /> listable
        </h2>
        <Button title="next" onPress={() => goto("welcome")}/>
      </div>
    </main>
  );
}
