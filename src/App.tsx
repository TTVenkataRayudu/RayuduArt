import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../src/Components/HomePage';
import { NavSection } from '../src/Components/NavSection';
import './App.css';
import { LoginPage } from './Components/LoginPage';
import { RegistrationPage } from './Components/RegistrationPage';
 

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
              <Route path={RoutePaths.REGISTER} element={<RegistrationPage />}></Route>
          </Routes>
      </BrowserRouter>
  );
}
export enum RoutePaths {
    HOME = "/",
    LOGIN = "/LoginPage",
    REGISTER="/RegistrationPage"
}

export default App;
