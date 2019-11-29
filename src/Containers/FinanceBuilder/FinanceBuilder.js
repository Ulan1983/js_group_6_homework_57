import React, {Component} from 'react';
import nanoid from 'nanoid';
import ItemControl from "../../Components/ItemControl/ItemControl";
import ListControl from "../../Components/ListControl/ListControl";




class FinanceBuilder extends Component {

	state = {
		items: [
			{id: nanoid(), text: 'Bottle of water', price: 25},
			{id: nanoid(), text: 'Milk', price: 40},
			{id: nanoid(), text: 'Bread', price: 15},
			{id: nanoid(), text: 'Dinner at cafe', price: 400},
		],
		newItem: '',
		newItemPrice: 0,
		totalPrice: 0
	};

	createNewItem = event => {
		this.setState({newItem: event.target.value})
	};

	createNewItemPrice = event => {
		let number = parseInt(event.target.value);
		if (number >= 0) {
			this.setState({newItemPrice: event.target.value});
		} else {
			this.setState({newItemPrice: 0});
		}
	};

	getTotalPrice = () => {
		return this.state.items.reduce((total, item) => {
			return total + parseInt(item.price)
		}, 0)
	};

	addNewItem = event => {
		event.preventDefault();

		const items = [...this.state.items];
		items.push({id: nanoid(), text: this.state.newItem, price: this.state.newItemPrice});
		this.setState({items});
	};

	removeItem = id => {
		const items = [...this.state.items];
		const index = this.state.items.findIndex(item => item.id === id);
		items.splice(index, 1);
		this.setState({items})
	};

	render() {
		return (
			<div className="finance">
				<ItemControl
					onChangeItem={this.createNewItem}
					onChangePrice={this.createNewItemPrice}
					onSubmit={this.addNewItem}
				/>
				{this.state.items.map((item) => (
						<ListControl
							key={item.id}
							text={item.text}
							price={item.price}
							onRemove={() => this.removeItem(item.id)}
						/>
				))}
				<p><b>Total spent: {this.getTotalPrice()} KGS</b></p>
			</div>
		);
	}
}

export default FinanceBuilder;