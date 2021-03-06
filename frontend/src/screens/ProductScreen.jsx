import React, { useEffect, useState } from 'react';
import {
	Button,
	Card,
	Col,
	Form,
	Image,
	ListGroup,
	Row,
} from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductScreen = () => {
	const { id } = useParams();

	const [qty, setQty] = useState(1);
	const history = useHistory();

	const dispatch = useDispatch();
	const loading = useSelector(state => state.productDetails.loading);
	const product = useSelector(state => state.productDetails.product);
	const error = useSelector(state => state.productDetails.error);

	useEffect(() => {
		dispatch(listProductDetails(id));
	}, [dispatch, id]);

	const addToCartHandler = () => {
		history.push(`/cart/${id}?qty=${qty}`);
	};

	return (
		<>
			<Link className='btn btn-light my-3' to='/'>
				Go Back
			</Link>

			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Row>
					<Col md={6}>
						<Image src={product.image} alt={product.name} fluid />
					</Col>
					<Col md={3}>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h3>{product.name}</h3>
							</ListGroup.Item>
							<ListGroup.Item>
								<Rating
									value={product.rating}
									text={`${product.numReviews} reviews`}
								/>
							</ListGroup.Item>
							<ListGroup.Item>Price: ${product.price}</ListGroup.Item>
							<ListGroup.Item>
								Description: ${product.description}
							</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col md={3}>
						<Card>
							<ListGroup variant='flush'>
								<ListGroup.Item>
									<Row>
										<Col>Price: </Col>
										<Col>
											<strong>${product.price}</strong>
										</Col>
									</Row>
								</ListGroup.Item>

								<ListGroup.Item>
									<Row>
										<Col>Status: </Col>
										<Col>
											<strong>
												{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
											</strong>
										</Col>
									</Row>
								</ListGroup.Item>

								{product.countInStock > 0 && (
									<ListGroup.Item>
										<Row>
											<Col>Qty</Col>
											<Col>
												<Form.Control
													as='select'
													value={qty}
													onChange={e => setQty(e.target.value)}>
													{[...Array(product.countInStock).keys()].map(x => (
														<option key={x + 1} value={x + 1}>
															{x + 1}
														</option>
													))}
												</Form.Control>
											</Col>
										</Row>
									</ListGroup.Item>
								)}

								<ListGroup.Item>
									<Button
										className='btn-block'
										type='button'
										disabled={product.countInStock === 0}
										onClick={addToCartHandler}>
										Add to Card
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			)}
		</>
	);
};

export default ProductScreen;
