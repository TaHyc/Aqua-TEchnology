import React from "react";
import cl from'./Header.module.css';
import Menu from "./Menu";
import Search from "./Search";
import korzina from '../assets/корзина.png'
import account from '../assets/аккаунт.png'
import sourch from '../assets/поиск.png'
import {Link} from'react-router-dom';
import {SearchContext} from "../../App";

const Header = () =>{

const [openSearch, setOpenSearch] = React.useState(false);
const {search, setSelectedSearch} = React.useContext(SearchContext);


return  (
	<>
	<div className={cl.header}>
		<div className={cl.up}>
			<div className={cl.groupe11}><img src={korzina}/><img src={account}/><img onClick={()=>setOpenSearch(!openSearch)} src={sourch}/>
			{ openSearch && <Search />}</div>
			<Link to="" className={cl.item} className={cl.item}>Aqua Technology</Link>
			<div className={cl.phone}>+375296630860<br></br>+375292511202</div>
		</div>	
		<Menu />
	</div>

	</>
)
}


export default Header;