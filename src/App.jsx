import React, { Component } from 'react';
import DisplayGame from './DisplayGame'
import ThisContextProvider from './TheContext';
import Xtheme from './Xtheme';



class App extends Component {
    
    render() { 
        return ( 
            <div>
                <ThisContextProvider>
                    <DisplayGame />
                    <Xtheme />
                </ThisContextProvider>
                
            </div>
         );
    }
}
 
export default App;