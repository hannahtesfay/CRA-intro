import React from 'react';
import { withRouter } from 'react-router-dom'

class Counter extends React.Component {
    state = { key: 0}
        
    handleClick = (e) => {
        e.target.id === "increase" ? this.setState(prevState => ({key: prevState.key ++})) : this.setState(prevState => ({key: prevState.key --}))
    }


    render() {
        return(
            <>
                <button onClick={this.props.history.goBack}>Go back!</button>
                <br/>
                <span>Counter - {this.state.key}</span>
                <button id="increase" onClick={this.handleClick}>Increase</button>
                <button id="decrease" onClick={this.handleClick}>Decrease</button>
            </>
        )
    }
}

export default Counter;