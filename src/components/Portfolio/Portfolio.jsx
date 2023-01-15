import React from "react";
import cl from'./Portfolio.module.css';
import {NavLink, useParams} from'react-router-dom';
import Detailed from "./Detailed";
import {useSelector, useDispatch} from 'react-redux'
import stateProfile from '../Redux/slices/stateProfile'


const Portfolio = (selectedPool, setSelectedPool) =>{

	
const [selectedMenuPool, setSelectedMenuPool] = React.useState([]);	
const [pools, setPools] = React.useState([]);

const menuId = [
'все проекты',
'частные бассейны',
'общественные бассейны',
'пруды']

React.useEffect(()=>{
const poolClass = selectedMenuPool >0 ?`?class=${selectedMenuPool}`:''
fetch(`https://635ffdbb3e8f65f283c0fff9.mockapi.io/pools${poolClass}`)
.then(res=>res.json()
).then((arr)=>{
  setPools(arr)
})   
window.scrollTo(0, 0);
},[selectedMenuPool])


return  (
	<>
	<div className={cl.menu}>
	{menuId.map((menuPull,i)=><div key={i} onClick={()=>setSelectedMenuPool(i)}>{menuPull}</div>)}
	</div>
	<div className={cl.portfolio}>
	{pools.map(pool=>
	<div className={cl.pool}>
	<img className={cl.foto} src={pool.foto}/>
	<div className={cl.poolFullText}>
		<div className={cl.poolT}>
			<div className={cl.title}>{pool.title}</div>
			<div className={cl.name}>{pool.name}</div>
		</div>
	<div className={cl.poolLink}>
		<NavLink key={pool.id} to={`/portfolio/${pool.id}`} onClick={()=>setSelectedPool(pool.id)} className={cl.link}>подробнее</NavLink>
	</div>
	</div>
	
	</div>)}
</div>
	</>
)
}


export default Portfolio;