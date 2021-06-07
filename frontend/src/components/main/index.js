import React, { useContext, useEffect, useState } from 'react';
import { ItemCardContext } from './../../contexts/main';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import './main.css'

const Main = () => {
	const itemCardContext = useContext(ItemCardContext);
	const history = useHistory();
	const [postData, setPostData] = useState([])


	useEffect(() => {
		itemCardContext.showProduct();

	}, []);

	const cardDetails = async (id) => {

		const foundItem = itemCardContext.products.find((elem) => {
			return elem._id == id
		})
		itemCardContext.setFound(foundItem)
		history.push('/product/details');
	}

	return (
		<>
			<div className="mainBody">
				{
					itemCardContext.products.map((elem) => {
						return (
							<div onClick={() => { cardDetails(elem._id) }} className="itemCard" key={elem._id}>
								<p>{elem.title}</p>
								<p>{elem.shortDescription}</p>
								<p>{elem.price}</p>
							</div>
						)
					})
				}
			</div>
			<div onClick={() => {
				itemCardContext.showProduct();

				itemCardContext.setOffset(itemCardContext.offset + itemCardContext.perPage)
			}}>
				ssssss
			</div>

		</>
	)
};

export default Main;
