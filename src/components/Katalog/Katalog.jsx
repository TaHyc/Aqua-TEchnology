import React from "react";
import cl from'./Katalog.module.css';
import Product from'./Product';
import Settings from'./Settings';
import Sort from'./Sort';
import ItemsMenu1 from'./ItemsMenu1';
import ItemsMenu2 from'./ItemsMenu2';
import sort from '../assets/sort.png'
import set from '../assets/настройка.png'


const Katalog = () =>{


const [checked, setChecked] = React.useState(false);
const [selectedSort, setSelectedSort] = React.useState({name: 'цене (возрастание)', sortProperti: '-price'});
const [selectedMenu, setselectedMenu] = React.useState([]);
const [items, setItems] = React.useState([]);

React.useEffect(()=>{

const sortBy = selectedSort.sortProperti.replace('-','')
const order = selectedSort.sortProperti.includes('-')? 'asc': 'desc'
const selectedI1 = `&Item1Properti=${selectedMenu}`
const haven = `&have=${checked}`

fetch(`https://635ffdbb3e8f65f283c0fff9.mockapi.io/items?sortBy=${sortBy}&order=${order}${selectedI1}`)
.then(res=>res.json()
).then((arr)=>{
  setItems(arr)
})   
window.scrollTo(0, 0);
},[selectedSort, selectedMenu, checked])

let productElements= items.map(item=><Product  key={item.id} all={item}/>)

//?sortBy=&have=true
//цель одна задач несколько

return  (
<div className={cl.main}>
	
	<div className={cl.left}>каталог
		<div className={cl.menuKatalog}>

		<ItemsMenu1 value={selectedMenu} setselectedMenu={(i)=>setselectedMenu(i)}/>
		<ItemsMenu2/>		

		</div>
	</div>

	<div className={cl.rigth}>
		<div className={cl.sortAll}>
		
		<Sort value={selectedSort} setSelectedSort={(i)=>setSelectedSort(i)}/>
		<Settings value={checked} onClickSetChecked={(i)=>setChecked(i)}/>

		</div>
	<div className={cl.katalogItems}>
		{productElements}
		</div>
	</div>
</div>
);
}


export default Katalog;