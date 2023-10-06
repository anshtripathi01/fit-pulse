import { Route, Routes } from 'react-router';
import './App.css';
import { Dashboard } from './pages/Dashboard';
import { Exercise } from './pages/Exercise';
import { Food } from './pages/Food';
import { Goal } from './pages/Goal';
import { Header } from './components/Header';

function App() {
  return (
    <div>
    <Header />
   <Routes>
    <Route path='/' element={<Dashboard />} /> 
    <Route path='/exercise' element = {<Exercise />} />
    <Route path='/food' element = {<Food />} />
    <Route path='/goal' element = {<Goal />} />
   </Routes>
   </div>
  );
}

export default App;
