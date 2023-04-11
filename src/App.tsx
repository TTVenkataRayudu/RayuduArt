import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../src/Components/HomePage';
import { NavSection } from '../src/Components/NavSection';
import './App.css';
import { LoginPage } from './Components/LoginPage';
 

function App() {
  return (
    //  <div className="App">
    //    <NavSection></NavSection>
    //    <HomePage></HomePage>
      //</div>
      <BrowserRouter>
          <NavSection/>
          <Routes>
              <Route path={RoutePaths.HOME} element={<HomePage />}></Route>
              <Route path={RoutePaths.LOGIN} element={<LoginPage />}></Route>
          </Routes>
      </BrowserRouter>
  );
}
export enum RoutePaths {
    HOME = "/",
    LOGIN = "/LoginPage",
}

export default App;
