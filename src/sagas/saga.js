import { BallDontLie } from "../api/ballDontLie";
import { call, put } from "redux-saga/effects";
import { addEditGlobalPropToStore } from "../util/globalActions";


export function* getAllTeams(action) {
    try {
        let response = yield call(BallDontLie.getAllTeams);
        const teams = {
            key: "teams",
            value: response.data
        }
        yield put(addEditGlobalPropToStore(teams))
    } catch(e) {
        console.log(" error: ", e);
    }
}

export function* getAllPlayers(action) {
    try {
        let response = yield call(BallDontLie.getAllPlayers);
        const players = {
            key: "players",
            value: response.data
        }
        yield put(addEditGlobalPropToStore(players))
    } catch(e) {
        console.log(" error: ", e);
    }
}

export function* getGamesForTeamAndSeason(action) {
    try {
        let response = yield call(BallDontLie.getGamesForTeamAndSeason, action.props.season, action.props.team);
        const games = {
            key: "games",
            value: response.data
        }
        yield put(addEditGlobalPropToStore(games))
    } catch(e) {
        console.log(" error: ", e);
    }
}
export function* getGamesForTeamAndDates(action) {
    try {
        let response = yield call(BallDontLie.getGamesForTeamAndDates, action.props.start_date, action.props.end_date, action.props.team);
        const games = {
            key: "games",
            value: response.data
        }
        yield put(addEditGlobalPropToStore(games))
    } catch(e) {
        console.log(" error: ", e);
    }
}

