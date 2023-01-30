import {Form} from "./Form";
import {useDispatch} from 'react-redux'
import {setUser} from '../Redux/slices/userSlice'
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";


const Login = () =>{

const dispatch=useDispatch()


const handleLogin=(email, password)=>{
	const auth = getAuth();
signInWithEmailAndPassword (auth, email, password).then(({user})=>{
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
<Form title='Войти' handleClick={handleLogin}/>

	</>
)
}


export {Login};