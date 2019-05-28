import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { routes } from '../constants/routes';
import FavouriteTeam from '../components/FavouriteTeam';
import { ConnectedRouter} from 'connected-react-router'
import Home from '../containers/Home';



export const MyRouter = (props) => {
    return <ConnectedRouter history={props.history}>
    <Switch>
        <Route exact  path={"/"} component={Home} />
        <Route exact  path={routes.FAVOURITE_TEAM} component={FavouriteTeam} />
        <Route exact  path={routes.FAVOURITE_PLAYERS} component={FavouriteTeam} />
    </Switch>
  </ConnectedRouter>
}
   







