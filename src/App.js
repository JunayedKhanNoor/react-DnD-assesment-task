import logo from './logo.svg';
import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Example from './example';

function App() {
  return (
    <>
      <h1 id="navbar">Xpeed Studio</h1>
      <DndProvider backend={HTML5Backend}>
        <Example />
      </DndProvider>
      <h1 id="footer">&copy; All Copy Rights Open</h1>
    </>
  );
}

export default App;
