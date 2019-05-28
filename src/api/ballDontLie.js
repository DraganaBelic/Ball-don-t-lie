import {DEFAULT_REST_PARAMS_GET} from './../util/apiUtil'

export class BallDontLie {


    static getAllTeams() {
        let request = {
            ...DEFAULT_REST_PARAMS_GET
        }

        let restEndpoint = "https://www.balldontlie.io/api/v1/teams";

        return fetch(restEndpoint, request
        ).then(
            (response) => response.json()
        ).then((responseJson) => {
            return responseJson;
        }).catch((error) => {
            throw error;
        });
    }
    static getAllPlayers() {
        let request = {
            ...DEFAULT_REST_PARAMS_GET
        }

        let restEndpoint = "https://www.balldontlie.io/api/v1/players/";

        return fetch(restEndpoint, request
        ).then(
            (response) => response.json()
        ).then((responseJson) => {
            return responseJson;
        }).catch((error) => {
            throw error;
        });
    }

    static getTeamById(id) {
        let request = {
            ...DEFAULT_REST_PARAMS_GET
        }

        let restEndpoint = "https://www.balldontlie.io/api/v1/teams/"+id;

        return fetch(restEndpoint, request
        ).then(
            (response) => response.json()
        ).then((responseJson) => {
            return responseJson;
        }).catch((error) => {
            throw error;
        });
    }

    static getGamesForTeamAndSeason(season, team) {
        let request = {
            ...DEFAULT_REST_PARAMS_GET
        }
        let restEndpoint = "https://www.balldontlie.io/api/v1/games/?seasons[]="+season+"&team_ids[]="+team;

        return fetch(restEndpoint, request
            ).then(
                (response) => response.json()
            ).then((responseJson) => {
                return responseJson;
            }).catch((error) => {
                throw error;
            });
    }
}


