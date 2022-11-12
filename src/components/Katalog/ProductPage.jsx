import React, { useState, useEffect } from "react";
import cl from'./ProductPage.module.css';
import {Link} from'react-router-dom';

const ProductPage = (props) =>{
let numObj = props.id
var first= props.all[numObj]
const [num, setNum] = useState(0);
var numFyp= props.all[num]
const [count, setCount] = useState(0);


if(count<0){
	setCount(count+1)
}
useEffect(() => {
    window.scrollTo(0, 0);
    handleClick()
  }, []);

const onClickAdd= () =>{
	setCount(count+1)
}

const onClickKorzina= () =>{
	if(count==0){
		alert('Вы не выбрали товар')
	}
	else{
	alert(`Добавлено в корзину: ${first.title} в количестве ${count} штук(-и)`)
	}
}

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(randomNumberInRange(0, 4));
  };

const onClickRemote= () =>{
	setCount(count-1)
}

let path = '/product/'+numFyp.art
return (
<div className={cl.main}>
		<div className={cl.up}>
		<div className={cl.divFoto}><img className={cl.foto} src={first.foto}/></div>
			<div className={cl.info}>
			<div className={cl.title}>{first.title}</div>
			<div className={cl.art}>Арт.: {first.art}</div>
			<div className={cl.price}>{first.price} руб/шт</div>
				<div className={cl.count}>
				Колличество
				<div className={cl.buttomsAll}>
				<div className={cl.buttoms}>
					<buttom className={cl.countButtom} onClick={onClickRemote}>-</buttom>{count}
					<buttom className={cl.countButtom} onClick={onClickAdd}>+</buttom>
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

<div className={cl.fyp}>Рекоменедуем</div>

	<div className={cl.fypProduct}>
		<img className={cl.fypFoto} src={numFyp.foto}/>
		<div className={cl.fypProdt}>
			<Link to={path} className={cl.fypTitle}>{numFyp.title}</Link>
		</div>

		<div className={cl.fypProdt}>
			<div className={cl.fypPrice}>{numFyp.price} руб/шт</div>
	</div>
	
</div>

</div>
)}



export default ProductPage;