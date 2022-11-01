import React from "react";
import cl from'./Katalog.module.css';
import Product from './Product'
import filtr from '../assets/фильтр.png'
import ava from '../assets/ава.jpg'
import top40 from '../assets/top40.png'
import oreon680 from '../assets/oreon680.png'
import emaux from '../assets/emaux.png'


const Katalog = () =>{


const [open, setOpen] = React.useState(false);
const [selected, setSelected] = React.useState(0);
const list =['популярности', "цене", "алфавиту"];
const sortName=list[selected];



const onClickListItem = (i)=>{
setSelected(i);
setOpen(false);
}


return  (
<div className={cl.main}>
	<div className={cl.header}>Каталог

	<div >Сортировать по:</div>
		<span onClick={()=>setOpen(!open)}>{sortName}</span>
	{ open && (
		<div className="sort_popus">
			<ul>
				{list.map((name, i)=>(
			<li 
			key={i}
			onClick={()=>onClickListItem(i)}
			className={selected===i ? 'active': ''}>
			{name}	
			</li>
		))}
		</ul>
	</div>)}


	<div>Настройки</div></div>

		<Product foto={filtr} title='Фильтр ARIONA POOLS OCEAN 510 - 10,2 М³/Ч' art='FDOC400TR02' price={1490}/>
		<Product foto={oreon680} title='Фильтр ARIONA POOLS OCEAN 680 - 18,4 М³/Ч' art='FDOC400TR04' price={2323}/>
		<Product foto={emaux} title='Фильтр EMAUX V350 Ø355мм' art='88010101' price={579}/>
		<Product foto={top40} title='Фильтр ARIONA POOLS PACIFIC TOP 400 - 6,5 М³/Ч' art='FDPA400BTVT01' price={1135}/>
	
	</div>
);
}


export default Katalog;