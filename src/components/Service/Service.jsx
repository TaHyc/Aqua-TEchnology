import React from "react";
import cl from'./Service.module.css';
import recon from'../assets/recon.png';


const Service = () =>{

return(
<>
<div className={cl.recon}><img  src={recon}/></div><div className={cl.recom}>реконструкция бассейна
<div className={cl.prichini}>Причины реконструкции бассейна</div>
<ul className={cl.liRecom}>

<li>отсутствие систем фильтрации воды (в бассейнах «старого поколения»);</li>
<li>появление трещин и другие нарушения герметичности чаши;</li>
<li>износ оборудования;</li>
<li>потеря эстетичности внешнего вида (порча отделочных материалов);</li>
<li>необходимость установки дополнительных опций и т.п.</li>
</ul>

</div>




</>
)
}

export default Service;