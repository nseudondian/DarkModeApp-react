import React, { Component } from 'react';
import { ThisContext } from './TheContext';
import "./index.css"

class Xtheme extends Component {
    
    static contextType = ThisContext
    render() { 
        const {changeTheme} = this.context
        return (  
            <button className="mode-button" onClick={changeTheme}>Mode</button>
        );
    }
}
 
export default Xtheme;