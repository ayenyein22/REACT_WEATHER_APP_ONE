import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather.js";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">Weather App</h1>
        <Weather defaultCity="New York" />
        <footer className="text-center">
          This project is coded by Aye Nyein San and is<span> </span>
          <a href="#" target="_blank">
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
