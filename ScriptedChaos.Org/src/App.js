import './App.css';
import {BrowserRouter, Route, Routes, Router} from 'react-router-dom';
import Container from './components/Layout/Container';
import Home from './components/pages/Home';
import NavBar from './components/Layout/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>

        <Container>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            {/* <Route path='/joinTeam' element={</>}></Route> */}
            {/* <Route path='/List' element={</>}></Route> */}
          </Routes>
        </Container>
        
      </BrowserRouter>
    </>
  );
}

export default App;
