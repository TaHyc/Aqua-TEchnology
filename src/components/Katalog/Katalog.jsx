import React from "react";
import cl from'./Katalog.module.css';
import axios from 'axios'
import Product from'./Product';
import Settings from'./Settings';
import Sort from'./Sort';
import ItemsMenu1 from'./ItemsMenu1';
import ItemsMenu2 from'./ItemsMenu2';
import sort from '../assets/sort.png'
import set from '../assets/настройка.png'
import {SearchContext} from "../../App";
import {setSelectedMenu} from '../Redux/slices/filterSlice' 
import {useSelector, useDispatch} from 'react-redux'



const Katalog = () =>{

const dispatch = useDispatch()

const selectedMenu = useSelector((state) =>state.filter.selectedMenu)
const selectedSort = useSelector((state) =>state.filter.selectedSort.sortProperti)

const [checked, setChecked] = React.useState(false);
const [items, setItems] = React.useState([]);

const {search} = React.useContext(SearchContext);



React.useEffect(()=>{
const sortBy = selectedSort.replace('-','')
const order = selectedSort.includes('-')? 'asc': 'desc'
const selectedI1 = `&Item1Properti=${selectedMenu}`
const haven = `&have=${checked}`

axios.get(`https://635ffdbb3e8f65f283c0fff9.mockapi.io/items?sortBy=${sortBy}&order=${order}${selectedI1}`)
.then((res)=> setItems(res.data))
window.scrollTo(0, 0);
},[selectedSort, selectedMenu, checked])


const oneClickSetMenu=(i)=>{
	dispatch(setSelectedMenu(i))
}

const AllProducts = items.filter(item=>{
	if(item.title.toLowerCase().includes(search.toLowerCase())){
		return true
	}
	return false
}).map(item=><Product  key={item.id} all={item}/>) 


return  (
<div className={cl.main}>
	
	<div className={cl.left}>каталог
		<div className={cl.menuKatalog}>

		<ItemsMenu1 value={selectedMenu} setMenu={oneClickSetMenu}/>
		<ItemsMenu2/>		

		</div>
	</div>

	<div className={cl.rigth}>
		<div className={cl.sortAll}>
		
		<Sort/>
		<Settings value={checked} onClickSetChecked={(i)=>setChecked(i)}/>

		</div>
	<div className={cl.katalogItems}>
		{AllProducts}
		</div>
	</div>
</div>
);
}


export default Katalog;