import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../src/Components/HomePage';
import { NavSection } from '../src/Components/NavSection';
import './App.css';
import { LoginPage } from './Components/LoginPage';
import { PaintingsPage } from './Components/PaintingsPage';
import { SketchesPage } from './Components/SketchesPage';
import { RegistrationPage } from './Components/RegistrationPage';
import ImageUpload from './Components/ImageUpload';
import Explore  from './Components/Explore';
import ContactForm from './Components/ContactPage';
import ContactPage from './Components/ContactPage';


 

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
              <Route path={RoutePaths.PAINTINGSPAGE} element={<PaintingsPage />}></Route>
              <Route path={RoutePaths.SKETCHESPAGE} element={<SketchesPage />}></Route> 
              <Route path={RoutePaths.EXPLORE} element={<Explore />}></Route> 
              <Route path={RoutePaths.IMAGEUPLOAD} element={<ImageUpload />}></Route> 
              <Route path={RoutePaths.CONTACTPAGE} element={<ContactPage />}></Route> 

          </Routes>
      </BrowserRouter>
  );
} 
export enum RoutePaths {
    HOME = "/",
    LOGIN = "/LoginPage",
    REGISTER = "/RegistrationPage",
    PAINTINGSPAGE = "/PaintingsPage",
    SKETCHESPAGE = "/SketchesPage",
    IMAGEUPLOAD = "/ImageUpload",
    EXPLORE = "/Explore",
    CONTACTPAGE ="/ContactPage"



}

export default App;
