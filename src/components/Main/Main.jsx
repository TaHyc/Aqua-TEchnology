import React from "react";
import cl from'./Main.module.css';
import arrownRight from '../assets/стрелка.png'
import {Link} from'react-router-dom';
import fotoRight from '../assets/фото справа.png'
import foto2left from '../assets/наши услуги.png'
import arrownLU from '../assets/стрелка лево-верх.png'
import blueFoto from '../assets/bluediv.png'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'

 
const Main = () =>{
return  (
	<div>
	<div className={cl.mainDiv}>
		<div className={cl.left}>
		<div className={cl.mainText}>Наше отличие - это наше наличие!</div>
			<div className={cl.elipseG}>
			<div className={cl.elipseC}>
				<Link to="/about" className={cl.link}>О КОМПАНИИ<img className={cl.arrownRight}src={arrownRight}/></Link>
				
			</div>
			</div>
		</div>
		<div className={cl.right}><div className={cl.divFoto}><img className={cl.mainR}src={fotoRight}/></div></div>
	</div>

<div className={cl.ouaText}>Наши услуги</div>
<div className={cl.ouaDiv}>
	<div className={cl.left2}>
	<img className={cl.foto2left}src={foto2left}/></div>

	<div className={cl.right2}>
		<text>Тут текст 1<img className={cl.arrownLU}src={arrownLU}/></text>
		<text>Тут текст 2<img className={cl.arrownLU}src={arrownLU}/></text>
		<text>Тут текст 3<img className={cl.arrownLU}src={arrownLU}/></text>
		<text>Тут текст 4<img className={cl.arrownLU}src={arrownLU}/></text>
		<text>Тут текст 5<img className={cl.arrownLU}src={arrownLU}/></text>
	</div>
</div>

	<div className={cl.blueDiv}>
      <h1 className={cl.blueMainText}>Почему выбирают нас?</h1>
		
<div className={cl.blueText}>
	<div className={cl.blueTextColumn}>
	<text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar magna purus semper id est lacus. Aenean morbi at eros curabitur volutpat. Maecenas commodo integer massa ac ornare sed dui. Nunc suspendisse urna, lorem pharetra, sit ultrices. </text>
	<text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar magna purus semper id est lacus. Aenean morbi at eros curabitur volutpat. Maecenas commodo integer massa ac ornare sed dui. Nunc suspendisse urna, lorem pharetra, sit ultrices. </text>
	</div>
	<div className={cl.blueTextColumn}>
	<text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar magna purus semper id est lacus. Aenean morbi at eros curabitur volutpat. Maecenas commodo integer massa ac ornare sed dui. Nunc suspendisse urna, lorem pharetra, sit ultrices. </text>
	<text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar magna purus semper id est lacus. Aenean morbi at eros curabitur volutpat. Maecenas commodo integer massa ac ornare sed dui. Nunc suspendisse urna, lorem pharetra, sit ultrices. </text>
	</div>
		<div className={cl.divBlueFoto}><img className={cl.blueFoto}src={blueFoto}/></div>
</div>
	
	</div>

<div className={cl.DivOuaProjeckts}>
	<h1 className={cl.ProjecktsMainText}>наши проекты</h1>

	<div className={cl.p5}>
		<div className={cl.p}><img className={cl.pFoto}src={p1}/>textetxetxetxteetxetxetextextetxetetxttextxetextextextext</div>
		<div className={cl.p}><img className={cl.pFoto}src={p2}/>textetxetxetxteetxetxetextextetxetetxttextxetextextextext</div>
		<div className={cl.p}><img className={cl.pFoto}src={p3}/>textetxetxetxteetxetxetextextetxetetxttextxetextextextext</div>
		<div className={cl.p}><img className={cl.pFoto}src={p2}/>textetxetxetxteetxetxetextextetxetetxttextxetextextextext</div>
		
	</div>
 <div className={cl.elipseGD}>
			<div className={cl.elipseCD}>
				<Link to="/about" className={cl.link}>СМОТРЕТЬ БОЛЬШЕ</Link>
			</div>
		</div>
</div>


	</div>
)
}


export default Main;