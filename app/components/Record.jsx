import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { addToCart } from '../reducers/cart';

/* --------COMPONENT-----------*/

export const Record = ({record, clickAddToCart}) => (
		<div>
			<div className="container-fluid record-page">
				<img src={record.product && record.product.photo} className="img-thumbnail record-image" />
				<h1>Artist: {record.artist}</h1>
				<h1>Album: {record.title}</h1>
				<h1>Release Date: {record.releaseDate}</h1>
				<h1>Genre: {record.genre}</h1>
				<hr />
				<h1>Rating: Add averageRating functionality</h1>
				<h1>Description: {record.product && record.product.description}</h1>
				<h1>Price: {record.product && record.product.price}</h1>
				<button className="btn btn-primary" type="button" onClick={() => clickAddToCart(record)}>Add to Cart</button>
				<button className="btn background-green" type="button">Add to Wishlist</button>
			</div>
			<div>
				<h2>Reviews</h2>
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">Review Title</h3>
					</div>
					<div className="panel-body">Review Body</div>
				</div>
			</div>
		</div>

);

/* --------CONTAINER-----------*/
const mapStateToProps = ({record}) => ({
	record
});

const mapDispatchToProps = (dispatch) => ({
	clickAddToCart: (product) => {
		dispatch(addToCart(product));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Record);
