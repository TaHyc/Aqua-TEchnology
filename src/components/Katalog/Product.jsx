import React from "react";
import cl from'./Product.module.css';
import {Link} from'react-router-dom';


const Product = (props) =>{
const [count, setCount] = React.useState(0);

const onClickAdd= () =>{
	setCount(count+1)
}

let path = '/product/'+props.art;

return  (
	<div className={cl.product}>
		<img className={cl.foto}src={props.foto}/>

		<div className={cl.prodt}>
			<Link to={path} className={cl.title}>{props.title}</Link>
			<div className={cl.art}>Арт.:{props.art}</div>
		</div>

		<div className={cl.prodt}>
			<div className={cl.price}>{props.price} руб/шт</div>
			<div onClick={onClickAdd}className={cl.buy}>{count}</div>
		</div>
	
	</div>
)
}


export default Product;