import {useContext} from 'react';
import {Redirect} from 'react-router-dom';
import {Route} from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';


export default function PrivetRoute({path, exact,children}){
    const [Auth] = useContext(AuthContext);
    if (!Auth){
        return <Redirect to='/login'/>
    }

    return (
        <Route path={path} exact={exact}>
            {children}
        </Route>
    )
}
