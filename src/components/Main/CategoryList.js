import "./CategoryList.css";

export default function CategoryList (){
  return(
    <section className="categoryList__container">
      <ul className="categoryList">

        <li className="categoryList__category"> Category 1
          <li className="categoryList__task">
            <div>
              <input type="checkbox"></input>
              <span>Task 1</span>
            </div>
            
            <a><i class="far fa-trash-alt"></i></a>
          </li>

          <li className="categoryList__task">
            <div >
              <input type="checkbox"></input>
              <span>Task 2</span>
            </div>
            <a><i class="far fa-trash-alt"></i></a>
          </li>
        </li>

        <li className="categoryList__category"> Category 2
          <li className="categoryList__task">
            <div>
              <input type="checkbox"></input>
              <span>Task 1</span>
            </div>
            
            <a><i class="far fa-trash-alt"></i></a>
          </li>

          <li className="categoryList__task">
            <div>
              <input type="checkbox"></input>
              <span>Task 2</span>
            </div>
            <a><i class="far fa-trash-alt"></i></a>
          </li>
        </li>
  
      </ul>      
    </section>
  );
}