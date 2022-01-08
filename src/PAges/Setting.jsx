import { useContext } from 'react';
import {AuthContext} from '../Context/AuthContext';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Settings() {

    const [Auth, {handleSignOut}] = useContext(AuthContext);

return (
    <div>
        <h3>Well come to setting PAge</h3>
        <div>
        <Button size="medium" onClick={handleSignOut}>Sign Out</Button>
        </div>
        <Link to="/dashbord/settings/user">User Details</Link>
    </div>
)

}