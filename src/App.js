
import './App.css';
import { DataContextProvider } from './context/DataContext/DataContext';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoItem from './components/ToDoItem/ToDoItem';
import ToDoInput from './components/ToDoInput/ToDoInput';
import ToDoContainer from './components/ToDoContainer/ToDoContainer';

function App() {

  return (
    <DataContextProvider>
      <ToDoContainer>
        <ToDoList>
          <ToDoItem/>
        </ToDoList>
        <ToDoInput/>
      </ToDoContainer>
    </DataContextProvider>
  );
}

export default App;
