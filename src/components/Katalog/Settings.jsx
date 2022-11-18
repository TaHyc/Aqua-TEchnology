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
<span>В наличии</span>
			
<form className={cl.formMenu} >
<input type="radio" onClick={()=>onClickSetChecked(!value)} checked={value}/> в наличии
</form>
			Бренд
<div className={cl.brends}>
<div className={cl.choiseBrend}><input  type="checkbox" onClick={()=>console.log('1')} />ariona pools</div>
<div className={cl.choiseBrend}><input  type="checkbox" onClick={()=>console.log('2')} />dryden aqua</div>
<div className={cl.choiseBrend}><input  type="checkbox" onClick={()=>console.log('3')} />Emaux</div>
<div className={cl.choiseBrend}><input  type="checkbox" onClick={()=>console.log('4')} />Merkury</div>
<div className={cl.choiseBrend}><input  type="checkbox" onClick={()=>console.log('5')} />Pentair water</div>
</div>

<div className={cl.MenuBottoms}>
<bottom className={cl.bottomMenu} onClick={()=>console.log('Нажата кнопка Сбросить')}>Сбросить</bottom>
<bottom className={cl.bottomMenu} onClick={()=>console.log('Нажата кнопка Применить')}>Применить</bottom>
</div>

</div>)}</div>
		</>
)
}

export default Settings;		
		