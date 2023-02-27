import React from "react";
import cl from'./Katalog.module.css';
import set from '../assets/настройка.png'


const Settings = ({ value, onClickSetChecked, search1, search2, search3, search4, search5, setSearch3,
setSearch1, setSearch2, setSearch4, setSearch5}) =>{

const [openSettings, setOpenSettings] = React.useState(false);

const onClickSettings = (e)=>{
setOpenSettings(e);
}

const ClickApply = ()=>{
onClickSetChecked(true)
console.log('Нажата кнопка Применить')
}

const ClickReset = ()=>{
onClickSetChecked(false)
setSearch3(false)
console.log('Нажата кнопка Сбросить')
}

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
<div className={cl.choiseBrend}><input  type="checkbox" onClick={()=>onClickSetChecked(!value)} />ariona pools</div>
<div className={cl.choiseBrend}><input  type="checkbox" onClick={()=>onClickSetChecked(!value)}/>dryden aqua</div>
<div className={cl.choiseBrend}><input  type="checkbox" onClick={()=>setSearch3(!search3)} checked={search3}/>Emaux</div>
<div className={cl.choiseBrend}><input  type="checkbox" onClick={()=>onClickSetChecked(!value)} />Merkury</div>
<div className={cl.choiseBrend}><input  type="checkbox" onClick={()=>onClickSetChecked(!value)} />Pentair water</div>
</div>

<div className={cl.MenuBottoms}>
<bottom className={cl.bottomMenu} onClick={ClickReset}>Сбросить</bottom>
</div>

</div>)}</div>
		</>
)
}

export default Settings;		
		