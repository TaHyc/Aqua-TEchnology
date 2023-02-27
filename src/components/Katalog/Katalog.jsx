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

const [checked, setChecked] = React.useState(true);
const [search1, setSearch1] = React.useState(true);
const [search2, setSearch2] = React.useState(true);
const [search3, setSearch3] = React.useState(false);
const [search4, setSearch4] = React.useState(true);
const [search5, setSearch5] = React.useState(true);
const [items, setItems] = React.useState([]);


const {search} = React.useContext(SearchContext);

var nal=null;
if(checked==true){nal=1}
else nal=0

var emaux=null;
if(search3==true){emaux='EMAUX'}
else emaux=''
console.log(emaux)


React.useEffect(()=>{
const sortBy = selectedSort.replace('-','')
const order = selectedSort.includes('-')? 'asc': 'desc'
const selectedI1 = `&Item1Properti=${selectedMenu}`

axios.get(`https://635ffdbb3e8f65f283c0fff9.mockapi.io/items?sortBy=${sortBy}&order=${order}${selectedI1}`)
.then((res)=> setItems(res.data))
window.scrollTo(0, 0);
},[selectedSort, selectedMenu])

const oneClickSetMenu=(i)=>{
	dispatch(setSelectedMenu(i))
}

const AllProducts = items.filter(item=>item.title.toLowerCase().includes(search.toLowerCase())).
filter(item=>item.have==nal).
filter(item=>item.title.includes(emaux)).
map(
	item=><Product  key={item.id} all={item}/>
	) 


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
		<Settings value={checked}
		search1={search1}
		search2={search2}
		search3={search3}
		search4={search4}
		search5={search5}
		setSearch1={setSearch1}
		setSearch2={setSearch2}
		setSearch3={setSearch3}
		setSearch4={setSearch4}
		setSearch5={setSearch5}
		 onClickSetChecked={(i)=>setChecked(i)} />

		</div>
	<div className={cl.katalogItems}>
		{AllProducts}
		</div>
	</div>
</div>
);
}


export default Katalog;