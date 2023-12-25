import "./App.css";
import Header from "./components/Header/Header.tsx";
import Editor from "./components/Editor/Editor.tsx"

function App() {
  return (
    <div className="app">
      <Header />
      <Editor />
    </div>
  );
}

export default App;
