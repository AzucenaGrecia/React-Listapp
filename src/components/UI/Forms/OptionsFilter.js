import "./OptionsFilter.css"
export default function OptionsFilter(){
  return(
    <form className="options-form">
      <div className="options-form__container">
        <div className="options-form__opiton">
            <span>Show</span>
            <div>
              <input type="radio"/>
              <label>Pending</label>
              <input type="radio"/>
              <label>Completed</label>
              <input type="radio"/>
              <label>All</label>
            </div>
        </div>

        <div className="options-form__opiton">
            <span>Order Categories</span>
            <div>
              <input type="radio"/>
              <label>A-Z</label>
              <input type="radio"/>
              <label>Z-A</label>
            </div>
        </div>


        <div className="options-form__opiton">
            <span>Order Todos</span>
            <div>
              <input type="radio"/>
              <label>A-Z</label>
              <input type="radio"/>
              <label>Z-A</label>
            </div>
        </div>

      </div>
    </form>
    );
}