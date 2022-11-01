import './App.css';
import Header from "./components/Header/Header";
import Menu from "./components/Header/Menu";
import Katalog from "./components/Katalog/Katalog";
import About from "./components/About/About";
import Main from "./components/Main/Main";
import Lower from "./components/Lower/Lower";
import Contacts from "./components/Contacts/Contacts";
import ProductPage from './components/Katalog/ProductPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";



const App = () =>{

  return (
      <BrowserRouter>
  <div className="appWrap">

    <Header />
      <div className="appWrapContent">
        <Routes>
        
        <Route path='main/' element={ <Main /> } />
        <Route path='katalog/' element={ <Katalog/> } /> 
        <Route path='about/' element={ <About /> } />
        <Route path='product/' element={ <ProductPage /> } />
        <Route path='сontacts/' element={ <Contacts /> } />

        </Routes>
    

      </div>

    <Lower />
  </div>

    </BrowserRouter>
      )
  }

  export default App;
