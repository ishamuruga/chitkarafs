import {useRoutes} from 'react-router-dom'
import Aboutus from './aboutus'
import Dashboard from './dashboard'
import Login from './login'
import Pagenotfound from './pagenotfound'
import ProtectedRoute from './protectedroute'

const RouterConfig = () => {
    const routes = useRoutes([
        {path:"/",element:<Login/>},
        {path:"/login",element:<Login/>},
        {path:"/dashboard",element:(
            <ProtectedRoute>
                <Dashboard/>
            </ProtectedRoute>
        )},
        {path:"/aboutus",element:<Aboutus/>},
        {path:"*",element:<Pagenotfound/>}
    ])

    return routes;
}

export {RouterConfig};