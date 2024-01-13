import About from './pages/About'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'

export const routes = [
    {
        path:'/',
        exact:true,
        component:Home,
        auth:false
    },
    {
        path:'/About',
        exact:true,
        component:About,
        auth:false
    },
    {
        path:'/Login',
        exact:true,
        component:Login,
        auth:false
    },
    {
        path:'/Profile',
        exact:true,
        component:Profile,
        redirect : Login,
        auth:true
    }

]