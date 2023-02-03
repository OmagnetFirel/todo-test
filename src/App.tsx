import CriarTarefa from "./components/CreateTask";
import TaskList from "./components/TaskList";
import "./app.scss"
function App() {

  return (
    <div className="App">
      <div>
        <h1>Study Test</h1>
      </div>
      <CriarTarefa />
      <TaskList />
    </div>
  )
}

export default App
