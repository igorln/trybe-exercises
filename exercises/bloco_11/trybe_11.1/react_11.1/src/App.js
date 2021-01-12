import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const toDoList = ['wash car', 'clean room', 'buy food']

function App() {
  return toDoList.map(toDo => task(toDo)) ;
}

export default App;
