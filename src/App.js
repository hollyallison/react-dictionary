import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Dictionary defaultKeyword="sunset" />
        <footer>
          This project was coded by Holly Allison and open-sourced on 
          <a
  href="https://github.com/hollyallison/react-dictionary"
  target="_blank"
  rel="noopener noreferrer"
>
  GitHub
</a>

        </footer>
      </div>
    </div>
  );
}

export default App;