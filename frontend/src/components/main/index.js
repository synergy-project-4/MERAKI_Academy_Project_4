import React, { useContext, useEffect } from 'react';
import { ItemCardContext } from './../../contexts/main';

const Main = () => {
	console.log("step 1");
	const itemCardContext = useContext(ItemCardContext);

	useEffect(() => {
		console.log("step 2");
		itemCardContext.showProduct();
	}, []);

	return (
		<>
			{itemCardContext.products.map((elem) => {
				console.log("step 3");
				<div key={elem._id}>
					<p>{elem.title}</p>
					<p>{elem.shortDescription}</p>
					<p>{elem.price}</p>
				</div>
			})}

		</>
	)
};

export default Main;
