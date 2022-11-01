import React from "react";
import cl from'./Header.module.css';
import Menu from "./Menu";
import korzina from '../assets/корзина.png'
import account from '../assets/аккаунт.png'
import sourch from '../assets/поиск.png'
import {Link} from'react-router-dom';

const Header = () =>{
return  (
	<header>
	<div className={cl.header}>
		<div className={cl.up}>
			<div className={cl.groupe11}><img src={korzina}/><img src={account}/><img src={sourch}/></div>
			<Link to="/main" className={cl.mainText}>Aqua Technology</Link>
			<text>+375296630860<br></br>+375292511202</text>
		</div>	
		<Menu />
	</div>

	</header>
)
}


export default Header;