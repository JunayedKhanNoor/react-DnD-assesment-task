import logo from './logo.svg';
import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Example from './example';

function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Example />
      </DndProvider>
    </>
  );
}

export default App;
