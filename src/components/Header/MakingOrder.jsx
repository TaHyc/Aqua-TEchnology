import React from "react";
import cl from'./MakingOrder.module.css';
import {TovarContext} from "../../App";

const MakingOrder = () =>{

const [openSearch, setOpenSearch] = React.useState(false);

const {SelectedTovar} = React.useContext(TovarContext);



return  (
	<>
<div className={cl.main}>
	<div className={cl.up}>Корзина<buttom className={cl.clear}>Очистить</buttom></div>
	<div className={cl.korzina}>
		<div className={cl.UpKorzina}>
	<text style={{marginRight: '10vw',marginLeft: '5vw'}}>Товар</text>
	<text>Цена</text>
	<text>Цена со скидкой</text>
	<text>Кол-во</text>
	<text>Сумма</text>
		</div>ТУТ ТОВАРЫ В КОРЗИНЕ
	</div>

	<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'end'}}>
	<buttom className={cl.zakaz}>оформить заказ</buttom></div>

</div>

	</>
)
}


export default MakingOrder;