import React from "react";
import cl from'./Search.module.css';
import sourch from '../assets/крестики.png'
import {SearchContext} from "../../App";

const Search=()=>{

const {search, setSelectedSearch} = React.useContext(SearchContext);

return(
	<>

<input value={search} onChange={(event)=>setSelectedSearch(event.target.value)} className={cl.search} placeholder='Поиск товара...'/> 
{search &&
<img src={sourch} className={cl.searchCross} onClick={()=>setSelectedSearch('')}/>}
</>
)}


export default Search;