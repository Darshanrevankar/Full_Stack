
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllNotes from './Components/AllNotes';
import NotesForm from './Components/NotesForm';
import Update from './Components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NotesForm />} />
          <Route path='/allNotes' element={<AllNotes />} />
          <Route path='/editnote/:index' element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
