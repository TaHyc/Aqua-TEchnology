import './App.css';
import React from "react";
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


const [items, setItems] = React.useState([]);


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

    <Header />
      <div className="appWrapContent">
        <Routes>
        
        <Route path='main/' element={ <Main /> } />
        <Route path='katalog/' element={ <Katalog/> } /> 
        <Route path='about/' element={ <About /> } />
        <Route path='сontacts/' element={ <Contacts /> } />
        <Route path={path[0]} element={ <ProductPage all={items} id='0'/> } />
        <Route path={path[1]} element={ <ProductPage all={items} id='1'/> } />
        <Route path={path[2]} element={ <ProductPage all={items} id='2'/> } />
        <Route path={path[3]} element={ <ProductPage all={items} id='3'/> } />

        </Routes>
    

      </div>

    <Lower />
  </div>

    </BrowserRouter>
      )
  }

  export default App;
