import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Main from './pages/Main';
import Welcome from './pages/Welcome';

function App() {
  const [page, setPage] = useState("home")

  let currentPage = null; 

  switch(page){
    case "home": 
      currentPage = < Home goto={setPage}/>;
      break;
    case "welcome":
      currentPage = < Welcome goto={setPage}/>
      break;
    case "main":
      currentPage = < Main goto={setPage}/>
      break;   
  }

  return (
    <div className="App">{currentPage}</div>
  );
}

export default App;
