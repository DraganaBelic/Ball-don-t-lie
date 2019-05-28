import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../containers/Header';
import '../App.css';
import { getAllPlayers, getGamesForTeamAndSeason } from '../actions/action';
import { getValueAppPropertyStore } from '../util/storeUtil';
import { Field, reduxForm, getFormValues } from "redux-form";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Button } from 'react-bootstrap';





class FavouriteTeam extends Component {


    componentDidMount() {
        this.props.dispatch(getAllPlayers());

    }
    handleSubmit = (values) => {
        console.log("handle values", values)
        const prop = {
            season: this.props.formValues.season,
            team: this.props.favourite.id
        }
        this.props.dispatch(getGamesForTeamAndSeason(prop));

    }
    render() {

        let games = [];
        if (this.props.games) {
            games = this.props.games;
        }

        const options = {
            noDataText: 'No data to display',

        }

        return (
            <div>
                <Header />
                <fieldset>
                    <div className="row col-lg-12">
                        <div className="col-lg-12">
                            <form onSubmit={this.handleSubmit}>
                                <p>Select season: </p>
                                <Field name="season" component="input" label="Select season" />
                                <Button onClick={this.handleSubmit}>Search</Button>
                            </form>
                            <BootstrapTable pagination={true} version='4' options={options} data={games} className="table teamsTable" striped bordered hover >
                                <TableHeaderColumn isKey hidden dataField='id'></TableHeaderColumn>
                                <TableHeaderColumn dataField='date'>Games</TableHeaderColumn>
                            </BootstrapTable>
                        </div>
                    </div>
                </fieldset>
            </div>
        );
    }
}

const selectFormValues = getFormValues('contact');

const select = state => {
    console.log("FAVOURITE STATE", state);
    return {
        formValues: selectFormValues(state),
        favourite: getValueAppPropertyStore(state, 'favouriteTeam'),
        players: getValueAppPropertyStore(state, 'players'),
        games: getValueAppPropertyStore(state, 'games'),

    }
}

let createReduxForm = reduxForm({ form: 'contact' })

// evaluate it for ContactForm component
FavouriteTeam = createReduxForm(FavouriteTeam)
export default connect(select)(FavouriteTeam)

