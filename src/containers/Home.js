import React, {Component} from 'react';
import HomePage from '../components/HomePage';
import { connect } from 'react-redux';
import Header from './Header';


class Home extends Component {

    render() {
        return (
            <div>

                <Header/>
                <HomePage dispatch = {this.props.dispatch}/>
            </div>
        )
    }
}

export default connect()(Home)