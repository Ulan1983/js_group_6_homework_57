import React from 'react';

const ListControl = props => {
	return (
		<div className="list">
			<p>{props.text}</p>
			<span>{props.price}</span>
			<button className="delete_btn" onClick={props.onRemove}>X</button>
		</div>
	);
};

export default ListControl;