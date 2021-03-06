import React from 'react';

export const CartTable = ({cart, itemQuantityChange, removeFromCartClick, isWishlist}) => (
	<table className="admin-table">
		<thead>
		<tr>
			<th>Name</th>
			<th>Price</th>
			<th>Quantity</th>
			{ isWishlist ? null : (<th>Delete</th>)}
		</tr>
		</thead>
		<tbody>
		{cart.map((item, idx) => (
			<tr key={idx}>
				<td>{item.product.name}</td>
				<td>${item.product.price}</td>
				<td>{
					isWishlist ? item.quantity : (
							<input
								type="number"
								min="0"
								value={item.quantity}
								className="col-md-2 cart-quantity"
								onChange={(evt) => itemQuantityChange(item.product, evt.target.value)}
							/>
						)
				}</td>
				{ isWishlist ? null : (<td><a href="#" onClick={() => removeFromCartClick(item.product)} className="btn btn-primary">Delete</a></td>) }
			</tr>
		))}
		</tbody>
	</table>
);
