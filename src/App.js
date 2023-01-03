
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { useEffect, useState } from 'react';
import './App.css';
import CharacterCard from './components/cards';
import Pagination from './components/pagination';

function App() {

  let [pageNumber, setPageNumber] = useState(1);
  let [characterData, updateCharacterData] = useState([]);

  let {info,results} = characterData;
console.log(info);

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateCharacterData(data);
    }());
  },[api]);



  return (
    <div className="App">
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <h1 className="text-center my-3 mx-5"> The Rick and Morty API</h1>
      </nav>


      <div className="container text-center my-5">
        <div className="row">
      
          <CharacterCard results={results}/>
          <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}></Pagination>
        </div>
        
      </div>
    </div>
  );
}

export default App;
