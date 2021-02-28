import "./Header.css"

export default function Header(){
  return(
    <div className="Header-main__container">
      <div className="header-main">
        <div>
          <p>Pending Todos</p>
        </div>
        <div>
          <a>options</a>
          <i class="fas fa-home"></i>
        </div>   
      </div>
    </div>
    
  )
}