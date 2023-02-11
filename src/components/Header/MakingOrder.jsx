import React from "react";
import cl from'./MakingOrder.module.css';
import {TovarContext} from "../../App";

const MakingOrder = () =>{

const [buyer, setBuyer] = React.useState(1);
const [openSearch, setOpenSearch] = React.useState(false);

const {SelectedTovar} = React.useContext(TovarContext);

console.log(buyer)


return  (
	<>
<div className={cl.main}>ОФОРМЛЕНИЕ ЗАКАЗА
	<div className={cl.buy}>Тип покупателя
		<div className={cl.type}>
			<label><input type="radio" name="type" value="fisic" onClick={()=>setBuyer(1)}/>Физическое лицо</label>
        	<label><input type="radio" name="type" value="urist" onClick={()=>setBuyer(2)}/>Юридическое лицо</label>
		</div>
	</div>

	<div className={cl.info}>
		ФИО:
		<input  className={cl.data}/>
		E-mail:
		<input   className={cl.data}/>
		Телефон:
		<input    className={cl.data}/>
		Адрес доставки:
		<input   className={cl.data} />
		Комментарий к заказу:
		<textarea  className={cl.data} />
		Купок для скидки:
		<input  className={cl.data}/>
	
	</div>
		

</div>

	</>
)
}


export default MakingOrder;