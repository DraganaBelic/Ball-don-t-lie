import { GET_ALL_PLAYERS, GET_ALL_TEAMS, GET_TEAM_BY_ID, SET_TEAM_AS_FAVOURITE, GET_GAMES_FOR_TEAM_AND_SEASON, GET_GAMES_FOR_TEAM_AND_DATES } from "../constants/action";


export function getAllTeams() {
    return{
        type: GET_ALL_TEAMS
    }
}

export function getAllPlayers() {
    return{
        type: GET_ALL_PLAYERS
    }
}
export function getTeamById(team) {
    return{
        type: GET_TEAM_BY_ID,
        team: team
    }
}
export function setTeamAsFavourite(favourite) {
    return{
        type: SET_TEAM_AS_FAVOURITE,
        favourite: favourite
    }
}
export function getGamesForTeamAndSeason(props) {
    return{
        type: GET_GAMES_FOR_TEAM_AND_SEASON,
        props
    }
}
export function getGamesForTeamAndDates(props) {
    return{
        type: GET_GAMES_FOR_TEAM_AND_DATES,
        props
    }
}
