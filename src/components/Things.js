import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { newItem } from '../actions/index.js'
import store from '../store.js'

// import thingsReducer from '../reducers/thingsReducer'

// receives an array of things from a Redux store ['hummus', 'celery', 'cucumber']
// has a form with one controlled text input and a submit button
// on form submission, the user's input is added to 'things' in the Redux store
// renders the list of things

class Things extends React.Component {

    submit = (e) => {
        console.log("test")
        e.preventDefault();
        return store.dispatch;
    }

    render() {
        return(
            <>
                <button onClick={this.props.history.goBack}>Go back!</button>
                <ul>
                    {this.props.all.map((item, index) => <li key={ index }>{ item }</li>)}
                </ul>
                <form onSubmit={this.submit}>
                    <input type="text" id="foodInput"/>
                    <input type="submit" value="Submit"/>
                </form>
            </>
        )
    }
}

const mSTP = state => ({ all: state.all })

export default connect(mSTP)(Things);