import {Routes,Route, NavLink} from 'react-router-dom';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import NavBar from './helpers/NavBar';

function App() {

  return (
    <div className="bg-slate-100">
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/portfolio' element={ <Portfolio /> }  />
        <Route path='/project/:id' element={ <Project /> }  />
        <Route path='*' element={ <PageNotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
