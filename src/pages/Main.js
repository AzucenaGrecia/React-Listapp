import react from "react"
import Header from "../components/Main/Header";
import AddForm from "../components/UI/Forms/AddForm";
import OptionsFilter from "../components/UI/Forms/OptionsFilter";

export default function Main(){
  return (
    <>
      < Header />
      < OptionsFilter />
      < AddForm />
      {/* < OptionsFilter />
      < CategoryList />
      < AddForm />
      < Footer /> */}
    </>);
}