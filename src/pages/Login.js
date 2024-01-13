import {useSelector,useDispatch} from 'react-redux'
import { login } from '../redux/states/auth';

function Login () {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const user1 = {
        name:"Batuhan",
        age:23,
        apikey:"12312313"
    };

    return (
        <button onClick={() => dispatch(login(user1))}>Giriş Yap</button>
    )

}

export default Login;