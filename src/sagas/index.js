
import {GET_ALL_PLAYERS, GET_GAMES_FOR_TEAM_AND_SEASON, GET_GAMES_FOR_TEAM_AND_DATES, GET_ALL_TEAMS, reducerActions} from '../constants/action'
import { takeEvery, all } from 'redux-saga/effects'
import { getAllTeams, getAllPlayers, getGamesForTeamAndSeason, getGamesForTeamAndDates } from './saga';
import { addEditGlobalPropToStore } from '../util/globalActions';


function* watchLoadTradesRequest() {    

  yield takeEvery(GET_ALL_TEAMS, getAllTeams);
  yield takeEvery(GET_ALL_PLAYERS, getAllPlayers);
  yield takeEvery(GET_GAMES_FOR_TEAM_AND_SEASON, getGamesForTeamAndSeason);
  yield takeEvery(GET_GAMES_FOR_TEAM_AND_DATES, getGamesForTeamAndDates);
  yield takeEvery(reducerActions.ADD_EDIT_GLOBAL_PROP_IN_STORE, addEditGlobalPropToStore)
}

export function* sagas() {
  yield all ([
      watchLoadTradesRequest()
  ])
}

