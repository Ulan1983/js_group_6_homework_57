import React from 'react';
import './ItemControl.css';

const ItemControl = props => {
	return (
		<div className="item">
			<form onSubmit={props.onSubmit}>
				<input type="text" required placeholder="Item name" onChange={props.onChangeItem}/>
				<input type="number" required placeholder="Cost" className="cost" onChange={props.onChangePrice}/>
				<button type="submit" className="add_btn">Add</button>
			</form>
		</div>
	);
};

export default ItemControl;