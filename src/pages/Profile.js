import {useSelector,useDispatch} from 'react-redux'
import { logout } from '../redux/states/auth';
function Profile () {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    return (
        <>
        <h2>Profile</h2>
        <span>Hoşgeldiniz  {user.name}</span><br/>
        <button onClick={() => dispatch(logout())}>Cikis Yap</button>
        </>
    )

}

export default Profile;