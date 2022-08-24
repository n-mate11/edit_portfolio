import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './routes/About/About';
import { Contact } from './routes/Contact/Contact';
import { Home } from './routes/Home/Home';
import { Work } from './routes/Work/Work';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/work' element={<Work />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
