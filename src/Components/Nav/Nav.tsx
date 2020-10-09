import React, { Component } from 'react';

import './Nav.css'

interface NavProps {
    
}

interface NavState {

}

class Nav extends Component<NavProps, NavState> {
    render() {
        return (
            <div className='Nav'>
                <div>Home</div>
                <div>Search</div>
                <div>Logout</div>
            </div>
        )
    }
}

export default Nav;