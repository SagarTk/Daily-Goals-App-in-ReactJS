import './App.css';
import Header from "./Components/Header"
import InputTask from './Components/InputTask';
import Nav from './Components/Nav';

function App() {
  return (
    <>
      <Nav />   
      
      <div className='todo-container'>
      
      <Header />
      <InputTask />
      </div>

    </>
    );
  }
  
  export default App;
  