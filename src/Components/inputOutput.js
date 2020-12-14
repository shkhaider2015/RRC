import React, { Component } from 'react';
import { connect } from "react-redux";


const MapStateToProps = state => 
{
    return {
        value : state.value
    }
}

class InputOutput extends Component {

    constructor(props) {
        super()
        this.state = {
            value : 0
        }
    }

    handleClick = () =>
    {
        this.props.dispatch({ type: 'INCREMENT' })
    }

    handleClickN = () =>
    {
        this.props.dispatch({ type : 'DECREMENT'})
    }
    
    

    render() {
        return (
            <div>
                Counter Value is {this.props.value}

                <div>
                    <button onClick={this.handleClick} >+</button>
                    <button onClick={this.handleClickN} >-</button>
                </div>
            </div>
        );
    }
}

// export default InputOutput;

export default connect(MapStateToProps)(InputOutput)