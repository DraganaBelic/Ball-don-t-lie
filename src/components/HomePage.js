import React, { Component } from 'react';
import { getAllTeams } from '../actions/action';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { getValueAppPropertyStore } from '../util/storeUtil';
import { addEditGlobalPropToStore } from '../util/globalActions';


class HomePage extends Component {

    constructor(props) {
        super(props);
        this.onRowSelect = this.onRowSelect.bind(this)
        this.state = {
            pickedTeam: ''
        }
    }

    componentDidMount() {
        this.props.dispatch(getAllTeams());

    }
    onRowSelect(id, isSelected) {
        this.setState({
            ...this.state,
            pickedTeam: id
        })
    }

    setAsFavourite = () => {
        let favouriteTeam = {
            key: 'favouriteTeam',
            value: this.state.pickedTeam
        }
        this.props.dispatch(addEditGlobalPropToStore(favouriteTeam))
    }
    render() {
        let allTeams = [];
        if (this.props.teams) {
            allTeams = this.props.teams;
        }

        const options = {
            noDataText: 'No data to display',

        }
        const selectRowProp = {
            mode: 'radio',
            bgColor: '#89aae6c4', // you should give a bgcolor, otherwise, you can't regonize which row has been selected
            clickToSelect: true,  // you should enable clickToSelect, otherwise, you can't select column.
            onSelect: this.onRowSelect,
            hideSelectColumn: true

        }
        return (

            <div>
                <fieldset>
                    {/* <img className='img-fluid' src={basketball} /> */}
                    <div className="row col-lg-12">
                        <div className="col-lg-6 table-container">
                            <h3>All teams for the current season</h3>
                            <h3>Click to see more</h3>

                            <BootstrapTable selectRow={selectRowProp} pagination={true} version='4' options={options} data={allTeams} className="table teamsTable" striped bordered hover >
                                <TableHeaderColumn isKey hidden dataField='id'></TableHeaderColumn>
                                <TableHeaderColumn dataField='full_name'>NBA TEAMS</TableHeaderColumn>
                            </BootstrapTable>
                        </div>
                        <div className="col-lg-6 teamDetails">
                            {this.state.pickedTeam &&
                                <div>

                                    <Button onClick={this.setAsFavourite} className="btn-fav">Set as favourite</Button>
                                </div>
                            }
                            <h2>{this.state.pickedTeam.full_name}</h2>
                            {this.state.pickedTeam &&
                                <div className="details">
                                    <p>Division: {this.state.pickedTeam.division}</p>
                                    <p>Conference: {this.state.pickedTeam.conference}</p>
                                    <p>City: {this.state.pickedTeam.city}</p>
                                </div>
                            }
                        </div>
                    </div>

                </fieldset>
            </div>


        );
    }
}
const select = state => {
    return {
        teams: getValueAppPropertyStore(state, 'teams'),
    }
}

export default connect(select)(HomePage)

