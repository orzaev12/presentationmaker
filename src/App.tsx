import "./App.css";
import Header from "./components/Header/Header.tsx";
import Editor from "./components/Editor/Editor.tsx"
import {Presentation} from "./types/types.ts"

type AppProps = {
  presentation: Presentation;
}

function App({presentation}: AppProps) {
  return (
    <div className="app">
      <Header />
      <Editor />
    </div>
  );
}

export default App;
