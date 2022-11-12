import React from "react";
import cl from'./Katalog.module.css';
import sort from '../assets/sort.png'


const Sort = ({value, setSelectedSort}) =>{
const [openSort, setOpen] = React.useState(false);
const list =[
{name: 'популярности', sortProperti: 'rating'}, 
{name: 'цене (возрастание)', sortProperti: '-price'},
{name: 'цене (убывание)', sortProperti: 'price'}]


const onClickListItem = (obj)=>{
setSelectedSort(obj);
setOpen(false);
}


return(
	<>
		<img className={cl.sortFoto} src={sort}/><div className={cl.sort}>
				<div className={cl.span} onClick={()=>setOpen(!openSort)}>{value.name}</div>
			{ openSort && (<div>
		<ul className={cl.ulKatalog}>
		{list.map((obj, i)=>(<li  onClick={()=>onClickListItem(obj)} 
			className={value.sortProperti===obj.sortProperti ? 'active': 'ulKatalog'}>{obj.name}</li>))}</ul>
			</div>)}
		</div>
</>
)
}

export default Sort;		