// Cart.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [ 
            			{id: 1, name: 'P1', price: 100, qty: 5}
            	   ],
            amount: 0, // sum of all items price * qty
            count: 0, // sum of all items qty
            flag: true
        }
    }
    
    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        let item = {
            id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        //TODO:
        const items = [...this.state.items, item];

        this.setState({
            items:items
        });
        this.recalculate(items);
    }
    
    removeItem = (id) => {
        let items = this.state.items.filter(function(item){
            return item.id!=id;
        });

        this.setState({
            items:items
        });
        this.recalculate(items);
    }

    updateItem = (id, qty) => {
        let items = this.state.items.map(item =>{
            if(item.id == id){
                return {...item, qty:qty};
            }
            return item;
        })
        this.setState({
            items:items
        });
        this.recalculate(items);
    }

    empty = () => {
        let items = [];

        this.setState({
            items:items
        });
        this.recalculate(items);
    }

    //dummy
    refresh = () => {
        this.setState({
            flag: true
        })
    }

    // derived data from state
    recalculate = (items) =>{
        let count = 0, 
            amount = 0;

        for (let item of items) {
            amount += item.price * item.qty;
            count += item.qty;
        }

        this.setState({
            amount,
            count
        })
    }

    //TODO:
    componentWillMount(){
        console.log('Cart component will mount');
        this.recalculate(this.state.items);
    }
    
    
    render() {
        console.log("Cart render")
        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={this.addItem}>
                Add Item
            </button>


            <button onClick={this.empty}>
                Empty
            </button>

            <button onClick={this.refresh}>
                Refresh
            </button>
            

            <CartList  items={this.state.items}  
                       removeItem={this.removeItem}
                       updateItem={this.updateItem}
            />

            <CartSummary amount={this.state.amount}
                         count = {this.state.count}
            />

            </div>
        )
    }
} 


Cart.defaultProps = {
    
}

Cart.propTypes = {
    
}