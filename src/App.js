import './App.css';
import Auth from './components/Auth'
import Home from './components/Home'
import Recipe from './components/Recipe'
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/recipe/:id' element={<Recipe/>}/>
      </Routes>
    </div>
  );
}

export default App;
