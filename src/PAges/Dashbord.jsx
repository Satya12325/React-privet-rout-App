import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../Context/AuthContext';
import Button from '@mui/material/Button';

export default function Dashboard(){

    const [Auth, {handleSignOut}] = useContext(AuthContext);

    return (
        <div>
            <h3>welcome to My Dashboard</h3>
            <div>
            <Button size="medium" onClick={handleSignOut}>SIGN OUT</Button>
            </div>
            <div>
                <Link to="/dashbord/settings/">SETTINGS</Link>
            </div>
        </div>
    )
}