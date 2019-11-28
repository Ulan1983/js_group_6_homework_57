import React from 'react';

const ItemControl = props => {
	return (
		<div className="item">
			<form onSubmit={props.onSubmit}>
				<input type="text" required placeholder="Item name" />
				<input type="number" required placeholder="Cost" className="cost" />
				<button type="submit" className="add_btn">Add</button>
			</form>
		</div>
	);
};

export default ItemControl;