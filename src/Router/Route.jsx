import {Route, Switch} from "react-router-dom";
import Dashboard from '../PAges/Dashbord';
import Home from '../PAges/Home';
import Login from '../PAges/Login';
import Settings from '../PAges/Setting';
import User from '../PAges/User';
import PrivetRoute from './PrivetRout';

export default function AllpageRouts() {
    return (
        <>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
            <PrivetRoute exact={true} path="/dashbord">
                <Dashboard/>
            </PrivetRoute>
            <PrivetRoute exact={true} path="/dashbord/settings">
                <Settings/>
            </PrivetRoute>
            <PrivetRoute exact={true} path="/dashbord/settings/user">
                <User/>
            </PrivetRoute>
        </Switch>
        </>
    )
}