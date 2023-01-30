import React from "react";
import {Link} from "react-router-dom";
import {Registr} from "./Registr";


const RegistrPage = () =>{


return  (
	<>
	<Registr/>
	<div ><h1>Регистрация страница</h1>
	
		Привет, это страница регитсрации. Если у вас есть аккаунт вы можете войти по ссылке ниже
		<Link to='/login'>Войти</Link>
	</div>

	</>
)
}


export default RegistrPage;