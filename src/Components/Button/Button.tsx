import React, { Component } from 'react';

import './Button.css'

interface ButtonProps {
    
}

interface ButtonState {

}

class Button extends Component<ButtonProps, ButtonState> {
    render() {
        return (
            <div className='Button'>
              <span>Search</span>
            </div>
        )
    }
}

export default Button;