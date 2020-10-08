import React, { Component } from 'react'
import Slider from '../Components/Slider'

interface ValueProps {
    valueType: string;
}

interface ValueState {

}

class Value extends Component<ValueProps, ValueState> {
    render() {
        return (
            <div>
                {this.props.valueType}
                < Slider />
            </div>
        )
    }
}

export default Value;