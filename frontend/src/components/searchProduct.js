import React ,{ useContext } from 'react';
import { useHistory } from "react-router-dom";
import { ItemCardContext } from './../contexts/main';
import "./main.css"
const SearchProduct = (props) => {
	const itemCardContext = useContext(ItemCardContext);
	const history = useHistory();
    console.log("props",props)
	const cardDetails = async (id) => {
	
		const foundItem = props.item.find((elem) => {
			return elem._id == id
		})
		itemCardContext.setFound(foundItem)
		history.push('/product/details');
	}
    return (
        <>
			<div className="mainBody">
				{props.item.map((elem) => {
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
}

export default SearchProduct;