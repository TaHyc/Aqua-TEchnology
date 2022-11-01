import React, { useState } from "react";
import cl from'./Product.module.css';
import {Link} from'react-router-dom';




const ProductPage = (props) =>{

const [count, setCount] = useState(0);

const onClickAdd= () =>{
	setCount(count+1)
}

return  (
	<div className={cl.product}>
	
	<img className={cl.foto}src={props.foto}/>

		<div className={cl.prodt}>
		<Link to="/product" className={cl.title}>{props.title}</Link>
			<div className={cl.art}>{props.art}</div>
		</div>

		<div className={cl.prodt}>
			<div className={cl.price}>{props.price} руб/шт</div>
			<div onClick={onClickAdd}className={cl.buy}>Купить</div>
		</div>
	
	</div>
)
}


export default ProductPage;