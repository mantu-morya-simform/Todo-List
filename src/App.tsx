import "./App.css";
import Header from "./components/Header/Header";
import TodoInput from "./components/Input/TodoInput";
import Progress from "./components/Progress/Progress";
import TodoList from "./components/Todo/TodoList";

function App() {
  return (
    <>
      <Header />
      <Progress />
      <TodoInput />
      <TodoList />
    </>
  );
}

export default App;
