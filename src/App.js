import { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import AppTodo from './component/todoList/AppTodo';

const filters = ['all', 'completed', 'active'];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <div>
      <Header filters = {filters} filter = {filter} onFilterChange = {setFilter}/>
      <AppTodo filter = {filter} />
    </div>
  );
}

export default App;
