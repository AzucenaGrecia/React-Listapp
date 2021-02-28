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
        
        <footer className="add-form__footer">
          <a
            className="link"
            href="#cancel"
          >
            Cancel
          </a>
          <button type="submit" className="link">
            Add new Todo
          </button>
        </footer>
      </div>
    </form>
  );
}