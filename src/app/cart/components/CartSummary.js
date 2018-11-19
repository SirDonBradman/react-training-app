// CartSummary.js
import React, {Component, PureComponent} from "react";
import PropTypes from "prop-types";

//TODO: PropTypes

// TODO: PureComponent
export default class CartSummary extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            discount: 0,
            grandTotal: 0
        }
    }
 
    //TODO: componentWillMount
    componentWillMount(){
        this.recalculate(this.props);
    }

    //TODO: componentWillReceiveProps, recalculate 
    componentWillReceiveProps(nextProps) {
        if(this.props.amount != nextProps.amount || this.props.count != nextProps.count)
            this.recalculate(nextProps);
    }
 
    //TODO: shouldComponentUpdate
    // shouldComponentUpdate(nextProps, nextState){
    //     return true;
    // }

    recalculate(props) {
        let discount = 0;

        if (props.count >= 10) {
            discount = 20;
        } else if (props.count >= 5) {
            discount = 10;
        }

        let grandTotal = props.amount - (props.amount * discount / 100);

        this.setState({
            discount, 
            grandTotal
        })
    }
     


    
    render() {
        console.log("CartSummary Render");
        return (
            <div> 
            <h2>Cart Summary</h2>
            <p> Amount : {this.props.amount} </p>
            <p> Count : {this.props.count} </p>

            <p> Discount: {this.state.discount} %</p>
            <p> Grand Total: {this.state.grandTotal} </p>
            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}