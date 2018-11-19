// CartList.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

 //TODO: PureComponent

export default class CartList extends Component {
    constructor(props) {
        super(props);
    }
     
    //TODO: shouldComponentUpdate
    shouldComponentUpdate(nextProps, nextState) {
        console.log('cart list should update');
        console.log('next props ', nextProps);
        console.log('next state', nextState);

        if(nextProps.items != this.props.items){
            return true;
        }
        
        return false;
    }
    
    render() {
        console.log("CartList Render");

        let {items} = this.props;

        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO props items map with CartItem */ }
                    {
                        items.map(item => (
                            <CartItem 
                                key = {item.id}
                                item = {item}
                                removeItem={this.props.removeItem}
                                updateItem={this.props.updateItem}
                            />
                        ))
                    }
                </tbody>
            </table>
            </div>
        )
    }
} 

CartList.defaultProps = {
    
}

//isRequired makes the props mandatory
CartList.propTypes = {
    items:PropTypes.array.isRequired,
    removeItem:PropTypes.func.isRequired,
    updateItem:PropTypes.func.isRequired
}