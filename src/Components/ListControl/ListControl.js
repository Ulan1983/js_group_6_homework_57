import React from 'react';
import './ListControl.css';

const ListControl = props => {
	return (
		<div className="list">
				<span className="list_text"> {props.text} </span>
				<span> {props.price} KGS</span>
				<button className="delete_btn" onClick={props.onRemove}>X</button>
		</div>
	);
};

export default ListControl;