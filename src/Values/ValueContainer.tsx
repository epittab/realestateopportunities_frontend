import React, { Component } from 'react'

import Value from './Value'

interface ValueState {
    
}

class ValueContainer extends Component<ValueState> {
    render() {
        return (
            <div className='ValueContainer'>
                {['price', 'size', 'beds', 'baths', 'full_baths'].map(type => < Value valueType={type} /> )}
                
            </div>
        )
    }
}

export default ValueContainer;