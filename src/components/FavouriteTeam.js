import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../containers/Header';
import '../App.css';
import { getAllPlayers, getGamesForTeamAndSeason, getGamesForTeamAndDates } from '../actions/action';
import { getValueAppPropertyStore } from '../util/storeUtil';
import { Field, reduxForm, getFormValues } from "redux-form";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Button } from 'react-bootstrap';


class FavouriteTeam extends Component {

    componentDidMount() {
        this.props.dispatch(getAllPlayers());

    }
    handleSubmit = (values) => {
        if(this.props.formValues && this.props.formValues.start_date && this.props.formValues.end_date) {
            const prop = {
                team: this.props.favourite.id,
                start_date: this.props.formValues.start_date,
                end_date: this.props.formValues.end_date
            }
            this.props.dispatch(getGamesForTeamAndDates(prop));
        }
        else if(this.props.formValues.season ) {

            const prop = {
                season: this.props.formValues.season,
                team: this.props.favourite.id
            }
            this.props.dispatch(getGamesForTeamAndSeason(prop));
        }
    }

    home_team_formatter = (cell, row, field) => {
        return cell[field]
    }
    render() {

        let games = [];
        if (this.props.games) {
            games = this.props.games;
        }

        const options = {
            noDataText: 'No data to display',

        }
        let favourite_team = '';
        if(!this.props.favourite) {
            favourite_team = 'You have not choose favourite team';
        } else {
            favourite_team = this.props.favourite.full_name;
        }

        return (
            <div className= "fav_team"> 
                <Header />
                <fieldset>
                    <div className="row col-lg-12">
                        <div className="col-lg-12">
                            <h3 className="favourite_team">{favourite_team}</h3>
                            <form onSubmit={this.handleSubmit}>
                                <p>Select season: </p>
                                <Field name="season" component="input" label="Enter season" />
                                <p>Select start date: </p>
                                <Field name="start_date" component="input" label="Start date (YYYY-MM-DD)" />
                                <p>Select end date: </p>
                                <Field name="end_date" component="input" label="End date (YYYY-MM-DD)" />
                                <Button onClick={this.handleSubmit}>Search</Button>
                            </form>
                            <BootstrapTable pagination={true} version='4' options={options} data={games} className="table gamesTable" striped bordered hover >
                                <TableHeaderColumn isKey hidden dataField='id'></TableHeaderColumn>
                                <TableHeaderColumn dataField='home_team' dataFormat={this.home_team_formatter} formatExtraData={"full_name"}>Home team</TableHeaderColumn>
                                <TableHeaderColumn dataField='home_team_score'>Home team score</TableHeaderColumn>
                                <TableHeaderColumn dataField='visitor_team' dataFormat={this.home_team_formatter} formatExtraData={"full_name"}>Visitor team</TableHeaderColumn>
                                <TableHeaderColumn dataField='visitor_team_score'>Visitor team score</TableHeaderColumn>
                                <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
                            </BootstrapTable>
                        </div>
                    </div>
                </fieldset>
            </div>
        );
    }
}

const selectFormValues = getFormValues('form');

const select = state => {
    return {
        formValues: selectFormValues(state),
        favourite: getValueAppPropertyStore(state, 'favouriteTeam'),
        players: getValueAppPropertyStore(state, 'players'),
        games: getValueAppPropertyStore(state, 'games'),

    }
}

let createReduxForm = reduxForm({ form: 'form' })

// evaluate it for ContactForm component
FavouriteTeam = createReduxForm(FavouriteTeam)
export default connect(select)(FavouriteTeam)

