import './App.css';
import React from "react";
import {selPools} from "./components/products";
import Header from "./components/Header/Header";
import Menu from "./components/Header/Menu";
import Service from "./components/Service/Service";
import Katalog from "./components/Katalog/Katalog";
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


const [items, setItems] = React.useState([]);
const [search, setselectedSearch] = React.useState('');


React.useEffect(()=>{

fetch('https://635ffdbb3e8f65f283c0fff9.mockapi.io/items')
.then(res=>res.json()
).then((arr)=>{
  setItems(arr)
})
},[])

let path= items.map(path=>`product/${path.art}`)

  return (
      <BrowserRouter>
  <div className="appWrap">
  <SearchContext.Provider value={{search, setselectedSearch}}>

    <Header />
      <div className="appWrapContent">
        <Routes>
        
        <Route path='main/' element={ <Main /> } />
        <Route path='katalog/' element={ <Katalog /> } /> 
        <Route path='about/' element={ <About /> } />
        <Route path='сontacts/' element={ <Contacts /> } />
        <Route path='portfolio/*' element={ <Portfolio /> } />
        <Route path='building/' element={ <Building /> } />
        <Route path='proeckting/' element={ <Proeckting /> } />
        <Route path={path[0]} element={ <ProductPage all={items} id='0'/> } />
        <Route path={path[1]} element={ <ProductPage all={items} id='1'/> } />
        <Route path={path[2]} element={ <ProductPage all={items} id='2'/> } />
        <Route path={path[3]} element={ <ProductPage all={items} id='3'/> } />
        <Route path={path[4]} element={ <ProductPage all={items} id='4'/> } />
        <Route path={path[5]} element={ <ProductPage all={items} id='5'/> } />
        <Route path={path[6]} element={ <ProductPage all={items} id='6'/> } />
        </Routes>
    

      </div>

    <Lower />
     </SearchContext.Provider>
  </div>

    </BrowserRouter>
      )
  }

  export default App;
