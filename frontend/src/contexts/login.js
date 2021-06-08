import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom"
import axios from 'axios';
import jwt from 'jsonwebtoken';

export const LoginContext = React.createContext();

const LoginProvider = (props) => {
	const history = useHistory()
	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');
	const [loggedIn, setLoggedIn] = useState(false);
	const [token, setToken] = useState('');
	

	const state = {
		setEmail,
		setPassword,
		message,
		login,
		token,
		loggedIn,
		
	};

	useEffect(() => {
		saveToken(localStorage.getItem('token'));
	}, []);

	function saveToken(token) {
		const user = jwt.decode(token);
		if (user) {
			setToken(token);
			localStorage.setItem('token', token);
		}
	}

	async function login() {
		try {
			const res = await axios.post('http://localhost:5000/login', {
				email,
				password,
			});

			saveToken(res.data.token);
			history.push("/");
			setLoggedIn(true);
		} catch (error) {
		}
	}


	return (
		<LoginContext.Provider value={state}>
			{props.children}
		</LoginContext.Provider>
	);
};

export default LoginProvider;