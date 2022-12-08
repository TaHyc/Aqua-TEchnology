import React from "react";
import {selPools} from "../products";
import cl from'./Portfolio.module.css';
import p11 from '../assets/11.png'
import p12 from '../assets/12.png'
import p13 from '../assets/13.png'
import p14 from '../assets/14.png'
import p15 from '../assets/15.png'
import p16 from '../assets/16.png'
import p17 from '../assets/17.png'
import {NavLink} from'react-router-dom';


const Portfolio = () =>{

const menuId = [
'все проекты',
'общественные бассейны',
'частные бассейны',
'пруды']




return  (
	<>
	<div className={cl.menu}>
	{menuId.map((menuPull,i)=><div  className={cl.OneMenu}>{menuPull}</div>)}
	</div>
	<div className={cl.portfolio}>
{selPools.map(message=>
	<div className={cl.pool}>
		<div className={cl.divFoto}>{message.foto}</div>
	<div className={cl.poolFullText}>
		<div className={cl.poolT}>
			<div className={cl.title}>{message.title}</div>
			<div className={cl.name}>{message.name}</div>
		</div>
	<div className={cl.poolLink}>
		<button className={cl.link}>подробнее</button>
	</div>
	</div>

	
	</div>)}
</div>
	</>
)
}


export default Portfolio;