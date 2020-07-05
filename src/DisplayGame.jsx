import React, { Component } from 'react';
import './index.css'
import { ThisContext } from './TheContext';


class DisplayGame extends Component {
    constructor(){
        super()
        this.state ={
            stakes : 8,
            unit : 40.02,
            bet_price: 0,
            winning_average : 20
        }
        this.handleStake = this.handleStake.bind(this)
        this.handlePrice = this.handlePrice.bind(this)
        this.xxPrice = this.xxPrice.bind(this)
        this.xxStake = this.xxStake.bind(this)
    }
    handleStake(){
        this.setState({
            stakes : this.state.stakes *4
        })
    }
    handlePrice(){
        this.setState({
            bet_price : this.state.bet_price + this.state.unit
        })
    }
    xxPrice(){
        this.setState({
            bet_price : this.state.bet_price *0
        })
    }
    xxStake(){
        this.setState({
            stakes : this.state.stakes *0 + 8
        })
    }
    static contextType = ThisContext
    render() { 
        const {lightMode, light, dark} = this.context
        const useTheme = lightMode? light : dark
        return ( 
            <div className="first-div" style={{backgroundColor:useTheme.background}}>
                <button className="my-button" style={{color:useTheme.modeFont, backgroundColor:useTheme.buttonColor}}>{this.state.stakes}</button>
                <button className="my-button" style={{color:useTheme.modeFont, backgroundColor:useTheme.buttonColor}}>{this.state.unit}</button>
                <button className="my-button" style={{color:useTheme.modeFont, backgroundColor:useTheme.buttonColor}}>{this.state.bet_price}</button>
                <button className="my-button" style={{color:useTheme.modeFont, backgroundColor:useTheme.buttonColor}}>{this.state.winning_average}</button>                
                <div className="second-div">  
                    <button className="second-button"  style={{color:useTheme.modeFont, backgroundColor:useTheme.buttonColor}}onClick={this.handleStake}>+stakes</button>
                    <button className="second-button" style={{color:useTheme.modeFont, backgroundColor:useTheme.buttonColor}}onClick={this.handlePrice}>+price</button>
                    <button className="second-button" style={{color:useTheme.modeFont, backgroundColor:useTheme.buttonColor}}onClick={this.xxStake}>-stakes</button>
                    <button className="second-button" style={{color:useTheme.modeFont, backgroundColor:useTheme.buttonColor}}onClick={this.xxPrice}>-price</button>
                </div>
            </div>
            
         );
    }
}
 
export default DisplayGame;