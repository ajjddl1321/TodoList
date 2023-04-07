import { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import AppTodo from './component/todoList/TodoList/AppTodo';
import { DarkModeProvider } from './component/Context/DarkModeContext';

const filters = ['all', 'completed', 'active'];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header filters = {filters} filter = {filter} onFilterChange = {setFilter}/>
      <AppTodo filter = {filter} />
    </DarkModeProvider>
  );
}

export default App;
