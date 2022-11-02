import React from "react";
import cl from'./Katalog.module.css';
import Product from './Product'
import filtr from '../assets/фильтр.png'
import ava from '../assets/ава.jpg'
import top40 from '../assets/top40.png'
import oreon680 from '../assets/oreon680.png'
import emaux from '../assets/emaux.png'
import products from '../../redux/products'
import {Link} from 'react-router-dom';


const ProductOne=(props)=>{
	let path = '/katalog/'+props.art;
	return(
		<div className={cl.product}>
		<img className={cl.foto} src={props.foto}/>

		<div className={cl.prodt}>
			<Link to={path} className={cl.title}>{props.title}</Link>
			<div className={cl.art}>Арт.:{props.art}</div>
		</div>

		<div className={cl.prodt}>
			<div className={cl.price}>{props.price} руб/шт</div>
			<div className={cl.buy}></div>
		</div>
	
	</div>
)}

const Katalog = () =>{


const [open, setOpen] = React.useState(false);
const [selected, setSelected] = React.useState(0);
const list =['популярности', "цене", "алфавиту"];
const sortName=list[selected];

let productElements= products.map(product=><ProductOne foto={product.filtr} title={product.title} art={product.art} price={product.price}/>)


console.log(products)

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

		{productElements}

	</div>
);
}


export default Katalog;