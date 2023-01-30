import React from "react";
import cl from'./TovarInKorzina.module.css';
import {useDispatch} from 'react-redux'
import {increment, decrement} from '../Redux/slices/countTovarSlice'
import {addItems, minusItem} from '../Redux/slices/korzinaSlice'


const TovarInKorzina = ({id, price, foto, title, count}) =>{

const dispatch = useDispatch()



const OnClickPlus=()=>{
	dispatch(addItems({id}))
}

const OnClickMinus=()=>{
	dispatch(
		minusItem(
			id)
)}	

return  (
	<>
<div className={cl.fullTovar}>

		<div className={cl.tovar}><input className={cl.gala} type="checkbox" />
	<div className={cl.foto}><img src={foto} className={cl.fotoTovara}/></div>
	<div className={cl.title}>{title}</div>
		</div>
	<div className={cl.price}>{price}</div>
	<div className={cl.price}>{price-100}</div>
	<div className={cl.buttoms} buttoms>
					<button className={cl.countButtom} aria-label="Increment value" onClick={OnClickPlus}>+</button>
        	<span>{count}</span>
        	<button className={cl.countButtom} aria-label="Decrement value" onClick={OnClickMinus}>-</button>
				</div>
	
	<div className={cl.price}>{price*count}</div>

</div>

	</>
)
}


export default TovarInKorzina;