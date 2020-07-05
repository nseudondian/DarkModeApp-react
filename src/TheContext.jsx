import React, { Component } from 'react';


export const ThisContext = React.createContext()

class ThisContextProvider extends Component {
    constructor(){
        super()
        this.state ={
            lightMode : true,
            light : {modeFont:"#ffffff", background:"#ffffff", buttonColor:"#152238"},
            dark : {modeFont:"#152238", background: "#152238", buttonColor: "#ffffff"}
        }
        this.changeTheme = this.changeTheme.bind(this)
    }
    changeTheme = () =>{
        this.setState({
            lightMode : !this.state.lightMode
        })
    }
    render() { 
        return ( 
            <div>
               <ThisContext.Provider value={{...this.state, changeTheme:this.changeTheme}}>
                   {this.props.children}
               </ThisContext.Provider>
            </div>
         );
    }
}
 
export default ThisContextProvider;