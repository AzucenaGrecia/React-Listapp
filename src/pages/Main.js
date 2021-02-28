import react from "react";
import CategoryList from "../components/Main/CategoryList";
import Footer from "../components/Main/Footer";
import Header from "../components/Main/Header";
import AddForm from "../components/UI/Forms/AddForm";
import OptionsFilter from "../components/UI/Forms/OptionsFilter";

export default function Main() {
  return (
    <>
      <Header />
      <OptionsFilter />
      < CategoryList />
      <AddForm />
      <Footer />
    </>
  );
}
