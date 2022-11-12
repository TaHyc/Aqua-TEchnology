import React from "react";
import cl from'./Katalog.module.css';
import set from '../assets/настройка.png'


const Settings = ({all, value, onClickSettings, onClickSetChecked}) =>{

const [openSettings, setOpenSettings] = React.useState(false);
const [checked, setChecked] = React.useState(false);

return(
	<>
<div className={cl.settingsAll}><img className={cl.settingsFoto} onClick={()=>setOpenSettings(!openSettings)} src={set}/>
{ openSettings && (
<div className={cl.settingsMenu}>
<div className={cl.settingsHave}>
<span>В наличии</span>
			</div>
<form name="myForm">
    <input type="radio" onClick={()=>setChecked(!checked)} checked={checked}/> в наличии
			</form>
{<div>Бренд<br></br>Бренд<br></br>Бренд<br></br>Бренд<br></br></div>}
			</div>)}</div>
		</>
)
}

export default Settings;		
		