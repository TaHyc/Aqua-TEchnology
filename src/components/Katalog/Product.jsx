import React from "react";
import cl from'./Product.module.css';
import {Link} from'react-router-dom';
import { Route, Routes} from "react-router-dom";

let haven = '';

const Product=(props)=>{
if (props.all.have==true)
	{haven = <li className={cl.have}>Есть в наличии</li>;}
else haven = <div>Нет в наличии</div>

let path = '/product/'+props.all.art
	
	return(

		<div className={cl.product}>
		<div className={cl.divFoto}><img className={cl.prodFoto} src={props.all.foto}/></div>
		<div className={cl.prodt}>
			<Link to={path} className={cl.title}>{props.all.title}</Link>
			<div className={cl.art}>Арт.: {props.all.art}{haven}</div>
		</div>

		<div className={cl.prodt}>
			<div className={cl.price}>{props.all.price} руб/шт</div>
			<Link to={path} className={cl.buy}>Купить</Link>
		</div>
	
	</div>

)}


export default Product;