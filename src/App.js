import { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import AppTodo from './component/todoList/TodoList/AppTodo';

const filters = ['all', 'completed', 'active'];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      <Header filters = {filters} filter = {filter} onFilterChange = {setFilter}/>
      <AppTodo filter = {filter} />
    </>
  );
}

export default App;
