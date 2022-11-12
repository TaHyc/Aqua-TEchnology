import React from "react";
import cl from'./Product.module.css';
import {Link} from'react-router-dom';
import { Route, Routes} from "react-router-dom";


const Product=(props)=>{
	let path = '/product/'+props.all.art
	
	return(

		<div className={cl.product}>
		<img src={props.all.foto}/>
		<div className={cl.prodt}>
			<Link to={path} className={cl.title}>{props.all.title}</Link>
			<div className={cl.art}>Арт.: {props.all.art}</div>
		</div>

		<div className={cl.prodt}>
			<div className={cl.price}>{props.all.price} руб/шт</div>
			<Link to={path} className={cl.buy}>Купить</Link>
		</div>
	
	</div>

)}


export default Product;