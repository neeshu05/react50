import { useState } from 'react';
import "./styles.css";
import { SearchBar } from './SearchBar.jsx';
// import SearchResultsList from './SearchResultsList';
// import { SearchResultsList } from './SearchResult';
import { SearchResult } from "./SearchResult";
export default function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <div className="search-bar-container">
        <h1>latest Names</h1>
        <br/>
        <SearchBar setResults = {setResults}/>
        {results.map((result, id) => {
        return <SearchResult result={result.name} key={id} />;
      })}
      </div>
    </div>
  );
}
