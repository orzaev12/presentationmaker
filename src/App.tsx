import "./App.css"
import Header from "./components/Header/Header"
import Editor from "./components/Editor/Editor"
import { useArrowsListeners } from "./hooks/useArrowsListener"
import { useUndoRedoListeners } from "./hooks/useUndoRedoListeners"

function App() {
  useArrowsListeners()
  useUndoRedoListeners()
  return (
    <div id="app" className="app">
      <Header />
      <Editor />
    </div>
  )
}

export default App
