import React from "react";
import cl from'./Katalog.module.css';
import set from '../assets/настройка.png'


const Settings = ({ value, onClickSetChecked}) =>{

const [openSettings, setOpenSettings] = React.useState(false);

const onClickSettings = (e)=>{
setOpenSettings(e);
}
console.log(value)
return(
	<>
<div className={cl.settingsAll}><img className={cl.settingsFoto} onClick={()=>onClickSettings(!openSettings)} src={set}/>
{ openSettings && (
<div className={cl.settingsMenu}>
<div className={cl.settingsHave}>
<span>В наличии</span>
			</div>
<form name="myForm">
    <input type="radio" onClick={()=>onClickSetChecked(!value)} checked={value}/> в наличии
			</form>
{<div>Бренд<br></br>Бренд<br></br>Бренд<br></br>Бренд<br></br></div>}
			</div>)}</div>
		</>
)
}

export default Settings;		
		