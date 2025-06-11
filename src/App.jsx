import { useState } from "react";
import Nav from "./Nav";
import Moviesearch from "./Moviesearch";
import Movies from "./Movies";
import './styles.css';


function App() {
  const [results, setResults] = useState([]);

  console.log("searche result ", results);

  return (
    <div>
      <Nav></Nav>
      <Moviesearch setResults={setResults}></Moviesearch>

      <div className="flex flex-wrap justify-center gap-4 p-4">
        {results && results.length > 0 ? (
          results.map((result) => (
            <Movies result={result} key={result.imdbID} />
          ))
        ) : (
          <p>Pleas Search No data available</p>
        )}
      </div>
    </div>
  );
}

export default App;
