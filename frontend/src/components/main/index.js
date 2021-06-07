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
	}, [itemCardContext.offset]);

	const cardDetails = async (id) => {

		const foundItem = itemCardContext.products.find((elem) => {
			return elem._id == id
		})
		itemCardContext.setFound(foundItem)
		history.push('/product/details');
	}

	const handlePageClick = (e) => {
		const selectedPage = e.selected;
		itemCardContext.setOffset(selectedPage * itemCardContext.perPage)
	};

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
								<img className="image" src="https://m.media-amazon.com/images/I/81-7VeKHsSL.jpg"></img>
							</div>
						)
					})
				}
			</div>
			<div className="">
				<ReactPaginate
					previousLabel={"prev"}
					nextLabel={"next"}
					breakLabel={"..."}
					breakClassName={"break-me"}
					pageCount={itemCardContext.pageCount}
					marginPagesDisplayed={2}
					pageRangeDisplayed={5}
					onPageChange={handlePageClick}
					containerClassName={"pagination"}
					subContainerClassName={"pages pagination"}
					activeClassName={"active"} />
			</div>


		</>
	)
};

export default Main;
