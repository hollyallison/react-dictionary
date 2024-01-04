import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Dictionary defaultKeyword="sunset" />
        <footer>
          This project was coded by{" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Holly Allison
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/hollyallison/react-dictionary"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;