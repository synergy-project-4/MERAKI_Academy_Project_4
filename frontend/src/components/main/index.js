import React, { useContext, useEffect } from 'react';
import { ItemCardContext } from './../../contexts/main';
import './main.css'

const Main = () => {
	const itemCardContext = useContext(ItemCardContext);

	useEffect(() => {
		itemCardContext.showProduct();
	}, []);

	return (
		<>
		 <div className="mainBody"> 
			{itemCardContext.products.map((elem) => {
			return(
			<div className="itemCard" key={elem._id}>
					<p>{elem.title}</p>
					<p>{elem.shortDescription}</p>
					<p>{elem.price}</p>
				</div>	
				)
			})}
			</div>

		</>
	)
};

export default Main;
