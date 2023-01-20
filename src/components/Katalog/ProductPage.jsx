import React, { useState, useEffect } from "react";
import cl from'./ProductPage.module.css';
import {Link, useParams} from'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from '../Redux/slices/countTovarSlice'

const ProductPage = () =>{

const {art}=useParams()	

const [items, setItems] = React.useState([]);
const [numFyp, setNum] = React.useState(0);

const count = useSelector((state) => state.count.value)
const dispatch = useDispatch()

useEffect(()=>{
fetch(`https://635ffdbb3e8f65f283c0fff9.mockapi.io/items/${art}`)
.then(res=>res.json()
).then((arr)=>{
  setItems(arr)
})   
window.scrollTo(0, 0);
   handleClick()
},[art])


const onClickKorzina= () =>{
	if(count===0){
		alert('Вы не выбрали товар')
	}
	else{
	alert(`Добавлено в корзину: ${items.title} в количестве ${count} штук(-и)`)
	}
}

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

 const handleClick = () => {
    setNum(randomNumberInRange(0, 4));
  };

const onClickFyp= () =>{
  window.scrollTo(0, 0);
}


let path = '/product/'+numFyp.art
return (
<div className={cl.main}>
		<div className={cl.up}>
		<div className={cl.divFoto}><img className={cl.foto} src={items.foto}/></div>
			<div className={cl.info}>
			<div className={cl.title}>{items.title}</div>
			<div className={cl.art}>Арт.: {items.art}</div>
			<div className={cl.price}>{items.price} руб/шт</div>
				<div className={cl.count}>
				Колличество
				<div className={cl.buttomsAll}>
				<div className={cl.buttoms} buttoms>
					<button className={cl.countButtom} aria-label="Increment value" onClick={() => dispatch(increment())}>+</button>
        	<span>{count}</span>
        	<button className={cl.countButtom} aria-label="Decrement value" onClick={() => dispatch(decrement())}>-</button>
				
				</div>
				<div className={cl.buy} onClick={onClickKorzina}>В корзину</div>
				</div>
				</div>
			</div>
		</div>
	<div className={cl.down}>
		<div className={cl.columnInfo}>Характеристики

<div className={cl.text}>
Производитель — Ariona Pools (Испания)<br></br>
Макс. давление — 2 кг/см²<br></br>
Загрузка песка — 100 кг<br></br>
Производительность — 10,2 м³/ч<br></br>
Площадь фильтра — 0,2 м²<br></br>
Для бассейнов — до 40 м³
</div>
<div className={cl.columnInfo}>Габаритные размеры, подключение:
<div className={cl.text}>
Диаметр фильтра: 510 мм<br></br>
Высота фильтра: 790 мм<br></br>
Подключения: клеевое Ø 1½"
</div>
</div>
</div>


		<div className={cl.columnInfo}>Особенности:
<div className={cl.text}>
Материал: пластик с добавлением стекловолокна<br></br>
100% антикоррозийная конструкция<br></br>
Удобное боковое расположение клапана<br></br>
Верхняя крышка откручивается с помощью ключа
</div>
<div className={cl.columnInfo}>Комплект поставки:
<ul className={cl.text}>
<li>Фильтр</li>
<li>Платформа</li>
<li>Клапан переключения режимов</li>
<li>Ключ для демонтажа крышки</li>
<li>Манометр</li>
<li>Инструкция</li>
<li>Гарантийный талон</li>
</ul>
</div>
</div>

	</div>



</div>
)}



export default ProductPage;