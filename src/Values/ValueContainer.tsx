import React, { Component } from 'react'

import Value from './Value'

interface ValueState {
    
}

class ValueContainer extends Component<ValueState> {
    render() {
        return (
            <div className='ValueContainer'>
                {[1, 2, 3, 4, 5].map(() => < Value /> )}
                
            </div>
        )
    }
}

export default ValueContainer;