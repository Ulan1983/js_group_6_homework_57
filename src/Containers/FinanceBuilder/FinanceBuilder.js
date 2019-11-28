import React, {Component} from 'react';
import ItemControl from "../../Components/ItemControl/ItemControl";
import ListControl from "../../Components/ListControl/ListControl";



class FinanceBuilder extends Component {

	state = {
		items: [
			{text: 'Bottle of water', price: 25},
			{text: 'Milk', price: 40},
			{text: 'Bread', price: 15},
			{text: 'Dinner at cafe', price: 400},
		],
		newItem: '',
		newItemPrice: 0,
		totalPrice: 0
	};




	render() {
		return (
			<div className="finance">
				<ItemControl/>
				<ListControl/>
			</div>
		);
	}
}

export default FinanceBuilder;