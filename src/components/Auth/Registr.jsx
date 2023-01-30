import {Form} from "./Form";
import {useDispatch} from 'react-redux'
import {setUser} from '../Redux/slices/userSlice'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//stas.rogal2@gmail.com

const Registr = () =>{

const dispatch=useDispatch()


const handleRegistr=(email, password)=>{
	const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
.then(({user})=>{
console.log(user)
dispatch(setUser({
	email: user.email,
	id: user.uid,
	token: user.accessToken,
}));
}).catch(console.error)
}

return  (
	<>
<Form title='Зарегистрироваться' handleClick={handleRegistr}/>

	</>
)
}


export {Registr};