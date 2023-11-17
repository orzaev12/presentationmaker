import "./App.css";
import Header from "./components/Header/Header.tsx";
import Editor from "./components/Editor/Editor.tsx"
import {Presentation} from "./types/types.ts"
import present  from "./types/min.ts"
import { useState } from "react";

function App() {
  const [presentation, setPresentation] = useState<Presentation>(present)
  return (
    <div className="app">
      <Header presentation={presentation} setPresentation={setPresentation}/>
      <Editor presentation={presentation}/>
    </div>
  );
}

export default App;
