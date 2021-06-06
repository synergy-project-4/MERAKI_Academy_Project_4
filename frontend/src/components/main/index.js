import React, { useContext, useEffect,useState } from 'react';
import { ItemCardContext } from './../../contexts/main';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import './main.css'

const Main = () => {
	const [status, setStatus] = useState(true);
	const itemCardContext = useContext(ItemCardContext);
	const history = useHistory();

	useEffect(() => {
		itemCardContext.showProduct();
	}, [status]);

	const cardDetails = async (id) => {
		setStatus(!status);
		const foundItem = itemCardContext.products.find((elem) => {
			return elem._id == id
		})
		itemCardContext.setFound(foundItem)
		history.push('/product/details');
	}

	return (
		<>
			<div className="mainBody">
				{itemCardContext.products.map((elem) => {
					return (
						<div onClick={() => { cardDetails(elem._id) }} className="itemCard" key={elem._id}>
							<p>{elem.title}</p>
							<p>{elem.shortDescription}</p>
							<p>{elem.price}</p>
						</div>
					)
				})}
			</div>
			<div></div>

		</>
	)
};

export default Main;
