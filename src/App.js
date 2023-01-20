import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Header/Menu";
import Service from "./components/Service/Service";
import Katalog from "./components/Katalog/Katalog";
import Detailed from "./components/Portfolio/Detailed";
import About from "./components/About/About";
import Main from "./components/Main/Main";
import Building from "./components/Building/Building";
import Proeckting from "./components/Proeckting/Proeckting";
import Lower from "./components/Lower/Lower";
import Contacts from "./components/Contacts/Contacts";
import ProductPage from './components/Katalog/ProductPage';
import Portfolio from "./components/Portfolio/Portfolio";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export const SearchContext = React.createContext('');

const App = () =>{

const [search, setSelectedSearch] = React.useState('');

return (

      <BrowserRouter>
  <div className="appWrap">
  <SearchContext.Provider value={{search, setSelectedSearch}}>

    <Header />
      <div className="appWrapContent">
        <Routes>
        
        <Route path='' element={ <Main /> } />
        <Route path='servis/' element={ <Service /> } />
        <Route path='katalog/' element={ <Katalog /> } /> 
        <Route path='katalog/:art' element={ <ProductPage/> } /> 
        <Route path='about/' element={ <About /> } />
        <Route path='сontacts/' element={ <Contacts /> } />
        <Route path='portfolio/' element={ <Portfolio  /> } />
        <Route path='portfolio/:id' element={ <Detailed /> }/>
        <Route path='building/' element={ <Building /> } />
        <Route path='proeckting/' element={ <Proeckting /> }/>

        </Routes>
    

      </div>

    <Lower />
     </SearchContext.Provider>
  </div>

    </BrowserRouter>  
      )

  }

  export default App;
