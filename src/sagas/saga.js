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
        console.log("getAllTeams error: ", e);
    }
}

export function* getAllPlayers(action) {
    console.log("SAGA");
    try {
        let response = yield call(BallDontLie.getAllPlayers);
        const players = {
            key: "players",
            value: response.data
        }
        yield put(addEditGlobalPropToStore(players))
    } catch(e) {
        console.log("getAllPlayers error: ", e);
    }
}

export function* getGamesForTeamAndSeason(action) {
    console.log("ACTION getGamesForTeamAndSeason", action.props);
    try {
        let response = yield call(BallDontLie.getGamesForTeamAndSeason, action.props.season, action.props.team);
        console.log("GAMES RESPONSE", response.data);
        const games = {
            key: "games",
            value: response.data
        }
        yield put(addEditGlobalPropToStore(games))
    } catch(e) {
        console.log("getAllPlayers error: ", e);
    }
}

