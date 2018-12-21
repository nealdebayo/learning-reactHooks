import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const appStyle = {
	padding: '20px',
	margin: '10px',
	fontSize: '16px',
	textTransform: 'uppercase',
	fontWeight: 700
}

const Apps = ({apps}) => {
	if (apps) {
		return (
			apps.map(app => 
						<div key = {app} style={appStyle} className="blue darken-1">
							<Link to={app} style = {{color: "white"}}>{app}</Link>
						</div>)
			)
	}
	return null
}

const IntroPage = () => {
	const [apps, setApps] = useState([])
	useEffect(() => {
		axios.get('http://localhost:4000').then(res => setApps(res.data.apps))
	}, [])
	return(	
		<>
			<Apps apps={apps} />
		</>
		)
}


export default IntroPage