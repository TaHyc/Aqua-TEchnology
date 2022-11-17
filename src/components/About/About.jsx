import React, {useEffect} from "react";
import cl from'./About.module.css';
import aboutcomp from '../assets/aboutcomp.png'
import t1 from '../assets/t1.png'
import t2 from '../assets/t2.png'
import t3 from '../assets/t3.png'
import hystory from '../assets/hystory.png'
import direct from '../assets/direct.png'
import end from '../assets/end.png'



const About = () =>{
	useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
return  (
	<div>

		<div className={cl.about}>
<div className={cl.left}><h1>О КОМПАНИИ</h1>Компания по строительству бассейнов Аква Технолоджи с 2009 г. по праву считается одной из лучших и стабильных компаний, работающих на рынке строительства и продажи оборудования для бассейнов, изготовления бетонных бассейнов как для частного, так и для общественного пользования. Мы предоставляем услуги по всей Беларуси. Наш многолетний опыт работы позволяет создавать проекты любой сложности, которые отвечают всем стандартам и нормам.</div>
<div className={cl.rigth}><img className={cl.aboutcomp}src={aboutcomp}/></div>
		</div>


	<div className={cl.mission}>
	<div className={cl.missDiv}>
		<h1>МИССИЯ</h1>
		<h2>Строительство бассейнов для профессионального спорта и активного отдыха.</h2>
	</div>
	</div>


	<div className={cl.targets}>НАШИ ЦЕЛИ
	<div className={cl.target}><text className={cl.tarMT}>01</text>
	<text className={cl.tarT}>Обеспечение бесперебойных поставок оборудования и материалов от лучших мировых брендов</text>
	<img src={t1}/></div>

	<div className={cl.target}><text className={cl.tarMT}>02</text>
	<img src={t3}/>
	<text className={cl.tarT}>Строительство бассейнов, водоемов, фонтанов любой сложности</text>
	</div>

	<div className={cl.target}><text className={cl.tarMT}>03</text>
	<text className={cl.tarT}>Создание и реализация оригинальных проектов, которые оправдают Ваши ожидания</text>
	<img src={t2}/></div>

	</div>

	<div className={cl.uslugi}>
	<h1>НАШИ УСЛУГИ</h1>

	<h2>Строительство бассейнов</h2>
	<h3>Мы занимаемся строительством частных бассейнов любой сложности. Благодаря накопленному опыту и использованию современных технологий, мы гарантируем получение качественного и стильного гидротехнического сооружения, полностью отвечающего СанПин, ГОСТ и Вашим требованиям.</h3>

	<h2>проектирование бассейнов</h2>
	<h3>Проектирование — необходимый этап при планировании строительства бассейна. Составление проекта бассейна необходимо для того, чтобы наилучшим образом использовать чашу бассейна и техническое помещение для размещения необходимого оборудования. Рациональное планирование подвода коммуникаций позволяет достичь существенной экономии уже на этапе строительства, а определение нагрузки на инженерные сети (отопление, электричество, канализация) сводит к нулю количество возможных внештатных ситуаций.
</h3>

	<h2>продажа оборудования для бассейнов</h2>
	<h3>Наша компания осуществляет продажу оборудования для бассейнов ведущих европейских и мировых брендов. Заказывая бассейновое оборудование в ООО “Аква Технолоджи”, Вы можете быть уверены в его качестве и долговечности. Многолетний опыт работы на рынке позволяет нашим специалистам подбирать оптимальные конфигурации оборудования для плавательных бассейнов, эксплуатируемых при любых погодных условиях.</h3>

	<h2>продажа химии для бассейнов</h2>
	<h3>Химия для бассейнов используется для водоподготовки, а также для консервации бассейна на зимний период. Обратившись в нашу компанию, Вы можете приобрести всю необходимую химию для бассейнов. Наши специалисты помогут определить, что именно вам необходимо и подберут оптимальную дозировку. Также в продаже всегда имеется жидкая химия для бассейнов в 30-литровых канистрах, предназначенная для станций автоматического дозирования. </h3>

	</div>


	<div className={cl.history}>
	<h1>ИСТОРИЯ СОЗДАНИЯ</h1>
		<div className={cl.his}>Наша история началась в 2009 году с создания торговой строительно-проектной компании по продаже европейского бассейнового оборудования и комплектующих.<br></br><br></br>
В конце 2009 года был выигран первый крупный тендер на поставку и монтаж оборудования для устройства трех бассейнов на объекте 
Гомельский дворец водных видов спорта.<br></br><br></br>
Вслед за ним последовали участия и победы в серии тендеров, организовываемых санаториями, загородными усадьбами, оздоровительными комплексами, школами, яслями и т.д. <br></br><br></br>
С этого момента к нам начали поступать заказы на генподрядные работы по строительству водных объектов общественного назначения по всей Беларуси стали расти , поставки оборудования,  база поставщиком расширяться, а опыт накапливаться.<br></br><br></br>
За долгий период нам удалось наладить поставки оборудования и материалов напрямую от европейских и азиатских заводов-изготовителей, и мы стали официальными уполномоченными дилерами десятков брендов.
<img className={cl.hisFoto}src={hystory}/>
		</div>
	</div>
	

	<div className={cl.direct}>
<div className={cl.dirLeft}>Новые направления<br></br>деятельности:
<ul>
 <li>Пруды плавательные</li>
 <li>Фонтаны садовые, парковые</li>
 <li>Аквапарки, водные аттракционы</li>
 <li>Эко-бассейны</li>
 <li>Технические водоемы</li>
 <li>Рыбные фермы, УЗВ</li>
 <li>Сауны и хамамы</li>
 <li>Автополив</li>
 <li>Ландшафтный дизайн</li>
 <li>Ландшафтное освещение</li>
</ul>
</div>

<div className={cl.dirRigth}>
<img className={cl.dirFoto}src={direct}/>
</div>

	</div>



	<div className={cl.end}>
<img className={cl.endFoto}src={end}/>

		<div className={cl.endRigth}>
		Мы открыты для новых идей и делимся своим опытом с коллегами и конечными заказчиками, для этого у нас есть все необходимое:
<ul>
 <li className={cl.liEndAbout}>дружная команда профессионалов: среди нас - проектировщики, инженеры, дизайнеры, менеджеры по продажам, монтажники и строители;</li>
 <li className={cl.liEndAbout}>крепкие партнерские отношения с производителями  лучшего оборудования и материалов;</li>
 <li className={cl.liEndAbout}>накопленный багаж знаний и опыта в области проектирования и строительства водных объектов;</li>
 <li className={cl.liEndAbout}>ежемесячные оптовые поставки и широкий ассортимент товаров в наличии;</li>
 <li className={cl.liEndAbout}>неиссякаемая энергия узнавать, учиться, делиться и внедрять новые технологии.</li>
</ul>
 
		</div>

	</div>




	</div>

)
}


export default About;
