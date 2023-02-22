import React from "react";
import cl from'./Contacts.module.css';
import {Link} from'react-router-dom';
import viber from '../assets/vib.png'
import tg from '../assets/teg.png'
import ws from '../assets/whatS.png'
import map from '../assets/карта.png'
import geo from '../assets/гео.png'
import time from '../assets/time.png'

const Contacts = () =>{

const MouseEnterSize = e => {
 e.target.style.fontSize = "1.7vw";
}

const MouseLeaveSize = e => {
 e.target.style.fontSize = "1.5vw";
} 


return  (
	<div className={cl.main}>
		<div className={cl.UpButtoms}>
	<div className={cl.left}>
	<div className={cl.header}>мессенджеры<div className={cl.vtw}>
	<a href='https://t.me/AquaTechnology_bot'><img src={viber}/></a>
	<a href='https://t.me/AquaTechnology_bot'><img src={tg}/></a>
	<a href='https://t.me/AquaTechnology_bot'><img src={ws}/></a></div></div>
	<div className={cl.header}>справочная служба<div className={cl.contactPhone}>+375-17-373-39-44</div><div className={cl.contactPhone}>+375-29-312-33-21</div></div>
	<div className={cl.header}>e-mail<div><a href='https://t.me/AquaTechnology_bot'>info@e-pool.by</a></div></div></div>
	<div className={cl.riht}><button className={cl.button}><a href='https://t.me/AquaTechnology_bot' onMouseEnter={MouseEnterSize} onMouseLeave={MouseLeaveSize}>задать вопрос</a></button></div>

	</div>

	<img style={{width: '100%'}} src={map}/>

	<div className={cl.mainT}>Склад ООО “АКВА ТЕХНОЛОДЖИ”,<br></br>
г. Минск, 1-ый переулок Монтажников, 8/2
<div className={cl.miniT}><img className={cl.logo} src={geo}/><a href="https://yandex.by/maps/157/minsk/house/Zk4YdQ9iQEMPQFtpfXR2cHxqZA==/?ll=27.382968%2C53.871090&z=16">ПОКАЗАТЬ НА КАРТЕ</a></div>
	</div>

	<div className={cl.mainT}>Компания ООО “АКВА ТЕХНОЛОДЖИ”,<br></br> 
г. Минск, ул. Монтажников, 9-84.
<div className={cl.mini}>
<div className={cl.miniT}><img className={cl.logo} src={geo}/><a href="https://yandex.by/maps/157/minsk/house/Zk4YcgZhQUYHQFtpfXR2cHxnYw==/?ll=27.411831%2C53.871047&z=16">ПОКАЗАТЬ НА КАРТЕ</a></div>
<div className={cl.miniT}><img className={cl.logo} src={time}/>пн-чт 9.00-18.00, пт 9.00-17.00</div>
</div>
	</div>

	</div>
)
}


export default Contacts;