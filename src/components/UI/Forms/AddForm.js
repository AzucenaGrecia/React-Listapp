import "./AddForm.css"
export default function AddForm (){
  return (
    <form className="add-form">
      <div className="add-form__container">
        <div className="add-form__option">
          <label>Description</label>
          <input type="text" placeholder="Do english homework"></input>
        </div>
        
        <div className="add-form__option">
          <label>Category</label>
          <input type="text" placeholder="English Classes"></input>
        </div>
      </div>
    </form>
  );
}