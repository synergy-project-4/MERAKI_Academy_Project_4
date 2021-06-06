import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginContext } from './../../../contexts/login';
import { Link } from "react-router-dom";

const Login = () => {
	const loginContext = useContext(LoginContext);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		loginContext.login();
		if (loginContext.loggedIn) {
		
		}
	};
	return (
		<div>
		<p>website name</p>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="email here"
					onChange={(e) => loginContext.setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="password here"
					onChange={(e) => loginContext.setPassword(e.target.value)}
				/>
				<button>Login</button>
			</form>
            <Link to="/register">Register</Link>
			{loginContext.message && <div>{loginContext.message}</div>}
		</div>
	);
};

export default Login;